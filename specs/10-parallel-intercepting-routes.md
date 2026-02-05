# Spec 10: Parallel Routes and Intercepting Routes

## Overview
Implement Next.js 15's most advanced routing patterns: parallel routes for simultaneous rendering of multiple pages, and intercepting routes for modal-like experiences.

## Parallel Routes `@folder`

### Concept
Parallel routes allow you to simultaneously render multiple pages in the same layout. Each parallel route is defined with the `@` prefix.

### Use Cases
- Dashboard with multiple panels (analytics, notifications, user info)
- Social media feeds with sidebar content
- E-commerce with product grid and filters
- Admin panels with multiple data views

### File Structure
```
src/app/dashboard/
├── layout.js              # Receives all parallel routes as props
├── page.js                # Main dashboard page
├── @analytics/            # Parallel route slot
│   ├── page.js           # /dashboard (analytics panel)
│   └── loading.js        # Loading state for analytics
├── @notifications/        # Parallel route slot
│   ├── page.js           # /dashboard (notifications panel)
│   └── error.js          # Error state for notifications
└── @team/                # Parallel route slot
    └── page.js           # /dashboard (team panel)
```

### Layout Implementation
```javascript
// src/app/dashboard/layout.js
export default function DashboardLayout({
  children,      // Main page content
  analytics,     // @analytics parallel route
  notifications, // @notifications parallel route
  team          // @team parallel route
}) {
  return (
    <div className="dashboard-grid">
      <main>{children}</main>
      <aside className="analytics">{analytics}</aside>
      <aside className="notifications">{notifications}</aside>
      <aside className="team">{team}</aside>
    </div>
  );
}
```

## Intercepting Routes `(..)folder`

### Concept
Intercepting routes allow you to "intercept" navigation to show content in a modal or overlay while keeping the URL updated.

### Intercepting Patterns
- `(.)` - Same level
- `(..)` - One level up
- `(..)(..)` - Two levels up
- `(...)` - Root app directory

### Use Cases
- Photo galleries with modal view
- Product quick view overlays
- Login/signup modals
- Share dialogs
- Image lightboxes

### File Structure
```
src/app/
├── gallery/
│   ├── page.js           # Gallery grid view
│   ├── [id]/
│   │   └── page.js       # Full photo page
│   └── @modal/
│       └── (..)gallery/
│           └── [id]/
│               └── page.js  # Modal view of photo
└── layout.js            # Root layout with modal slot
```

## Implementation Plan

### 1. Dashboard with Parallel Routes
- Create dashboard with multiple data panels
- Analytics panel with charts
- Notifications panel with recent activity
- Team panel with member list
- Independent loading/error states

### 2. Photo Gallery with Intercepting Routes
- Gallery grid showing thumbnails
- Modal overlay when clicking photos
- URL updates to /gallery/[id]
- Direct navigation to /gallery/[id] shows full page
- Back button closes modal

### 3. Blog with Modal Comments
- Blog post list
- Intercept comment routes to show in modal
- Full comment page when accessed directly

## Next.js 15 Considerations

### Async Params
Both patterns work with async params:
```javascript
export default async function Page({ params }) {
  const { id } = await params;
  // Handle parallel or intercepted route
}
```

### Error Boundaries
Each parallel route can have its own error handling:
```javascript
// @analytics/error.js
export default function AnalyticsError({ error, reset }) {
  return (
    <div>
      <h2>Analytics Error</h2>
      <button onClick={reset}>Try again</button>
    </div>
  );
}
```

### Loading States
Independent loading states for each parallel route:
```javascript
// @notifications/loading.js
export default function NotificationsLoading() {
  return <div>Loading notifications...</div>;
}
```

## Benefits

### Parallel Routes
- **Independent Loading**: Each section loads independently
- **Error Isolation**: Errors in one section don't affect others
- **Better UX**: Users see content as it becomes available
- **Flexible Layouts**: Complex dashboard layouts made simple

### Intercepting Routes
- **Modal Experience**: Smooth modal interactions with URL updates
- **SEO Friendly**: Direct links work for full pages
- **Progressive Enhancement**: Works with and without JavaScript
- **Better Navigation**: Back button behavior works naturally

## Learning Objectives

After implementing these patterns, you'll understand:
- How to create complex dashboard layouts
- Modal interactions with proper URL handling
- Independent loading and error states
- Advanced Next.js 15 routing capabilities
- Real-world application of advanced patterns

## Implementation Steps

1. **Dashboard Parallel Routes**: Multi-panel dashboard
2. **Gallery Intercepting Routes**: Photo modal system
3. **Blog Modal System**: Comment modals
4. **Error Handling**: Proper error boundaries
5. **Loading States**: Independent loading UI
6. **Navigation**: Proper back button behavior