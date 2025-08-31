# Builder Stellar Haven - Project Structure

## 📁 Project Overview
A TypeScript-based full-stack application built with React + Vite on the frontend and Express server on the backend, featuring a chat/conversation interface.

## 🏗️ Architecture

```
builder-stellar-haven/
├── client/                 # Frontend React application
│   ├── components/        # React components
│   │   ├── ui/           # UI library components (shadcn/ui)
│   │   ├── ChatInterface.tsx
│   │   ├── ChatItem.tsx
│   │   ├── ConversationHeader.tsx
│   │   └── ConversationView.tsx
│   ├── pages/            # Page components
│   │   ├── Index.tsx
│   │   └── NotFound.tsx
│   ├── hooks/            # Custom React hooks
│   ├── lib/              # Utility libraries
│   ├── utils/            # Helper functions
│   ├── data/             # Static data/constants
│   ├── App.tsx           # Main application component
│   ├── global.css        # Global styles
│   └── vite-env.d.ts     # Vite type definitions
├── server/                # Backend Express server
│   ├── routes/           # API route handlers
│   │   └── demo.ts       # Demo API endpoint
│   ├── index.ts          # Server entry point
│   └── node-build.ts     # Node build configuration
├── shared/                # Shared types/utilities
│   └── api.ts            # API type definitions
├── public/                # Static assets
├── netlify/              # Netlify deployment config
└── .builder/             # Builder configuration

## 📦 Build Configuration

### Client Build
- **Framework**: React 18 with TypeScript
- **Build Tool**: Vite
- **Styling**: Tailwind CSS + shadcn/ui components
- **Config**: `vite.config.ts`

### Server Build  
- **Runtime**: Node.js with Express 5
- **Build Tool**: Vite (server config)
- **Config**: `vite.config.server.ts`

## 🔧 Key Components

### Frontend Components

#### Chat/Conversation System
- `ChatInterface.tsx` - Main chat interface container
- `ChatItem.tsx` - Individual chat message component
- `ConversationHeader.tsx` - Conversation header with metadata
- `ConversationView.tsx` - Full conversation view component

#### Pages
- `Index.tsx` - Landing/home page
- `NotFound.tsx` - 404 error page

### Backend Routes
- `/api/demo` - Demo endpoint (handleDemo function)

### Shared Types
- `DemoResponse` - API response interface

## 📝 Scripts

```json
{
  "dev": "vite",                    // Start dev server
  "build": "npm run build:client && npm run build:server",
  "build:client": "vite build",     // Build frontend
  "build:server": "vite build --config vite.config.server.ts",
  "start": "node dist/server/node-build.mjs",
  "test": "vitest --run",           // Run tests
  "format.fix": "prettier --write .",
  "typecheck": "tsc"                // Type checking
}
```

## 🚀 Deployment
- **Platform**: Netlify
- **Config**: `netlify.toml`
- **Build Output**: 
  - Client: `dist/spa/`
  - Server: `dist/server/`

## 🔗 Dependencies

### Core Dependencies
- `express`: ^5.1.0 - Web server framework
- `dotenv`: ^17.2.1 - Environment variables
- `zod`: ^3.25.76 - Schema validation

### UI Components (via shadcn/ui)
- Radix UI primitives for accessible components
- React Hook Form for form management
- Tailwind CSS for styling

## 🎨 Styling Architecture
- **Tailwind CSS** for utility-first styling
- **Global CSS** at `client/global.css`
- **Component-level** styles using Tailwind classes
- **Theme** configuration in `tailwind.config.ts`

## 🧪 Testing
- **Framework**: Vitest
- **Command**: `npm test`

## 📚 Available Memories
- `project_context` - General project context
- `snapchat_viewer_complete_documentation` - Feature documentation

## 🔄 Development Workflow

1. **Start Development**: `npm run dev`
2. **Type Checking**: `npm run typecheck`
3. **Format Code**: `npm run format.fix`
4. **Run Tests**: `npm test`
5. **Build**: `npm run build`
6. **Deploy**: Automated via Netlify

## 📐 Code Organization Patterns

### Component Structure
- Props interfaces defined at component level
- Functional components with TypeScript
- UI components separated in `ui/` subdirectory

### API Structure  
- Route handlers in `server/routes/`
- Shared types in `shared/api.ts`
- Express 5 async handlers

### State Management
- React Query for server state (queryClient)
- Component-level state with hooks
- Custom hooks in `client/hooks/`