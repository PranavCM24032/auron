import { Award, Cpu, Database, Globe, Shield } from "lucide-react";

const SPONSORS = [
  { name: "Google Cloud", icon: Award },
  { name: "Intel", icon: Cpu },
  { name: "Oracle", icon: Database },
  { name: "Vercel", icon: Globe },
  { name: "Cloudflare", icon: Shield },
];

export default function Sponsors() {
  // Duplicate sponsor list to ensure gapless infinite carousel loops
  const duplicatedSponsors = [...SPONSORS, ...SPONSORS, ...SPONSORS, ...SPONSORS];

  return (
    <section className="section-padding py-16" id="sponsors" style={{ background: "var(--bg-primary)" }}>
      <div className="container">
        <div className="sponsors-carousel-container">
          <div className="sponsors-track">
            {duplicatedSponsors.map((sponsor, idx) => {
              const Icon = sponsor.icon;
              return (
                <div key={idx} className="sponsor-slide">
                  <Icon size={24} />
                  <span>{sponsor.name}</span>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
