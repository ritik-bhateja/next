import Modal from '../../../_components/Modal';
import { notFound } from 'next/navigation';

// Sample photo data (same as the full page)
const photos = {
  1: {
    title: 'Mountain Landscape',
    description: 'Beautiful mountain view with snow-capped peaks',
    thumbnail: '🏔️',
    category: 'Nature'
  },
  2: {
    title: 'Ocean Sunset',
    description: 'Stunning sunset over the ocean waves',
    thumbnail: '🌅',
    category: 'Nature'
  },
  3: {
    title: 'City Skyline',
    description: 'Modern city skyline at night with lights',
    thumbnail: '🏙️',
    category: 'Urban'
  },
  4: {
    title: 'Forest Path',
    description: 'Peaceful walking path through dense forest',
    thumbnail: '🌲',
    category: 'Nature'
  },
  5: {
    title: 'Desert Dunes',
    description: 'Golden sand dunes in the desert',
    thumbnail: '🏜️',
    category: 'Nature'
  },
  6: {
    title: 'Space View',
    description: 'Earth view from space with stars',
    thumbnail: '🌍',
    category: 'Space'
  },
  7: {
    title: 'Tropical Beach',
    description: 'Crystal clear water and white sand beach',
    thumbnail: '🏖️',
    category: 'Nature'
  },
  8: {
    title: 'Northern Lights',
    description: 'Aurora borealis dancing in the night sky',
    thumbnail: '🌌',
    category: 'Nature'
  }
};

export default async function PhotoModal({ params }) {
  const { id } = await params;
  const photo = photos[id];
  
  if (!photo) {
    notFound();
  }
  
  return (
    <Modal>
      <div className="bg-white dark:bg-gray-800 rounded-lg max-w-2xl w-full mx-4 max-h-[90vh] overflow-y-auto">
        {/* Modal Header */}
        <div className="flex items-center justify-between p-6 border-b border-gray-200 dark:border-gray-700">
          <h2 className="text-xl font-semibold text-gray-900 dark:text-white">
            {photo.title}
          </h2>
          <span className="inline-block px-2 py-1 bg-blue-100 dark:bg-blue-900 text-blue-800 dark:text-blue-200 text-xs rounded-full">
            {photo.category}
          </span>
        </div>
        
        {/* Photo Display */}
        <div className="p-6">
          <div className="bg-gradient-to-br from-blue-100 to-purple-100 dark:from-blue-900 dark:to-purple-900 rounded-lg p-12 text-center mb-6">
            <div className="text-8xl mb-4">
              {photo.thumbnail}
            </div>
            <div className="text-sm text-gray-600 dark:text-gray-400">
              Modal view of photo {id}
            </div>
          </div>
          
          <p className="text-gray-600 dark:text-gray-300 mb-6">
            {photo.description}
          </p>
          
          <div className="flex justify-between items-center">
            <a
              href={`/gallery/${id}`}
              className="text-blue-600 dark:text-blue-400 hover:text-blue-800 dark:hover:text-blue-300 text-sm"
            >
              View Full Details →
            </a>
            <div className="text-xs text-gray-500 dark:text-gray-400">
              Photo ID: {id}
            </div>
          </div>
        </div>
        
        {/* Intercepting Route Info */}
        <div className="p-6 bg-yellow-50 dark:bg-yellow-900/20 border-t border-gray-200 dark:border-gray-700">
          <h3 className="text-sm font-semibold text-yellow-900 dark:text-yellow-100 mb-2">
            🔀 Intercepting Route Modal
          </h3>
          <p className="text-yellow-800 dark:text-yellow-200 text-xs">
            This modal is rendered by the intercepting route:{' '}
            <code className="bg-yellow-100 dark:bg-yellow-800 px-1 rounded">
              @modal/(.)gallery/[id]/page.js
            </code>
          </p>
          <p className="text-yellow-800 dark:text-yellow-200 text-xs mt-1">
            URL: <code className="bg-yellow-100 dark:bg-yellow-800 px-1 rounded">/gallery/{id}</code> 
            (same as full page, but intercepted!)
          </p>
        </div>
      </div>
    </Modal>
  );
}