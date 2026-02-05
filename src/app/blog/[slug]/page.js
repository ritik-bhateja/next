import Link from 'next/link';
import { notFound } from 'next/navigation';

// Sample blog posts data (in a real app, this would come from a database or CMS)
const blogPosts = {
  'getting-started-nextjs-15': {
    title: 'Getting Started with Next.js 15',
    content: `
      <h2>Welcome to Next.js 15</h2>
      <p>Next.js 15 brings exciting new features and improvements that make building React applications even better. In this post, we'll explore the key features and how to get started.</p>
      
      <h3>Key Features</h3>
      <ul>
        <li><strong>React Compiler:</strong> Automatic optimizations for better performance</li>
        <li><strong>Async Request APIs:</strong> Cleaner data fetching patterns</li>
        <li><strong>Enhanced Caching:</strong> More control over caching behavior</li>
        <li><strong>Turbopack:</strong> Faster development builds</li>
      </ul>
      
      <h3>Getting Started</h3>
      <p>To create a new Next.js 15 project, run:</p>
      <pre><code>npx create-next-app@latest my-app</code></pre>
      
      <p>This will set up a new project with all the latest features and best practices.</p>
    `,
    date: '2024-02-05',
    author: 'Next.js Learner',
    readTime: '5 min read'
  },
  'server-components-explained': {
    title: 'Server Components Explained',
    content: `
      <h2>Understanding React Server Components</h2>
      <p>React Server Components are a game-changer for React applications. They allow you to render components on the server, reducing the JavaScript bundle size and improving performance.</p>
      
      <h3>How They Work</h3>
      <p>Server Components run on the server during the build process or at request time. They can:</p>
      <ul>
        <li>Access server-side resources directly</li>
        <li>Be async functions</li>
        <li>Fetch data without additional API calls</li>
        <li>Reduce client-side JavaScript</li>
      </ul>
      
      <h3>Example</h3>
      <pre><code>// This is a Server Component
export default async function BlogPost() {
  const data = await fetch('https://api.example.com/posts');
  const posts = await data.json();
  
  return (
    &lt;div&gt;
      {posts.map(post =&gt; (
        &lt;article key={post.id}&gt;{post.title}&lt;/article&gt;
      ))}
    &lt;/div&gt;
  );
}</code></pre>
    `,
    date: '2024-02-04',
    author: 'Next.js Learner',
    readTime: '7 min read'
  },
  'app-router-vs-pages-router': {
    title: 'App Router vs Pages Router',
    content: `
      <h2>Choosing the Right Router</h2>
      <p>Next.js offers two routing systems: the newer App Router and the traditional Pages Router. Understanding when to use each is crucial for your project's success.</p>
      
      <h3>App Router (Recommended)</h3>
      <ul>
        <li>File-based routing in the <code>app/</code> directory</li>
        <li>Built-in support for Server Components</li>
        <li>Nested layouts and loading states</li>
        <li>Better performance and SEO</li>
      </ul>
      
      <h3>Pages Router (Legacy)</h3>
      <ul>
        <li>File-based routing in the <code>pages/</code> directory</li>
        <li>Traditional React patterns</li>
        <li>Simpler mental model for beginners</li>
        <li>Extensive ecosystem support</li>
      </ul>
      
      <h3>Migration Strategy</h3>
      <p>If you're starting a new project, use the App Router. For existing projects, you can migrate incrementally using the <code>app/</code> directory alongside <code>pages/</code>.</p>
    `,
    date: '2024-02-03',
    author: 'Next.js Learner',
    readTime: '6 min read'
  },
  'dynamic-routing-patterns': {
    title: 'Dynamic Routing Patterns',
    content: `
      <h2>Mastering Dynamic Routes</h2>
      <p>Dynamic routing is one of Next.js's most powerful features. It allows you to create flexible, data-driven routes that adapt to your content.</p>
      
      <h3>Basic Dynamic Routes</h3>
      <p>Create a file with square brackets to define a dynamic segment:</p>
      <pre><code>app/blog/[slug]/page.js  // Matches /blog/hello-world</code></pre>
      
      <h3>Catch-All Routes</h3>
      <p>Use three dots for catch-all routes:</p>
      <pre><code>app/docs/[...slug]/page.js  // Matches /docs/a/b/c</code></pre>
      
      <h3>Optional Catch-All Routes</h3>
      <p>Double square brackets make segments optional:</p>
      <pre><code>app/shop/[[...slug]]/page.js  // Matches /shop and /shop/a/b</code></pre>
      
      <h3>Next.js 15 Changes</h3>
      <p>In Next.js 15, params are now async:</p>
      <pre><code>export default async function Page({ params }) {
  const { slug } = await params; // params is now a Promise
  return &lt;div&gt;{slug}&lt;/div&gt;;
}</code></pre>
    `,
    date: '2024-02-02',
    author: 'Next.js Learner',
    readTime: '8 min read'
  }
};

