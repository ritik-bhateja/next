import Link from 'next/link';

export const metadata = {
  title: "Photo Gallery - Next.js 15 Learning",
  description: "Photo gallery demonstrating intercepting routes and modals",
};

// Sample photo data
const photos = [
  {
    id: 1,
    title: 'Mountain Landscape',
    description: 'Beautiful mountain view with snow-capped peaks',
    thumbnail: '🏔️',
    category: 'Nature'
  },
  {
    id: 2,
    title: 'Ocean Sunset',
    description: 'Stunning sunset over the ocean waves',
    thumbnail: '🌅',
    category: 'Nature'
  },
  {
    id: 3,
    title: 'City Skyline',
    description: 'Modern city skyline at night with lights',
    thumbnail: '🏙️',
    category: 'Urban'
  },
  {
    id: 4,
    title: 'Forest Path',
    description: 'Peaceful walking path through dense forest',
    thumbnail: '🌲',
    category: 'Nature'
  },
  {
    id: 5,
    title: 'Desert Dunes',
    description: 'Golden sand dunes in the desert',
    thumbnail: '🏜️',
    category: 'Nature'
  },
  {
    id: 6,
    title: 'Space View',
    description: 'Earth view from space with stars',
    thumbnail: '🌍',
    category: 'Space'
  },
  {
    id: 7,
    title: 'Tropical Beach',
    description: 'Crystal clear water and white sand beach',
    thumbnail: '🏖️',
    category: 'Nature'
  },
  {
    id: 8,
    title: 'Northern Lights',
    description: 'Aurora borealis dancing in the night sky',
    thumbnail: '🌌',
    category: 'Nature'
  }
];

export default function Gallery() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-indigo-50 to-purple-100 dark:from-gray-900 dark:to-gray-800">
      <div className="container mx-auto px-4 py-16">
        <div className="max-w-6xl mx-auto">
          {/* Back to Home */}
          <Link 
            href="/"
            className="inline-flex items-center text-blue-600 dark:text-blue-400 hover:text-blue-800 dark:hover:text-blue-300 transition-colors mb-8"
          >
            ← Back to Home
          </Link>
          
          {/* Header */}
          <div className="text-center mb-12">
            <h1 className="text-4xl font-bold text-gray-900 dark:text-white mb-4">
              Photo Gallery
            </h1>
            <p className="text-xl text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
              Click on any photo to view it in a modal. The URL will update, but you'll stay on this page. 
              Direct navigation to the photo URL will show the full page view.
            </p>
          </div>
          
          {/* Photo Grid */}
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 mb-12">
            {photos.map((photo) => (
              <Link
                key={photo.id}
                href={`/gallery/${photo.id}`}
                className="group bg-white dark:bg-gray-800 rounded-lg p-6 shadow-md hover:shadow-lg transition-all duration-300 transform hover:scale-105"
              >
                <div className="text-center">
                  <div className="text-6xl mb-4 group-hover:scale-110 transition-transform duration-300">
                    {photo.thumbnail}
                  </div>
                  <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-2">
                    {photo.title}
                  </h3>
                  <p className="text-sm text-gray-600 dark:text-gray-400 mb-2">
                    {photo.description}
                  </p>
                  <span className="inline-block px-2 py-1 bg-blue-100 dark:bg-blue-900 text-blue-800 dark:text-blue-200 text-xs rounded-full">
                    {photo.category}
                  </span>
                </div>
              </Link>
            ))}
          </div>
          
          {/* Intercepting Routes Info */}
          <div className="bg-indigo-50 dark:bg-indigo-900/20 rounded-lg p-6">
            <h3 className="text-lg font-semibold text-indigo-900 dark:text-indigo-100 mb-2">
              🔀 Intercepting Routes Demo
            </h3>
            <p className="text-indigo-800 dark:text-indigo-200 text-sm mb-3">
              This gallery demonstrates intercepting routes for modal experiences:
            </p>
            <ul className="text-indigo-800 dark:text-indigo-200 text-sm space-y-1">
              <li>• Click a photo → Opens in modal, URL updates to <code className="bg-indigo-100 dark:bg-indigo-800 px-2 py-1 rounded">/gallery/[id]</code></li>
              <li>• Direct navigation to <code className="bg-indigo-100 dark:bg-indigo-800 px-2 py-1 rounded">/gallery/[id]</code> → Shows full page</li>
              <li>• Back button from modal → Returns to gallery</li>
              <li>• Intercepting route: <code className="bg-indigo-100 dark:bg-indigo-800 px-2 py-1 rounded">@modal/(..)gallery/[id]/page.js</code></li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
}