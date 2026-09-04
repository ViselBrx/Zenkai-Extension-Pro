import fs from 'node:fs';
import path from 'node:path';
import { fileURLToPath } from 'node:url';

const directory = path.dirname(fileURLToPath(import.meta.url));

const additionalStems = ['angular', 'flutter', 'kubernetes', 'vercel', 'audio', 'video', 'document', 'terminal', 'layers', 'clock', 'flask', 'source', 'network', 'monitor',
  'elixir', 'erlang', 'haskell', 'clojure', 'scala', 'groovy', 'fsharp', 'visualbasic', 'assembly', 'zig', 'nim', 'crystal', 'perl', 'racket',
  'folder-features', 'folder-lib', 'folder-constants', 'folder-interfaces', 'folder-graph', 'folder-layouts', 'folder-media',
  'folder-fixtures', 'folder-cli', 'folder-infrastructure', 'folder-jobs', 'folder-cache', 'folder-icons', 'folder-fonts',
  'supabase', 'github', 'folder-supabase', 'folder-github', 'folder-npm', 'd-ts', 'd-mts', 'd-cts', 'js-map', 'ts-map', 'babelrc', 'babelrc-js', 'babelrc-cjs', 'babelrc-json', 'tsconfig-app-json', 'tsconfig-node-json', 'tsconfig-build-json', 'tsconfig-jsonc', 'styl', 'postcss', 'pcss', 'webmanifest', 'index-html', '404-html', 'humans-txt', 'browserconfig-xml', 'site-webmanifest', '-app-tsx', '-app-jsx', '-document-tsx', '-document-jsx', 'page-tsx', 'page-jsx', 'layout-tsx', 'layout-jsx', 'loading-tsx', 'error-tsx', 'not-found-tsx', 'route-ts', 'middleware-ts', 'next-env-d-ts', 'nuxt-config-ts', 'angular-json', 'components-json', 'server-js', 'server-ts', 'app-js', 'app-ts', 'index-js', 'index-ts', 'api-js', 'api-ts', 'controller-js', 'controller-ts', 'service-js', 'service-ts', 'middleware-js', 'router-js', 'router-ts', 'routes-js', 'routes-ts', 'model-js', 'model-ts', 'schema-js', 'schema-ts', 'validator-js', 'validator-ts', 'worker-js', 'worker-ts', 'queue-js', 'queue-ts', 'cron-js', 'cron-ts', 'socket-js', 'socket-ts', 'pyi', 'pyx', 'pxd', 'pyc', 'pyo', 'ipynb', 'setup-py', 'setup-cfg', 'tox-ini', 'pytest-ini', 'mypy-ini', 'python-version', 'pipfile', 'pipfile-lock', 'gradle-kts', 'class', 'jar', 'war', 'ear', 'build-gradle-kts', 'settings-gradle', 'settings-gradle-kts', 'gradle-properties', 'gradlew', 'gradlew-bat', 'hh', 'hxx', 'm', 'mm', 's', 'o', 'obj', 'a', 'lib', 'so', 'dll', 'dylib', 'cmakelists-txt', 'makefile', 'meson-build', 'vcpkg-json', 'conanfile-txt', 'conanfile-py', 'csx', 'sln', 'csproj', 'fsproj', 'vbproj', 'props', 'targets', 'nuspec', 'nupkg', 'global-json', 'directory-build-props', 'directory-build-targets', 'packages-lock-json', 'rlib', 'cargo-toml', 'cargo-lock', 'build-rs', 'mod', 'sum', 'work', 'go-work', 'zon', 'build-zig', 'build-zig-zon', 'php3', 'php4', 'php5', 'phtml', 'phar', 'blade-php', 'composer-lock', 'rake', 'gemspec', 'gemfile', 'gemfile-lock', 'rakefile', 'cpanfile', 'makefile-pl', 'pubspec-yaml', 'pubspec-lock', 'podfile', 'podfile-lock', 'info-plist', 'androidmanifest-xml', 'local-properties', 'mainactivity-kt', 'mainactivity-java', 'appdelegate-swift', 'main-dart', 'analysis-options-yaml', 'flutter-launcher-icons-yaml', 'l10n-yaml', 'generated-plugin-registrant-dart', 'android', 'ios', 'web', 'linux', 'macos', 'windows', 'integration-test', 'ksh', 'psd1', 'command', 'env-local', 'env-development', 'env-production', 'env-test', 'profile', 'bashrc', 'zshrc', 'bash-profile', 'gitconfig', 'npmrc', 'yarnrc', 'editorconfig', 'cfg', 'plist', 'config-json', 'settings-json', 'appsettings-json', 'launch-json', 'tasks-json', 'settings-yaml', 'db3', 'mdb', 'accdb', 'dump', 'bak', 'sql-gz', 'schema-sql', 'seed-sql', 'migration-sql', 'database-sql', 'drizzle-config-ts', 'ormconfig-json', 'rst', 'adoc', 'tex', 'latex', 'org', 'epub', 'pages', 'readme-md', 'changelog-md', 'contributing-md', 'license-md', 'security-md', 'code-of-conduct-md', 'icns', 'psd', 'ai', 'eps', 'fig', 'sketch', 'xd', 'kra', 'ase', 'aseprite', 'clip', 'ora', 'raw', 'heic', 'heif', 'mid', 'midi', 'wmv', 'flv', 'mpeg', 'mpg', 'm4v', 'srt', 'vtt', 'ass', 'ssa', 'blend', 'fbx', 'gltf', 'glb', 'dae', '3ds', 'stl', 'unity', 'unitypackage', 'prefab', 'asset', 'scene', 'godot', 'tscn', 'tres', 'gd', 'gdshader', 'shader', 'hlsl', 'cginc', 'pak', 'wad', 'bsp', 'uasset', 'umap', 'dockerfile', 'dockerignore', 'compose-yml', 'compose-yaml', 'containerfile', 'docker-entrypoint-sh', 'gitignore', 'gitattributes', 'gitmodules', 'gitkeep', 'github', 'codeowners', 'release-yml', 'ci-yml', 'cd-yml', 'pull-request-template-md', 'issue-template-md', 'funding-yml', 'renovate-json5', 'bun-lock', 'deno-lock', 'mix-exs', 'mix-lock', 'travis-yml', 'circleci', 'jenkinsfile', 'bitbucket-pipelines-yml', 'gitlab-ci-yml', 'appveyor-yml', 'buildspec-yml', 'cloudbuild-yaml', 'render-yaml', 'heroku-yml', 'tfstate', 'nomad', 'cue', 'main-tf', 'variables-tf', 'outputs-tf', 'providers-tf', 'serverless-yaml', 'sam-yaml', 'template-yaml', 'pulumi-yaml', 'pulumi-dev-yaml', 'cdk-json', 'kustomization-yaml', 'deployment-yaml', 'service-yaml', 'ingress-yaml', 'configmap-yaml', 'secret-yaml', 'namespace-yaml', 'statefulset-yaml', 'daemonset-yaml', 'job-yaml', 'cronjob-yaml', 'persistentvolume-yaml', 'persistentvolumeclaim-yaml', 'helm', 'chart-yaml', 'values-yaml', 'templates', '-helpers-tpl', 'spec-js', 'spec-ts', 'test-js', 'test-ts', 'test-jsx', 'test-tsx', 'spec-jsx', 'spec-tsx', 'karma-conf-js', 'mocha-opts', 'fixtures', 'mocks', 'snapshots', '--tests--', '--mocks--', 'vscode', 'keybindings-json', 'extensions-json', 'snippets', 'snippets-code-snippets', 'devcontainer', 'devcontainer-json', 'profiles', 'avsc', 'thrift', 'openapi', 'swagger', 'http', 'rest', 'har', 'wsdl', 'raml', 'openapi-yaml', 'openapi-json', 'swagger-yaml', 'swagger-json', 'pem', 'crt', 'cer', 'der', 'csr', 'pub', 'asc', 'sig', 'key', 'p12', 'pfx', 'keystore', 'jks', 'truststore', 'htpasswd', 'well-known', 'rar', '7z', 'bz2', 'xz', 'tgz', 'tar-gz', 'tar-xz', 'iso', 'img', 'dmg', 'pkg', 'deb', 'rpm', 'msi', 'exe', 'appimage', 'snap', 'flatpak', 'folder-apps', 'folder-component', 'folder-screens', 'folder-helpers', 'folder-contexts', 'folder-stores', 'folder-state', 'folder-validators', 'folder-settings', 'folder-resources', 'folder-data', 'folder-frontend', 'folder-web', 'folder-website', 'folder-ux', 'folder-design', 'folder-css', 'folder-scss', 'folder-themes', 'folder-img', 'folder-animations', 'folder-widgets', 'folder-elements', 'folder-sections', 'folder-navigation', 'folder-navbar', 'folder-header', 'folder-footer', 'folder-sidebar', 'folder-modals', 'folder-dialogs', 'folder-forms', 'folder-tables', 'folder-cards', 'folder-buttons', 'folder-inputs', 'folder-charts', 'folder-backend', 'folder-apis', 'folder-middlewares', 'folder-events', 'folder-listeners', 'folder-handlers', 'folder-tasks', 'folder-webhooks', 'folder-rest', 'folder-rpc', 'folder-sockets', 'folder-websocket', 'folder-auth', 'folder-authorization', 'folder-security', 'folder-logging', 'folder-integration', 'folder-unit', 'folder-functional', 'folder-acceptance', 'folder-stubs', 'folder-fakes', 'folder-playwright', 'folder-cypress', 'folder-documentation', 'folder-wiki', 'folder-guides', 'folder-manual', 'folder-reference', 'folder-samples', 'folder-tutorials', 'folder-notes', 'folder-changelog', 'folder-screenshots', 'folder-diagrams', 'folder-architecture', 'folder-adr', 'folder-docker', 'folder-containers', 'folder-compose', 'folder-k8s', 'folder-kubernetes', 'folder-helm', 'folder-terraform', 'folder-infra', 'folder-deployment', 'folder-deploy', 'folder-automation', 'folder-pipelines', 'folder-ci', 'folder-cd', 'folder-ansible', 'folder-playbooks', 'folder-asset', 'folder-icon', 'folder-logos', 'folder-logo', 'folder-avatars', 'folder-backgrounds', 'folder-wallpapers', 'folder-textures', 'folder-sprites', 'folder-sprite', 'folder-audio', 'folder-sounds', 'folder-music', 'folder-video', 'folder-videos', 'folder-3d', 'folder-materials', 'folder-shaders', 'folder-particles', 'folder-animations2d', 'folder-animations3d', 'folder-game', 'folder-games', 'folder-scenes', 'folder-scene', 'folder-levels', 'folder-level', 'folder-maps', 'folder-map', 'folder-actors', 'folder-characters', 'folder-enemies', 'folder-npcs', 'folder-items', 'folder-weapons', 'folder-vehicles', 'folder-inventory', 'folder-quests', 'folder-dialogue', 'folder-cutscenes', 'folder-world', 'folder-worlds', 'folder-prefabs', 'folder-meshes', 'folder-vfx', 'folder-sfx', 'folder-next', 'folder-nuxt', 'folder-svelte-kit', 'folder-astro', 'folder-output', 'folder-obj', 'folder-cache', 'folder-turbo', 'folder-vite', 'folder-parcel-cache', 'folder-angular', 'folder-expo', 'folder-gradle', 'folder-dart-tool', 'folder-vs', 'folder-venv', 'folder---pycache--', 'folder-databases', 'folder-sql', 'folder-schema', 'folder-migration', 'folder-seed', 'folder-backups', 'folder-backup', 'folder-indexes', 'folder-procedures', 'folder-functions', 'folder-triggers', 'folder-presentation', 'folder-datasources', 'folder-data-sources', 'folder-value-objects', 'folder-use-cases', 'folder-usecases', 'folder-factories', 'folder-builders', 'folder-strategies', 'folder-contracts', 'folder-ports', 'folder-package', 'folder-workspaces', 'folder-workspace', 'folder-libraries', 'folder-plugins', 'folder-extensions', 'folder-packages-core', 'folder-packages-ui', 'folder-packages-config', 'folder-apps-web', 'folder-apps-api', 'folder-apps-mobile', 'folder-apps-desktop', 'folder-authentication', 'folder-accounts', 'folder-users', 'folder-profiles', 'folder-sessions', 'folder-tokens', 'folder-permissions', 'folder-roles', 'folder-guards', 'folder-oauth', 'folder-sso', 'folder-credentials', 'folder-identity', 'folder-products', 'folder-product', 'folder-catalog', 'folder-categories', 'folder-cart', 'folder-checkout', 'folder-orders', 'folder-payments', 'folder-billing', 'folder-invoices', 'folder-customers', 'folder-reviews', 'folder-wishlist', 'folder-coupons', 'folder-discounts', 'folder-shipping', 'folder-posts', 'folder-comments', 'folder-messages', 'folder-chat', 'folder-conversations', 'folder-notifications', 'folder-followers', 'folder-following', 'folder-friends', 'folder-groups', 'folder-communities', 'folder-feeds', 'folder-stories', 'folder-reactions', 'folder-likes', 'folder-shares', 'folder-ai', 'folder-ml', 'folder-model', 'folder-training', 'folder-datasets', 'folder-dataset', 'folder-embeddings', 'folder-vectors', 'folder-vector', 'folder-prompts', 'folder-agents', 'folder-rag', 'folder-retrieval', 'folder-evaluation', 'folder-evaluations', 'folder-inference', 'folder-checkpoints', 'folder-weights', 'folder-tokenizers', 'folder-notebooks', 'folder-log', 'folder-runtime', 'folder-downloads', 'folder-exports', 'folder-imports', 'folder-generated', 'folder-generated-assets', 'folder-artifacts', 'folder-artifacts-cache', 'folder-env', 'folder-config', 'folder-local', 'folder-npm', 'folder-yarn', 'folder-pnpm-store', 'folder-pytest-cache', 'folder-mypy-cache', 'folder-ruff-cache', 'folder-storybook', 'folder-changeset', 'folder-nx', 'folder-vercel', 'readme-txt', 'changelog', 'notice', 'authors', 'contributors', 'todo', 'todo-md', 'roadmap-md', 'architecture-md', 'design-md', 'install-md', 'setup-md', 'development-md', 'migration-md', 'faq-md', 'main', 'index', 'app', 'server', 'client', 'constants', 'types', 'utils', 'helpers', 'hooks', 'context', 'provider', 'store', 'router', 'routes', 'api', 'schema', 'model', 'service', 'controller', 'repository', 'middleware', 'validator', 'logger', 'worker', 'queue', 'events', 'commands', 'queries', 'button', 'icon', 'logo', 'header', 'footer', 'navbar', 'sidebar', 'menu', 'modal', 'dialog', 'drawer', 'card', 'avatar', 'badge', 'alert', 'toast', 'tooltip', 'dropdown', 'select', 'input', 'form', 'table', 'tabs', 'accordion', 'carousel', 'slider', 'spinner', 'skeleton', 'pagination', 'breadcrumb', 'search', 'filter', '8-bit', '16-bit', '32-bit', 'pixel-art', 'retro-terminal', 'neon', 'cyberpunk', 'synthwave', 'vaporwave', 'holographic', 'glass', 'glassmorphism', 'metallic', 'chrome', 'gold', 'silver', 'black-and-white', 'monochrome', 'outline', 'filled', 'flat', 'minimal', '3d', 'isometric', 'low-poly', 'glow', 'electric', 'matrix', 'arcade', 'game-ui', 'terminal-green', 'blueprint', 'paper', 'sticker', 'rounded', 'sharp', 'industrial', 'closed-folder', 'open-folder', 'empty-folder', 'full-folder', 'locked-folder', 'unlocked-folder', 'hidden-folder', 'shared-folder', 'favorite-folder', 'starred-folder', 'warning-folder', 'error-folder', 'cloud-folder', 'sync-folder', 'download-folder', 'upload-folder', 'archive-folder', 'git-folder', 'branch-folder', 'root-folder', 'source-folder', 'test-folder', 'build-folder', 'config-folder', 'database-folder', 'assets-folder', 'components-folder', 'api-folder', 'server-folder', 'client-folder', 'mobile-folder', 'desktop-folder', 'web-folder', 'game-folder', 'ai-folder', 'security-folder', 'documentation-folder', 'package-folder', 'plugin-folder', 'extension-folder'];

