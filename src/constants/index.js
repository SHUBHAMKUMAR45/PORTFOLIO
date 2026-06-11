export const navLinks = [
  {
    id: 1,
    name: "Home",
    href: "#home",
  },
  {
    id: 2,
    name: "About",
    href: "#about",
  },
  {
    id: 3,
    name: "Skills",
    href: "#skills",
  },
  {
    id: 4,
    name: "Experience",
    href: "#experience",
  },
  {
    id: 5,
    name: "Projects",
    href: "#project",
  },
  {
    id: 6,
    name: "Contact",
    href: "#contact",
  },
];

export const myProjects = [
  {
    title: "Atelier — AI Fashion Stylist",
    desc: "A production-grade AI fashion platform delivering personalized outfit recommendations through a resilient multi-model AI architecture, wardrobe intelligence, and adaptive style profiling.",
    subdesc:
      "Built with Next.js 14, React Native, Express TypeScript, MongoDB, Clerk, Cloudinary, Gemini, OpenAI, and Replicate. Features AI fallback orchestration, quota management, zero-trust persistence verification, and AI-generated outfit visualization.",
    href: "https://github.com/SHUBHAMKUMAR45/Atelier",
    texture: "/textures/project/atelier.mp4",
    spotlight: "/assets/spotlight1.png",
    category: "ai",
    tags: ["Next.js 14", "React Native", "Express", "TypeScript", "MongoDB", "Clerk", "Gemini", "OpenAI", "Replicate"],
    metrics: [
      { label: "AI Reasoning Depth", value: 94 },
      { label: "Wardrobe Logic Accuracy", value: 90 },
      { label: "Orchestration Speed", value: 85 },
      { label: "System Availability", value: 98 }
    ],
    specs: {
      database: "MongoDB",
      hosting: "Vercel / AWS",
      security: "Clerk Auth",
      latency: "<120ms"
    }
  },

  {
    title: "NeuroRAG — Autonomous Self-Healing Multi-Agent RAG",
    desc: "A production-grade autonomous RAG platform capable of evaluating, repairing, and improving its own retrieval and reasoning pipelines using specialized AI agents.",
    subdesc:
      "Built with FastAPI, PostgreSQL, Redis, FAISS, Whoosh, OpenAI, Prometheus, and Grafana. Implements planner, retriever, reranker, critic, reflection, and fixer agents with hybrid retrieval and self-healing workflows.",
    href: "https://github.com/SHUBHAMKUMAR45/NeuroRAG",
    texture: "/textures/project/neurorag.mp4",
    spotlight: "/assets/spotlight2.png",
    category: "ai",
    tags: ["FastAPI", "PostgreSQL", "Redis", "FAISS", "Whoosh", "OpenAI", "Prometheus", "Grafana"],
    metrics: [
      { label: "Retrieval Accuracy", value: 96 },
      { label: "Self-Healing Rate", value: 88 },
      { label: "Query Processing Time", value: 92 },
      { label: "Agent Coordination", value: 90 }
    ],
    specs: {
      database: "PostgreSQL / Redis",
      hosting: "Docker / AWS",
      security: "API Guardrails",
      latency: "<95ms"
    }
  },

  {
    title: "vid.ai — Meeting Intelligence & Video Assistant",
    desc: "An AI-powered meeting intelligence platform that converts videos and recordings into searchable knowledge with transcription, summarization, action extraction, and conversational querying.",
    subdesc:
      "Built using Whisper, Sarvam AI, Mistral AI, LangChain, ChromaDB, Streamlit, and Sentence Transformers. Supports multilingual transcription, semantic search, RAG-powered chat, and meeting analytics.",
    href: "https://github.com/SHUBHAMKUMAR45/VidAi",
    texture: "/textures/project/vidai.mp4",
    spotlight: "/assets/spotlight3.png",
    category: "ai",
    tags: ["Whisper", "Sarvam AI", "Mistral AI", "LangChain", "ChromaDB", "Streamlit", "Transformers"],
    metrics: [
      { label: "Transcription Speed", value: 90 },
      { label: "Search Relevance", value: 93 },
      { label: "Multilingual Accuracy", value: 89 },
      { label: "Context Window Utility", value: 92 }
    ],
    specs: {
      database: "Chroma Vector DB",
      hosting: "Hugging Face Spaces",
      security: "JWT Auth",
      latency: "<150ms"
    }
  },

  {
    title: "SAP Order-to-Cash Graph Intelligence System",
    desc: "An enterprise analytics platform that transforms SAP Order-to-Cash datasets into interactive graph intelligence and natural language business analytics.",
    subdesc:
      "Built with Node.js, SQLite, D3.js, and Gemini. Features graph-based business process tracing, NL-to-SQL generation, query guardrails, and operational intelligence workflows.",
    href: "https://github.com/SHUBHAMKUMAR45/FDE",
    texture: "/textures/project/sap-o2c.mp4",
    spotlight: "/assets/spotlight4.png",
    category: "ai",
    tags: ["Node.js", "SQLite", "D3.js", "Gemini", "Express", "Tailwind CSS"],
    metrics: [
      { label: "NL-to-SQL Accuracy", value: 91 },
      { label: "Graph Rendering Speed", value: 95 },
      { label: "Data Ingestion Throughput", value: 87 },
      { label: "Query Guardrail Safety", value: 98 }
    ],
    specs: {
      database: "SQLite",
      hosting: "Render",
      security: "Query Guardrails",
      latency: "<70ms"
    }
  },

  {
    title: "Smart Event Scheduler",
    desc: "An AI-powered scheduling and collaboration platform offering intelligent calendar management, conflict resolution, and real-time team coordination.",
    subdesc:
      "Built using Next.js 15, TypeScript, MongoDB, Socket.IO, FullCalendar, and NextAuth. Features AI scheduling recommendations, analytics dashboards, collaboration tools, and enterprise-grade security.",
    href: "https://github.com/SHUBHAMKUMAR45/Smart-Event-Scheduler",
    texture: "/textures/project/Smart.mp4",
    spotlight: "/assets/spotlight5.png",
    category: "fullstack",
    tags: ["Next.js 15", "TypeScript", "MongoDB", "Socket.IO", "FullCalendar", "NextAuth"],
    metrics: [
      { label: "Sync Refresh Rate", value: 97 },
      { label: "Conflict Resolution", value: 94 },
      { label: "AI Rec Effectiveness", value: 88 },
      { label: "Auth Response Speed", value: 95 }
    ],
    specs: {
      database: "MongoDB Atlas",
      hosting: "Vercel / Node",
      security: "NextAuth / OAuth2",
      latency: "<50ms"
    }
  },

  {
    title: "SM-App GitOps CI/CD",
    desc: "A cloud-native GitOps deployment platform automating Kubernetes application delivery through declarative infrastructure and continuous deployment pipelines.",
    subdesc:
      "Built using Kubernetes, Helm, ArgoCD, Docker, React, and GitHub Actions/Jenkins. Implements GitOps workflows, automated rollouts, deployment monitoring, and scalable cluster management.",
    href: "https://github.com/SHUBHAMKUMAR45/-GitOps-CI-CD-with-ArgoCD-",
    texture: "/textures/project/gitops.mp4",
    spotlight: "/assets/spotlight1.png",
    category: "devops",
    tags: ["Kubernetes", "Helm", "ArgoCD", "Docker", "React", "GitHub Actions", "Jenkins"],
    metrics: [
      { label: "Pipeline Build Velocity", value: 93 },
      { label: "Cluster Resilience", value: 99 },
      { label: "Rollback Reliability", value: 98 },
      { label: "Resource Efficiency", value: 85 }
    ],
    specs: {
      database: "Etcd Cluster State",
      hosting: "AWS EKS / GKE",
      security: "ArgoCD RBAC",
      latency: "<40ms"
    }
  },

  {
    title: "Backend Ledger API",
    desc: "A production-grade financial ledger system implementing immutable double-entry accounting, transactional consistency, and secure monetary transfers.",
    subdesc:
      "Built with Node.js, Express, MongoDB, JWT, and Mongoose. Supports ACID transactions, idempotent payments, immutable ledgers, concurrency protection, and enterprise-grade security.",
    href: "https://github.com/SHUBHAMKUMAR45/Backend-ledger",
    texture: "/textures/project/ledger.mp4",
    spotlight: "/assets/spotlight2.png",
    category: "backend",
    tags: ["Node.js", "Express", "MongoDB", "JWT", "Mongoose", "REST API"],
    metrics: [
      { label: "Transaction Speed", value: 96 },
      { label: "ACID Consistency", value: 100 },
      { label: "Idempotency Success", value: 99 },
      { label: "Concurrency Protection", value: 98 }
    ],
    specs: {
      database: "MongoDB (Replica Set)",
      hosting: "AWS EC2",
      security: "JWT / HTTPS",
      latency: "<35ms"
    }
  },

  {
    title: "Nyxionyx — CRM Dashboard",
    desc: "A modern enterprise CRM dashboard focused on analytics, customer management, accessibility, and responsive business workflows.",
    subdesc:
      "Built with Next.js 15, TypeScript, Tailwind CSS, and shadcn/ui. Includes 12 production-ready pages, advanced visualizations, accessibility support, and responsive design.",
    href: "https://github.com/SHUBHAMKUMAR45/Nyxionyx",
    texture: "/textures/project/nova.mp4",
    spotlight: "/assets/spotlight3.png",
    category: "fullstack",
    tags: ["Next.js 15", "TypeScript", "Tailwind CSS", "shadcn/ui", "Recharts", "Framer Motion"],
    metrics: [
      { label: "Dashboard Load Speed", value: 95 },
      { label: "Accessibility Score", value: 98 },
      { label: "Interaction Fluidity", value: 92 },
      { label: "Responsive Accuracy", value: 96 }
    ],
    specs: {
      database: "PostgreSQL (Prisma)",
      hosting: "Vercel Edge",
      security: "Clerk Auth / RBAC",
      latency: "<45ms"
    }
  },

  {
    title: "ClimbWise — AI Career Coach",
    desc: "An AI-powered career development platform providing resume analysis, job recommendations, and interview preparation assistance.",
    subdesc:
      "Built with Next.js, Node.js, PostgreSQL, and Google Gemini. Delivers personalized career insights, AI-generated feedback, and mock interview simulations.",
    href: "https://github.com/SHUBHAMKUMAR45/ClimbWise",
    texture: "/textures/project/clibwise.mp4",
    spotlight: "/assets/spotlight4.png",
    category: "ai",
    tags: ["Next.js", "Node.js", "PostgreSQL", "Google Gemini", "Clerk Auth", "Tailwind CSS"],
    metrics: [
      { label: "Analysis Accuracy", value: 89 },
      { label: "Rec Personalization", value: 91 },
      { label: "Simulation Latency", value: 86 },
      { label: "Data Safety & Privacy", value: 95 }
    ],
    specs: {
      database: "PostgreSQL (Neon)",
      hosting: "Vercel / Render",
      security: "Clerk Auth",
      latency: "<110ms"
    }
  },

  {
    title: "SOEN — AI Chat & Code Assistant",
    desc: "A real-time chat platform enhanced with AI-powered coding assistance, code generation, and collaborative communication capabilities.",
    subdesc:
      "Built using MongoDB, Express.js, React, Node.js, Redis, Socket.IO, and Google Gemini. Features real-time messaging, AI coding support, and optimized caching.",
    href: "https://github.com/SHUBHAMKUMAR45/SOEN",
    texture: "/textures/project/SOEN.mp4",
    spotlight: "/assets/spotlight5.png",
    category: "ai",
    tags: ["MongoDB", "Express.js", "React", "Node.js", "Redis", "Socket.IO", "Google Gemini"],
    metrics: [
      { label: "Message Delivery Speed", value: 98 },
      { label: "Code Generation Quality", value: 87 },
      { label: "Caching Cache-Hit Ratio", value: 91 },
      { label: "Socket Sync Integrity", value: 96 }
    ],
    specs: {
      database: "MongoDB / Redis Cache",
      hosting: "Render",
      security: "Bcrypt & JWT",
      latency: "<48ms"
    }
  },

  {
    title: "Zcrum — Agile Project Management Platform",
    desc: "A collaborative project management platform supporting sprint planning, Kanban workflows, and issue tracking.",
    subdesc:
      "Built with Next.js, Prisma, Neon PostgreSQL, Tailwind CSS, and Clerk authentication. Streamlines agile development and team collaboration.",
    href: "https://github.com/SHUBHAMKUMAR45/Zcrum",
    texture: "/textures/project/zcrum.mp4",
    spotlight: "/assets/spotlight1.png",
    category: "fullstack",
    tags: ["Next.js", "Prisma", "Neon PostgreSQL", "Tailwind CSS", "Clerk Auth", "Zod"],
    metrics: [
      { label: "Kanban Drag Lag", value: 99 },
      { label: "Sprint Query Speed", value: 94 },
      { label: "Collab Sync Integrity", value: 95 },
      { label: "Setup Simplicity", value: 92 }
    ],
    specs: {
      database: "Neon PostgreSQL",
      hosting: "Vercel",
      security: "Clerk",
      latency: "<55ms"
    }
  },

  {
    title: "AI Code Analyst",
    desc: "An AI-assisted code review platform that analyzes source code, identifies defects, and recommends performance and readability improvements.",
    subdesc:
      "Built using React, Node.js, Express, MongoDB, and Google Gemini. Provides automated code quality analysis and actionable optimization recommendations.",
    href: "https://github.com/SHUBHAMKUMAR45/ai-code-analyst",
    texture: "/textures/project/aicode.mp4",
    spotlight: "/assets/spotlight2.png",
    category: "ai",
    tags: ["React", "Node.js", "Express", "MongoDB", "Google Gemini", "Tailwind CSS"],
    metrics: [
      { label: "Linting / Logic Scan", value: 92 },
      { label: "Analysis Execution", value: 85 },
      { label: "Accuracy of Fixes", value: 89 },
      { label: "Payload Processing", value: 94 }
    ],
    specs: {
      database: "MongoDB",
      hosting: "Render / Vercel",
      security: "HTTPS API",
      latency: "<125ms"
    }
  },

  {
    title: "ANN Suite — Neural Network Prediction Systems",
    desc: "A collection of deep learning projects covering image classification, regression modeling, and customer churn prediction using Artificial Neural Networks.",
    subdesc:
      "Built with TensorFlow, Keras, Scikit-learn, Pandas, NumPy, and Matplotlib. Includes MNIST digit recognition, admission prediction, and churn forecasting models.",
    href: "https://github.com/SHUBHAMKUMAR45/ANN-project",
    texture: "/textures/project/ann.mp4",
    spotlight: "/assets/spotlight3.png",
    category: "mlds",
    tags: ["TensorFlow", "Keras", "Scikit-learn", "Pandas", "NumPy", "Matplotlib"],
    metrics: [
      { label: "Model Convergence Rate", value: 93 },
      { label: "Prediction Accuracy", value: 95 },
      { label: "Data Processing Speed", value: 91 },
      { label: "Explainability Score", value: 86 }
    ],
    specs: {
      database: "CSV / Local Cache",
      hosting: "Jupyter / Local",
      security: "Data Privacy",
      latency: "<20ms"
    }
  },

  {
    title: "Shiftly — Real Estate Marketplace",
    desc: "A mobile-first platform for buying, selling, and renting properties with secure authentication and intelligent search capabilities.",
    subdesc:
      "Built with React Native and modern mobile development practices. Features property discovery, listing management, and responsive cross-platform experiences.",
    href: "https://github.com/SHUBHAMKUMAR45/Shiftly",
    texture: "/textures/project/shifly.mp4",
    spotlight: "/assets/spotlight4.png",
    category: "fullstack",
    tags: ["React Native", "Expo", "JavaScript", "Vector Icons", "React Navigation"],
    metrics: [
      { label: "Frame Rate (FPS)", value: 96 },
      { label: "Search & Filter Speed", value: 92 },
      { label: "Device Compatibility", value: 95 },
      { label: "Asset Loading Fluidity", value: 90 }
    ],
    specs: {
      database: "AsyncStorage / Firebase",
      hosting: "Expo Store / Android SDK",
      security: "Firebase Security Rules",
      latency: "<60ms"
    }
  },
];

