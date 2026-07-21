export interface CommitteeMember {
  id: string;
  name: string;
  role: string;
  tier: 'advisor' | 'primary' | 'secondary' | 'tertiary';
  wing: 'advisor' | 'technical' | 'non-technical';
  department: string;
  linkedin?: string;
  insta?: string;
  github?: string;
  photo?: string;
}

export const COMMITTEE_DATA: CommitteeMember[] = [
  /* ---- ADVISOR FACULTY ---- */
  {
    "id": "dr-a-sharma",
    "name": "Dr. A. Sharma",
    "role": "Faculty Advisor",
    "tier": "advisor",
    "wing": "advisor",
    "department": "Department of Computer Science",
    "linkedin": "#",
  },
  {
    "id": "prof-sample-mentor",
    "name": "Prof. R. Kulkarni",
    "role": "Co-Advisor",
    "tier": "advisor",
    "wing": "advisor",
    "department": "Department of Information Technology",
    "linkedin": "#",
  },

  /* ---- TECHNICAL EXECUTIVE ---- */
  {
    "id": "ayush-roy",
    "name": "Ayush Roy",
    "role": "President",
    "tier": "primary",
    "wing": "technical",
    "department": "Technical Wing Executive",
    "linkedin": "https://www.linkedin.com/in/ayush-roy-206309321",
    "github": "https://github.com/ayush21-r",
    "photo": "/photo/ayush.jpeg"
  },
  {
    "id": "narayani-wadhai",
    "name": "Narayani Wadhai",
    "role": "Vice President",
    "tier": "primary",
    "wing": "technical",
    "department": "Technical Wing Executive",
    "linkedin": "https://www.linkedin.com/in/narayani-wadhai-2ab182278?utm_source=share_via&utm_content=profile&utm_medium=member_android",
    "photo": "/photo/naryani.jpeg"
  },
  {
    "id": "arya-kewatkar",
    "name": "Arya Kewatkar",
    "role": "Secretary",
    "tier": "secondary",
    "wing": "technical",
    "department": "Technical Secretariat",
    "linkedin": "https://www.linkedin.com/in/arya-rewatkar-89a505325?utm_source=share_via&utm_content=profile&utm_medium=member_android",
    "photo": "/photo/arya.png"
  },
  {
    "id": "prasad-hore",
    "name": "Prasad Hore",
    "role": "Treasurer",
    "tier": "secondary",
    "wing": "technical",
    "department": "Finance Department",
    "linkedin": "https://www.linkedin.com/in/prasad-hore?utm_source=share_via&utm_content=profile&utm_medium=member_android",
    "photo": "/photo/prasad.png"
  },
  {
    "id": "yash-chitalwar",
    "name": "Yash Chitalwar",
    "role": "Event Head",
    "tier": "secondary",
    "wing": "technical",
    "department": "Operations & Logistics",
    "linkedin": "https://www.linkedin.com/in/1y2ash?utm_source=share_via&utm_content=profile&utm_medium=member_android",
    "photo": "/photo/yash.jpeg"
  },
  {
    "id": "Mikhil-burbre",
    "name": "Mikhil Burbre",
    "role": "Media Head",
    "tier": "tertiary",
    "wing": "technical",
    "department": "video & photo editorial",
    "insta": "https://www.instagram.com/mikhill.frrr?igsh=NmFkdWM0b3I5eXJj",
    "photo": "/photo/mikhil.png"
  },
  {
    "id": "poonam-mate",
    "name": "Poonam Mate",
    "role": "PR & Outreach",
    "tier": "tertiary",
    "wing": "technical",
    "department": "Corporate Relations",
    "linkedin": "https://www.linkedin.com/in/poonam-mate-763a463ba?utm_source=share_via&utm_content=profile&utm_medium=member_android",
    "insta": "https://www.instagram.com/poonamsaidthat_?igsh=ZnVqbjNzdncyd2k3",
    "photo": "/photo/poonam.jpeg"
  },
  {
    "id": "nishad-khairkar",
    "name": "Nishad Khairkar",
    "role": "Joint Secretary",
    "tier": "tertiary",
    "wing": "technical",
    "department": "Operations Secretariat",
    "linkedin": "https://www.linkedin.com/in/nishad-khairkar-560967383",
    "photo": "/photo/nishad.jpeg"
  },
  {
    "id": "pranav-paunikar",
    "name": "Pranav Paunikar",
    "role": "Technical Head",
    "tier": "tertiary",
    "wing": "technical",
    "department": "Dev & Projects",
    "linkedin": "https://www.linkedin.com/in/pranav-paunikar?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app",
    "github": "https://github.com/PranavCM24032",
    "photo": "/photo/pranav.jpeg"
  },
  {
    "id": "anshul-motghare",
    "name": "Anshul Motghare",
    "role": "Media Co-Head",
    "tier": "tertiary",
    "wing": "technical",
    "department": "Media & Editorial",
    "linkedin": "https://www.linkedin.com/in/anshul-motghare-371963422?trk=contact-info",
    "insta": "https://www.instagram.com/anshuu_x6?utm_source=qr",
    "photo": "/photo/anshul.jpeg"
  },
  {
    "id": "shriya-kahale",
    "name": "Shriya Kahale",
    "role": "Outreach Co-Head",
    "tier": "tertiary",
    "wing": "technical",
    "department": "Corporate Relations",
    "insta": "https://www.instagram.com/shriyakahale?igsh=MWdtMzhzYTlod29wcA==",
    "photo": "/photo/shriya.jpeg"
  },
  {
    "id": "abhijit",
    "name": "Abhijit",
    "role": "Event Co-Head",
    "tier": "tertiary",
    "wing": "technical",
    "department": "Operations & Logistics",
    "linkedin": "https://www.linkedin.com/in/abhijit-pandey-b1b5a13a1?utm_source=share_via&utm_content=profile&utm_medium=member_android",
    "photo": "/photo/abhi.png"
  },
  {
    "id": "harshit",
    "name": "Harshit",
    "role": "Technical Co-Head",
    "tier": "tertiary",
    "wing": "technical",
    "department": "Dev & Projects",
    "linkedin": "https://www.linkedin.com/in/harshit-vaidya-6a3104384?utm_source=share_via&utm_content=profile&utm_medium=member_android",
    "photo": "/photo/harshit.png"
  },

  /* ---- NON-TECHNICAL EXECUTIVE ---- */
  {
    "id": "yutika-manekar",
    "name": "Yutika Manekar",
    "role": "President",
    "tier": "primary",
    "wing": "non-technical",
    "department": "Non-Technical Wing Executive",
    "linkedin": "https://www.linkedin.com/in/yutika-manekar-21416b31a?utm_source=share_via&utm_content=profile&utm_medium=member_android",
    "photo": "/photo/yutika.jpeg"
  },
  {
    "id": "nikhil-perkande",
    "name": "Nikhil Perkande",
    "role": "Vice-President",
    "tier": "primary",
    "wing": "non-technical",
    "department": "Non-Technical Wing Executive",
    "linkedin": "https://www.linkedin.com/in/nikhil-perkande-8316b2310?utm_source=share_via&utm_content=profile&utm_medium=member_android",
    "photo": "/photo/nikhil.jpeg"
  },
  {
    "id": "anushka-pawar",
    "name": "Anushka Pawar",
    "role": "Secretary",
    "tier": "secondary",
    "wing": "non-technical",
    "department": "Non-Technical Secretariat",
    "linkedin": "https://www.linkedin.com/in/anushka-pawar2206?utm_source=share_via&utm_content=profile&utm_medium=member_android",
    "photo": "/photo/anushka.jpeg"
  },
  {
    "id": "nihal-pawar",
    "name": "Nihal Pawar",
    "role": "Treasurer",
    "tier": "secondary",
    "wing": "non-technical",
    "department": "Finance Department",
    "linkedin": "https://www.linkedin.com/in/nihal-pawar-3a2a00342?utm_source=share_via&utm_content=profile&utm_medium=member_android",
    "photo": "/photo/nihal.jpeg"
  },
  {
    "id": "prashil-dongre",
    "name": "Prashil Dongre",
    "role": "Event Head",
    "tier": "secondary",
    "wing": "non-technical",
    "department": "Operations & Logistics",
    "linkedin": "https://www.linkedin.com/in/prashil-dongre-b08a00342?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app",
    "photo": "/photo/prashil.jpeg"
  },
  {
    "id": "agastya-selokar",
    "name": "Agastya Selokar",
    "role": "Joint-Secretary",
    "tier": "tertiary",
    "wing": "non-technical",
    "department": "Operations Secretariat",
    "photo": "/photo/agastya.jpeg"
  },
  {
    "id": "krish-ukhare",
    "name": "Krish Ukhare",
    "role": "Media Head",
    "tier": "tertiary",
    "wing": "non-technical",
    "department": "Media & Editorial",
    "linkedin": "https://www.linkedin.com/in/krish-ukhare-b7ba02342?utm_source=share&utm_content=profile&utm_medium=member_ios",
    "photo": "/photo/krish.jpeg"
  },
  {
    "id": "manish-wanjari",
    "name": "Manish Wanjari",
    "role": "Media Co-Head",
    "tier": "tertiary",
    "wing": "non-technical",
    "department": "Media & Editorial",
    "linkedin": "https://www.linkedin.com/in/manishwanjari?utm_source=share_via&utm_content=profile&utm_medium=member_android",
    "photo": "/photo/manish.jpeg"
  },
  {
    "id": "saransh-chatre",
    "name": "Saransh Chatre",
    "role": "Event Co-Head",
    "tier": "tertiary",
    "wing": "non-technical",
    "department": "Operations & Logistics",
    "photo": "/photo/saransh.jpeg"
  },
  {
    "id": "pratham-gawande",
    "name": "Pratham Gawande",
    "role": "Sports Head",
    "tier": "tertiary",
    "wing": "non-technical",
    "department": "Sports Department",
    "photo": "/photo/pratham.jpeg"
  },
  {
    "id": "puja-jadhav",
    "name": "Puja Jadhav",
    "role": "Sports Co-Head",
    "tier": "tertiary",
    "wing": "non-technical",
    "department": "Sports Department",
    "photo": "/photo/puja.jpeg"
  },
  {
    "id": "pushkar-meshram",
    "name": "Pushkar Meshram",
    "role": "Discipline Co-Head",
    "tier": "tertiary",
    "wing": "non-technical",
    "department": "Discipline Department",
    "photo": "/photo/pushkar.jpeg"
  }
];
