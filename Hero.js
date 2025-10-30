function Hero() {
  try {
    return (
      <section className="relative py-20 overflow-hidden" data-name="hero" data-file="components/Hero.js">
        <div className="absolute inset-0 bg-gradient-to-br from-[var(--primary-color)] via-[var(--secondary-color)] to-[var(--accent-color)] opacity-5"></div>
        
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
          <div className="text-center max-w-4xl mx-auto">
            <h1 className="text-5xl md:text-6xl font-bold mb-6 leading-tight">
              Your Gateway to 
              <span className="bg-gradient-to-r from-[var(--primary-color)] to-[var(--secondary-color)] bg-clip-text text-transparent"> Influence, Career & Style</span>
            </h1>
            <p className="text-xl text-gray-600 mb-8 leading-relaxed">
              Discover influencer marketing opportunities, find your dream job, and shop sustainable thrift fashion - all in one place.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a href="jobs.html" className="btn-primary">Browse Jobs</a>
              <a href="shop.html" className="btn-secondary">Shop Fashion</a>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-20">
            {[
              { icon: 'megaphone', title: 'Influencer Jobs', desc: 'Connect with top brands', color: 'var(--primary-color)' },
              { icon: 'briefcase', title: 'Career Board', desc: 'Find your next role', color: 'var(--secondary-color)' },
              { icon: 'shopping-bag', title: 'Thrift Shop', desc: 'Sustainable fashion', color: 'var(--accent-color)' }
            ].map((item, idx) => (
              <div key={idx} className="bg-white p-6 rounded-2xl shadow-lg hover:shadow-xl transition-shadow">
                <div className="w-14 h-14 rounded-xl flex items-center justify-center mb-4" style={{backgroundColor: `${item.color}15`}}>
                  <div className={`icon-${item.icon} text-2xl`} style={{color: item.color}}></div>
                </div>
                <h3 className="text-xl font-semibold mb-2">{item.title}</h3>
                <p className="text-gray-600">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    );
  } catch (error) {
    console.error('Hero component error:', error);
    return null;
  }
}