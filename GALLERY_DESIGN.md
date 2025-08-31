# Conversation-bound Gallery Design

## 📋 Feature Overview

A dedicated media gallery for each conversation that collects all shared photos and videos in one place, accessible via a button in the chat header. The gallery provides a grid view of media with full-screen viewing capabilities and navigation controls.

## 🏗️ Architecture

### Component Structure
```
ConversationView (modified)
├── ConversationHeader (modified)
│   └── GalleryButton (new)
├── ConversationMessages (existing)
└── ConversationGallery (new)
    ├── GalleryGrid
    │   └── GalleryThumbnail (multiple)
    └── MediaViewer (modal)
        ├── MediaDisplay
        ├── MediaControls
        └── MediaNavigation
```

### Data Flow
```typescript
interface MediaItem {
  id: string;
  type: 'image' | 'video';
  thumbnailUrl: string;
  fullUrl: string;
  timestamp: string;
  messageId: string; // Links back to original message
  sender: string;
  duration?: number; // For videos
  caption?: string;
}

interface GalleryState {
  mediaItems: MediaItem[];
  selectedMediaId: string | null;
  isViewerOpen: boolean;
  isPlaying: boolean; // For video playback
  currentTime: number; // For progress tracking
}
```

## 🎨 UI Design Specifications

### Gallery Button (Header Integration)
```tsx
// In ConversationHeader.tsx - Add next to existing media button
<button className="flex items-center justify-center p-2.5 
                   rounded-[37px] border border-black border-opacity-10 
                   hover:bg-gray-50 transition-colors">
  <svg width="16" height="16" viewBox="0 0 16 16">
    {/* Grid icon for gallery */}
  </svg>
</button>
```

### Gallery Grid View
```tsx
// Responsive grid following design system
<div className="grid grid-cols-3 gap-1 p-3 bg-white">
  {mediaItems.map(item => (
    <GalleryThumbnail 
      key={item.id}
      item={item}
      onClick={() => openMediaViewer(item.id)}
    />
  ))}
</div>
```

### Gallery Thumbnail Design
```tsx
<div className="relative aspect-square bg-chat-avatar-bg 
                rounded-sm overflow-hidden cursor-pointer 
                hover:opacity-90 transition-opacity">
  {/* Thumbnail image */}
  <img src={item.thumbnailUrl} className="w-full h-full object-cover" />
  
  {/* Video indicator */}
  {item.type === 'video' && (
    <div className="absolute bottom-1 right-1 bg-black bg-opacity-60 
                    text-white text-xs px-1 rounded">
      {formatDuration(item.duration)}
    </div>
  )}
  
  {/* Play icon for videos */}
  {item.type === 'video' && (
    <div className="absolute inset-0 flex items-center justify-center">
      <div className="w-10 h-10 bg-black bg-opacity-50 rounded-full 
                      flex items-center justify-center">
        <PlayIcon className="w-5 h-5 text-white" />
      </div>
    </div>
  )}
</div>
```

### Full-Screen Media Viewer
```tsx
<div className="fixed inset-0 z-50 bg-black flex flex-col">
  {/* Header Bar */}
  <div className="flex items-center justify-between p-4 
                  bg-gradient-to-b from-black/50 to-transparent">
    <button onClick={closeViewer} 
            className="w-9 h-9 rounded-full bg-white/20 
                       backdrop-blur flex items-center justify-center
                       hover:bg-white/30 transition-colors">
      <CloseIcon className="w-5 h-5 text-white" />
    </button>
    
    <button onClick={jumpToMessage}
            className="px-4 py-2 bg-white/20 backdrop-blur rounded-full
                       text-white text-sm font-medium
                       hover:bg-white/30 transition-colors">
      View in Chat
    </button>
  </div>
  
  {/* Media Display Area */}
  <div className="flex-1 flex items-center justify-center relative">
    {/* Previous Button */}
    <button onClick={previousMedia}
            className="absolute left-4 w-10 h-10 rounded-full 
                       bg-white/20 backdrop-blur
                       flex items-center justify-center
                       hover:bg-white/30 transition-colors">
      <ChevronLeft className="w-6 h-6 text-white" />
    </button>
    
    {/* Media Content */}
    <div className="max-w-full max-h-full">
      {item.type === 'image' ? (
        <img src={item.fullUrl} className="max-w-full max-h-full" />
      ) : (
        <video ref={videoRef} 
               src={item.fullUrl}
               className="max-w-full max-h-full" />
      )}
    </div>
    
    {/* Next Button */}
    <button onClick={nextMedia}
            className="absolute right-4 w-10 h-10 rounded-full 
                       bg-white/20 backdrop-blur
                       flex items-center justify-center
                       hover:bg-white/30 transition-colors">
      <ChevronRight className="w-6 h-6 text-white" />
    </button>
  </div>
  
  {/* Media Controls (for videos) */}
  {item.type === 'video' && (
    <div className="p-4 bg-gradient-to-t from-black/50 to-transparent">
      <div className="flex items-center gap-4">
        {/* Play/Pause */}
        <button onClick={togglePlayback}
                className="w-10 h-10 rounded-full bg-white/20 backdrop-blur
                           flex items-center justify-center
                           hover:bg-white/30 transition-colors">
          {isPlaying ? <PauseIcon /> : <PlayIcon />}
        </button>
        
        {/* Progress Bar */}
        <div className="flex-1 relative">
          <div className="h-1 bg-white/30 rounded-full overflow-hidden">
            <div className="h-full bg-white transition-all duration-200"
                 style={{width: `${progress}%`}} />
          </div>
        </div>
        
        {/* Duration */}
        <span className="text-white text-sm font-medium min-w-[60px]">
          {formatTime(currentTime)} / {formatTime(duration)}
        </span>
      </div>
    </div>
  )}
</div>
```

