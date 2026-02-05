export default function MarketingLayout({ children }) {
  return (
    <div>
      {/* Marketing-specific header */}
      <div className="bg-gradient-to-r from-purple-600 to-pink-600 text-white py-2">
        <div className="container mx-auto px-4 text-center text-sm">
          🎉 Special Offer: Learn Next.js 15 with 50% off premium content!
        </div>
      </div>
      
      {children}
      
      {/* Marketing-specific footer */}
      <footer className="bg-gray-900 text-white py-12">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-4 gap-8">
            <div>
              <h3 className="text-lg font-semibold mb-4">Next.js 15 Learning</h3>
              <p className="text-gray-400 text-sm">
                Master Next.js 15 with hands-on examples and comprehensive documentation.
              </p>
            </div>
            <div>
              <h4 className="font-medium mb-3">Learning</h4>
              <ul className="space-y-2 text-sm text-gray-400">
                <li><a href="/docs" className="hover:text-white">Documentation</a></li>
                <li><a href="/blog" className="hover:text-white">Blog</a></li>
                <li><a href="/about" className="hover:text-white">About</a></li>
              </ul>
            </div>
            <div>
              <h4 className="font-medium mb-3">Features</h4>
              <ul className="space-y-2 text-sm text-gray-400">
                <li>Server Components</li>
                <li>App Router</li>
                <li>React Compiler</li>
              </ul>
            </div>
            <div>
              <h4 className="font-medium mb-3">Connect</h4>
              <ul className="space-y-2 text-sm text-gray-400">
                <li><a href="/contact" className="hover:text-white">Contact</a></li>
                <li><a href="#" className="hover:text-white">GitHub</a></li>
                <li><a href="#" className="hover:text-white">Twitter</a></li>
              </ul>
            </div>
          </div>
          <div className="border-t border-gray-800 mt-8 pt-8 text-center text-sm text-gray-400">
            <p>&copy; 2024 Next.js 15 Learning. Built for educational purposes.</p>
          </div>
        </div>
      </footer>
    </div>
  );
}