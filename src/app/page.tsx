"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import Image from "next/image";
import { FaLinkedinIn, FaInstagram } from "react-icons/fa";

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

        <div className="flex items-center gap-10">

          <nav className="flex gap-6 text-sm text-gray-600 font-medium">
            <a href="#inicio" className="hover:text-[#216089] transition">Inicio</a>
            <a href="#nosotros" className="hover:text-[#216089] transition">Nosotros</a>
            <a href="#servicios" className="hover:text-[#216089] transition">Servicios</a>
            <a href="#oportunidades" className="hover:text-[#216089] transition">Oportunidades</a>
            <a href="#contacto" className="hover:text-[#216089] transition">Contacto</a>
          </nav>

          <div className="flex items-center gap-4 text-[#216089] ml-2">
            <a href="https://www.linkedin.com/company/workofficeuy/posts/?feedView=all" target="_blank">
              <FaLinkedinIn size={18} />
            </a>
            <a href="https://www.instagram.com/workofficeuy?igsh=NjFobGM2ODN4OTF2" target="_blank">
              <FaInstagram size={18} />
            </a>
          </div>

        </div>
      </header>

      {/* HERO */}
      <section id="inicio" className="relative h-[700px] flex items-center justify-center text-center overflow-hidden">
        <video autoPlay muted loop playsInline className="absolute w-full h-full object-cover">
          <source src="/hero-video.mp4" />
        </video>
        <div className="absolute inset-0 bg-black/50" />

        <motion.div className="relative z-10 max-w-4xl px-6">
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
          Work Office es una consultora uruguaya especializada en soluciones en Capital Humano, con más de 30 años de trayectoria en el mercado, acompañando a organizaciones públicas y privadas en la gestión de personas.
          <br /><br />
          Nuestra experiencia sostenida en el tiempo se complementa con la incorporación de nuevas tecnologías, alianzas estratégicas y procesos de mejora continua, manteniendo un enfoque profesional, responsable y ético.
        </p>
      </section>

      {/* MISIÓN + VISIÓN */}
      <section className="py-24 px-6 bg-white space-y-20">
        <div className="max-w-6xl mx-auto space-y-20">

          {/* MISIÓN */}
          <motion.div className="grid md:grid-cols-2 items-center gap-10 bg-[#216089] rounded-2xl shadow-xl overflow-hidden">
            <div className="p-10 text-white">
              <h3 className="text-3xl font-bold mb-4">Misión</h3>
              <p className="leading-relaxed text-white/90">
                Brindar soluciones personalizadas en Recursos Humanos, con atención profesional y procesos de calidad, trabajando junto a cada cliente para responder a sus necesidades con confianza y eficacia.
              </p>
            </div>

            <Image src="/hero-mision.jpg" alt="Misión" width={900} height={600} className="w-full h-full object-cover" />
          </motion.div>

          {/* VISIÓN */}
          <motion.div className="grid md:grid-cols-2 items-center gap-10 bg-white rounded-2xl shadow-xl border border-gray-100 overflow-hidden">

            <Image src="/hero-vision.jpg" alt="Visión" width={900} height={600} className="w-full h-full object-cover md:order-1 order-2" />

            <div className="p-10 md:order-2 order-1">
              <h3 className="text-3xl font-bold text-[#216089] mb-4">Visión</h3>
              <p className="leading-relaxed text-gray-600">
                Continuar siendo referentes en la gestión del Capital Humano, como aliados estratégicos de las organizaciones, con un equipo comprometido con el trato humano y la responsabilidad institucional.
              </p>
            </div>

          </motion.div>

        </div>
      </section>

      {/* VALORES */}
      <section className="bg-[#216089] py-20 text-center">
        <h2 className="text-white text-3xl font-bold mb-10">Valores que nos orientan</h2>

        <div className="flex flex-wrap justify-center gap-4">
          {values.map((v) => (
            <motion.div key={v} className="bg-white text-[#216089] px-6 py-3 rounded-full font-semibold">
              {v}
            </motion.div>
          ))}
        </div>
      </section>

      {/* EQUIPO */}
      <motion.section className="py-24 max-w-6xl mx-auto px-6 grid md:grid-cols-2 gap-10 items-center">

        <div>
          <h3 className="text-3xl font-bold text-[#216089] mb-4">Nuestro equipo</h3>

          <p className="text-gray-700 leading-8">
            Contamos con profesionales especializados en Psicología Laboral, Recursos Humanos, Administración y Gestión Organizacional, trabajando de forma coordinada para garantizar procesos eficientes, seguimiento cercano y respuestas adaptadas a cada cliente.
            <br /><br />
            Las responsabilidades se encuentran claramente delimitadas, con seguimiento activo de las instancias técnicas y de gestión.
          </p>
        </div>

        <Image src="/hero-equipo.jpg" alt="Equipo" width={800} height={500} className="rounded-xl shadow-xl w-full object-cover" />

      </motion.section>

      {/* CLIENTES */}
      <section className="bg-gray-50 py-20 text-center">
        <h2 className="text-2xl font-bold text-[#216089] mb-10">
          Empresas que confían en nosotros
        </h2>
      </section>

      {/* SERVICIOS */}
      <section id="servicios" className="py-24 max-w-5xl mx-auto px-6">
        <h2 className="text-3xl font-bold text-center text-[#216089] mb-10">Servicios</h2>

        <div className="space-y-4">
          {services.map((s) => (
            <div key={s.title} className="border rounded-xl overflow-hidden">
              <button
                onClick={() => setOpenService(openService === s.title ? null : s.title)}
                className="w-full p-5 bg-[#216089] text-white font-semibold flex justify-between"
              >
                {s.title}
                <span>{openService === s.title ? "−" : "+"}</span>
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

      {/* CONTACTO */}
      <section id="contacto" className="py-24 max-w-4xl mx-auto px-6 text-center">
        <h2 className="text-3xl font-bold text-[#216089] mb-8">Contacto</h2>
      </section>

      {/* FOOTER */}
      <footer className="bg-[#216089] text-white py-12">
        <div className="max-w-6xl mx-auto px-6">
          <div className="grid md:grid-cols-3 gap-10 items-center">

            <div>
              <Image src="/mapa-uruguay.png" alt="Mapa" width={220} height={170} />
            </div>

            <div className="text-center">
              <p>Convención 1343, Piso 4 Of. 407</p>
              <p>(+598) 2900 8504</p>
              <p>Montevideo | Uruguay</p>
            </div>

            <div className="flex justify-center">
              <Image src="/iconlogo-workoffice.png" alt="Logo" width={150} height={150} />
            </div>

          </div>
        </div>
      </footer>

    </main>
  );
}