## 🎯 Interaction Patterns

### Gallery Access Flow
1. User taps gallery button in conversation header
2. View switches from messages to gallery grid
3. Grid displays all media chronologically (newest first)
4. User can switch back via tab or back button

### Media Viewing Flow
1. User taps thumbnail in gallery grid
2. Full-screen viewer opens with selected media
3. User can navigate with previous/next buttons
4. User can play/pause videos with controls
5. "View in Chat" button scrolls to original message

### Placeholder Media System
```typescript
// Generate placeholder media for development
const placeholderMedia: MediaItem[] = [
  {
    id: '1',
    type: 'image',
    thumbnailUrl: 'https://picsum.photos/200/200?random=1',
    fullUrl: 'https://picsum.photos/800/600?random=1',
    timestamp: new Date().toISOString(),
    messageId: 'msg-1',
    sender: 'John Doe'
  },
  {
    id: '2',
    type: 'video',
    thumbnailUrl: 'https://picsum.photos/200/200?random=2',
    fullUrl: '/assets/placeholder-video.mp4',
    timestamp: new Date().toISOString(),
    messageId: 'msg-2',
    sender: 'Jane Smith',
    duration: 30
  },
  // ... more placeholder items
];
```

## 📦 Implementation Components

### 1. GalleryButton Component
```typescript
// client/components/GalleryButton.tsx
interface GalleryButtonProps {
  onClick: () => void;
  isActive: boolean;
}
```

### 2. ConversationGallery Component
```typescript
// client/components/ConversationGallery.tsx
interface ConversationGalleryProps {
  conversationId: string;
  onViewInChat: (messageId: string) => void;
}
```

### 3. MediaViewer Component
```typescript
// client/components/MediaViewer.tsx
interface MediaViewerProps {
  mediaItems: MediaItem[];
  initialMediaId: string;
  onClose: () => void;
  onViewInChat: (messageId: string) => void;
}
```

### 4. GalleryThumbnail Component
```typescript
// client/components/GalleryThumbnail.tsx
interface GalleryThumbnailProps {
  item: MediaItem;
  onClick: () => void;
}
```

## 🔄 State Management

### Gallery State Hook
```typescript
// client/hooks/useGalleryState.ts
export function useGalleryState(conversationId: string) {
  const [viewMode, setViewMode] = useState<'messages' | 'gallery'>('messages');
  const [selectedMediaId, setSelectedMediaId] = useState<string | null>(null);
  const [isViewerOpen, setIsViewerOpen] = useState(false);
  
  // Fetch media items for conversation
  const mediaItems = useMemo(() => {
    return getMediaItemsForConversation(conversationId);
  }, [conversationId]);
  
  return {
    viewMode,
    setViewMode,
    mediaItems,
    selectedMediaId,
    setSelectedMediaId,
    isViewerOpen,
    setIsViewerOpen
  };
}
```

## 🎨 Styling Consistency

### Following Design System
- White backgrounds for gallery grid
- #E1E1E1 borders for separation
- Gray-50 hover states for thumbnails
- Avenir Next font for all text
- Consistent spacing (gap-1 for grid, p-3 for container)
- Rounded corners matching existing patterns
- Transition animations for smooth interactions

### Dark Overlay for Viewer
- Black background for immersive viewing
- White/20 backdrop blur for controls
- Gradient overlays for better text visibility
- White text and icons for contrast

## 📱 Responsive Considerations

### Mobile Layout
- 3 columns on mobile (grid-cols-3)
- Full-screen viewer on all devices
- Touch-friendly controls (min 44px targets)
- Swipe gestures for navigation (optional enhancement)

### Tablet/Desktop
- 4-6 columns on larger screens
- Keyboard navigation support
- Hover states for desktop interaction

## 🚀 Implementation Priority

1. **Phase 1**: Basic gallery grid with placeholder media
2. **Phase 2**: Full-screen image viewer with navigation
3. **Phase 3**: Video playback with controls
4. **Phase 4**: "View in Chat" integration
5. **Phase 5**: Performance optimizations and lazy loading