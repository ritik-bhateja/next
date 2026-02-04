import Image from "next/image";
import Counter from "./components/Counter";

// This is a Server Component (default in App Router)
// It runs on the server and can access server-side resources
export default async function Home() {
  // Server Components can be async and fetch data directly
  const currentTime = new Date().toLocaleString();
  
  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-indigo-100 dark:from-gray-900 dark:to-gray-800">
      <main className="container mx-auto px-4 py-16">
        {/* Header Section */}
        <div className="text-center mb-12">
          <Image
            className="mx-auto mb-8 dark:invert"
            src="/next.svg"
            alt="Next.js logo"
            width={180}
            height={36}
            priority
          />
          <h1 className="text-4xl font-bold text-gray-900 dark:text-white mb-4">
            Next.js 15 Learning Journey
          </h1>
          <p className="text-xl text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
            Welcome to our comprehensive Next.js 15 learning project. This is a Server Component 
            rendered at: <span className="font-mono text-blue-600 dark:text-blue-400">{currentTime}</span>
          </p>
        </div>

        {/* Learning Sections */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
          <div className="bg-white dark:bg-gray-800 rounded-lg p-6 shadow-md">
            <h2 className="text-xl font-semibold text-gray-900 dark:text-white mb-3">
              🚀 Server Components
            </h2>
            <p className="text-gray-600 dark:text-gray-300">
              This page is a Server Component that runs on the server and can fetch data directly.
            </p>
          </div>

          <div className="bg-white dark:bg-gray-800 rounded-lg p-6 shadow-md">
            <h2 className="text-xl font-semibold text-gray-900 dark:text-white mb-3">
              🎯 App Router
            </h2>
            <p className="text-gray-600 dark:text-gray-300">
              Using the new App Router with file-based routing in the src/app directory.
            </p>
          </div>

          <div className="bg-white dark:bg-gray-800 rounded-lg p-6 shadow-md">
            <h2 className="text-xl font-semibold text-gray-900 dark:text-white mb-3">
              ⚡ React Compiler
            </h2>
            <p className="text-gray-600 dark:text-gray-300">
              Automatic optimizations with React Compiler enabled for better performance.
            </p>
          </div>
        </div>

        {/* Interactive Component Demo */}
        <div className="mb-12">
          <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-6 text-center">
            Server vs Client Components Demo
          </h2>
          <div className="grid md:grid-cols-2 gap-6">
            <div className="bg-white dark:bg-gray-800 rounded-lg p-6 shadow-md">
              <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-3">
                🖥️ Server Component Info
              </h3>
              <p className="text-gray-600 dark:text-gray-300 mb-2">
                This content is rendered on the server at build time or request time.
              </p>
              <p className="text-sm font-mono text-blue-600 dark:text-blue-400">
                Rendered: {currentTime}
              </p>
              <p className="text-xs text-gray-500 dark:text-gray-400 mt-2">
                Refresh the page to see the timestamp update
              </p>
            </div>
            
            {/* Client Component embedded in Server Component */}
            <Counter />
          </div>
        </div>

        {/* Action Buttons */}
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <a
            className="inline-flex items-center justify-center px-6 py-3 bg-blue-600 hover:bg-blue-700 text-white font-medium rounded-lg transition-colors"
            href="https://nextjs.org/docs"
            target="_blank"
            rel="noopener noreferrer"
          >
            📚 Next.js Documentation
          </a>
          <a
            className="inline-flex items-center justify-center px-6 py-3 bg-gray-100 hover:bg-gray-200 dark:bg-gray-700 dark:hover:bg-gray-600 text-gray-900 dark:text-white font-medium rounded-lg transition-colors"
            href="https://react.dev"
            target="_blank"
            rel="noopener noreferrer"
          >
            ⚛️ React 18 Docs
          </a>
        </div>
      </main>
    </div>
  );
}