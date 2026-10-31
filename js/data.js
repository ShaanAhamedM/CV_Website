/**
 * ==========================================================================
 * MASTER PORTFOLIO DATASET — SHAAN AHAMED M
 * Modeled after Kyson Dana's Editorial Design System & High-Volume Project Vault
 * ==========================================================================
 */

const SITE_CONFIG = {
  fullName: "Shaan Ahamed M",
  shortTitle: "Physical AI & Autonomous Systems Engineer",
  availabilityStatus: "Open for internships (Robotics & Physical AI) — 2026/2027",
  location: "Vellore, India / Remote",
  email: "shaanahamedm@gmail.com",
  heroEyebrow: "VIT CSE • National Hackathon Winner • Physical AI Specialist",
  heroHeadlineMain: "Hi, I'm ",
  heroHeadlineAccent: "Shaan",
  heroHeadlineEnd: " — Physical AI Builder, Embedded Systems Engineer & Robotics Specialist for real-world autonomy.",
  heroSubCopy: "CSE undergrad at VIT Vellore and National Hackathon Runner-up specializing in on-device AI and hardware-software integration. I build low-latency, zero-cloud physical AI systems—bridging autonomous rocker-bogie rovers and edge vision pipelines with real-world mechanical actuation.",
  philosophyTitle: "Stay curious and Engineering machines that see, reason, and act.",
  philosophyBody: "True engineering lies in making complex systems work seamlessly together to solve real human problems economically. From training accelerated vision models to bridging embedded firmware with intuitive software, I focus on building accessible, zero-cloud-dependent tools that directly impact how people interact with the physical world.",
  resumePdfUrl: "assets/ShaanAhamedM_Resume.pdf",
  socials: {
    github: "https://github.com/ShaanAhamedM",
    linkedin: "https://www.linkedin.com/in/shaanahamedm/",
    email: "shaanahamedm@gmail.com"
  }
};

/**
 * PROJECT VAULT:
 * High-volume archive showcasing Shaan's hardware, Physical AI, robotics,
 * vision pipelines, and system software.
 */