const iconLayout = {
  outerX: 1.35,
  outerSize: 29.3,
  outerRadius: 7.3,
  outerStroke: 1.2,
  frameX: 1.75,
  frameSize: 28.5,
  frameRadius: 7,
  blackX: 2.75,
  blackSize: 26.5,
  blackRadius: 6.3,
  safeX: 4.2,
  safeSize: 23.6,
  safeRadius: 3.8,
  textWidth: 20.5
};

const palette = {
  yellow: '#FFE31A',
  cyan: '#28F5FF',
  blue: '#5DA9FF',
  purple: '#B56CFF',
  green: '#48FF9A',
  greenSoft: '#7AAF5E',
  greenDeep: '#17351C',
  orange: '#FF9B3D',
  pink: '#FF4FB3',
  red: '#FF5C70',
  white: '#E8EBFF'
};

const labels = {file: 'FILE', archive: 'ZIP', bat: 'BAT', c: 'C', 'c-cpp': 'C++', cjs: 'CJS', config: 'CFG', cpp: 'C++',
  csharp: 'C#', css: 'CSS', dart: 'DART', database: 'DB', data: 'CSV', docker: 'DOCK', env: 'ENV',
  firebase: 'FIRE', format: 'FMT', git: 'GIT', go: 'GO', gql: 'GQL', graphql: 'GQL', hcl: 'HCL', html: 'HTML',
  image: 'IMG', java: 'JAVA', javascript: 'JS', json: 'JSON', jsonc: 'JSC', kotlin: 'KT', less: 'LESS',
  license: 'LIC', lint: 'LINT', log: 'LOG', lua: 'LUA', markdown: 'MD', make: 'MAKE', mermaid: 'MMD', mjs: 'MJS',
  next: 'NEXT', node: 'NODE', npm: 'NPM', package: 'PKG', pdf: 'PDF', php: 'PHP', powershell: 'PS', prisma: 'ORM',
  proto: 'PROTO', python: 'PY', r: 'R', react: 'REACT', readme: 'README', ruby: 'RB', rust: 'RS', sass: 'SASS',
  scss: 'SCSS', shell: 'SH', solidity: 'SOL', sql: 'SQL', svelte: 'SVELTE', tailwind: 'TW', terraform: 'TF',
  text: 'TXT', typescript: 'TS', tsx: 'TSX', vite: 'VITE', vue: 'VUE', wasm: 'WASM', workspace: 'WORK', xml: 'XML', yaml: 'YAML',
  jsx: 'JSX', astro: 'ASTRO', audio: 'AUDIO', video: 'VIDEO', document: 'DOC', terminal: 'TERM',
  layers: 'LAYR', clock: 'TIME', flask: 'LAB', source: 'SRC', network: 'NET', monitor: 'UI',
  elixir: 'EX', erlang: 'ERL', haskell: 'HS', clojure: 'CLJ', scala: 'SCALA', groovy: 'GROOVY',
  fsharp: 'F#', visualbasic: 'VB', assembly: 'ASM', zig: 'ZIG', nim: 'NIM', crystal: 'CR', perl: 'PL', racket: 'RKT',
  supabase: 'SUPA', github: 'GH', 'd-ts': 'D.TS', 'd-mts': 'D.MT', 'd-cts': 'D.CT', 'js-map': 'JS.M', 'ts-map': 'TS.M', 'babelrc': 'BABE', 'babelrc-js': 'BABE', 'babelrc-cjs': 'BABE', 'babelrc-json': 'BABE', 'tsconfig-app-json': 'TSCO', 'tsconfig-node-json': 'TSCO', 'tsconfig-build-json': 'TSCO', 'tsconfig-jsonc': 'TSCO', 'styl': 'STYL', 'postcss': 'POST', 'pcss': 'PCSS', 'webmanifest': 'WEBM', 'index-html': 'INDE', '404-html': '404.', 'humans-txt': 'HUMA', 'browserconfig-xml': 'BROW', 'site-webmanifest': 'SITE', '-app-tsx': '_APP', '-app-jsx': '_APP', '-document-tsx': '_DOC', '-document-jsx': '_DOC', 'page-tsx': 'PAGE', 'page-jsx': 'PAGE', 'layout-tsx': 'LAYO', 'layout-jsx': 'LAYO', 'loading-tsx': 'LOAD', 'error-tsx': 'ERRO', 'not-found-tsx': 'NOT-', 'route-ts': 'ROUT', 'middleware-ts': 'MIDD', 'next-env-d-ts': 'NEXT', 'nuxt-config-ts': 'NUXT', 'angular-json': 'ANGU', 'components-json': 'COMP', 'server-js': 'SERV', 'server-ts': 'SERV', 'app-js': 'APP.', 'app-ts': 'APP.', 'index-js': 'INDE', 'index-ts': 'INDE', 'api-js': 'API.', 'api-ts': 'API.', 'controller-js': 'CONT', 'controller-ts': 'CONT', 'service-js': 'SERV', 'service-ts': 'SERV', 'middleware-js': 'MIDD', 'router-js': 'ROUT', 'router-ts': 'ROUT', 'routes-js': 'ROUT', 'routes-ts': 'ROUT', 'model-js': 'MODE', 'model-ts': 'MODE', 'schema-js': 'SCHE', 'schema-ts': 'SCHE', 'validator-js': 'VALI', 'validator-ts': 'VALI', 'worker-js': 'WORK', 'worker-ts': 'WORK', 'queue-js': 'QUEU', 'queue-ts': 'QUEU', 'cron-js': 'CRON', 'cron-ts': 'CRON', 'socket-js': 'SOCK', 'socket-ts': 'SOCK', 'pyi': 'PYI', 'pyx': 'PYX', 'pxd': 'PXD', 'pyc': 'PYC', 'pyo': 'PYO', 'ipynb': 'IPYN', 'setup-py': 'SETU', 'setup-cfg': 'SETU', 'tox-ini': 'TOX.', 'pytest-ini': 'PYTE', 'mypy-ini': 'MYPY', 'python-version': 'PYTH', 'pipfile': 'PIPF', 'pipfile-lock': 'PIPF', 'gradle-kts': 'GRAD', 'class': 'CLAS', 'jar': 'JAR', 'war': 'WAR', 'ear': 'EAR', 'build-gradle-kts': 'BUIL', 'settings-gradle': 'SETT', 'settings-gradle-kts': 'SETT', 'gradle-properties': 'GRAD', 'gradlew': 'GRAD', 'gradlew-bat': 'GRAD', 'hh': 'HH', 'hxx': 'HXX', 'm': 'M', 'mm': 'MM', 's': 'S', 'o': 'O', 'obj': 'OBJ', 'a': 'A', 'lib': 'LIB', 'so': 'SO', 'dll': 'DLL', 'dylib': 'DYLI', 'cmakelists-txt': 'CMAK', 'makefile': 'MAKE', 'meson-build': 'MESO', 'vcpkg-json': 'VCPK', 'conanfile-txt': 'CONA', 'conanfile-py': 'CONA', 'csx': 'CSX', 'sln': 'SLN', 'csproj': 'CSPR', 'fsproj': 'FSPR', 'vbproj': 'VBPR', 'props': 'PROP', 'targets': 'TARG', 'nuspec': 'NUSP', 'nupkg': 'NUPK', 'global-json': 'GLOB', 'directory-build-props': 'DIRE', 'directory-build-targets': 'DIRE', 'packages-lock-json': 'PACK', 'rlib': 'RLIB', 'cargo-toml': 'CARG', 'cargo-lock': 'CARG', 'build-rs': 'BUIL', 'mod': 'MOD', 'sum': 'SUM', 'work': 'WORK', 'go-work': 'GO.W', 'zon': 'ZON', 'build-zig': 'BUIL', 'build-zig-zon': 'BUIL', 'php3': 'PHP3', 'php4': 'PHP4', 'php5': 'PHP5', 'phtml': 'PHTM', 'phar': 'PHAR', 'blade-php': 'BLAD', 'composer-lock': 'COMP', 'rake': 'RAKE', 'gemspec': 'GEMS', 'gemfile': 'GEMF', 'gemfile-lock': 'GEMF', 'rakefile': 'RAKE', 'cpanfile': 'CPAN', 'makefile-pl': 'MAKE', 'pubspec-yaml': 'PUBS', 'pubspec-lock': 'PUBS', 'podfile': 'PODF', 'podfile-lock': 'PODF', 'info-plist': 'INFO', 'androidmanifest-xml': 'ANDR', 'local-properties': 'LOCA', 'mainactivity-kt': 'MAIN', 'mainactivity-java': 'MAIN', 'appdelegate-swift': 'APPD', 'main-dart': 'MAIN', 'analysis-options-yaml': 'ANAL', 'flutter-launcher-icons-yaml': 'FLUT', 'l10n-yaml': 'L10N', 'generated-plugin-registrant-dart': 'GENE', 'android': 'ANDR', 'ios': 'IOS', 'web': 'WEB', 'linux': 'LINU', 'macos': 'MACO', 'windows': 'WIND', 'integration-test': 'INTE', 'ksh': 'KSH', 'psd1': 'PSD1', 'command': 'COMM', 'env-local': 'ENV.', 'env-development': 'ENV.', 'env-production': 'ENV.', 'env-test': 'ENV.', 'profile': 'PROF', 'bashrc': 'BASH', 'zshrc': 'ZSHR', 'bash-profile': 'BASH', 'gitconfig': 'GITC', 'npmrc': 'NPMR', 'yarnrc': 'YARN', 'editorconfig': 'EDIT', 'cfg': 'CFG', 'plist': 'PLIS', 'config-json': 'CONF', 'settings-json': 'SETT', 'appsettings-json': 'APPS', 'launch-json': 'LAUN', 'tasks-json': 'TASK', 'settings-yaml': 'SETT', 'db3': 'DB3', 'mdb': 'MDB', 'accdb': 'ACCD', 'dump': 'DUMP', 'bak': 'BAK', 'sql-gz': 'SQL.', 'schema-sql': 'SCHE', 'seed-sql': 'SEED', 'migration-sql': 'MIGR', 'database-sql': 'DATA', 'drizzle-config-ts': 'DRIZ', 'ormconfig-json': 'ORMC', 'rst': 'RST', 'adoc': 'ADOC', 'tex': 'TEX', 'latex': 'LATE', 'org': 'ORG', 'epub': 'EPUB', 'pages': 'PAGE', 'readme-md': 'READ', 'changelog-md': 'CHAN', 'contributing-md': 'CONT', 'license-md': 'LICE', 'security-md': 'SECU', 'code-of-conduct-md': 'CODE', 'icns': 'ICNS', 'psd': 'PSD', 'ai': 'AI', 'eps': 'EPS', 'fig': 'FIG', 'sketch': 'SKET', 'xd': 'XD', 'kra': 'KRA', 'ase': 'ASE', 'aseprite': 'ASEP', 'clip': 'CLIP', 'ora': 'ORA', 'raw': 'RAW', 'heic': 'HEIC', 'heif': 'HEIF', 'mid': 'MID', 'midi': 'MIDI', 'wmv': 'WMV', 'flv': 'FLV', 'mpeg': 'MPEG', 'mpg': 'MPG', 'm4v': 'M4V', 'srt': 'SRT', 'vtt': 'VTT', 'ass': 'ASS', 'ssa': 'SSA', 'blend': 'BLEN', 'fbx': 'FBX', 'gltf': 'GLTF', 'glb': 'GLB', 'dae': 'DAE', '3ds': '3DS', 'stl': 'STL', 'unity': 'UNIT', 'unitypackage': 'UNIT', 'prefab': 'PREF', 'asset': 'ASSE', 'scene': 'SCEN', 'godot': 'GODO', 'tscn': 'TSCN', 'tres': 'TRES', 'gd': 'GD', 'gdshader': 'GDSH', 'shader': 'SHAD', 'hlsl': 'HLSL', 'cginc': 'CGIN', 'pak': 'PAK', 'wad': 'WAD', 'bsp': 'BSP', 'uasset': 'UASS', 'umap': 'UMAP', 'dockerfile': 'DOCK', 'dockerignore': 'DOCK', 'compose-yml': 'COMP', 'compose-yaml': 'COMP', 'containerfile': 'CONT', 'docker-entrypoint-sh': 'DOCK', 'gitignore': 'GITI', 'gitattributes': 'GITA', 'gitmodules': 'GITM', 'gitkeep': 'GITK', 'github': 'GITH', 'codeowners': 'CODE', 'release-yml': 'RELE', 'ci-yml': 'CI.Y', 'cd-yml': 'CD.Y', 'pull-request-template-md': 'PULL', 'issue-template-md': 'ISSU', 'funding-yml': 'FUND', 'renovate-json5': 'RENO', 'bun-lock': 'BUN.', 'deno-lock': 'DENO', 'mix-exs': 'MIX.', 'mix-lock': 'MIX.', 'travis-yml': 'TRAV', 'circleci': 'CIRC', 'jenkinsfile': 'JENK', 'bitbucket-pipelines-yml': 'BITB', 'gitlab-ci-yml': 'GITL', 'appveyor-yml': 'APPV', 'buildspec-yml': 'BUIL', 'cloudbuild-yaml': 'CLOU', 'render-yaml': 'REND', 'heroku-yml': 'HERO', 'tfstate': 'TFST', 'nomad': 'NOMA', 'cue': 'CUE', 'main-tf': 'MAIN', 'variables-tf': 'VARI', 'outputs-tf': 'OUTP', 'providers-tf': 'PROV', 'serverless-yaml': 'SERV', 'sam-yaml': 'SAM.', 'template-yaml': 'TEMP', 'pulumi-yaml': 'PULU', 'pulumi-dev-yaml': 'PULU', 'cdk-json': 'CDK.', 'kustomization-yaml': 'KUST', 'deployment-yaml': 'DEPL', 'service-yaml': 'SERV', 'ingress-yaml': 'INGR', 'configmap-yaml': 'CONF', 'secret-yaml': 'SECR', 'namespace-yaml': 'NAME', 'statefulset-yaml': 'STAT', 'daemonset-yaml': 'DAEM', 'job-yaml': 'JOB.', 'cronjob-yaml': 'CRON', 'persistentvolume-yaml': 'PERS', 'persistentvolumeclaim-yaml': 'PERS', 'helm': 'HELM', 'chart-yaml': 'CHAR', 'values-yaml': 'VALU', 'templates': 'TEMP', '-helpers-tpl': '_HEL', 'spec-js': 'SPEC', 'spec-ts': 'SPEC', 'test-js': 'TEST', 'test-ts': 'TEST', 'test-jsx': 'TEST', 'test-tsx': 'TEST', 'spec-jsx': 'SPEC', 'spec-tsx': 'SPEC', 'karma-conf-js': 'KARM', 'mocha-opts': 'MOCH', 'fixtures': 'FIXT', 'mocks': 'MOCK', 'snapshots': 'SNAP', '--tests--': '__TE', '--mocks--': '__MO', 'vscode': 'VSCO', 'keybindings-json': 'KEYB', 'extensions-json': 'EXTE', 'snippets': 'SNIP', 'snippets-code-snippets': 'SNIP', 'devcontainer': 'DEVC', 'devcontainer-json': 'DEVC', 'profiles': 'PROF', 'avsc': 'AVSC', 'thrift': 'THRI', 'openapi': 'OPEN', 'swagger': 'SWAG', 'http': 'HTTP', 'rest': 'REST', 'har': 'HAR', 'wsdl': 'WSDL', 'raml': 'RAML', 'openapi-yaml': 'OPEN', 'openapi-json': 'OPEN', 'swagger-yaml': 'SWAG', 'swagger-json': 'SWAG', 'pem': 'PEM', 'crt': 'CRT', 'cer': 'CER', 'der': 'DER', 'csr': 'CSR', 'pub': 'PUB', 'asc': 'ASC', 'sig': 'SIG', 'key': 'KEY', 'p12': 'P12', 'pfx': 'PFX', 'keystore': 'KEYS', 'jks': 'JKS', 'truststore': 'TRUS', 'htpasswd': 'HTPA', 'well-known': 'WELL', 'rar': 'RAR', '7z': '7Z', 'bz2': 'BZ2', 'xz': 'XZ', 'tgz': 'TGZ', 'tar-gz': 'TAR.', 'tar-xz': 'TAR.', 'iso': 'ISO', 'img': 'IMG', 'dmg': 'DMG', 'pkg': 'PKG', 'deb': 'DEB', 'rpm': 'RPM', 'msi': 'MSI', 'exe': 'EXE', 'appimage': 'APPI', 'snap': 'SNAP', 'flatpak': 'FLAT', 'readme-txt': 'READ', 'changelog': 'CHAN', 'notice': 'NOTI', 'authors': 'AUTH', 'contributors': 'CONT', 'todo': 'TODO', 'todo-md': 'TODO', 'roadmap-md': 'ROAD', 'architecture-md': 'ARCH', 'design-md': 'DESI', 'install-md': 'INST', 'setup-md': 'SETU', 'development-md': 'DEVE', 'migration-md': 'MIGR', 'faq-md': 'FAQ.', 'main': 'MAIN', 'index': 'INDE', 'app': 'APP', 'server': 'SERV', 'client': 'CLIE', 'constants': 'CONS', 'types': 'TYPE', 'utils': 'UTIL', 'helpers': 'HELP', 'hooks': 'HOOK', 'context': 'CONT', 'provider': 'PROV', 'store': 'STOR', 'router': 'ROUT', 'routes': 'ROUT', 'api': 'API', 'schema': 'SCHE', 'model': 'MODE', 'service': 'SERV', 'controller': 'CONT', 'repository': 'REPO', 'middleware': 'MIDD', 'validator': 'VALI', 'logger': 'LOGG', 'worker': 'WORK', 'queue': 'QUEU', 'events': 'EVEN', 'commands': 'COMM', 'queries': 'QUER', 'button': 'BUTT', 'icon': 'ICON', 'logo': 'LOGO', 'header': 'HEAD', 'footer': 'FOOT', 'navbar': 'NAVB', 'sidebar': 'SIDE', 'menu': 'MENU', 'modal': 'MODA', 'dialog': 'DIAL', 'drawer': 'DRAW', 'card': 'CARD', 'avatar': 'AVAT', 'badge': 'BADG', 'alert': 'ALER', 'toast': 'TOAS', 'tooltip': 'TOOL', 'dropdown': 'DROP', 'select': 'SELE', 'input': 'INPU', 'form': 'FORM', 'table': 'TABL', 'tabs': 'TABS', 'accordion': 'ACCO', 'carousel': 'CARO', 'slider': 'SLID', 'spinner': 'SPIN', 'skeleton': 'SKEL', 'pagination': 'PAGI', 'breadcrumb': 'BREA', 'search': 'SEAR', 'filter': 'FILT', '8-bit': '8-BI', '16-bit': '16-B', '32-bit': '32-B', 'pixel-art': 'PIXE', 'retro-terminal': 'RETR', 'neon': 'NEON', 'cyberpunk': 'CYBE', 'synthwave': 'SYNT', 'vaporwave': 'VAPO', 'holographic': 'HOLO', 'glass': 'GLAS', 'glassmorphism': 'GLAS', 'metallic': 'META', 'chrome': 'CHRO', 'gold': 'GOLD', 'silver': 'SILV', 'black-and-white': 'BLAC', 'monochrome': 'MONO', 'outline': 'OUTL', 'filled': 'FILL', 'flat': 'FLAT', 'minimal': 'MINI', '3d': '3D', 'isometric': 'ISOM', 'low-poly': 'LOW-', 'glow': 'GLOW', 'electric': 'ELEC', 'matrix': 'MATR', 'arcade': 'ARCA', 'game-ui': 'GAME', 'terminal-green': 'TERM', 'blueprint': 'BLUE', 'paper': 'PAPE', 'sticker': 'STIC', 'rounded': 'ROUN', 'sharp': 'SHAR', 'industrial': 'INDU', 'closed-folder': 'CLOS', 'open-folder': 'OPEN', 'empty-folder': 'EMPT', 'full-folder': 'FULL', 'locked-folder': 'LOCK', 'unlocked-folder': 'UNLO', 'hidden-folder': 'HIDD', 'shared-folder': 'SHAR', 'favorite-folder': 'FAVO', 'starred-folder': 'STAR', 'warning-folder': 'WARN', 'error-folder': 'ERRO', 'cloud-folder': 'CLOU', 'sync-folder': 'SYNC', 'download-folder': 'DOWN', 'upload-folder': 'UPLO', 'archive-folder': 'ARCH', 'git-folder': 'GIT-', 'branch-folder': 'BRAN', 'root-folder': 'ROOT', 'source-folder': 'SOUR', 'test-folder': 'TEST', 'build-folder': 'BUIL', 'config-folder': 'CONF', 'database-folder': 'DATA', 'assets-folder': 'ASSE', 'components-folder': 'COMP', 'api-folder': 'API-', 'server-folder': 'SERV', 'client-folder': 'CLIE', 'mobile-folder': 'MOBI', 'desktop-folder': 'DESK', 'web-folder': 'WEB-', 'game-folder': 'GAME', 'ai-folder': 'AI-F', 'security-folder': 'SECU', 'documentation-folder': 'DOCU', 'package-folder': 'PACK', 'plugin-folder': 'PLUG', 'extension-folder': 'EXTE'};

