# Spec 02: Understanding Server Components

## Overview
Learn the fundamental concept of Server Components in Next.js 15 and how they differ from Client Components.

## What Are Server Components?

Server Components are React components that run on the server during the build process or at request time. They are the **default** in Next.js App Router.

### Key Characteristics:
- Run on the server (not in the browser)
- Can be `async` functions
- Can directly access server-side resources (databases, file system, APIs)
- Cannot use browser-only APIs or event handlers
- Cannot use React hooks like `useState`, `useEffect`
- Reduce JavaScript bundle size sent to client

## Code Example: Our Home Page

```javascript
// This is a Server Component (default in App Router)
export default async function Home() {
  // Server Components can be async and fetch data directly
  const currentTime = new Date().toLocaleString();
  
  return (
    <div>
      <p>Server rendered at: {currentTime}</p>
    </div>
  );
}
```

## Server vs Client Components

| Feature | Server Components | Client Components |
|---------|------------------|-------------------|
| **Where they run** | Server | Browser |
| **Can be async** | ✅ Yes | ❌ No |
| **Access server resources** | ✅ Yes | ❌ No |
| **Use React hooks** | ❌ No | ✅ Yes |
| **Handle user interactions** | ❌ No | ✅ Yes |
| **Bundle size impact** | ✅ Zero | ❌ Increases bundle |

## When to Use Server Components

✅ **Use Server Components for:**
- Static content and layouts
- Data fetching from databases/APIs
- SEO-critical content
- Components that don't need interactivity

❌ **Don't use Server Components for:**
- Interactive elements (buttons, forms)
- Components using React hooks
- Browser-only APIs (localStorage, window)

## Benefits We're Seeing

1. **Performance**: The server renders HTML, reducing client-side JavaScript
2. **SEO**: Content is available immediately for search engines
3. **Security**: Sensitive operations stay on the server
4. **Caching**: Server-rendered content can be cached effectively

## Next Steps
- Create Client Components for interactivity
- Learn about the `'use client'` directive
- Understand component composition patterns
- Explore data fetching in Server Components

## Files Modified
- `src/app/page.tsx` - Enhanced with Server Component features