export const archiveProjects = [
  {
    title: "Code Deck",
    desc: "A browser-based online IDE enabling developers to write, compile, execute, and test code directly from the web.",
    subdesc:
      "Built with React.js, Styled Components, Axios, React Router, and Judge0 CE API. Provides a lightweight coding environment with real-time code execution capabilities.",
    href: "https://github.com/SHUBHAMKUMAR45/code-deck",
    texture: "/textures/project/CODEDECK.mp4",
    spotlight: "/assets/spotlight1.png",
    category: "frontend",
    tags: ["React.js", "Styled Components", "Axios", "React Router", "Judge0 CE"],
    metrics: [
      { label: "Compiler Speed", value: 88 },
      { label: "Syntax Highlighting", value: 92 },
      { label: "State Isolation", value: 85 },
      { label: "UI Cleanliness", value: 90 }
    ],
    specs: {
      database: "Judge0 Cache",
      hosting: "Vercel / Render",
      security: "Sanitized Sandbox",
      latency: "<180ms"
    }
  },

  {
    title: "Renovo",
    desc: "A modern animated web experience showcasing advanced UI interactions, motion design, and immersive storytelling.",
    subdesc:
      "Built with React.js and GSAP. Focused on delivering smooth animations, dynamic transitions, and visually engaging user experiences.",
    href: "https://github.com/SHUBHAMKUMAR45/RENOVO",
    texture: "/textures/project/RENOVO.mp4",
    spotlight: "/assets/spotlight2.png",
    category: "frontend",
    tags: ["React.js", "GSAP", "Tailwind CSS", "Framer Motion", "Smooth Scroll"],
    metrics: [
      { label: "Animation Smoothness", value: 98 },
      { label: "Render Frame Rate", value: 95 },
      { label: "Interactive Fluidity", value: 94 },
      { label: "Load Time Speed", value: 88 }
    ],
    specs: {
      database: "Local Memory",
      hosting: "Vercel",
      security: "HTTPS",
      latency: "<40ms"
    }
  },

  {
    title: "Gaming Website",
    desc: "An interactive gaming-focused web platform featuring immersive UI components and modern animation-driven experiences.",
    subdesc:
      "Built using React.js and GSAP. Demonstrates responsive design, interactive animations, and engaging content presentation.",
    href: "https://github.com/SHUBHAMKUMAR45/Gamming-Website",
    texture: "/textures/project/GAME2.mp4",
    spotlight: "/assets/spotlight3.png",
    category: "frontend",
    tags: ["React.js", "GSAP", "Tailwind CSS", "HTML5 Video", "ScrollTrigger"],
    metrics: [
      { label: "Visual FX Polish", value: 96 },
      { label: "Layout Fluidity", value: 90 },
      { label: "Asset Preloading", value: 85 },
      { label: "Interactive Friction", value: 92 }
    ],
    specs: {
      database: "JSON Configs",
      hosting: "GitHub Pages",
      security: "Content Policy",
      latency: "<45ms"
    }
  },

  {
    title: "Health Plus",
    desc: "A health information and management platform providing wellness resources, scheduling tools, and user-centric healthcare features.",
    subdesc:
      "Built with React.js and modern frontend practices. Includes health information modules, appointment workflows, and responsive interfaces.",
    href: "https://github.com/SHUBHAMKUMAR45/HEALTH-PLUS",
    texture: "/textures/project/HEA.mp4",
    spotlight: "/assets/spotlight4.png",
    category: "frontend",
    tags: ["React.js", "React Router", "Tailwind CSS", "Formik", "FontAwesome"],
    metrics: [
      { label: "Workflow Clarity", value: 91 },
      { label: "Form Validation Speed", value: 95 },
      { label: "Interface Usability", value: 93 },
      { label: "Responsive Polish", value: 90 }
    ],
    specs: {
      database: "Local Session",
      hosting: "Vercel",
      security: "HTTPS SSL",
      latency: "<50ms"
    }
  },

  {
    title: "Employee Management System",
    desc: "A human resource management platform for employee records, attendance tracking, and workforce administration.",
    subdesc:
      "Built using React.js and Firebase. Demonstrates CRUD operations, authentication workflows, and cloud-based data management.",
    href: "https://github.com/SHUBHAMKUMAR45/EMS",
    texture: "/textures/project/ems.mp4",
    spotlight: "/assets/spotlight5.png",
    category: "fullstack",
    tags: ["React.js", "Firebase Auth", "Firestore DB", "Tailwind CSS", "Context API"],
    metrics: [
      { label: "Auth Login Speed", value: 94 },
      { label: "Database CRUD Speed", value: 89 },
      { label: "Data Synchronicity", value: 91 },
      { label: "UI Consistency", value: 88 }
    ],
    specs: {
      database: "Google Firestore",
      hosting: "Firebase Hosting",
      security: "Firebase Rule Rules",
      latency: "<75ms"
    }
  },

  {
    title: "Ecomzy",
    desc: "A responsive e-commerce shopping experience with cart management, state persistence, and streamlined product browsing.",
    subdesc:
      "Built with React.js, Redux Toolkit, and Tailwind CSS. Demonstrates modern state management, reusable UI components, and responsive design principles.",
    href: "https://shopping-bag-livid.vercel.app/",
    texture: "/textures/project/ecomzyy.mp4",
    spotlight: "/assets/spotlight1.png",
    category: "frontend",
    tags: ["React.js", "Redux Toolkit", "Tailwind CSS", "Axios", "Toastify"],
    metrics: [
      { label: "State Sync (Redux)", value: 97 },
      { label: "Cart Speed Operations", value: 95 },
      { label: "Product Listing Speed", value: 92 },
      { label: "Responsive Layout", value: 94 }
    ],
    specs: {
      database: "LocalStorage State",
      hosting: "Vercel",
      security: "CORS Protection",
      latency: "<40ms"
    }
  },

  {
    title: "Thought Saver",
    desc: "A collaborative real-time document editing platform enabling multiple users to work simultaneously on shared content.",
    subdesc:
      "Built around real-time synchronization concepts and collaborative editing workflows. Focused on productivity, responsiveness, and document sharing.",
    href: "https://node-js-project-l0yo.onrender.com/",
    texture: "/textures/project/tought.mp4",
    spotlight: "/assets/spotlight2.png",
    category: "fullstack",
    tags: ["Node.js", "Express.js", "Socket.IO", "MongoDB", "React", "Tailwind CSS"],
    metrics: [
      { label: "Sync Refresh Rate", value: 98 },
      { label: "Concurrent Editing", value: 90 },
      { label: "Socket Ping Latency", value: 94 },
      { label: "Database Read/Write", value: 85 }
    ],
    specs: {
      database: "MongoDB / Memory Store",
      hosting: "Render",
      security: "CORS / WS Security",
      latency: "<65ms"
    }
  },

  {
    title: "Obys Agency",
    desc: "A visually rich agency website inspired by modern creative studio experiences with advanced animation and interaction patterns.",
    subdesc:
      "Built using modern frontend technologies and animation libraries. Demonstrates creative UI design, motion effects, and responsive layouts.",
    href: "https://shubhamkumar45.github.io/OBYS-AGENCY/",
    texture: "/textures/project/obye.mp4",
    spotlight: "/assets/spotlight3.png",
    category: "frontend",
    tags: ["React.js", "GSAP", "Locomotive Scroll", "Canvas", "CSS Animations"],
    metrics: [
      { label: "Scroll Smoothness", value: 96 },
      { label: "Animation Framerate", value: 94 },
      { label: "Visual Asset Density", value: 88 },
      { label: "Mobile Scaling", value: 85 }
    ],
    specs: {
      database: "Static Configs",
      hosting: "GitHub Pages",
      security: "HTTPS",
      latency: "<35ms"
    }
  },

  {
    title: "Document Wallet",
    desc: "A document storage and management platform enabling users to securely organize, access, and manage important files.",
    subdesc:
      "Built with Node.js, Express.js, EJS, and MongoDB. Demonstrates server-side rendering, file management workflows, and backend application design.",
    href: "https://doc-wallets.onrender.com/",
    texture: "/textures/project/docsaveer.mp4",
    spotlight: "/assets/spotlight4.png",
    category: "backend",
    tags: ["Node.js", "Express.js", "EJS", "MongoDB", "Bcrypt", "Multer"],
    metrics: [
      { label: "Upload API Speed", value: 89 },
      { label: "Document Encryption", value: 95 },
      { label: "Render Output Speed", value: 92 },
      { label: "Payload Processing", value: 87 }
    ],
    specs: {
      database: "MongoDB GridFS",
      hosting: "Render",
      security: "Bcrypt & Sessions",
      latency: "<90ms"
    }
  },
];