const folderLabels = {folder: 'DIR', 'folder-open': 'OPEN', 'folder-src': 'SRC', 'folder-app': 'APP', 'folder-ui': 'UI',
  'folder-components': 'UI', 'folder-models': 'DB', 'folder-services': 'API', 'folder-utils': 'UTIL',
  'folder-hooks': 'HOOK', 'folder-pages': 'PAGE', 'folder-routes': 'ROUTE', 'folder-public': 'PUB',
  'folder-assets': 'ASSET', 'folder-tests': 'TEST', 'folder-node-modules': 'MOD', 'folder-config': 'CFG',
  'folder-docs': 'DOCS', 'folder-scripts': 'CLI', 'folder-server': 'SRV', 'folder-client': 'WEB',
  'folder-prisma': 'ORM', 'folder-database': 'DB', 'folder-migrations': 'MIG', 'folder-packages': 'PKG',
  'folder-examples': 'EX', 'folder-build': 'BLD', 'folder-dist': 'DIST', 'folder-git': 'GIT', 'folder-vscode': 'VSC',
  'folder-controllers': 'CTRL', 'folder-views': 'VIEW', 'folder-styles': 'CSS', 'folder-types': 'TYPE',
  'folder-schemas': 'DB', 'folder-store': 'STATE', 'folder-context': 'CTX', 'folder-middleware': 'MID',
  'folder-workers': 'WORK', 'folder-e2e': 'E2E', 'folder-mocks': 'MOCK', 'folder-vendor': 'VEND',
  'folder-logs': 'LOG', 'folder-storybook': 'STORY', 'folder-locales': 'I18N', 'folder-features': 'FEAT',
  'folder-lib': 'LIB', 'folder-constants': 'CONST', 'folder-interfaces': 'TYPE', 'folder-graph': 'GQL',
  'folder-layouts': 'LAY', 'folder-media': 'MEDIA', 'folder-fixtures': 'FIX', 'folder-cli': 'CLI',
  'folder-infrastructure': 'INFRA', 'folder-jobs': 'JOB', 'folder-cache': 'CACHE', 'folder-icons': 'ICON', 'folder-fonts': 'FONT',
  'folder-supabase': 'SUPA', 'folder-github': 'GH', 'folder-npm': 'NPM', 'folder-apps': 'APPS', 'folder-component': 'COMP', 'folder-screens': 'SCRE', 'folder-helpers': 'HELP', 'folder-contexts': 'CONT', 'folder-stores': 'STOR', 'folder-state': 'STAT', 'folder-validators': 'VALI', 'folder-settings': 'SETT', 'folder-resources': 'RESO', 'folder-data': 'DATA', 'folder-frontend': 'FRON', 'folder-web': 'WEB', 'folder-website': 'WEBS', 'folder-ux': 'UX', 'folder-design': 'DESI', 'folder-css': 'CSS', 'folder-scss': 'SCSS', 'folder-themes': 'THEM', 'folder-img': 'IMG', 'folder-animations': 'ANIM', 'folder-widgets': 'WIDG', 'folder-elements': 'ELEM', 'folder-sections': 'SECT', 'folder-navigation': 'NAVI', 'folder-navbar': 'NAVB', 'folder-header': 'HEAD', 'folder-footer': 'FOOT', 'folder-sidebar': 'SIDE', 'folder-modals': 'MODA', 'folder-dialogs': 'DIAL', 'folder-forms': 'FORM', 'folder-tables': 'TABL', 'folder-cards': 'CARD', 'folder-buttons': 'BUTT', 'folder-inputs': 'INPU', 'folder-charts': 'CHAR', 'folder-backend': 'BACK', 'folder-apis': 'APIS', 'folder-middlewares': 'MIDD', 'folder-events': 'EVEN', 'folder-listeners': 'LIST', 'folder-handlers': 'HAND', 'folder-tasks': 'TASK', 'folder-webhooks': 'WEBH', 'folder-rest': 'REST', 'folder-rpc': 'RPC', 'folder-sockets': 'SOCK', 'folder-websocket': 'WEBS', 'folder-auth': 'AUTH', 'folder-authorization': 'AUTH', 'folder-security': 'SECU', 'folder-logging': 'LOGG', 'folder-integration': 'INTE', 'folder-unit': 'UNIT', 'folder-functional': 'FUNC', 'folder-acceptance': 'ACCE', 'folder-stubs': 'STUB', 'folder-fakes': 'FAKE', 'folder-playwright': 'PLAY', 'folder-cypress': 'CYPR', 'folder-documentation': 'DOCU', 'folder-wiki': 'WIKI', 'folder-guides': 'GUID', 'folder-manual': 'MANU', 'folder-reference': 'REFE', 'folder-samples': 'SAMP', 'folder-tutorials': 'TUTO', 'folder-notes': 'NOTE', 'folder-changelog': 'CHAN', 'folder-screenshots': 'SCRE', 'folder-diagrams': 'DIAG', 'folder-architecture': 'ARCH', 'folder-adr': 'ADR', 'folder-docker': 'DOCK', 'folder-containers': 'CONT', 'folder-compose': 'COMP', 'folder-k8s': 'K8S', 'folder-kubernetes': 'KUBE', 'folder-helm': 'HELM', 'folder-terraform': '.TER', 'folder-infra': 'INFR', 'folder-deployment': 'DEPL', 'folder-deploy': 'DEPL', 'folder-automation': 'AUTO', 'folder-pipelines': 'PIPE', 'folder-ci': 'CI', 'folder-cd': 'CD', 'folder-ansible': 'ANSI', 'folder-playbooks': 'PLAY', 'folder-asset': 'ASSE', 'folder-icon': 'ICON', 'folder-logos': 'LOGO', 'folder-logo': 'LOGO', 'folder-avatars': 'AVAT', 'folder-backgrounds': 'BACK', 'folder-wallpapers': 'WALL', 'folder-textures': 'TEXT', 'folder-sprites': 'SPRI', 'folder-sprite': 'SPRI', 'folder-audio': 'AUDI', 'folder-sounds': 'SOUN', 'folder-music': 'MUSI', 'folder-video': 'VIDE', 'folder-videos': 'VIDE', 'folder-3d': '3D', 'folder-materials': 'MATE', 'folder-shaders': 'SHAD', 'folder-particles': 'PART', 'folder-animations2d': 'ANIM', 'folder-animations3d': 'ANIM', 'folder-game': 'GAME', 'folder-games': 'GAME', 'folder-scenes': 'SCEN', 'folder-scene': 'SCEN', 'folder-levels': 'LEVE', 'folder-level': 'LEVE', 'folder-maps': 'MAPS', 'folder-map': 'MAP', 'folder-actors': 'ACTO', 'folder-characters': 'CHAR', 'folder-enemies': 'ENEM', 'folder-npcs': 'NPCS', 'folder-items': 'ITEM', 'folder-weapons': 'WEAP', 'folder-vehicles': 'VEHI', 'folder-inventory': 'INVE', 'folder-quests': 'QUES', 'folder-dialogue': 'DIAL', 'folder-cutscenes': 'CUTS', 'folder-world': 'WORL', 'folder-worlds': 'WORL', 'folder-prefabs': 'PREF', 'folder-meshes': 'MESH', 'folder-vfx': 'VFX', 'folder-sfx': 'SFX', 'folder-next': '.NEX', 'folder-nuxt': '.NUX', 'folder-svelte-kit': '.SVE', 'folder-astro': '.AST', 'folder-output': 'OUTP', 'folder-obj': 'OBJ', 'folder-cache': '.CAC', 'folder-turbo': '.TUR', 'folder-vite': '.VIT', 'folder-parcel-cache': '.PAR', 'folder-angular': '.ANG', 'folder-expo': '.EXP', 'folder-gradle': '.GRA', 'folder-dart-tool': '.DAR', 'folder-vs': '.VS', 'folder-venv': 'VENV', 'folder---pycache--': '__PY', 'folder-databases': 'DATA', 'folder-sql': 'SQL', 'folder-schema': 'SCHE', 'folder-migration': 'MIGR', 'folder-seed': 'SEED', 'folder-backups': 'BACK', 'folder-backup': 'BACK', 'folder-indexes': 'INDE', 'folder-procedures': 'PROC', 'folder-functions': 'FUNC', 'folder-triggers': 'TRIG', 'folder-presentation': 'PRES', 'folder-datasources': 'DATA', 'folder-data-sources': 'DATA', 'folder-value-objects': 'VALU', 'folder-use-cases': 'USE_', 'folder-usecases': 'USEC', 'folder-factories': 'FACT', 'folder-builders': 'BUIL', 'folder-strategies': 'STRA', 'folder-contracts': 'CONT', 'folder-ports': 'PORT', 'folder-package': 'PACK', 'folder-workspaces': 'WORK', 'folder-workspace': 'WORK', 'folder-libraries': 'LIBR', 'folder-plugins': 'PLUG', 'folder-extensions': 'EXTE', 'folder-packages-core': 'PACK', 'folder-packages-ui': 'PACK', 'folder-packages-config': 'PACK', 'folder-apps-web': 'APPS', 'folder-apps-api': 'APPS', 'folder-apps-mobile': 'APPS', 'folder-apps-desktop': 'APPS', 'folder-authentication': 'AUTH', 'folder-accounts': 'ACCO', 'folder-users': 'USER', 'folder-profiles': 'PROF', 'folder-sessions': 'SESS', 'folder-tokens': 'TOKE', 'folder-permissions': 'PERM', 'folder-roles': 'ROLE', 'folder-guards': 'GUAR', 'folder-oauth': 'OAUT', 'folder-sso': 'SSO', 'folder-credentials': 'CRED', 'folder-identity': 'IDEN', 'folder-products': 'PROD', 'folder-product': 'PROD', 'folder-catalog': 'CATA', 'folder-categories': 'CATE', 'folder-cart': 'CART', 'folder-checkout': 'CHEC', 'folder-orders': 'ORDE', 'folder-payments': 'PAYM', 'folder-billing': 'BILL', 'folder-invoices': 'INVO', 'folder-customers': 'CUST', 'folder-reviews': 'REVI', 'folder-wishlist': 'WISH', 'folder-coupons': 'COUP', 'folder-discounts': 'DISC', 'folder-shipping': 'SHIP', 'folder-posts': 'POST', 'folder-comments': 'COMM', 'folder-messages': 'MESS', 'folder-chat': 'CHAT', 'folder-conversations': 'CONV', 'folder-notifications': 'NOTI', 'folder-followers': 'FOLL', 'folder-following': 'FOLL', 'folder-friends': 'FRIE', 'folder-groups': 'GROU', 'folder-communities': 'COMM', 'folder-feeds': 'FEED', 'folder-stories': 'STOR', 'folder-reactions': 'REAC', 'folder-likes': 'LIKE', 'folder-shares': 'SHAR', 'folder-ai': 'AI', 'folder-ml': 'ML', 'folder-model': 'MODE', 'folder-training': 'TRAI', 'folder-datasets': 'DATA', 'folder-dataset': 'DATA', 'folder-embeddings': 'EMBE', 'folder-vectors': 'VECT', 'folder-vector': 'VECT', 'folder-prompts': 'PROM', 'folder-agents': 'AGEN', 'folder-rag': 'RAG', 'folder-retrieval': 'RETR', 'folder-evaluation': 'EVAL', 'folder-evaluations': 'EVAL', 'folder-inference': 'INFE', 'folder-checkpoints': 'CHEC', 'folder-weights': 'WEIG', 'folder-tokenizers': 'TOKE', 'folder-notebooks': 'NOTE', 'folder-log': 'LOG', 'folder-runtime': 'RUNT', 'folder-downloads': 'DOWN', 'folder-exports': 'EXPO', 'folder-imports': 'IMPO', 'folder-generated': 'GENE', 'folder-generated-assets': 'GENE', 'folder-artifacts': 'ARTI', 'folder-artifacts-cache': 'ARTI', 'folder-env': '.ENV', 'folder-config': '.CON', 'folder-local': '.LOC', 'folder-npm': '.NPM', 'folder-yarn': '.YAR', 'folder-pnpm-store': '.PNP', 'folder-pytest-cache': '.PYT', 'folder-mypy-cache': '.MYP', 'folder-ruff-cache': '.RUF', 'folder-storybook': '.STO', 'folder-changeset': '.CHA', 'folder-nx': '.NX', 'folder-vercel': '.VER'};

