export const projectCategories = [
  {
    id: "web",
    title: "Web Projects",
    subtitle: "Complete web systems with frontend, backend, database, authentication, and APIs",
  },
  {
    id: "mobile",
    title: "Mobile Apps",
    subtitle: "Android and mobile-based applications",
  },
  {
    id: "qa",
    title: "QA & Test Automation",
    subtitle:
      "Manual testing, test cases, bug reports, API testing, Playwright automation, and QA documentation",
  },
  {
    id: "frontend-uiux",
    title: "Front-End & UI/UX",
    subtitle:
      "Responsive interfaces, React components, animations, Figma designs, prototypes, and user-focused layouts",
  },
];

export const projects = [
  {
    id: 1,
    category: "web",
    title: "CampusOps Hub – Smart Campus Operations System",
    type: "Full Stack Web Application",
    stackLabel: "Spring Boot + React",
    role: "Led the project, owning the authentication, OAuth integration, role management, and the notification system.",
    description:
      "A full-stack Smart Campus Operations Hub developed for university management. The system supports facility booking, maintenance ticketing, and real-time notifications with role-based access control.",
    technologies: [
      "Spring Boot",
      "React (Vite)",
      "MySQL",
      "Spring Security",
      "OAuth 2.0 (Google)",
      "JPA / Hibernate",
      "Tailwind CSS",
      "GitHub Actions",
    ],
    highlights: [
      "Led the team and coordinated full project development",
      "Implemented OAuth 2.0 login and secure role-based access (USER, ADMIN, TECHNICIAN)",
      "Developed notification system for bookings, tickets, and system events",
      "Designed protected routes and backend security using Spring Security",
      "Integrated CI workflow using GitHub Actions for build and testing",
      "Ensured clean REST API design and modular architecture",
    ],
    image: `${import.meta.env.BASE_URL}assets/images/CampusOps.png`,
    github: "https://github.com/D0017/it3030-paf-2026-smart-campus-group79",
    demo: null,
    featured: true,
  },
  {
    id: 2,
    category: "web",
    title: "Pink Aura Salon Management System",
    type: "Web App",
    stackLabel: "MERN Stack (Full-Stack)",
    role: "Led the salon management system project, owning the product vision and user role management.",
    description:
      "Full-stack salon management platform with appointment scheduling, staff management, product inventory, and AI-powered chatbot.",
    technologies: ["MongoDB", "Express", "React", "Node.js", "RESTful APIs"],
    highlights: [
      "Image uploads using Azure Blob Storage",
      "Role-based admin/staff dashboard",
      "Integrated marketing and review modules",
    ],
    image: `${import.meta.env.BASE_URL}assets/images/pink-aura.png`,
    github: "https://github.com/kezu1003/Pink-Aura-Salon-Management-System",
    demo: null,
    featured: true,
  },
  {
    id: 3,
    category: "web",
    title: "StudySync",
    type: "Web App",
    stackLabel: "React + Spring Boot (Full-Stack)",
    role: "Led the project and implemented user registration, login, role-based access control, admin user management, module setup, and student grouping workflows.",
    description:
      "A full-stack academic group and learning management system designed to support structured student grouping, lecturer coordination, project collaboration, resource sharing, and academic workflow management within a university environment.",
    technologies: [
      "React",
      "Vite",
      "Tailwind CSS",
      "Spring Boot",
      "Spring Security",
      "Spring Data JPA",
      "MySQL",
      "REST APIs",
    ],
    highlights: [
      "Student and lecturer registration with secure login flow",
      "Admin dashboard for user, module, and group administration",
      "Module enrollment, group joining, and leadership request workflow",
    ],
    image: `${import.meta.env.BASE_URL}assets/images/studysync.png`,
    github: "https://github.com/D0017/studysync",
    demo: null,
    featured: true,
  },
  {
    id: 4,
    category: "mobile",
    title: "Daily Bloom – Wellness Tracker App",
    type: "Mobile App",
    stackLabel: "Android (Kotlin)",
    role: "Designed and developed the Android wellness tracking application.",
    description:
      "Android wellness tracker built with Kotlin. Features habit tracking, mood logging, hydration reminders, and data visualization using charts.",
    technologies: ["Kotlin", "Android Studio", "Room DB", "ViewModel", "LiveData"],
    highlights: [
      "MVVM architecture with clean separation of concerns",
      "Local persistence with Room and custom DAOs",
      "Notification scheduling for reminders",
    ],
    image: `${import.meta.env.BASE_URL}assets/images/Daily BLOOM.png`,
    github: "https://github.com/D0017/DailyBloom",
    demo: null,
    featured: false,
  },
  {
  id: 5,
  category: "qa",
  title: "QA Test Case Manager",
  type: "QA Automation / Testing Tool",
  stackLabel: "Python + pytest",
  role: "Designed and developed a QA-focused command-line tool for managing test cases and generating testing reports.",
  description:
    "A Python command-line application designed to help software testers manage test cases, track execution status, import bulk test data, and generate QA summary reports.",
  technologies: [
    "Python",
    "pytest",
    "CSV File Handling",
    "Command-Line Interface",
    "Test Case Management",
    "QA Reporting"
  ],
  highlights: [
    "Created, updated, searched, filtered, and deleted test cases through a CLI workflow",
    "Implemented CSV-based persistent storage and bulk test case importing",
    "Generated QA summary reports with pass, fail, blocked, not-run, and pass-rate statistics",
    "Validated user inputs for test priority, status, empty fields, and duplicate test case IDs",
    "Wrote automated unit tests using pytest for core testing logic"
  ],
  image: `${import.meta.env.BASE_URL}assets/images/qa-test-case-manager.png`,
  github: "https://github.com/D0017/QA-test-case-manager",
  demo: null,
  featured: false
},
{
  id: 6,
  category: "frontend-uiux",
  title: "Personal Portfolio Website",
  type: "Front-End Development / UI Portfolio",
  stackLabel: "React + Vite",
  role: "Designed and developed a responsive portfolio website to showcase projects, skills, and professional profile.",
  description:
    "A modern personal portfolio website built to present my software development, QA, mobile, and UI/UX-related work with smooth interactions, responsive layouts, and project-focused sections.",
  technologies: [
    "React",
    "Vite",
    "JavaScript",
    "CSS",
    "Framer Motion",
    "Responsive Design",
    "GitHub Pages"
  ],
  highlights: [
    "Designed and developed a custom responsive portfolio interface",
    "Built animated sections for hero, about, skills, projects, contact, and footer",
    "Created an interactive project section with category-based navigation",
    "Used React components and reusable data-driven project structures",
    "Deployed the portfolio using GitHub Pages"
  ],
  image: `${import.meta.env.BASE_URL}assets/images/portfolio.png`,
  github: null,
  demo: "https://d0017.github.io/My-Portfolio/",
  featured: false
},
{
  id: 7,
  category: "qa",
  title: "Sinhala Transliteration Testing with Playwright",
  type: "QA Automation Project",
  stackLabel: "Python + Playwright + Excel",
  role: "Developed an automated QA testing project to validate Singlish-to-Sinhala transliteration accuracy.",
  description:
    "A QA automation project designed to test the accuracy of a chat-style Singlish-to-Sinhala transliteration system. The automation reads test cases from an Excel file, enters Singlish inputs into the web application, captures the actual Sinhala output, compares it with the expected output, and updates the test result status.",
  technologies: [
    "Python",
    "Playwright",
    "OpenPyXL",
    "Excel Test Data",
    "Automated Testing",
    "Data-Driven Testing",
    "Functional Testing",
    "Negative Testing"
  ],
  highlights: [
    "Created automated Playwright tests for Singlish-to-Sinhala transliteration validation",
    "Used Excel-based test data to manage inputs, expected outputs, actual outputs, and test status",
    "Covered 50 negative test cases based on Singlish input types",
    "Automated result comparison between expected Sinhala output and actual generated output",
    "Updated actual output and PASS/FAIL status directly into the Excel test case file",
    "Tested chat-style Sinhala transliteration accuracy using a real web application"
  ],
  image: `${import.meta.env.BASE_URL}assets/images/sinhala-transliteration-testing.png`,
  github: "https://github.com/D0017/sinhala-transliteration-testing-playwright",
  demo: null,
  featured: false
},
];