export const experiences = [
  {
    title: "AI Intern (Trainee)",
    job: "NIELIT Patna (MeitY, Govt. of India)",
    date: "January 2026 - June 2026",
    contents: [
      "Developing and implementing Machine Learning and Deep Learning solutions using Python, Scikit-learn, and TensorFlow to solve real-world analytical challenges.",
      "Spearheading the integration of Generative AI models (OpenAI & Google Gemini APIs) into existing full-stack architectures to enhance application intelligence.",
      "Performing comprehensive Exploratory Data Analysis (EDA) and data preprocessing on complex datasets to improve model accuracy and reliability.",
      "Architecting end-to-end AI pipelines, transitioning from traditional MERN development to data-driven system design and predictive modeling.",
      "Collaborating on technical documentation and system optimization following Ministry of Electronics & IT (MeitY) standards for government-scale projects."
    ],
  },
  {
    title: "Software Developer Engineer Intern",
    job: "Docmize Solutions Pvt. Ltd",
    date: "May 2025 - December 2025",
    contents: [
      "Built scalable MERN applications for handling large-scale data ingestion and real-time analysis, ensuring efficient processing and storage in MongoDB.",
      "Developed backend services with Node.js & Express.js to enable seamless client-to-server communication for data exchange and system control.",
      "Designed and integrated secure REST APIs with JWT authentication and role-based access, ensuring reliability and compliance.",
      "Enhanced frontend performance in React.js by reducing load times by 35% using lazy loading, code splitting, and caching strategies."
    ],
  },
  {
    title: "Full-Stack Developer Intern",
    job: "CSS EdTech",
    date: "March 2025 - May 2025",
    contents: [
      "Contributed as a full-stack developer focusing on frontend development using React.js and backend development using Node.js/Express.js, delivering production-ready features.",
      "Boosted backend efficiency by 40% by optimizing APIs and implementing server-side caching, improving scalability under high user loads.",
      "Enhanced responsiveness and usability of applications using Windows Forms and WPF frameworks.",
      "Ensured clean, test-driven, and maintainable code, receiving over 90% positive feedback in code reviews."
    ],
  },
  {
    title: "Freelance Developer",
    job: "Self-Employed",
    date: "2024 - Present",
    contents: [
      "Created a personal portfolio using Three.js, React, Vite, and WebAPI to showcase technical expertise.",
      "Continuously enhancing technical skills and expanding expertise in modern web development and back-end technologies."
    ],
  },
];

