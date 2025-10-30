function ApplicationForm() {
  try {
    const [jobTitle, setJobTitle] = React.useState('');
    const [experience, setExperience] = React.useState('');

    React.useEffect(() => {
      const params = new URLSearchParams(window.location.search);
      const job = params.get('job');
      if (job) setJobTitle(decodeURIComponent(job));
    }, []);

    const handleSubmit = (e) => {
      e.preventDefault();
      
      const subject = `Application for ${jobTitle}`;
      const body = `Dear Hiring Team,

I am writing to express my interest in the ${jobTitle} position at StyleHub.

Experience Level: ${experience}

Please find my CV attached to this email.

Best regards`;

      const mailtoLink = `mailto:hrs.team.a@gmail.com?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;
      window.location.href = mailtoLink;
    };

    return (
      <section className="py-20 bg-[var(--bg-light)]" data-name="application-form" data-file="components/ApplicationForm.js">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-white rounded-3xl shadow-xl p-8 md:p-12">
            <div className="text-center mb-8">
              <h1 className="text-4xl font-bold mb-4">Apply for Position</h1>
              <p className="text-xl text-gray-600">Submit your application via email</p>
            </div>

            <div className="bg-blue-50 border-l-4 border-blue-500 p-6 mb-8">
              <div className="flex items-start gap-3">
                <div className="icon-info text-2xl text-blue-600 mt-1"></div>
                <div>
                  <h3 className="font-semibold text-blue-900 mb-2">Application Instructions</h3>
                  <ul className="space-y-2 text-blue-800 text-sm">
                    <li>• Fill in the required information below</li>
                    <li>• Click "Send Application" to open your email client</li>
                    <li>• Attach your CV/Resume to the email</li>
                    <li>• Send the email to complete your application</li>
                    <li>• Shortlisted candidates will receive a call for interview</li>
                  </ul>
                </div>
              </div>
            </div>

            <form onSubmit={handleSubmit} className="space-y-6">
              <div>
                <label className="block text-sm font-semibold text-gray-700 mb-2">
                  Job Position <span className="text-red-500">*</span>
                </label>
                <input
                  type="text"
                  value={jobTitle}
                  onChange={(e) => setJobTitle(e.target.value)}
                  required
                  className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-[var(--primary-color)] focus:border-transparent outline-none"
                  placeholder="Enter job title"
                />
              </div>

              <div>
                <label className="block text-sm font-semibold text-gray-700 mb-2">
                  Experience Level <span className="text-red-500">*</span>
                </label>
                <select
                  value={experience}
                  onChange={(e) => setExperience(e.target.value)}
                  required
                  className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-[var(--primary-color)] focus:border-transparent outline-none"
                >
                  <option value="">Select your experience level</option>
                  <option value="Fresher">Fresher (0-1 years)</option>
                  <option value="1-3 years">1-3 years</option>
                  <option value="3-5 years">3-5 years</option>
                  <option value="5-10 years">5-10 years</option>
                  <option value="10+ years">10+ years</option>
                </select>
              </div>

              <button type="submit" className="w-full btn-primary text-lg py-4 flex items-center justify-center gap-3">
                <div className="icon-mail text-2xl"></div>
                Send Application via Email
              </button>
            </form>

            <div className="mt-8 p-6 bg-gray-50 rounded-xl">
              <h4 className="font-semibold mb-3 flex items-center gap-2">
                <div className="icon-check-circle text-xl text-green-600"></div>
                What happens next?
              </h4>
              <ol className="space-y-2 text-gray-700 text-sm">
                <li>1. Your email will be sent to <span className="font-semibold">hrs.team.a@gmail.com</span></li>
                <li>2. Our team will review your application and CV</li>
                <li>3. Shortlisted candidates will be contacted for an interview</li>
                <li>4. You can expect a response within 5-7 business days</li>
              </ol>
            </div>
          </div>
        </div>
      </section>
    );
  } catch (error) {
    console.error('ApplicationForm component error:', error);
    return null;
  }
}