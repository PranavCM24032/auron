export interface UpcomingEvent {
  id: string;
  title: string;
  category: string;
  wing: 'technical' | 'non-technical';
  date: string;
  location: string;
  image: string;
  description: string;
}

export interface PastEvent {
  id: string;
  title: string;
  category: 'hackathons' | 'workshops' | 'seminars';
  wing: 'technical' | 'non-technical';
  date: string;
  image: string;
  description: string;
  tag: string;
}

export const UPCOMING_EVENTS_DATA: UpcomingEvent[] = [
  {
    "id": "forum-installation-2026",
    "title": "Forum Installation Ceremony",
    "category": "CEREMONY",
    "wing": "non-technical",
    "date": "Jul 25, 2026",
    "location": "S.B. Jain Institute of Technology, Management and Research, Nagpur",
    "image": "/logo.jpg",
    "description": "The official installation ceremony of Auron's new forum body. Marks the beginning of a fresh term of leadership, vision, and community building."
  },
  {
    "id": "intra-hackathon-2026",
    "title": "Intra-College Hackathon",
    "category": "HACKATHON",
    "wing": "technical",
    "date": "Aug 29, 2026",
    "location": "S.B. Jain Institute of Technology, Management and Research, Nagpur",
    "image": "/assets/hackathon.png",
    "description": "An internal hackathon challenging teams from within the college to build innovative projects under time constraints. A perfect launchpad for fresh talent."
  },
  {
    "id": "career-seminar-2026",
    "title": "Career Guidance Seminar",
    "category": "SEMINAR",
    "wing": "non-technical",
    "date": "Sept 1, 2026",
    "location": "S.B. Jain Institute of Technology, Management and Research, Nagpur",
    "image": "/assets/ai_symposium.png",
    "description": "An interactive seminar featuring industry professionals sharing insights on career pathways, resume building, interview strategies, and emerging job markets."
  },
  {
    "id": "inter-hackathon-2026",
    "title": "Inter-College Hackathon",
    "category": "HACKATHON",
    "wing": "technical",
    "date": "Oct 7, 2026",
    "location": "S.B. Jain Institute of Technology, Management and Research, Nagpur",
    "image": "/assets/hackathon.png",
    "description": "A competitive inter-college hackathon bringing together teams from multiple institutions to innovate, collaborate, and compete for top honours."
  }
];

export const PAST_EVENTS_DATA: PastEvent[] = [
  {
    "id": "ideathon-26",
    "title": "Auron Ideathon '26",
    "category": "hackathons",
    "wing": "technical",
    "date": "Feb 2026",
    "image": "/assets/past_ideathon.png",
    "description": "An ideation challenge hosting 40+ project designs targeting local civic problems, smart energy preservation, and green technologies.",
    "tag": "IDEATHON"
  },
  {
    "id": "debate-25",
    "title": "Oratory & Debate League",
    "category": "workshops",
    "wing": "non-technical",
    "date": "Dec 2025",
    "image": "/assets/ai_symposium.png",
    "description": "A public speaking league testing argumentative agility, resource planning, and technical governance topics.",
    "tag": "DEBATE"
  },
  {
    "id": "webdev-bootcamp",
    "title": "Modern Web Bootcamp",
    "category": "workshops",
    "wing": "technical",
    "date": "March 2026",
    "image": "/assets/past_webdev.png",
    "description": "Three-day hands-on workshop covering CSS grid layouts, component isolation architectures, API designs, and responsive viewport structures.",
    "tag": "WORKSHOP"
  },
  {
    "id": "cybersec-conclave",
    "title": "Cyber Security Conclave",
    "category": "seminars",
    "wing": "technical",
    "date": "May 2026",
    "image": "/assets/past_cybersec.png",
    "description": "Interactive session with network security consultants detailing modern exploit profiles, SQL injection mitigations, and capture-the-flag methodologies.",
    "tag": "SEMINAR"
  },
  {
    "id": "fest-decor-26",
    "title": "Auron Fest Management",
    "category": "seminars",
    "wing": "non-technical",
    "date": "Jan 2026",
    "image": "/assets/hackathon.png",
    "description": "A massive operations event coordinating the aesthetic design, logistics, brand outreach, and sponsorship acquisition for the national forum conclave.",
    "tag": "OPERATIONS"
  }
];
