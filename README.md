# ABOV3 JavaScript/TypeScript SDK - Genesis CodeForger Edition

Official JavaScript/TypeScript SDK for ABOV3 AI - Genesis CodeForger Edition.

**Official Website:** [https://www.abov3.ai](https://www.abov3.ai)
**ABOV3 Team:** [https://www.abov3.com](https://www.abov3.com)

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

## What's New in v1.0.4

### TUI Configuration Management
The TUI now includes comprehensive configuration management commands:
- Interactive configuration dialogs with form inputs
- Provider management (add, edit, enable/disable, remove)
- MCP server configuration
- System health checks and validation
- Scrollable configuration viewer

### Features
- Real-time configuration updates
- Form-based input for adding providers and MCP servers
- Health diagnostics with `config doctor` command
- Configuration validation with detailed error reporting

## Documentation

For full documentation, visit [https://www.abov3.ai/docs](https://www.abov3.ai/docs)

## License

MIT