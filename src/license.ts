import * as vscode from 'vscode';
const LICENSE_KEY_SETTING = 'licenseKey';
const ACTIVATION_ID_STATE = 'dodoLicenseActivationId';

function getApiBaseUrl(): string {
  return process.env.ZENKAI_DODO_ENVIRONMENT === 'test_mode'
    ? 'https://test.dodopayments.com'
    : 'https://live.dodopayments.com';
}

async function publicLicenseRequest<T>(path: string, body: Record<string, unknown>): Promise<T> {
  const response = await fetch(`${getApiBaseUrl()}${path}`, {
    method: 'POST',
    headers: { 'content-type': 'application/json' },
    body: JSON.stringify(body)
  });

  if (!response.ok) {
    throw new Error(`Dodo license request failed: ${response.status}`);
  }

  return response.json() as Promise<T>;
}

export function getLicenseKey(): string {
  return vscode.workspace
    .getConfiguration('zenkaiPro')
    .get<string>(LICENSE_KEY_SETTING, '')
    .trim();
}

export async function saveLicenseKey(key: string): Promise<void> {
  await vscode.workspace
    .getConfiguration('zenkaiPro')
    .update(LICENSE_KEY_SETTING, key.trim(), vscode.ConfigurationTarget.Global);
}

export async function validateOrActivateLicense(
  context: vscode.ExtensionContext,
  licenseKey: string
): Promise<boolean> {
  const key = licenseKey.trim();
  if (!key) {
    return false;
  }

  try {
    const validation = await publicLicenseRequest<{ valid?: boolean }>('/licenses/validate', {
      license_key: key
    });
    if (validation.valid === true) {
      return true;
    }

    const activation = await publicLicenseRequest<{ id?: string }>('/licenses/activate', {
      license_key: key,
      name: `Zenkai Pro - ${vscode.env.machineId.slice(0, 16)}`
    });

    if (typeof activation.id !== 'string' || activation.id.length === 0) {
      return false;
    }

    await context.globalState.update(ACTIVATION_ID_STATE, activation.id);
    const postActivationValidation = await publicLicenseRequest<{ valid?: boolean }>('/licenses/validate', {
      license_key: key
    });
    return postActivationValidation.valid === true;
  } catch {
    return false;
  }
}

export async function deactivateLicense(
  context: vscode.ExtensionContext,
  licenseKey: string
): Promise<void> {
  const activationId = context.globalState.get<string>(ACTIVATION_ID_STATE);
  if (licenseKey && activationId) {
    try {
      await publicLicenseRequest('/licenses/deactivate', {
        license_key: licenseKey,
        license_key_instance_id: activationId
      });
    } catch {
      // Clear local state even if the network is unavailable. The activation
      // can be cleaned up from the Dodo dashboard if necessary.
    }
  }

  await context.globalState.update(ACTIVATION_ID_STATE, undefined);
}
