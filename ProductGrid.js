function ProductGrid() {
  try {
    const [category, setCategory] = React.useState('all');

    const products = [
      { id: 1, name: 'Vintage Denim Jacket', price: 45, category: 'Outerwear', image: 'https://images.unsplash.com/photo-1551028719-00167b16eac5?w=400&q=80', condition: 'Excellent' },
      { id: 2, name: 'Retro Floral Dress', price: 35, category: 'Dresses', image: 'https://images.unsplash.com/photo-1595777457583-95e059d581b8?w=400&q=80', condition: 'Good' },
      { id: 3, name: 'Classic Leather Boots', price: 60, category: 'Shoes', image: 'https://images.unsplash.com/photo-1542840410-3092f99611a3?w=400&q=80', condition: 'Excellent' },
      { id: 4, name: 'Oversized Sweater', price: 28, category: 'Tops', image: 'https://images.unsplash.com/photo-1434389677669-e08b4cac3105?w=400&q=80', condition: 'Good' },
      { id: 5, name: 'Designer Sunglasses', price: 40, category: 'Accessories', image: 'https://images.unsplash.com/photo-1511499767150-a48a237f0083?w=400&q=80', condition: 'Like New' },
      { id: 6, name: 'High-Waist Jeans', price: 32, category: 'Bottoms', image: 'https://images.unsplash.com/photo-1582418702059-97ebafb35d09?w=400&q=80', condition: 'Excellent' }
    ];

    const categories = ['all', ...new Set(products.map(p => p.category))];
    const filteredProducts = category === 'all' ? products : products.filter(p => p.category === category);

    return (
      <section className="py-20 bg-[var(--bg-light)]" data-name="product-grid" data-file="components/ProductGrid.js">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h1 className="text-4xl font-bold mb-4">Sustainable Thrift Fashion</h1>
            <p className="text-xl text-gray-600">Quality pre-loved clothing at affordable prices</p>
          </div>

          <div className="flex flex-wrap gap-3 justify-center mb-12">
            {categories.map((cat) => (
              <button
                key={cat}
                onClick={() => setCategory(cat)}
                className={`px-6 py-2 rounded-full font-semibold transition-all ${
                  category === cat ? 'bg-[var(--primary-color)] text-white' : 'bg-white text-gray-700 hover:bg-gray-100'
                }`}
              >
                {cat === 'all' ? 'All Items' : cat}
              </button>
            ))}
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredProducts.map((product) => (
              <div key={product.id} className="bg-white rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-300 group cursor-pointer">
                <div className="relative h-64 overflow-hidden">
                  <img src={product.image} alt={product.name} className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300" />
                  <span className="absolute top-4 right-4 px-3 py-1 bg-white rounded-full text-xs font-semibold text-green-600">
                    {product.condition}
                  </span>
                </div>
                <div className="p-6">
                  <span className="text-sm text-[var(--secondary-color)] font-semibold">{product.category}</span>
                  <h3 className="text-xl font-bold mt-1 mb-3">{product.name}</h3>
                  <div className="flex items-center justify-between">
                    <span className="text-2xl font-bold text-[var(--primary-color)]">${product.price}</span>
                    <a href={`checkout.html?product=${encodeURIComponent(product.name)}&price=${product.price}`} className="btn-primary flex items-center gap-2">
                      <div className="icon-shopping-cart text-lg"></div>
                      Buy Now
                    </a>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    );
  } catch (error) {
    console.error('ProductGrid component error:', error);
    return null;
  }
}