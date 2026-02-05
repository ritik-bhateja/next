// Loading state for the team parallel route
export default function TeamLoading() {
  return (
    <div className="space-y-3">
      {[...Array(4)].map((_, i) => (
        <div key={i} className="flex items-center space-x-3 p-3 bg-gray-50 dark:bg-gray-700 rounded-lg animate-pulse">
          <div className="relative">
            <div className="w-8 h-8 bg-gray-200 dark:bg-gray-600 rounded-full"></div>
            <div className="absolute -bottom-1 -right-1 w-3 h-3 bg-gray-200 dark:bg-gray-600 rounded-full"></div>
          </div>
          <div className="flex-1 space-y-2">
            <div className="h-4 bg-gray-200 dark:bg-gray-600 rounded w-3/4"></div>
            <div className="h-3 bg-gray-200 dark:bg-gray-600 rounded w-1/2"></div>
            <div className="h-3 bg-gray-200 dark:bg-gray-600 rounded w-2/3"></div>
          </div>
        </div>
      ))}
      
      <div className="text-center pt-2">
        <div className="h-4 bg-gray-200 dark:bg-gray-600 rounded w-32 mx-auto"></div>
      </div>
      
      <div className="text-center pt-2 border-t border-gray-200 dark:border-gray-600">
        <div className="h-3 bg-gray-200 dark:bg-gray-600 rounded w-24 mx-auto"></div>
      </div>
    </div>
  );
}