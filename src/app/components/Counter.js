'use client';

import { useState } from 'react';

// This is a Client Component because of the 'use client' directive
export default function Counter() {
  const [count, setCount] = useState(0);

  return (
    <div className="bg-white dark:bg-gray-800 rounded-lg p-6 shadow-md">
      <h2 className="text-xl font-semibold text-gray-900 dark:text-white mb-4">
        🎮 Interactive Counter (Client Component)
      </h2>
      <div className="text-center">
        <div className="text-3xl font-bold text-blue-600 dark:text-blue-400 mb-4">
          {count}
        </div>
        <div className="flex gap-2 justify-center">
          <button
            onClick={() => setCount(count - 1)}
            className="px-4 py-2 bg-red-500 hover:bg-red-600 text-white rounded-lg transition-colors"
          >
            -1
          </button>
          <button
            onClick={() => setCount(0)}
            className="px-4 py-2 bg-gray-500 hover:bg-gray-600 text-white rounded-lg transition-colors"
          >
            Reset
          </button>
          <button
            onClick={() => setCount(count + 1)}
            className="px-4 py-2 bg-green-500 hover:bg-green-600 text-white rounded-lg transition-colors"
          >
            +1
          </button>
        </div>
      </div>
      <p className="text-sm text-gray-600 dark:text-gray-300 mt-4">
        This component uses useState and onClick handlers, so it must be a Client Component.
      </p>
    </div>
  );
}