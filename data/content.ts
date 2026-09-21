export type Project = {
  n: string;
  title: string;
  image: string;
  tags: string[];
  role: string;
  stack: string[];
  bullets: string[];
  phone?: boolean;
  reverse?: boolean;
};

export const projects: Project[] = [
  {
    n: "01",
    title: "brystcenteresbjerg.dk",
    image: "/bryst-site.png",
    tags: ["Live", "Full design & build"],
    role: "Independent freelance project — sole designer and developer",
    stack: [
      "Next.js",
      "React",
      "TypeScript",
      "Tailwind CSS",
      "Motion",
      "Lucide",
    ],
    bullets: [
      "Designed the full visual identity and page structure from nothing but a copy document",
      "Built every page front to back and shipped it live",
      "Handled responsive behaviour across breakpoints",
    ],
  },
  {
    n: "02",
    title: "Doctio",
    image: "/doctio-phone.png",
    phone: true,
    reverse: true,
    tags: ["Private product", "Freelance"],
    role: "Freelance frontend developer on an existing product",
    stack: ["React", "TypeScript", "ShadCN", "Tailwind"],
    bullets: [
      "Designed and built complex responsive UI in the clinical user portal",
      "Refactored existing code for scalability and readability",
      "Owned the UX/UI decisions, fixed bugs and tested my own work",
    ],
  },
  {
    n: "03",
    title: "Faundit",
    image: "/faundit-site.png",
    tags: ["Private product", "Frontend intern"],
    role: "Frontend developer intern, team of three",
    stack: [
      "React",
      "TypeScript",
      "Vite",
      "Material UI",
      "Radix UI",
      "Tailwind",
      "Stripe",
      "i18next",
    ],
    bullets: [
      "Worked only on the user portal",
      "Implementation of responsive design solutions, ensuring compatability across all devices",
      "Assisting in optimization of code for readability and scaling",
      "Own problem-solving projects with end-to-end responsibility: UX/UI, coding, testing",
      "Working with third party integrations (Stripe)",
    ],
  },
  {
    n: "04",
    title: "TOBA Advice",
    image: "/toba-site.png",
    reverse: true,
    tags: ["Live", "Brand & website"],
    role: "Web developer and designer, in-house",
    stack: ["Webflow", "Figma"],
    bullets: [
      "Built the website and visual identity from scratch in Webflow",
      "Designed the UX/UI and the whole brand system",
      "Still producing their marketing graphics: LinkedIn posts, newsletters, event invites",
    ],
  },
];

export type TimelineEntry = {
  date: string;
  title: string;
  copy: string;
};

export const timeline: TimelineEntry[] = [
  {
    date: "MAY – JUN 2026",
    title: "Freelance Frontend Developer, brystcenteresbjerg.dk",
    copy: "Full frontend design and build for a cosmetic breast clinic's marketing site, built entirely from provided copy text as an independent freelance project.",
  },
  {
    date: "AUG 2024 – PRESENT",
    title: "Web Developer / Designer, TOBA Advice",
    copy: "Built TOBA Advice's website and visual identity from scratch in Webflow, and I've kept producing their marketing graphics since: LinkedIn posts, newsletters, event invites.",
  },
  {
    date: "AUG 2024 – JAN 2025",
    title: "Freelance Frontend Developer, Doctio",
    copy: "Designed and built complex, responsive UI in the clinical user-portal. Improved existing code for scalability and readability, fixed bugs, tested, owned UX/UI decisions.",
  },
  {
    date: "AUG 2023 – JUL 2024",
    title: "Frontend Developer Intern, Faundit",
    copy: "Built responsive, cross-device UI for a lost-and-found platform. Worked in a team of 3, integrated Stripe, owned end-to-end features, mentored through co-coding sessions with the founder.",
  },
  {
    date: "JUL – DEC 2021",
    title: "Pacific circumnavigation, 50ft yacht",
    copy: "Five months at sea in French Polynesia, learning to sail and maintain a yacht. Liked it enough to buy my own boat afterward, to learn to sail solo instead of as crew.",
  },
  {
    date: "JAN 2022 – JUL 2024",
    title: "Time away, treating depression",
    copy: "Stepped back from work to focus on my health. Not something I hide. Getting through it is part of why I take this next step seriously.",
  },
  {
    date: "DEC 2020 – JUL 2021",
    title: "Student Frontend Developer / Intern, No Zebra",
    copy: "Implemented responsive designs for clients using C#/Razor, estimated frontend tasks, communicated directly with clients, collaborated across a full team.",
  },
  {
    date: "AUG 2019 – JUN 2021",
    title: "Multimedia Design, Frontend Specialty",
    copy: "Erhvervsakademi Aarhus.",
  },
  {
    date: "BEFORE 2019",
    title: "9 months in Bali",
    copy: "Lived there before starting my design education.",
  },
];

export type Skill = {
  title: string;
  items: string[];
};

export const skills: Skill[] = [
  {
    title: "Core",
    items: [
      "HTML",
      "CSS",
      "JavaScript",
      "TypeScript",
      "React",
      "Tailwind",
      "ShadCN",
      "Material UI",
    ],
  },
  { title: "Design", items: ["Figma", "Webflow", "UX/UI"] },
  { title: "Also touched", items: ["Vue.js", "React Native", "WordPress"] },
  { title: "Workflow", items: ["Git / GitHub", "Copilot", "Claude"] },
];

export const marqueeItems = [
  "React",
  "TypeScript",
  "Webflow",
  "Figma",
  "Tailwind",
  "UX/UI",
  "Vue.js",
  "Git",
  "Self-taught",
];

export const heroWords = [
  "Frontend",
  "developer",
  "with",
  "a",
  "good",
  "eye",
  "for",
  "design",
  "and",
  "room",
  "left",
  "to",
  "grow.",
];
