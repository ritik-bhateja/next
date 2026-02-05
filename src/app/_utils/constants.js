// Private constants - not accessible via routing

export const SITE_CONFIG = {
  name: 'Next.js 15 Learning',
  description: 'Learn Next.js 15 with hands-on examples',
  url: 'https://nextjs-15-learning.example.com',
  author: 'Next.js Learner'
};

export const NAVIGATION_ITEMS = [
  { href: '/', label: 'Home' },
  { href: '/about', label: 'About' },
  { href: '/blog', label: 'Blog' },
  { href: '/docs', label: 'Docs' },
  { href: '/shop', label: 'Shop' },
  { href: '/dashboard', label: 'Dashboard' },
  { href: '/contact', label: 'Contact' },
  { href: '/pricing', label: 'Pricing' },
  { href: '/routing-demo', label: 'Routing Demo' }
];

export const ROUTE_PATTERNS = {
  STATIC: 'Static routes like /about, /contact',
  DYNAMIC: 'Dynamic routes like /blog/[slug]',
  CATCH_ALL: 'Catch-all routes like /docs/[...slug]',
  OPTIONAL_CATCH_ALL: 'Optional catch-all routes like /shop/[[...slug]]',
  ROUTE_GROUPS: 'Route groups like (marketing)',
  PRIVATE_ROUTES: 'Private routes like _components, _utils'
};

export const LEARNING_MODULES = [
  'Project Setup',
  'Server Components',
  'Client Components', 
  'App Router Routing',
  'Advanced Routing Patterns',
  'Data Fetching',
  'Server Actions',
  'Performance Optimization'
];