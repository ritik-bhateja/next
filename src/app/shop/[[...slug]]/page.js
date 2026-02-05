import Link from 'next/link';

// Sample shop data structure
const shopData = {
  categories: {
    electronics: {
      name: 'Electronics',
      description: 'Latest electronic devices and gadgets',
      subcategories: {
        phones: {
          name: 'Phones',
          description: 'Smartphones and mobile devices',
          products: {
            'iphone-15': {
              name: 'iPhone 15',
              price: '$999',
              description: 'Latest iPhone with advanced features',
              image: '📱'
            },
            'samsung-galaxy-s24': {
              name: 'Samsung Galaxy S24',
              price: '$899',
              description: 'Premium Android smartphone',
              image: '📱'
            }
          }
        },
        laptops: {
          name: 'Laptops',
          description: 'Computers and laptops for work and gaming',
          products: {
            'macbook-pro': {
              name: 'MacBook Pro',
              price: '$1999',
              description: 'Professional laptop for creators',
              image: '💻'
            },
            'dell-xps': {
              name: 'Dell XPS 13',
              price: '$1299',
              description: 'Ultrabook for professionals',
              image: '💻'
            }
          }
        }
      }
    },
    clothing: {
      name: 'Clothing',
      description: 'Fashion and apparel for all occasions',
      subcategories: {
        shirts: {
          name: 'Shirts',
          description: 'Casual and formal shirts',
          products: {
            'cotton-tshirt': {
              name: 'Cotton T-Shirt',
              price: '$29',
              description: 'Comfortable cotton t-shirt',
              image: '👕'
            }
          }
        },
        jeans: {
          name: 'Jeans',
          description: 'Denim jeans for everyday wear',
          products: {
            'slim-fit-jeans': {
              name: 'Slim Fit Jeans',
              price: '$79',
              description: 'Modern slim fit denim jeans',
              image: '👖'
            }
          }
        }
      }
    }
  }
};

// Generate metadata based on the route
export async function generateMetadata({ params }) {
  const { slug } = await params;
  
  if (!slug) {
    return {
      title: 'Shop - Next.js 15 Learning',
      description: 'Browse our complete product catalog',
    };
  }
  
  const [category, subcategory, product] = slug;
  
  if (product && shopData.categories[category]?.subcategories[subcategory]?.products[product]) {
    const productData = shopData.categories[category].subcategories[subcategory].products[product];
    return {
      title: `${productData.name} - Shop`,
      description: productData.description,
    };
  }
  
  if (subcategory && shopData.categories[category]?.subcategories[subcategory]) {
    const subcategoryData = shopData.categories[category].subcategories[subcategory];
    return {
      title: `${subcategoryData.name} - Shop`,
      description: subcategoryData.description,
    };
  }
  
  if (category && shopData.categories[category]) {
    const categoryData = shopData.categories[category];
    return {
      title: `${categoryData.name} - Shop`,
      description: categoryData.description,
    };
  }
  
  return {
    title: 'Shop - Next.js 15 Learning',
    description: 'Browse our products',
  };
}

// Generate static params for known routes
export function generateStaticParams() {
  const params = [];
  
  // Add category routes
  Object.keys(shopData.categories).forEach(category => {
    params.push({ slug: [category] });
    
    // Add subcategory routes
    Object.keys(shopData.categories[category].subcategories).forEach(subcategory => {
      params.push({ slug: [category, subcategory] });
      
      // Add product routes
      Object.keys(shopData.categories[category].subcategories[subcategory].products).forEach(product => {
        params.push({ slug: [category, subcategory, product] });
      });
    });
  });
  
  return params;
}

