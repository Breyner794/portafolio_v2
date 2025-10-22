import {
    AnimatedSpan,
    Terminal,
    TypingAnimation,
} from "@/components/ui/terminal"
import ScrambledText from "@/components/ui/ScrambledText";
import ImagePixel from "@/components/imagesPixel/imagePixel";

export default function About() {
    return (
        <div className="max-w-7xl mx-auto px-4"> {/* Cambié de 6xl a 7xl */}
            <h2 className="text-4xl sm:text-5xl text-center mb-20 font-mono ">Acerca de Mí</h2>

            <div className="grid grid-cols-1 lg:grid-cols-3 gap-4 md:gap-6">

                <div className="lg:col-span-1 flex flex-col gap-2 md:gap-3">
                    <div className="rounded-lg overflow-hidden p-4">
                        <div className="flex flex-col items-center justify-center space-y-4">
                            <div className="w-40 h-40 overflow-hidden border-4 rounded-full border-blue-500">
                                <ImagePixel />
                            </div>
                            <div className="text-center space-y-2 font-mono">
                                <h3 className="font-bold text-xl tracking-tight">
                                    Breyner Farid Quilindo
                                </h3>
                                <div className="space-y-1">
                                    <p className="text-sm text-blue-500">
                                        Tecnólogo en Sistemas de Información
                                    </p>
                                    <p className="text-sm text-orange-600">
                                        Desarrollador Web
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="min-h-[200px] flex items-center justify-center">
                        <div className="w-full max-w-none">
                            <ScrambledText
                                radius={50}
                                duration={2.5}
                                speed={0.2}
                                scrambleChars={".:"}
                                className="!m-0 !max-w-none w-full text-sm md:text-base lg:text-lg text-center leading-relaxed"
                                style={{ color: "#000000ff" }}
                            >
                                "Apasionado por la tecnología y la resolución de problemas, siempre buscando aprender y crecer en el mundo del desarrollo de software."
                            </ScrambledText>
                        </div>
                    </div>
                </div>

                {/* Terminal - Ocupa 2 columnas (más espacio) */}
                <div className="lg:col-span-2 flex items-center">
                    <Terminal
                        sequence={true}
                        startOnView={true}
                        className="w-full"
                    >
                        <TypingAnimation duration={50}>$ init --profile breyner.quilindo</TypingAnimation>
                        <AnimatedSpan className="text-green-500">✔ Loading profile...</AnimatedSpan>
                        <AnimatedSpan className="text-green-500">✔ Validating credentials...</AnimatedSpan>

                        <AnimatedSpan className="text-blue-500">→ Tecnólogo en Sistemas | 2+ años experiencia</AnimatedSpan>
                        <AnimatedSpan className="text-blue-500">→ Soporte multi-sede (CO/EC) | +30% eficiencia</AnimatedSpan>
                        <AnimatedSpan className="text-blue-500">→ Stack: JavaScript, Python, HTML/CSS, SQL/NoSQL, Git</AnimatedSpan>
                        <AnimatedSpan className="text-blue-500">→ Especialidad: Troubleshooting, Hardware/Software, Infraestructura</AnimatedSpan>

                        <TypingAnimation duration={40}>$ cat mission.md</TypingAnimation>
                        <AnimatedSpan className="text-orange-400">"Crear soluciones que faciliten el trabajo,</AnimatedSpan>
                        <AnimatedSpan className="text-orange-400">resolver problemas y compartir conocimiento"</AnimatedSpan>

                        <TypingAnimation duration={50} className="text-green-500">✔ Profile ready. Type 'help' for more info.</TypingAnimation>
                        <TypingAnimation duration={60}>$ exit</TypingAnimation>
                        <AnimatedSpan className="text-red-600">Closing session...</AnimatedSpan>
                        <AnimatedSpan className="text-blue-500">
                            <span>ℹ Updated 1 file:</span>
                            <span className="pl-2">- lib/Thanks_for_visiting.ts</span>
                        </AnimatedSpan>
                    </Terminal>
                </div>

            </div>
        </div>
    );
}