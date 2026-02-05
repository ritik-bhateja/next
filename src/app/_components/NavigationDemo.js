'use client';

import { useRouter, usePathname } from 'next/navigation';
import { useState } from 'react';
import { NAVIGATION_ITEMS } from '../_utils/constants';

export default function NavigationDemo() {
  const router = useRouter();
  const pathname = usePathname();
  const [isNavigating, setIsNavigating] = useState(false);

  const handleNavigation = async (path) => {
    setIsNavigating(true);
    
    // Simulate some async operation
    await new Promise(resolve => setTimeout(resolve, 500));
    
    router.push(path);
    setIsNavigating(false);
  };

  return (
    <div className="bg-white dark:bg-gray-800 rounded-lg p-6 shadow-md">
      <h2 className="text-xl font-semibold text-gray-900 dark:text-white mb-4">
        🧭 Programmatic Navigation Demo
      </h2>
      
      <p className="text-gray-600 dark:text-gray-300 mb-4">
        Current path: <code className="bg-gray-100 dark:bg-gray-700 px-2 py-1 rounded">{pathname}</code>
      </p>
      
      <div className="grid grid-cols-2 md:grid-cols-4 gap-2 mb-4">
        {NAVIGATION_ITEMS.map((route) => (
          <button
            key={route.href}
            onClick={() => handleNavigation(route.href)}
            disabled={isNavigating || pathname === route.href}
            className={`px-3 py-2 text-sm rounded-md transition-colors ${
              pathname === route.href
                ? 'bg-blue-100 dark:bg-blue-900 text-blue-800 dark:text-blue-200 cursor-default'
                : 'bg-gray-100 dark:bg-gray-700 text-gray-700 dark:text-gray-300 hover:bg-gray-200 dark:hover:bg-gray-600'
            } ${isNavigating ? 'opacity-50 cursor-not-allowed' : ''}`}
          >
            {isNavigating ? '...' : route.label}
          </button>
        ))}
      </div>
      
      <div className="text-xs text-gray-500 dark:text-gray-400 space-y-1">
        <p>• This component uses <code>useRouter()</code> for programmatic navigation</p>
        <p>• <code>usePathname()</code> shows the current route</p>
        <p>• Both hooks work only in Client Components</p>
        <p>• Navigation items loaded from private <code>_utils/constants.js</code></p>
      </div>
    </div>
  );
}