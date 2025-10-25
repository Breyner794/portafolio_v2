'use client'

import React, { useState, useRef } from 'react';
import Carousel, { CarouselItem } from '@/components/Carousel';

export default function Projects() {
    const [currentIndex, setCurrentIndex] = useState(0);
    const carouselRef = useRef<{ setIndex: (index: number) => void }>(null);

    const projects = [
        {
            id: 1,
            title: "E-Commerce Platform",
            image: "🛒",
            status: "Completado",
            year: "2024",
            longDescription: "Plataforma de comercio electrónico completa con sistema de pagos integrado, gestión de inventario en tiempo real y panel de administración avanzado. Incluye características como carrito de compras, wishlist, y sistema de reseñas.",
            client: "TechRetail S.A.",
            duration: "6 meses",
            tech: ["React", "Node.js", "MongoDB", "Stripe", "AWS"],
            icon: <span className="text-2xl">🛒</span>
        },
        {
            id: 2,
            title: "Healthcare Management",
            image: "🏥",
            status: "En desarrollo",
            year: "2024",
            longDescription: "Sistema integral de gestión hospitalaria que permite la administración de citas médicas, historiales clínicos digitales, prescripciones electrónicas y comunicación en tiempo real entre médicos y pacientes.",
            client: "MediCare Plus",
            duration: "8 meses",
            tech: ["Vue.js", "Python", "PostgreSQL", "Docker", "Redis"],
            icon: <span className="text-2xl">🏥</span>
        },
        {
            id: 3,
            title: "Social Network App",
            image: "📱",
            status: "Beta",
            year: "2023",
            longDescription: "Red social innovadora enfocada en la colaboración profesional y networking. Incluye mensajería instantánea, videoconferencias, compartir contenido multimedia y sistema de recomendaciones basado en IA.",
            client: "ConnectPro",
            duration: "12 meses",
            tech: ["React Native", "GraphQL", "Firebase", "TensorFlow"],
            icon: <span className="text-2xl">📱</span>
        },
        {
            id: 4,
            title: "Analytics Dashboard",
            image: "📊",
            status: "Completado",
            year: "2023",
            longDescription: "Dashboard analítico empresarial con visualizaciones interactivas de datos en tiempo real, reportes automatizados, predicciones con machine learning y exportación de datos en múltiples formatos.",
            client: "DataVision Inc.",
            duration: "4 meses",
            tech: ["Next.js", "D3.js", "Express", "MySQL", "Chart.js"],
            icon: <span className="text-2xl">📊</span>
        },
        {
            id: 5,
            title: "Learning Management",
            image: "📚",
            status: "Planificado",
            year: "2025",
            longDescription: "Plataforma educativa moderna con cursos interactivos, seguimiento de progreso personalizado, gamificación, certificaciones digitales y herramientas de colaboración entre estudiantes y profesores.",
            client: "EduTech Global",
            duration: "10 meses",
            tech: ["Angular", "NestJS", "MongoDB", "WebRTC", "Kubernetes"],
            icon: <span className="text-2xl">📚</span>
        }
    ];

    const currentProject = projects[currentIndex];

    // Convertir proyectos al formato del Carousel
    const carouselItems: CarouselItem[] = projects.map(project => ({
        title: project.title,
        description: project.status,
        id: project.id,
        icon: project.icon
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
        <div className="min-h-screen font-mono py-8 md:py-16 px-4 md:px-8">
            <div className="max-w-7xl mx-auto">
                {/* Header */}
                <div className="text-center mb-8 md:mb-12">
                    <h2 className="text-3xl md:text-5xl mb-3 text-blue-600">
                        Mis Proyectos
                    </h2>
                    <p className="text-gray-600 text-sm md:text-base max-w-2xl mx-auto">
                        Explora mi portafolio de proyectos profesionales
                    </p>
                </div>

                {/* Main Content - Two Column Layout */}
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 items-center">

                    {/* Left Side - Project Info */}
                    <div className="space-y-6 order-2 lg:order-1">
                        {/* Project Header */}
                        <div>
                            <div className="flex items-center gap-3 mb-3">
                                <span className="text-5xl">{currentProject.image}</span>
                                <div>
                                    <h3 className="text-3xl md:text-4xl font-bold mb-1">
                                        {currentProject.title}
                                    </h3>
                                    <div className="flex items-center gap-2 flex-wrap">
                                        <span className={`inline-block px-3 py-1 rounded-full text-xs font-semibold ${
                                            currentProject.status === 'Completado' ? 'bg-green-500/20 text-green-600 border border-green-500/30' :
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

                        {/* Project Description */}
                        <div className="space-y-4">
                            <div>
                                <h4 className="text-sm font-semibold mb-2 uppercase tracking-wide">
                                    Descripción
                                </h4>
                                <p className="text-gray-700 text-base leading-relaxed">
                                    {currentProject.longDescription}
                                </p>
                            </div>

                            {/* Project Details */}
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

                        {/* Tech Stack */}
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

                        {/* Action Buttons */}
                        <div className="flex flex-col sm:flex-row gap-3 pt-2">
                            <button className="flex-1 bg-blue-600 hover:bg-blue-700 text-white font-semibold py-3 px-6 rounded-xl transition-all duration-300 transform hover:scale-105 shadow-lg flex items-center justify-center gap-2 cursor-pointer">
                                <span>Ver Demo</span>
                                <span>→</span>
                            </button>
                            <button className="flex-1 bg-black/10 hover:bg-gray/20 backdrop-blur-none font-semibold py-3 px-6 rounded-xl transition-all duration-300 border border-black/30 flex items-center justify-center gap-2 cursor-pointer hover:scale-103">
                                <span>Ver Código</span>
                                <span>{'</>'}</span>
                            </button>
                        </div>
                    </div>

                    {/* Right Side - Carousel */}
                    <div className="w-full order-1 lg:order-2 flex flex-col items-center justify-center">
                        <div className="relative">
                            <Carousel
                                ref={carouselRef}
                                items={carouselItems}
                                baseWidth={400}
                                autoplay={false}
                                autoplayDelay={3000}
                                pauseOnHover={true}
                                loop={true}
                                round={false}
                                onIndexChange={handleCarouselChange}
                            />
                            
                            {/* Navigation Buttons Overlay */}
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

                {/* Project Counter */}
                <div className="text-center mt-12 text-gray-500 text-sm">
                    Proyecto {currentIndex + 1} de {projects.length}
                </div>
            </div>
        </div>
    );
}