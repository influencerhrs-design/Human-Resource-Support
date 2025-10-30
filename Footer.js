function Footer() {
  try {
    return (
      <footer className="bg-gray-900 text-white py-12" data-name="footer" data-file="components/Footer.js">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-8">
            <div>
              <div className="flex items-center space-x-2 mb-4">
                <img src="https://app.trickle.so/storage/public/images/usr_170c62a758000001/f4be4033-d379-466f-8e24-389532ab9dda.png" alt="Human Resource Support Logo" className="w-8 h-8 rounded-lg object-cover" />
                <span className="text-xl font-bold">Human Resource Support</span>
              </div>
              <p className="text-gray-400">Your one-stop platform for influence, career, and style.</p>
            </div>

            <div>
              <h4 className="font-semibold mb-4">Platform</h4>
              <ul className="space-y-2 text-gray-400">
                <li><a href="about.html" className="hover:text-white transition-colors">About Us</a></li>
                <li><a href="jobs.html" className="hover:text-white transition-colors">Job Board</a></li>
                <li><a href="shop.html" className="hover:text-white transition-colors">Thrift Shop</a></li>
                <li><a href="sell.html" className="hover:text-white transition-colors">Sell with Us</a></li>
                <li><a href="#articles" className="hover:text-white transition-colors">Blog</a></li>
              </ul>
            </div>

            <div>
              <h4 className="font-semibold mb-4">Resources</h4>
              <ul className="space-y-2 text-gray-400">
                <li><a href="influencer.html" className="hover:text-white transition-colors">Influencer Marketing</a></li>
                <li><a href="post-job.html" className="hover:text-white transition-colors">Post a Job</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Help Center</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Community</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Privacy Policy</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Terms of Service</a></li>
              </ul>
            </div>

            <div>
              <h4 className="font-semibold mb-4">Connect</h4>
              <div className="flex space-x-4">
                {[
                  { name: 'instagram', url: 'https://www.instagram.com/human.resource.support?igsh=ZTNpYjQ0azd1M2w0' },
                  { name: 'linkedin', url: 'https://www.linkedin.com/company/human-resource-support/' }
                ].map((social) => (
                  <a key={social.name} href={social.url} target={social.url !== '#' ? '_blank' : '_self'} rel={social.url !== '#' ? 'noopener noreferrer' : ''} className="w-10 h-10 rounded-full bg-gray-800 flex items-center justify-center hover:bg-[var(--primary-color)] transition-colors">
                    <div className={`icon-${social.name} text-lg`}></div>
                  </a>
                ))}
              </div>
            </div>
          </div>

          <div className="border-t border-gray-800 pt-8 text-center text-gray-400">
            <p>&copy; 2025 Human Resource Support. All rights reserved.</p>
          </div>
        </div>
      </footer>
    );
  } catch (error) {
    console.error('Footer component error:', error);
    return null;
  }
}