const PROJECTS_DATA = [
  {
    id: "proj-vision-stick",
    title: "Vision Stick: Zero-Cloud AI Smart Cane",
    subtitle: "Assistive IoT device pairing lightweight stick sensors with on-device phone edge inference",
    category: "Physical AI & Robotics",
    year: "2026",
    status: "View Work",
    featured: true,
    span: "md:col-span-7",
    aspect: "aspect-[16/10]",
    role: "Lead Hardware & Edge AI Architect",
    stack: "Embedded C, ESP32, OpenCV, Android / Java, Gyroscope & Ultrasonic",
    metrics: "2nd Place @ INNOHACK '26 (₹30k Prize) • Sub-80ms Edge Inference",
    image: "assets/images/vision_stick_win.jpg",
    gallery: ["assets/images/vision_stick_hardware.png"],
    description: "An ultra-affordable smart cane engineered for the visually impaired. Built to solve the prohibitive cost of assistive tech by offloading compute to the user's smartphone. Connects lightweight physical sensors (camera, ultrasonic distance, gyroscope) via ESP32 to a background service that delivers real-time auditory scene narration, GPS guidance, and emergency fall detection with zero cloud latency.",
    liveUrl: "#",
    repoUrl: "https://github.com/ShaanAhamedM/VisionStick_Codaholics"
  },
  {
    id: "proj-rocker-bogie",
    title: "Operation Axiom: Autonomous Rocker-Bogie Rover",
    subtitle: "Search & rescue physical autonomy under partial observability (POMDP) across rough terrain",
    category: "Physical AI & Robotics",
    year: "2026",
    status: "View Work",
    featured: true,
    span: "md:col-span-5",
    aspect: "aspect-[4/5]",
    role: "Robotics & Autonomy Engineer",
    stack: "Python, C++, ROS 2, POMDP, Rocker-Bogie Kinematics, SLAM, LiDAR",
    metrics: "Autonomous Search & Rescue under Partial Observability",
    image: "assets/images/operation_axiom_3d.png",
    gallery: ["assets/images/operation_axiom_bayesian.png"],
    description: "Designed and engineered an autonomous rocker-bogie planetary exploration rover capable of traversing extreme, unstructured obstacles. Implements Partially Observable Markov Decision Processes (POMDP) for autonomous search, rescue, and obstacle traversal under noisy sensor telemetry.",
    liveUrl: "#",
    repoUrl: "https://github.com/ShaanAhamedM/WallE_Eve"
  },
  {
    id: "proj-nerf-spatial",
    title: "2D Video to Walkable 3D Spatial Environment",
    subtitle: "Therapeutic spatial reconstruction platform using NeRF & Unity WebGL for memory-loss recall",
    category: "AI & Vision",
    year: "2025",
    status: "View Work",
    featured: true,
    span: "md:col-span-5",
    aspect: "aspect-[4/5]",
    role: "Vision & Spatial Computing Engineer",
    stack: "Nerfstudio, PyTorch, Unity WebGL, React, Depth Estimation",
    metrics: "DevJams '25 Semi-Finalist (Google Developer Groups) • 60fps WebGL",
    image: "assets/images/nerf_spatial_memory.jpg",
    description: "A therapeutic web application that transforms standard 2D smartphone videos into fully walkable 3D environments. Built using React, Nerfstudio, and Unity WebGL, enabling memory-loss and Alzheimer's patients to actively explore cherished past moments. Spatial immersion triggers deep emotional recall, helping patients re-familiarize with their surroundings.",
    liveUrl: "#",
    repoUrl: "https://github.com/ShaanAhamedM"
  },
  {
    id: "proj-failure-clock",
    title: "FailureClock: Cyclone Impact & Infrastructure Forecaster",
    subtitle: "Predictive physical AI modeling cyclone damage, storm surge, and civil infrastructure collapse",
    category: "AI & Vision",
    year: "2025",
    status: "View Work",
    featured: true,
    span: "md:col-span-7",
    aspect: "aspect-[16/10]",
    role: "Lead ML & Predictive Systems Engineer",
    stack: "Python, PyTorch, Geospatial Analytics, Weather Radar Telemetry, FastAPI",
    metrics: "Predicts municipal infrastructure vulnerability ahead of landfall",
    image: "assets/images/failure_clock.png",
    description: "Real-time cyclone impact predictive model that forecasts civil infrastructure failure, storm surges, and structural vulnerability using geospatial satellite datasets and multi-sensor telemetry.",
    liveUrl: "#",
    repoUrl: "https://github.com/ShaanAhamedM/FailureClock"
  },
  {
    id: "proj-smart-khet",
    title: "SmartKhet: IoT Agro-Telemetry & Edge Sensing",
    subtitle: "Offline-first agricultural IoT platform connecting soil probes with actionable mobile telemetry",
    category: "IoT & Embedded",
    year: "2025",
    status: "View Work",
    featured: false,
    role: "Embedded Systems & Mobile Engineer",
    stack: "Kotlin, ESP32, C++, LoRa / MQTT, Soil Chemistry Sensors, Jetpack Compose",
    metrics: "Zero-cloud local mesh sync • Deployed across local test plots",
    image: "https://images.unsplash.com/photo-1581092160607-ee22621dd758?auto=format&fit=crop&w=1600&q=85",
    description: "Empowering rural farmers with real-time agronomic intelligence. Custom-fabricated ESP32 sensor probes monitor soil nitrogen, moisture, and micro-climate metrics, broadcasting telemetry to an offline-first Android interface designed for sustainable, data-driven farming.",
    liveUrl: "#",
    repoUrl: "https://github.com/ShaanAhamedM/SmartKhet"
  },
  {
    id: "proj-fytchk",
    title: "fYtchk: Neural Virtual Try-On & Personal Stylist",
    subtitle: "AI wardrobe curator and virtual try-on engine matching clothes to user silhouettes",
    category: "AI & Vision",
    year: "2025",
    status: "View Work",
    featured: false,
    role: "Full-Stack AI Developer",
    stack: "Python, Diffusion VTON Models, OpenCV, HTML/CSS, PyTorch",
    metrics: "High-fidelity warp alignment on human pose silhouettes",
    image: "assets/images/fytchk_sample.png",
    description: "Transforms the digital apparel experience by combining a Virtual Try-On (VTON) system with an intelligent outfit picker. Users visualize garments on their own bodies while the model curates tailored looks based on mood, climate, and occasion.",
    liveUrl: "#",
    repoUrl: "https://github.com/ShaanAhamedM/fYtchk"
  },
  {
    id: "proj-rsna-knee",
    title: "RSNA Knee Abnormality: Clinical MRI Diagnostic Engine",
    subtitle: "Multi-Modal semi-supervised deep learning pipeline for musculoskeletal pathology detection",
    category: "AI & Vision",
    year: "2025",
    status: "View Work",
    featured: false,
    role: "Lead Deep Learning & Radiomics Engineer",
    stack: "Python, PyTorch, DenseNet, Radiomics, GBDT, Vision Transformers, DICOM",
    metrics: "Sub-ROI multi-plane extraction across 4,400+ clinical studies",
    image: "assets/images/rsna_knee_mri.png",
    description: "Commercial-grade musculoskeletal MRI diagnostic pipeline trained on 4,400+ clinical knee studies across coronal, sagittal, and axial planes. Integrates semi-supervised pseudo-labeling, radiomics extraction, and GBDT-vision ensembling for automated detection of ACL tears, meniscal lesions, and osteoarthritis.",
    liveUrl: "#",
    repoUrl: "https://github.com/ShaanAhamedM/RSNA-Knee-Abnormality-Detection"
  },
  {
    id: "proj-wafer-anomaly",
    title: "Wafer Anomaly Detector: Silicon Defect Vision",
    subtitle: "Automated optical inspection detecting microscopic silicon wafer etch faults",
    category: "AI & Vision",
    year: "2025",
    status: "View Work",
    featured: false,
    role: "Computer Vision Researcher",
    stack: "Python, PyTorch, Convolutional Neural Networks, OpenCV, Jupyter",
    metrics: "Sub-millimeter micro-crack & contaminant detection",
    image: "assets/images/wafer_anomaly_dashboard.png",
    description: "Deep learning automated optical inspection (AOI) pipeline for semiconductor silicon wafers, categorizing microscopic etch faults, surface scratches, and contamination anomalies at production scale.",
    liveUrl: "#",
    repoUrl: "https://github.com/ShaanAhamedM/WaferAnomalyDetector"
  },
  {
    id: "proj-developer-desktop",
    title: "DeveloperDesktop: Minimalist Nordic Linux Workspace",
    subtitle: "Keyboard-driven Linux developer desktop with mathematical symmetry & sub-millisecond metrics",
    category: "Systems & Cloud",
    year: "2024",
    status: "View Work",
    featured: true,
    span: "md:col-span-12",
    aspect: "aspect-[21/9]",
    role: "Systems Architect",
    stack: "Python, Shell/Bash, C, Wayland / Hyprland, Linux Kernel API",
    metrics: "Sub-millisecond system telemetry • Unified Nordic Charcoal theme",
    image: "assets/images/developer_desktop.png",
    gallery: ["assets/images/developer_desktop_workstation.png"],
    description: "A keyboard-driven developer environment built around geometric symmetry and custom low-overhead daemon monitors. Features unified Nordic Charcoal theming and instant system diagnostic overlays.",
    liveUrl: "#",
    repoUrl: "https://github.com/ShaanAhamedM/DeveloperDesktop"
  },
  {
    id: "proj-glidefix",
    title: "GlideFix: Native macOS Momentum Smooth-Scroll",
    subtitle: "Menu Bar utility bringing 120Hz ProMotion inertial physics to third-party mice",
    category: "Systems & Cloud",
    year: "2024",
    status: "View Work",
    featured: false,
    role: "Systems Engineer",
    stack: "Swift, macOS AppKit, CoreGraphics Event Taps, C",
    metrics: "120Hz ProMotion inertial physics for third-party mice",
    image: "https://images.unsplash.com/photo-1527864550417-7fd91fc51a46?auto=format&fit=crop&w=1000&q=80",
    description: "Native macOS menu bar utility that intercepts raw USB HID mouse wheel events and injects smooth cubic-bezier momentum scrolling, bringing trackpad-grade scroll physics to external mice.",
    liveUrl: "#",
    repoUrl: "https://github.com/ShaanAhamedM/GlideFix"
  },
  {
    id: "proj-beyond-translation",
    title: "BeyondTranslation: Multimodal Speech & Dialect NLP",
    subtitle: "Speech-to-speech translation preserving emotional cadence and idiomatic nuance",
    category: "AI & Vision",
    year: "2024",
    status: "View Work",
    featured: false,
    role: "NLP & ML Engineer",
    stack: "Python, Whisper AI, HuggingFace Transformers, PyTorch",
    metrics: "Cross-dialect colloquial translation with zero semantic drift",
    image: "assets/images/beyond_translation.png",
    description: "An advanced speech pipeline engineered to bridge colloquial regional dialect barriers without losing emotional emphasis, cultural phrasing, or vocal inflection.",
    liveUrl: "#",
    repoUrl: "https://github.com/ShaanAhamedM/BeyondTranslation-FlyingACE"
  },
  {
    id: "proj-ntfs-assistant",
    title: "NTFSAssistant: macOS Low-Level Storage Mount Daemon",
    subtitle: "Seamless read-write mount management for external Windows drives on macOS",
    category: "Systems & Cloud",
    year: "2024",
    status: "View Work",
    featured: false,
    role: "Systems Developer",
    stack: "Swift, Objective-C, DiskArbitration framework, POSIX",
    metrics: "Zero-latency automatic NTFS read-write volume mounting",
    image: "https://images.unsplash.com/photo-1555066931-4365d14bab8c?auto=format&fit=crop&w=1000&q=80",
    description: "Lightweight macOS daemon managing external NTFS hard drives, automatically applying native read/write mount points upon drive connection without slow third-party drivers.",
    liveUrl: "#",
    repoUrl: "https://github.com/ShaanAhamedM/NTFSAssistant_MacOS"
  },
  {
    id: "proj-kinetisync",
    title: "KinetiSync: Embedded Hardware Telemetry Streamer",
    subtitle: "High-throughput binary protocol streaming microcontroller telemetry directly to web dashboards",
    category: "IoT & Embedded",
    year: "2025",
    status: "View Work",
    featured: false,
    role: "Systems & TypeScript Engineer",
    stack: "TypeScript, Node.js, WebSockets, Serial COM, Buffer Streams",
    metrics: "Sub-5ms hardware-to-browser telemetry stream",
    image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&w=1000&q=80",
    description: "High-speed communication library bridging serial streams from ESP32 / Arduino devices directly to web interfaces over low-latency binary WebSockets with zero packet loss.",
    liveUrl: "#",
    repoUrl: "https://github.com/ShaanAhamedM/KinetiSync"
  }
];

