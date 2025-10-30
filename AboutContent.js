function AboutContent() {
  try {
    const services = [
      {
        icon: 'megaphone',
        title: 'Influencer Marketing',
        description: 'Connect brands with authentic influencers across social media platforms. We facilitate meaningful partnerships that drive engagement and deliver measurable results for both parties.',
        link: 'influencer.html'
      },
      {
        icon: 'briefcase',
        title: 'Job Board & Career Opportunities',
        description: 'A comprehensive platform for job seekers and employers in the influencer marketing and creative industries. From full-time positions to influencer gigs, we help connect talent with opportunities.',
        link: 'jobs.html'
      },
      {
        icon: 'newspaper',
        title: 'Industry Insights & Blog',
        description: 'Stay informed with our expert articles covering influencer marketing trends, career advice, fashion insights, and sustainable living. We share knowledge to empower our community.',
        link: 'index.html#articles'
      },
      {
        icon: 'shopping-bag',
        title: 'Sustainable Thrift Fashion',
        description: 'Curated pre-loved clothing and vintage items that promote sustainable fashion choices. Shop quality items while reducing environmental impact and supporting circular economy.',
        link: 'shop.html'
      }
    ];

    return (
      <div className="bg-[var(--bg-light)]" data-name="about-content" data-file="components/AboutContent.js">
        <section className="py-20">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <h1 className="text-5xl md:text-6xl font-bold mb-6">About Human Resource Support</h1>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
                Your all-in-one platform bridging influencer marketing, career development, and sustainable fashion
              </p>
            </div>

            <div className="bg-white rounded-3xl shadow-xl p-8 md:p-12 mb-16">
              <h2 className="text-3xl font-bold mb-6 text-center">Our Mission</h2>
              <p className="text-lg text-gray-700 leading-relaxed text-center max-w-4xl mx-auto">
                At Human Resource Support, we believe in creating connections that matter. Whether you're an influencer seeking partnerships, 
                a professional looking for career opportunities, or a conscious consumer shopping sustainably, we provide the 
                platform and resources to help you succeed. We're committed to fostering authentic relationships, promoting 
                sustainable practices, and empowering individuals to achieve their goals.
              </p>
            </div>

            <div className="mb-16">
              <h2 className="text-3xl font-bold mb-12 text-center">What We Offer</h2>
              <div className="grid md:grid-cols-2 gap-8">
                {services.map((service, idx) => (
                  <div key={idx} className="bg-white rounded-2xl p-8 shadow-lg hover:shadow-2xl transition-all">
                    <div className="w-16 h-16 rounded-2xl bg-orange-100 flex items-center justify-center mb-6">
                      <div className={`icon-${service.icon} text-3xl text-[var(--secondary-color)]`}></div>
                    </div>
                    <h3 className="text-2xl font-bold mb-4">{service.title}</h3>
                    <p className="text-gray-600 leading-relaxed mb-6">{service.description}</p>
                    <a href={service.link} className="text-[var(--primary-color)] font-semibold flex items-center gap-2 hover:gap-3 transition-all">
                      Learn More
                      <div className="icon-arrow-right text-lg"></div>
                    </a>
                  </div>
                ))}
              </div>
            </div>

            <div className="bg-gradient-to-br from-[var(--primary-color)] to-[var(--secondary-color)] rounded-3xl p-8 md:p-12 text-white text-center">
              <h2 className="text-3xl font-bold mb-4">Join Our Community</h2>
              <p className="text-lg mb-8 max-w-2xl mx-auto opacity-95">
                Whether you're here to grow your influence, advance your career, or shop sustainably, 
                Human Resource Support is your trusted partner every step of the way.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <a href="jobs.html" className="px-8 py-4 bg-white text-[var(--primary-color)] rounded-lg font-semibold hover:shadow-xl transition-all">
                  Explore Jobs
                </a>
                <a href="shop.html" className="px-8 py-4 bg-transparent border-2 border-white text-white rounded-lg font-semibold hover:bg-white hover:text-[var(--primary-color)] transition-all">
                  Shop Fashion
                </a>
              </div>
            </div>
          </div>
        </section>
      </div>
    );
  } catch (error) {
    console.error('AboutContent component error:', error);
    return null;
  }
}