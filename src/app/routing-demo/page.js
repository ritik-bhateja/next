import Link from 'next/link';
import { ROUTE_PATTERNS } from '../_utils/constants';

export const metadata = {
  title: "Advanced Routing Demo - Next.js 15 Learning",
  description: "Demonstration of all advanced routing patterns in Next.js 15",
};

const routingExamples = [
  {
    type: 'Static Routes',
    pattern: '/about, /contact, /pricing',
    description: 'Fixed URL paths that don\'t change',
    examples: [
      { url: '/about', description: 'About page' },
      { url: '/contact', description: 'Contact form' },
      { url: '/pricing', description: 'Pricing plans' }
    ],
    fileStructure: `
src/app/
├── about/page.js          # /about
├── contact/page.js        # /contact
└── pricing/page.js        # /pricing`
  },
  {
    type: 'Dynamic Routes',
    pattern: '/blog/[slug]',
    description: 'URL segments that can change based on data',
    examples: [
      { url: '/blog/getting-started-nextjs-15', description: 'Blog post with slug' },
      { url: '/blog/server-components-explained', description: 'Another blog post' }
    ],
    fileStructure: `
src/app/
└── blog/
    ├── page.js            # /blog
    └── [slug]/
        └── page.js        # /blog/[slug]`
  },
  {
    type: 'Catch-All Routes',
    pattern: '/docs/[...slug]',
    description: 'Matches multiple path segments as an array',
    examples: [
      { url: '/docs/getting-started', description: 'slug = ["getting-started"]' },
      { url: '/docs/api/routing', description: 'slug = ["api", "routing"]' },
      { url: '/docs/guides/deployment/vercel', description: 'slug = ["guides", "deployment", "vercel"]' }
    ],
    fileStructure: `
src/app/
└── docs/
    ├── page.js            # /docs
    └── [...slug]/
        └── page.js        # /docs/[...slug]`
  },
  {
    type: 'Optional Catch-All Routes',
    pattern: '/shop/[[...slug]]',
    description: 'Like catch-all but also matches the route without segments',
    examples: [
      { url: '/shop', description: 'slug = undefined (matches!)' },
      { url: '/shop/electronics', description: 'slug = ["electronics"]' },
      { url: '/shop/electronics/phones/iphone-15', description: 'slug = ["electronics", "phones", "iphone-15"]' }
    ],
    fileStructure: `
src/app/
└── shop/
    └── [[...slug]]/
        └── page.js        # /shop and /shop/[...slug]`
  },
  {
    type: 'Route Groups',
    pattern: '(marketing)',
    description: 'Organize routes without affecting URL structure',
    examples: [
      { url: '/about', description: 'Uses marketing layout' },
      { url: '/contact', description: 'Uses marketing layout' },
      { url: '/pricing', description: 'Uses marketing layout' }
    ],
    fileStructure: `
src/app/
└── (marketing)/
    ├── layout.js          # Marketing layout
    ├── about/page.js      # /about
    ├── contact/page.js    # /contact
    └── pricing/page.js    # /pricing`
  },
  {
    type: 'Private Routes',
    pattern: '_components, _utils',
    description: 'Folders starting with underscore are not routable',
    examples: [
      { url: '/_components', description: '404 - Not accessible' },
      { url: '/_utils', description: '404 - Not accessible' },
      { url: '/_utils/constants', description: '404 - Not accessible' }
    ],
    fileStructure: `
src/app/
├── _components/           # Private (not routable)
│   ├── Navigation.js
│   └── Counter.js
└── _utils/               # Private (not routable)
    ├── constants.js
    └── formatters.js`
  }
];

