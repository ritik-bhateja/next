import Link from 'next/link';

export const metadata = {
  title: "Dashboard - Next.js 15 Learning",
  description: "Dashboard demonstrating parallel routes in Next.js 15",
};

export default function DashboardLayout({ 
  children,
  analytics,
  notifications, 
  team 
}) {
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
          
          {/* Parallel Routes Info */}
          <div className="p-6 border-t border-gray-200 dark:border-gray-700">
            <div className="bg-purple-50 dark:bg-purple-900/20 rounded-lg p-4">
              <h3 className="text-sm font-semibold text-purple-900 dark:text-purple-100 mb-2">
                🔀 Parallel Routes
              </h3>
              <p className="text-purple-800 dark:text-purple-200 text-xs">
                This layout receives multiple parallel routes as props:
              </p>
              <ul className="text-purple-800 dark:text-purple-200 text-xs mt-2 space-y-1">
                <li>• <code>children</code> - Main content</li>
                <li>• <code>analytics</code> - @analytics slot</li>
                <li>• <code>notifications</code> - @notifications slot</li>
                <li>• <code>team</code> - @team slot</li>
              </ul>
            </div>
          </div>
        </aside>
        
        {/* Main Content Area with Parallel Routes */}
        <main className="flex-1 p-8">
          {/* Main Content */}
          <div className="mb-8">
            {children}
          </div>
          
          {/* Parallel Routes Grid */}
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
            {/* Analytics Panel */}
            <div className="bg-white dark:bg-gray-800 rounded-lg shadow-sm">
              <div className="p-4 border-b border-gray-200 dark:border-gray-700">
                <h3 className="text-lg font-semibold text-gray-900 dark:text-white">
                  📈 Analytics
                </h3>
                <p className="text-sm text-gray-600 dark:text-gray-400">
                  @analytics parallel route
                </p>
              </div>
              <div className="p-4">
                {analytics}
              </div>
            </div>
            
            {/* Notifications Panel */}
            <div className="bg-white dark:bg-gray-800 rounded-lg shadow-sm">
              <div className="p-4 border-b border-gray-200 dark:border-gray-700">
                <h3 className="text-lg font-semibold text-gray-900 dark:text-white">
                  🔔 Notifications
                </h3>
                <p className="text-sm text-gray-600 dark:text-gray-400">
                  @notifications parallel route
                </p>
              </div>
              <div className="p-4">
                {notifications}
              </div>
            </div>
            
            {/* Team Panel */}
            <div className="bg-white dark:bg-gray-800 rounded-lg shadow-sm">
              <div className="p-4 border-b border-gray-200 dark:border-gray-700">
                <h3 className="text-lg font-semibold text-gray-900 dark:text-white">
                  👥 Team
                </h3>
                <p className="text-sm text-gray-600 dark:text-gray-400">
                  @team parallel route
                </p>
              </div>
              <div className="p-4">
                {team}
              </div>
            </div>
          </div>
        </main>
      </div>
    </div>
  );
}