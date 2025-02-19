export const navLinks = [
  {
    id: 1,
    name: 'Home',
    href: '#home',
  },
  {
    id: 2,
    name: 'About',
    href: '#about',
  },
  {
    id: 3,
    name: 'Projects',
    href: '#projects',
  },
  {
    id: 4,
    name: 'Contact',
    href: '#contact',
  },
];

export const technologies = [
  {
    name: "HTML 5",
    icon: '../assets/tech/html.png',
  },
  {
    name: "CSS 3",
    icon: '../assets/tech/css.png',
  },
  {
    name: "JavaScript",
    icon: '../assets/tech/javascript.png',
  },
  {
    name: "TypeScript",
    icon: '../assets/tech/typescript.png',
  },
  {
    name: "React JS",
    icon: '../assets/tech/reactjs.png',
  },
  {
    name: "Redux Toolkit",
    icon: '../assets/tech/redux.png',
  },
  {
    name: "Tailwind CSS",
    icon: '../assets/tech/tailwind.png',
  },
  {
    name: "Node JS",
    icon: '../assets/tech/nodejs.png',
  },
  {
    name: "MongoDB",
    icon: '../assets/tech/mongodb.png',
  },
  {
    name: "Three JS",
    icon: '../assets/tech/threejs.svg',
  },
  {
    name: "git",
    icon: '../assets/tech/git.png',
  },
  {
    name: "Avalanche",
    icon: '/assets/avalanche-avax-icon.svg',
  },
  {
    name: "Solidty",
    icon: '/assets/solidity-icon.svg',
  },
];


export const clientReviews = [
  {
    id: 1,
    name: 'Emily Johnson',
    position: 'Marketing Director at GreenLeaf',
    img: 'assets/review1.png',
    review:
      'Working with Adrian was a fantastic experience. He transformed our outdated website into a modern, user-friendly platform. His attention to detail and commitment to quality are unmatched. Highly recommend him for any web dev projects.',
  },
  {
    id: 2,
    name: 'Mark Rogers',
    position: 'Founder of TechGear Shop',
    img: 'assets/review2.png',
    review:
      'Adrian’s expertise in web development is truly impressive. He delivered a robust and scalable solution for our e-commerce site, and our online sales have significantly increased since the launch. He’s a true professional! Fantastic work.',
  },
  {
    id: 3,
    name: 'John Dohsas',
    position: 'Project Manager at UrbanTech ',
    img: 'assets/review3.png',
    review:
      'I can’t say enough good things about Adrian. He was able to take our complex project requirements and turn them into a seamless, functional website. His problem-solving abilities are outstanding.',
  },
  {
    id: 4,
    name: 'Ether Smith',
    position: 'CEO of BrightStar Enterprises',
    img: 'assets/review4.png',
    review:
      'Adrian was a pleasure to work with. He understood our requirements perfectly and delivered a website that exceeded our expectations. His skills in both frontend backend dev are top-notch.',
  },
];

