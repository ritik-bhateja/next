import Link from 'next/link';

export const metadata = {
  title: "Advanced Routing Demo - Next.js 15 Learning",
  description: "Demonstration of parallel routes and intercepting routes in Next.js 15",
};

export default function AdvancedRoutingDemo() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-violet-50 to-purple-100 dark:from-gray-900 dark:to-gray-800">
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
              Advanced Routing Patterns
            </h1>
            <p className="text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
              Explore Next.js 15's most sophisticated routing patterns: parallel routes for simultaneous rendering 
              and intercepting routes for modal experiences.
            </p>
          </div>
          
          {/* Parallel Routes Section */}
          <div className="mb-16">
            <div className="bg-white dark:bg-gray-800 rounded-lg p-8 shadow-md">
              <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-6">
                🔀 Parallel Routes
              </h2>
              
              <div className="grid md:grid-cols-2 gap-8 mb-8">
                <div>
                  <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-4">
                    What are Parallel Routes?
                  </h3>
                  <p className="text-gray-600 dark:text-gray-300 mb-4">
                    Parallel routes allow you to simultaneously render multiple pages in the same layout. 
                    Each parallel route is defined with the <code className="bg-gray-100 dark:bg-gray-700 px-2 py-1 rounded">@</code> prefix.
                  </p>
                  <ul className="text-gray-600 dark:text-gray-300 space-y-2 text-sm">
                    <li>• <strong>Independent Loading:</strong> Each section loads independently</li>
                    <li>• <strong>Error Isolation:</strong> Errors in one section don't affect others</li>
                    <li>• <strong>Better UX:</strong> Users see content as it becomes available</li>
                    <li>• <strong>Complex Layouts:</strong> Perfect for dashboards and admin panels</li>
                  </ul>
                </div>
                
                <div>
                  <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-4">
                    File Structure Example
                  </h3>
                  <pre className="bg-gray-100 dark:bg-gray-700 rounded-lg p-4 text-sm overflow-x-auto">
                    <code className="text-gray-800 dark:text-gray-200">
{`src/app/dashboard/
├── layout.js              # Receives parallel routes
├── page.js                # Main content
├── @analytics/            # Parallel route slot
│   ├── page.js           # Analytics panel
│   ├── loading.js        # Loading state
│   └── error.js          # Error boundary
├── @notifications/        # Parallel route slot
│   └── page.js           # Notifications panel
└── @team/                # Parallel route slot
    └── page.js           # Team panel`}
                    </code>
                  </pre>
                </div>
              </div>
              
              <div className="text-center">
                <Link 
                  href="/dashboard"
                  className="inline-flex items-center px-6 py-3 bg-blue-600 hover:bg-blue-700 text-white font-medium rounded-lg transition-colors"
                >
                  View Dashboard with Parallel Routes →
                </Link>
              </div>
            </div>
          </div>
          
          {/* Intercepting Routes Section */}
          <div className="mb-16">
            <div className="bg-white dark:bg-gray-800 rounded-lg p-8 shadow-md">
              <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-6">
                🎯 Intercepting Routes
              </h2>
              
              <div className="grid md:grid-cols-2 gap-8 mb-8">
                <div>
                  <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-4">
                    What are Intercepting Routes?
                  </h3>
                  <p className="text-gray-600 dark:text-gray-300 mb-4">
                    Intercepting routes allow you to "intercept" navigation to show content in a modal 
                    or overlay while keeping the URL updated.
                  </p>
                  <ul className="text-gray-600 dark:text-gray-300 space-y-2 text-sm">
                    <li>• <strong>Modal Experience:</strong> Smooth modal interactions with URL updates</li>
                    <li>• <strong>SEO Friendly:</strong> Direct links work for full pages</li>
                    <li>• <strong>Progressive Enhancement:</strong> Works with and without JavaScript</li>
                    <li>• <strong>Natural Navigation:</strong> Back button behavior works naturally</li>
                  </ul>
                </div>
                
                <div>
                  <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-4">
                    Intercepting Patterns
                  </h3>
                  <div className="space-y-3">
                    <div className="flex items-center space-x-3">
                      <code className="bg-gray-100 dark:bg-gray-700 px-2 py-1 rounded text-sm">(.)</code>
                      <span className="text-gray-600 dark:text-gray-300 text-sm">Same level</span>
                    </div>
                    <div className="flex items-center space-x-3">
                      <code className="bg-gray-100 dark:bg-gray-700 px-2 py-1 rounded text-sm">(..)</code>
                      <span className="text-gray-600 dark:text-gray-300 text-sm">One level up</span>
                    </div>
                    <div className="flex items-center space-x-3">
                      <code className="bg-gray-100 dark:bg-gray-700 px-2 py-1 rounded text-sm">(..)(..)</code>
                      <span className="text-gray-600 dark:text-gray-300 text-sm">Two levels up</span>
                    </div>
                    <div className="flex items-center space-x-3">
                      <code className="bg-gray-100 dark:bg-gray-700 px-2 py-1 rounded text-sm">(...)</code>
                      <span className="text-gray-600 dark:text-gray-300 text-sm">Root app directory</span>
                    </div>
                  </div>
                </div>
              </div>
              
              <div className="text-center">
                <Link 
                  href="/gallery"
                  className="inline-flex items-center px-6 py-3 bg-purple-600 hover:bg-purple-700 text-white font-medium rounded-lg transition-colors"
                >
                  View Photo Gallery with Modal Intercepts →
                </Link>
              </div>
            </div>
          </div>
          
          {/* Implementation Examples */}
          <div className="grid md:grid-cols-2 gap-8 mb-16">
            <div className="bg-white dark:bg-gray-800 rounded-lg p-6 shadow-md">
              <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-4">
                📊 Dashboard Example
              </h3>
              <p className="text-gray-600 dark:text-gray-300 mb-4 text-sm">
                Our dashboard demonstrates parallel routes with three independent panels:
              </p>
              <ul className="text-gray-600 dark:text-gray-300 space-y-2 text-sm mb-4">
                <li>• <strong>Analytics:</strong> Charts and metrics with loading states</li>
                <li>• <strong>Notifications:</strong> Recent activity feed</li>
                <li>• <strong>Team:</strong> Team member status and info</li>
              </ul>
              <p className="text-xs text-gray-500 dark:text-gray-400">
                Each panel loads independently and has its own error boundaries.
              </p>
            </div>
            
            <div className="bg-white dark:bg-gray-800 rounded-lg p-6 shadow-md">
              <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-4">
                🖼️ Gallery Example
              </h3>
              <p className="text-gray-600 dark:text-gray-300 mb-4 text-sm">
                Our photo gallery demonstrates intercepting routes for modal experiences:
              </p>
              <ul className="text-gray-600 dark:text-gray-300 space-y-2 text-sm mb-4">
                <li>• <strong>Click photo:</strong> Opens in modal, URL updates</li>
                <li>• <strong>Direct navigation:</strong> Shows full page view</li>
                <li>• <strong>Back button:</strong> Closes modal naturally</li>
                <li>• <strong>Escape key:</strong> Also closes modal</li>
              </ul>
              <p className="text-xs text-gray-500 dark:text-gray-400">
                Same URL, different experience based on navigation context.
              </p>
            </div>
          </div>
          
          {/* Next.js 15 Features */}
          <div className="bg-gradient-to-r from-blue-50 to-indigo-50 dark:from-blue-900/20 dark:to-indigo-900/20 rounded-lg p-8">
            <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-6">
              Next.js 15 Specific Features
            </h2>
            
            <div className="grid md:grid-cols-3 gap-6">
              <div>
                <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-3">
                  Async Params
                </h3>
                <p className="text-gray-600 dark:text-gray-300 text-sm mb-2">
                  Both patterns work with Next.js 15's async params:
                </p>
                <pre className="bg-white dark:bg-gray-800 rounded p-2 text-xs overflow-x-auto">
                  <code>
{`export default async function Page({ params }) {
  const { id } = await params;
  // Handle route
}`}
                  </code>
                </pre>
              </div>
              
              <div>
                <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-3">
                  Error Boundaries
                </h3>
                <p className="text-gray-600 dark:text-gray-300 text-sm mb-2">
                  Each parallel route can have independent error handling:
                </p>
                <pre className="bg-white dark:bg-gray-800 rounded p-2 text-xs overflow-x-auto">
                  <code>
{`// @analytics/error.js
export default function AnalyticsError({ error, reset }) {
  return <div>Error in analytics</div>;
}`}
                  </code>
                </pre>
              </div>
              
              <div>
                <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-3">
                  Loading States
                </h3>
                <p className="text-gray-600 dark:text-gray-300 text-sm mb-2">
                  Independent loading states for each parallel route:
                </p>
                <pre className="bg-white dark:bg-gray-800 rounded p-2 text-xs overflow-x-auto">
                  <code>
{`// @notifications/loading.js
export default function NotificationsLoading() {
  return <div>Loading notifications...</div>;
}`}
                  </code>
                </pre>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}