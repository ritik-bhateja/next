import Link from 'next/link';
import { notFound } from 'next/navigation';

// Sample photo data (in a real app, this would come from a database)
const photos = {
  1: {
    title: 'Mountain Landscape',
    description: 'Beautiful mountain view with snow-capped peaks stretching as far as the eye can see. This breathtaking landscape captures the majesty of nature in its purest form.',
    thumbnail: '🏔️',
    category: 'Nature',
    details: {
      location: 'Swiss Alps',
      camera: 'Canon EOS R5',
      settings: 'f/8, 1/250s, ISO 100',
      date: 'March 15, 2024'
    }
  },
  2: {
    title: 'Ocean Sunset',
    description: 'Stunning sunset over the ocean waves with vibrant colors painting the sky. The golden hour creates a perfect reflection on the water surface.',
    thumbnail: '🌅',
    category: 'Nature',
    details: {
      location: 'Malibu Beach, California',
      camera: 'Sony A7R IV',
      settings: 'f/11, 1/60s, ISO 200',
      date: 'June 22, 2024'
    }
  },
  3: {
    title: 'City Skyline',
    description: 'Modern city skyline at night with lights creating a spectacular urban landscape. The architecture tells the story of human achievement.',
    thumbnail: '🏙️',
    category: 'Urban',
    details: {
      location: 'New York City',
      camera: 'Nikon Z9',
      settings: 'f/5.6, 2s, ISO 400',
      date: 'September 10, 2024'
    }
  },
  4: {
    title: 'Forest Path',
    description: 'Peaceful walking path through dense forest with dappled sunlight filtering through the canopy. Nature\'s cathedral invites quiet contemplation.',
    thumbnail: '🌲',
    category: 'Nature',
    details: {
      location: 'Olympic National Park',
      camera: 'Fujifilm X-T5',
      settings: 'f/4, 1/125s, ISO 800',
      date: 'August 5, 2024'
    }
  },
  5: {
    title: 'Desert Dunes',
    description: 'Golden sand dunes in the desert creating flowing patterns shaped by wind and time. The minimalist beauty of the arid landscape.',
    thumbnail: '🏜️',
    category: 'Nature',
    details: {
      location: 'Sahara Desert, Morocco',
      camera: 'Canon EOS R6',
      settings: 'f/16, 1/500s, ISO 100',
      date: 'November 18, 2024'
    }
  },
  6: {
    title: 'Space View',
    description: 'Earth view from space with stars scattered across the cosmic backdrop. Our blue marble suspended in the infinite darkness.',
    thumbnail: '🌍',
    category: 'Space',
    details: {
      location: 'International Space Station',
      camera: 'Nikon D5',
      settings: 'f/2.8, 1/4000s, ISO 1600',
      date: 'December 1, 2024'
    }
  },
  7: {
    title: 'Tropical Beach',
    description: 'Crystal clear water and white sand beach with palm trees swaying in the gentle breeze. Paradise found in this tropical haven.',
    thumbnail: '🏖️',
    category: 'Nature',
    details: {
      location: 'Maldives',
      camera: 'Sony A7 III',
      settings: 'f/8, 1/320s, ISO 100',
      date: 'February 14, 2024'
    }
  },
  8: {
    title: 'Northern Lights',
    description: 'Aurora borealis dancing in the night sky with ethereal green curtains of light. Nature\'s most spectacular light show.',
    thumbnail: '🌌',
    category: 'Nature',
    details: {
      location: 'Iceland',
      camera: 'Canon EOS R5',
      settings: 'f/2.8, 15s, ISO 3200',
      date: 'January 20, 2024'
    }
  }
};

// Generate metadata for each photo
export async function generateMetadata({ params }) {
  const { id } = await params;
  const photo = photos[id];
  
  if (!photo) {
    return {
      title: 'Photo Not Found',
    };
  }
  
  return {
    title: `${photo.title} - Photo Gallery`,
    description: photo.description,
  };
}

// Generate static params for all photos
export function generateStaticParams() {
  return Object.keys(photos).map((id) => ({
    id,
  }));
}