const preferredColors = {javascript: 'yellow', cjs: 'yellow', mjs: 'yellow', json: 'yellow', jsonc: 'yellow', env: 'green', yaml: 'yellow',
  typescript: 'blue', tsx: 'blue', css: 'cyan', scss: 'pink', sass: 'pink', less: 'blue', html: 'orange', xml: 'orange',
  python: 'yellow', java: 'orange', go: 'cyan', rust: 'orange', ruby: 'pink', php: 'purple', c: 'blue', cpp: 'cyan',
  'c-cpp': 'cyan', csharp: 'purple', kotlin: 'pink', swift: 'orange', dart: 'cyan', vue: 'green', svelte: 'orange',
  jsx: 'yellow', react: 'cyan', jsonc: 'green', graphql: 'pink', gql: 'pink', sql: 'blue', shell: 'green', powershell: 'cyan', bat: 'green',
  audio: 'purple', video: 'red', document: 'blue', terminal: 'green', layers: 'cyan', clock: 'orange', flask: 'pink',
  source: 'cyan', network: 'blue', monitor: 'purple', elixir: 'purple', erlang: 'red', haskell: 'purple', clojure: 'green',
  scala: 'red', groovy: 'orange', fsharp: 'blue', visualbasic: 'blue', assembly: 'orange', zig: 'yellow', nim: 'green', crystal: 'cyan', perl: 'purple', racket: 'pink',
  docker: 'blue', node: 'green', npm: 'red', package: 'red', git: 'orange', config: 'purple', vite: 'purple', next: 'white',
  astro: 'orange', tailwind: 'cyan', prisma: 'purple', database: 'blue', data: 'cyan', log: 'orange', text: 'white',
  readme: 'purple', markdown: 'blue', license: 'yellow', test: 'green', archive: 'orange', pdf: 'red', image: 'pink', terraform: 'purple',
  wasm: 'purple', hcl: 'purple', mermaid: 'pink', proto: 'blue', firebase: 'orange', make: 'red', format: 'cyan', lint: 'orange',
  folder: 'cyan', 'folder-open': 'purple', 'folder-src': 'cyan', 'folder-app': 'purple', 'folder-ui': 'blue',
  'folder-components': 'cyan', 'folder-models': 'blue', 'folder-services': 'green', 'folder-utils': 'purple',
  'folder-hooks': 'pink', 'folder-pages': 'orange', 'folder-routes': 'green', 'folder-public': 'cyan', 'folder-assets': 'pink',
  'folder-tests': 'green', 'folder-node-modules': 'green', 'folder-config': 'purple', 'folder-docs': 'purple', 'folder-scripts': 'red',
  'folder-server': 'blue', 'folder-client': 'cyan', 'folder-prisma': 'purple', 'folder-database': 'blue', 'folder-migrations': 'orange',
  'folder-packages': 'red', 'folder-examples': 'purple', 'folder-build': 'orange', 'folder-dist': 'orange', 'folder-git': 'orange',
  'folder-vscode': 'cyan', 'folder-controllers': 'orange', 'folder-views': 'purple', 'folder-styles': 'cyan', 'folder-types': 'blue',
  'folder-schemas': 'blue', 'folder-store': 'purple', 'folder-context': 'cyan', 'folder-middleware': 'orange', 'folder-workers': 'green',
  'folder-e2e': 'green', 'folder-mocks': 'pink', 'folder-vendor': 'white', 'folder-logs': 'orange', 'folder-storybook': 'yellow',
  'folder-locales': 'cyan', 'folder-features': 'cyan', 'folder-lib': 'purple', 'folder-constants': 'yellow',
  'folder-interfaces': 'cyan', 'folder-graph': 'pink', 'folder-layouts': 'blue', 'folder-media': 'pink',
  'folder-fixtures': 'orange', 'folder-cli': 'red', 'folder-infrastructure': 'blue', 'folder-jobs': 'orange', 'folder-cache': 'purple',
  'folder-icons': 'pink', 'folder-fonts': 'yellow',
  supabase: 'green', github: 'white',
  'folder-supabase': 'green', 'folder-github': 'white', 'folder-npm': 'red', 'd-ts': 'yellow', 'd-mts': 'yellow', 'd-cts': 'yellow', 'js-map': 'yellow', 'ts-map': 'yellow', 'babelrc': 'yellow', 'babelrc-js': 'yellow', 'babelrc-cjs': 'yellow', 'babelrc-json': 'yellow', 'tsconfig-app-json': 'yellow', 'tsconfig-node-json': 'yellow', 'tsconfig-build-json': 'yellow', 'tsconfig-jsonc': 'yellow', 'styl': 'orange', 'postcss': 'orange', 'pcss': 'orange', 'webmanifest': 'orange', 'index-html': 'orange', '404-html': 'orange', 'humans-txt': 'orange', 'browserconfig-xml': 'orange', 'site-webmanifest': 'orange', '-app-tsx': 'cyan', '-app-jsx': 'cyan', '-document-tsx': 'cyan', '-document-jsx': 'cyan', 'page-tsx': 'cyan', 'page-jsx': 'cyan', 'layout-tsx': 'cyan', 'layout-jsx': 'cyan', 'loading-tsx': 'cyan', 'error-tsx': 'cyan', 'not-found-tsx': 'cyan', 'route-ts': 'cyan', 'middleware-ts': 'green', 'next-env-d-ts': 'cyan', 'nuxt-config-ts': 'cyan', 'angular-json': 'cyan', 'components-json': 'cyan', 'server-js': 'green', 'server-ts': 'green', 'app-js': 'green', 'app-ts': 'green', 'index-js': 'green', 'index-ts': 'green', 'api-js': 'green', 'api-ts': 'green', 'controller-js': 'green', 'controller-ts': 'green', 'service-js': 'green', 'service-ts': 'green', 'middleware-js': 'green', 'router-js': 'green', 'router-ts': 'green', 'routes-js': 'green', 'routes-ts': 'green', 'model-js': 'green', 'model-ts': 'green', 'schema-js': 'green', 'schema-ts': 'green', 'validator-js': 'green', 'validator-ts': 'green', 'worker-js': 'green', 'worker-ts': 'green', 'queue-js': 'green', 'queue-ts': 'green', 'cron-js': 'green', 'cron-ts': 'green', 'socket-js': 'green', 'socket-ts': 'green', 'pyi': 'yellow', 'pyx': 'yellow', 'pxd': 'yellow', 'pyc': 'yellow', 'pyo': 'yellow', 'ipynb': 'yellow', 'setup-py': 'yellow', 'setup-cfg': 'yellow', 'tox-ini': 'yellow', 'pytest-ini': 'green', 'mypy-ini': 'yellow', 'python-version': 'yellow', 'pipfile': 'yellow', 'pipfile-lock': 'yellow', 'gradle-kts': 'orange', 'class': 'orange', 'jar': 'orange', 'war': 'orange', 'ear': 'orange', 'build-gradle-kts': 'cyan', 'settings-gradle': 'orange', 'settings-gradle-kts': 'orange', 'gradle-properties': 'cyan', 'gradlew': 'orange', 'gradlew-bat': 'orange', 'hh': 'blue', 'hxx': 'blue', 'm': 'cyan', 'mm': 'cyan', 's': 'blue', 'o': 'blue', 'obj': 'red', 'a': 'blue', 'lib': 'blue', 'so': 'blue', 'dll': 'blue', 'dylib': 'blue', 'cmakelists-txt': 'blue', 'makefile': 'blue', 'meson-build': 'blue', 'vcpkg-json': 'blue', 'conanfile-txt': 'blue', 'conanfile-py': 'blue', 'csx': 'purple', 'sln': 'purple', 'csproj': 'purple', 'fsproj': 'purple', 'vbproj': 'purple', 'props': 'purple', 'targets': 'purple', 'nuspec': 'purple', 'nupkg': 'purple', 'global-json': 'purple', 'directory-build-props': 'purple', 'directory-build-targets': 'purple', 'packages-lock-json': 'purple', 'rlib': 'orange', 'cargo-toml': 'red', 'cargo-lock': 'red', 'build-rs': 'orange', 'mod': 'orange', 'sum': 'orange', 'work': 'orange', 'go-work': 'orange', 'zon': 'orange', 'build-zig': 'orange', 'build-zig-zon': 'orange', 'php3': 'purple', 'php4': 'purple', 'php5': 'purple', 'phtml': 'purple', 'phar': 'purple', 'blade-php': 'purple', 'composer-lock': 'purple', 'rake': 'purple', 'gemspec': 'purple', 'gemfile': 'red', 'gemfile-lock': 'purple', 'rakefile': 'purple', 'cpanfile': 'purple', 'makefile-pl': 'purple', 'pubspec-yaml': 'red', 'pubspec-lock': 'cyan', 'podfile': 'red', 'podfile-lock': 'cyan', 'info-plist': 'cyan', 'androidmanifest-xml': 'cyan', 'local-properties': 'cyan', 'mainactivity-kt': 'cyan', 'mainactivity-java': 'cyan', 'appdelegate-swift': 'cyan', 'main-dart': 'cyan', 'analysis-options-yaml': 'cyan', 'flutter-launcher-icons-yaml': 'cyan', 'l10n-yaml': 'cyan', 'generated-plugin-registrant-dart': 'cyan', 'android': 'cyan', 'ios': 'cyan', 'web': 'cyan', 'linux': 'cyan', 'macos': 'cyan', 'windows': 'cyan', 'integration-test': 'cyan', 'ksh': 'green', 'psd1': 'green', 'command': 'green', 'env-local': 'green', 'env-development': 'green', 'env-production': 'green', 'env-test': 'green', 'profile': 'green', 'bashrc': 'green', 'zshrc': 'green', 'bash-profile': 'green', 'gitconfig': 'green', 'npmrc': 'green', 'yarnrc': 'green', 'editorconfig': 'green', 'cfg': 'yellow', 'plist': 'yellow', 'config-json': 'yellow', 'settings-json': 'cyan', 'appsettings-json': 'yellow', 'launch-json': 'cyan', 'tasks-json': 'cyan', 'settings-yaml': 'yellow', 'db3': 'blue', 'mdb': 'blue', 'accdb': 'blue', 'dump': 'blue', 'bak': 'blue', 'sql-gz': 'blue', 'schema-sql': 'blue', 'seed-sql': 'blue', 'migration-sql': 'blue', 'database-sql': 'blue', 'drizzle-config-ts': 'blue', 'ormconfig-json': 'blue', 'rst': 'white', 'adoc': 'white', 'tex': 'white', 'latex': 'white', 'org': 'white', 'epub': 'white', 'pages': 'white', 'readme-md': 'blue', 'changelog-md': 'blue', 'contributing-md': 'white', 'license-md': 'white', 'security-md': 'white', 'code-of-conduct-md': 'white', 'icns': 'pink', 'psd': 'pink', 'ai': 'pink', 'eps': 'pink', 'fig': 'pink', 'sketch': 'pink', 'xd': 'pink', 'kra': 'pink', 'ase': 'pink', 'aseprite': 'pink', 'clip': 'pink', 'ora': 'pink', 'raw': 'pink', 'heic': 'pink', 'heif': 'pink', 'mid': 'purple', 'midi': 'purple', 'wmv': 'purple', 'flv': 'purple', 'mpeg': 'purple', 'mpg': 'purple', 'm4v': 'purple', 'srt': 'purple', 'vtt': 'purple', 'ass': 'purple', 'ssa': 'purple', 'blend': 'red', 'fbx': 'red', 'gltf': 'red', 'glb': 'red', 'dae': 'red', '3ds': 'red', 'stl': 'red', 'unity': 'red', 'unitypackage': 'red', 'prefab': 'red', 'asset': 'red', 'scene': 'red', 'godot': 'red', 'tscn': 'red', 'tres': 'red', 'gd': 'red', 'gdshader': 'red', 'shader': 'red', 'hlsl': 'red', 'cginc': 'red', 'pak': 'red', 'wad': 'red', 'bsp': 'red', 'uasset': 'red', 'umap': 'red', 'dockerfile': 'blue', 'dockerignore': 'blue', 'compose-yml': 'blue', 'compose-yaml': 'blue', 'containerfile': 'blue', 'docker-entrypoint-sh': 'blue', 'gitignore': 'orange', 'gitattributes': 'orange', 'gitmodules': 'orange', 'gitkeep': 'orange', 'github': 'orange', 'codeowners': 'orange', 'release-yml': 'orange', 'ci-yml': 'orange', 'cd-yml': 'orange', 'pull-request-template-md': 'orange', 'issue-template-md': 'orange', 'funding-yml': 'orange', 'renovate-json5': 'orange', 'bun-lock': 'red', 'deno-lock': 'red', 'mix-exs': 'red', 'mix-lock': 'red', 'travis-yml': 'green', 'circleci': 'green', 'jenkinsfile': 'green', 'bitbucket-pipelines-yml': 'green', 'gitlab-ci-yml': 'green', 'appveyor-yml': 'green', 'buildspec-yml': 'green', 'cloudbuild-yaml': 'green', 'render-yaml': 'green', 'heroku-yml': 'green', 'tfstate': 'purple', 'nomad': 'purple', 'cue': 'purple', 'main-tf': 'purple', 'variables-tf': 'purple', 'outputs-tf': 'purple', 'providers-tf': 'purple', 'serverless-yaml': 'purple', 'sam-yaml': 'purple', 'template-yaml': 'purple', 'pulumi-yaml': 'purple', 'pulumi-dev-yaml': 'purple', 'cdk-json': 'purple', 'kustomization-yaml': 'purple', 'deployment-yaml': 'blue', 'service-yaml': 'blue', 'ingress-yaml': 'blue', 'configmap-yaml': 'blue', 'secret-yaml': 'blue', 'namespace-yaml': 'blue', 'statefulset-yaml': 'blue', 'daemonset-yaml': 'blue', 'job-yaml': 'blue', 'cronjob-yaml': 'blue', 'persistentvolume-yaml': 'blue', 'persistentvolumeclaim-yaml': 'blue', 'helm': 'blue', 'chart-yaml': 'blue', 'values-yaml': 'blue', 'templates': 'blue', '-helpers-tpl': 'blue', 'spec-js': 'green', 'spec-ts': 'green', 'test-js': 'green', 'test-ts': 'green', 'test-jsx': 'green', 'test-tsx': 'green', 'spec-jsx': 'green', 'spec-tsx': 'green', 'karma-conf-js': 'green', 'mocha-opts': 'green', 'fixtures': 'green', 'mocks': 'green', 'snapshots': 'green', '--tests--': 'green', '--mocks--': 'green', 'vscode': 'cyan', 'keybindings-json': 'cyan', 'extensions-json': 'cyan', 'snippets': 'cyan', 'snippets-code-snippets': 'cyan', 'devcontainer': 'cyan', 'devcontainer-json': 'cyan', 'profiles': 'cyan', 'avsc': 'pink', 'thrift': 'pink', 'openapi': 'pink', 'swagger': 'pink', 'http': 'pink', 'rest': 'pink', 'har': 'pink', 'wsdl': 'pink', 'raml': 'pink', 'openapi-yaml': 'pink', 'openapi-json': 'pink', 'swagger-yaml': 'pink', 'swagger-json': 'pink', 'pem': 'red', 'crt': 'blue', 'cer': 'red', 'der': 'red', 'csr': 'red', 'pub': 'red', 'asc': 'red', 'sig': 'red', 'key': 'red', 'p12': 'red', 'pfx': 'red', 'keystore': 'red', 'jks': 'red', 'truststore': 'red', 'htpasswd': 'red', 'well-known': 'red', 'rar': 'orange', '7z': 'orange', 'bz2': 'orange', 'xz': 'orange', 'tgz': 'orange', 'tar-gz': 'orange', 'tar-xz': 'orange', 'iso': 'orange', 'img': 'orange', 'dmg': 'orange', 'pkg': 'orange', 'deb': 'orange', 'rpm': 'orange', 'msi': 'orange', 'exe': 'orange', 'appimage': 'orange', 'snap': 'orange', 'flatpak': 'orange', 'folder-apps': 'cyan', 'folder-component': 'cyan', 'folder-screens': 'cyan', 'folder-helpers': 'cyan', 'folder-contexts': 'cyan', 'folder-stores': 'cyan', 'folder-state': 'cyan', 'folder-validators': 'cyan', 'folder-settings': 'cyan', 'folder-resources': 'cyan', 'folder-data': 'cyan', 'folder-frontend': 'cyan', 'folder-web': 'cyan', 'folder-website': 'cyan', 'folder-ux': 'cyan', 'folder-design': 'cyan', 'folder-css': 'cyan', 'folder-scss': 'cyan', 'folder-themes': 'cyan', 'folder-img': 'cyan', 'folder-animations': 'cyan', 'folder-widgets': 'cyan', 'folder-elements': 'cyan', 'folder-sections': 'cyan', 'folder-navigation': 'cyan', 'folder-navbar': 'cyan', 'folder-header': 'cyan', 'folder-footer': 'cyan', 'folder-sidebar': 'cyan', 'folder-modals': 'cyan', 'folder-dialogs': 'cyan', 'folder-forms': 'cyan', 'folder-tables': 'cyan', 'folder-cards': 'cyan', 'folder-buttons': 'cyan', 'folder-inputs': 'cyan', 'folder-charts': 'cyan', 'folder-backend': 'cyan', 'folder-apis': 'cyan', 'folder-middlewares': 'cyan', 'folder-events': 'cyan', 'folder-listeners': 'cyan', 'folder-handlers': 'cyan', 'folder-tasks': 'cyan', 'folder-webhooks': 'cyan', 'folder-rest': 'cyan', 'folder-rpc': 'cyan', 'folder-sockets': 'cyan', 'folder-websocket': 'cyan', 'folder-auth': 'cyan', 'folder-authorization': 'cyan', 'folder-security': 'cyan', 'folder-logging': 'cyan', 'folder-integration': 'cyan', 'folder-unit': 'cyan', 'folder-functional': 'cyan', 'folder-acceptance': 'cyan', 'folder-stubs': 'cyan', 'folder-fakes': 'cyan', 'folder-playwright': 'cyan', 'folder-cypress': 'cyan', 'folder-documentation': 'cyan', 'folder-wiki': 'cyan', 'folder-guides': 'cyan', 'folder-manual': 'cyan', 'folder-reference': 'cyan', 'folder-samples': 'cyan', 'folder-tutorials': 'cyan', 'folder-notes': 'cyan', 'folder-changelog': 'cyan', 'folder-screenshots': 'cyan', 'folder-diagrams': 'cyan', 'folder-architecture': 'cyan', 'folder-adr': 'cyan', 'folder-docker': 'cyan', 'folder-containers': 'cyan', 'folder-compose': 'cyan', 'folder-k8s': 'cyan', 'folder-kubernetes': 'cyan', 'folder-helm': 'cyan', 'folder-terraform': 'cyan', 'folder-infra': 'cyan', 'folder-deployment': 'cyan', 'folder-deploy': 'cyan', 'folder-automation': 'cyan', 'folder-pipelines': 'cyan', 'folder-ci': 'cyan', 'folder-cd': 'cyan', 'folder-ansible': 'cyan', 'folder-playbooks': 'cyan', 'folder-asset': 'cyan', 'folder-icon': 'cyan', 'folder-logos': 'cyan', 'folder-logo': 'cyan', 'folder-avatars': 'cyan', 'folder-backgrounds': 'cyan', 'folder-wallpapers': 'cyan', 'folder-textures': 'cyan', 'folder-sprites': 'cyan', 'folder-sprite': 'cyan', 'folder-audio': 'cyan', 'folder-sounds': 'cyan', 'folder-music': 'cyan', 'folder-video': 'cyan', 'folder-videos': 'cyan', 'folder-3d': 'cyan', 'folder-materials': 'cyan', 'folder-shaders': 'cyan', 'folder-particles': 'cyan', 'folder-animations2d': 'cyan', 'folder-animations3d': 'cyan', 'folder-game': 'cyan', 'folder-games': 'cyan', 'folder-scenes': 'cyan', 'folder-scene': 'cyan', 'folder-levels': 'cyan', 'folder-level': 'cyan', 'folder-maps': 'cyan', 'folder-map': 'cyan', 'folder-actors': 'cyan', 'folder-characters': 'cyan', 'folder-enemies': 'cyan', 'folder-npcs': 'cyan', 'folder-items': 'cyan', 'folder-weapons': 'cyan', 'folder-vehicles': 'cyan', 'folder-inventory': 'cyan', 'folder-quests': 'cyan', 'folder-dialogue': 'cyan', 'folder-cutscenes': 'cyan', 'folder-world': 'cyan', 'folder-worlds': 'cyan', 'folder-prefabs': 'cyan', 'folder-meshes': 'cyan', 'folder-vfx': 'cyan', 'folder-sfx': 'cyan', 'folder-next': 'cyan', 'folder-nuxt': 'cyan', 'folder-svelte-kit': 'cyan', 'folder-astro': 'cyan', 'folder-output': 'cyan', 'folder-obj': 'cyan', 'folder-cache': 'cyan', 'folder-turbo': 'cyan', 'folder-vite': 'cyan', 'folder-parcel-cache': 'cyan', 'folder-angular': 'cyan', 'folder-expo': 'cyan', 'folder-gradle': 'cyan', 'folder-dart-tool': 'cyan', 'folder-vs': 'cyan', 'folder-venv': 'cyan', 'folder---pycache--': 'cyan', 'folder-databases': 'cyan', 'folder-sql': 'cyan', 'folder-schema': 'cyan', 'folder-migration': 'cyan', 'folder-seed': 'cyan', 'folder-backups': 'cyan', 'folder-backup': 'cyan', 'folder-indexes': 'cyan', 'folder-procedures': 'cyan', 'folder-functions': 'cyan', 'folder-triggers': 'cyan', 'folder-presentation': 'cyan', 'folder-datasources': 'cyan', 'folder-data-sources': 'cyan', 'folder-value-objects': 'cyan', 'folder-use-cases': 'cyan', 'folder-usecases': 'cyan', 'folder-factories': 'cyan', 'folder-builders': 'cyan', 'folder-strategies': 'cyan', 'folder-contracts': 'cyan', 'folder-ports': 'cyan', 'folder-package': 'cyan', 'folder-workspaces': 'cyan', 'folder-workspace': 'cyan', 'folder-libraries': 'cyan', 'folder-plugins': 'cyan', 'folder-extensions': 'cyan', 'folder-packages-core': 'cyan', 'folder-packages-ui': 'cyan', 'folder-packages-config': 'cyan', 'folder-apps-web': 'cyan', 'folder-apps-api': 'cyan', 'folder-apps-mobile': 'cyan', 'folder-apps-desktop': 'cyan', 'folder-authentication': 'cyan', 'folder-accounts': 'cyan', 'folder-users': 'cyan', 'folder-profiles': 'cyan', 'folder-sessions': 'cyan', 'folder-tokens': 'cyan', 'folder-permissions': 'cyan', 'folder-roles': 'cyan', 'folder-guards': 'cyan', 'folder-oauth': 'cyan', 'folder-sso': 'cyan', 'folder-credentials': 'cyan', 'folder-identity': 'cyan', 'folder-products': 'cyan', 'folder-product': 'cyan', 'folder-catalog': 'cyan', 'folder-categories': 'cyan', 'folder-cart': 'cyan', 'folder-checkout': 'cyan', 'folder-orders': 'cyan', 'folder-payments': 'cyan', 'folder-billing': 'cyan', 'folder-invoices': 'cyan', 'folder-customers': 'cyan', 'folder-reviews': 'cyan', 'folder-wishlist': 'cyan', 'folder-coupons': 'cyan', 'folder-discounts': 'cyan', 'folder-shipping': 'cyan', 'folder-posts': 'cyan', 'folder-comments': 'cyan', 'folder-messages': 'cyan', 'folder-chat': 'cyan', 'folder-conversations': 'cyan', 'folder-notifications': 'cyan', 'folder-followers': 'cyan', 'folder-following': 'cyan', 'folder-friends': 'cyan', 'folder-groups': 'cyan', 'folder-communities': 'cyan', 'folder-feeds': 'cyan', 'folder-stories': 'cyan', 'folder-reactions': 'cyan', 'folder-likes': 'cyan', 'folder-shares': 'cyan', 'folder-ai': 'cyan', 'folder-ml': 'cyan', 'folder-model': 'cyan', 'folder-training': 'cyan', 'folder-datasets': 'cyan', 'folder-dataset': 'cyan', 'folder-embeddings': 'cyan', 'folder-vectors': 'cyan', 'folder-vector': 'cyan', 'folder-prompts': 'cyan', 'folder-agents': 'cyan', 'folder-rag': 'cyan', 'folder-retrieval': 'cyan', 'folder-evaluation': 'cyan', 'folder-evaluations': 'cyan', 'folder-inference': 'cyan', 'folder-checkpoints': 'cyan', 'folder-weights': 'cyan', 'folder-tokenizers': 'cyan', 'folder-notebooks': 'cyan', 'folder-log': 'cyan', 'folder-runtime': 'cyan', 'folder-downloads': 'cyan', 'folder-exports': 'cyan', 'folder-imports': 'cyan', 'folder-generated': 'cyan', 'folder-generated-assets': 'cyan', 'folder-artifacts': 'cyan', 'folder-artifacts-cache': 'cyan', 'folder-env': 'cyan', 'folder-config': 'cyan', 'folder-local': 'cyan', 'folder-npm': 'cyan', 'folder-yarn': 'cyan', 'folder-pnpm-store': 'cyan', 'folder-pytest-cache': 'cyan', 'folder-mypy-cache': 'cyan', 'folder-ruff-cache': 'cyan', 'folder-storybook': 'cyan', 'folder-changeset': 'cyan', 'folder-nx': 'cyan', 'folder-vercel': 'cyan', 'readme-txt': 'blue', 'changelog': 'blue', 'notice': 'blue', 'authors': 'blue', 'contributors': 'blue', 'todo': 'blue', 'todo-md': 'blue', 'roadmap-md': 'blue', 'architecture-md': 'blue', 'design-md': 'blue', 'install-md': 'blue', 'setup-md': 'blue', 'development-md': 'blue', 'migration-md': 'blue', 'faq-md': 'blue', 'main': 'blue', 'index': 'blue', 'app': 'blue', 'server': 'blue', 'client': 'blue', 'constants': 'blue', 'types': 'blue', 'utils': 'blue', 'helpers': 'blue', 'hooks': 'blue', 'context': 'blue', 'provider': 'blue', 'store': 'blue', 'router': 'blue', 'routes': 'blue', 'api': 'blue', 'schema': 'blue', 'model': 'blue', 'service': 'blue', 'controller': 'blue', 'repository': 'blue', 'middleware': 'blue', 'validator': 'blue', 'logger': 'blue', 'worker': 'blue', 'queue': 'blue', 'events': 'blue', 'commands': 'blue', 'queries': 'blue', 'button': 'blue', 'icon': 'blue', 'logo': 'blue', 'header': 'blue', 'footer': 'blue', 'navbar': 'blue', 'sidebar': 'blue', 'menu': 'blue', 'modal': 'blue', 'dialog': 'blue', 'drawer': 'blue', 'card': 'blue', 'avatar': 'blue', 'badge': 'blue', 'alert': 'blue', 'toast': 'blue', 'tooltip': 'blue', 'dropdown': 'blue', 'select': 'blue', 'input': 'blue', 'form': 'blue', 'table': 'blue', 'tabs': 'blue', 'accordion': 'blue', 'carousel': 'blue', 'slider': 'blue', 'spinner': 'blue', 'skeleton': 'blue', 'pagination': 'blue', 'breadcrumb': 'blue', 'search': 'blue', 'filter': 'blue', '8-bit': 'blue', '16-bit': 'blue', '32-bit': 'blue', 'pixel-art': 'blue', 'retro-terminal': 'blue', 'neon': 'blue', 'cyberpunk': 'blue', 'synthwave': 'blue', 'vaporwave': 'blue', 'holographic': 'blue', 'glass': 'blue', 'glassmorphism': 'blue', 'metallic': 'blue', 'chrome': 'blue', 'gold': 'blue', 'silver': 'blue', 'black-and-white': 'blue', 'monochrome': 'blue', 'outline': 'blue', 'filled': 'blue', 'flat': 'blue', 'minimal': 'blue', '3d': 'blue', 'isometric': 'blue', 'low-poly': 'blue', 'glow': 'blue', 'electric': 'blue', 'matrix': 'blue', 'arcade': 'blue', 'game-ui': 'blue', 'terminal-green': 'blue', 'blueprint': 'blue', 'paper': 'blue', 'sticker': 'blue', 'rounded': 'blue', 'sharp': 'blue', 'industrial': 'blue', 'closed-folder': 'blue', 'open-folder': 'blue', 'empty-folder': 'blue', 'full-folder': 'blue', 'locked-folder': 'blue', 'unlocked-folder': 'blue', 'hidden-folder': 'blue', 'shared-folder': 'blue', 'favorite-folder': 'blue', 'starred-folder': 'blue', 'warning-folder': 'blue', 'error-folder': 'blue', 'cloud-folder': 'blue', 'sync-folder': 'blue', 'download-folder': 'blue', 'upload-folder': 'blue', 'archive-folder': 'blue', 'git-folder': 'blue', 'branch-folder': 'blue', 'root-folder': 'blue', 'source-folder': 'blue', 'test-folder': 'blue', 'build-folder': 'blue', 'config-folder': 'blue', 'database-folder': 'blue', 'assets-folder': 'blue', 'components-folder': 'blue', 'api-folder': 'blue', 'server-folder': 'blue', 'client-folder': 'blue', 'mobile-folder': 'blue', 'desktop-folder': 'blue', 'web-folder': 'blue', 'game-folder': 'blue', 'ai-folder': 'blue', 'security-folder': 'blue', 'documentation-folder': 'blue', 'package-folder': 'blue', 'plugin-folder': 'blue', 'extension-folder': 'blue'};

