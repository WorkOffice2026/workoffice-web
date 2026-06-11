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

  const services = [
    {
      title: "Selección de Personal",
      description:
        "Identificamos y evaluamos candidatos alineados a las necesidades y cultura de cada organización.",
    },
    {
      title: "Personal Temporario",
      description:
        "Brindamos soluciones ágiles para cubrir necesidades operativas y picos de actividad.",
    },
    {
      title: "Payrolling",
      description:
        "Gestionamos procesos administrativos y laborales para optimizar la gestión del personal.",
    },
    {
      title: "Evaluaciones Laborales",
      description:
        "Aplicamos herramientas de evaluación para apoyar decisiones de selección y desarrollo.",
    },
    {
      title: "Desarrollo Organizacional",
      description:
        "Acompañamos procesos de mejora, fortalecimiento de equipos y gestión del talento.",
    },
  ];

  const vacancies = [
    ["Auxiliar Administrativo", "Montevideo"],
    ["Analista de Recursos Humanos", "Montevideo"],
    ["Operario de Producción", "Canelones"],
  ];

  return (
    <main className="min-h-screen bg-gradient-to-b from-white to-gray-50 text-[#111] font-sans">
      {/* HEADER */}
      <header className="flex justify-between items-center px-12 py-6 border-b bg-white sticky top-0 z-50">
<a href="#inicio">
  <Image
    src="/logo-workoffice.png"
    alt="Work Office"
    width={320}
    height={80}
    priority
    className="h-auto w-auto"
  />
</a>

        <nav className="flex gap-10 text-sm font-medium text-gray-600">
          <a href="#inicio" className="hover:text-[#216089] transition">
            Inicio
          </a>
          <a href="#nosotros" className="hover:text-[#216089] transition">
            Nosotros
          </a>
          <a href="#servicios" className="hover:text-[#216089] transition">
            Servicios
          </a>
          <a href="#vacantes" className="hover:text-[#216089] transition">
            Vacantes
          </a>
          <a href="#contacto" className="hover:text-[#216089] transition">
            Contacto
          </a>
        </nav>
      </header>

{/* HERO */}
<section
  id="inicio"
  className="relative h-[700px] flex items-center justify-center overflow-hidden"
>
  {/* VIDEO */}
  <video
    autoPlay
    muted
    loop
    playsInline
    className="absolute inset-0 w-full h-full object-cover"
  >
    <source src="/hero-video.mp4" type="video/mp4" />
  </video>

  {/* CAPA OSCURA */}
  <div className="absolute inset-0 bg-black/50"></div>

  {/* TEXTO */}
  <div className="relative z-10 text-center px-6 max-w-4xl">
    <motion.h2
      initial={{ opacity: 0, y: 40 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8 }}
      className="text-5xl md:text-6xl font-bold text-white leading-tight"
    >
      Encontramos el talento que impulsa el crecimiento de tu organización
    </motion.h2>

    <motion.p
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ delay: 0.3 }}
      className="mt-6 text-xl text-gray-200"
    >
      Soluciones integrales en Recursos Humanos para empresas y postulantes.
    </motion.p>
  </div>
</section>

 {/* QUIÉNES SOMOS */}
