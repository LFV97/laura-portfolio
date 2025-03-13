const skillData = [
  // Categorías principales
  // { id: "frontend", name: "Frontend", position: [-4, 3, 0], unlocked: true, color: "blue" },
  // { id: "backend", name: "Backend", position: [0, 3, 0], unlocked: true, color: "red" },
  // { id: "ai", name: "AI", position: [4, 3, 0], unlocked: true, color: "green" },
  { id: "frontend", name:"Frontend",  position: [-1, 2.2, 0], unlocked: true, color: "#3299a8" },
  { id: "backend", name:"Backend",  position: [1, 2.2, 0], unlocked: true, color: "#992929" },
  { id: "ai", name:"AI",  position: [0, 1, 0], unlocked: true, color: "#46a349" },

  // Frontend Skills
  // { id: "html", name: "HTML", position: [-5, 2, 0], unlocked: true, color: "white", icon: "/icons/html.png" },
  // { id: "css", name: "CSS", position: [-4, 2, 0], unlocked: true, color: "white", icon: "/icons/css.png" },
  // { id: "javascript", name: "JavaScript", position: [-3, 2, 0], unlocked: true, color: "yellow", icon: "/icons/js.png" },
  { id: "html", name:"HTML5", position: [-1.5, 1.5, 0], unlocked: true, color: "white", icon: "/icons/html.png" },
  { id: "css", name:"CSS3",  position: [-1.8, 2.2, 0], unlocked: true, color: "white", icon: "/icons/css.png" },
  { id: "bootstrap", name:"Bootstrap",  position: [-2.1, 2.85, 0], unlocked: true, color: "white", icon: "/icons/css.png" },
  { id: "tailwind", name:"TailwindCSS",  position: [-2.5, 2.2, 0], unlocked: true, color: "white", icon: "/icons/css.png" },
  { id: "javascript", name:"Javascript",  position: [-1.4, 2.9, 0], unlocked: true, color: "white", icon: "/icons/js.png" },
  { id: "react", name:"React",  position: [-1.05, 3.5, 0], unlocked: true, color: "white", icon: "/icons/react.png" },
  { id: "three", name:"Three.js",  position: [-1.8, 3.5, 0], unlocked: true, color: "white", icon: "/icons/three.png" },
  
  
  // { id: "react", name: "React", position: [-3, 1, 0], unlocked: true, color: "cyan", icon: "/icons/react.png" },
  // { id: "bootstrap", name: "Bootstrap", position: [-4, 1, 0], unlocked: true, color: "lightblue", icon: "/icons/bootstrap.png" },

  // Backend Skills
  // { id: "java", name: "Java", position: [0, 2, 0], unlocked: true, color: "orange", icon: "/icons/java.png" },
  { id: "java", name:"Java",  position: [1.8, 2.2, 0], unlocked: true, color: "whitewhite", icon: "/icons/java.png" },
  { id: "spring", name:"Spring",  position: [2.2, 2.8, 0], unlocked: true, color: "whitewhite", icon: "/icons/spring.png" },
  { id: "hibernate", name:"Hibernate",  position: [2.5, 2.2, 0], unlocked: true, color: "whitewhite", icon: "/icons/hibernate.png" },
  { id: "struts2", name:"Struts2",  position: [2.2, 1.6, 0], unlocked: true, color: "whitewhite", icon: "/icons/struts2.png" },

  // AI & Data Skills
  // { id: "python", name: "Python", position: [4, 2, 0], unlocked: true, color: "green", icon: "/icons/python.png" },
  // { id: "csharp", name: "C#", position: [3, 2, 0], unlocked: true, color: "purple", icon: "/icons/c-sharp.png" }
  { id: "python", name:"Python",  position: [-0.35, 0.3, 0], unlocked: true, color: "white", icon: "/icons/python.png" },
  { id: "csharp", name:"C#",  position: [0.35, 0.3, 0], unlocked: true, color: "white", icon: "/icons/c-sharp.png" },
  { id: "dotnet", name:".NET",  position: [1, 0.3, 0], unlocked: true, color: "white", icon: "/icons/dot-net.png" },
  { id: "entity", name:"Entity Framework",  position: [0.65, -0.3, 0], unlocked: true, color: "white", icon: "/icons/entity.png" },
  { id: "azure", name:"Azure",  position: [1.3, -0.3, 0], unlocked: true, color: "white", icon: "/icons/azure.png" },

  // 🔒 Nodos bloqueados para equilibrar el diseño
  { id: "locked", name:"Locked", position: [1.5, 2.9, 0], unlocked: false, color: "gray", icon: "/icons/locked.png" },
  { id: "locked", name:"Locked", position: [-2.5, 3.5, 0], unlocked: false, color: "gray", icon: "/icons/locked.png"  },
  { id: "locked", name:"Locked", position: [-0.7, -0.3, 0], unlocked: false, color: "gray", icon: "/icons/locked.png"  },
  { id: "locked", name:"Locked", position: [-2.2, 1.5, 0], unlocked: false, color: "gray", icon: "/icons/locked.png"  },
  { id: "locked", name:"Locked", position: [3.2, 2.2, 0], unlocked: false, color: "gray", icon: "/icons/locked.png"  },
  { id: "locked", name:"Locked", position: [2.5, 3.4, 0], unlocked: false, color: "gray", icon: "/icons/locked.png"  },
  { id: "locked", name:"Locked", position: [2.9, 1.6, 0], unlocked: false, color: "gray", icon: "/icons/locked.png"  },
  { id: "locked", name:"Locked", position: [-0.05, -0.3, 0], unlocked: false, color: "gray", icon: "/icons/locked.png"  },
  { id: "locked", name:"Locked", position: [-1, 0.3, 0], unlocked: false, color: "gray", icon: "/icons/locked.png"  },
];

export default skillData;
