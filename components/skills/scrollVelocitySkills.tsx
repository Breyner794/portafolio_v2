import ScrollVelocity from "../ScrollVelocity";

export default function ScrollVelocitySkills() {
    
  const developmentSkills = [
    "React.js Node.js Express.js MongoDB PostgreSQL JavaScript-ES6+ Python HTML5 CSS3 Tailwind CSS Git/GitHub REST_APIs",
  ];

  const infrastructureSkills = [
    "Linux Windows MacOS Networking Access_Points Cableado_Estructurado Backups Mesa_de_Ayuda Mantenimiento_IT Soporte_Técnico Documentación",
  ];

  return (
    <div className="w-full space-y-8 py-12">
      <div className="text-center mb-12 px-4">
        <h3 className="text-2xl font-bold text-blue-600 mb-2">
          💻 Desarrollo Full Stack
        </h3>
        <p className="text-gray-600 text-sm">
          Construcción de aplicaciones web robustas y escalables
        </p>
      </div>

      <ScrollVelocity
        texts={developmentSkills}
        velocity={60}
        className="custom-scroll-text text-blue-600 text-2xl sm:text-3xl font-mono"
        numCopies={8}
        damping={60}
        stiffness={300}
      />

      <div className="flex items-center justify-center py-4">
        <div className="h-px w-32 bg-gradient-to-r from-transparent via-blue-500 to-transparent"></div>
        <span className="mx-4 text-blue-400">⚡</span>
        <div className="h-px w-32 bg-gradient-to-r from-transparent via-orange-500 to-transparent"></div>
      </div>

      <div className="text-center mt-12 mb-12 px-4">
        <h3 className="text-2xl font-bold text-orange-400 mb-2">
          🔧 Infraestructura y Soporte
        </h3>
        <p className="text-gray-600 text-sm">
          Garantía de continuidad operativa y soporte técnico especializado
        </p>
      </div>

      <ScrollVelocity
        texts={infrastructureSkills}
        velocity={-60}
        className="custom-scroll-text text-orange-400 text-2xl sm:text-3xl font-mono"
        numCopies={8}
        damping={60}
        stiffness={300}
      />

      <div className="text-center mt-12 px-4">
        <p className="text-gray-500 text-sm">
          <span className="text-blue-400 font-semibold">12+</span> tecnologías de desarrollo •{" "}
          <span className="text-orange-400 font-semibold">12+</span> habilidades de infraestructura •{" "}
          <span className="text-green-400 font-semibold">3+</span> años de experiencia
        </p>
      </div>
    </div>
  );
}