// Loading state for the analytics parallel route
export default function AnalyticsLoading() {
  return (
    <div className="space-y-4 animate-pulse">
      <div className="grid grid-cols-2 gap-4">
        {[...Array(4)].map((_, i) => (
          <div key={i} className="text-center">
            <div className="h-8 bg-gray-200 dark:bg-gray-700 rounded mb-2"></div>
            <div className="h-3 bg-gray-200 dark:bg-gray-700 rounded w-16 mx-auto"></div>
          </div>
        ))}
      </div>
      
      <div className="h-32 bg-gray-200 dark:bg-gray-700 rounded-lg"></div>
      
      <div className="h-3 bg-gray-200 dark:bg-gray-700 rounded w-32 mx-auto"></div>
    </div>
  );
}