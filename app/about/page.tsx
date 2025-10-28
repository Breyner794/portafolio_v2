'use client'

import ScrambledText from "@/components/ui/ScrambledText";
import ImagePixel from "@/components/imagesPixel/imagePixel";
import ImprovedTerminalProfile from "@/components/terminalPortafolio/ImprovedTerminalProfile";

export default function About() {
    return (
        <div className="max-w-7xl mx-auto px-4"> {/* Cambié de 6xl a 7xl */}
            <h2 className="text-4xl sm:text-5xl text-center mb-20 font-mono ">Acerca de Mí</h2>

            <div className="grid grid-cols-1 lg:grid-cols-[1fr_2fr] gap-4 md:gap-6">

                <div className="flex flex-col gap-2 md:gap-3">
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

                                    <div className="flex items-center justify-center gap-2 text-sm text-gray-700">
                                        <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 20 20">
                                            <path fillRule="evenodd" d="M5.05 4.05a7 7 0 119.9 9.9L10 18.9l-4.95-4.95a7 7 0 010-9.9zM10 11a2 2 0 100-4 2 2 0 000 4z" clipRule="evenodd" />
                                        </svg>
                                        <span>Cali, Colombia</span>
                                    </div>

                                    <div className="flex flex-wrap justify-center gap-3 pt-2">
                                        <a
                                            href="mailto:jhoanquilindo@gmail.com"
                                            className="inline-flex items-center gap-2 px-4 py-2 bg-blue-600 hover:bg-blue-700 text-white text-sm rounded-lg transition-colors"
                                        >
                                            <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 20 20">
                                                <path d="M2.003 5.884L10 9.882l7.997-3.998A2 2 0 0016 4H4a2 2 0 00-1.997 1.884z" />
                                                <path d="M18 8.118l-8 4-8-4V14a2 2 0 002 2h12a2 2 0 002-2V8.118z" />
                                            </svg>
                                            Contactar
                                        </a>

                                        <a
                                            href="cv/CV_Breyner_Quilindo.pdf"
                                            download ="Breyner-Quilindo-CV.pdf"
                                            className="inline-flex items-center gap-2 px-4 py-2 bg-gray-700 hover:bg-gray-600 text-white text-sm rounded-lg transition-colors"
                                        >
                                            <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 20 20">
                                                <path fillRule="evenodd" d="M3 17a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zm3.293-7.707a1 1 0 011.414 0L9 10.586V3a1 1 0 112 0v7.586l1.293-1.293a1 1 0 111.414 1.414l-3 3a1 1 0 01-1.414 0l-3-3a1 1 0 010-1.414z" clipRule="evenodd" />
                                            </svg>
                                            Descargar CV
                                        </a>
                                    </div>
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
                                De mantener infraestructuras críticas a construir soluciones digitales.
                                Combino 3+ años en TI con desarrollo Full Stack para crear tecnología
                                que no solo funciona y escala, sino que facilita el trabajo y reduce
                                la intervención manual.
                            </ScrambledText>
                        </div>
                    </div>
                </div>

                {/* Terminal - Ocupa 2 columnas (más espacio) */}
                <div className="flex items-center">
                    <ImprovedTerminalProfile />
                </div>

            </div>
        </div>
    );
}