## Installation

### For Internal Use (Private Registry)
```bash
npm install @jivi/nearby-assistant
```

### For Local Development
```bash
# Build the library
npm run build:lib

# Create a package for local testing
npm run pack:local

# Install in another project
npm install /path/to/nearby-assistant-1.0.0.tgz
```

## Usage

```typescript
import { NearByAssistant, createDefaultConfig } from '@jivi/nearby-assistant';
import '@jivi/nearby-assistant/styles';

const config = createDefaultConfig({
  // your configuration
});

function App() {
  return <NearByAssistant config={config} />;
}
```
```

## Build and Test

Now run the build:

```bash
npm run build:lib
```

This should create a `dist/` directory with:
- `index.es.js` (ES modules)
- `index.umd.js` (UMD format)
- `index.d.ts` (TypeScript definitions)
- `style.css` (Extracted styles)

Your library is now ready to be used as an independent internal package that can be integrated into different projects!