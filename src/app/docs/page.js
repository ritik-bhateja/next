import Link from 'next/link';

export const metadata = {
  title: "Documentation - Next.js 15 Learning",
  description: "Complete documentation for Next.js 15 features and concepts",
};

const docsSections = [
  {
    title: 'Getting Started',
    description: 'Learn the basics of Next.js 15',
    links: [
      { href: '/docs/getting-started', label: 'Getting Started Guide' }
    ]
  },
  {
    title: 'API Reference',
    description: 'Complete API documentation',
    links: [
      { href: '/docs/api', label: 'API Overview' },
      { href: '/docs/api/routing', label: 'Routing API' },
      { href: '/docs/api/components', label: 'Components API' },
      { href: '/docs/api/data-fetching', label: 'Data Fetching API' }
    ]
  },
  {
    title: 'Guides',
    description: 'Step-by-step tutorials',
    links: [
      { href: '/docs/guides', label: 'All Guides' },
      { href: '/docs/guides/deployment', label: 'Deployment Guide' },
      { href: '/docs/guides/deployment/vercel', label: 'Deploy to Vercel' },
      { href: '/docs/guides/deployment/netlify', label: 'Deploy to Netlify' }
    ]
  }
];

export default function DocsHome() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 to-gray-100 dark:from-gray-900 dark:to-gray-800">
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
              Next.js 15 Documentation
            </h1>
            <p className="text-xl text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
              Comprehensive documentation for learning Next.js 15 with practical examples and detailed explanations.
            </p>
          </div>
          
          {/* Documentation Sections */}
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
            {docsSections.map((section, index) => (
              <div key={index} className="bg-white dark:bg-gray-800 rounded-lg p-6 shadow-md">
                <h2 className="text-xl font-semibold text-gray-900 dark:text-white mb-3">
                  {section.title}
                </h2>
                <p className="text-gray-600 dark:text-gray-300 mb-4">
                  {section.description}
                </p>
                <ul className="space-y-2">
                  {section.links.map((link, linkIndex) => (
                    <li key={linkIndex}>
                      <Link 
                        href={link.href}
                        className="text-blue-600 dark:text-blue-400 hover:text-blue-800 dark:hover:text-blue-300 transition-colors text-sm"
                      >
                        {link.label} →
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
          
          {/* Quick Navigation */}
          <div className="bg-white dark:bg-gray-800 rounded-lg p-8 shadow-md mb-8">
            <h2 className="text-2xl font-semibold text-gray-900 dark:text-white mb-6">
              Quick Navigation
            </h2>
            
            <div className="grid md:grid-cols-2 gap-6">
              <div>
                <h3 className="text-lg font-medium text-gray-900 dark:text-white mb-3">
                  Popular Pages
                </h3>
                <ul className="space-y-2 text-sm">
                  <li><Link href="/docs/getting-started" className="text-blue-600 dark:text-blue-400 hover:underline">Getting Started</Link></li>
                  <li><Link href="/docs/api/routing" className="text-blue-600 dark:text-blue-400 hover:underline">Routing API</Link></li>
                  <li><Link href="/docs/api/components" className="text-blue-600 dark:text-blue-400 hover:underline">Components API</Link></li>
                  <li><Link href="/docs/guides/deployment/vercel" className="text-blue-600 dark:text-blue-400 hover:underline">Deploy to Vercel</Link></li>
                </ul>
              </div>
              
              <div>
                <h3 className="text-lg font-medium text-gray-900 dark:text-white mb-3">
                  Deep Links
                </h3>
                <ul className="space-y-2 text-sm">
                  <li><Link href="/docs/api/data-fetching" className="text-blue-600 dark:text-blue-400 hover:underline">Data Fetching</Link></li>
                  <li><Link href="/docs/guides/deployment" className="text-blue-600 dark:text-blue-400 hover:underline">Deployment Options</Link></li>
                  <li><Link href="/docs/guides/deployment/netlify" className="text-blue-600 dark:text-blue-400 hover:underline">Netlify Deployment</Link></li>
                </ul>
              </div>
            </div>
          </div>
          
          {/* Catch-All Route Explanation */}
          <div className="bg-purple-50 dark:bg-purple-900/20 rounded-lg p-6">
            <h3 className="text-lg font-semibold text-purple-900 dark:text-purple-100 mb-2">
              🔗 Catch-All Routes Demo
            </h3>
            <p className="text-purple-800 dark:text-purple-200 text-sm mb-3">
              All documentation pages use catch-all routes with the pattern <code className="bg-purple-100 dark:bg-purple-800 px-2 py-1 rounded">[...slug]</code>:
            </p>
            <ul className="text-purple-800 dark:text-purple-200 text-sm space-y-1">
              <li>• <code>/docs/getting-started</code> → <code>slug = ['getting-started']</code></li>
              <li>• <code>/docs/api/routing</code> → <code>slug = ['api', 'routing']</code></li>
              <li>• <code>/docs/guides/deployment/vercel</code> → <code>slug = ['guides', 'deployment', 'vercel']</code></li>
            </ul>
            <p className="text-purple-800 dark:text-purple-200 text-sm mt-3">
              The slug array is used to generate breadcrumbs and find the correct content.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}