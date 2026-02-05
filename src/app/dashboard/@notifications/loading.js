// Loading state for the notifications parallel route
export default function NotificationsLoading() {
  return (
    <div className="space-y-3">
      {[...Array(4)].map((_, i) => (
        <div key={i} className="flex items-start space-x-3 p-3 bg-gray-50 dark:bg-gray-700 rounded-lg animate-pulse">
          <div className="w-6 h-6 bg-gray-200 dark:bg-gray-600 rounded"></div>
          <div className="flex-1 space-y-2">
            <div className="h-4 bg-gray-200 dark:bg-gray-600 rounded w-3/4"></div>
            <div className="h-3 bg-gray-200 dark:bg-gray-600 rounded w-full"></div>
            <div className="h-3 bg-gray-200 dark:bg-gray-600 rounded w-1/2"></div>
          </div>
        </div>
      ))}
      
      <div className="text-center pt-2">
        <div className="h-4 bg-gray-200 dark:bg-gray-600 rounded w-32 mx-auto"></div>
      </div>
    </div>
  );
}