const cycle = ['cyan', 'purple', 'yellow', 'orange', 'green', 'pink', 'blue'];

// The badge's visual center is y=16. Most marks are authored around y=17
// and receive the base -1 shift below. These small per-mark corrections keep
// asymmetric logos optically centered without moving any text labels.
const verticalCorrections = {
  json: -0.5, vue: -1, docker: -1.5, java: -1, lock: -1,
  graphql: 1, gql: 1, sql: 0.5, image: 0.5, archive: 1.5,
  database: 0.5, log: 0.5, vite: 0.5, astro: 1.25, prisma: 0,
  workspace: 0.5,
  lint: 1.5, format: 1,
  folder: -0.5, 'folder-open': -0.5, 'folder-src': -0.5,
  'folder-ui': -0.5, 'folder-components': -0.5,
  'folder-models': 0.5, 'folder-schemas': 0.5, 'folder-prisma': 0.5, 'folder-database': 0.5,
  'folder-assets': 0.5, 'folder-logs': 0.5, 'folder-controllers': -1,
  terminal: 0.5, layers: 0.5, flask: -0.5,
  'folder-features': 0.5, 'folder-graph': 1, 'folder-layouts': 0.5,
  'folder-media': 0.5, 'folder-fixtures': -0.5, 'folder-cli': 0.5, 'folder-cache': 1.5
};

