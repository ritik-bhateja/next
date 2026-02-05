# Spec 06: App Router and Routing in Next.js 15

## Overview
Learn Next.js 15 App Router file-based routing system, including static routes, dynamic routes, nested layouts, and navigation patterns.

## App Router Fundamentals

### File-Based Routing
In Next.js 15 App Router, the file system defines your routes:

```
src/app/
├── page.js          # / (home page)
├── about/
│   └── page.js      # /about
├── blog/
│   ├── page.js      # /blog
│   └── [slug]/
│       └── page.js  # /blog/[slug] (dynamic route)
└── dashboard/
    ├── layout.js    # Layout for /dashboard/*
    ├── page.js      # /dashboard
    └── settings/
        └── page.js  # /dashboard/settings
```

### Special Files
- `page.js` - Creates a route and makes it publicly accessible
- `layout.js` - Shared UI for a segment and its children
- `loading.js` - Loading UI for a segment
- `error.js` - Error UI for a segment
- `not-found.js` - Not found UI for a segment

## Route Types

### 1. Static Routes
```javascript
// src/app/about/page.js
export default function About() {
  return (
    <div>
      <h1>About Us</h1>
      <p>Learn more about our company.</p>
    </div>
  );
}
```

### 2. Dynamic Routes
```javascript
// src/app/blog/[slug]/page.js
export default async function BlogPost({ params }) {
  const { slug } = await params; // In Next.js 15, params is a Promise
  
  return (
    <div>
      <h1>Blog Post: {slug}</h1>
      <p>Content for {slug}</p>
    </div>
  );
}
```

### 3. Nested Routes with Layouts
```javascript
// src/app/dashboard/layout.js
export default function DashboardLayout({ children }) {
  return (
    <div className="dashboard">
      <nav>Dashboard Navigation</nav>
      <main>{children}</main>
    </div>
  );
}
```

## Navigation

### 1. Link Component
```javascript
import Link from 'next/link';

export default function Navigation() {
  return (
    <nav>
      <Link href="/">Home</Link>
      <Link href="/about">About</Link>
      <Link href="/blog">Blog</Link>
    </nav>
  );
}
```

### 2. useRouter Hook (Client Components)
```javascript
'use client';
import { useRouter } from 'next/navigation';

export default function NavigateButton() {
  const router = useRouter();
  
  return (
    <button onClick={() => router.push('/dashboard')}>
      Go to Dashboard
    </button>
  );
}
```

### 3. redirect Function (Server Components)
```javascript
import { redirect } from 'next/navigation';

export default async function ProtectedPage() {
  const isAuthenticated = false; // Your auth logic
  
  if (!isAuthenticated) {
    redirect('/login');
  }
  
  return <div>Protected Content</div>;
}
```

## Next.js 15 Routing Changes

### Async Params and SearchParams
In Next.js 15, `params` and `searchParams` are now Promises:

```javascript
// Before (Next.js 14)
export default function Page({ params, searchParams }) {
  const { id } = params;
  const { query } = searchParams;
}

// After (Next.js 15)
export default async function Page({ params, searchParams }) {
  const { id } = await params;
  const { query } = await searchParams;
}
```

## Learning Objectives

By the end of this section, you'll understand:
- File-based routing structure
- Static vs dynamic routes
- Nested layouts and route groups
- Navigation patterns (Link, useRouter, redirect)
- Loading and error states
- Next.js 15 async params/searchParams

## Implementation Plan

1. **Basic Routes**: Create static routes (about, contact)
2. **Dynamic Routes**: Build a blog with dynamic slugs
3. **Nested Layouts**: Create a dashboard with nested navigation
4. **Navigation**: Implement navigation components
5. **Loading States**: Add loading and error boundaries
6. **Route Groups**: Organize routes with groups

## Next Steps
- Create static routes for basic pages
- Implement dynamic blog routes
- Build nested dashboard layout
- Add navigation components
- Test routing patterns