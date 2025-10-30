function CheckoutForm() {
  try {
    const [productName, setProductName] = React.useState('');
    const [price, setPrice] = React.useState('');
    const [size, setSize] = React.useState('');
    const [location, setLocation] = React.useState('');
    const [address, setAddress] = React.useState('');
    const [phone, setPhone] = React.useState('');
    const [instagram, setInstagram] = React.useState('');
    const [note, setNote] = React.useState('');
    const [agreedPolicy, setAgreedPolicy] = React.useState(false);

    React.useEffect(() => {
      const params = new URLSearchParams(window.location.search);
      setProductName(decodeURIComponent(params.get('product') || ''));
      setPrice(params.get('price') || '');
    }, []);

    const locations = ['Darjeeling', 'Kalimpong', 'Gangtok', 'Siliguri', 'Kurseong', 'Mirik'];

    const handleSubmit = (e) => {
      e.preventDefault();
      
      const subject = `Order Request - ${productName}`;
      const body = `Dear Human Resource Support Team,

I would like to purchase the following item:

Product: ${productName}
Price: $${price}
Size: ${size}
Location: ${location}
Delivery Address: ${address}
Phone Number: ${phone}
Instagram: ${instagram}
${note ? `Additional Note: ${note}` : ''}

I have read and agree to the store policies (No Returns, No Refunds, No Exchange, No Order Cancellation).

Best regards`;

      const mailtoLink = `mailto:hrs.team.a@gmail.com?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;
      window.location.href = mailtoLink;
    };

    return (
      <section className="py-20 bg-[var(--bg-light)]" data-name="checkout-form" data-file="components/CheckoutForm.js">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-white rounded-3xl shadow-xl p-8 md:p-12">
            <h1 className="text-4xl font-bold mb-8 text-center">Complete Your Order</h1>

            <div className="bg-amber-50 border-l-4 border-[var(--primary-color)] p-6 mb-8">
              <h3 className="font-bold text-lg mb-3 flex items-center gap-2">
                <div className="icon-alert-circle text-xl text-[var(--secondary-color)]"></div>
                Store Policies
              </h3>
              <ul className="space-y-2 text-sm text-gray-700">
                <li>• <strong>No Returns:</strong> All sales are final</li>
                <li>• <strong>No Refunds:</strong> We do not offer refunds</li>
                <li>• <strong>No Exchange:</strong> Items cannot be exchanged</li>
                <li>• <strong>No Order Cancellation:</strong> Orders cannot be cancelled once placed</li>
                <li>• <strong>Delivery Areas:</strong> Limited to Darjeeling, Kalimpong, Gangtok, Siliguri, and nearby hilly regions</li>
              </ul>
            </div>

            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="grid md:grid-cols-2 gap-6">
                <div>
                  <label className="block text-sm font-semibold text-gray-700 mb-2">
                    Product <span className="text-red-500">*</span>
                  </label>
                  <input type="text" value={productName} readOnly className="w-full px-4 py-3 rounded-lg border bg-gray-50" />
                </div>
                <div>
                  <label className="block text-sm font-semibold text-gray-700 mb-2">
                    Price <span className="text-red-500">*</span>
                  </label>
                  <input type="text" value={`$${price}`} readOnly className="w-full px-4 py-3 rounded-lg border bg-gray-50" />
                </div>
              </div>

              <div>
                <label className="block text-sm font-semibold text-gray-700 mb-2">
                  Size <span className="text-red-500">*</span>
                </label>
                <select value={size} onChange={(e) => setSize(e.target.value)} required className="w-full px-4 py-3 rounded-lg border focus:ring-2 focus:ring-[var(--primary-color)] outline-none">
                  <option value="">Select size</option>
                  <option value="XS">XS</option>
                  <option value="S">S</option>
                  <option value="M">M</option>
                  <option value="L">L</option>
                  <option value="XL">XL</option>
                  <option value="XXL">XXL</option>
                </select>
              </div>

              <div>
                <label className="block text-sm font-semibold text-gray-700 mb-2">
                  Location <span className="text-red-500">*</span>
                </label>
                <select value={location} onChange={(e) => setLocation(e.target.value)} required className="w-full px-4 py-3 rounded-lg border focus:ring-2 focus:ring-[var(--primary-color)] outline-none">
                  <option value="">Select your location</option>
                  {locations.map(loc => <option key={loc} value={loc}>{loc}</option>)}
                </select>
              </div>

              <div>
                <label className="block text-sm font-semibold text-gray-700 mb-2">
                  Delivery Address <span className="text-red-500">*</span>
                </label>
                <textarea value={address} onChange={(e) => setAddress(e.target.value)} required rows="3" className="w-full px-4 py-3 rounded-lg border focus:ring-2 focus:ring-[var(--primary-color)] outline-none" placeholder="Enter your complete delivery address"></textarea>
              </div>

              <div className="grid md:grid-cols-2 gap-6">
                <div>
                  <label className="block text-sm font-semibold text-gray-700 mb-2">
                    Phone Number <span className="text-red-500">*</span>
                  </label>
                  <input type="tel" value={phone} onChange={(e) => setPhone(e.target.value)} required className="w-full px-4 py-3 rounded-lg border focus:ring-2 focus:ring-[var(--primary-color)] outline-none" placeholder="+91 XXXXX XXXXX" />
                </div>
                <div>
                  <label className="block text-sm font-semibold text-gray-700 mb-2">
                    Instagram Account
                  </label>
                  <input type="text" value={instagram} onChange={(e) => setInstagram(e.target.value)} className="w-full px-4 py-3 rounded-lg border focus:ring-2 focus:ring-[var(--primary-color)] outline-none" placeholder="@username" />
                </div>
              </div>

              <div>
                <label className="block text-sm font-semibold text-gray-700 mb-2">
                  Additional Note (Optional)
                </label>
                <textarea value={note} onChange={(e) => setNote(e.target.value)} rows="2" className="w-full px-4 py-3 rounded-lg border focus:ring-2 focus:ring-[var(--primary-color)] outline-none" placeholder="Any special instructions?"></textarea>
              </div>

              <div className="flex items-start gap-3 p-4 bg-gray-50 rounded-lg">
                <input type="checkbox" id="policy" checked={agreedPolicy} onChange={(e) => setAgreedPolicy(e.target.checked)} required className="mt-1" />
                <label htmlFor="policy" className="text-sm text-gray-700">
                  I have read and agree to the store policies. I understand that <strong>no returns, refunds, exchanges, or order cancellations</strong> are accepted. <span className="text-red-500">*</span>
                </label>
              </div>

              <button type="submit" className="w-full btn-primary text-lg py-4 flex items-center justify-center gap-3">
                <div className="icon-mail text-2xl"></div>
                Send Order Request
              </button>
            </form>
          </div>
        </div>
      </section>
    );
  } catch (error) {
    console.error('CheckoutForm component error:', error);
    return null;
  }
}