function colorFor(stem) {
  if (preferredColors[stem]) return palette[preferredColors[stem]];
  let hash = 0;
  for (const character of stem) hash = (hash * 31 + character.charCodeAt(0)) >>> 0;
  return palette[cycle[hash % cycle.length]];
}

function escapeXml(value) {
  return value.replaceAll('&', '&amp;').replaceAll('<', '&lt;').replaceAll('>', '&gt;').replaceAll('"', '&quot;');
}

function textMark(label, accent, size = null, y = 17, letterSpacingOverride = null) {
  const len = label.length;

  // Cálculo de largura ponderada para compensar glifos largos (ex: M, W)
  // garantindo que siglas largas como 'MMD' tenham o mesmo respiro e proporção das demais
  let weight = 0;
  for (const ch of label) {
    if ('MWmw'.includes(ch)) weight += 1.4;
    else if ('IJLijl'.includes(ch)) weight += 0.65;
    else weight += 1.0;
  }

  let defaultSize;
  let letterSpacing = '0';

  if (len <= 1) {
    defaultSize = 14.5;
  } else if (len === 2) {
    defaultSize = 12.5;
    letterSpacing = '-0.4px';
  } else if (len === 3) {
    defaultSize = 9.8;
    letterSpacing = '-0.3px';
  } else if (len === 4) {
    defaultSize = 8.0;
    letterSpacing = '-0.2px';
  } else if (len === 5) {
    defaultSize = 6.8;
    letterSpacing = '-0.2px';
  } else {
    defaultSize = 5.8;
    letterSpacing = '-0.2px';
  }

  // Pares com conflito de kerning (ex: base do 'L' colidindo com o gancho do 'J' em 'CLJ')
  if (label.includes('LJ') || label.includes('JL')) {
    letterSpacing = '0.5px';
  }

  // Se a sigla contiver letras largas como 'M' (ex: MMD), ajusta a escala
  // para que ela não fique encostando nas bordas e tenha o mesmo respiro das outras
  if (len >= 2 && weight > len * 1.05) {
    defaultSize = defaultSize * (len / weight);
  }

  const spacing = letterSpacingOverride ?? letterSpacing;
  const fontSize = Number((size ?? defaultSize).toFixed(1));
  const fontFamily = "system-ui, -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, 'Helvetica Neue', sans-serif";
  const fontWeight = '800';

  // dominant-baseline="central" e text-anchor="middle" centralizam com precisão absoluta
  return `<text x="16" y="${y}" text-anchor="middle" dominant-baseline="central" fill="${accent}" font-family="${fontFamily}" font-size="${fontSize}" font-weight="${fontWeight}" letter-spacing="${spacing}">${escapeXml(label)}</text>`;
}

function markdownMark(accent) {
  // Ícone oficial Markdown Mark: moldura retangular com o 'M' clássico e a seta para baixo '↓'
  return `<g fill="${accent}">
    <rect x="4.5" y="9" width="23" height="16" rx="2.8" fill="none" stroke="${accent}" stroke-width="1.5"/>
    <path d="M7 21V13h2.2l2.3 2.8 2.3-2.8h2.2v8h-1.8v-4.8l-2.7 3.3-2.7-3.3V21z"/>
    <path d="M21.5 21l-3.5-4h2.2v-4h2.6v4h2.2z"/>
  </g>`;
}

function npmMark(accent) {
  // Bloco oficial NPM (grade 5x5 proporcional com monograma vazado)
  return `<path fill="${accent}" fill-rule="evenodd" d="M7 8h18v18H7zM10.6 11.6h10.8v10.8h-3.6v-7.2h-3.6v7.2h-3.6z"/>`;
}

function codeMark(accent) {
  // Brackets de código < / > compactos, proporcionais e detalhados com nós neon
  return `<g fill="none" stroke="${accent}" stroke-linecap="round" stroke-linejoin="round">
    <path d="M12.5 12 7.5 17l5 5" stroke-width="2.2"/>
    <path d="m17.5 10.5-3 13" stroke-width="2.2"/>
    <path d="M19.5 12 24.5 17l-5 5" stroke-width="2.2"/>
    <circle cx="12.5" cy="12" r="1" fill="${accent}" stroke="none"/>
    <circle cx="12.5" cy="22" r="1" fill="${accent}" stroke="none"/>
    <circle cx="19.5" cy="12" r="1" fill="${accent}" stroke="none"/>
    <circle cx="19.5" cy="22" r="1" fill="${accent}" stroke="none"/>
  </g>`;
}

function reactMark(accent) {
  return `<g fill="none" stroke-linecap="round"><ellipse cx="16" cy="17" rx="8.6" ry="3.25" stroke="${accent}" stroke-width="2"/><ellipse cx="16" cy="17" rx="8.6" ry="3.25" stroke="${accent}" stroke-width="2" transform="rotate(60 16 17)"/><ellipse cx="16" cy="17" rx="8.6" ry="3.25" stroke="${accent}" stroke-width="2" transform="rotate(120 16 17)"/><circle cx="16" cy="17" r="2.2" fill="${palette.pink}" stroke="none"/></g>`;
}

function jsonMark(accent) {
  return `<g fill="none" stroke-linecap="round" stroke-linejoin="round"><path d="M12.5 9.5h-1.1a3.4 3.4 0 0 0-3.4 3.4v1.6c0 1.5-.7 2.6-2.1 3.5 1.4.9 2.1 2 2.1 3.5v1.6a3.4 3.4 0 0 0 3.4 3.4h1.1M19.5 9.5h1.1a3.4 3.4 0 0 1 3.4 3.4v1.6c0 1.5.7 2.6 2.1 3.5-1.4.9-2.1 2-2.1 3.5v1.6a3.4 3.4 0 0 1-3.4 3.4h-1.1" stroke="${accent}" stroke-width="2.4"/><path d="M15 13.5h2M15 17h2M15 20.5h2" stroke="${palette.cyan}" stroke-width="2"/></g>`;
}

