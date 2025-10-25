import SkillCard from "./SkillCard";

export default function SkillsGrid() {
  const developmentSkills = [
    "React.js",
    "Node.js",
    "Express",
    "MongoDB",
    "PostgreSQL",
    "JavaScript ES6+",
    "HTML5",
    "CSS3",
    "Tailwind CSS",
    "Git/GitHub",
    "Python"
  ];

  const infrastructureSkills = [
    "Windows/Linux/MacOS",
    "Redes y Cableado",
    "Access Points",
    "Soporte Técnico",
    "Backups y Auditoría",
    "SICE",
    "Mesa de Ayuda",
    "Mantenimiento",
    "Inventarios",
    "Documentación Técnica"
  ];

  return (
    <div className="mt-16 grid grid-cols-1 md:grid-cols-2 gap-8 max-w-6xl mx-auto px-4">
      <SkillCard
        title="Desarrollo Full Stack"
        icon="💻"
        skills={developmentSkills}
        colorClass="text-blue-400"
      />
      
      <SkillCard
        title="Infraestructura y Soporte"
        icon="🔧"
        skills={infrastructureSkills}
        colorClass="text-purple-400"
      />
    </div>
  );
}