export default async function PhotoPage({ params }) {
  const { id } = await params;
  const photo = photos[id];
  
  if (!photo) {
    notFound();
  }
  
  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 to-gray-100 dark:from-gray-900 dark:to-gray-800">
      <div className="container mx-auto px-4 py-16">
        <div className="max-w-4xl mx-auto">
          {/* Back to Gallery */}
          <Link 
            href="/gallery"
            className="inline-flex items-center text-blue-600 dark:text-blue-400 hover:text-blue-800 dark:hover:text-blue-300 transition-colors mb-8"
          >
            ← Back to Gallery
          </Link>
          
          {/* Photo Display */}
          <div className="bg-white dark:bg-gray-800 rounded-lg shadow-lg overflow-hidden">
            {/* Large Photo */}
            <div className="bg-gradient-to-br from-blue-100 to-purple-100 dark:from-blue-900 dark:to-purple-900 p-16 text-center">
              <div className="text-9xl mb-4">
                {photo.thumbnail}
              </div>
              <div className="text-sm text-gray-600 dark:text-gray-400">
                Full resolution photo would be displayed here
              </div>
            </div>
            
            {/* Photo Info */}
            <div className="p-8">
              <div className="flex items-start justify-between mb-6">
                <div>
                  <h1 className="text-3xl font-bold text-gray-900 dark:text-white mb-2">
                    {photo.title}
                  </h1>
                  <span className="inline-block px-3 py-1 bg-blue-100 dark:bg-blue-900 text-blue-800 dark:text-blue-200 text-sm rounded-full">
                    {photo.category}
                  </span>
                </div>
              </div>
              
              <p className="text-gray-600 dark:text-gray-300 text-lg leading-relaxed mb-8">
                {photo.description}
              </p>
              
              {/* Photo Details */}
              <div className="grid md:grid-cols-2 gap-6">
                <div>
                  <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-4">
                    Photo Details
                  </h3>
                  <dl className="space-y-2">
                    <div className="flex justify-between">
                      <dt className="text-gray-600 dark:text-gray-400">Location:</dt>
                      <dd className="text-gray-900 dark:text-white font-medium">{photo.details.location}</dd>
                    </div>
                    <div className="flex justify-between">
                      <dt className="text-gray-600 dark:text-gray-400">Date:</dt>
                      <dd className="text-gray-900 dark:text-white font-medium">{photo.details.date}</dd>
                    </div>
                  </dl>
                </div>
                
                <div>
                  <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-4">
                    Camera Settings
                  </h3>
                  <dl className="space-y-2">
                    <div className="flex justify-between">
                      <dt className="text-gray-600 dark:text-gray-400">Camera:</dt>
                      <dd className="text-gray-900 dark:text-white font-medium">{photo.details.camera}</dd>
                    </div>
                    <div className="flex justify-between">
                      <dt className="text-gray-600 dark:text-gray-400">Settings:</dt>
                      <dd className="text-gray-900 dark:text-white font-medium">{photo.details.settings}</dd>
                    </div>
                  </dl>
                </div>
              </div>
            </div>
          </div>
          
          {/* Full Page Route Info */}
          <div className="mt-8 bg-green-50 dark:bg-green-900/20 rounded-lg p-6">
            <h3 className="text-lg font-semibold text-green-900 dark:text-green-100 mb-2">
              📄 Full Page Route
            </h3>
            <p className="text-green-800 dark:text-green-200 text-sm">
              This is the full page view for photo {id}. You accessed this by:
            </p>
            <ul className="text-green-800 dark:text-green-200 text-sm mt-2 space-y-1">
              <li>• Direct navigation to <code className="bg-green-100 dark:bg-green-800 px-2 py-1 rounded">/gallery/{id}</code></li>
              <li>• File: <code className="bg-green-100 dark:bg-green-800 px-2 py-1 rounded">src/app/gallery/[id]/page.js</code></li>
              <li>• This shows the complete photo details and metadata</li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
}