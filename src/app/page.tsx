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
            <a href="#inicio">Inicio</a>
            <a href="#nosotros">Nosotros</a>
            <a href="#servicios">Servicios</a>
            <a href="#oportunidades">Oportunidades</a>
            <a href="#contacto">Contacto</a>
          </nav>

          <div className="flex gap-4 text-[#216089]">
            <a href="https://www.linkedin.com/company/workofficeuy/posts/?feedView=all" target="_blank">
              <FaLinkedinIn />
            </a>
            <a href="https://www.instagram.com/workofficeuy?igsh=NjFobGM2ODN4OTF2" target="_blank">
              <FaInstagram />
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
          Work Office es una consultora uruguaya especializada en soluciones en Capital Humano, con más de 30 años de trayectoria en el mercado, acompañando a organizaciones públicas y privadas en la gestión de personas.
          <br /><br />
          Nuestra experiencia sostenida en el tiempo se complementa con la incorporación de nuevas tecnologías, alianzas estratégicas y procesos de mejora continua, manteniendo un enfoque profesional, responsable y ético.
        </p>
      </section>

{/* MISIÓN + VISIÓN */}
<section className="py-20 px-6 space-y-14">

  {/* MISIÓN */}
  <motion.div
    initial={{ opacity: 0, x: -40 }}
    whileInView={{ opacity: 1, x: 0 }}
    viewport={{ once: true, amount: 0.3 }}
    transition={{ duration: 0.8, ease: "easeOut" }}
    className="grid md:grid-cols-2 bg-[#216089] rounded-xl overflow-hidden shadow-lg max-w-6xl mx-auto"
  >
    <div className="p-10 lg:p-12 text-white flex flex-col justify-center">
      <h3 className="text-3xl font-bold mb-4">
        Misión
      </h3>

      <div className="w-16 h-1 bg-white rounded-full mb-6" />

      <p className="text-white/90 leading-relaxed text-lg">
        Brindar soluciones personalizadas en Recursos Humanos, con atención profesional y procesos de calidad, trabajando junto a cada cliente para responder a sus necesidades con confianza y eficacia.
      </p>
    </div>

    <Image
      src="/hero-mision.jpg"
      alt="mision"
      width={900}
      height={600}
      className="object-cover w-full h-full"
    />
  </motion.div>

  {/* VISIÓN */}
  <motion.div
    initial={{ opacity: 0, x: 40 }}
    whileInView={{ opacity: 1, x: 0 }}
    viewport={{ once: true, amount: 0.3 }}
    transition={{ duration: 0.8, delay: 0.15, ease: "easeOut" }}
    className="grid md:grid-cols-2 bg-white rounded-xl overflow-hidden border shadow-lg max-w-6xl mx-auto"
  >
    <Image
      src="/hero-vision.jpg"
      alt="vision"
      width={900}
      height={600}
      className="object-cover w-full h-full md:order-1 order-2"
    />

    <div className="p-10 lg:p-12 md:order-2 order-1 flex flex-col justify-center">
      <h3 className="text-3xl font-bold text-[#216089] mb-4">
        Visión
      </h3>

      <div className="w-16 h-1 bg-[#216089] rounded-full mb-6" />

      <p className="text-gray-600 leading-relaxed text-lg">
        Continuar siendo referentes en la gestión del Capital Humano, como aliados estratégicos de las organizaciones, con un equipo comprometido con el trato humano y la responsabilidad institucional.
      </p>
    </div>
  </motion.div>

</section>

{/* VALORES */}
<section className="bg-[#216089] py-20 text-center">
  <h2 className="text-white text-3xl font-bold mb-10">
    Valores que nos orientan
  </h2>

  <motion.div
    className="flex flex-wrap justify-center gap-4"
    initial="hidden"
    whileInView="show"
    viewport={{ once: true, amount: 0.3 }}
    variants={{
      hidden: {},
      show: {
        transition: {
          staggerChildren: 0.12
        }
      }
    }}
  >
    {values.map(v => (
      <motion.div
        key={v}
        variants={{
          hidden: { opacity: 0, y: 10, scale: 0.95 },
          show: { opacity: 1, y: 0, scale: 1 }
        }}
        transition={{ duration: 0.45, ease: "easeOut" }}
        whileHover={{ scale: 1.08 }}
        className="bg-white text-[#216089] px-6 py-3 rounded-full flex items-center gap-2 cursor-default"
      >
        <span className="text-[#216089] text-xs font-bold">✓</span>
        {v}
      </motion.div>
    ))}
  </motion.div>
</section>

