/**
 * ==========================================================================
 * MASTER PORTFOLIO DATASET
 * Edit this file to customize your personal details, career history,
 * and project archive. Designed to comfortably handle 20 to 50+ projects!
 * ==========================================================================
 */

const SITE_CONFIG = {
  fullName: "Your Name",
  shortTitle: "Builder & Product Architect",
  availabilityStatus: "Available for select roles & projects — 2026",
  location: "San Francisco & Remote",
  email: "yourname@gmail.com",
  heroEyebrow: "Senior Design Engineer & Creative Technologist",
  heroHeadlineMain: "Hi, I'm ",
  heroHeadlineAccent: "Your Name",
  heroHeadlineEnd: " — Full-Stack Builder, Product Designer & Systems Engineer.",
  heroSubCopy: "I engineer category-defining digital products, high-velocity developer tools, and intelligent systems. Obsessed with translating complex technical architecture into effortless, human-centric software.",
  resumePdfUrl: "assets/resume.pdf",
  socials: {
    github: "https://github.com",
    linkedin: "https://linkedin.com",
    x: "https://x.com"
  }
};

/**
 * PROJECT VAULT:
 * Set `featured: true` on your flagship 5–6 projects for the Home editorial grid.
 * All projects appear in the Work Archive (`/work`) with live filtering & search.
 */
