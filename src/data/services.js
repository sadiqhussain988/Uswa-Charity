export const services = [
  {
    id: "health",
    title: "Health",
    category: "Community Care",
    image: "health.jpg",
    imageUrl:
      "https://images.unsplash.com/photo-1576091160399-112ba8d25d1d?auto=format&fit=crop&w=1600&q=80",
    summary:
      "Community health support focused on prevention, mother & child care, and accessible wellbeing services.",
    details:
      "Our health initiatives include community health camps, mother and child care awareness, basic health education, and referrals that help families access timely care. We work with local partners to improve everyday wellbeing in underserved communities.",
    highlights: [
      "Community health camps",
      "Mother & child care awareness",
      "Basic health education",
      "Referral support for families",
    ],
  },
  {
    id: "education",
    title: "Education",
    category: "Learning",
    image: "education.jpg",
    imageUrl:
      "https://images.unsplash.com/photo-1503676260728-1c00da094a0b?auto=format&fit=crop&w=1600&q=80",
    summary:
      "Learning support and capacity building that help children and adults unlock better opportunities.",
    details:
      "From literacy support to community learning sessions, we work to improve access to education and skill development in underserved areas. Our programs help children stay in school and give adults practical learning pathways.",
    highlights: [
      "Literacy support sessions",
      "Community learning programs",
      "Skill development for youth",
      "Access-focused education outreach",
    ],
  },
  {
    id: "survey",
    title: "Survey",
    category: "Research",
    image: "survey.jpg",
    imageUrl:
      "https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?auto=format&fit=crop&w=1600&q=80",
    summary:
      "Field surveys and needs assessments that guide evidence-based community programs.",
    details:
      "We conduct surveys to understand local needs, measure program outcomes, and support partners with reliable community insights. Data helps us design stronger interventions and track real impact.",
    highlights: [
      "Needs assessments",
      "Field data collection",
      "Program outcome measurement",
      "Partner research support",
    ],
  },
  {
    id: "workshops",
    title: "Workshops",
    category: "Capacity Building",
    image: "workshops.jpg",
    imageUrl:
      "https://images.unsplash.com/photo-1524178232363-1fb2b075b655?auto=format&fit=crop&w=1600&q=80",
    summary:
      "Practical workshops that build skills, confidence, and community leadership.",
    details:
      "Interactive workshops cover health practices, education support, rights awareness, and livelihood-related skill building. Participants leave with practical knowledge they can apply immediately.",
    highlights: [
      "Skills-based training",
      "Leadership development",
      "Rights awareness sessions",
      "Livelihood-focused workshops",
    ],
  },
  {
    id: "consultancy",
    title: "Consultancy",
    category: "Advisory",
    image: "consultancy.jpg",
    imageUrl:
      "https://images.unsplash.com/photo-1521737604893-d14cc237f11d?auto=format&fit=crop&w=1600&q=80",
    summary:
      "Advisory support for community projects, institutions, and development partners.",
    details:
      "USWA provides consultancy for program design, community mobilization, and social development planning tailored to local contexts. We help partners turn ideas into practical, community-ready plans.",
    highlights: [
      "Program design advisory",
      "Community mobilization planning",
      "Partner capacity support",
      "Local context strategy",
    ],
  },
  {
    id: "awareness",
    title: "Awareness Sessions",
    category: "Outreach",
    image: "awareness.jpg",
    imageUrl:
      "https://images.unsplash.com/photo-1469571486292-0ba58a3f068b?auto=format&fit=crop&w=1600&q=80",
    summary:
      "Public sessions that inform communities on health, rights, education, and social issues.",
    details:
      "We organize awareness sessions that empower people with knowledge to make safer, healthier, and more informed decisions. Sessions are designed to be clear, practical, and community-friendly.",
    highlights: [
      "Health awareness drives",
      "Rights & social education",
      "Community dialogue sessions",
      "Behavior-change messaging",
    ],
  },
  {
    id: "donations",
    title: "Donations",
    category: "Support",
    image: "donations.jpg",
    imageUrl:
      "https://images.unsplash.com/photo-1532629345422-7515f3d16bb6?auto=format&fit=crop&w=1600&q=80",
    summary:
      "Transparent donation drives that channel support to families and community needs.",
    details:
      "Donation programs help provide relief items, educational support, and essential resources to vulnerable households. Every contribution is directed toward clear community priorities.",
    highlights: [
      "Relief item drives",
      "Education support funds",
      "Essential household resources",
      "Transparent community giving",
    ],
  },
  {
    id: "blood",
    title: "Blood Collection",
    category: "Emergency Care",
    image: "blood.jpg",
    imageUrl:
      "https://images.unsplash.com/photo-1615461066841-6116e61058f4?auto=format&fit=crop&w=1600&q=80",
    summary:
      "Blood donation campaigns that connect donors with urgent life-saving needs.",
    details:
      "We mobilize volunteers and organize blood collection drives in partnership with local networks and healthcare providers. These campaigns help patients and families in critical moments.",
    highlights: [
      "Community blood drives",
      "Volunteer donor mobilization",
      "Hospital & clinic partnerships",
      "Emergency response support",
    ],
  },
  {
    id: "food-distribution",
    title: "Food Distribution",
    category: "Relief",
    image: "food-distribution.jpg",
    imageUrl:
      "https://i.pinimg.com/1200x/65/1c/c8/651cc8657bdd26652e25d131f894f436.jpg",
    summary:
      "Providing food assistance to vulnerable families through organized community distribution programs.",
    details:
      "Our food distribution initiatives provide ration packs, cooked meals, and emergency food assistance to low-income families, disaster-affected communities, and individuals facing food insecurity.",
    highlights: [
      "Ration pack distribution",
      "Emergency food assistance",
      "Family meal support",
      "Disaster relief feeding",
    ],
  },
];

export const extraFocus = [
  "Women & Gender Development",
  "Community Mobilization",
  "Disaster Response Support",
  "Youth Engagement",
  "Advocacy & Networking",
];

export function getServiceById(id) {
  return services.find((service) => service.id === id);
}

export function getRelatedServices(id, limit = 3) {
  return services.filter((service) => service.id !== id).slice(0, limit);
}
