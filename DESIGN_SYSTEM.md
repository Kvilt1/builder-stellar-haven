# Design System & Style Guide

## 🎨 Design Aesthetic

### Core Philosophy
**Snapchat-Inspired Clean Minimalism**
- White backgrounds (#FFFFFF) as primary canvas
- Subtle gray borders (#E1E1E1) for separation
- Minimalist approach with purposeful spacing
- Focus on content over decoration
- Clean, modern, and approachable

### Visual Language
- **Rounded corners**: Pills for badges, circles for avatars
- **Subtle shadows**: Minimal to none, relying on borders
- **Hover states**: Gray-50 (#F9FAFB) for light interactions
- **Active states**: Gray-300 for pressed states
- **Focus rings**: Blue-500 for accessibility

## 🎯 Typography

### Font Stack
```css
font-family: "Avenir Next", -apple-system, BlinkMacSystemFont, "Segoe UI", "Roboto", "Helvetica", "Arial", sans-serif;
```

### Type Scale
- **Base**: 16px (1rem)
- **Small**: 12px (0.75rem) - Status text, timestamps
- **Medium**: 14px (0.875rem) - Secondary text
- **Large**: 16px (1rem) - Body text, names
- **XL**: 18px+ - Headers (rarely used)

### Font Weights
- **Normal**: 400 - Body text
- **Medium**: 500 - Message content
- **Semibold**: 600 - Usernames, badges
- **Bold**: 700 - Emphasis (sparingly)

### Text Colors
- **Primary**: `#16191C` - Main text (chat-user-name)
- **Secondary**: `#656D78` - Status text (chat-status-text)
- **Muted**: `#A0A0A0` - Disabled states
- **White**: `#FFFFFF` - On dark backgrounds

## 🌈 Color Palette

### Core Colors
```typescript
// Chat-specific colors
chat: {
  border: "#E1E1E1",        // Universal border color
  "avatar-bg": "#F7F8F9",   // Avatar container background
  "user-name": "#16191C",   // Username text
  "status-text": "#656D78", // Secondary text
  "video-icon": "#A05DCD",  // Media icon purple
}

// Background colors
backgrounds: {
  primary: "#FFFFFF",       // Main background
  secondary: "#F7F8F9",     // Subtle backgrounds
  hover: "#F9FAFB",        // Hover state (gray-50)
  pressed: "#ECEFF1",      // Active/pressed state
}
```

### Avatar Color System
16 carefully selected colors for user identification:
```javascript
const avatarColors = [
  "#4A90E2", "#5BA0F2", // Blues
  "#FF8C42", "#FFA552", // Oranges
  "#9B59B6", "#AB69C6", // Purples
  "#52C41A", "#73D13D", // Greens
  "#FF6B9D", "#FF7BA3", // Pinks
  "#20B2AA", "#40C9C6", // Teals
  "#FFB347", "#FFC857", // Yellows
  "#E74C3C", "#EC7063", // Reds
];
```

## 📐 Spacing System

### Custom Spacing Values
```javascript
spacing: {
  "13": "3.25rem", // 52px - Avatar inner size
  "14": "3.5rem",  // 56px - Avatar outer size
  "18": "4.5rem",  // 72px - Chat item height
  "80": "20rem",   // 320px - Sidebar width
}
```

### Common Gaps
- **11px**: Message spacing in conversations
- **13px**: Section spacing
- **6px**: Icon-to-text spacing
- **2.5rem** (10px): Component padding

### Padding/Margin Patterns
- **px-3 py-2**: Standard component padding
- **px-4 py-3**: Search bar padding
- **p-3**: Conversation area padding
- **gap-2.5**: Standard flex gap

## 🔲 Component Patterns

### Container Structure
```tsx
// Standard container
<div className="h-full flex flex-col bg-white">
  {/* Header - Fixed height */}
  <div className="h-14 border-b border-chat-border flex-shrink-0">
    {/* Header content */}
  </div>
  
  {/* Body - Flexible height */}
  <div className="flex-1 overflow-y-auto">
    {/* Scrollable content */}
  </div>
</div>
```

### Chat Item Pattern
```tsx
<div className="flex items-center gap-2.5 px-3 py-2 
               border-b border-chat-border bg-white 
               h-18 min-h-18 cursor-pointer 
               hover:bg-gray-50 transition-colors">
  {/* Avatar - Fixed size */}
  <div className="w-14 h-14 min-w-14 flex-shrink-0">
    {/* Avatar content */}
  </div>
  
  {/* Content - Flexible */}
  <div className="flex-1 min-w-0">
    {/* Text content with truncate */}
  </div>
</div>
```

### Button Patterns
```tsx
// Icon button
<button className="flex items-center justify-center 
                   w-9 h-9 rounded-full bg-[#ECEFF1] 
                   hover:bg-gray-300 transition-colors">
  <Icon />
</button>

// Text badge
<div className="px-2 py-0.5 bg-[#ECEFF1] rounded-full">
  <span className="text-base font-semibold text-[#2C3137] 
                   font-avenir px-3 leading-5">
    Label
  </span>
</div>
```

## 🎛️ Interactive States

### Hover Effects
- **Background change**: `hover:bg-gray-50` (subtle)
- **Background change**: `hover:bg-gray-300` (pronounced)
- **Opacity change**: `hover:opacity-80` (for colored elements)
- **Transition**: Always include `transition-colors`

### Focus States
- **Ring**: `focus-visible:ring-2 focus-visible:ring-blue-500`
- **Outline**: `focus:outline-none` (use ring instead)
- **Border**: `focus:border-transparent` (when using ring)

### Active/Pressed
- **Background**: `#ECEFF1` or `bg-gray-200`
- **Scale**: Avoid scale transforms (maintains layout)

## 📱 Responsive Design

### Breakpoints
Follow Tailwind defaults:
- **sm**: 640px
- **md**: 768px
- **lg**: 1024px
- **xl**: 1280px
- **2xl**: 1400px (container max-width)

### Mobile Patterns
- Stack layouts vertically on small screens
- Increase touch targets to minimum 44px
- Simplify navigation for mobile
- Hide non-essential elements

## 🧩 Creating New Components

### Component Checklist
1. **Structure**: Use flex layouts with proper gaps
2. **Colors**: Use existing color tokens from palette
3. **Typography**: Apply Avenir Next with appropriate weights
4. **Spacing**: Use standard padding/margin patterns
5. **Borders**: Always use `border-chat-border` (#E1E1E1)
6. **Heights**: Match existing component heights (h-14, h-18, etc.)
7. **Hover**: Include hover states with gray backgrounds
8. **Icons**: Use 14x14 or 16x16 SVGs consistently
9. **Transitions**: Add `transition-colors` for smooth interactions

### Example New Component
```tsx
// A new notification badge component
export function NotificationBadge({ count, onClick }: Props) {
  return (
    <button
      onClick={onClick}
      className="flex items-center gap-2 px-3 py-2 
                 bg-white border border-chat-border rounded-full
                 hover:bg-gray-50 transition-colors
                 h-9 font-avenir"
    >
      <span className="text-sm font-semibold text-chat-user-name">
        {count} new
      </span>
      <div className="w-2 h-2 bg-[#A05DCD] rounded-full" />
    </button>
  );
}
```

## 🎯 Design Principles

### When Creating New Features
1. **Consistency First**: Match existing patterns exactly
2. **White Space**: Use generous spacing, don't crowd elements
3. **Subtle Interactions**: Prefer subtle hover states over dramatic effects
4. **Clear Hierarchy**: Use font weight and size to establish importance
5. **Minimal Chrome**: Let content shine, minimize UI decoration
6. **Accessibility**: Always include focus states and ARIA labels
7. **Performance**: Use Tailwind utilities over custom CSS

### Do's ✅
- Use existing color tokens
- Match component heights (h-14, h-18)
- Include hover states
- Use Avenir Next font
- Apply consistent borders (#E1E1E1)
- Follow established spacing patterns

### Don'ts ❌
- Create new colors without adding to system
- Use drop shadows (use borders instead)
- Make dramatic hover effects
- Mix border styles
- Use different font families
- Create custom spacing values

## 📝 Implementation Notes

### Using with shadcn/ui
The project uses shadcn/ui components as a base. When customizing:
1. Override default styles in component files
2. Use the `cn()` utility for conditional classes
3. Maintain accessibility features from Radix UI
4. Follow the variant pattern for different states

### Tailwind Config Integration
All design tokens are defined in `tailwind.config.ts`:
- Custom colors under `theme.extend.colors.chat`
- Custom spacing under `theme.extend.spacing`
- Font family under `theme.extend.fontFamily.avenir`

### CSS Variables
The project uses HSL color variables for theming:
- Defined in `client/global.css`
- Supports light/dark mode switching
- Referenced via Tailwind classes like `bg-primary`