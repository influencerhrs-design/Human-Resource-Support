function JobPostingForm() {
  try {
    const [jobTitle, setJobTitle] = React.useState('');
    const [jobDescription, setJobDescription] = React.useState('');
    const [companyName, setCompanyName] = React.useState('');
    const [location, setLocation] = React.useState('');
    const [jobType, setJobType] = React.useState('');
    const [salary, setSalary] = React.useState('');
    const [contactNumber, setContactNumber] = React.useState('');
    const [contactEmail, setContactEmail] = React.useState('');

    const handleSubmit = (e) => {
      e.preventDefault();
      
      const subject = `Job Posting Request - ${jobTitle}`;
      const body = `Dear Human Resource Support Team,

I would like to post the following job opening on your platform:

JOB DETAILS:
- Job Title: ${jobTitle}
- Company Name: ${companyName}
- Location: ${location}
- Job Type: ${jobType}
${salary ? `- Salary Range: ${salary}` : ''}

JOB DESCRIPTION:
${jobDescription}

CONTACT INFORMATION:
- HR/Company Number: ${contactNumber}
${contactEmail ? `- Email: ${contactEmail}` : ''}

Please review and post this job listing on your platform.

Best regards`;

      const mailtoLink = `mailto:hrs.team.management@gmail.com?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;
      window.location.href = mailtoLink;
    };

    return (
      <section className="py-20 bg-[var(--bg-light)]" data-name="job-posting-form" data-file="components/JobPostingForm.js">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h1 className="text-5xl font-bold mb-4">Post a Job Opening</h1>
            <p className="text-xl text-gray-600">Find the right talent for your company - No login required</p>
          </div>

          <div className="bg-white rounded-3xl shadow-xl p-8 md:p-12">
            <div className="bg-blue-50 border-l-4 border-blue-500 p-6 mb-8">
              <h3 className="font-bold text-lg mb-3 flex items-center gap-2">
                <div className="icon-briefcase text-xl text-blue-600"></div>
                How It Works
              </h3>
              <ul className="space-y-2 text-sm text-gray-700">
                <li>• Fill in your job details below - no account needed</li>
                <li>• Click "Submit Job Posting" to send via email</li>
                <li>• Our team will review and publish within 24-48 hours</li>
                <li>• Your job will be visible to thousands of active job seekers</li>
              </ul>
            </div>

            <form onSubmit={handleSubmit} className="space-y-6">
              <div>
                <label className="block text-sm font-semibold text-gray-700 mb-2">
                  Job Title <span className="text-red-500">*</span>
                </label>
                <input
                  type="text"
                  value={jobTitle}
                  onChange={(e) => setJobTitle(e.target.value)}
                  required
                  className="w-full px-4 py-3 rounded-lg border focus:ring-2 focus:ring-[var(--primary-color)] outline-none"
                  placeholder="e.g., Social Media Manager, Content Creator"
                />
              </div>

              <div>
                <label className="block text-sm font-semibold text-gray-700 mb-2">
                  Job Description <span className="text-red-500">*</span>
                </label>
                <textarea
                  value={jobDescription}
                  onChange={(e) => setJobDescription(e.target.value)}
                  required
                  rows="6"
                  className="w-full px-4 py-3 rounded-lg border focus:ring-2 focus:ring-[var(--primary-color)] outline-none"
                  placeholder="Describe the role, responsibilities, requirements, and qualifications..."
                ></textarea>
              </div>

              <div className="grid md:grid-cols-2 gap-6">
                <div>
                  <label className="block text-sm font-semibold text-gray-700 mb-2">
                    Company Name <span className="text-red-500">*</span>
                  </label>
                  <input
                    type="text"
                    value={companyName}
                    onChange={(e) => setCompanyName(e.target.value)}
                    required
                    className="w-full px-4 py-3 rounded-lg border focus:ring-2 focus:ring-[var(--primary-color)] outline-none"
                    placeholder="Your company name"
                  />
                </div>
                <div>
                  <label className="block text-sm font-semibold text-gray-700 mb-2">
                    Location <span className="text-red-500">*</span>
                  </label>
                  <input
                    type="text"
                    value={location}
                    onChange={(e) => setLocation(e.target.value)}
                    required
                    className="w-full px-4 py-3 rounded-lg border focus:ring-2 focus:ring-[var(--primary-color)] outline-none"
                    placeholder="e.g., Remote, New York, etc."
                  />
                </div>
              </div>

              <div className="grid md:grid-cols-2 gap-6">
                <div>
                  <label className="block text-sm font-semibold text-gray-700 mb-2">
                    Job Type <span className="text-red-500">*</span>
                  </label>
                  <select
                    value={jobType}
                    onChange={(e) => setJobType(e.target.value)}
                    required
                    className="w-full px-4 py-3 rounded-lg border focus:ring-2 focus:ring-[var(--primary-color)] outline-none"
                  >
                    <option value="">Select job type</option>
                    <option value="Full-time">Full-time</option>
                    <option value="Part-time">Part-time</option>
                    <option value="Contract">Contract</option>
                    <option value="Influencer">Influencer</option>
                    <option value="Freelance">Freelance</option>
                    <option value="Internship">Internship</option>
                  </select>
                </div>
                <div>
                  <label className="block text-sm font-semibold text-gray-700 mb-2">
                    Salary Range (Optional)
                  </label>
                  <input
                    type="text"
                    value={salary}
                    onChange={(e) => setSalary(e.target.value)}
                    className="w-full px-4 py-3 rounded-lg border focus:ring-2 focus:ring-[var(--primary-color)] outline-none"
                    placeholder="e.g., $50K-70K/year"
                  />
                </div>
              </div>

              <div className="grid md:grid-cols-2 gap-6">
                <div>
                  <label className="block text-sm font-semibold text-gray-700 mb-2">
                    HR/Company Contact Number <span className="text-red-500">*</span>
                  </label>
                  <input
                    type="tel"
                    value={contactNumber}
                    onChange={(e) => setContactNumber(e.target.value)}
                    required
                    className="w-full px-4 py-3 rounded-lg border focus:ring-2 focus:ring-[var(--primary-color)] outline-none"
                    placeholder="+91 XXXXX XXXXX"
                  />
                </div>
                <div>
                  <label className="block text-sm font-semibold text-gray-700 mb-2">
                    Contact Email (Optional)
                  </label>
                  <input
                    type="email"
                    value={contactEmail}
                    onChange={(e) => setContactEmail(e.target.value)}
                    className="w-full px-4 py-3 rounded-lg border focus:ring-2 focus:ring-[var(--primary-color)] outline-none"
                    placeholder="hr@company.com"
                  />
                </div>
              </div>

              <button type="submit" className="w-full btn-primary text-lg py-4 flex items-center justify-center gap-3">
                <div className="icon-send text-2xl"></div>
                Submit Job Posting Request
              </button>
            </form>

            <div className="mt-8 p-6 bg-gray-50 rounded-xl">
              <h4 className="font-semibold mb-3 flex items-center gap-2">
                <div className="icon-info text-xl text-blue-600"></div>
                What happens next?
              </h4>
              <ol className="space-y-2 text-gray-700 text-sm">
                <li>1. Your job posting request will be sent to <span className="font-semibold">hrs.team.management@gmail.com</span></li>
                <li>2. Our team will review your job details</li>
                <li>3. Once approved, your job will be published on our platform within 24-48 hours</li>
                <li>4. You'll start receiving applications from qualified candidates</li>
              </ol>
            </div>
          </div>
        </div>
      </section>
    );
  } catch (error) {
    console.error('JobPostingForm component error:', error);
    return null;
  }
}