// Generate metadata for each blog post
export async function generateMetadata({ params }) {
  const { slug } = await params;
  const post = blogPosts[slug];
  
  if (!post) {
    return {
      title: 'Post Not Found',
    };
  }
  
  return {
    title: `${post.title} - Next.js 15 Learning Blog`,
    description: post.content.substring(0, 160).replace(/<[^>]*>/g, ''),
  };
}

// Generate static params for all blog posts (optional, for static generation)
export function generateStaticParams() {
  return Object.keys(blogPosts).map((slug) => ({
    slug,
  }));
}

export default async function BlogPost({ params }) {
  // In Next.js 15, params is a Promise
  const { slug } = await params;
  const post = blogPosts[slug];
  
  // If post doesn't exist, show 404
  if (!post) {
    notFound();
  }
  
  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-indigo-100 dark:from-gray-900 dark:to-gray-800">
      <div className="container mx-auto px-4 py-16">
        <div className="max-w-4xl mx-auto">
          {/* Back to Blog Link */}
          <Link 
            href="/blog"
            className="inline-flex items-center text-blue-600 dark:text-blue-400 hover:text-blue-800 dark:hover:text-blue-300 transition-colors mb-8"
          >
            ← Back to Blog
          </Link>
          
          {/* Article Header */}
          <header className="mb-8">
            <h1 className="text-4xl font-bold text-gray-900 dark:text-white mb-4">
              {post.title}
            </h1>
            
            <div className="flex items-center text-gray-600 dark:text-gray-300 text-sm space-x-4">
              <span>By {post.author}</span>
              <span>•</span>
              <span>{new Date(post.date).toLocaleDateString()}</span>
              <span>•</span>
              <span>{post.readTime}</span>
            </div>
          </header>
          
          {/* Article Content */}
          <article className="bg-white dark:bg-gray-800 rounded-lg p-8 shadow-md">
            <div 
              className="prose prose-lg dark:prose-invert max-w-none"
              dangerouslySetInnerHTML={{ __html: post.content }}
            />
          </article>
          
          {/* Dynamic Route Info */}
          <div className="mt-8 bg-green-50 dark:bg-green-900/20 rounded-lg p-6">
            <h3 className="text-lg font-semibold text-green-900 dark:text-green-100 mb-2">
              🎯 Dynamic Route Example
            </h3>
            <p className="text-green-800 dark:text-green-200 text-sm mb-2">
              This page demonstrates Next.js 15 dynamic routing with async params:
            </p>
            <ul className="text-green-800 dark:text-green-200 text-sm space-y-1">
              <li>• File: <code className="bg-green-100 dark:bg-green-800 px-2 py-1 rounded">src/app/blog/[slug]/page.js</code></li>
              <li>• Route: <code className="bg-green-100 dark:bg-green-800 px-2 py-1 rounded">/blog/{slug}</code></li>
              <li>• Params: <code className="bg-green-100 dark:bg-green-800 px-2 py-1 rounded">await params</code> (async in Next.js 15)</li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
}