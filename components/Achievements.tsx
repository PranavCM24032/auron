import { Trophy, Star, Award } from "lucide-react";

const ACHIEVEMENTS_DATA = [
  {
    name: "Smart India Hackathon '25",
    meta: "National Winner",
    desc: "Secured 1st place in Smart Infrastructure tracks, prototyping dynamic traffic rerouting agent models.",
    icon: Trophy,
  },
  {
    name: "ACM ICPC Regionals",
    meta: "Rank 42 - Elite Tier",
    desc: "Placed among top coding teams in regional competitive programming brackets, optimizing game engine trees.",
    icon: Star,
  },
  {
    name: "Outstanding Forum Award",
    meta: "Best Department Forum",
    desc: "Honored by college academic council for leading skills bootcamps, project cycles, and event management engagement.",
    icon: Award,
  },
];

export default function Achievements() {
  return (
    <section className="section-padding achievements-section" id="achievements">
      <div className="achievements-spiral-layer-3" />
      <div className="achievements-particles" />
      <div className="achievements-orbs" />
      <div className="container">
        <div className="section-header reveal-element">
          <span className="section-subtitle">Trophies & Badges</span>
          <h2 className="section-title">Hall of Fame</h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 relative z-5">
          {ACHIEVEMENTS_DATA.map((item, idx) => {
            const Icon = item.icon;
            return (
              <div 
                key={idx} 
                className="achievement-card glass-card reveal-element"
                style={{ transitionDelay: `${idx * 0.15}s` }}
              >
                <div className="spotlight" />
                <div className="card-border-glow" />
                <div className="achievement-icon">
                  <Icon size={28} />
                </div>
                <span className="achievement-meta">{item.meta}</span>
                <h4 className="achievement-name">{item.name}</h4>
                <p className="achievement-desc">{item.desc}</p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
