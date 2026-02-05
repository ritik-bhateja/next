export const metadata = {
  title: "Analytics - Dashboard - Next.js 15 Learning",
};

export default function Analytics() {
  return (
    <div>
      <h1 className="text-3xl font-bold text-gray-900 dark:text-white mb-8">
        Analytics
      </h1>
      
      {/* Chart Placeholder */}
      <div className="bg-white dark:bg-gray-800 rounded-lg p-6 shadow-sm mb-8">
        <h2 className="text-xl font-semibold text-gray-900 dark:text-white mb-4">
          Learning Progress Over Time
        </h2>
        
        <div className="h-64 bg-gradient-to-r from-blue-100 to-purple-100 dark:from-blue-900 dark:to-purple-900 rounded-lg flex items-center justify-center">
          <div className="text-center">
            <span className="text-6xl mb-4 block">📊</span>
            <p className="text-gray-600 dark:text-gray-400">
              Chart visualization would go here
            </p>
          </div>
        </div>
      </div>
      
      {/* Metrics */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        <div className="bg-white dark:bg-gray-800 rounded-lg p-6 shadow-sm">
          <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-2">
            Completion Rate
          </h3>
          <div className="flex items-center">
            <div className="flex-1 bg-gray-200 dark:bg-gray-700 rounded-full h-2 mr-4">
              <div className="bg-green-500 h-2 rounded-full" style={{ width: '75%' }}></div>
            </div>
            <span className="text-sm font-medium text-gray-900 dark:text-white">75%</span>
          </div>
        </div>
        
        <div className="bg-white dark:bg-gray-800 rounded-lg p-6 shadow-sm">
          <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-2">
            Time Spent Learning
          </h3>
          <p className="text-2xl font-bold text-blue-600 dark:text-blue-400">
            24 hours
          </p>
        </div>
        
        <div className="bg-white dark:bg-gray-800 rounded-lg p-6 shadow-sm">
          <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-2">
            Concepts Mastered
          </h3>
          <p className="text-2xl font-bold text-purple-600 dark:text-purple-400">
            15 / 20
          </p>
        </div>
      </div>
      
      {/* Nested Route Info */}
      <div className="mt-8 bg-indigo-50 dark:bg-indigo-900/20 rounded-lg p-6">
        <h3 className="text-lg font-semibold text-indigo-900 dark:text-indigo-100 mb-2">
          📍 Nested Route Example
        </h3>
        <p className="text-indigo-800 dark:text-indigo-200 text-sm">
          This page is at <code className="bg-indigo-100 dark:bg-indigo-800 px-2 py-1 rounded">
          /dashboard/analytics</code> and uses the dashboard layout. The file structure is:{' '}
          <code className="bg-indigo-100 dark:bg-indigo-800 px-2 py-1 rounded">
          src/app/dashboard/analytics/page.js</code>
        </p>
      </div>
    </div>
  );
}