function jsoncMark(accent) {
  const green = palette.greenSoft;
  return `<g stroke-linejoin="round"><path d="M10.2 9h2.4L8.7 25H6.2zM14 9h2.4l-3.7 16h-2.4z" fill="${green}"/><ellipse cx="20.8" cy="17" rx="6.6" ry="8" fill="${green}"/><path d="M20.8 9c3.7 0 6.6 3.6 6.6 8s-2.9 8-6.6 8c2.1-1.2 3.6-4.3 3.6-8s-1.5-6.8-3.6-8z" fill="${palette.greenDeep}" opacity=".86"/><ellipse cx="20.8" cy="17" rx="2.9" ry="4.1" fill="#0B0B0C"/><path d="M18.8 13.3c-.7 1-1.1 2.3-1.1 3.7 0 1.5.4 2.8 1.1 3.8" fill="none" stroke="${green}" stroke-width=".9" opacity=".8"/></g>`;
}

function prismaMark(accent) {
  return `<g stroke="${accent}" stroke-width="1.15" stroke-linejoin="round"><path d="M16 8 8.2 23.2 16 20z" fill="${palette.blue}"/><path d="M16 8 16 20l7.8 3.2z" fill="${accent}"/><path d="M8.2 23.2 16 20l7.8 3.2L16 26z" fill="#6D3FAD"/><path d="M16 8v12" fill="none" stroke="${palette.white}" stroke-width=".8" opacity=".7"/></g>`;
}

// Logos reconhecíveis, desenhados como linhas para preservar o brilho neon.
function brandMark(stem, accent) {
  const cyan = palette.cyan;
  const pink = palette.pink;
  switch (stem) {
    case 'supabase': return `<path d="M18.5 7 9 18h7l-2.5 8L23 14h-7z" fill="none" stroke="${accent}" stroke-width="2" stroke-linejoin="round"/><path d="M18.5 7 16 14" stroke="${cyan}" stroke-width="1"/>`;
    case 'angular': return `<path d="m16 7 9 3.2-1.4 10.2L16 25l-7.6-4.6L7 10.2z" fill="none" stroke="${accent}" stroke-width="1.8" stroke-linejoin="round"/><path d="m16 11-5 10h2.8l1-2.4h2.4l1 2.4H21zM15.2 16.5h1.6L16 14.6z" fill="none" stroke="${pink}" stroke-width="1.4" stroke-linejoin="round"/>`;
    case 'go': return `<path d="M8 15.5h9M10 19h6" stroke="${accent}" stroke-width="1.7" stroke-linecap="round"/><path d="M22 11c-1.5-1.4-3.1-2-5-2-4.4 0-7.7 3.2-7.7 7.5s3.3 7.5 7.7 7.5c2.3 0 4.5-.9 6-2.5v-4.8h-5.3" fill="none" stroke="${accent}" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round"/>`;
    case 'php': return `<ellipse cx="16" cy="17" rx="10" ry="6.7" fill="none" stroke="${accent}" stroke-width="1.8"/><path d="M10 20v-6h2.3c2.8 0 2.8 4.6 0 4.6H10m7.2-4.6v6m0-3h4.3c2.8 0 2.8 3 0 3h-4.3" fill="none" stroke="${pink}" stroke-width="1.35" stroke-linecap="round"/>`;
    case 'swift': return `<path d="M8 11c2.7 2.5 5.2 4.1 7.6 4.8-2.5-2.7-3.5-4.6-3.8-6.2 2.2 2.2 4.7 3.7 7.3 4.4 1.1-1.8 2.1-2.5 3-3.1-.2 3.5-1.1 5.9-2.8 7.5 1.4 1.4 2.6 2.3 4 2.8-3.1 1.4-6.2.7-8.6-.9-2.5 1.5-4.8 1.8-6.7 1.4 1.7-.7 2.9-1.5 3.8-2.5C9.5 17.8 8.5 14.8 8 11z" fill="none" stroke="${accent}" stroke-width="1.5" stroke-linejoin="round"/>`;
    case 'flutter': return `<path d="m8 17 8-9h8l-8 9 8 9h-8zM12 17l4-4 4 4-4 4z" fill="none" stroke="${accent}" stroke-width="1.8" stroke-linejoin="round"/>`;
    case 'dart': return `<path d="m16 7 9 9-9 9-9-9z" fill="none" stroke="${accent}" stroke-width="1.8"/><path d="M16 7v18M7 16h18" stroke="${cyan}" stroke-width="1.1" opacity=".85"/>`;
    case 'kotlin': return `<path d="M8 8h16l-8 8 8 8H8l8-8z" fill="none" stroke="${accent}" stroke-width="1.8" stroke-linejoin="round"/><path d="M8 8v16" stroke="${pink}" stroke-width="1.5"/>`;
    case 'kubernetes': return `<g fill="none" stroke="${accent}" stroke-width="1.5" stroke-linejoin="round"><circle cx="16" cy="17" r="5.5"/><path d="m16 8 2 3.5 3.8-.4-.4 3.8 3.5 2-3.5 2 .4 3.8-3.8-.4-2 3.5-2-3.5-3.8.4.4-3.8-3.5-2 3.5-2-.4-3.8 3.8.4z"/><path d="M16 14v6M13.2 15.5l5.6 3M18.8 15.5l-5.6 3" stroke="${cyan}" stroke-width="1.1"/></g>`;
    case 'terraform': return `<path d="M8 10h16M12 10v14M20 10v14M9 24h14" fill="none" stroke="${accent}" stroke-width="2" stroke-linecap="round"/>`;
    case 'vercel': return `<path d="M7.5 24 16 9l8.5 15z" fill="none" stroke="${accent}" stroke-width="2" stroke-linejoin="round"/>`;
    default: return null;
  }
}

function artFor(stem, accent) {
  const pink = palette.pink;
  const yellow = palette.yellow;
  const white = palette.white;

  switch (stem) {
    case 'supabase':
    case 'angular':
    case 'go':
    case 'php':
    case 'swift':
    case 'flutter':
    case 'dart':
    case 'kotlin':
    case 'kubernetes':
    case 'terraform':
    case 'vercel': return brandMark(stem, accent);
    case 'github':
      return `<path d="M16 4.5C9.6 4.5 4.5 9.6 4.5 16c0 5 3.3 9.3 7.8 10.8.6.1.8-.3.8-.6v-2.1c-3.2.7-3.9-1.5-3.9-1.5-.5-1.3-1.3-1.7-1.3-1.7-1-.7.1-.7.1-.7 1.2.1 1.8 1.2 1.8 1.2 1 1.7 2.7 1.2 3.3 1 .1-.7.4-1.2.7-1.5-2.5-.3-5.2-1.3-5.2-5.7 0-1.3.4-2.3 1.2-3.1-.1-.3-.5-1.5.1-3 0 0 1-.3 3.3 1.2 1-.3 2-.4 3-.4s2 .1 3 .4c2.2-1.5 3.3-1.2 3.3-1.2.6 1.6.2 2.7.1 3 .8.8 1.2 1.8 1.2 3.1 0 4.4-2.7 5.4-5.2 5.7.4.4.8 1.1.8 2.2v3.2c0 .3.2.7.8.6 4.6-1.5 7.8-5.8 7.8-10.8 0-6.4-5.2-11.5-11.5-11.5Z" fill="${accent}"/>`;
    case 'javascript': return textMark('JS', accent);
    case 'typescript': return textMark('TS', accent);
    case 'jsx':
    case 'tsx':
    case 'react': return reactMark(accent);
    case 'clojure': return textMark('CLJ', accent);
    case 'assembly': return textMark('ASM', accent);
    case 'crystal': return textMark('CR', accent);
    case 'elixir': return textMark('EX', accent);
    case 'groovy': return textMark('GRV', accent);
    case 'erlang': return textMark('ERL', accent);
    case 'racket': return textMark('RKT', accent);
    case 'html': return codeMark(accent);
    case 'css': return textMark('CSS', accent);
    case 'scss': return textMark('SCSS', accent);
    case 'sass': return textMark('SASS', accent);
    case 'less': return textMark('LESS', accent);
    case 'json': return jsonMark(accent);
    case 'jsonc': return jsoncMark(accent);
    case 'markdown': return markdownMark(accent);
    case 'shell': return textMark('$_', accent);
    case 'powershell': return textMark('PS', accent);
    case 'cjs': return textMark('CJS', accent);
    case 'mjs': return textMark('MJS', accent);
    case 'python':
      return `<g stroke-linejoin="round"><path d="M16.8 8.5h-3.9A4.9 4.9 0 0 0 8 13.4v4.1h8.9v-3.1h-4.3a1.8 1.8 0 0 1 0-3.6h4.2a3.2 3.2 0 0 1 3.2 3.2v2.3h3.8v-3.1a4.7 4.7 0 0 0-4.7-4.7z" fill="${accent}"/><path d="M15.2 25.5h3.9a4.9 4.9 0 0 0 4.9-4.9v-4.1h-8.9v3.1h4.3a1.8 1.8 0 0 1 0 3.6h-4.2a3.2 3.2 0 0 1-3.2-3.2v-2.3H8.2v3.1a4.7 4.7 0 0 0 4.7 4.7z" fill="${palette.blue}"/><circle cx="13.9" cy="12.6" r="1" fill="#0B0B0C"/><circle cx="18.1" cy="21.4" r="1" fill="#0B0B0C"/></g>`;
    case 'vue':
      return `<path d="m7.2 11 8.8 14 8.8-14h-4.8L16 19l-4-8z" fill="none" stroke="${accent}" stroke-width="2.4" stroke-linejoin="round"/>`;
    case 'svelte': return textMark('S', accent);
    case 'node':
      return `<path d="m16 8.5 7.4 4.2v8.6L16 25.5l-7.4-4.2v-8.6z" fill="none" stroke="${accent}" stroke-width="2.1" stroke-linejoin="round"/>${textMark('N', accent, 10, 17)}`;
    case 'npm': return npmMark(accent);
    case 'git':
      return `<g fill="none" stroke="${accent}" stroke-width="1.9" stroke-linecap="round"><path d="M11 23V13l10-4M11 16l10 7"/><circle cx="11" cy="23" r="2.1" fill="${accent}" stroke="none"/><circle cx="11" cy="13" r="2.1" fill="${accent}" stroke="none"/><circle cx="21" cy="9" r="2.1" fill="${accent}" stroke="none"/><circle cx="21" cy="23" r="2.1" fill="${accent}" stroke="none"/></g>`;
    case 'docker':
      return `<g fill="none" stroke="${accent}" stroke-width="1.9" stroke-linejoin="round"><path d="M8 16h14v7H8zM10 12h3v4h-3zM14.5 12h3v4h-3zM19 12h3v4h-3z"/><path d="M8 23c2.8 2 10.8 2.6 15 .2 1.4-.8 2.1-1.8 2.2-3.2" stroke-linecap="round"/><path d="M8 25h16" stroke="${palette.blue}" stroke-linecap="round"/></g>`;
    case 'java': return `<g fill="none" stroke="${accent}" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round"><path d="M13 10c4 2 0 3 2 5 2 1.3 3-1 2-2.2"/><path d="M11 17h10v4.5a2.5 2.5 0 0 1-2.5 2.5h-5a2.5 2.5 0 0 1-2.5-2.5z"/><path d="M21 18h2a2 2 0 0 1 0 4h-2M12 26h9"/></g>`;
    case 'ruby': return `<path d="m9 13 4-3h6l4 3-7 11z" fill="none" stroke="${accent}" stroke-width="1.8" stroke-linejoin="round"/><path d="m9 13 7 2 7-2M16 15v9" fill="none" stroke="${palette.pink}" stroke-width="1.2"/>`;
    case 'rust': return `<g fill="none" stroke="${accent}" stroke-linecap="round"><circle cx="16" cy="17" r="6.8" stroke-width="2.2"/><circle cx="16" cy="17" r="2.1" fill="${accent}" stroke="none"/><path d="M16 8v3M16 23v3M7 17h3M22 17h3M9.6 10.6l2.1 2.1M20.3 21.3l2.1 2.1M22.4 10.6l-2.1 2.1M11.7 21.3l-2.1 2.1" stroke-width="1.8"/></g>`;
    case 'c': return textMark('C', accent);
    case 'cpp':
    case 'c-cpp': return textMark('C++', accent);
    case 'csharp': return textMark('C#', accent);
    case 'yaml': return textMark('YAML', accent);
    case 'graphql':
    case 'gql': return `<g fill="none" stroke="${accent}" stroke-width="1.8" stroke-linecap="round"><path d="M10 12h12M10 22h12M10 12l6 10M22 12l-6 10"/><circle cx="10" cy="12" r="2.2" fill="${accent}" stroke="none"/><circle cx="22" cy="12" r="2.2" fill="${accent}" stroke="none"/><circle cx="10" cy="22" r="2.2" fill="${accent}" stroke="none"/><circle cx="22" cy="22" r="2.2" fill="${accent}" stroke="none"/></g>`;
    case 'sql': return `<g fill="none" stroke="${accent}" stroke-width="2"><ellipse cx="16" cy="11" rx="7" ry="3"/><path d="M9 11v11c0 1.7 3.1 3 7 3s7-1.3 7-3V11M9 16c0 1.7 3.1 3 7 3s7-1.3 7-3"/></g>`;
    case 'config': return `<g fill="none" stroke="${accent}" stroke-linecap="round"><circle cx="16" cy="17" r="5.5" stroke-width="2.2"/><circle cx="16" cy="17" r="1.8" fill="${accent}" stroke="none"/><path d="M16 8v3M16 23v3M7 17h3M22 17h3M9.5 10.5l2.2 2.2M20.3 21.3l2.2 2.2M22.5 10.5l-2.2 2.2M11.7 21.3l-2.2 2.2" stroke-width="1.8"/></g>`;
    case 'image': return `<circle cx="22" cy="11" r="2.2" fill="${yellow}"/><path d="m7 24 6.5-8 4.2 4 3-3.5 4.3 7.5z" fill="${accent}" fill-opacity=".22" stroke="${accent}" stroke-width="2" stroke-linejoin="round"/>`;
    case 'archive': return `<g fill="none" stroke="${accent}" stroke-width="2" stroke-linejoin="round"><path d="M7 11h18v13H7zM7 11l2-4h14l2 4M12 16h8M14 20h4"/></g>`;
    case 'pdf': return textMark('PDF', accent);
    case 'env': return textMark('ENV', accent);
    case 'readme': return `<g fill="none" stroke="${accent}" stroke-width="1.8" stroke-linejoin="round"><path d="M8 10h5.5a2.5 2.5 0 0 1 2.5 2.5V24c-.7-1.3-1.8-2-3.5-2H8zM24 10h-5.5a2.5 2.5 0 0 0-2.5 2.5V24c.7-1.3 1.8-2 3.5-2H24z"/><path d="M10 14h3M19 14h3"/></g>`;
    case 'lock': return `<g fill="none" stroke="${accent}" stroke-width="1.9" stroke-linejoin="round"><rect x="9" y="15" width="14" height="10" rx="2"/><path d="M12 15v-3a4 4 0 0 1 8 0v3"/><circle cx="16" cy="20" r="1" fill="${accent}" stroke="none"/></g>`;
    case 'test': return `<g fill="none" stroke="${accent}" stroke-linecap="round" stroke-linejoin="round"><rect x="8" y="9" width="16" height="15" rx="2" stroke-width="1.8"/><path d="m11 16 2.5 2.5 4.5-5" stroke-width="2.2"/><path d="M19 16h2.5M11 21h10.5" stroke-width="1.6"/></g>`;
    case 'database': return `<g fill="none" stroke="${accent}" stroke-width="1.8"><ellipse cx="16" cy="11" rx="7" ry="3"/><path d="M9 11v11c0 1.7 3.1 3 7 3s7-1.3 7-3V11"/><path d="M9 16c0 1.7 3.1 3 7 3s7-1.3 7-3"/></g>`;
    case 'data': return `<g fill="none" stroke="${accent}" stroke-width="1.7"><rect x="8" y="10" width="16" height="14" rx="1"/><path d="M8 15h16M8 20h16M14 10v14M19 10v14"/></g>`;
    case 'log': return `<path d="M8 23V18M13 23V14M18 23V19M23 23V10" fill="none" stroke="${accent}" stroke-width="2.2" stroke-linecap="round"/>`;
    case 'text': return `<path d="M9 12h14M9 17h14M9 22h9" stroke="${accent}" stroke-width="2" stroke-linecap="round"/>`;
    case 'vite': return `<path d="m18 8-8 10h6l-2 7 8-11h-6z" fill="${accent}"/>`;
    case 'next': return `<circle cx="16" cy="17" r="8" fill="none" stroke="${accent}" stroke-width="1.7"/>${textMark('N', accent, 12, 17)}`;
    case 'astro': return `<path d="m16 8 2.5 5 5.5.8-4 3.9.9 5.5-4.9-2.6-4.9 2.6.9-5.5-4-3.9 5.5-.8z" fill="none" stroke="${accent}" stroke-width="1.6" stroke-linejoin="round"/>`;
    case 'tailwind': return `<g fill="none" stroke="${accent}" stroke-width="2.5" stroke-linecap="round"><path d="M8 17c2.4-5 5-6.8 7.8-4.8 1.8 1.3 2.8 3.4 4.7 2.8 1.2-.4 2.1-1.4 2.8-2.8"/><path d="M8 22c2.4-5 5-6.8 7.8-4.8 1.8 1.3 2.8 3.4 4.7 2.8 1.2-.4 2.1-1.4 2.8-2.8"/></g>`;
    case 'workspace': return `<g fill="none" stroke="${accent}" stroke-width="1.8"><rect x="8" y="9" width="8" height="7" rx="1"/><rect x="17" y="9" width="7" height="7" rx="1"/><rect x="8" y="17" width="8" height="7" rx="1"/><rect x="17" y="17" width="7" height="7" rx="1"/></g>`;

    // ─── Media / Misc ─────────────────────────────────────────────────────────
    case 'audio': return `<g fill="none" stroke="${accent}" stroke-linecap="round"><path d="M8 21v-4M12 24V13M16 22V10M20 24V14M24 20v-5" stroke-width="2.2"/></g>`;
    case 'video': return `<g fill="none" stroke="${accent}" stroke-width="1.8" stroke-linejoin="round"><rect x="7.5" y="10" width="14" height="14" rx="2"/><path d="m21.5 14 4-2v10l-4-2z"/><path d="m14 14 4 3-4 3z" fill="${accent}" stroke="none"/></g>`;
    case 'layers': return `<g fill="none" stroke="${accent}" stroke-width="1.8" stroke-linejoin="round"><path d="m16 8 9 4.5-9 4.5-9-4.5zM7 17l9 4.5 9-4.5M7 21l9 4 9-4"/></g>`;
    case 'clock': return `<g fill="none" stroke="${accent}" stroke-linecap="round"><circle cx="16" cy="17" r="8" stroke-width="2"/><path d="M16 12v5l3.5 2" stroke-width="2"/></g>`;
    case 'flask': return `<g fill="none" stroke="${accent}" stroke-width="1.8" stroke-linejoin="round"><path d="M13 9h6M14 9v6l-5 8a2 2 0 0 0 1.7 3h10.6A2 2 0 0 0 23 23l-5-8V9"/><path d="M11 21h10" stroke-linecap="round"/></g>`;
    case 'source': return codeMark(accent);
    case 'network': return `<g fill="none" stroke="${accent}" stroke-width="1.8" stroke-linecap="round"><path d="M10 12h12M10 12l6 10M22 12l-6 10"/><circle cx="10" cy="12" r="2.2" fill="${accent}" stroke="none"/><circle cx="22" cy="12" r="2.2" fill="${accent}" stroke="none"/><circle cx="16" cy="22" r="2.2" fill="${accent}" stroke="none"/></g>`;
    case 'monitor': return `<g fill="none" stroke="${accent}" stroke-linejoin="round"><rect x="7.5" y="9" width="17" height="12" rx="1.5" stroke-width="1.8"/><path d="M13 25h6M16 21v4" stroke-width="1.8" stroke-linecap="round"/></g>`;
    case 'lint': return `<path d="m9 17 4 4 10-10" fill="none" stroke="${accent}" stroke-width="2.4" stroke-linecap="round" stroke-linejoin="round"/>`;
    case 'format': return `<path d="M9 11h14M9 16h10M9 21h14" stroke="${accent}" stroke-width="2" stroke-linecap="round"/>`;

    default: return textMark(labels[stem] ?? stem.toUpperCase(), accent);
  }
}

