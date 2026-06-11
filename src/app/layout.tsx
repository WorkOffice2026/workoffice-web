import type { Metadata } from "next";
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

export const metadata: Metadata = {
  title: {
    default: "Work Office | Consultora de Recursos Humanos en Uruguay",
    template: "%s | Work Office",
  },
  description:
    "Work Office es una consultora de recursos humanos en Uruguay especializada en selección de personal, outsourcing, payroll y soluciones laborales para empresas y postulantes.",

  keywords: [
    "recursos humanos Uruguay",
    "consultora RRHH Montevideo",
    "selección de personal",
    "trabajo Uruguay",
    "empleos Montevideo",
    "outsourcing RRHH",
    "payroll Uruguay",
  ],

  metadataBase: new URL("https://workoffice.com.uy"),

  openGraph: {
    title: "Work Office | Consultora de Recursos Humanos en Uruguay",
    description:
      "Soluciones integrales en recursos humanos para empresas y postulantes en Uruguay.",
    url: "https://workoffice.com.uy",
    siteName: "Work Office",
images: [
  {
    url: new URL("/og-image.jpg", "https://workoffice.com.uy"),
    width: 1200,
    height: 630,
    alt: "Work Office - Recursos Humanos Uruguay",
  },
],
    locale: "es_UY",
    type: "website",
  },

  twitter: {
    card: "summary_large_image",
    title: "Work Office | RRHH en Uruguay",
    description:
      "Consultora de recursos humanos especializada en selección de personal y soluciones laborales.",
    images: ["/og-image.jpg"],
  },

  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-image-preview": "large",
    },
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="es"
      className={`${geistSans.variable} ${geistMono.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col">{children}</body>
    </html>
  );
}
