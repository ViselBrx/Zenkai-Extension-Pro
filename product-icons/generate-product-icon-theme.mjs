import fs from 'node:fs';
import path from 'node:path';
import { fileURLToPath } from 'node:url';

const directory = path.dirname(fileURLToPath(import.meta.url));
const mapping = JSON.parse(fs.readFileSync(path.join(directory, 'codicon-mapping.json'), 'utf8'));
const reference = fs.readFileSync(path.join(directory, 'product-icon-reference.md'), 'utf8');

const codepoints = new Map();
for (const [decimal, names] of Object.entries(mapping)) {
  for (const name of names) {
    codepoints.set(name, Number(decimal).toString(16).toUpperCase());
  }
}

const entries = new Map();
for (const line of reference.split(/\r?\n/)) {
  if (!line.startsWith('|<i class=')) continue;
  const cells = line.split('|').map((cell) => cell.trim());
  const col2 = cells[2];
  const col3 = cells[3];

  if (col3 && /^[a-z0-9][a-z0-9-]*$/.test(col2) && /^[a-z0-9][a-z0-9-]*$/.test(col3)) {
    // Tabela 1: identificador de localização de UI no VS Code
    const codepoint = codepoints.get(col3);
    if (codepoint) {
      entries.set(col2, { codicon: col3, codepoint });
    }
  } else if (!col3 && /^[a-z0-9][a-z0-9-]*$/.test(col2)) {
    // Tabela 2: codicon direto da biblioteca do VS Code
    const codepoint = codepoints.get(col2);
    if (codepoint && !entries.has(col2)) {
      entries.set(col2, { codicon: col2, codepoint });
    }
  }
}

const overrides = {
  // ─── Activity Bar & Primary Views ──────────────────────────────────────────
  'accounts-view-bar-icon': 'shield',
  'breakpoints-view-icon': 'target',
  'callstack-view-icon': 'layers',
  'comments-view-icon': 'comment-discussion',
  'debug-console-view-icon': 'output',
  'default-view-icon': 'dashboard',
  'explorer-view-icon': 'code',
  'extensions-view-icon': 'rocket',
  'loaded-scripts-view-icon': 'file-code',
  'markers-view-icon': 'pulse',
  'open-editors-view-icon': 'layers',
  'outline-view-icon': 'symbol-interface',
  'output-view-icon': 'server',
  'ports-view-icon': 'radio-tower',
  'private-ports-view-icon': 'lock',
  'public-ports-view-icon': 'globe',
  'refactor-preview-view-icon': 'sparkle',
  'remote-explorer-view-icon': 'vm',
  'run-view-icon': 'zap',
  'search-view-icon': 'telescope',
  'settings-sync-view-icon': 'cloud',
  'settings-view-bar-icon': 'tools',
  'source-control-view-icon': 'git-compare',
  'terminal-view-icon': 'terminal',
  'test-view-icon': 'beaker',
  'timeline-view-icon': 'history',
  'variables-view-icon': 'database',
  'watch-view-icon': 'eye',

  // ─── Terminal Actions & Panels ─────────────────────────────────────────────
  'terminal-kill': 'trash',
  'terminal-new': 'plus',
  'terminal-rename': 'edit',
  'terminal-clear': 'clear-all',
  'terminal-shell': 'terminal-bash',
  'terminal-run': 'play',

  // ─── Testing Suite (Run, Pass, Fail, Debug) ────────────────────────────────
  'testing-debug-icon': 'zap',
  'testing-error-icon': 'flame',
  'testing-failed-icon': 'error',
  'testing-passed-icon': 'check',
  'testing-run-all-icon': 'run-all',
  'testing-run-icon': 'play',
  'testing-cancel-icon': 'circle-slash',
  'testing-queued-icon': 'history',
  'testing-message': 'comment',

  // ─── Debugger ─────────────────────────────────────────────────────────────
  'debug-start': 'debug-start',
  'debug-stop': 'debug-stop',
  'debug-continue': 'debug-continue',
  'debug-restart': 'debug-restart',
  'debug-step-into': 'debug-step-into',
  'debug-step-over': 'debug-step-over',
  'debug-step-out': 'debug-step-out',
  'debug-console': 'debug-console',

  // ─── Search & Replace Actions ──────────────────────────────────────────────
  'search-clear-results': 'clear-all',
  'search-collapse-results': 'collapse-all',
  'search-expand-results': 'expand-all',
  'search-refresh': 'refresh',
  'search-replace-all': 'replace-all',
  'search-replace': 'replace',
  'search-details': 'ellipsis',
  'search-new-editor': 'new-file',

  // ─── Editor Labels & Tabs ──────────────────────────────────────────────────
  'settings-editor-label-icon': 'tools',
  'search-editor-label-icon': 'telescope',
  'extensions-editor-label-icon': 'rocket',
  'keybindings-editor-label-icon': 'keyboard',
  'chat-editor-label-icon': 'sparkle',

  // ─── Notifications & Status ────────────────────────────────────────────────
  'notifications-clear-all': 'clear-all',
  'notifications-configure': 'gear',
  'notifications-collapse': 'chevron-up',
  'notifications-expand': 'chevron-down',
  'notifications-hide': 'close',

  // ─── Intellisense & Code Symbols ───────────────────────────────────────────
  'symbol-class': 'organization',
  'symbol-method': 'bracket-dot',
  'symbol-function': 'bracket',
  'symbol-variable': 'variable',
  'symbol-interface': 'symbol-interface',
  'symbol-property': 'symbol-field',
  'symbol-struct': 'symbol-structure',
  'symbol-boolean': 'symbol-boolean',
  'symbol-enum': 'symbol-enum',
  'symbol-enum-member': 'symbol-enum-member',
  'symbol-constructor': 'symbol-constructor',
  'symbol-array': 'symbol-array',
  'symbol-object': 'symbol-object',
  'symbol-module': 'symbol-module',
  'symbol-namespace': 'symbol-namespace',
  'symbol-package': 'symbol-package',
  'symbol-parameter': 'symbol-parameter',
  'symbol-reference': 'symbol-reference',
  'symbol-string': 'symbol-string',
  'symbol-number': 'symbol-number',
  'symbol-null': 'symbol-null',
  'symbol-keyword': 'symbol-keyword',
  'symbol-operator': 'symbol-operator',
  'symbol-type-parameter': 'symbol-type-parameter',
  'symbol-value': 'symbol-value',
  'symbol-color': 'symbol-color',
  'symbol-event': 'zap',
  'symbol-constant': 'lock',
  'symbol-key': 'key'
};

for (const [identifier, codicon] of Object.entries(overrides)) {
  const codepoint = codepoints.get(codicon);
  if (!codepoint) {
    throw new Error(`Codicon de override sem codepoint: ${codicon}`);
  }
  entries.set(identifier, { codicon, codepoint });
}

const iconDefinitions = {};
for (const [identifier, { codepoint }] of entries) {
  iconDefinitions[identifier] = {
    fontCharacter: `\\${codepoint}`,
    fontId: 'codicon'
  };
}

const theme = {
  name: 'Zenkai Pro Developer Product Icons',
  fonts: [
    {
      id: 'codicon',
      src: [
        {
          path: './codicon.ttf',
          format: 'truetype'
        }
      ],
      weight: 'normal',
      style: 'normal'
    }
  ],
  iconDefinitions
};

fs.writeFileSync(
  path.join(directory, 'zenkai-pro-product-icon-theme.json'),
  `${JSON.stringify(theme, null, 2)}\n`,
  'utf8'
);

console.log(`Gerado com ${entries.size} product icons e ${Object.keys(overrides).length} overrides Zenkai.`);
