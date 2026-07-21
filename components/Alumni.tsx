const ALUMNI_DATA = [
  {
    name: "Rahul Mehta",
    role: "SDE-2 at Google (Batch '23)",
    quote: "Auron Forum gave me my first experience collaborating on complex developer sprints. The department hackathons are excellent preparation for real engineering environments.",
    company: "Google",
  },
  {
    name: "Priya Sharma",
    role: "Cloud Architect at AWS (Batch '22)",
    quote: "Coordinating logistics for BizQuest taught me resource scoping, stakeholder alignments, and execution under pressure. It's a gold mine for operational training.",
    company: "Amazon Web Services",
  },
  {
    name: "Sameer Sen",
    role: "Product Designer at Stripe (Batch '24)",
    quote: "Designing interactive visual layouts and custom web skins for the forum's symposiums shaped my core systems foundations. It taught me design precision.",
    company: "Stripe",
  },
];

export default function Alumni() {
  return (
    <section className="section-padding alumni-section" id="alumni">
      <div className="container">
        <div className="section-header reveal-element">
          <span className="section-subtitle">Alumni Network</span>
          <h2 className="section-title">Success Stories</h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 relative z-5">
          {ALUMNI_DATA.map((item, idx) => (
            <div 
              key={idx} 
              className="alumni-card glass-card reveal-element"
              style={{ transitionDelay: `${idx * 0.15}s` }}
            >
              <div className="spotlight" />
              <div className="card-border-glow" />
              <div className="alumni-top">
                <div className="alumni-img-circle">
                  <svg viewBox="0 0 100 100" style={{ fill: "currentColor" }}>
                    <circle cx="50" cy="40" r="18"/>
                    <path d="M50 62c-20 0-30 8-30 18v3h60v-3c0-10-10-18-30-18z"/>
                  </svg>
                </div>
                <div className="alumni-meta">
                  <h4>{item.name}</h4>
                  <p>{item.role}</p>
                </div>
              </div>
              <p className="alumni-quote">{item.quote}</p>
              <div className="alumni-company">{item.company}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
