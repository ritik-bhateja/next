import Link from 'next/link';

export const metadata = {
  title: "Dashboard - Next.js 15 Learning",
  description: "Dashboard demonstrating nested layouts in Next.js 15",
};

export default function DashboardLayout({ children }) {
  return (
    <div className="min-h-screen bg-gray-50 dark:bg-gray-900">
      <div className="flex">
        {/* Sidebar */}
        <aside className="w-64 bg-white dark:bg-gray-800 shadow-sm border-r border-gray-200 dark:border-gray-700 min-h-screen">
          <div className="p-6">
            <h2 className="text-xl font-semibold text-gray-900 dark:text-white mb-6">
              Dashboard
            </h2>
            
            <nav className="space-y-2">
              <Link 
                href="/dashboard"
                className="block px-3 py-2 text-gray-700 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-700 rounded-md transition-colors"
              >
                📊 Overview
              </Link>
              <Link 
                href="/dashboard/analytics"
                className="block px-3 py-2 text-gray-700 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-700 rounded-md transition-colors"
              >
                📈 Analytics
              </Link>
              <Link 
                href="/dashboard/settings"
                className="block px-3 py-2 text-gray-700 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-700 rounded-md transition-colors"
              >
                ⚙️ Settings
              </Link>
              <Link 
                href="/dashboard/profile"
                className="block px-3 py-2 text-gray-700 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-700 rounded-md transition-colors"
              >
                👤 Profile
              </Link>
            </nav>
          </div>
          
          {/* Layout Info */}
          <div className="p-6 border-t border-gray-200 dark:border-gray-700">
            <div className="bg-blue-50 dark:bg-blue-900/20 rounded-lg p-4">
              <h3 className="text-sm font-semibold text-blue-900 dark:text-blue-100 mb-2">
                🏗️ Nested Layout
              </h3>
              <p className="text-blue-800 dark:text-blue-200 text-xs">
                This sidebar is defined in{' '}
                <code className="bg-blue-100 dark:bg-blue-800 px-1 rounded">
                  dashboard/layout.js
                </code>{' '}
                and wraps all dashboard pages.
              </p>
            </div>
          </div>
        </aside>
        
        {/* Main Content */}
        <main className="flex-1 p-8">
          {children}
        </main>
      </div>
    </div>
  );
}