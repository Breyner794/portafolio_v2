import { OrbitingCircles } from "@/components/ui/orbiting-circles";
import { FaReact, FaNodeJs, FaPython, FaGitAlt, FaLinux, FaWindows, FaNetworkWired, FaServer, FaApple } from "react-icons/fa";
import { SiMongodb, SiPostgresql, SiTailwindcss, SiExpress, SiJavascript } from "react-icons/si";

export default function LoopOrbitSkill() {
  return (
    <div className="relative flex h-[500px] w-full items-center justify-center overflow-hidden">

      <div className="flex flex-col items-center justify-center text-center z-10">
        <span className="text-4xl sm:text-5xl font-bold bg-gradient-to-r from-blue-500 to-orange-500 bg-clip-text text-transparent">
          MERN
        </span>
        <span className="text-sm text-gray-600 mt-1">Full Stack</span>
      </div>
      
      <OrbitingCircles 
        iconSize={40}
        radius={100}
      >
          <SiExpress className="text-4xl text-gray-800" title="Express" />
          <FaReact className="text-5xl text-cyan-400" title="React" />
          <FaNodeJs className="text-5xl text-green-500" title="Node.js" />
          <SiMongodb className="text-5xl text-green-600" title="MongoDB" />
          <SiPostgresql className="text-5xl text-blue-400" title="PostgreSQL" />
      </OrbitingCircles>
      
      <OrbitingCircles 
        iconSize={45}// 0°
        radius={160} 
        reverse
      >
          <SiJavascript className="text-4xl text-yellow-600" title="JavaScript" />
          <FaPython className="text-4xl text-blue-500" title="Python" />
          <SiTailwindcss className="text-4xl text-cyan-500" title="Tailwind CSS" />
          <FaGitAlt className="text-4xl text-orange-600" title="Git" />
      </OrbitingCircles>

      <OrbitingCircles 
        iconSize={50}
        radius={220}
      >
          <FaApple className="text-4xl text-gray-600" title="MacOS" />
          <FaLinux className="text-4xl text-yellow-500" title="Linux" />
          <FaWindows className="text-4xl text-blue-600" title="Windows" />
          <FaNetworkWired className="text-4xl text-purple-500" title="Redes" />
          <FaServer className="text-4xl text-gray-400" title="Infraestructura" />
      </OrbitingCircles>
      
    </div>
  );
}