/**
 * CAREER & EDUCATION TIMELINE (Kyson Dana `/about` Table Format)
 */
const EXPERIENCE_DATA = [
  {
    year: "2025 — Present",
    company: "Vellore Institute of Technology (VIT)",
    type: "/ B.Tech CSE",
    role: "Computer Science Undergrad • Physical AI & Autonomous Robotics",
    location: "Vellore, India"
  },
  {
    year: "2026",
    company: "INNOHACK '26 National Hackathon",
    type: "/ 2nd Place Winner",
    role: "Awarded 2nd Prize (₹30k INR) for 'Vision Stick' assistive IoT device",
    location: "National"
  },
  {
    year: "2025",
    company: "DevJams '25 (by Google Developer Groups)",
    type: "/ Semi-Finalist",
    role: "Shortlisted in VIT's flagship hackathon for 2D-to-3D Spatial NeRFs",
    location: "Vellore, India"
  },
  {
    year: "2023 — 2025",
    company: "Delhi Public School (CBSE)",
    type: "/ Class XII",
    role: "Senior Secondary School Certificate — 90% Distinction",
    location: "India"
  },
  {
    year: "2021 — 2023",
    company: "Delhi Public School (CBSE)",
    type: "/ Class X",
    role: "Secondary School Examination — 90% Distinction",
    location: "India"
  }
];