export const myProjects = [
  {
    title: 'AvaxGods',
    desc: 'Avaxgods is a NFT card game that redefines digital collectibles through immersive gameplay and strategic battles. Developed with React.js for a dynamic frontend and featuring a secure core wallet for flawless transactions, the platform empowers players to collect, trade, and engage with unique NFT cards.',
    subdesc:
      'Leveraging the power of the Avalanche blockchain and styled with Tailwind CSS, Avaxgods delivers unmatched performance, robust security, and seamless scalability. This cutting-edge platform paves the way for the next generation of decentralized gaming experiences.',
    href: 'https://github.com/Gold9269/MyGame-1',
    texture: '/textures/project/project1.mp4',
    logo: '/assets/project-logo1.png',
    logoStyle: {
      backgroundColor: '#fcfafa',
      border: '0.2px solid #36201D',
      boxShadow: '0px 0px 60px 0px #AA3C304D',
    },
    spotlight: '/assets/spotlight5.png',
    tags: [
      {
        id: 1,
        name: 'React.js',
        path: '/assets/react.svg',
      },
      {
        id: 2,
        name: 'TailwindCSS',
        path: 'assets/tailwindcss.png',
      },
      {
        id: 3,
        name: 'Avalanche',
        path: '/assets/avalanche-avax-icon.svg',
      },
      {
        id: 4,
        name: 'Solidty',
        path: '/assets/solidity-icon.svg',
      },
      {
        id: 5,
        name: 'node.js',
        path: '/assets/nodejs.svg',
      },
    ],
  },
  {
    title: 'StudyNotion',
    desc: 'StudyNotion is an edtech platform that revolutionizes online learning with immersive content and seamless interactions. Built on the MERN stack with REST APIs, it integrates Razorpay for secure transactions and Cloudinary for optimized media storage, empowering students and instructors with a dynamic and engaging educational experience.',
    subdesc:
      'With dedicated dashboards tailored for students and instructors, StudyNotion ensures an intuitive user interface with high performance. Designed for modern digital education, it combines efficiency, security, and innovation to create a next-generation learning environment.',
    href: 'https://github.com/Gold9269/MyEdtechProject',
    texture: '/textures/project/project2.mp4',
    logo: '/assets/favicon.ico',
    logoStyle: {
      backgroundColor: '#13202F',
      border: '0.2px solid #17293E',
      boxShadow: '0px 0px 60px 0px #2F6DB54D',
    },
    spotlight: '/assets/spotlight2.png',
    tags: [
      {
        id: 1,
        name: 'React.js',
        path: '/assets/react.svg',
      },
      {
        id: 2,
        name: 'express',
        path: '/assets/express.svg',
      },
      {
        id: 3,
        name: 'node.js',
        path: '/assets/nodejs.svg',
      },
      {
        id: 4,
        name: 'mongodb',
        path: 'assets/mongodb.svg',
      },
      {
        id: 5,
        name: 'TailwindCSS',
        path: 'assets/tailwindcss.png',
      },
    ],
  },
  // {
  //   title: 'CarePulse - Health Management System',
  //   desc: 'An innovative healthcare platform designed to streamline essential medical processes. It simplifies patient registration, appointment scheduling, and medical record management, providing a seamless experience for both healthcare providers and patients.',
  //   subdesc:
  //     'With a focus on efficiency, CarePulse integrantes complex forms and SMS notifications, by using Next.js, Appwrite, Twillio and Sentry that enhance operational workflows.',
  //   href: 'https://www.youtube.com/watch?v=lEflo_sc82g',
  //   texture: '/textures/project/project3.mp4',
  //   logo: '/assets/project-logo3.png',
  //   logoStyle: {
  //     backgroundColor: '#60f5a1',
  //     background:
  //       'linear-gradient(0deg, #60F5A150, #60F5A150), linear-gradient(180deg, rgba(255, 255, 255, 0.9) 0%, rgba(208, 213, 221, 0.8) 100%)',
  //     border: '0.2px solid rgba(208, 213, 221, 1)',
  //     boxShadow: '0px 0px 60px 0px rgba(35, 131, 96, 0.3)',
  //   },
  //   spotlight: '/assets/spotlight3.png',
  //   tags: [
  //     {
  //       id: 1,
  //       name: 'React.js',
  //       path: '/assets/react.svg',
  //     },
  //     {
  //       id: 2,
  //       name: 'TailwindCSS',
  //       path: 'assets/tailwindcss.png',
  //     },
  //     {
  //       id: 3,
  //       name: 'TypeScript',
  //       path: '/assets/typescript.png',
  //     },
  //     {
  //       id: 4,
  //       name: 'Framer Motion',
  //       path: '/assets/framer.png',
  //     },
  //   ],
  // },
  // {
  //   title: 'Horizon - Online Banking Platform',
  //   desc: 'Horizon is a comprehensive online banking platform that offers users a centralized finance management dashboard. It allows users to connect multiple bank accounts, monitor real-time transactions, and seamlessly transfer money to other users.',
  //   subdesc:
  //     'Built with Next.js 14 Appwrite, Dwolla and Plaid, Horizon ensures a smooth and secure banking experience, tailored to meet the needs of modern consumers.',
  //   href: 'https://www.youtube.com/watch?v=PuOVqP_cjkE',
  //   texture: '/textures/project/project4.mp4',
  //   logo: '/assets/project-logo4.png',
  //   logoStyle: {
  //     backgroundColor: '#0E1F38',
  //     border: '0.2px solid #0E2D58',
  //     boxShadow: '0px 0px 60px 0px #2F67B64D',
  //   },
  //   spotlight: '/assets/spotlight4.png',
  //   tags: [
  //     {
  //       id: 1,
  //       name: 'React.js',
  //       path: '/assets/react.svg',
  //     },
  //     {
  //       id: 2,
  //       name: 'TailwindCSS',
  //       path: 'assets/tailwindcss.png',
  //     },
  //     {
  //       id: 3,
  //       name: 'TypeScript',
  //       path: '/assets/typescript.png',
  //     },
  //     {
  //       id: 4,
  //       name: 'Framer Motion',
  //       path: '/assets/framer.png',
  //     },
  //   ],
  // },
  // {
  //   title: 'Imaginify - AI Photo Manipulation App',
  //   desc: 'Imaginify is a groundbreaking Software-as-a-Service application that empowers users to create stunning photo manipulations using AI technology. With features like AI-driven image editing, a payments system, and a credits-based model.',
  //   subdesc:
  //     'Built with Next.js 14, Cloudinary AI, Clerk, and Stripe, Imaginify combines cutting-edge technology with a user-centric approach. It can be turned into a side income or even a full-fledged business.',
  //   href: 'https://www.youtube.com/watch?v=Ahwoks_dawU',
  //   texture: '/textures/project/project5.mp4',
  //   logo: '/assets/project-logo5.png',
  //   logoStyle: {
  //     backgroundColor: '#1C1A43',
  //     border: '0.2px solid #252262',
  //     boxShadow: '0px 0px 60px 0px #635BFF4D',
  //   },
  //   spotlight: '/assets/spotlight5.png',
  //   tags: [
  //     {
  //       id: 1,
  //       name: 'React.js',
  //       path: '/assets/react.svg',
  //     },
  //     {
  //       id: 2,
  //       name: 'TailwindCSS',
  //       path: 'assets/tailwindcss.png',
  //     },
  //     {
  //       id: 3,
  //       name: 'TypeScript',
  //       path: '/assets/typescript.png',
  //     },
  //     {
  //       id: 4,
  //       name: 'Framer Motion',
  //       path: '/assets/framer.png',
  //     },
  //   ],
  // },
];

