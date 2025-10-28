import React from "react";
import { ImScissors } from "react-icons/im";
import { MdOutlineAirplanemodeActive, MdAirlines, MdOutlineDocumentScanner } from "react-icons/md";
import { GrGamepad } from "react-icons/gr";

export interface Project {
  id: number;
  title: string;
  icon: React.ReactNode;
  status: string;
  year: string;
  longDescription: string;
  client: string;
  duration: string;
  tech: string[];
  image: string;
  demoUrl?: string;
  instaLinkColaborate?: string;
  codeUrl?: string;
  frontendUrl?: string;
  backendUrl?: string;
}


export const projects: Project[] = [
        {
            id: 1,
            title: "Sistema de Gestión y Reservas para Barbería",
            icon: <ImScissors />,
            status: "Completado",
            year: "2025",
            longDescription: "Diseñé e implementé una solución web para optimizar la gestión de citas y mejorar la visibilidad online de la barbería. El sistema incluye vista de cliente con catálogo de servicios y sistema de reserva en tiempo real, además de un panel de administrador para gestión de clientes y control de horarios.",
            client: "Caballeros del Señor - BarberShop",
            duration: "7 meses",
            tech: ["React", "Node.js", "MongoDB", "Express", "Tailwind CSS", "Railway", "Cloudinary"],
            image: "https://res.cloudinary.com/dibpc6jxc/image/upload/v1761413577/CdS_g5pamv.png",
            demoUrl:"https://testingbarbershop.netlify.app/login",
            codeUrl: "",
            frontendUrl: "https://github.com/Breyner794/Barber_shop_V2",
            backendUrl: "https://github.com/Breyner794/backend-barbershop"
        },
        {
            id: 2,
            title: "M.E.R.N - Aerolinea_Express",
            icon: <MdOutlineAirplanemodeActive />,
            status: "Completado",
            year: "2024",
            longDescription: "El proyecto se usan las tecnologias Mongo como base de datos, Express, React y Node.js, donde se crea un CRUD, donde se puede crear, leer, modificar y eliminar vuelos. Ademas de autenticar usuarios y administrar reservas de vuelos a traves de una interfaz amigable e intuitiva. (credenciales de usuario: test@gmail.com - 123456)",
            client: "Proyecto institucional",
            duration: "1 meses",
            tech: ["React", "MongoDB", "Netlify", "Express", "Node.js", "Tailwind CSS"],
            image: "https://res.cloudinary.com/dibpc6jxc/image/upload/v1761420957/Captura_de_pantalla_2025-10-25_143529_iukfgl.png",
            demoUrl:"https://aerolineaexpress.netlify.app/",
            codeUrl: "",
            frontendUrl: "https://github.com/Breyner794/m.e.r.n-frontend",
            backendUrl: "https://github.com/Breyner794/m.e.r.n-backend"
        },
        {
            id: 3,
            title: "Booking - TypeScript Next.js",
            icon: <MdAirlines />,
            status: "Beta",
            year: "2024",
            longDescription: "Desarrollé un sistema de reservas ágil utilizando Next.js, React y TypeScript, conectado a Firebase para la gestión de datos en tiempo real. La funcionalidad clave del proyecto es la generación y descarga automática de un PDF de confirmación inmediatamente después de que el usuario envía su información a través de un formulario minimalista (creado con Shadcn/ui), automatizando el proceso de comprobación para el cliente.",
            client: "Proyecto institucional",
            duration: "1 meses",
            tech: ["TypeScript", "Next.js", "Firebase", "MongoDB", "Shadcn/ui", "PDFLib"],
            image: "https://res.cloudinary.com/dibpc6jxc/image/upload/v1761421245/Captura_de_pantalla_2025-10-25_144020_v2afwf.png",
            demoUrl:"https://agendamiento-vuelos.firebaseapp.com/",
            codeUrl: "https://github.com/Breyner794/booking_typescript",
            frontendUrl: "",
            backendUrl: ""
        },
        {
            id: 4,
            title: "Extracción de Texto de Imágenes con Python",
            icon: <MdOutlineDocumentScanner />,
            status: "Beta",
            year: "2024",
            longDescription: "Desarrollé un sistema de extracción de texto de imágenes utilizando Python y bibliotecas como Tesseract. El sistema permite la carga de imágenes, el procesamiento de texto y la exportación de resultados en formatos editables.",
            client: "Automundial S.A.S",
            duration: "2 meses",
            tech: ["Python", "Tesseract"],
            image: "https://res.cloudinary.com/dibpc6jxc/image/upload/v1761421887/398490862-4f606b0a-c316-4e24-ac83-f32eddf9c967_idy8qa.jpg",
            demoUrl:"",
            codeUrl: "https://github.com/Breyner794/primer_paso_tesseract",
            frontendUrl: "",
            backendUrl: ""
        },
        {
            id: 5,
            title: "TEKINOO 2099",
            icon: <GrGamepad />,
            status: "Completado",
            year: "2025",
            longDescription: "Proyecto de desarrollo digital y fusión artística llevado a cabo con el Artista Cultural caleño David Fonseca. El resultado es una experiencia web única, diseñada como un portal interactivo con la apariencia y manejo de una máquina arcade. Este enfoque busca ofrecer una manera nostálgica y atractiva para que el público se sumerja en el universo audiovisual del artista, utilizando los controles físicos del arcade como un innovador medio de interacción para acceder a sus videos y publicaciones.",
            client: "BICHO R4R",
            duration: "1 meses",
            tech: ["JavaScript", "HTML", "CSS"],
            image: "https://res.cloudinary.com/dibpc6jxc/image/upload/v1761667853/Captura_de_pantalla_2025-10-28_111000_mngspx.png",
            demoUrl:"https://tekino20999.netlify.app/",
            instaLinkColaborate: "https://www.instagram.com/bicharrooo_/",
            codeUrl: "",
            frontendUrl: "",
            backendUrl: ""
        }
    ];