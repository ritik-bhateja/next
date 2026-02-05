export const metadata = {
  title: "Pricing - Next.js 15 Learning",
  description: "Choose the perfect plan for learning Next.js 15",
};

const pricingPlans = [
  {
    name: 'Free',
    price: '$0',
    period: 'forever',
    description: 'Perfect for getting started with Next.js 15',
    features: [
      'Basic documentation access',
      'Sample code examples',
      'Community support',
      'Basic routing examples',
      'Server/Client component demos'
    ],
    buttonText: 'Get Started',
    buttonStyle: 'bg-gray-600 hover:bg-gray-700',
    popular: false
  },
  {
    name: 'Pro',
    price: '$29',
    period: 'month',
    description: 'For developers serious about mastering Next.js 15',
    features: [
      'Complete documentation access',
      'Advanced routing patterns',
      'Server Actions examples',
      'Performance optimization guides',
      'Priority support',
      'Video tutorials',
      'Real-world project templates'
    ],
    buttonText: 'Start Pro Trial',
    buttonStyle: 'bg-blue-600 hover:bg-blue-700',
    popular: true
  },
  {
    name: 'Enterprise',
    price: '$99',
    period: 'month',
    description: 'For teams building production Next.js 15 applications',
    features: [
      'Everything in Pro',
      'Team collaboration tools',
      'Custom deployment guides',
      'Architecture consultations',
      'Dedicated support channel',
      'Custom training sessions',
      'Code review services'
    ],
    buttonText: 'Contact Sales',
    buttonStyle: 'bg-purple-600 hover:bg-purple-700',
    popular: false
  }
];

export default function Pricing() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-indigo-50 to-purple-100 dark:from-gray-900 dark:to-gray-800">
      <div className="container mx-auto px-4 py-16">
        <div className="max-w-6xl mx-auto">
          {/* Header */}
          <div className="text-center mb-16">
            <h1 className="text-4xl font-bold text-gray-900 dark:text-white mb-4">
              Choose Your Learning Path
            </h1>
            <p className="text-xl text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
              Select the perfect plan to accelerate your Next.js 15 learning journey. 
              All plans include access to our comprehensive documentation and examples.
            </p>
          </div>
          
          {/* Pricing Cards */}
          <div className="grid md:grid-cols-3 gap-8 mb-16">
            {pricingPlans.map((plan, index) => (
              <div 
                key={index} 
                className={`bg-white dark:bg-gray-800 rounded-lg p-8 shadow-md relative ${
                  plan.popular ? 'ring-2 ring-blue-500 scale-105' : ''
                }`}
              >
                {plan.popular && (
                  <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                    <span className="bg-blue-500 text-white px-4 py-1 rounded-full text-sm font-medium">
                      Most Popular
                    </span>
                  </div>
                )}
                
                <div className="text-center mb-8">
                  <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-2">
                    {plan.name}
                  </h3>
                  <div className="mb-4">
                    <span className="text-4xl font-bold text-gray-900 dark:text-white">
                      {plan.price}
                    </span>
                    <span className="text-gray-600 dark:text-gray-400">
                      /{plan.period}
                    </span>
                  </div>
                  <p className="text-gray-600 dark:text-gray-300">
                    {plan.description}
                  </p>
                </div>
                
                <ul className="space-y-3 mb-8">
                  {plan.features.map((feature, featureIndex) => (
                    <li key={featureIndex} className="flex items-center">
                      <span className="text-green-500 mr-3">✓</span>
                      <span className="text-gray-700 dark:text-gray-300 text-sm">
                        {feature}
                      </span>
                    </li>
                  ))}
                </ul>
                
                <button className={`w-full py-3 px-6 rounded-lg text-white font-medium transition-colors ${plan.buttonStyle}`}>
                  {plan.buttonText}
                </button>
              </div>
            ))}
          </div>
          
          {/* FAQ Section */}
          <div className="bg-white dark:bg-gray-800 rounded-lg p-8 shadow-md mb-8">
            <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-6 text-center">
              Frequently Asked Questions
            </h2>
            
            <div className="grid md:grid-cols-2 gap-8">
              <div>
                <h3 className="font-semibold text-gray-900 dark:text-white mb-2">
                  Is this real pricing?
                </h3>
                <p className="text-gray-600 dark:text-gray-300 text-sm">
                  No, this is a demo pricing page to showcase Next.js 15 routing patterns. 
                  All content is for educational purposes only.
                </p>
              </div>
              
              <div>
                <h3 className="font-semibold text-gray-900 dark:text-white mb-2">
                  What's included in the free plan?
                </h3>
                <p className="text-gray-600 dark:text-gray-300 text-sm">
                  The free plan includes access to all the open-source examples and 
                  documentation in this learning project.
                </p>
              </div>
              
              <div>
                <h3 className="font-semibold text-gray-900 dark:text-white mb-2">
                  Can I upgrade anytime?
                </h3>
                <p className="text-gray-600 dark:text-gray-300 text-sm">
                  Since this is a demo, there's no actual upgrading. But in a real app, 
                  you could upgrade your plan at any time.
                </p>
              </div>
              
              <div>
                <h3 className="font-semibold text-gray-900 dark:text-white mb-2">
                  Do you offer refunds?
                </h3>
                <p className="text-gray-600 dark:text-gray-300 text-sm">
                  This is a demonstration page, so no real payments are processed. 
                  It's all free and open source!
                </p>
              </div>
            </div>
          </div>
          
          {/* Route Group Info */}
          <div className="bg-indigo-50 dark:bg-indigo-900/20 rounded-lg p-6">
            <h3 className="text-lg font-semibold text-indigo-900 dark:text-indigo-100 mb-2">
              📁 Route Groups Demo
            </h3>
            <p className="text-indigo-800 dark:text-indigo-200 text-sm mb-2">
              This page is part of the <code className="bg-indigo-100 dark:bg-indigo-800 px-2 py-1 rounded">(marketing)</code> route group:
            </p>
            <ul className="text-indigo-800 dark:text-indigo-200 text-sm space-y-1">
              <li>• File: <code className="bg-indigo-100 dark:bg-indigo-800 px-2 py-1 rounded">src/app/(marketing)/pricing/page.js</code></li>
              <li>• URL: <code className="bg-indigo-100 dark:bg-indigo-800 px-2 py-1 rounded">/pricing</code> (group name not in URL)</li>
              <li>• Layout: Uses marketing layout with special header and footer</li>
              <li>• Organization: Groups marketing pages together</li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
}