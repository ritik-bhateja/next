# Spec 08: Advanced Routing Patterns in Next.js 15

## Overview
Explore advanced Next.js 15 App Router patterns including catch-all routes, optional catch-all routes, route groups, and private routes.

## Advanced Route Types

### 1. Catch-All Routes `[...slug]`
Matches multiple path segments and captures them as an array.

```
src/app/docs/[...slug]/page.js
```

**Matches:**
- `/docs/getting-started` → `slug = ['getting-started']`
- `/docs/api/authentication` → `slug = ['api', 'authentication']`
- `/docs/guides/deployment/vercel` → `slug = ['guides', 'deployment', 'vercel']`

**Does NOT match:**
- `/docs` (no segments after docs)

### 2. Optional Catch-All Routes `[[...slug]]`
Like catch-all routes but also matches the route without any segments.

```
src/app/shop/[[...slug]]/page.js
```

**Matches:**
- `/shop` → `slug = undefined`
- `/shop/electronics` → `slug = ['electronics']`
- `/shop/electronics/phones` → `slug = ['electronics', 'phones']`
- `/shop/electronics/phones/iphone` → `slug = ['electronics', 'phones', 'iphone']`

### 3. Route Groups `(folder)`
Organize routes without affecting the URL structure.

```
src/app/(marketing)/
├── about/page.js        # /about
├── contact/page.js      # /contact
└── pricing/page.js      # /pricing

src/app/(dashboard)/
├── analytics/page.js    # /analytics
├── settings/page.js     # /settings
└── layout.js           # Layout for dashboard routes
```

### 4. Private Routes `_folder`
Folders starting with underscore are ignored by the router.

```
src/app/
├── _components/         # Private folder (not routable)
│   ├── Header.js
│   └── Footer.js
├── _utils/             # Private folder (not routable)
│   └── helpers.js
└── public-page/
    └── page.js         # /public-page (routable)
```

## Implementation Examples

### Catch-All Route Example
```javascript
// src/app/docs/[...slug]/page.js
export default async function DocsPage({ params }) {
  const { slug } = await params;
  
  // slug is an array of path segments
  const breadcrumbs = slug || [];
  const currentPage = breadcrumbs[breadcrumbs.length - 1] || 'docs';
  
  return (
    <div>
      <nav>
        {breadcrumbs.map((segment, index) => (
          <span key={index}>
            {index > 0 && ' / '}
            {segment}
          </span>
        ))}
      </nav>
      <h1>Documentation: {currentPage}</h1>
    </div>
  );
}
```

### Optional Catch-All Route Example
```javascript
// src/app/shop/[[...slug]]/page.js
export default async function ShopPage({ params }) {
  const { slug } = await params;
  
  if (!slug) {
    // Handle /shop (no segments)
    return <div>Shop Home - All Categories</div>;
  }
  
  const [category, subcategory, product] = slug;
  
  if (product) {
    return <div>Product: {product} in {category}/{subcategory}</div>;
  }
  
  if (subcategory) {
    return <div>Subcategory: {subcategory} in {category}</div>;
  }
  
  return <div>Category: {category}</div>;
}
```

### Route Groups Example
```javascript
// src/app/(marketing)/layout.js
export default function MarketingLayout({ children }) {
  return (
    <div>
      <header>Marketing Header</header>
      {children}
      <footer>Marketing Footer</footer>
    </div>
  );
}

// src/app/(dashboard)/layout.js
export default function DashboardLayout({ children }) {
  return (
    <div>
      <nav>Dashboard Navigation</nav>
      {children}
    </div>
  );
}
```

## Use Cases

### 1. Documentation Sites (Catch-All)
- `/docs/getting-started`
- `/docs/api/authentication`
- `/docs/guides/deployment/vercel`

### 2. E-commerce Categories (Optional Catch-All)
- `/shop` - All products
- `/shop/electronics` - Electronics category
- `/shop/electronics/phones` - Phones subcategory
- `/shop/electronics/phones/iphone-15` - Specific product

### 3. Multi-tenant Applications (Route Groups)
- `(tenant-a)/dashboard` → `/dashboard` for tenant A
- `(tenant-b)/dashboard` → `/dashboard` for tenant B
- Different layouts and components per tenant

### 4. Code Organization (Private Routes)
- `_components/` - Shared components
- `_utils/` - Utility functions
- `_hooks/` - Custom React hooks
- `_types/` - TypeScript types (if using TS)

## Benefits

### Catch-All Routes
- **Flexible URL structures**: Handle any depth of nesting
- **Dynamic breadcrumbs**: Generate navigation from URL segments
- **SEO-friendly**: Clean URLs for content hierarchies

### Optional Catch-All Routes
- **Unified handling**: Single component handles multiple URL patterns
- **Reduced duplication**: Less code than separate route files
- **Flexible navigation**: Support both category and product pages

### Route Groups
- **Organization**: Group related routes logically
- **Multiple layouts**: Different layouts for different sections
- **Team collaboration**: Organize code by feature/team

### Private Routes
- **Clean structure**: Keep implementation details private
- **Security**: Prevent accidental exposure of internal files
- **Organization**: Separate public routes from utilities

## Next.js 15 Considerations

### Async Params
All route types use async params in Next.js 15:

```javascript
export default async function Page({ params }) {
  const { slug } = await params; // Always await params
  // Handle slug array or undefined
}
```

### Metadata Generation
Works with all route types:

```javascript
export async function generateMetadata({ params }) {
  const { slug } = await params;
  const title = slug ? slug.join(' / ') : 'Home';
  return { title };
}
```

### Static Generation
Can be used with catch-all routes:

```javascript
export function generateStaticParams() {
  return [
    { slug: ['getting-started'] },
    { slug: ['api', 'authentication'] },
    { slug: ['guides', 'deployment'] },
  ];
}
```

## Implementation Plan

1. **Documentation Site**: Implement catch-all routes for docs
2. **E-commerce Shop**: Create optional catch-all for product categories
3. **Route Groups**: Organize existing routes into logical groups
4. **Private Routes**: Move components to private folders
5. **Navigation**: Update navigation to handle new route patterns

## Learning Objectives

After implementing these patterns, you'll understand:
- When to use each advanced routing pattern
- How to handle dynamic URL structures
- Code organization strategies
- URL design best practices
- Next.js 15 async params with complex routes