function folderArt(stem, accent) {
  if (['folder', 'folder-open'].includes(stem)) {
    return `<path d="M7 13h5l2-2h11v10.5A2.5 2.5 0 0 1 22.5 24h-15z" fill="none" stroke="${accent}" stroke-width="2" stroke-linejoin="round"/>`;
  }
  if (stem === 'folder-src') return codeMark(accent);
  if (stem === 'folder-app') return `<g fill="none" stroke="${accent}" stroke-width="1.8"><rect x="8" y="10" width="7" height="6" rx="1"/><rect x="17" y="10" width="7" height="6" rx="1"/><rect x="8" y="18" width="7" height="6" rx="1"/><rect x="17" y="18" width="7" height="6" rx="1"/></g>`;
  if (['folder-ui', 'folder-components'].includes(stem)) return `<g fill="${accent}"><rect x="8" y="10" width="6" height="6" rx="1"/><rect x="18" y="10" width="6" height="6" rx="1"/><rect x="8" y="19" width="6" height="6" rx="1"/><rect x="18" y="19" width="6" height="6" rx="1"/></g>`;
  if (stem === 'folder-types') return codeMark(accent);
  if (stem === 'folder-features') return artFor('layers', accent);
  if (['folder-lib', 'folder-core', 'folder-common', 'folder-shared'].includes(stem)) return artFor('package', accent);
  if (stem === 'folder-constants') return artFor('config', accent);
  if (stem === 'folder-interfaces') return artFor('source', accent);
  if (stem === 'folder-graph') return artFor('graphql', accent);
  if (['folder-layouts', 'folder-templates', 'folder-partials'].includes(stem)) return artFor('workspace', accent);
  if (['folder-media', 'folder-images', 'folder-static', 'folder-uploads'].includes(stem)) return artFor('image', accent);
  if (['folder-fixtures', 'folder-seeds'].includes(stem)) return artFor('flask', accent);
  if (['folder-cli', 'folder-bin', 'folder-commands', 'folder-tools'].includes(stem)) return artFor('terminal', accent);
  if (['folder-infrastructure', 'folder-adapters'].includes(stem)) return artFor('network', accent);
  if (['folder-jobs', 'folder-queues', 'folder-cron'].includes(stem)) return artFor('clock', accent);
  if (['folder-cache', 'folder-temp', 'folder-tmp', 'folder-releases'].includes(stem)) return artFor('archive', accent);
  if (['folder-translations', 'folder-i18n'].includes(stem)) return `<circle cx="16" cy="17" r="8" fill="none" stroke="${accent}" stroke-width="1.8"/><path d="M8 17h16M16 9c3 3 3 13 0 16M16 9c-3 3-3 13 0 16" fill="none" stroke="${accent}" stroke-width="1.4"/>`;
  if (stem === 'folder-icons') return artFor('monitor', accent);
  if (stem === 'folder-fonts') return textMark('A', accent);
  if (['folder-models', 'folder-schemas', 'folder-prisma', 'folder-database'].includes(stem)) {
    return `<g fill="none" stroke="${accent}" stroke-width="1.8"><ellipse cx="16" cy="11" rx="7" ry="3"/><path d="M9 11v11c0 1.7 3.1 3 7 3s7-1.3 7-3V11M9 16c0 1.7 3.1 3 7 3s7-1.3 7-3"/></g>`;
  }
  if (['folder-services', 'folder-routes', 'folder-server', 'folder-client', 'folder-middleware'].includes(stem)) {
    return `<g fill="none" stroke="${accent}" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round"><path d="M8 12h8v10h8M16 17h8"/><circle cx="8" cy="12" r="2" fill="${accent}"/><circle cx="24" cy="17" r="2" fill="${accent}"/><circle cx="24" cy="22" r="2" fill="${accent}"/></g>`;
  }
  if (['folder-utils', 'folder-config', 'folder-workers'].includes(stem)) return artFor('config', accent);
  if (['folder-pages', 'folder-views', 'folder-docs', 'folder-storybook'].includes(stem)) return artFor('readme', accent);
  if (['folder-public', 'folder-locales'].includes(stem)) return `<circle cx="16" cy="17" r="8" fill="none" stroke="${accent}" stroke-width="1.8"/><path d="M8 17h16M16 9c3 3 3 13 0 16M16 9c-3 3-3 13 0 16" fill="none" stroke="${accent}" stroke-width="1.4"/>`;
  if (stem === 'folder-assets') return artFor('image', accent);
  if (['folder-tests', 'folder-e2e'].includes(stem)) return artFor('test', accent);
  if (['folder-node-modules', 'folder-packages', 'folder-vendor'].includes(stem)) return artFor('package', accent);
  if (stem === 'folder-scripts') return artFor('shell', accent);
  if (stem === 'folder-styles') return `<g fill="none" stroke="${accent}" stroke-width="1.8"><circle cx="12" cy="13" r="3"/><circle cx="20" cy="13" r="3"/><circle cx="16" cy="21" r="3"/><path d="m14.5 15.2-1.2 2.2M17.5 15.2l1.2 2.2M15 13h2"/></g>`;
  if (stem === 'folder-store' || stem === 'folder-context') return `<path d="m16 8 8 4.5v9L16 26l-8-4.5v-9z" fill="none" stroke="${accent}" stroke-width="1.8" stroke-linejoin="round"/>`;
  if (stem === 'folder-migrations') return `<path d="M9 12h14M20 9l3 3-3 3M23 22H9M12 19l-3 3 3 3" fill="none" stroke="${accent}" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round"/>`;
  if (stem === 'folder-examples') return codeMark(accent);
  if (stem === 'folder-build' || stem === 'folder-dist') return artFor('package', accent);
  if (stem === 'folder-git') return artFor('git', accent);
  if (stem === 'folder-github') return artFor('github', accent);
  if (stem === 'folder-supabase') return artFor('supabase', accent);
  if (stem === 'folder-npm') return artFor('npm', accent);
  if (stem === 'folder-vscode') return codeMark(accent);
  if (stem === 'folder-controllers') return `<path d="M9 11h14M9 17h14M9 23h14" stroke="${accent}" stroke-width="2" stroke-linecap="round"/><circle cx="14" cy="11" r="2" fill="${accent}"/><circle cx="20" cy="17" r="2" fill="${accent}"/><circle cx="12" cy="23" r="2" fill="${accent}"/>`;
  if (stem === 'folder-mocks') return textMark('?', accent);
  if (stem === 'folder-logs') return artFor('log', accent);
  return textMark(folderLabels[stem] ?? 'DIR', accent);
}

function makeSvg(stem, accent) {
  const isFolder = stem === 'folder' || stem === 'folder-open' || stem.startsWith('folder-');
  const content = isFolder ? folderArt(stem, accent) : artFor(stem, accent);
  const correction = verticalCorrections[stem] ?? 0;
  return `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 32 32">
  <defs><filter id="glow" x="-45%" y="-45%" width="190%" height="190%"><feGaussianBlur stdDeviation=".5" result="blur"/><feMerge><feMergeNode in="blur"/><feMergeNode in="SourceGraphic"/></feMerge></filter><clipPath id="content-safe"><rect x="${iconLayout.safeX}" y="${iconLayout.safeX}" width="${iconLayout.safeSize}" height="${iconLayout.safeSize}" rx="${iconLayout.safeRadius}"/></clipPath></defs>
  <rect x="${iconLayout.outerX}" y="${iconLayout.outerX}" width="${iconLayout.outerSize}" height="${iconLayout.outerSize}" rx="${iconLayout.outerRadius}" fill="none" stroke="${accent}" stroke-width="${iconLayout.outerStroke}" opacity=".45" filter="url(#glow)"/>
  <rect x="${iconLayout.frameX}" y="${iconLayout.frameX}" width="${iconLayout.frameSize}" height="${iconLayout.frameSize}" rx="${iconLayout.frameRadius}" fill="${accent}" stroke="${accent}" stroke-width=".45"/>
  <rect x="${iconLayout.blackX}" y="${iconLayout.blackX}" width="${iconLayout.blackSize}" height="${iconLayout.blackSize}" rx="${iconLayout.blackRadius}" fill="#0B0B0C"/>
  <g clip-path="url(#content-safe)"><g transform="translate(0 ${-1 + correction})">${content}</g></g>
</svg>
`;
}

const svgFiles = [...new Set([
  ...fs.readdirSync(directory).filter((name) => name.endsWith('.svg')),
  ...additionalStems.map((stem) => `${stem}.svg`)
])];
for (const filename of svgFiles) {
  const stem = filename.slice(0, -4);
  fs.writeFileSync(path.join(directory, filename), makeSvg(stem, colorFor(stem)), 'utf8');
}

console.log(`Gerados ${svgFiles.length} file icons no estilo neon badge.`);
