# Spec 03: Client Components and Interactivity

## Overview
Learn how to create interactive components using Client Components and understand the composition patterns between Server and Client Components.

## What Are Client Components?

Client Components are React components that run in the browser and can use all React features including hooks, event handlers, and browser APIs.

### Key Characteristics:
- Run in the browser (client-side)
- Must use the `'use client'` directive at the top
- Can use React hooks (`useState`, `useEffect`, etc.)
- Can handle user interactions (onClick, onChange, etc.)
- Can access browser APIs (localStorage, window, etc.)
- Increase JavaScript bundle size

## Code Example: Interactive Counter

```javascript
'use client';

import { useState } from 'react';

export default function Counter() {
  const [count, setCount] = useState(0);

  return (
    <div>
      <p>Count: {count}</p>
      <button onClick={() => setCount(count + 1)}>
        Increment
      </button>
    </div>
  );
}
```

## The 'use client' Directive

- Must be at the **very top** of the file
- Tells Next.js this component should run on the client
- All components imported by a Client Component become Client Components
- Creates a "boundary" between server and client code

## Component Composition Patterns

### ✅ Server Component → Client Component
```javascript
// Server Component (page.js)
import ClientCounter from './ClientCounter';

export default function Page() {
  return (
    <div>
      <h1>Server rendered content</h1>
      <ClientCounter /> {/* Client Component */}
    </div>
  );
}
```

### ❌ Client Component → Server Component
```javascript
// This WON'T work - Client Components can't import Server Components
'use client';
import ServerComponent from './ServerComponent'; // ❌ Error
```

### ✅ Client Component → Server Component (via children)
```javascript
// Server Component passes Server Component as children
<ClientWrapper>
  <ServerComponent /> {/* This works! */}
</ClientWrapper>
```

## When to Use Client Components

✅ **Use Client Components for:**
- Interactive elements (buttons, forms, modals)
- Components using React hooks
- Event handlers (onClick, onChange, onSubmit)
- Browser APIs (localStorage, geolocation)
- Third-party libraries that use browser APIs

❌ **Avoid Client Components for:**
- Static content
- SEO-critical content
- Data fetching (prefer Server Components)
- Large components that don't need interactivity

## Performance Considerations

1. **Bundle Size**: Client Components increase JavaScript bundle size
2. **Hydration**: Client Components need to be hydrated on the client
3. **Granularity**: Keep Client Components small and focused
4. **Composition**: Use Server Components as much as possible

## Best Practices

1. **Start with Server Components** - Only add `'use client'` when needed
2. **Keep Client Components Small** - Extract only interactive parts
3. **Use Composition** - Pass Server Components as children to Client Components
4. **Minimize Client Boundaries** - Don't make entire pages Client Components

## Our Implementation

- **Counter Component**: Interactive counter with state management
- **Composition**: Server Component (page) contains Client Component (counter)
- **Demonstration**: Shows the difference between server-rendered timestamp and client-side interactivity

## Next Steps
- Learn about App Router file-based routing
- Explore data fetching patterns
- Understand loading and error states
- Implement Server Actions for form handling

## Files Created
- `src/app/components/Counter.js` - Interactive Client Component
- `src/app/page.js` - Updated to include Client Component demo