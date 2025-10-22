import TextType from "@/components/letter_style/TextType";
import DecryptedText from "@/components/letter_style/DescripText";
import AnimatedScrollDown from "@/components/scrolls/AnimatedScrollDown";
import About from "./about/page";

export default function Home() {
  return (
    <main className="flex flex-col w-full">
      {/* SECCIÓN 1: Hero */}
      <section className="relative min-h-screen flex flex-col items-center justify-center w-full px-4">
        <div className="w-full max-w-4xl mx-auto flex flex-col items-center text-center mb-20">
          <h1 className="mb-4">
            <TextType
              text={[
                "¡Hola, mundo!",
                "Bienvenido a mi sitio web!",
                "¡Disfruta tu estancia!",
                "Hello, World!",
                "Welcome to my website.",
                "Enjoy your stay!"
              ]}
              typingSpeed={100}
              pauseDuration={2500}
              showCursor={true}
              className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-mono"
            />
          </h1>
          <p className="mt-10 max-w-3xl text-center text-base sm:text-lg md:text-xl">
            <DecryptedText
              text="Breyner Farid Quilindo, Desarrollador de Software y Tecnólogo en Sistemas de Información. ¿Quieres descubrir más?"
            />
          </p>
        </div>

        {/* Scroll indicator con su propio contenedor */}
        <div className="absolute bottom-30 left-1/2 -translate-x-1/2">
          <AnimatedScrollDown />
        </div>
      </section>

      {/* SECCIÓN 2: Acerca de Mí */}
      <section id="acerca-de-mi" className="py-20 px-4 w-full">
        <About />
      </section>

      {/* SECCIÓN 3: Mis Habilidades */}
      <section id="habilidades" className="py-20 px-4 w-full mb-20">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl sm:text-4xl text-center mb-8">Skills</h2>
          {/* ... Grid de iconos o tarjetas de habilidades ... */}
        </div>
      </section>
    </main>
  );
}
