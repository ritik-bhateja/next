// This is a parallel route slot (@analytics)
// It renders simultaneously with the main dashboard page

export default async function AnalyticsPanel() {
  // Simulate data fetching
  await new Promise(resolve => setTimeout(resolve, 1000));
  
  const analyticsData = {
    pageViews: 12543,
    uniqueVisitors: 8921,
    bounceRate: 23.4,
    avgSessionDuration: '3m 42s'
  };
  
  return (
    <div className="space-y-4">
      <div className="grid grid-cols-2 gap-4">
        <div className="text-center">
          <div className="text-2xl font-bold text-blue-600 dark:text-blue-400">
            {analyticsData.pageViews.toLocaleString()}
          </div>
          <div className="text-xs text-gray-600 dark:text-gray-400">
            Page Views
          </div>
        </div>
        
        <div className="text-center">
          <div className="text-2xl font-bold text-green-600 dark:text-green-400">
            {analyticsData.uniqueVisitors.toLocaleString()}
          </div>
          <div className="text-xs text-gray-600 dark:text-gray-400">
            Unique Visitors
          </div>
        </div>
        
        <div className="text-center">
          <div className="text-2xl font-bold text-orange-600 dark:text-orange-400">
            {analyticsData.bounceRate}%
          </div>
          <div className="text-xs text-gray-600 dark:text-gray-400">
            Bounce Rate
          </div>
        </div>
        
        <div className="text-center">
          <div className="text-2xl font-bold text-purple-600 dark:text-purple-400">
            {analyticsData.avgSessionDuration}
          </div>
          <div className="text-xs text-gray-600 dark:text-gray-400">
            Avg Session
          </div>
        </div>
      </div>
      
      {/* Chart Placeholder */}
      <div className="h-32 bg-gradient-to-r from-blue-100 to-purple-100 dark:from-blue-900/20 dark:to-purple-900/20 rounded-lg flex items-center justify-center">
        <div className="text-center">
          <span className="text-3xl mb-2 block">📊</span>
          <p className="text-xs text-gray-600 dark:text-gray-400">
            Analytics Chart
          </p>
        </div>
      </div>
      
      <div className="text-xs text-gray-500 dark:text-gray-400 text-center">
        Data updates every 5 minutes
      </div>
    </div>
  );
}