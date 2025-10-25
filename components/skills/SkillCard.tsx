interface SkillCardProps {
  title: string;
  icon: string;
  skills: string[];
  colorClass: string;
}

export default function SkillCard({ title, icon, skills, colorClass }: SkillCardProps) {
  return (
    <div className="bg-white-800/50 backdrop-blur-sm border border-gray-700 rounded-xl p-6 hover:border-gray-600 transition-all duration-300 hover:shadow-lg hover:shadow-purple-500/10">
      <h3 className={`text-xl font-semibold mb-4 ${colorClass} flex items-center gap-2`}>
        <span>{icon}</span> {title}
      </h3>
      <div className="flex flex-wrap gap-2">
        {skills.map((skill) => (
          <span 
            key={skill} 
            className={`px-3 py-1 ${
              colorClass.includes('blue') 
                ? 'bg-blue-500/20 text-blue-300' 
                : 'bg-purple-500/20 text-purple-300'
            } rounded-full text-sm hover:scale-105 transition-transform cursor-default`}
          >
            {skill}
          </span>
        ))}
      </div>
    </div>
  );
}