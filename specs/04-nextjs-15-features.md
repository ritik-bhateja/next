# Spec 04: Next.js 15 Key Features

## Overview
Next.js 15 introduces significant improvements focused on performance, developer experience, and modern React patterns. This spec covers the key features we'll explore in our learning journey.

## Major Next.js 15 Features

### 1. React Compiler (Experimental)
- **Automatic Optimizations**: Automatically memoizes components and values
- **Zero Configuration**: Works out of the box when enabled
- **Performance Gains**: Reduces unnecessary re-renders

```javascript
// next.config.js
/** @type {import('next').NextConfig} */
const nextConfig = {
  experimental: {
    reactCompiler: true, // Enable React Compiler
  },
};

export default nextConfig;
```

### 2. Async Request APIs
Request APIs like `headers()`, `cookies()`, and `params` are now async in Next.js 15:

```typescript
// Before (Next.js 14)
export default function Page({ params }: { params: { id: string } }) {
  const id = params.id;
}

// After (Next.js 15)
export default async function Page({ params }: { params: Promise<{ id: string }> }) {
  const { id } = await params;
}
```

### 3. Caching Changes
- **fetch() requests**: No longer cached by default
- **GET Route Handlers**: No longer cached by default  
- **Client Router Cache**: Page components no longer cached by default

```typescript
// Explicit caching when needed
fetch('/api/data', { 
  cache: 'force-cache' // Explicitly cache
});
```

### 4. Enhanced Error Messages
- **Hydration Errors**: More detailed error messages with suggestions
- **Source Maps**: Better debugging experience
- **Error Boundaries**: Improved error handling

### 5. Turbopack (Stable for Dev)
- **Faster Builds**: Rust-based bundler for development
- **Hot Reload**: Improved hot module replacement
- **Better Performance**: Significantly faster than Webpack in dev mode

### 6. Form Component
New `<Form>` component for enhanced form handling:

```typescript
import { Form } from 'next/form';

export default function MyForm() {
  return (
    <Form action="/search">
      <input name="query" />
      <button type="submit">Search</button>
    </Form>
  );
}
```

### 7. Server Actions Security
- **Enhanced Security**: Better CSRF protection
- **Improved Validation**: Built-in request validation
- **Type Safety**: Better TypeScript integration

## Next.js 15 vs Previous Versions

### Breaking Changes
1. **Async Request APIs**: `params`, `searchParams`, etc. are now Promises
2. **Caching Defaults**: Less aggressive caching by default
3. **Node.js Requirements**: Minimum Node.js 18.18.0

### New Defaults
- **App Router**: Recommended over Pages Router
- **TypeScript**: Better out-of-the-box TypeScript support
- **ESLint**: Enhanced ESLint configuration

## Performance Improvements

### 1. Bundle Size Reduction
- **Tree Shaking**: Better dead code elimination
- **Code Splitting**: Improved automatic code splitting
- **Dynamic Imports**: Enhanced lazy loading

### 2. Runtime Performance
- **Server Components**: Zero client-side JavaScript by default
- **Streaming**: Better streaming and Suspense support
- **Prefetching**: Improved link prefetching

### 3. Build Performance
- **Turbopack**: Faster development builds
- **Incremental Builds**: Better caching for production builds
- **Parallel Processing**: Improved build parallelization

## Developer Experience

### 1. Better Error Messages
```bash
# Before: Generic hydration error
Error: Hydration failed

# After: Detailed explanation
Error: Hydration failed because the initial UI does not match 
what was rendered on the server.
Suggestion: Check if you're using browser-only APIs in Server Components
```

### 2. Improved TypeScript Support
- **Better Inference**: Improved type inference for Server Components
- **Async Components**: Full TypeScript support for async components
- **Route Handlers**: Better typing for API routes

### 3. Enhanced DevTools
- **React DevTools**: Better integration with React DevTools
- **Performance Insights**: Built-in performance monitoring
- **Bundle Analysis**: Improved bundle analyzer

## Migration Considerations

### From Next.js 14 to 15
1. **Update Dependencies**: Update Next.js and React versions
2. **Async APIs**: Update components using request APIs
3. **Caching**: Review and update caching strategies
4. **Testing**: Update tests for async components

### Codemod Support
Next.js 15 provides codemods for automatic migration:

```bash
npx @next/codemod@canary upgrade latest
```

## Learning Path

### Phase 1: Core Concepts ✅
- [x] Project setup with Next.js 15
- [x] Server vs Client Components
- [x] Component composition

### Phase 2: Next.js 15 Features
- [ ] Async Request APIs
- [ ] New caching behavior
- [ ] Form component
- [ ] Server Actions

### Phase 3: Advanced Features
- [ ] Turbopack integration
- [ ] Performance optimization
- [ ] Error handling
- [ ] Production deployment

## Best Practices for Next.js 15

1. **Start with Server Components**: Use Client Components only when needed
2. **Embrace Async**: Use async/await for data fetching in Server Components
3. **Explicit Caching**: Be intentional about caching strategies
4. **Error Boundaries**: Implement proper error handling
5. **Type Safety**: Leverage TypeScript for better development experience

## Resources

- [Next.js 15 Blog Post](https://nextjs.org/blog/next-15)
- [Migration Guide](https://nextjs.org/docs/app/building-your-application/upgrading/version-15)
- [React Compiler Documentation](https://react.dev/learn/react-compiler)

## Next Steps
1. Explore async request APIs in practice
2. Build forms with the new Form component
3. Implement Server Actions
4. Optimize performance with React Compiler