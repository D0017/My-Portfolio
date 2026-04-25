export const projects = [
  {
    id: 1,
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
 
];