export const calculateSizes = (isSmall, isMobile, isTablet) => {
  return {
    deskScale: isSmall ? 0.05 : isMobile ? 0.06 : 0.065,
    deskPosition: isMobile ? [0.5, -4.5, 0] : [0.25, -5.5, 0],
    cubePosition: isSmall ? [4, -5, 0] : isMobile ? [5, -5, 0] : isTablet ? [5, -5, 0] : [10, -5.5, 0],
    reactLogoPosition: isSmall ? [3, 4, 0] : isMobile ? [5, 4, 0] : isTablet ? [5, 4, 0] : [13, 3, 0],
    ringPosition: isSmall ? [-5, 7, 0] : isMobile ? [-10, 10, 0] : isTablet ? [-12, 10, 0] : [-27, 10, 0],
    targetPosition: isSmall ? [-5, -10, -10] : isMobile ? [-9, -10, -10] : isTablet ? [-11, -7, -10] : [-20, -9, -10],
  };
};

export const workExperiences = [
  {
    id: 1,
    name: 'Netaji Subhas University Of Technology(NSUT)',
    pos: 'Bachelor of Technology in Information Technology',
    duration: '  - 7.84 CGPA',
    title: [
      "=>A FullStack Web3 Developer.",
      "=>Solved 500+ DSA questions combined on LeetCode, GeeksforGeeks, etc."],
    icon: '/assets/NSUT_logo.png',
    animation: 'idle',
  },
  {
    id: 2,
    name: 'M.D.S Public School',
    pos: 'Class XII',
    duration: '  - 91.4%',
    title: [
      "=>Achieved 99+ percentile in JEE Mains and featured on Josh Talks.",
      "=>Qualified JEE Advanced.",
      "=>Qualified NDA Written Exam."
    ],
    icon: '/assets/MDS.png',
    animation: 'idle',
  },
  {
    id: 3,
    name: 'St.Paul’s Senior Secondary School',
    pos: 'Class X',
    duration: '  - 90.2%',
    title: [""],
    icon: '/assets/StPauls.png',
    animation: 'idle',
  },
];
