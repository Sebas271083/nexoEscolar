import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata = {
  title: "NexoEscolar — Comunicación escolar ordenada y profesional",
  description:
    "NexoEscolar centraliza anuncios, calendario, usuarios, cursos y auditoría en una plataforma web pensada para colegios. Sin instalaciones, con roles y permisos.",
  keywords: [
    "plataforma escolar",
    "comunicación institucional",
    "gestión escolar",
    "software para colegios",
    "anuncios escolares",
    "calendario institucional",
    "NexoEscolar",
  ],
  openGraph: {
    title: "NexoEscolar — Comunicación escolar ordenada y profesional",
    description:
      "Centralizá anuncios, calendario, usuarios y cursos de tu colegio en una sola plataforma moderna.",
    type: "website",
    locale: "es_AR",
  },
};

export default function RootLayout({ children }) {
  return (
    <html
      lang="es"
      className={`${geistSans.variable} ${geistMono.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col">{children}</body>
    </html>
  );
}