const PROJECTS_DATA = [
  {
    id: "proj-1",
    title: "Autonomous AI Workflow Engine",
    subtitle: "An intelligent multi-agent orchestration workspace for high-velocity software teams",
    category: "AI & ML",
    year: "2026",
    status: "View Work",
    featured: true,
    span: "md:col-span-7",
    aspect: "aspect-[16/10]",
    role: "Founder & Lead Architect",
    stack: "Next.js 15, Python, LangGraph, PostgreSQL, pgvector, WebSockets",
    metrics: "Reduced sprint triage time by 68% • 4,200+ active users",
    image: "https://images.unsplash.com/photo-1618005182384-a83a8bd57fbe?auto=format&fit=crop&w=1400&q=85",
    description: "Designed and engineered an autonomous orchestration engine that connects directly to GitHub, Linear, and Slack. It listens to real-time events, analyzes code diffs, diagnoses stack traces using multimodal LLMs, and drafts verified PR solutions autonomously.",
    liveUrl: "https://example.com",
    repoUrl: "https://github.com/example/ai-agent-engine"
  },
  {
    id: "proj-2",
    title: "Next-Gen Electric Vehicle Telemetry",
    subtitle: "Tactile diagnostics & companion interface for high-performance adventure mobility",
    category: "Design & Brand",
    year: "2026",
    status: "View Work",
    featured: true,
    span: "md:col-span-5",
    aspect: "aspect-[4/5]",
    role: "Lead Product Designer & UI Engineer",
    stack: "React Native, Three.js, WebGL, Swift, Rust, Bluetooth LE",
    metrics: "#1 Product of the Day • 99.98% telemetry uptime",
    image: "https://images.unsplash.com/photo-1509198397868-475647b2a1e5?auto=format&fit=crop&w=1200&q=85",
    description: "Architected a zero-latency spatial telemetry dashboard giving drivers instant battery cell analytics, elevation routing, and hardware diagnostics in extreme offline environments.",
    liveUrl: "https://example.com",
    repoUrl: "https://github.com/example/ev-telemetry"
  },
  {
    id: "proj-3",
    title: "HyperScale Cloud Financial OS",
    subtitle: "Zero-latency multi-currency treasury & automated reconciliation engine",
    category: "Full-Stack",
    year: "2025",
    status: "View Work",
    featured: true,
    span: "md:col-span-5",
    aspect: "aspect-[4/5]",
    role: "Senior Full-Stack Engineer",
    stack: "TypeScript, Go, Apache Kafka, TimescaleDB, Tailwind CSS",
    metrics: "$40M+ transaction volume processed • Sub-50ms sync",
    image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&w=1200&q=85",
    description: "Engineered real-time multi-currency ledger streaming. Handles high-concurrency balance locking, real-time audit logs, and instant webhook dispatches across banking APIs.",
    liveUrl: "https://example.com",
    repoUrl: "https://github.com/example/finance-os"
  },
  {
    id: "proj-4",
    title: "Spatial Audio & Generative Synth Studio",
    subtitle: "Browser-based modular synthesizer engine compiled to WebAssembly with 120fps DSP canvas",
    category: "Open Source",
    year: "2025",
    status: "View Work",
    featured: true,
    span: "md:col-span-7",
    aspect: "aspect-[16/10]",
    role: "Creator & Maintainer",
    stack: "Rust, WebAssembly, WebAudio API, Canvas 2D, AudioWorklet",
    metrics: "3.4k+ GitHub Stars • 15,000+ active sound designers",
    image: "https://images.unsplash.com/photo-1511671782779-c97d3d27a1d4?auto=format&fit=crop&w=1400&q=85",
    description: "Compiled a custom C++ & Rust DSP audio synthesizer into a WebAudio Worklet with zero garbage collection spikes. Built a node-graph wiring interface allowing patch cable routing at 120fps.",
    liveUrl: "https://example.com",
    repoUrl: "https://github.com/example/web-modular-synth"
  },
  {
    id: "proj-5",
    title: "Neural Second-Brain Knowledge Graph",
    subtitle: "Interactive 3D vector clustering and semantic retrieval across personal notes & PDFs",
    category: "AI & ML",
    year: "2025",
    status: "View Work",
    featured: true,
    span: "md:col-span-12",
    aspect: "aspect-[21/9]",
    role: "Solo Creator",
    stack: "Next.js 15, OpenAI Embeddings, pgvector, D3.js, WebGL",
    metrics: "Indexes 100,000+ markdown notes in under 3.5s",
    image: "https://images.unsplash.com/photo-1634017839464-5c339ebe3cb4?auto=format&fit=crop&w=1600&q=85",
    description: "A distraction-free personal knowledge operating system that maps notes, code snippets, and journal entries into an interactive force-directed 3D constellation, surfacing unexpected connections in your thinking.",
    liveUrl: "https://example.com",
    repoUrl: "https://github.com/example/neural-knowledge-graph"
  },
  {
    id: "proj-6",
    title: "Kinetix Design System & Token Engine",
    subtitle: "Accessible enterprise token architecture & 60+ Radix-based design primitives",
    category: "Design & Brand",
    year: "2025",
    status: "View Work",
    featured: false,
    role: "Design Systems Lead",
    stack: "React, Storybook, Tailwind CSS, Figma REST API",
    metrics: "Adopted across 14 engineering squads • 100% WCAG AAA",
    image: "https://images.unsplash.com/photo-1507238691740-187a5b1d37b8?auto=format&fit=crop&w=1000&q=80",
    description: "Unified disparate multi-brand applications under a cohesive token architecture with automated Figma token synchronization via GitHub Actions.",
    liveUrl: "https://example.com",
    repoUrl: "https://github.com/example/kinetix-ui"
  },
  {
    id: "proj-7",
    title: "EdgeDeploy Serverless CLI",
    subtitle: "Zero-configuration container deployment to 35+ global edge PoPs in under 8 seconds",
    category: "Open Source",
    year: "2024",
    status: "View Work",
    featured: false,
    role: "Author",
    stack: "Go, Docker API, Firecracker MicroVMs, Cloudflare Workers",
    metrics: "2.1k GitHub Stars • 65k+ CLI downloads",
    image: "https://images.unsplash.com/photo-1526374965328-7f61d4dc18c5?auto=format&fit=crop&w=1000&q=80",
    description: "A single binary CLI that packages Docker containers and provisions microVMs globally with automatic SSL certificate management and instant health check rollbacks.",
    liveUrl: "https://example.com",
    repoUrl: "https://github.com/example/edgedeploy"
  },
  {
    id: "proj-8",
    title: "Veloce Luxury Headless Commerce",
    subtitle: "Sub-second luxury storefront experience with 3D product visualizer",
    category: "Full-Stack",
    year: "2024",
    status: "View Work",
    featured: false,
    role: "Lead Frontend Architect",
    stack: "Next.js, Shopify Storefront GraphQL, Three.js, GSAP",
    metrics: "+42% checkout conversion lift • 99 Lighthouse score",
    image: "https://images.unsplash.com/photo-1523275335684-37898b6baf30?auto=format&fit=crop&w=1000&q=80",
    description: "Created an editorial e-commerce experience featuring smooth raytraced 3D product customization, custom cursor physics, and instant edge-cached navigation.",
    liveUrl: "https://example.com",
    repoUrl: "https://github.com/example/veloce-commerce"
  },
  {
    id: "proj-9",
    title: "BioPulse Wearable Health Platform",
    subtitle: "Continuous HRV, recovery metrics, and circadian rhythm prediction algorithm",
    category: "AI & ML",
    year: "2024",
    status: "View Work",
    featured: false,
    role: "Full-Stack & ML Engineer",
    stack: "SwiftUI, Python, PyTorch, FastAPI, TimescaleDB",
    metrics: "94% accuracy in early training fatigue detection",
    image: "https://images.unsplash.com/photo-1576091160399-112ba8d25d1d?auto=format&fit=crop&w=1000&q=80",
    description: "Ingests raw Apple Watch and biometric sensor streams to detect micro-deviations in parasympathetic nervous response and calculate optimal training windows.",
    liveUrl: "https://example.com",
    repoUrl: "https://github.com/example/biopulse"
  },
  {
    id: "proj-10",
    title: "Chronos Multiplayer Infinite Canvas",
    subtitle: "Low-latency visual collaboration with CRDT state synchronization",
    category: "Full-Stack",
    year: "2024",
    status: "View Work",
    featured: false,
    role: "Creator",
    stack: "TypeScript, Yjs (CRDT), WebGL Canvas, PartyKit",
    metrics: "Supports 250+ concurrent cursors at 60fps",
    image: "https://images.unsplash.com/photo-1581291518857-4e27b48ff24e?auto=format&fit=crop&w=1000&q=80",
    description: "A visual brainstorming workspace with zero merge conflicts, offline-first local persistence, and peer-to-peer presence indicators.",
    liveUrl: "https://example.com",
    repoUrl: "https://github.com/example/chronos-canvas"
  },
  {
    id: "proj-11",
    title: "VisionOCR Automated Invoice Extractor",
    subtitle: "Multimodal LLM pipeline converting arbitrary PDF financial records to clean JSON",
    category: "AI & ML",
    year: "2023",
    status: "View Work",
    featured: false,
    role: "AI Engineer",
    stack: "Python, GPT-4o Vision API, Celery, Redis, React",
    metrics: "Saved 1,400+ monthly accounting hours",
    image: "https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?auto=format&fit=crop&w=1000&q=80",
    description: "Automated ingestion pipeline with human-in-the-loop confidence scoring and direct synchronization into QuickBooks and NetSuite.",
    liveUrl: "https://example.com",
    repoUrl: "https://github.com/example/vision-ocr"
  },
  {
    id: "proj-12",
    title: "NomadPass Zero-Knowledge Identity",
    subtitle: "Privacy-preserving credentials for global co-working and digital nomad hubs",
    category: "Full-Stack",
    year: "2023",
    status: "View Work",
    featured: false,
    role: "Full-Stack & Web3 Engineer",
    stack: "Solidity, Next.js, SnarkJS, Wagmi, Tailwind CSS",
    metrics: "1st Place Winner @ Global Web3 Hackathon",
    image: "https://images.unsplash.com/photo-1639762681485-074b7f938ba0?auto=format&fit=crop&w=1000&q=80",
    description: "Cryptographic membership verification enabling digital nomads to unlock physical IoT door locks and claim co-working spaces without revealing government ID or passport numbers.",
    liveUrl: "https://example.com",
    repoUrl: "https://github.com/example/nomadpass"
  },
  {
    id: "proj-13",
    title: "Aether Kinetic Editorial Specimen",
    subtitle: "Interactive variable typography playground and font specimen showcase",
    category: "Design & Brand",
    year: "2023",
    status: "View Work",
    featured: false,
    role: "Creative Technologist",
    stack: "HTML5, CSS Variable Fonts, GSAP ScrollTrigger",
    metrics: "Awwwards Site of the Day nominee",
    image: "https://images.unsplash.com/photo-1457369804613-52c61a468e7d?auto=format&fit=crop&w=1000&q=80",
    description: "A typography microsite celebrating Swiss brutalist grids, fluid variable font optical weights tied to scroll acceleration, and interactive glyph dissection.",
    liveUrl: "https://example.com",
    repoUrl: "https://github.com/example/aether-type"
  },
  {
    id: "proj-14",
    title: "SqlGuard AST Query Analyzer",
    subtitle: "Automated GitHub Action detecting slow database migrations & unindexed N+1 queries",
    category: "Open Source",
    year: "2023",
    status: "View Work",
    featured: false,
    role: "Author",
    stack: "Rust, PostgreSQL AST Parser, GitHub Actions API",
    metrics: "950+ GitHub Stars • Used in 300+ repositories",
    image: "https://images.unsplash.com/photo-1555066931-4365d14bab8c?auto=format&fit=crop&w=1000&q=80",
    description: "Analyzes raw SQL and ORM queries during pull requests to warn engineering teams before table-locking DDL statements or performance bottlenecks reach production.",
    liveUrl: "https://example.com",
    repoUrl: "https://github.com/example/sqlguard"
  },
  {
    id: "proj-15",
    title: "PulseCast Asynchronous Audio Memos",
    subtitle: "90-second voice standups with automated transcription & semantic key-takeaways",
    category: "Full-Stack",
    year: "2022",
    status: "View Work",
    featured: false,
    role: "Solo Creator",
    stack: "React Native, Supabase, Whisper AI, Node.js",
    metrics: "4,500+ active beta team members",
    image: "https://images.unsplash.com/photo-1590602847861-f357a9332bbc?auto=format&fit=crop&w=1000&q=80",
    description: "Eliminated unnecessary status meetings with bite-sized voice updates automatically transcribed, organized by topic, and dispatched directly into team channels.",
    liveUrl: "https://example.com",
    repoUrl: "https://github.com/example/pulsecast"
  },
  {
    id: "proj-16",
    title: "Minimalist E-Ink Hardware OS Concept",
    subtitle: "Tactile rotary dial UI and distraction-free operating system for writers",
    category: "Design & Brand",
    year: "2026",
    status: "Coming soon",
    featured: false,
    role: "Industrial & UI Designer",
    stack: "Figma, Blender 3D, Embedded C++, FreeRTOS",
    metrics: "Working prototype in alpha testing",
    image: "https://images.unsplash.com/photo-1544716278-ca5e3f4abd8c?auto=format&fit=crop&w=1000&q=80",
    description: "Exploring calm computing paradigms: combining high-contrast monochrome typography with tactile physical rotary inputs to help writers reach sustained flow states.",
    liveUrl: "https://example.com",
    repoUrl: "https://github.com/example/eink-os"
  }
];

