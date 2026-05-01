export const projects = [
  {
    id: 1,
    title: "CampusOps Hub – Smart Campus Operations System",
    type: "Full Stack Web Application",
    stackLabel: "Spring Boot + React",
    role: "Led the project, owning the authentication, OAuth integration, role management, and the notification system.",
    description:
      "A full-stack Smart Campus Operations Hub developed for university management. The system supports facility booking, maintenance ticketing, and real-time notifications with role-based access control. As the team lead (Member 4), I implemented authentication, OAuth integration, role management, and the notification system.",
    technologies: [
      "Spring Boot",
      "React (Vite)",
      "MySQL",
      "Spring Security",
      "OAuth 2.0 (Google)",
      "JPA / Hibernate",
      "Tailwind CSS",
      "GitHub Actions"
    ],
    highlights: [
      "Led the team and coordinated full project development",
      "Implemented OAuth 2.0 login and secure role-based access (USER, ADMIN, TECHNICIAN)",
      "Developed notification system for bookings, tickets, and system events",
      "Designed protected routes and backend security using Spring Security",
      "Integrated CI workflow using GitHub Actions for build and testing",
      "Ensured clean REST API design and modular architecture"
    ],
    image: `${import.meta.env.BASE_URL}assets/images/CampusOps.png`,
    github: "https://github.com/D0017/it3030-paf-2026-smart-campus-group79",
    demo: null,
    featured: true
  },
  {
    id: 2,
    title: "Pink Aura Salon Management System",
    type: "Web App",
    stackLabel: "MERN Stack (Full-Stack)",
    role: "Led the salon management system project, owning the product vision and user role management.",
    description:
      "Full-stack salon management platform with appointment scheduling, staff management, product inventory, and  AI-Powered Chat Bot.",
    technologies: ["MongoDB", "Express", "React", "Node.js", "RESTful APIs"],
    highlights: [
      "Image uploads using Azure Blob Storage",
      "Role-based admin/staff dashboard",
      "Integrated marketing and review modules"
    ],
    image: `${import.meta.env.BASE_URL}assets/images/pink-aura.png`,
    github: "https://github.com/kezu1003/Pink-Aura-Salon-Management-System",
    demo: null,
    featured: true
  },

  {
    id: 3,
    title: "StudySync",
    type: "Web App",
    stackLabel: "React + Spring Boot (Full-Stack)",
    role: "Led the StudySync project as team lead, implement features user registration, login, role-based access control, admin user management, module setup, and student grouping workflows.",
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
      "REST APIs"
    ],
    highlights: [
      "Student and lecturer registration with secure login flow",
      "Admin dashboard for user, module, and group administration",
      "Module enrollment, group joining, and leadership request workflow"
    ],
    image: `${import.meta.env.BASE_URL}assets/images/studysync.png`,
    github: "https://github.com/D0017/studysync",
    demo: null,
    featured: true
  },

  {
    id: 4,
    title: "Daily Bloom – Wellness Tracker App",
    type: "Mobile App",
    stackLabel: "Android (Kotlin)",
    description:
      "Android wellness tracker built with Kotlin. Features habit tracking, mood logging, hydration reminders, and data visualization using charts.",
    technologies: ["Kotlin", "Android Studio", "Room DB", "ViewModel", "LiveData"],
    highlights: [
      "MVVM architecture with clean separation of concerns",
      "Local persistence with Room and custom DAOs",
      "Notification scheduling for reminders"
    ],
    image: `${import.meta.env.BASE_URL}assets/images/Daily BLOOM.png`,
    github: "https://github.com/D0017/DailyBloom",
    demo: null,
    featured: false
  },  
 
];
