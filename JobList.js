function JobList() {
  try {
    const [filter, setFilter] = React.useState('all');

    const jobs = [
      { id: 1, title: 'Instagram Influencer - Fashion', company: 'TrendStyle Co.', type: 'Influencer', location: 'Remote', salary: '$2K-5K/mo', logo: 'https://images.unsplash.com/photo-1560179707-f14e90ef3623?w=100&q=80' },
      { id: 2, title: 'Social Media Manager', company: 'BrandBoost', type: 'Full-time', location: 'New York', salary: '$60K-80K/yr', logo: 'https://images.unsplash.com/photo-1557804506-669a67965ba0?w=100&q=80' },
      { id: 3, title: 'YouTube Content Creator', company: 'CreatorHub', type: 'Influencer', location: 'Remote', salary: '$3K-8K/mo', logo: 'https://images.unsplash.com/photo-1611162616305-c69b3fa7fbe0?w=100&q=80' },
      { id: 4, title: 'Marketing Coordinator', company: 'StyleNet', type: 'Full-time', location: 'Los Angeles', salary: '$50K-65K/yr', logo: 'https://images.unsplash.com/photo-1556761175-b413da4baf72?w=100&q=80' },
      { id: 5, title: 'TikTok Brand Ambassador', company: 'ViralWave', type: 'Influencer', location: 'Remote', salary: '$1.5K-4K/mo', logo: 'https://images.unsplash.com/photo-1552664730-d307ca884978?w=100&q=80' },
      { id: 6, title: 'Content Marketing Specialist', company: 'MediaPro', type: 'Full-time', location: 'Chicago', salary: '$55K-75K/yr', logo: 'https://images.unsplash.com/photo-1559136555-9303baea8ebd?w=100&q=80' }
    ];

    const filteredJobs = filter === 'all' ? jobs : jobs.filter(job => job.type === filter);

    return (
      <section className="py-20 bg-[var(--bg-light)]" data-name="job-list" data-file="components/JobList.js">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h1 className="text-4xl font-bold mb-4">Find Your Next Opportunity</h1>
            <p className="text-xl text-gray-600">Browse influencer marketing jobs and career positions</p>
          </div>

          <div className="flex flex-wrap gap-3 justify-center mb-12">
            {['all', 'Influencer', 'Full-time'].map((type) => (
              <button
                key={type}
                onClick={() => setFilter(type)}
                className={`px-6 py-2 rounded-full font-semibold transition-all ${
                  filter === type ? 'bg-[var(--primary-color)] text-white' : 'bg-white text-gray-700 hover:bg-gray-100'
                }`}
              >
                {type === 'all' ? 'All Jobs' : type}
              </button>
            ))}
          </div>

          <div className="grid gap-6">
            {filteredJobs.map((job) => (
              <div key={job.id} className="bg-white rounded-2xl p-6 shadow-lg hover:shadow-xl transition-shadow">
                <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
                  <div className="flex items-start gap-4">
                    <img src={job.logo} alt={job.company} className="w-16 h-16 rounded-xl object-cover" />
                    <div>
                      <h3 className="text-xl font-bold mb-1">{job.title}</h3>
                      <p className="text-gray-600 mb-2">{job.company}</p>
                      <div className="flex flex-wrap gap-2">
                        <span className="px-3 py-1 bg-amber-50 text-[var(--secondary-color)] rounded-full text-sm font-medium">{job.type}</span>
                        <span className="px-3 py-1 bg-gray-100 text-gray-700 rounded-full text-sm">{job.location}</span>
                        <span className="px-3 py-1 bg-green-50 text-green-700 rounded-full text-sm font-semibold">{job.salary}</span>
                      </div>
                    </div>
                  </div>
                  <a href={`apply.html?job=${encodeURIComponent(job.title)}`} className="btn-primary whitespace-nowrap">Apply Now</a>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    );
  } catch (error) {
    console.error('JobList component error:', error);
    return null;
  }
}