{/* EQUIPO */}
<motion.section
  initial={{ opacity: 0, x: -40 }}
  whileInView={{ opacity: 1, x: 0 }}
  viewport={{ once: true, amount: 0.3 }}
  transition={{ duration: 0.8, ease: "easeOut" }}
  className="py-24 max-w-6xl mx-auto px-6 grid md:grid-cols-2 gap-10 items-center"
>
  <div className="flex flex-col justify-center">
    <h3 className="text-3xl font-bold text-[#216089] mb-4">
      Nuestro equipo
    </h3>

    <div className="w-16 h-1 bg-[#216089] rounded-full mb-6" />

    <p className="text-gray-700 leading-8 text-lg">
      Contamos con profesionales especializados en Psicología Laboral, Recursos Humanos, Administración y Gestión Organizacional, trabajando de forma coordinada para garantizar procesos eficientes y respuestas adaptadas a cada cliente.
      <br /><br />
      Las responsabilidades se encuentran claramente delimitadas con seguimiento técnico continuo.
    </p>
  </div>

  <Image
    src="/hero-equipo.jpg"
    alt="equipo"
    width={800}
    height={500}
    className="rounded-xl shadow-lg"
  />
</motion.section>

<section className="bg-gray-50 py-20 text-center">
  <h2 className="text-2xl font-bold text-[#216089] mb-10">
    Empresas que confían en nosotros
  </h2>

  <div className="relative max-w-6xl mx-auto px-10">

    <button
      onClick={() =>
        document.getElementById("clients-scroll")?.scrollBy({
          left: -300,
          behavior: "smooth",
        })
      }
      className="absolute left-0 top-1/2 -translate-y-1/2 bg-white shadow-md p-3 rounded-full"
    >
      ←
    </button>

    <div
      id="clients-scroll"
      className="flex gap-6 overflow-x-auto scroll-smooth px-10 py-4 scrollbar-hide"
    >
      {[1, 2, 3, 4, 5].map((n) => (
        <motion.div
          key={n}
          whileHover={{
            scale: 1.08,
            rotateX: 6,
            rotateY: -6,
          }}
          transition={{ type: "spring", stiffness: 200, damping: 15 }}
          className="min-w-[160px] bg-white p-4 rounded-xl shadow-md flex items-center justify-center"
        >
          <Image
            src={`/cliente${n}.png`}
            alt="cliente"
            width={120}
            height={60}
          />
        </motion.div>
      ))}
    </div>

    <button
      onClick={() =>
        document.getElementById("clients-scroll")?.scrollBy({
          left: 300,
          behavior: "smooth",
        })
      }
      className="absolute right-0 top-1/2 -translate-y-1/2 bg-white shadow-md p-3 rounded-full"
    >
      →
    </button>

  </div>
</section>

      {/* SERVICIOS */}
      <section id="servicios" className="py-24 max-w-5xl mx-auto px-6">
        <h2 className="text-3xl font-bold text-center text-[#216089] mb-10">
          Servicios
        </h2>

        <div className="space-y-4">
          {services.map(s => (
            <div key={s.title} className="border rounded-xl overflow-hidden">
              <button
                onClick={() => setOpenService(openService === s.title ? null : s.title)}
                className="w-full flex justify-between p-5 bg-[#216089] text-white"
              >
                {s.title}
                <span>{openService === s.title ? "−" : "+"}</span>
              </button>

              {openService === s.title && (
                <div className="p-5">{s.desc}</div>
              )}
            </div>
          ))}
        </div>
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
    <form className="space-y-3 text-left">
      <input className="border p-2 w-full" placeholder="Empresa" />
      <input className="border p-2 w-full" placeholder="Contacto" />
      <input className="border p-2 w-full" placeholder="Email" />
      <textarea className="border p-2 w-full" placeholder="Mensaje" />
    </form>
  )}

  {openForm === "postulantes" && (
    <form className="space-y-3 text-left">
      <input className="border p-2 w-full" placeholder="Nombre" />
      <input className="border p-2 w-full" placeholder="Email" />
      <input type="file" className="border p-2 w-full" />
      <textarea className="border p-2 w-full" placeholder="Mensaje" />
    </form>
  )}
</section>

      {/* FOOTER */}
      <footer className="bg-[#216089] text-white py-12">
        <div className="grid md:grid-cols-3 max-w-6xl mx-auto px-6">

          <Image src="/mapa-uruguay.png" alt="" width={220} height={160} />

          <div className="text-center">
            <p>Convención 1343, Piso 4 Of. 407</p>
            <p>(+598) 2900 8504</p>
            <p>Montevideo | Uruguay</p>
          </div>

          <Image src="/iconlogo-workoffice.png" alt="" width={150} height={150} />

        </div>
      </footer>

    </main>
  );
}