/**
 * CAREER TIMELINE DATA (Kyson Dana `/about` Table Format)
 */
const EXPERIENCE_DATA = [
  {
    year: "2025 — Present",
    company: "Next-Gen Tech Co / Startup",
    type: "/ In-house",
    role: "Lead Systems Architect & Product Designer",
    location: "San Francisco, CA"
  },
  {
    year: "2023 — 2025",
    company: "Autonomous AI Lab",
    type: "/ In-house",
    role: "Senior Full-Stack Engineer",
    location: "Remote"
  },
  {
    year: "2021 — 2023",
    company: "Creative Engineering Studio",
    type: "/ Freelance",
    role: "Staff Creative Technologist",
    location: "Global"
  },
  {
    year: "2020 — 2021",
    company: "Venture-Backed Fintech",
    type: "/ Contract",
    role: "Frontend & Design Systems Engineer",
    location: "New York, NY"
  },
  {
    year: "2018 — 2020",
    company: "Research & Open Source Foundation",
    type: "/ Foundation",
    role: "Software Researcher",
    location: "Seattle, WA"
  }
];

/**
 * 3-COLUMN CAPABILITIES MATRIX
 */
const CAPABILITIES_DATA = [
  {
    title: "01. Product Engineering",
    skills: [
      "Full-Stack Web Applications (Next.js / React)",
      "Scalable Backend APIs & Microservices (Node / Go / Python)",
      "Database Architecture (PostgreSQL, Redis, TimescaleDB)",
      "Cloud Infrastructure & DevOps (Docker, AWS, Cloudflare)",
      "Real-Time Systems & WebSockets",
      "Performance Optimization & Sub-50ms Latency"
    ]
  },
  {
    title: "02. AI & Interactive Design",
    skills: [
      "LLM Agent Orchestration & RAG Pipelines",
      "Design Systems & Component Token Architectures",
      "Interactive Motion Design (GSAP / Lenis / Canvas)",
      "Rapid Zero-to-One Prototype Crafting",
      "Human-Centered UX & Product Framing",
      "Spatial & Hardware Interface Prototyping"
    ]
  },
  {
    title: "03. Leadership & Strategy",
    skills: [
      "Technical Roadmapping & Systems Architecture",
      "Product Vision, MVP Scoping & Launch Execution",
      "Open Source Governance & Tool Maintenance",
      "Engineering Mentorship & Architectural Reviews",
      "High-Conversion Developer Experience (DX)",
      "Technical Writing & Documentation"
    ]
  }
];