export default function RoutingDemo() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-cyan-50 to-blue-100 dark:from-gray-900 dark:to-gray-800">
      <div className="container mx-auto px-4 py-16">
        <div className="max-w-6xl mx-auto">
          {/* Back to Home */}
          <Link 
            href="/"
            className="inline-flex items-center text-blue-600 dark:text-blue-400 hover:text-blue-800 dark:hover:text-blue-300 transition-colors mb-8"
          >
            ← Back to Home
          </Link>
          
          {/* Header */}
          <div className="text-center mb-12">
            <h1 className="text-4xl font-bold text-gray-900 dark:text-white mb-4">
              Advanced Routing Patterns Demo
            </h1>
            <p className="text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
              Explore all the advanced routing patterns available in Next.js 15 App Router. 
              Each pattern serves different use cases and provides unique benefits.
            </p>
          </div>
          
          {/* Routing Examples */}
          <div className="space-y-8">
            {routingExamples.map((example, index) => (
              <div key={index} className="bg-white dark:bg-gray-800 rounded-lg p-8 shadow-md">
                <div className="mb-6">
                  <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-2">
                    {example.type}
                  </h2>
                  <p className="text-lg font-mono text-blue-600 dark:text-blue-400 mb-3">
                    {example.pattern}
                  </p>
                  <p className="text-gray-600 dark:text-gray-300">
                    {example.description}
                  </p>
                </div>
                
                <div className="grid md:grid-cols-2 gap-8">
                  {/* Examples */}
                  <div>
                    <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-4">
                      Live Examples
                    </h3>
                    <div className="space-y-3">
                      {example.examples.map((ex, exIndex) => (
                        <div key={exIndex} className="flex items-start space-x-3">
                          <div className="flex-shrink-0">
                            {ex.url.includes('_') ? (
                              <span className="inline-block w-2 h-2 bg-red-500 rounded-full mt-2"></span>
                            ) : (
                              <Link 
                                href={ex.url}
                                className="inline-block w-2 h-2 bg-green-500 rounded-full mt-2 hover:bg-green-600"
                              />
                            )}
                          </div>
                          <div className="flex-1">
                            {ex.url.includes('_') ? (
                              <span className="font-mono text-sm text-gray-500 dark:text-gray-400">
                                {ex.url}
                              </span>
                            ) : (
                              <Link 
                                href={ex.url}
                                className="font-mono text-sm text-blue-600 dark:text-blue-400 hover:text-blue-800 dark:hover:text-blue-300"
                              >
                                {ex.url}
                              </Link>
                            )}
                            <p className="text-xs text-gray-500 dark:text-gray-400 mt-1">
                              {ex.description}
                            </p>
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>
                  
                  {/* File Structure */}
                  <div>
                    <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-4">
                      File Structure
                    </h3>
                    <pre className="bg-gray-100 dark:bg-gray-700 rounded-lg p-4 text-sm overflow-x-auto">
                      <code className="text-gray-800 dark:text-gray-200">
                        {example.fileStructure.trim()}
                      </code>
                    </pre>
                  </div>
                </div>
              </div>
            ))}
          </div>
          
          {/* Summary */}
          <div className="mt-12 bg-gradient-to-r from-blue-50 to-indigo-50 dark:from-blue-900/20 dark:to-indigo-900/20 rounded-lg p-8">
            <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-6">
              Next.js 15 Routing Summary
            </h2>
            
            <div className="grid md:grid-cols-2 gap-8">
              <div>
                <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-4">
                  Key Features
                </h3>
                <ul className="space-y-2 text-gray-700 dark:text-gray-300">
                  <li>• <strong>File-based routing:</strong> Folders and files define routes</li>
                  <li>• <strong>Async params:</strong> <code>await params</code> in Next.js 15</li>
                  <li>• <strong>Nested layouts:</strong> Shared UI across route segments</li>
                  <li>• <strong>Route groups:</strong> Organization without URL impact</li>
                  <li>• <strong>Private routes:</strong> Underscore folders are ignored</li>
                </ul>
              </div>
              
              <div>
                <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-4">
                  Best Practices
                </h3>
                <ul className="space-y-2 text-gray-700 dark:text-gray-300">
                  <li>• Use static routes for fixed content</li>
                  <li>• Dynamic routes for data-driven pages</li>
                  <li>• Catch-all for flexible hierarchies</li>
                  <li>• Optional catch-all for unified handling</li>
                  <li>• Route groups for code organization</li>
                  <li>• Private routes for utilities and components</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}