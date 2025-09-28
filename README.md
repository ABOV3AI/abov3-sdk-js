# @abov3/sdk

Official JavaScript/TypeScript SDK for ABOV3 - AI-powered development assistant.

## Installation

```bash
npm install @abov3/sdk
# or
yarn add @abov3/sdk
# or
pnpm add @abov3/sdk
```

## Usage

```typescript
import { createAbov3Client } from '@abov3/sdk';

const client = createAbov3Client({
  baseUrl: 'http://localhost:4096',
  // Add your configuration here
});

// Use the client to interact with ABOV3 API
const sessions = await client.sessions.list();
```

## Documentation

For full documentation, visit [https://github.com/ABOV3AI/abov3-genesis-codeforger](https://github.com/ABOV3AI/abov3-genesis-codeforger)

## License

MIT