<section id="nosotros" className="bg-white">
  <div className="max-w-6xl mx-auto px-12 py-24">
    <motion.div
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.7 }}
      className="text-center"
    >
      <h3 className="text-4xl font-bold mb-10 text-[#216089]">
        ¿Quiénes somos?
      </h3>

      <div className="max-w-4xl mx-auto text-gray-700 leading-8 text-lg">
        <p>
          Work Office es una consultora uruguaya especializada en soluciones en
          Capital Humano, con más de 30 años de trayectoria en el mercado,
          acompañando a organizaciones públicas y privadas en la gestión de
          personas.
        </p>

        <p className="mt-6">
          Nuestra experiencia sostenida en el tiempo se complementa con la
          incorporación de nuevas tecnologías, alianzas estratégicas y procesos
          de mejora continua, manteniendo un enfoque profesional, responsable y
          ético.
        </p>
      </div>
    </motion.div>
  </div>

  {/* MISIÓN */}
  <section className="bg-[#216089]">
    <div className="max-w-7xl mx-auto px-12 py-20">
      <div className="grid md:grid-cols-2 gap-12 items-center">

        <motion.div
          initial={{ opacity: 0, x: -60 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          <h3 className="text-4xl font-bold text-white mb-6">
            Misión
          </h3>

          <p className="text-white/90 text-lg leading-8">
            Brindar soluciones personalizadas en Recursos Humanos, con atención
            profesional y procesos de calidad, trabajando junto a cada cliente
            para responder a sus necesidades con confianza y eficacia.
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, x: 60 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          <Image
            src="/hero-mision.jpg"
            alt="Misión Work Office"
            width={800}
            height={500}
            className="rounded-2xl shadow-2xl"
          />
        </motion.div>

      </div>
    </div>
  </section>

  {/* VISIÓN */}
  <section className="bg-white">
    <div className="max-w-7xl mx-auto px-12 py-20">
      <div className="grid md:grid-cols-2 gap-12 items-center">

        <motion.div
          initial={{ opacity: 0, x: -60 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          <Image
            src="/hero-vision.jpg"
            alt="Visión Work Office"
            width={800}
            height={500}
            className="rounded-2xl shadow-xl"
          />
        </motion.div>

        <motion.div
          initial={{ opacity: 0, x: 60 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          <h3 className="text-4xl font-bold text-[#216089] mb-6">
            Visión
          </h3>

          <p className="text-[#216089] text-lg leading-8">
            Continuar siendo referentes en la gestión del Capital Humano, como
            aliados estratégicos de las organizaciones, con un equipo
            comprometido con el trato humano y la responsabilidad institucional.
          </p>
        </motion.div>

      </div>
    </div>
  </section>
</section>
{/* VALORES */}
<section className="bg-[#216089]">
  <div className="max-w-7xl mx-auto px-12 py-20">

    <motion.div
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.7 }}
      className="text-center"
    >
      <h3 className="text-4xl font-bold text-white mb-14">
        Valores que nos orientan
      </h3>
    </motion.div>

    <div className="grid grid-cols-2 md:grid-cols-4 gap-8">

      {[
        "Experiencia",
        "Confidencialidad",
        "Vocación",
        "Compromiso",
      ].map((value) => (
        <motion.div
          key={value}
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="flex items-center justify-center gap-3 bg-white rounded-full px-8 py-5 shadow-xl hover:scale-105 transition-all duration-300"
        >
          <span className="text-[#216089] text-xl font-bold">
            ✓
          </span>

          <span className="text-[#216089] font-semibold text-lg">
            {value}
          </span>
        </motion.div>
      ))}

    </div>

  </div>
</section>
{/* NUESTRO EQUIPO */}
<section className="bg-white">
  <div className="max-w-7xl mx-auto px-12 py-24">

    <div className="grid md:grid-cols-2 gap-16 items-center">

      <motion.div
        initial={{ opacity: 0, x: -60 }}
        whileInView={{ opacity: 1, x: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8 }}
      >
        <h3 className="text-4xl font-bold text-[#216089] mb-8">
          Nuestro equipo
        </h3>

        <p className="text-gray-700 text-lg leading-8 mb-6">
          Contamos con profesionales especializados en Psicología Laboral,
          Recursos Humanos, Administración y Gestión Organizacional,
          trabajando de forma coordinada para garantizar procesos eficientes,
          seguimiento cercano y respuestas adaptadas a cada cliente.
        </p>

        <p className="text-gray-700 text-lg leading-8">
          Las responsabilidades se encuentran claramente delimitadas,
          con seguimiento activo de las instancias técnicas y de gestión.
        </p>
      </motion.div>

      <motion.div
        initial={{ opacity: 0, x: 60 }}
        whileInView={{ opacity: 1, x: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8 }}
      >
        <Image
          src="/hero-equipo.jpg"
          alt="Equipo Work Office"
          width={800}
          height={550}
          className="rounded-2xl shadow-xl"
        />
      </motion.div>

    </div>

  </div>
</section>
{/* EMPRESAS QUE CONFÍAN EN NOSOTROS */}
<section className="bg-[#216089] py-24 rounded-[80px] mx-auto my-16 max-w-7xl shadow-2xl overflow-hidden">
  <div className="px-12">

    <motion.div
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.7 }}
      className="text-center"
    >
      <h3 className="text-4xl font-bold text-white mb-6">
        Empresas que confían en nosotros
      </h3>

      <p className="text-white/90 text-lg mb-12">
        Organizaciones que han confiado en Work Office para acompañar sus
        procesos de gestión y desarrollo del talento.
      </p>
    </motion.div>

    <div className="relative">

      {/* Flecha izquierda */}
      <button
        className="absolute left-0 top-1/2 -translate-y-1/2 z-10 bg-white shadow-xl rounded-full w-12 h-12 flex items-center justify-center text-[#216089] hover:scale-110 transition-all duration-300"
      >
        ←
      </button>

      {/* Logos */}
      <div className="grid grid-cols-2 md:grid-cols-5 gap-8 px-16">

        <div className="bg-white rounded-2xl p-6 shadow-xl flex items-center justify-center hover:scale-105 transition-all duration-300">
          <Image
            src="/cliente1.png"
            alt="Cliente 1"
            width={140}
            height={80}
            className="object-contain"
          />
        </div>

        <div className="bg-white rounded-2xl p-6 shadow-xl flex items-center justify-center hover:scale-105 transition-all duration-300">
          <Image
            src="/cliente2.png"
            alt="Cliente 2"
            width={140}
            height={80}
            className="object-contain"
          />
        </div>

        <div className="bg-white rounded-2xl p-6 shadow-xl flex items-center justify-center hover:scale-105 transition-all duration-300">
          <Image
            src="/cliente3.png"
            alt="Cliente 3"
            width={140}
            height={80}
            className="object-contain"
          />
        </div>

        <div className="bg-white rounded-2xl p-6 shadow-xl flex items-center justify-center hover:scale-105 transition-all duration-300">
          <Image
            src="/cliente4.png"
            alt="Cliente 4"
            width={140}
            height={80}
            className="object-contain"
          />
        </div>

        <div className="bg-white rounded-2xl p-6 shadow-xl flex items-center justify-center hover:scale-105 transition-all duration-300">
          <Image
            src="/cliente5.png"
            alt="Cliente 5"
            width={140}
            height={80}
            className="object-contain"
          />
        </div>

      </div>

      {/* Flecha derecha */}
      <button
        className="absolute right-0 top-1/2 -translate-y-1/2 z-10 bg-white shadow-xl rounded-full w-12 h-12 flex items-center justify-center text-[#216089] hover:scale-110 transition-all duration-300"
      >
        →
      </button>

    </div>

  </div>
</section>
{/* SERVICIOS */}
<motion.section
  id="servicios"
  initial={{ opacity: 0, y: 50 }}
  whileInView={{ opacity: 1, y: 0 }}
  viewport={{ once: true }}
  transition={{ duration: 0.6 }}
  className="px-12 py-24 bg-white"
>
  <h3 className="text-4xl font-bold text-center mb-14 text-[#216089]">
    Servicios
  </h3>

  <div className="max-w-6xl mx-auto flex flex-col gap-5">

    {[
      {
        title: "Selección de Personal",
        description:
          "Identificamos y evaluamos candidatos alineados a las necesidades y cultura de cada organización.",
      },
      {
        title: "Suministro de Personal Temporario",
        description:
          "Brindamos soluciones ágiles para cubrir necesidades operativas y picos de actividad.",
      },
      {
        title: "Administración de Personal y Payroll",
        description:
          "Gestionamos procesos administrativos y laborales para optimizar la gestión del personal.",
      },
      {
        title: "Evaluaciones Psicolaborales",
        description:
          "Aplicamos herramientas de evaluación para apoyar decisiones de selección y desarrollo.",
      },
      {
        title: "Análisis de Clima Organizacional",
        description:
          "Acompañamos procesos de mejora, fortalecimiento de equipos y gestión del talento.",
      },
    ].map((service) => (
      <div key={service.title}>

        <button
          onClick={() =>
            setOpenService(
              openService === service.title ? null : service.title
            )
          }
          className="w-full bg-[#216089] text-white rounded-full px-8 py-5 shadow-xl hover:scale-[1.02] transition-all duration-300"
        >
          <div className="flex justify-between items-center">
            <span className="font-semibold text-lg">
              {service.title}
            </span>

            <span className="text-2xl">
              {openService === service.title ? "−" : "+"}
            </span>
          </div>
        </button>

        {openService === service.title && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            transition={{ duration: 0.3 }}
            className="bg-gray-50 rounded-2xl mt-3 p-6 shadow-md"
          >
            <p className="text-[#216089] leading-7">
              {service.description}
            </p>
          </motion.div>
        )}

      </div>
    ))}

  </div>
</motion.section>

      {/* VACANTES */}
      <motion.section
        id="vacantes"
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
        className="px-12 py-24 bg-gray-50"
      >
        <h3 className="text-3xl font-bold text-center mb-12 text-[#216089]">
          Oportunidades Laborales
        </h3>

        <div className="grid md:grid-cols-3 gap-6">
          {vacancies.map(([title, city]) => (
            <div
              key={title}
              className="p-6 border rounded-xl bg-white transition hover:scale-105 hover:shadow-lg"
            >
              <h4 className="font-bold text-lg">{title}</h4>
              <p className="text-sm text-gray-500 mt-2">{city}</p>
            </div>
          ))}
        </div>
      </motion.section>

      {/* CONTACTO */}
      <section id="contacto" className="px-12 py-24">
        <h3 className="text-3xl font-bold text-center mb-10 text-[#216089]">
          Contacto
        </h3>

        <div className="flex justify-center gap-6 mb-10">
          <button
            onClick={() => setOpen("empresas")}
            className="px-6 py-3 bg-[#216089] text-white rounded-full hover:scale-105 transition"
          >
            Empresas
          </button>

          <button
            onClick={() => setOpen("postulantes")}
            className="px-6 py-3 border border-[#216089] text-[#216089] rounded-full hover:scale-105 transition"
          >
            Postulantes
          </button>
        </div>

        {/* FORM EMPRESAS */}
        {open === "empresas" && (
          <form
            onSubmit={(e) => {
              e.preventDefault();

              const form = e.target as HTMLFormElement;

              handleSubmit("empresas", {
                company: (
                  form.elements.namedItem("company") as HTMLInputElement
                ).value,
                contact: (
                  form.elements.namedItem("contact") as HTMLInputElement
                ).value,
                email: (
                  form.elements.namedItem("email") as HTMLInputElement
                ).value,
                message: (
                  form.elements.namedItem("message") as HTMLTextAreaElement
                ).value,
              });

              form.reset();
            }}
            className="max-w-xl mx-auto flex flex-col gap-4"
          >
            <input
              name="company"
              placeholder="Empresa"
              className="border p-3 rounded"
              required
            />

            <input
              name="contact"
              placeholder="Persona de contacto"
              className="border p-3 rounded"
              required
            />

            <input
              name="email"
              type="email"
              placeholder="Email corporativo"
              className="border p-3 rounded"
              required
            />

            <textarea
              name="message"
              placeholder="Cuéntanos cómo podemos ayudarte"
              className="border p-3 rounded"
              rows={4}
            />

            <button className="bg-[#216089] text-white py-3 rounded hover:scale-105 transition">
              Enviar consulta
            </button>
          </form>
        )}

        {/* FORM POSTULANTES */}
        {open === "postulantes" && (
          <form
            onSubmit={async (e) => {
              e.preventDefault();

              const form = e.target as HTMLFormElement;
              const formData = new FormData(form);

              formData.append("type", "postulantes");

              await fetch("/api/contact", {
                method: "POST",
                body: formData,
              });

              alert("CV enviado correctamente");
              form.reset();
            }}
            className="max-w-xl mx-auto flex flex-col gap-4"
          >
            <input
              name="name"
              placeholder="Nombre completo"
              className="border p-3 rounded"
              required
            />

            <input
              name="email"
              type="email"
              placeholder="Email"
              className="border p-3 rounded"
              required
            />

            <input
              name="cv"
              type="file"
              accept="application/pdf"
              className="border p-3 rounded"
              required
            />

            <textarea
              name="message"
              placeholder="Mensaje"
              className="border p-3 rounded"
              rows={4}
            />

            <button className="bg-[#216089] text-white py-3 rounded hover:scale-105 transition">
              Enviar CV
            </button>
          </form>
        )}
      </section>

{/* FOOTER */}
<footer className="bg-[#216089] text-white py-12 mt-10">
  <div className="max-w-7xl mx-auto px-12">

    <div className="grid md:grid-cols-2 gap-10 items-start">

     {/* UBICACIÓN */}
<div className="flex flex-col md:flex-row items-center md:items-start gap-6">

 <Image
  src="/mapa-uruguay.png"
  alt="Ubicación Uruguay"
  width={220}
  height={120}
  loading="eager"
  className="w-auto h-auto object-contain"
  />

  <div>
    <h4 className="font-bold text-xl mb-4">
      ¿Dónde estamos?
    </h4>

    <p className="opacity-90">
      Convención 1343, Piso 4, Oficina 407
    </p>

    <p className="opacity-90">
      Montevideo | Uruguay
    </p>

    <p className="opacity-90 mt-2">
      (+598) 2900 8504
    </p>
  </div>

</div>

      {/* WORK OFFICE */}
      <div className="md:text-right">
        <h4 className="font-bold text-xl mb-4">
          Work Office
        </h4>

        <p className="opacity-90">
          Consultora de Recursos Humanos
        </p>

        <p className="opacity-90 mt-2">
          comercial@workoffice.com.uy
        </p>
      </div>

    </div>

    <div className="border-t border-white/20 mt-10 pt-6 text-center">
      <p className="text-sm opacity-70">
        © {new Date().getFullYear()} Work Office. Todos los derechos reservados.
      </p>
    </div>

  </div>
</footer>
</main>
);
}