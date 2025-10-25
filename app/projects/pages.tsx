'use client'

import React, { useState, useRef, useEffect } from 'react';
import Carousel, { CarouselItem } from '@/components/Carousel';
import { projects } from '@/src/data/project';

export default function Projects() {
    const [currentIndex, setCurrentIndex] = useState(0);
    const carouselRef = useRef<{ setIndex: (index: number) => void }>(null);

    const currentProject = projects[currentIndex];

    const [carouselWidth, setCarouselWidth] = useState(600);

    useEffect(() => {
        const handleResize = () => {
            if (window.innerWidth < 640) {
                setCarouselWidth(Math.min(window.innerWidth - 32, 340));
            } else {
                setCarouselWidth(600);
            }
        };

        handleResize();
        window.addEventListener('resize', handleResize);
        return () => window.removeEventListener('resize', handleResize);
    }, []);

    const carouselItems: CarouselItem[] = projects.map(project => ({
        title: project.title,
        description: project.status,
        id: project.id,
        icon: project.icon,
        image: project.image
    }));

    const handlePrevious = () => {
        const newIndex = currentIndex === 0 ? projects.length - 1 : currentIndex - 1;
        setCurrentIndex(newIndex);
        if (carouselRef.current) {
            carouselRef.current.setIndex(newIndex);
        }
    };

    const handleNext = () => {
        const newIndex = currentIndex === projects.length - 1 ? 0 : currentIndex + 1;
        setCurrentIndex(newIndex);
        if (carouselRef.current) {
            carouselRef.current.setIndex(newIndex);
        }
    };

    const handleCarouselChange = (index: number) => {
        setCurrentIndex(index);
    };

    return (
        <div className="min-h-screen font-mono">
            <div className="max-w-7xl mx-auto">

                <div className="text-center py-8 px-4 md:mb-12">
                    <h2 className="text-3xl md:text-5xl mb-3 text-blue-600">
                        Mis Proyectos
                    </h2>
                    <p className="text-gray-600 text-sm md:text-base max-w-2xl mx-auto">
                        Explora mi portafolio de proyectos profesionales
                    </p>
                </div>

                <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 items-center">

                    <div className="space-y-6 order-2 lg:order-1">

                        <div>
                            <div className="flex items-center gap-3 mb-3">
                                <span className="text-5xl">{currentProject.icon}</span>
                                <div>
                                    <h3 className="text-3xl md:text-4xl font-bold mb-1">
                                        {currentProject.title}
                                    </h3>
                                    <div className="flex items-center gap-2 flex-wrap">
                                        <span className={`inline-block px-3 py-1 rounded-full text-xs font-semibold ${currentProject.status === 'Completado' ? 'bg-green-500/20 text-green-600 border border-green-500/30' :
                                                currentProject.status === 'En desarrollo' ? 'bg-blue-500/20 text-blue-600 border border-blue-500/30' :
                                                    currentProject.status === 'Beta' ? 'bg-orange-500/20 text-orange-600 border border-orange-500/30' :
                                                        'bg-purple-600/20 text-purple-600 border border-purple-500/30'
                                            }`}>
                                            {currentProject.status}
                                        </span>
                                        <span className="text-xs">•</span>
                                        <span className="text-xs">{currentProject.year}</span>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div className="space-y-4">
                            <div>
                                <h4 className="text-sm font-semibold mb-2 uppercase tracking-wide">
                                    Descripción
                                </h4>
                                <p className="text-gray-700 text-base leading-relaxed">
                                    {currentProject.longDescription}
                                </p>
                            </div>

                            <div className="grid grid-cols-2 gap-4 text-center">
                                <div className="bg-black/10 backdrop-blur-none border-2 border-black/30 rounded-lg p-3">
                                    <div className="text-xs mb-1">Cliente</div>
                                    <div className="text-sm font-semibold">{currentProject.client}</div>
                                </div>
                                <div className="bg-black/10 backdrop-blur-none border-2 border-black/30 rounded-lg p-3">
                                    <div className="text-xs mb-1">Duración</div>
                                    <div className="text-sm font-semibold">{currentProject.duration}</div>
                                </div>
                            </div>
                        </div>

                        <div>
                            <h4 className="text-sm font-semibold mb-3 uppercase tracking-wide">
                                Tecnologías
                            </h4>
                            <div className="flex flex-wrap gap-2">
                                {currentProject.tech.map((tech, techIdx) => (
                                    <span
                                        key={techIdx}
                                        className="px-3 py-1.5 bg-blue-500/10 backdrop-blur-sm border border-blue-600 rounded-lg text-sm font-medium text-blue-600 hover:bg-blue-200 transition-all duration-200"
                                    >
                                        {tech}
                                    </span>
                                ))}
                            </div>
                        </div>
                        <div className="flex flex-col sm:flex-row gap-3 pt-2">
                            {currentProject.demoUrl && (
                                <a href={currentProject.demoUrl} target="_blank" rel="noopener noreferrer"
                                    className="flex-1 bg-blue-600 hover:bg-blue-700 text-white font-semibold py-3 px-6 rounded-xl transition-all duration-300 transform hover:scale-105 shadow-lg flex items-center justify-center gap-2 cursor-pointer">
                                    <span>Ver Demo →</span>
                                </a>
                            )}

                            {currentProject.codeUrl && (
                                <a href={currentProject.codeUrl} target="_blank" rel="noopener noreferrer"
                                    className="flex-1 bg-orange-600 hover:bg-orange-700 text-white font-semibold py-3 px-6 rounded-xl transition-all duration-300 transform hover:scale-105 shadow-lg flex items-center justify-center gap-2 cursor-pointer">
                                    <span>Ver Código</span>
                                    <span>{'</>'}</span>
                                </a>
                            )}

                            {(currentProject.frontendUrl || currentProject.backendUrl) && (
                                <div className="flex-1 flex gap-2">
                                    {currentProject.frontendUrl && (
                                        <a href={currentProject.frontendUrl} target="_blank" rel="noopener noreferrer"
                                            className="flex-1 bg-emerald-500 hover:bg-emerald-600 text-white font-semibold py-3 px-4 rounded-xl transition-all duration-300 text-center shadow-md hover:scale-105">
                                            Frontend
                                        </a>
                                    )}
                                    {currentProject.backendUrl && (
                                        <a href={currentProject.backendUrl} target="_blank" rel="noopener noreferrer"
                                            className="flex-1 bg-violet-500 hover:bg-violet-600 text-white font-semibold py-3 px-4 rounded-xl transition-all duration-300 text-center shadow-md hover:scale-105">
                                            Backend
                                        </a>
                                    )}
                                </div>
                            )}
                        </div>
                    </div>

                    <div className="w-full order-1 lg:order-2 flex flex-col items-center justify-center">
                        <div className="relative">
                            <Carousel
                                ref={carouselRef}
                                items={carouselItems}
                                baseWidth={carouselWidth}
                                autoplay={false}
                                autoplayDelay={3000}
                                pauseOnHover={true}
                                loop={true}
                                round={false}
                                onIndexChange={handleCarouselChange}
                            />

                            <div className="absolute top-1/2 -translate-y-1/2 left-0 right-0 flex justify-between pointer-events-none z-20 px-2">
                                <button
                                    onClick={handlePrevious}
                                    className="pointer-events-auto w-10 h-10 md:w-12 md:h-12 rounded-full bg-white/90 hover:bg-white text-gray-900 shadow-lg hover:shadow-xl transition-all duration-300 flex items-center justify-center transform hover:scale-110 -translate-x-6"
                                >
                                    <span className="text-xl md:text-2xl">←</span>
                                </button>
                                <button
                                    onClick={handleNext}
                                    className="pointer-events-auto w-10 h-10 md:w-12 md:h-12 rounded-full bg-white/90 hover:bg-white text-gray-900 shadow-lg hover:shadow-xl transition-all duration-300 flex items-center justify-center transform hover:scale-110 translate-x-6"
                                >
                                    <span className="text-xl md:text-2xl">→</span>
                                </button>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="text-center mt-12 text-gray-500 text-sm">
                    Proyecto {currentIndex + 1} de {projects.length}
                </div>
            </div>
        </div>
    );
}