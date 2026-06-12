"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import Image from "next/image";
export default function Home() {
  const [openService, setOpenService] = useState<string | null>(null);
  const [openForm, setOpenForm] = useState<"empresas" | "postulantes" | null>(null);

  const services = [
    {
      title: "Selección de Personal",
      desc: "Identificamos y evaluamos candidatos alineados a las necesidades de cada organización.",
    },
    {
      title: "Personal Temporario",
      desc: "Soluciones ágiles para cubrir necesidades operativas y picos de trabajo.",
    },
    {
      title: "Payroll",
      desc: "Gestión integral de liquidación de haberes y administración de personal.",
    },
    {
      title: "Evaluaciones Psicolaborales",
      desc: "Herramientas profesionales para selección y desarrollo de talento.",
    },
    {
      title: "Desarrollo Organizacional",
      desc: "Acompañamiento en procesos de mejora y gestión del talento.",
    },
    {
      title: "Onboarding y Outplacement",
      desc: "Procesos de inducción y reinserción laboral personalizados.",
    },
  ];

  const values = ["Experiencia", "Confidencialidad", "Vocación", "Compromiso"];

  return (
    <main className="bg-white text-[#111]">

      {/* HEADER */}
      <header className="flex justify-between items-center px-10 py-5 border-b bg-white sticky top-0 z-50">
        <Image
          src="/logo-workoffice.png"
          alt="Work Office"
          width={180}
          height={60}
        />

        <nav className="flex gap-6 text-sm text-gray-600 font-medium">
          <a href="#inicio">Inicio</a>
          <a href="#nosotros">Nosotros</a>
          <a href="#servicios">Servicios</a>
          <a href="#oportunidades">Oportunidades</a>
          <a href="#contacto">Contacto</a>
        </nav>
      </header>

      {/* HERO */}
      <section id="inicio" className="relative h-[700px] flex items-center justify-center text-center overflow-hidden">
        <video autoPlay muted loop playsInline className="absolute w-full h-full object-cover">
          <source src="/hero-video.mp4" />
        </video>

        <div className="absolute inset-0 bg-black/50" />

        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          className="relative z-10 max-w-4xl px-6"
        >
          <h1 className="text-white text-4xl md:text-6xl font-bold">
            Encontramos el talento que impulsa tu organización
          </h1>
          <p className="text-gray-200 mt-6 text-lg">
            Soluciones integrales en Recursos Humanos para empresas y postulantes.
          </p>
        </motion.div>
      </section>

      {/* NOSOTROS */}
      <section id="nosotros" className="py-24 max-w-5xl mx-auto px-6 text-center">
        <h2 className="text-3xl font-bold text-[#216089] mb-6">¿Quiénes somos?</h2>
        <p className="text-gray-700 leading-8">
          Work Office es una consultora especializada en Capital Humano con más de 30 años de experiencia,
          acompañando organizaciones públicas y privadas en la gestión de personas.
        </p>
      </section>

{/* MISIÓN + VISIÓN PREMIUM */}
<section className="py-24 px-6 bg-white space-y-20">

  <div className="max-w-6xl mx-auto space-y-20">

    {/* MISIÓN */}
    <motion.div
      initial={{ opacity: 0, y: 60 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.3 }}
      transition={{ duration: 0.6 }}
      whileHover={{ scale: 1.02, rotateX: 2, rotateY: -2 }}
      className="grid md:grid-cols-2 items-center gap-10 bg-[#216089] rounded-2xl shadow-xl overflow-hidden"
    >
      {/* TEXTO */}
      <div className="p-10 text-white">
        <h3 className="text-3xl font-bold mb-4">
          Misión
        </h3>
        <p className="leading-relaxed text-white/90">
          Brindar soluciones de Recursos Humanos con calidad, confianza y cercanía.
        </p>
      </div>

      {/* IMAGEN */}
      <Image
        src="/hero-mision.jpg"
        alt="Misión"
        width={900}
        height={600}
        className="w-full h-full object-cover"
      />
    </motion.div>

    {/* VISIÓN */}
    <motion.div
      initial={{ opacity: 0, y: 60 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.3 }}
      transition={{ duration: 0.6, delay: 0.2 }}
      whileHover={{ scale: 1.02, rotateX: -2, rotateY: 2 }}
      className="grid md:grid-cols-2 items-center gap-10 bg-white rounded-2xl shadow-xl border border-gray-100 overflow-hidden"
    >
      {/* IMAGEN */}
      <Image
        src="/hero-vision.jpg"
        alt="Visión"
        width={900}
        height={600}
        className="w-full h-full object-cover md:order-1 order-2"
      />

      {/* TEXTO */}
      <div className="p-10 md:order-2 order-1">
        <h3 className="text-3xl font-bold text-[#216089] mb-4">
          Visión
        </h3>
        <p className="leading-relaxed text-gray-600">
          Ser referentes en gestión del Capital Humano como aliados estratégicos.
        </p>
      </div>
    </motion.div>

  </div>
</section>

{/* VALORES */}
<section className="bg-[#216089] py-20 text-center">
  <h2 className="text-white text-3xl font-bold mb-10">Valores</h2>

  <div className="flex flex-wrap justify-center gap-4">
    {values.map((v) => (
      <motion.div
        key={v}
        whileHover={{
          scale: 1.08,
          rotateX: 6,
          rotateY: -6,
        }}
        transition={{
          type: "spring",
          stiffness: 200,
          damping: 15,
        }}
        className="bg-white text-[#216089] px-6 py-3 rounded-full font-semibold flex items-center gap-2 cursor-pointer shadow-md"
      >
        <span>✓</span> {v}
      </motion.div>
    ))}
  </div>
</section>

      {/* EQUIPO */}
      <section className="py-24 max-w-6xl mx-auto px-6 grid md:grid-cols-2 gap-10 items-center">
        <div>
          <h3 className="text-3xl font-bold text-[#216089] mb-4">Nuestro equipo</h3>
          <p className="text-gray-700 leading-8">
            Profesionales en Psicología Laboral y Recursos Humanos comprometidos con la calidad del servicio.
          </p>
        </div>

        <Image
          src="/hero-equipo.jpg"
          alt="Equipo"
          width={800}
          height={500}
          className="rounded-xl"
        />
      </section>

      {/* CLIENTES */}
      <section className="bg-gray-50 py-20 text-center">
        <h2 className="text-2xl font-bold text-[#216089] mb-10">Empresas que confían en nosotros</h2>

        <div className="grid grid-cols-2 md:grid-cols-5 gap-6 px-10">
          {[1,2,3,4,5].map((n) => (
            <div key={n} className="bg-white p-4 rounded-xl shadow">
              <Image
                src={`/cliente${n}.png`}
                alt={`Cliente ${n}`}
                width={120}
                height={60}
              />
            </div>
          ))}
        </div>
      </section>

      {/* SERVICIOS */}
      <section id="servicios" className="py-24 max-w-5xl mx-auto px-6">
        <h2 className="text-3xl font-bold text-center text-[#216089] mb-10">
          Servicios
        </h2>

        <div className="space-y-4">
          {services.map((s) => (
            <div key={s.title} className="border rounded-xl overflow-hidden">
              <button
                onClick={() =>
                  setOpenService(openService === s.title ? null : s.title)
                }
                className="w-full text-left p-5 bg-[#216089] text-white font-semibold"
              >
                {s.title}
              </button>

              {openService === s.title && (
                <div className="p-5 text-gray-700 bg-white">
                  {s.desc}
                </div>
              )}
            </div>
          ))}
        </div>
      </section>

      {/* OPORTUNIDADES LABORALES */}
      <section id="oportunidades" className="py-20 text-center bg-gray-50">
        <h2 className="text-3xl font-bold text-[#216089] mb-6">
          Oportunidades Laborales
        </h2>

        <p className="mb-6 text-gray-600">
          Accedé a nuestras vacantes activas
        </p>

        <a
          href="https://www.buscojobs.com.uy/empresas/214536/work-office"
          target="_blank"
          className="bg-[#216089] text-white px-8 py-4 rounded-full"
        >
          Ver oportunidades
        </a>
      </section>

      {/* CONTACTO */}
      <section id="contacto" className="py-24 max-w-4xl mx-auto px-6 text-center">
        <h2 className="text-3xl font-bold text-[#216089] mb-8">Contacto</h2>

        <div className="flex justify-center gap-4 mb-10">
          <button
            onClick={() => setOpenForm("empresas")}
            className="bg-[#216089] text-white px-6 py-3 rounded-full"
          >
            Empresas
          </button>

          <button
            onClick={() => setOpenForm("postulantes")}
            className="border border-[#216089] text-[#216089] px-6 py-3 rounded-full"
          >
            Postulantes
          </button>
        </div>

        {openForm === "empresas" && (
          <form className="space-y-3">
            <input className="border p-2 w-full" placeholder="Empresa" />
            <input className="border p-2 w-full" placeholder="Contacto" />
            <input className="border p-2 w-full" placeholder="Email" />
            <textarea className="border p-2 w-full" placeholder="Mensaje" />
          </form>
        )}

        {openForm === "postulantes" && (
          <form className="space-y-3">
            <input className="border p-2 w-full" placeholder="Nombre" />
            <input className="border p-2 w-full" placeholder="Email" />
            <input type="file" className="border p-2 w-full" />
            <textarea className="border p-2 w-full" placeholder="Mensaje" />
          </form>
        )}
      </section>

      {/* FOOTER */}
      <footer className="bg-[#216089] text-white text-center py-10">
        <div className="flex flex-col items-center gap-3">
          <Image src="/mapa-uruguay.png" alt="Mapa" width={180} height={120} />
          <p>Convención 1343, Montevideo</p>
          <p>+598 2900 8504</p>
        </div>
      </footer>

    </main>
  );
}