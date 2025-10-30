function SellerApplication() {
  try {
    const [storeName, setStoreName] = React.useState('');
    const [ownerName, setOwnerName] = React.useState('');
    const [phone, setPhone] = React.useState('');
    const [email, setEmail] = React.useState('');
    const [location, setLocation] = React.useState('');
    const [instagram, setInstagram] = React.useState('');
    const [storeDescription, setStoreDescription] = React.useState('');
    const [itemTypes, setItemTypes] = React.useState('');
    const [whyCollaborate, setWhyCollaborate] = React.useState('');

    const handleSubmit = (e) => {
      e.preventDefault();
      
      const subject = `Seller Collaboration Request - ${storeName}`;
      const body = `Dear Human Resource Support Team,

I am interested in collaborating with Human Resource Support to sell thrift items through your platform.

Store Information:
- Store Name: ${storeName}
- Owner Name: ${ownerName}
- Phone: ${phone}
- Email: ${email}
- Location: ${location}
- Instagram: ${instagram}

Store Description:
${storeDescription}

Types of Items:
${itemTypes}

Why I want to collaborate:
${whyCollaborate}

Looking forward to hearing from you.

Best regards,
${ownerName}`;

      const mailtoLink = `mailto:hrs.team.a@gmail.com?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;
      window.location.href = mailtoLink;
    };

    return (
      <section className="py-20 bg-[var(--bg-light)]" data-name="seller-application" data-file="components/SellerApplication.js">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h1 className="text-5xl font-bold mb-4">Sell with Human Resource Support</h1>
            <p className="text-xl text-gray-600">Partner with us to reach more customers and grow your thrift business</p>
          </div>

          <div className="bg-white rounded-3xl shadow-xl p-8 md:p-12">
            <div className="bg-green-50 border-l-4 border-green-500 p-6 mb-8">
              <h3 className="font-bold text-lg mb-3 flex items-center gap-2">
                <div className="icon-check-circle text-xl text-green-600"></div>
                Benefits of Collaborating
              </h3>
              <ul className="space-y-2 text-sm text-gray-700">
                <li>• Access to a wider customer base across hilly regions</li>
                <li>• Professional platform to showcase your products</li>
                <li>• Marketing and promotional support</li>
                <li>• Secure payment processing</li>
                <li>• Logistics and delivery assistance</li>
              </ul>
            </div>

            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="grid md:grid-cols-2 gap-6">
                <div>
                  <label className="block text-sm font-semibold text-gray-700 mb-2">
                    Store Name <span className="text-red-500">*</span>
                  </label>
                  <input type="text" value={storeName} onChange={(e) => setStoreName(e.target.value)} required className="w-full px-4 py-3 rounded-lg border focus:ring-2 focus:ring-[var(--primary-color)] outline-none" placeholder="Your thrift store name" />
                </div>
                <div>
                  <label className="block text-sm font-semibold text-gray-700 mb-2">
                    Owner Name <span className="text-red-500">*</span>
                  </label>
                  <input type="text" value={ownerName} onChange={(e) => setOwnerName(e.target.value)} required className="w-full px-4 py-3 rounded-lg border focus:ring-2 focus:ring-[var(--primary-color)] outline-none" placeholder="Your full name" />
                </div>
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
                    Email Address <span className="text-red-500">*</span>
                  </label>
                  <input type="email" value={email} onChange={(e) => setEmail(e.target.value)} required className="w-full px-4 py-3 rounded-lg border focus:ring-2 focus:ring-[var(--primary-color)] outline-none" placeholder="your@email.com" />
                </div>
              </div>

              <div className="grid md:grid-cols-2 gap-6">
                <div>
                  <label className="block text-sm font-semibold text-gray-700 mb-2">
                    Store Location <span className="text-red-500">*</span>
                  </label>
                  <input type="text" value={location} onChange={(e) => setLocation(e.target.value)} required className="w-full px-4 py-3 rounded-lg border focus:ring-2 focus:ring-[var(--primary-color)] outline-none" placeholder="City, State" />
                </div>
                <div>
                  <label className="block text-sm font-semibold text-gray-700 mb-2">
                    Instagram Account
                  </label>
                  <input type="text" value={instagram} onChange={(e) => setInstagram(e.target.value)} className="w-full px-4 py-3 rounded-lg border focus:ring-2 focus:ring-[var(--primary-color)] outline-none" placeholder="@yourstorename" />
                </div>
              </div>

              <div>
                <label className="block text-sm font-semibold text-gray-700 mb-2">
                  Store Description <span className="text-red-500">*</span>
                </label>
                <textarea value={storeDescription} onChange={(e) => setStoreDescription(e.target.value)} required rows="3" className="w-full px-4 py-3 rounded-lg border focus:ring-2 focus:ring-[var(--primary-color)] outline-none" placeholder="Tell us about your thrift store..."></textarea>
              </div>

              <div>
                <label className="block text-sm font-semibold text-gray-700 mb-2">
                  Types of Items You Sell <span className="text-red-500">*</span>
                </label>
                <textarea value={itemTypes} onChange={(e) => setItemTypes(e.target.value)} required rows="2" className="w-full px-4 py-3 rounded-lg border focus:ring-2 focus:ring-[var(--primary-color)] outline-none" placeholder="E.g., vintage clothing, accessories, footwear..."></textarea>
              </div>

              <div>
                <label className="block text-sm font-semibold text-gray-700 mb-2">
                  Why do you want to collaborate with us? <span className="text-red-500">*</span>
                </label>
                <textarea value={whyCollaborate} onChange={(e) => setWhyCollaborate(e.target.value)} required rows="3" className="w-full px-4 py-3 rounded-lg border focus:ring-2 focus:ring-[var(--primary-color)] outline-none" placeholder="Share your motivation..."></textarea>
              </div>

              <button type="submit" className="w-full btn-primary text-lg py-4 flex items-center justify-center gap-3">
                <div className="icon-mail text-2xl"></div>
                Send Collaboration Request
              </button>
            </form>

            <div className="mt-8 p-6 bg-gray-50 rounded-xl">
              <h4 className="font-semibold mb-3 flex items-center gap-2">
                <div className="icon-info text-xl text-blue-600"></div>
                What happens next?
              </h4>
              <ol className="space-y-2 text-gray-700 text-sm">
                <li>1. Your request will be sent to <span className="font-semibold">hrs.team.a@gmail.com</span></li>
                <li>2. Our team will review your application</li>
                <li>3. We'll contact you within 3-5 business days to discuss the collaboration</li>
                <li>4. Upon approval, we'll guide you through the onboarding process</li>
              </ol>
            </div>
          </div>
        </div>
      </section>
    );
  } catch (error) {
    console.error('SellerApplication component error:', error);
    return null;
  }
}