# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Commands

### Development
```bash
npm run dev          # Start development server (Vite)
npm run build        # Build both client and server
npm run build:client # Build frontend only
npm run build:server # Build server only
npm run start        # Start production server
npm run typecheck    # Run TypeScript type checking
npm run format.fix   # Format code with Prettier
npm test            # Run tests with Vitest
```

## Architecture Overview

This is a full-stack TypeScript application with a chat/conversation interface as the main feature.

### Stack
- **Frontend**: React 18 + Vite + TypeScript
- **Backend**: Express 5 server
- **Styling**: Tailwind CSS + shadcn/ui components
- **State**: React Query for server state
- **Validation**: Zod schemas

### Key Architectural Decisions

**Type Safety**: Shared types are defined in `shared/api.ts` to ensure type consistency between client and server. Always define API interfaces here before implementing endpoints.

**Component Organization**:
- Chat components (`ChatInterface`, `ChatItem`, `ConversationView`) orchestrate the main conversation feature
- UI primitives from shadcn/ui are in `client/components/ui/` - use these for consistency
- Pages go in `client/pages/`, reusable components in `client/components/`

**API Pattern**: 
- Route handlers in `server/routes/` export typed `RequestHandler` functions
- Each handler imports response types from `shared/api.ts`
- Client uses standard fetch with typed responses

**Build System**: 
- Separate Vite configs for client (`vite.config.ts`) and server (`vite.config.server.ts`)
- Client builds to `dist/spa/`, server to `dist/server/`

### Chat System Architecture

The chat interface is the core feature with this hierarchy:
```
ChatInterface (orchestrator) → manages conversation state
├── ConversationHeader → displays metadata
└── ConversationView → renders messages
    └── ChatItem (multiple) → individual messages
```

Message data includes timestamps, avatars/bitmojis, and read states. The system sorts chats by timestamp and supports media messages.

## Project-Specific Context

### Available Documentation
- `PROJECT_STRUCTURE.md` - Full directory structure and organization
- `API_DOCUMENTATION.md` - Endpoint specifications and patterns
- `COMPONENT_ARCHITECTURE.md` - Component relationships and data flow

### Deployment
Configured for Netlify deployment via `netlify.toml`. The build outputs both SPA and server bundles.

### Testing
Uses Vitest for testing. Run `npm test` to execute test suite.