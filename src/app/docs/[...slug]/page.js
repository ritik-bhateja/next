import Link from 'next/link';
import { notFound } from 'next/navigation';

// Sample documentation structure
const docsContent = {
  'getting-started': {
    title: 'Getting Started',
    content: `
      <h2>Welcome to Next.js 15 Documentation</h2>
      <p>This section covers the basics of getting started with Next.js 15.</p>
      <h3>Installation</h3>
      <pre><code>npx create-next-app@latest my-app</code></pre>
      <h3>Key Features</h3>
      <ul>
        <li>App Router with file-based routing</li>
        <li>Server and Client Components</li>
        <li>Built-in optimizations</li>
      </ul>
    `
  },
  'api': {
    title: 'API Reference',
    content: `
      <h2>API Reference</h2>
      <p>Complete API documentation for Next.js 15 features.</p>
      <h3>Available APIs</h3>
      <ul>
        <li><a href="/docs/api/routing">Routing API</a></li>
        <li><a href="/docs/api/components">Components API</a></li>
        <li><a href="/docs/api/data-fetching">Data Fetching API</a></li>
      </ul>
    `
  },
  'api/routing': {
    title: 'Routing API',
    content: `
      <h2>Routing API</h2>
      <p>Learn about Next.js 15 routing APIs and patterns.</p>
      <h3>Route Types</h3>
      <ul>
        <li><strong>Static Routes:</strong> /about, /contact</li>
        <li><strong>Dynamic Routes:</strong> /blog/[slug]</li>
        <li><strong>Catch-all Routes:</strong> /docs/[...slug]</li>
        <li><strong>Optional Catch-all:</strong> /shop/[[...slug]]</li>
      </ul>
      <h3>Navigation</h3>
      <pre><code>import Link from 'next/link';
import { useRouter } from 'next/navigation';</code></pre>
    `
  },
  'api/components': {
    title: 'Components API',
    content: `
      <h2>Components API</h2>
      <p>Server and Client Components in Next.js 15.</p>
      <h3>Server Components</h3>
      <ul>
        <li>Run on the server</li>
        <li>Can be async functions</li>
        <li>Access server-side resources</li>
      </ul>
      <h3>Client Components</h3>
      <ul>
        <li>Use 'use client' directive</li>
        <li>Run in the browser</li>
        <li>Can use React hooks</li>
      </ul>
    `
  },
  'api/data-fetching': {
    title: 'Data Fetching API',
    content: `
      <h2>Data Fetching API</h2>
      <p>Modern data fetching patterns in Next.js 15.</p>
      <h3>Server Components</h3>
      <pre><code>export default async function Page() {
  const data = await fetch('https://api.example.com/data');
  const json = await data.json();
  return &lt;div&gt;{json.title}&lt;/div&gt;;
}</code></pre>
      <h3>Client Components</h3>
      <pre><code>'use client';
import { useState, useEffect } from 'react';

export default function ClientPage() {
  const [data, setData] = useState(null);
  
  useEffect(() => {
    fetch('/api/data').then(res => res.json()).then(setData);
  }, []);
  
  return &lt;div&gt;{data?.title}&lt;/div&gt;;
}</code></pre>
    `
  },
  'guides': {
    title: 'Guides',
    content: `
      <h2>Guides</h2>
      <p>Step-by-step guides for common Next.js 15 tasks.</p>
      <h3>Available Guides</h3>
      <ul>
        <li><a href="/docs/guides/deployment">Deployment Guide</a></li>
        <li><a href="/docs/guides/styling">Styling Guide</a></li>
        <li><a href="/docs/guides/performance">Performance Guide</a></li>
      </ul>
    `
  },
  'guides/deployment': {
    title: 'Deployment Guide',
    content: `
      <h2>Deployment Guide</h2>
      <p>Learn how to deploy your Next.js 15 application.</p>
      <h3>Deployment Options</h3>
      <ul>
        <li><a href="/docs/guides/deployment/vercel">Vercel</a></li>
        <li><a href="/docs/guides/deployment/netlify">Netlify</a></li>
        <li><a href="/docs/guides/deployment/docker">Docker</a></li>
      </ul>
    `
  },
  'guides/deployment/vercel': {
    title: 'Deploy to Vercel',
    content: `
      <h2>Deploy to Vercel</h2>
      <p>Vercel is the easiest way to deploy Next.js applications.</p>
      <h3>Steps</h3>
      <ol>
        <li>Push your code to GitHub</li>
        <li>Connect your repository to Vercel</li>
        <li>Deploy automatically on every push</li>
      </ol>
      <h3>Configuration</h3>
      <pre><code>// vercel.json
{
  "framework": "nextjs",
  "buildCommand": "npm run build"
}</code></pre>
    `
  },
  'guides/deployment/netlify': {
    title: 'Deploy to Netlify',
    content: `
      <h2>Deploy to Netlify</h2>
      <p>Deploy your Next.js app to Netlify with static export.</p>
      <h3>Configuration</h3>
      <pre><code>// next.config.js
const nextConfig = {
  output: 'export',
  trailingSlash: true,
  images: {
    unoptimized: true
  }
};

export default nextConfig;</code></pre>
    `
  }
};