/**
 * 3-COLUMN CAPABILITIES MATRIX
 */
const CAPABILITIES_DATA = [
  {
    title: "01. Physical AI & Robotics",
    skills: [
      "Autonomous Rocker-Bogie Rover Kinematics & Mechanics",
      "POMDP Autonomy (Partially Observable Decision Processes)",
      "Edge AI & On-Device Computer Vision (OpenCV, PyTorch)",
      "Sensor Integration (Ultrasonic, Gyroscope, LiDAR, Camera)",
      "Microcontroller Prototyping (ESP32, Arduino, ARM)",
      "Zero-Cloud Low-Latency Firmware (Embedded C / C++)"
    ]
  },
  {
    title: "02. AI & Vision Engineering",
    skills: [
      "NeRF (Neural Radiance Fields) & 3D Spatial Reconstruction",
      "Depth Estimation & Unity WebGL Integration",
      "Computer Vision & Automated Optical Defect Detection",
      "Virtual Try-On (VTON) Diffusion Pipelines",
      "High-Performance Python & C++ Algorithmic Optimization",
      "Predictive Geospatial Anomaly Modeling"
    ]
  },
  {
    title: "03. Systems & Rapid Prototyping",
    skills: [
      "National Hackathon Champion (INNOHACK '26 2nd Place)",
      "High-Pressure Zero-to-One Rapid MVP Development",
      "Hardware-Software Bridging (Firmware to Android / Web)",
      "Resource-Constrained Embedded Optimization",
      "Native Systems Programming (Swift macOS & Linux Wayland)",
      "Assistive Healthcare & High-Impact Tech Design"
    ]
  }
];