export const calculateSizes = (isSmall, isMobile, isTablet) => {
  return {
    deskScale: isSmall ? 0.05 : isMobile ? 0.06 : 0.065,
    deskPosition: isMobile ? [0.5, -4.5, 0] : [0.25, -5.5, 0],
    cubePosition: isSmall ? [4, -5, 0] : isMobile ? [5, -5, 0] : isTablet ? [5, -5, 0] : [9, -5.5, 0],
    reactLogoPosition: isSmall ? [3, 4, 0] : isMobile ? [5, 4, 0] : isTablet ? [5, 4, 0] : [12, 3, 0],
    ringPosition: isSmall ? [-5, 7, 0] : isMobile ? [-10, 10, 0] : isTablet ? [-12, 10, 0] : [-24, 10, 0],
    targetPosition: isSmall ? [-5, -10, -10] : isMobile ? [-9, -10, -10] : isTablet ? [-11, -7, -10] : [-13, -13, -10],
  };
};

export const skillsData = {
  ai: [
    { name: "LLM APIs (Gemini/OpenAI)", level: 90, icon: "🧠" },
    { name: "RAG Pipelines", level: 85, icon: "🔍" },
    { name: "Vector DBs (Chroma/Pinecone)", level: 80, icon: "📁" },
    { name: "LangChain & LangGraph", level: 85, icon: "⛓️" },
    { name: "Agentic Workflows", level: 80, icon: "🤖" },
    { name: "Prompt Engineering", level: 95, icon: "📝" },
    { name: "AI Evaluation & Observability", level: 75, icon: "👁️" }
  ],
  ml: [
    { name: "PyTorch & TensorFlow", level: 85, icon: "🔥" },
    { name: "Supervised/Unsupervised Learning", level: 90, icon: "📈" },
    { name: "Deep Learning (CNNs, RNNs)", level: 85, icon: "🕸️" },
    { name: "Model Tuning & Optimization", level: 80, icon: "🔧" },
    { name: "FastAPI Model Servers", level: 85, icon: "⚡" },
    { name: "Docker Containerization", level: 80, icon: "🐳" },
    { name: "MLOps & Pipelines", level: 75, icon: "🚀" }
  ],
  ds: [
    { name: "Exploratory Data Analysis (EDA)", level: 95, icon: "🔬" },
    { name: "Advanced Statistics", level: 85, icon: "📊" },
    { name: "SQL (Complex Queries/Joins)", level: 80, icon: "🗄️" },
    { name: "Pandas & NumPy", level: 95, icon: "🐼" },
    { name: "Data Visualization (Seaborn/Plotly)", level: 90, icon: "📉" },
    { name: "Power BI & Tableau", level: 60, icon: "📈" },
    { name: "Model Explainability (SHAP/LIME)", level: 65, icon: "💡" }
  ],
  web: [
    { name: "React.js", level: 95, icon: "⚛️" },
    { name: "Next.js (App Router)", level: 90, icon: "🌐" },
    { name: "Node.js & Express.js", level: 90, icon: "🟢" },
    { name: "MongoDB & Mongoose", level: 85, icon: "🍃" },
    { name: "TypeScript", level: 85, icon: "🛡️" },
    { name: "TanStack Query", level: 90, icon: "🔄" },
    { name: "Zustand / Redux Toolkit", level: 85, icon: "📦" },
    { name: "Tailwind CSS & shadcn/ui", level: 95, icon: "🎨" }
  ]
};

