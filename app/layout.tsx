import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import AdaptiveSquaresBackground from "@/components/background_Animate/AdaptiveSquaresBackground";
import { PortfolioDock } from "@/components/dock/PortfolioDock";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Breyner Quilindo | Desarrollador Web Junior",
  description: "Desarrollador web creando experiencias interactivas. Explora mis proyectos.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="es">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        <div className="fixed inset-0 z-0 opacity-10">
          <AdaptiveSquaresBackground />
        </div>

        <div className="relative z-10">
          {children}
          <div
            className="fixed bottom-0 left-0 right-0 p-4 flex justify-center z-50 pointer-events-none"
          >
            <div className="pointer-events-auto">
              <PortfolioDock />
            </div>
          </div>
        </div>
      </body>
    </html>
  );
}
