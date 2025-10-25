
import React from "react";
import {
    AnimatedSpan,
    Terminal,
    TypingAnimation,
} from "@/components/ui/terminal"

export default function ImprovedTerminalProfile() {
    return (
        <>
            <Terminal
                sequence={true}
                startOnView={true}
                className="w-full shadow-2xl"
            >
                <TypingAnimation duration={50} className="text-cyan-500">
                    $ ssh breyner.quilindo@portfolio.dev
                </TypingAnimation>

                <AnimatedSpan className="text-green-400">✔ Estableciendo conexión...</AnimatedSpan>
                <AnimatedSpan className="text-green-400">✔ Autenticación exitosa</AnimatedSpan>
                <AnimatedSpan className="text-green-400">✔ Cargando perfil profesional...</AnimatedSpan>

                <TypingAnimation duration={40} className="text-yellow-400">
                    $ whoami
                </TypingAnimation>
                <AnimatedSpan className="text-blue-600 ">
                    Breyner Quilindo | Full Stack Developer & Systems Technologist
                </AnimatedSpan>

                <TypingAnimation duration={40} className="text-yellow-400">
                    $ cat experience.txt
                </TypingAnimation>
                <AnimatedSpan className="text-blue-400">
                    → 3+ años en infraestructura IT & soporte técnico
                </AnimatedSpan>
                <AnimatedSpan className="text-blue-400">
                    → Especialización Full Stack MERN completada
                </AnimatedSpan>
                <AnimatedSpan className="text-blue-400">
                    → Gestión multi-sede CO/EC | +30% mejora en eficiencia
                </AnimatedSpan>
                <AnimatedSpan className="text-blue-400">
                    → Garantía de continuidad operativa en entornos críticos
                </AnimatedSpan>

                <TypingAnimation duration={40} className="text-yellow-400">
                    $ ls -la skills/
                </TypingAnimation>
                <AnimatedSpan className="text-purple-400">
                    drwxr-xr-x  Frontend/     → JavaScript, React, HTML5, CSS3
                </AnimatedSpan>
                <AnimatedSpan className="text-purple-400">
                    drwxr-xr-x  Backend/      → Node.js, Express, Python
                </AnimatedSpan>
                <AnimatedSpan className="text-purple-400">
                    drwxr-xr-x  Database/     → MongoDB, SQL, NoSQL
                </AnimatedSpan>
                <AnimatedSpan className="text-purple-400">
                    drwxr-xr-x  DevOps/       → Git, Automatización, CI/CD
                </AnimatedSpan>
                <AnimatedSpan className="text-purple-400">
                    drwxr-xr-x  Infrastructure/ → Software, Hardware, Redes, Troubleshooting
                </AnimatedSpan>

                <TypingAnimation duration={40} className="text-yellow-400">
                    $ cat mission.md
                </TypingAnimation>
                <AnimatedSpan className="text-orange-400 border-l-2 border-orange-400 pl-3">
                    "Construir soluciones tecnológicas escalables que optimicen
                </AnimatedSpan>
                <AnimatedSpan className="text-orange-400 border-l-2 border-orange-400 pl-3">
                    sistemas, reduzcan la intervención manual y garanticen la
                </AnimatedSpan>
                <AnimatedSpan className="text-orange-400 border-l-2 border-orange-400 pl-3">
                    continuidad operativa mediante automatización inteligente."
                </AnimatedSpan>

                <TypingAnimation duration={40} className="text-yellow-400">
                    $ echo $NEXT_GOAL
                </TypingAnimation>
                <AnimatedSpan className="text-emerald-400">
                    Desarrollar aplicaciones full stack robustas e implementar
                </AnimatedSpan>
                <AnimatedSpan className="text-emerald-400">
                    automatizaciones que transformen procesos operativos complejos
                </AnimatedSpan>

                <TypingAnimation duration={50} className="text-green-400">
                    ✔ Profile loaded successfully
                </TypingAnimation>

                <TypingAnimation duration={60} className="text-cyan-400">
                    $ logout
                </TypingAnimation>

                <AnimatedSpan className="text-gray-500">
                    Cerrando sesión...
                </AnimatedSpan>
                <AnimatedSpan className="text-blue-400">
                    <span>ℹ Actualizado:</span>
                    <span className="pl-2 text-gray-400">lib/Thanks_for_visiting.ts</span>
                </AnimatedSpan>
                <AnimatedSpan className="text-gray-500">
                    Connection closed by remote host.
                </AnimatedSpan>
            </Terminal>
        </>
    )
};