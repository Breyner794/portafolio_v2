import React from "react";
import LoopOrbitSkill from "@/components/skills/loopOrbitSkill";
import ScrollVelocitySkills from "@/components/skills/scrollVelocitySkills";

export default function SkillsPage() {
  return (
    <section id="habilidades" className="py-20 px-4 w-full min-h-screen font-mono">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-3xl sm:text-4xl font-bold mb-4">
            Tech Stack & Skills
          </h2>
          <p className="text-blue-600 text-lg">
            Infraestructura sólida + Desarrollo Full Stack
          </p>
        </div>

        <LoopOrbitSkill />

        <ScrollVelocitySkills />

        <div className="mt-16 text-center">
          <p className="text-gray-900 text-sm">
            Constantemente aprendiendo nuevas tecnologías y mejorando mis habilidades
          </p>
        </div>
      </div>
    </section>
  );
}