function FeaturedArticles() {
  try {
    const articles = [
      {
        id: 1,
        title: '10 Tips for Influencer Success in 2025',
        excerpt: 'Master the art of influence with these proven strategies for growing your personal brand.',
        category: 'Marketing',
        image: 'https://images.unsplash.com/photo-1611162617474-5b21e879e113?w=800&q=80',
        date: 'Oct 15, 2025'
      },
      {
        id: 2,
        title: 'The Ultimate Guide to Thrift Shopping',
        excerpt: 'Discover how to find hidden gems and build a sustainable wardrobe on a budget.',
        category: 'Fashion',
        image: 'https://images.unsplash.com/photo-1489987707025-afc232f7ea0f?w=800&q=80',
        date: 'Oct 20, 2025'
      },
      {
        id: 3,
        title: 'Landing Your Dream Marketing Job',
        excerpt: 'Expert advice on crafting the perfect resume and acing your interview.',
        category: 'Career',
        image: 'https://images.unsplash.com/photo-1486312338219-ce68d2c6f44d?w=800&q=80',
        date: 'Oct 25, 2025'
      }
    ];

    return (
      <section id="articles" className="py-20 bg-[var(--bg-light)]" data-name="featured-articles" data-file="components/FeaturedArticles.js">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold mb-4">Latest Articles</h2>
            <p className="text-xl text-gray-600">Insights and tips from industry experts</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {articles.map((article) => (
              <article key={article.id} className="bg-white rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-300 cursor-pointer group">
                <div className="relative h-48 overflow-hidden">
                  <img src={article.image} alt={article.title} className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300" />
                  <span className="absolute top-4 left-4 px-3 py-1 bg-white rounded-full text-sm font-semibold" style={{color: 'var(--primary-color)'}}>
                    {article.category}
                  </span>
                </div>
                <div className="p-6">
                  <div className="flex items-center text-sm text-gray-500 mb-3">
                    <div className="icon-calendar text-base mr-2"></div>
                    {article.date}
                  </div>
                  <h3 className="text-xl font-bold mb-2 group-hover:text-[var(--primary-color)] transition-colors">
                    {article.title}
                  </h3>
                  <p className="text-gray-600 mb-4">{article.excerpt}</p>
                  <button className="flex items-center text-[var(--primary-color)] font-semibold">
                    Read More
                    <div className="icon-arrow-right text-base ml-2"></div>
                  </button>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>
    );
  } catch (error) {
    console.error('FeaturedArticles component error:', error);
    return null;
  }
}