"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import Image from "next/image";

export default function Home() {
  const [open, setOpen] = useState<"empresas" | "postulantes" | null>(null);
  const [openService, setOpenService] = useState<string | null>(null);

  async function handleSubmit(type: "empresas" | "postulantes", data: any) {
    await fetch("/api/contact", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ type, ...data }),
    });

    alert(
      type === "empresas"
        ? "Consulta enviada correctamente"
        : "CV enviado correctamente"
    );
  }

  const vacancies = [
    ["Auxiliar Administrativo", "Montevideo"],
    ["Analista de Recursos Humanos", "Montevideo"],
    ["Operario de Producción", "Canelones"],
  ];

  return (
    <main className="min-h-screen bg-gradient-to-b from-white to-gray-50 text-[#111] font-sans">

      {/* HEADER */}
      <header className="flex flex-col sm:flex-row justify-between items-center px-4 sm:px-8 lg:px-12 py-4 sm:py-6 border-b bg-white sticky top-0 z-50 gap-4">
        <a href="#inicio">
          <Image
            src="/logo-workoffice.png"
            alt="Work Office"
            width={320}
            height={80}
            priority
            className="h-auto w-[160px] sm:w-[220px] lg:w-[320px]"
          />
        </a>

        <nav className="flex flex-wrap justify-center gap-4 sm:gap-10 text-sm font-medium text-gray-600">
          <a href="#inicio" className="hover:text-[#216089]">Inicio</a>
          <a href="#nosotros" className="hover:text-[#216089]">Nosotros</a>
          <a href="#servicios" className="hover:text-[#216089]">Servicios</a>
          <a href="#vacantes" className="hover:text-[#216089]">Vacantes</a>
          <a href="#contacto" className="hover:text-[#216089]">Contacto</a>
        </nav>
      </header>

      {/* HERO */}
      <section id="inicio" className="relative min-h-[70vh] sm:h-[700px] flex items-center justify-center overflow-hidden">
        <video autoPlay muted loop playsInline className="absolute inset-0 w-full h-full object-cover">
          <source src="/hero-video.mp4" type="video/mp4" />
        </video>

        <div className="absolute inset-0 bg-black/50"></div>

        <div className="relative z-10 text-center px-4 sm:px-6 max-w-4xl">
          <motion.h2
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-2xl sm:text-4xl md:text-6xl font-bold text-white leading-tight"
          >
            Encontramos el talento que impulsa el crecimiento de tu organización
          </motion.h2>

          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.3 }}
            className="mt-6 text-base sm:text-lg md:text-xl text-gray-200"
          >
            Soluciones integrales en Recursos Humanos para empresas y postulantes.
          </motion.p>
        </div>
      </section>

      {/* NOSOTROS */}
      <section id="nosotros" className="bg-white px-4 sm:px-8 lg:px-12 py-20 max-w-6xl mx-auto">
        <h3 className="text-3xl sm:text-4xl font-bold mb-10 text-[#216089] text-center">
          ¿Quiénes somos?
        </h3>

        <p className="text-gray-700 text-base sm:text-lg leading-8">
          Work Office es una consultora uruguaya especializada en soluciones en Capital Humano...
        </p>
      </section>

      {/* VALORES */}
      <section className="bg-[#216089] px-4 sm:px-8 lg:px-12 py-20">
        <div className="max-w-7xl mx-auto">
          <h3 className="text-3xl sm:text-4xl font-bold text-white text-center mb-14">
            Valores que nos orientan
          </h3>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            {["Experiencia", "Confidencialidad", "Vocación", "Compromiso"].map((v) => (
              <div key={v} className="bg-white rounded-full px-6 py-4 text-center font-semibold text-[#216089]">
                {v}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* EQUIPO */}
      <section className="bg-white px-4 sm:px-8 lg:px-12 py-20 max-w-7xl mx-auto grid md:grid-cols-2 gap-10 items-center">
        <div>
          <h3 className="text-3xl sm:text-4xl font-bold text-[#216089] mb-6">
            Nuestro equipo
          </h3>

          <p className="text-gray-700 leading-8">
            Contamos con profesionales especializados...
          </p>
        </div>

        <Image
          src="/hero-equipo.jpg"
          alt="Equipo"
          width={800}
          height={500}
          className="rounded-2xl"
        />
      </section>

      {/* SERVICIOS */}
      <section id="servicios" className="px-4 sm:px-8 lg:px-12 py-20 bg-white max-w-6xl mx-auto">
        <h3 className="text-3xl sm:text-4xl font-bold text-center mb-10 text-[#216089]">
          Servicios
        </h3>

        <div className="flex flex-col gap-4">
          {["Selección de Personal", "Temporarios", "Payroll"].map((s) => (
            <div key={s} className="bg-[#216089] text-white rounded-full px-6 py-4">
              {s}
            </div>
          ))}
        </div>
      </section>

      {/* VACANTES */}
      <section id="vacantes" className="px-4 sm:px-8 lg:px-12 py-20 bg-gray-50">
        <h3 className="text-3xl font-bold text-center mb-10 text-[#216089]">
          Oportunidades Laborales
        </h3>

        <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-6">
          {vacancies.map(([t, c]) => (
            <div key={t} className="bg-white p-6 rounded-xl shadow">
              <h4 className="font-bold">{t}</h4>
              <p className="text-gray-500">{c}</p>
            </div>
          ))}
        </div>
      </section>

      {/* CONTACTO */}
      <section id="contacto" className="px-4 sm:px-8 lg:px-12 py-20">
        <h3 className="text-3xl font-bold text-center mb-10 text-[#216089]">
          Contacto
        </h3>

        <div className="flex flex-col sm:flex-row justify-center gap-4 mb-10">
          <button className="bg-[#216089] text-white px-6 py-3 rounded-full">
            Empresas
          </button>

          <button className="border border-[#216089] text-[#216089] px-6 py-3 rounded-full">
            Postulantes
          </button>
        </div>
      </section>

      {/* FOOTER */}
      <footer className="bg-[#216089] text-white px-4 sm:px-8 lg:px-12 py-12">
        <div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-10">
          <div>
            <h4 className="font-bold text-xl">¿Dónde estamos?</h4>
            <p>Montevideo, Uruguay</p>
          </div>

          <div className="md:text-right">
            <h4 className="font-bold text-xl">Work Office</h4>
            <p>contacto@workoffice.com.uy</p>
          </div>
        </div>
      </footer>

    </main>
  );
}