export default async function ShopPage({ params }) {
  const { slug } = await params; // slug can be undefined for /shop
  
  // Handle /shop (no segments) - Show all categories
  if (!slug) {
    return (
      <div className="min-h-screen bg-gradient-to-br from-emerald-50 to-teal-100 dark:from-gray-900 dark:to-gray-800">
        <div className="container mx-auto px-4 py-16">
          <div className="max-w-6xl mx-auto">
            <Link 
              href="/"
              className="inline-flex items-center text-blue-600 dark:text-blue-400 hover:text-blue-800 dark:hover:text-blue-300 transition-colors mb-8"
            >
              ← Back to Home
            </Link>
            
            <h1 className="text-4xl font-bold text-gray-900 dark:text-white mb-8">
              Shop - All Categories
            </h1>
            
            <div className="grid md:grid-cols-2 gap-8 mb-8">
              {Object.entries(shopData.categories).map(([categoryKey, category]) => (
                <div key={categoryKey} className="bg-white dark:bg-gray-800 rounded-lg p-6 shadow-md">
                  <h2 className="text-2xl font-semibold text-gray-900 dark:text-white mb-3">
                    {category.name}
                  </h2>
                  <p className="text-gray-600 dark:text-gray-300 mb-4">
                    {category.description}
                  </p>
                  <Link 
                    href={`/shop/${categoryKey}`}
                    className="inline-flex items-center text-blue-600 dark:text-blue-400 hover:text-blue-800 dark:hover:text-blue-300 transition-colors"
                  >
                    Browse {category.name} →
                  </Link>
                </div>
              ))}
            </div>
            
            <div className="bg-green-50 dark:bg-green-900/20 rounded-lg p-6">
              <h3 className="text-lg font-semibold text-green-900 dark:text-green-100 mb-2">
                🛍️ Optional Catch-All Route
              </h3>
              <p className="text-green-800 dark:text-green-200 text-sm">
                This page uses optional catch-all routes <code className="bg-green-100 dark:bg-green-800 px-2 py-1 rounded">[[...slug]]</code> 
                which matches <code>/shop</code> (no segments) and all nested paths.
              </p>
            </div>
          </div>
        </div>
      </div>
    );
  }
  
  const [category, subcategory, product] = slug;
  
  // Handle specific product page
  if (product) {
    const productData = shopData.categories[category]?.subcategories[subcategory]?.products[product];
    
    if (!productData) {
      return <div>Product not found</div>;
    }
    
    return (
      <div className="min-h-screen bg-gradient-to-br from-emerald-50 to-teal-100 dark:from-gray-900 dark:to-gray-800">
        <div className="container mx-auto px-4 py-16">
          <div className="max-w-4xl mx-auto">
            <nav className="mb-8">
              <div className="flex items-center space-x-2 text-sm text-gray-600 dark:text-gray-400">
                <Link href="/shop" className="hover:text-blue-600 dark:hover:text-blue-400">Shop</Link>
                <span>/</span>
                <Link href={`/shop/${category}`} className="hover:text-blue-600 dark:hover:text-blue-400">
                  {shopData.categories[category].name}
                </Link>
                <span>/</span>
                <Link href={`/shop/${category}/${subcategory}`} className="hover:text-blue-600 dark:hover:text-blue-400">
                  {shopData.categories[category].subcategories[subcategory].name}
                </Link>
                <span>/</span>
                <span className="text-gray-900 dark:text-white font-medium">{productData.name}</span>
              </div>
            </nav>
            
            <div className="bg-white dark:bg-gray-800 rounded-lg p-8 shadow-md">
              <div className="flex items-start space-x-8">
                <div className="text-8xl">{productData.image}</div>
                <div className="flex-1">
                  <h1 className="text-3xl font-bold text-gray-900 dark:text-white mb-4">
                    {productData.name}
                  </h1>
                  <p className="text-2xl font-semibold text-green-600 dark:text-green-400 mb-4">
                    {productData.price}
                  </p>
                  <p className="text-gray-600 dark:text-gray-300 mb-6">
                    {productData.description}
                  </p>
                  <button className="bg-blue-600 hover:bg-blue-700 text-white px-6 py-3 rounded-lg font-medium transition-colors">
                    Add to Cart
                  </button>
                </div>
              </div>
            </div>
            
            <div className="mt-8 bg-green-50 dark:bg-green-900/20 rounded-lg p-6">
              <h3 className="text-lg font-semibold text-green-900 dark:text-green-100 mb-2">
                🛍️ Product Route
              </h3>
              <p className="text-green-800 dark:text-green-200 text-sm">
                Route: <code className="bg-green-100 dark:bg-green-800 px-2 py-1 rounded">/shop/{category}/{subcategory}/{product}</code><br/>
                Slug: <code className="bg-green-100 dark:bg-green-800 px-2 py-1 rounded">["{category}", "{subcategory}", "{product}"]</code>
              </p>
            </div>
          </div>
        </div>
      </div>
    );
  }
  
  // Handle subcategory page
  if (subcategory) {
    const subcategoryData = shopData.categories[category]?.subcategories[subcategory];
    
    if (!subcategoryData) {
      return <div>Subcategory not found</div>;
    }
    
    return (
      <div className="min-h-screen bg-gradient-to-br from-emerald-50 to-teal-100 dark:from-gray-900 dark:to-gray-800">
        <div className="container mx-auto px-4 py-16">
          <div className="max-w-6xl mx-auto">
            <nav className="mb-8">
              <div className="flex items-center space-x-2 text-sm text-gray-600 dark:text-gray-400">
                <Link href="/shop" className="hover:text-blue-600 dark:hover:text-blue-400">Shop</Link>
                <span>/</span>
                <Link href={`/shop/${category}`} className="hover:text-blue-600 dark:hover:text-blue-400">
                  {shopData.categories[category].name}
                </Link>
                <span>/</span>
                <span className="text-gray-900 dark:text-white font-medium">{subcategoryData.name}</span>
              </div>
            </nav>
            
            <h1 className="text-4xl font-bold text-gray-900 dark:text-white mb-4">
              {subcategoryData.name}
            </h1>
            <p className="text-xl text-gray-600 dark:text-gray-300 mb-8">
              {subcategoryData.description}
            </p>
            
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              {Object.entries(subcategoryData.products).map(([productKey, productData]) => (
                <div key={productKey} className="bg-white dark:bg-gray-800 rounded-lg p-6 shadow-md">
                  <div className="text-4xl mb-4">{productData.image}</div>
                  <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-2">
                    {productData.name}
                  </h3>
                  <p className="text-lg font-medium text-green-600 dark:text-green-400 mb-2">
                    {productData.price}
                  </p>
                  <p className="text-gray-600 dark:text-gray-300 mb-4 text-sm">
                    {productData.description}
                  </p>
                  <Link 
                    href={`/shop/${category}/${subcategory}/${productKey}`}
                    className="inline-flex items-center text-blue-600 dark:text-blue-400 hover:text-blue-800 dark:hover:text-blue-300 transition-colors"
                  >
                    View Details →
                  </Link>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    );
  }
  
  // Handle category page
  const categoryData = shopData.categories[category];
  
  if (!categoryData) {
    return <div>Category not found</div>;
  }
  
  return (
    <div className="min-h-screen bg-gradient-to-br from-emerald-50 to-teal-100 dark:from-gray-900 dark:to-gray-800">
      <div className="container mx-auto px-4 py-16">
        <div className="max-w-6xl mx-auto">
          <nav className="mb-8">
            <div className="flex items-center space-x-2 text-sm text-gray-600 dark:text-gray-400">
              <Link href="/shop" className="hover:text-blue-600 dark:hover:text-blue-400">Shop</Link>
              <span>/</span>
              <span className="text-gray-900 dark:text-white font-medium">{categoryData.name}</span>
            </div>
          </nav>
          
          <h1 className="text-4xl font-bold text-gray-900 dark:text-white mb-4">
            {categoryData.name}
          </h1>
          <p className="text-xl text-gray-600 dark:text-gray-300 mb-8">
            {categoryData.description}
          </p>
          
          <div className="grid md:grid-cols-2 gap-8">
            {Object.entries(categoryData.subcategories).map(([subcategoryKey, subcategoryData]) => (
              <div key={subcategoryKey} className="bg-white dark:bg-gray-800 rounded-lg p-6 shadow-md">
                <h2 className="text-2xl font-semibold text-gray-900 dark:text-white mb-3">
                  {subcategoryData.name}
                </h2>
                <p className="text-gray-600 dark:text-gray-300 mb-4">
                  {subcategoryData.description}
                </p>
                <p className="text-sm text-gray-500 dark:text-gray-400 mb-4">
                  {Object.keys(subcategoryData.products).length} products available
                </p>
                <Link 
                  href={`/shop/${category}/${subcategoryKey}`}
                  className="inline-flex items-center text-blue-600 dark:text-blue-400 hover:text-blue-800 dark:hover:text-blue-300 transition-colors"
                >
                  Browse {subcategoryData.name} →
                </Link>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}