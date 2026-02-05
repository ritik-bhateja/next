export const metadata = {
  title: "About - Next.js 15 Learning",
  description: "Learn about our Next.js 15 learning journey",
};

export default function About() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-green-50 to-emerald-100 dark:from-gray-900 dark:to-gray-800">
      <div className="container mx-auto px-4 py-16">
        <div className="max-w-4xl mx-auto">
          <h1 className="text-4xl font-bold text-gray-900 dark:text-white mb-8">
            About Our Next.js 15 Learning Journey
          </h1>
          
          <div className="grid md:grid-cols-2 gap-8 mb-12">
            <div className="bg-white dark:bg-gray-800 rounded-lg p-6 shadow-md">
              <h2 className="text-2xl font-semibold text-gray-900 dark:text-white mb-4">
                🎯 Our Mission
              </h2>
              <p className="text-gray-600 dark:text-gray-300">
                To master Next.js 15 through hands-on learning, exploring every feature 
                from Server Components to advanced routing patterns.
              </p>
            </div>
            
            <div className="bg-white dark:bg-gray-800 rounded-lg p-6 shadow-md">
              <h2 className="text-2xl font-semibold text-gray-900 dark:text-white mb-4">
                🚀 What We're Learning
              </h2>
              <ul className="text-gray-600 dark:text-gray-300 space-y-2">
                <li>• App Router and file-based routing</li>
                <li>• Server vs Client Components</li>
                <li>• Data fetching patterns</li>
                <li>• Server Actions</li>
                <li>• Performance optimization</li>
              </ul>
            </div>
          </div>
          
          <div className="bg-white dark:bg-gray-800 rounded-lg p-8 shadow-md">
            <h2 className="text-2xl font-semibold text-gray-900 dark:text-white mb-4">
              📚 Learning Approach
            </h2>
            <p className="text-gray-600 dark:text-gray-300 mb-4">
              We're using a practical, hands-on approach to learning Next.js 15. Each concept 
              is implemented with real code examples and documented in detailed specifications.
            </p>
            <p className="text-gray-600 dark:text-gray-300">
              This page demonstrates a <strong>static route</strong> in the App Router. 
              The file is located at <code className="bg-gray-100 dark:bg-gray-700 px-2 py-1 rounded">
              src/app/about/page.js</code> and is automatically accessible at <code>/about</code>.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}