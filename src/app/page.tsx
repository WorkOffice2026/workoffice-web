"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import Image from "next/image";

export default function Home() {
  const [openService, setOpenService] = useState<string | null>(null);
  const [openForm, setOpenForm] = useState<"empresas" | "postulantes" | null>(null);

  async function handleSubmit(type: "empresas" | "postulantes", e: any) {
    e.preventDefault();

    const formData = new FormData(e.target);

    await fetch("/api/contact", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        type,
        nombre: formData.get("nombre"),
        email: formData.get("email"),
        mensaje: formData.get("mensaje"),
      }),
    });

    alert("Enviado correctamente");
  }

  const services = [
    {
      title: "Selección de Personal",
      desc: "Desde 1988, hemos seleccionado talentos para más de 900 empresas del mercado.",
    },
    {
      title: "Suministro Temporario de Personal",
      desc: "Incorporación rápida y segura de personal calificado.",
    },
    {
      title: "Evaluaciones Psicolaborales",
      desc: "Análisis profesional de actitudes y aptitudes.",
    },
    {
      title: "Payroll",
      desc: "Gestión integral de liquidación de haberes.",
    },
    {
      title: "Clima Organizacional",
      desc: "Diagnóstico y encuestas de clima laboral.",
    },
    {
      title: "Planes de Onboarding y Outplacement",
      items: [
        {
          subtitle: "Onboarding",
          text: "Elaboramos el programa de inducción ajustado a la cultura, misión y visión de nuestros clientes.",
        },
        {
          subtitle: "Outplacement",
          text: "Nos especializamos en guiar, acompañar, estimular, preparar y ayudar a los participantes a encontrar un empleo o actividad acorde a su perfil laboral.",
        },
      ],
    },
  ];

  const values = ["Experiencia", "Confidencialidad", "Vocación", "Compromiso"];

  return (
    <main className="bg-white text-[#111]">

      {/* HERO */}
      <section className="relative min-h-screen flex items-center justify-center text-center overflow-hidden">
        <video autoPlay muted loop playsInline className="absolute w-full h-full object-cover">
          <source src="/hero-video.mp4" />
        </video>

        <div className="absolute inset-0 bg-black/60" />

        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          className="relative z-10 px-6 max-w-4xl"
        >
          <h1 className="text-white text-3xl md:text-6xl font-bold">
            Encontramos el talento que impulsa el crecimiento de tu organización
          </h1>
          <p className="text-gray-200 mt-6 text-lg md:text-xl">
            Soluciones integrales en Recursos Humanos para empresas y postulantes.
          </p>
        </motion.div>
      </section>

      {/* NOSOTROS */}
      <section className="py-24 max-w-6xl mx-auto px-6">
        <motion.h2
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          className="text-3xl font-bold text-[#216089] text-center mb-10"
        >
          ¿Quiénes somos?
        </motion.h2>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          className="text-gray-700 leading-8 text-lg"
        >
          Work Office es una consultora uruguaya especializada en soluciones en Capital Humano, con más de 30 años de trayectoria en el mercado, acompañando a organizaciones públicas y privadas en la gestión de personas.

          <br /><br />

          Nuestra experiencia sostenida en el tiempo se complementa con la incorporación de nuevas tecnologías, alianzas estratégicas y procesos de mejora continua.
        </motion.p>
      </section>

      {/* VALORES */}
      <section className="py-24 bg-[#216089]">
        <h2 className="text-white text-center text-3xl font-bold mb-10">
          Valores que nos orientan
        </h2>

        <div className="flex flex-wrap justify-center gap-4 px-6">
          {values.map((v, i) => (
            <motion.div
              key={v}
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ delay: i * 0.1 }}
              className="bg-white text-[#216089] px-6 py-3 rounded-full font-semibold"
            >
              {v}
            </motion.div>
          ))}
        </div>
      </section>

      {/* MISIÓN / VISIÓN */}
      <section className="grid md:grid-cols-2">
        <div className="bg-[#216089] text-white flex items-center p-10">
          <div>
            <h3 className="text-2xl font-bold mb-4">Misión</h3>
            <p>
              Brindar soluciones personalizadas en Recursos Humanos con procesos de calidad y confianza.
            </p>
          </div>
        </div>

        <Image
          src="/hero-mision.jpg"
          alt="Misión"
          width={800}
          height={600}
          className="w-full h-full object-cover"
        />
      </section>

      <section className="grid md:grid-cols-2">
        <Image
          src="/hero-vision.png"
          alt="Visión"
          width={800}
          height={600}
          className="w-full h-full object-cover order-2 md:order-1"
        />

        <div className="bg-white text-[#216089] flex items-center p-10 order-1 md:order-2">
          <div>
            <h3 className="text-2xl font-bold mb-4">Visión</h3>
            <p>
              Ser referentes en la gestión del Capital Humano como aliados estratégicos.
            </p>
          </div>
        </div>
      </section>

      {/* SERVICIOS (CORREGIDO) */}
      <section className="py-24 max-w-5xl mx-auto px-6">
        <h2 className="text-center text-3xl font-bold text-[#216089] mb-10">
          Servicios
        </h2>

        <div className="space-y-4">
          {services.map((s) => (
            <div key={s.title} className="border rounded-xl overflow-hidden">

              {/* BOTÓN */}
              <button
                onClick={() =>
                  setOpenService(openService === s.title ? null : s.title)
                }
                className="w-full text-left p-5 bg-[#216089] text-white font-semibold"
              >
                {s.title}
              </button>

              {/* CONTENIDO */}
              {openService === s.title && (
                <div className="p-5 bg-white text-gray-700 space-y-4">

                  {s.items ? (
                    s.items.map((item) => (
                      <div key={item.subtitle}>
                        <h4 className="font-bold text-[#216089] mb-1">
                          {item.subtitle}
                        </h4>
                        <p>{item.text}</p>
                      </div>
                    ))
                  ) : (
                    <p>{s.desc}</p>
                  )}

                </div>
              )}

            </div>
          ))}
        </div>
      </section>

      {/* CONTACTO */}
      <section className="py-24 px-6 max-w-4xl mx-auto text-center">
        <h2 className="text-3xl font-bold text-[#216089] mb-10">Contacto</h2>

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
          <form onSubmit={(e) => handleSubmit("empresas", e)} className="space-y-3">
            <input name="nombre" placeholder="Empresa" className="border p-2 w-full" />
            <input name="email" placeholder="Email corporativo" className="border p-2 w-full" />
            <textarea name="mensaje" placeholder="Consulta" className="border p-2 w-full" />
            <button className="bg-[#216089] text-white px-6 py-2 rounded-full">
              Enviar
            </button>
          </form>
        )}

        {openForm === "postulantes" && (
          <form onSubmit={(e) => handleSubmit("postulantes", e)} className="space-y-3">
            <input name="nombre" placeholder="Nombre" className="border p-2 w-full" />
            <input name="email" placeholder="Email" className="border p-2 w-full" />
            <textarea name="mensaje" placeholder="Mensaje" className="border p-2 w-full" />
            <button className="bg-[#216089] text-white px-6 py-2 rounded-full">
              Enviar CV
            </button>
          </form>
        )}
      </section>

      {/* FOOTER */}
      <footer className="bg-[#216089] text-white text-center py-10">
        <p>Convención 1343, Piso 4 Of. 407 - Montevideo</p>
        <p>+598 2900 8504</p>
      </footer>

      {/* WHATSAPP */}
      <a
        href="https://wa.me/59894270264"
        className="fixed bottom-5 right-5 bg-green-500 p-4 rounded-full text-white shadow-lg"
      >
        WhatsApp
      </a>

    </main>
  );
}