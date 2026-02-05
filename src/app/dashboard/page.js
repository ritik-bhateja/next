export const metadata = {
  title: "Dashboard Overview - Next.js 15 Learning",
};

export default function Dashboard() {
  return (
    <div>
      <h1 className="text-3xl font-bold text-gray-900 dark:text-white mb-8">
        Dashboard Overview
      </h1>
      
      {/* Stats Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
        <div className="bg-white dark:bg-gray-800 rounded-lg p-6 shadow-sm">
          <div className="flex items-center">
            <div className="p-2 bg-blue-100 dark:bg-blue-900 rounded-lg">
              <span className="text-2xl">📚</span>
            </div>
            <div className="ml-4">
              <p className="text-sm font-medium text-gray-600 dark:text-gray-400">
                Specs Created
              </p>
              <p className="text-2xl font-semibold text-gray-900 dark:text-white">
                6
              </p>
            </div>
          </div>
        </div>
        
        <div className="bg-white dark:bg-gray-800 rounded-lg p-6 shadow-sm">
          <div className="flex items-center">
            <div className="p-2 bg-green-100 dark:bg-green-900 rounded-lg">
              <span className="text-2xl">🚀</span>
            </div>
            <div className="ml-4">
              <p className="text-sm font-medium text-gray-600 dark:text-gray-400">
                Components Built
              </p>
              <p className="text-2xl font-semibold text-gray-900 dark:text-white">
                12
              </p>
            </div>
          </div>
        </div>
        
        <div className="bg-white dark:bg-gray-800 rounded-lg p-6 shadow-sm">
          <div className="flex items-center">
            <div className="p-2 bg-yellow-100 dark:bg-yellow-900 rounded-lg">
              <span className="text-2xl">🎯</span>
            </div>
            <div className="ml-4">
              <p className="text-sm font-medium text-gray-600 dark:text-gray-400">
                Routes Created
              </p>
              <p className="text-2xl font-semibold text-gray-900 dark:text-white">
                8
              </p>
            </div>
          </div>
        </div>
        
        <div className="bg-white dark:bg-gray-800 rounded-lg p-6 shadow-sm">
          <div className="flex items-center">
            <div className="p-2 bg-purple-100 dark:bg-purple-900 rounded-lg">
              <span className="text-2xl">⚡</span>
            </div>
            <div className="ml-4">
              <p className="text-sm font-medium text-gray-600 dark:text-gray-400">
                Features Learned
              </p>
              <p className="text-2xl font-semibold text-gray-900 dark:text-white">
                15
              </p>
            </div>
          </div>
        </div>
      </div>
      
      {/* Recent Activity */}
      <div className="bg-white dark:bg-gray-800 rounded-lg p-6 shadow-sm">
        <h2 className="text-xl font-semibold text-gray-900 dark:text-white mb-4">
          Recent Learning Activity
        </h2>
        
        <div className="space-y-4">
          <div className="flex items-center p-3 bg-gray-50 dark:bg-gray-700 rounded-lg">
            <span className="text-2xl mr-3">🔗</span>
            <div>
              <p className="font-medium text-gray-900 dark:text-white">
                Implemented App Router Routing
              </p>
              <p className="text-sm text-gray-600 dark:text-gray-400">
                Created static routes, dynamic routes, and nested layouts
              </p>
            </div>
          </div>
          
          <div className="flex items-center p-3 bg-gray-50 dark:bg-gray-700 rounded-lg">
            <span className="text-2xl mr-3">🖥️</span>
            <div>
              <p className="font-medium text-gray-900 dark:text-white">
                Mastered Server Components
              </p>
              <p className="text-sm text-gray-600 dark:text-gray-400">
                Built async server components with data fetching
              </p>
            </div>
          </div>
          
          <div className="flex items-center p-3 bg-gray-50 dark:bg-gray-700 rounded-lg">
            <span className="text-2xl mr-3">🎮</span>
            <div>
              <p className="font-medium text-gray-900 dark:text-white">
                Created Client Components
              </p>
              <p className="text-sm text-gray-600 dark:text-gray-400">
                Built interactive components with hooks and event handlers
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}