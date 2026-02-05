'use client';

import { useRouter } from 'next/navigation';
import { useEffect } from 'react';

export default function Modal({ children }) {
  const router = useRouter();
  
  // Handle escape key to close modal
  useEffect(() => {
    const handleEscape = (e) => {
      if (e.key === 'Escape') {
        router.back();
      }
    };
    
    document.addEventListener('keydown', handleEscape);
    return () => document.removeEventListener('keydown', handleEscape);
  }, [router]);
  
  // Handle backdrop click to close modal
  const handleBackdropClick = (e) => {
    if (e.target === e.currentTarget) {
      router.back();
    }
  };
  
  return (
    <div 
      className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50 p-4"
      onClick={handleBackdropClick}
    >
      <div className="relative">
        {/* Close button */}
        <button
          onClick={() => router.back()}
          className="absolute -top-4 -right-4 z-10 bg-white dark:bg-gray-800 rounded-full p-2 shadow-lg hover:bg-gray-100 dark:hover:bg-gray-700 transition-colors"
          aria-label="Close modal"
        >
          <svg 
            className="w-6 h-6 text-gray-600 dark:text-gray-400" 
            fill="none" 
            stroke="currentColor" 
            viewBox="0 0 24 24"
          >
            <path 
              strokeLinecap="round" 
              strokeLinejoin="round" 
              strokeWidth={2} 
              d="M6 18L18 6M6 6l12 12" 
            />
          </svg>
        </button>
        
        {children}
      </div>
    </div>
  );
}