// This is a parallel route slot (@notifications)
// It renders simultaneously with the main dashboard page

export default async function NotificationsPanel() {
  // Simulate data fetching with different timing
  await new Promise(resolve => setTimeout(resolve, 1500));
  
  const notifications = [
    {
      id: 1,
      type: 'success',
      title: 'Deployment Successful',
      message: 'Your Next.js app has been deployed to production',
      time: '2 minutes ago',
      icon: '✅'
    },
    {
      id: 2,
      type: 'info',
      title: 'New User Registered',
      message: 'John Doe just signed up for your service',
      time: '15 minutes ago',
      icon: '👤'
    },
    {
      id: 3,
      type: 'warning',
      title: 'High Memory Usage',
      message: 'Server memory usage is at 85%',
      time: '1 hour ago',
      icon: '⚠️'
    },
    {
      id: 4,
      type: 'info',
      title: 'Database Backup Complete',
      message: 'Daily backup completed successfully',
      time: '3 hours ago',
      icon: '💾'
    }
  ];
  
  return (
    <div className="space-y-3">
      {notifications.map((notification) => (
        <div 
          key={notification.id}
          className="flex items-start space-x-3 p-3 bg-gray-50 dark:bg-gray-700 rounded-lg"
        >
          <span className="text-lg">{notification.icon}</span>
          <div className="flex-1 min-w-0">
            <p className="text-sm font-medium text-gray-900 dark:text-white">
              {notification.title}
            </p>
            <p className="text-xs text-gray-600 dark:text-gray-400 mt-1">
              {notification.message}
            </p>
            <p className="text-xs text-gray-500 dark:text-gray-500 mt-1">
              {notification.time}
            </p>
          </div>
        </div>
      ))}
      
      <div className="text-center pt-2">
        <button className="text-xs text-blue-600 dark:text-blue-400 hover:text-blue-800 dark:hover:text-blue-300">
          View All Notifications
        </button>
      </div>
    </div>
  );
}