// Generate metadata based on the slug
export async function generateMetadata({ params }) {
  const { slug } = await params;
  const path = slug.join('/');
  const doc = docsContent[path];
  
  return {
    title: doc ? `${doc.title} - Documentation` : 'Documentation',
    description: doc ? `Learn about ${doc.title} in Next.js 15` : 'Next.js 15 Documentation',
  };
}

// Generate static params for known documentation pages
export function generateStaticParams() {
  return Object.keys(docsContent).map((path) => ({
    slug: path.split('/'),
  }));
}

export default async function DocsPage({ params }) {
  const { slug } = await params; // slug is an array in catch-all routes
  const path = slug.join('/');
  const doc = docsContent[path];
  
  // If documentation doesn't exist, show 404
  if (!doc) {
    notFound();
  }
  
  // Generate breadcrumbs from slug array
  const breadcrumbs = slug.map((segment, index) => ({
    name: segment.charAt(0).toUpperCase() + segment.slice(1).replace('-', ' '),
    href: '/docs/' + slug.slice(0, index + 1).join('/'),
    isLast: index === slug.length - 1
  }));
  
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 to-gray-100 dark:from-gray-900 dark:to-gray-800">
      <div className="container mx-auto px-4 py-16">
        <div className="max-w-4xl mx-auto">
          {/* Back to Home */}
          <Link 
            href="/"
            className="inline-flex items-center text-blue-600 dark:text-blue-400 hover:text-blue-800 dark:hover:text-blue-300 transition-colors mb-6"
          >
            ← Back to Home
          </Link>
          
          {/* Breadcrumbs */}
          <nav className="mb-8">
            <div className="flex items-center space-x-2 text-sm text-gray-600 dark:text-gray-400">
              <Link href="/docs" className="hover:text-blue-600 dark:hover:text-blue-400">
                Docs
              </Link>
              {breadcrumbs.map((crumb, index) => (
                <div key={index} className="flex items-center space-x-2">
                  <span>/</span>
                  {crumb.isLast ? (
                    <span className="text-gray-900 dark:text-white font-medium">
                      {crumb.name}
                    </span>
                  ) : (
                    <Link 
                      href={crumb.href}
                      className="hover:text-blue-600 dark:hover:text-blue-400"
                    >
                      {crumb.name}
                    </Link>
                  )}
                </div>
              ))}
            </div>
          </nav>
          
          {/* Documentation Content */}
          <article className="bg-white dark:bg-gray-800 rounded-lg p-8 shadow-md">
            <h1 className="text-3xl font-bold text-gray-900 dark:text-white mb-6">
              {doc.title}
            </h1>
            
            <div 
              className="prose prose-lg dark:prose-invert max-w-none"
              dangerouslySetInnerHTML={{ __html: doc.content }}
            />
          </article>
          
          {/* Catch-All Route Info */}
          <div className="mt-8 bg-purple-50 dark:bg-purple-900/20 rounded-lg p-6">
            <h3 className="text-lg font-semibold text-purple-900 dark:text-purple-100 mb-2">
              🔗 Catch-All Route Example
            </h3>
            <p className="text-purple-800 dark:text-purple-200 text-sm mb-2">
              This page demonstrates Next.js 15 catch-all routes with <code>[...slug]</code>:
            </p>
            <ul className="text-purple-800 dark:text-purple-200 text-sm space-y-1">
              <li>• File: <code className="bg-purple-100 dark:bg-purple-800 px-2 py-1 rounded">src/app/docs/[...slug]/page.js</code></li>
              <li>• Route: <code className="bg-purple-100 dark:bg-purple-800 px-2 py-1 rounded">/docs/{slug.join('/')}</code></li>
              <li>• Slug array: <code className="bg-purple-100 dark:bg-purple-800 px-2 py-1 rounded">[{slug.map(s => `"${s}"`).join(', ')}]</code></li>
              <li>• Breadcrumbs: Generated from slug array</li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
}