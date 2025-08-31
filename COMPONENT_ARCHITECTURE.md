# Component Architecture & Relationships

## 🎯 Component Hierarchy

```
App.tsx (Root)
├── QueryClientProvider (React Query)
├── RouterProvider (React Router)
│   ├── pages/Index.tsx
│   │   └── components/ChatInterface.tsx
│   │       ├── components/ConversationHeader.tsx
│   │       ├── components/ConversationView.tsx
│   │       │   └── components/ChatItem.tsx (multiple)
│   │       └── components/ui/* (shadcn components)
│   └── pages/NotFound.tsx
```

## 📦 Core Components

### App Component
**Location**: `client/App.tsx`
**Purpose**: Application root and provider setup
**Key Features**:
- React Query client initialization
- Router configuration
- Global provider wrapping

**Dependencies**:
- `queryClient` - React Query instance
- Router configuration
- Global styles

---

### ChatInterface
**Location**: `client/components/ChatInterface.tsx`
**Purpose**: Main chat container and orchestrator
**Props**: `ChatInterfaceProps`

**Responsibilities**:
- Conversation state management
- Chat list organization
- Message sorting by timestamp
- User interaction handling

**Child Components**:
- `ConversationHeader` - Display conversation metadata
- `ConversationView` - Render full conversation
- UI components from `client/components/ui/`

**State Management**:
- Selected conversation tracking
- Chat list with timestamps
- Bitmoji/avatar management

---

### ConversationView
**Location**: `client/components/ConversationView.tsx`
**Purpose**: Full conversation display
**Props**: Conversation data

**Features**:
- Message list rendering
- Scrollable conversation area
- Message grouping logic

**Child Components**:
- Multiple `ChatItem` instances
- UI scroll area components

---

### ChatItem
**Location**: `client/components/ChatItem.tsx`
**Purpose**: Individual message display
**Props**: `ChatItemProps`

**Features**:
- Message content rendering
- Timestamp display
- Avatar/bitmoji support
- Message state indicators (sent/delivered/read)
- Media message support

**Visual States**:
- Sent/received differentiation
- Read receipts
- Media attachments
- User avatars with color generation

---

### ConversationHeader
**Location**: `client/components/ConversationHeader.tsx`
**Purpose**: Conversation metadata display
**Props**: `ConversationHeaderProps`

**Features**:
- Conversation title
- Participant information
- Action buttons
- Status indicators

---

## 🎨 UI Component Library

### Base Components (shadcn/ui)
Located in `client/components/ui/`:

- **Accordion** - Expandable content sections
- **Alert Dialog** - Modal confirmations
- **Button** - Interactive buttons
- **Card** - Content containers
- **Dialog** - Modal windows
- **Input** - Form inputs
- **Label** - Form labels
- **Scroll Area** - Scrollable containers
- **Select** - Dropdown selections
- **Sheet** - Slide-out panels
- **Tabs** - Tabbed navigation
- **Textarea** - Multi-line inputs
- **Tooltip** - Hover information

### Component Patterns

#### Form Components
- Use React Hook Form with Zod validation
- Controlled components pattern
- Error state handling

#### Layout Components
- Responsive design with Tailwind
- Mobile-first approach
- Flexbox/Grid layouts

---

## 🔄 Data Flow

### Props Flow
```
App
└── Page Component
    └── ChatInterface (conversation state)
        ├── ConversationHeader (metadata)
        └── ConversationView (messages)
            └── ChatItem (individual message)
```

### State Management Patterns

#### Local State
- Component-level state with `useState`
- Form state with React Hook Form
- UI state (modals, tooltips)

#### Server State
- React Query for API calls
- Caching and synchronization
- Optimistic updates

#### Shared State
- Props drilling for simple cases
- Context API for cross-component state
- Custom hooks for logic reuse

---

## 🎯 Component Relationships

### Parent-Child Communications

#### ChatInterface → ConversationView
- Passes: Selected conversation data
- Receives: User interactions, scroll events

#### ConversationView → ChatItem
- Passes: Message data, user info
- Receives: Click events, read receipts

#### ChatInterface → ConversationHeader
- Passes: Conversation metadata
- Receives: Header actions

### Sibling Communications
- Through parent state lifting
- Event bubbling patterns
- Shared hook usage

---

## 🛠️ Component Development Guidelines

### Creating New Components

1. **Location**: Place in appropriate directory
   - Page components → `client/pages/`
   - Reusable components → `client/components/`
   - UI primitives → `client/components/ui/`

2. **Structure**:
```typescript
interface ComponentProps {
  // Define props with TypeScript
}

export function Component({ prop1, prop2 }: ComponentProps) {
  // Component logic
  return (
    // JSX structure
  );
}
```

3. **Styling**: Use Tailwind classes
```tsx
<div className="flex flex-col gap-4 p-4">
  {/* Content */}
</div>
```

4. **State Management**:
- Prefer local state when possible
- Lift state only when necessary
- Use custom hooks for complex logic

### Component Best Practices

#### Performance
- Memo for expensive renders
- Lazy loading for large components
- Virtual scrolling for lists

#### Accessibility
- ARIA attributes via Radix UI
- Keyboard navigation support
- Screen reader compatibility

#### Testing
- Unit tests with Vitest
- Component testing patterns
- Mock data strategies

---

## 📊 Component Metrics

### Complexity Analysis
- **High Complexity**: ChatInterface (orchestrator)
- **Medium Complexity**: ConversationView, ChatItem
- **Low Complexity**: ConversationHeader, UI components

### Reusability Index
- **Highly Reusable**: UI components, ChatItem
- **Moderately Reusable**: ConversationView
- **Specific**: ChatInterface, Pages

### Dependencies
- **Most Dependencies**: ChatInterface
- **Least Dependencies**: UI primitives
- **External**: Radix UI, React Hook Form

---

## 🔗 Cross-References

### Related Documentation
- [Project Structure](./PROJECT_STRUCTURE.md) - Overall architecture
- [API Documentation](./API_DOCUMENTATION.md) - Backend integration
- Component source files in `client/components/`

### Key Files
- `client/App.tsx` - Application root
- `client/components/ChatInterface.tsx` - Main feature
- `client/components/ui/` - UI library
- `components.json` - shadcn/ui configuration