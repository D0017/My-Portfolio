export const projects = [
  {
    id: 1,
    title: "Daily Bloom – Wellness Tracker App",
    type: "Mobile App",
    description:
      "Android wellness tracker built with Kotlin. Features habit tracking, mood logging, hydration reminders, and data visualization using charts.",
    technologies: ["Kotlin", "Android Studio", "Room DB", "ViewModel", "LiveData"],
    highlights: [
      "MVVM architecture with clean separation of concerns",
      "Local persistence with Room and custom DAOs",
      "Notification scheduling for reminders"
    ],
    image: "/assets/images/daily-bloom.png",
    github: "https://github.com/your-username/DailyBloom",
    demo: null
  },
  {
    id: 2,
    title: "Pink Aura Salon & Spa Management System",
    type: "Web App",
    stackLabel: "MERN Stack (Full-Stack)",
    description:
      "Full-stack salon management platform with appointment scheduling, staff management, product inventory, and  AI-Powered Chat Bot.",
    technologies: ["MongoDB", "Express", "React", "Node.js", "RESTful APIs"],
    highlights: [
      "Image uploads using Azure Blob Storage",
      "Role-based admin/staff dashboard",
      "Integrated marketing and review modules"
    ],
    image: "/assets/images/pink-aura.png",
    github: "https://github.com/your-username/pink-aura",
    demo: "https://pink-aura-demo-url.com",
    featured: true
  },

];
