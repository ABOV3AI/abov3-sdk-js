# ABOV3 JavaScript/TypeScript SDK v1.1.0

Official JavaScript/TypeScript SDK for ABOV3 AI - Genesis CodeForger Edition

---

## What's New in v1.1.0

### ✨ New Features
- 🌊 **Streaming Response Support** - Real-time response streaming for chat interactions
- 🔄 **Enhanced Error Handling** - Better error messages and retry logic
- 📦 **Updated Dependencies** - Latest @hey-api/openapi-ts integration

### 🔄 Version Alignment
- Updated to align with ABOV3 Genesis CodeForger v0.1.6
- Synchronized with latest ABOV3 API endpoints

### 🐛 Bug Fixes
- Fixed TypeScript type definitions for session management
- Improved browser compatibility for WebSocket connections

### 📚 Documentation
- Updated repository references to ABOV3AI organization
- Enhanced README with streaming examples
- Added comprehensive JSDoc comments

---

## Installation

```bash
npm install @abov3/sdk@1.1.0
```

Or with yarn:

```bash
yarn add @abov3/sdk@1.1.0
```

Or with pnpm:

```bash
pnpm add @abov3/sdk@1.1.0
```

---

## Quick Start

### Basic Usage

```typescript
import { createAbov3Client } from '@abov3/sdk';

// Initialize client
const client = createAbov3Client({
  baseUrl: 'http://localhost:4096',
});

// List sessions
const sessions = await client.sessions.list();

// Create a new session
const session = await client.sessions.create();

// Send a message
const response = await client.chat.send({
  sessionId: session.id,
  message: 'Help me write a TypeScript function',
});
```

### Streaming Responses (New!)

```typescript
import { createAbov3Client } from '@abov3/sdk';

const client = createAbov3Client({
  baseUrl: 'http://localhost:4096',
});

// Stream a chat response
const stream = await client.chat.stream({
  sessionId: 'your-session-id',
  message: 'Write a React component',
});

for await (const chunk of stream) {
  process.stdout.write(chunk.content);
}
```

---

## Features

- ✨ **Full TypeScript Support** - Complete type definitions included
- 🌊 **Streaming Responses** - Real-time response streaming
- 🌐 **Universal** - Works in Node.js and browsers
- 🔒 **Type Safety** - Compile-time type checking
- 🔄 **Automatic Retries** - Built-in retry logic
- 📝 **JSDoc Comments** - IntelliSense support in editors

---

## Requirements

- Node.js 16+ or modern browser
- TypeScript 4.5+ (optional, for TypeScript projects)

---

## Platform Support

- ✅ Node.js (16+)
- ✅ Browser (Modern browsers with ES2020 support)
- ✅ Deno
- ✅ Bun

---

## Documentation

- 📚 **ABOV3 Documentation**: https://www.abov3.ai/docs
- 📦 **JS/TS SDK Repository**: https://github.com/ABOV3AI/abov3-sdk-js
- 📦 **NPM Package**: https://www.npmjs.com/package/@abov3/sdk

---

## Support

- 💬 **Issues**: https://github.com/ABOV3AI/abov3-sdk-js/issues
- 🏠 **Website**: https://www.abov3.ai
- 📧 **Email**: support@abov3.ai

---

**Author**: Fahad Ibn Omar Fajardo
**License**: MIT