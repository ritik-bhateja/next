import Link from 'next/link';

export const metadata = {
  title: "Blog - Next.js 15 Learning",
  description: "Blog posts about Next.js 15 features and concepts",
};

// Sample blog posts data
const blogPosts = [
  {
    slug: 'getting-started-nextjs-15',
    title: 'Getting Started with Next.js 15',
    excerpt: 'Learn the basics of Next.js 15 and its new features.',
    date: '2024-02-05',
    author: 'Next.js Learner'
  },
  {
    slug: 'server-components-explained',
    title: 'Server Components Explained',
    excerpt: 'Deep dive into React Server Components and how they work in Next.js 15.',
    date: '2024-02-04',
    author: 'Next.js Learner'
  },
  {
    slug: 'app-router-vs-pages-router',
    title: 'App Router vs Pages Router',
    excerpt: 'Understanding the differences and when to use each routing approach.',
    date: '2024-02-03',
    author: 'Next.js Learner'
  },
  {
    slug: 'dynamic-routing-patterns',
    title: 'Dynamic Routing Patterns',
    excerpt: 'Master dynamic routes, catch-all routes, and optional segments.',
    date: '2024-02-02',
    author: 'Next.js Learner'
  }
];

export default function Blog() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-orange-50 to-red-100 dark:from-gray-900 dark:to-gray-800">
      <div className="container mx-auto px-4 py-16">
        <div className="max-w-4xl mx-auto">
          <h1 className="text-4xl font-bold text-gray-900 dark:text-white mb-8">
            Next.js 15 Learning Blog
          </h1>
          
          <p className="text-xl text-gray-600 dark:text-gray-300 mb-12">
            Explore our journey learning Next.js 15 through practical examples and detailed explanations.
          </p>
          
          <div className="grid gap-6">
            {blogPosts.map((post) => (
              <article 
                key={post.slug}
                className="bg-white dark:bg-gray-800 rounded-lg p-6 shadow-md hover:shadow-lg transition-shadow"
              >
                <div className="flex items-start justify-between mb-4">
                  <div className="flex-1">
                    <Link 
                      href={`/blog/${post.slug}`}
                      className="text-2xl font-semibold text-gray-900 dark:text-white hover:text-blue-600 dark:hover:text-blue-400 transition-colors"
                    >
                      {post.title}
                    </Link>
                    <p className="text-gray-600 dark:text-gray-300 mt-2">
                      {post.excerpt}
                    </p>
                  </div>
                </div>
                
                <div className="flex items-center justify-between text-sm text-gray-500 dark:text-gray-400">
                  <span>By {post.author}</span>
                  <span>{new Date(post.date).toLocaleDateString()}</span>
                </div>
                
                <div className="mt-4">
                  <Link 
                    href={`/blog/${post.slug}`}
                    className="inline-flex items-center text-blue-600 dark:text-blue-400 hover:text-blue-800 dark:hover:text-blue-300 transition-colors"
                  >
                    Read more →
                  </Link>
                </div>
              </article>
            ))}
          </div>
          
          <div className="mt-12 bg-yellow-50 dark:bg-yellow-900/20 rounded-lg p-6">
            <h3 className="text-lg font-semibold text-yellow-900 dark:text-yellow-100 mb-2">
              🔗 Dynamic Routing Demo
            </h3>
            <p className="text-yellow-800 dark:text-yellow-200 text-sm">
              Click on any blog post to see dynamic routing in action. Each post URL follows the pattern{' '}
              <code className="bg-yellow-100 dark:bg-yellow-800 px-2 py-1 rounded">
                /blog/[slug]
              </code>{' '}
              where [slug] is dynamically generated from the post data.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}