'use client';

// Error boundary for the notifications parallel route
export default function NotificationsError({ error, reset }) {
  return (
    <div className="text-center py-8">
      <div className="text-4xl mb-4">🔔💥</div>
      <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-2">
        Notifications Error
      </h3>
      <p className="text-sm text-gray-600 dark:text-gray-400 mb-4">
        Failed to load notifications
      </p>
      <button
        onClick={reset}
        className="px-4 py-2 bg-blue-600 hover:bg-blue-700 text-white text-sm rounded-lg transition-colors"
      >
        Try Again
      </button>
      <div className="mt-4 text-xs text-gray-500 dark:text-gray-400">
        Error: {error.message}
      </div>
    </div>
  );
}