function InfluencerMarketing() {
  try {
    return (
      <div className="py-20 bg-[var(--bg-light)]" data-name="influencer-marketing" data-file="components/InfluencerMarketing.js">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h1 className="text-5xl font-bold mb-6">Influencer Marketing Hub</h1>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Connect brands with authentic voices and grow your influence through meaningful partnerships
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8 max-w-5xl mx-auto">
            <div className="bg-white rounded-3xl p-8 shadow-xl hover:shadow-2xl transition-all">
              <div className="w-16 h-16 rounded-2xl bg-gradient-to-br from-[var(--primary-color)] to-[var(--secondary-color)] flex items-center justify-center mb-6">
                <div className="icon-user-plus text-3xl text-white"></div>
              </div>
              <h2 className="text-3xl font-bold mb-4">For Influencers</h2>
              <p className="text-gray-600 mb-6 text-lg leading-relaxed">
                Join our network of content creators and connect with leading brands. Monetize your influence and grow your audience.
              </p>
              <ul className="space-y-3 mb-8">
                {[
                  'Access to exclusive brand campaigns',
                  'Competitive compensation packages',
                  'Professional support and resources',
                  'Analytics and performance tracking'
                ].map((benefit, idx) => (
                  <li key={idx} className="flex items-start gap-3">
                    <div className="icon-check-circle text-xl text-green-600 mt-0.5"></div>
                    <span className="text-gray-700">{benefit}</span>
                  </li>
                ))}
              </ul>
              <a 
                href="https://docs.google.com/forms/d/e/1FAIpQLSdRwTpr9zGpN51PtQVjsJshrya-aPSiF1nWmmuzg8HH1bxwFQ/viewform" 
                target="_blank" 
                rel="noopener noreferrer"
                className="btn-primary w-full text-center block"
              >
                Join as Influencer
              </a>
            </div>

            <div className="bg-white rounded-3xl p-8 shadow-xl hover:shadow-2xl transition-all">
              <div className="w-16 h-16 rounded-2xl bg-gradient-to-br from-blue-500 to-purple-600 flex items-center justify-center mb-6">
                <div className="icon-briefcase text-3xl text-white"></div>
              </div>
              <h2 className="text-3xl font-bold mb-4">For Brands</h2>
              <p className="text-gray-600 mb-6 text-lg leading-relaxed">
                Partner with authentic influencers who align with your brand values. Drive engagement and reach your target audience.
              </p>
              <ul className="space-y-3 mb-8">
                {[
                  'Vetted influencer database',
                  'Campaign management tools',
                  'Detailed performance metrics',
                  'Dedicated account support'
                ].map((benefit, idx) => (
                  <li key={idx} className="flex items-start gap-3">
                    <div className="icon-check-circle text-xl text-green-600 mt-0.5"></div>
                    <span className="text-gray-700">{benefit}</span>
                  </li>
                ))}
              </ul>
              <a 
                href="https://docs.google.com/forms/d/e/1FAIpQLSctL9xDH_yKJ6n81O3PSCxar9NNMCU8YhbXOotEDDJ_4KnNNQ/viewform" 
                target="_blank" 
                rel="noopener noreferrer"
                className="btn-primary w-full text-center block"
              >
                Partner as a Brand
              </a>
            </div>
          </div>
        </div>
      </div>
    );
  } catch (error) {
    console.error('InfluencerMarketing component error:', error);
    return null;
  }
}