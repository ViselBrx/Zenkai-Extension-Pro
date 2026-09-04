import 'dotenv/config';
import http from 'node:http';
import DodoPayments from 'dodopayments';

const port = Number(process.env.PORT || 8787);
const environment = process.env.DODO_PAYMENTS_ENVIRONMENT === 'live_mode'
  ? 'live_mode'
  : 'test_mode';
const allowedOrigin = process.env.ALLOWED_ORIGIN || 'http://localhost:3000';

function required(name) {
  const value = process.env[name]?.trim();
  if (!value) throw new Error(`Missing environment variable: ${name}`);
  return value;
}

function client() {
  return new DodoPayments({
    bearerToken: required('DODO_PAYMENTS_API_KEY'),
    environment
  });
}

function send(response, status, payload) {
  response.writeHead(status, {
    'content-type': 'application/json; charset=utf-8',
    'access-control-allow-origin': allowedOrigin,
    'access-control-allow-headers': 'content-type',
    'access-control-allow-methods': 'GET,POST,OPTIONS'
  });
  response.end(JSON.stringify(payload));
}

function sendHtml(response, status, html) {
  response.writeHead(status, {
    'content-type': 'text/html; charset=utf-8',
    'access-control-allow-origin': allowedOrigin
  });
  response.end(html);
}

async function body(request) {
  const chunks = [];
  for await (const chunk of request) chunks.push(chunk);
  return Buffer.concat(chunks).toString('utf8');
}

async function handle(request, response) {
  if (request.method === 'OPTIONS') return send(response, 204, {});
  if (request.method === 'GET' && request.url === '/health') {
    return send(response, 200, { ok: true, environment });
  }

  if (request.method === 'GET' && request.url?.startsWith('/checkout/success')) {
    return sendHtml(response, 200, `<!doctype html>
      <html lang="en"><head><meta charset="utf-8"><title>Zenkai Pro - Payment successful</title>
      <style>body{margin:0;background:#0b0b0c;color:#e8ebff;font:16px system-ui;text-align:center;padding:15vh 20px}main{max-width:560px;margin:auto;border:1px solid #28f5ff;border-radius:18px;padding:42px;box-shadow:0 0 30px #28f5ff44}h1{color:#48ff9a}p{color:#c8cbe0}</style></head>
      <body><main><h1>Payment successful ⚡</h1><p>Your Zenkai Pro test payment was completed.</p><p>Check the backend terminal and Dodo dashboard for the license event.</p></main></body></html>`);
  }

  if (request.method === 'POST' && request.url === '/api/checkout') {
    const data = JSON.parse(await body(request) || '{}');
    if (!data.email || typeof data.email !== 'string') {
      return send(response, 400, { error: 'A customer email is required.' });
    }

    const session = await client().checkoutSessions.create({
      product_cart: [{ product_id: required('DODO_PRODUCT_ID'), quantity: 1 }],
      customer: { email: data.email.trim(), name: data.name?.trim() || undefined },
      allowed_payment_method_types: ['pix', 'credit', 'debit'],
      billing_currency: 'BRL',
      billing_address: { country: 'BR' },
      return_url: process.env.CHECKOUT_RETURN_URL || 'http://localhost:8787/checkout/success'
    });

    return send(response, 200, { checkout_url: session.checkout_url });
  }

  if (request.method === 'POST' && request.url === '/webhooks/dodo') {
    const raw = await body(request);
    const verified = client().webhooks.unwrap(raw, {
      headers: {
        'webhook-id': request.headers['webhook-id'] || '',
        'webhook-signature': request.headers['webhook-signature'] || '',
        'webhook-timestamp': request.headers['webhook-timestamp'] || ''
      }
    });

    if (verified.type === 'payment.succeeded' || verified.type === 'license_key.created') {
      console.log(`[Dodo] ${verified.type}`, verified.data?.payment_id || verified.data?.license_key);
      // Próximo passo: persistir o evento e enviar a license key ao comprador.
    }

    return send(response, 200, { received: true });
  }

  return send(response, 404, { error: 'Not found' });
}

const server = http.createServer((request, response) => {
  handle(request, response).catch((error) => {
    console.error(error);
    send(response, error.message.includes('Invalid') ? 401 : 500, { error: 'Request failed' });
  });
});

server.listen(port, () => console.log(`Zenkai billing backend listening on http://localhost:${port} (${environment})`));
