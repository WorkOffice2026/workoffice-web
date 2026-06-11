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
      title: "Análisis de Clima Organizacional",
      desc: "Diagnóstico de clima laboral con herramientas especializadas.",
    },
    {
      title: "Planes de Onboarding y Outplacement",
      items: [
        {
          subtitle: "Onboarding",
          text: "Elaboramos programas de inducción adaptados a la cultura y objetivos de cada organización.",
        },
        {
          subtitle: "Outplacement",
          text: "Acompañamos procesos de transición laboral con enfoque humano y estratégico.",
        },
      ],
    },
  ];

  const values = ["Experiencia", "Confidencialidad", "Vocación", "Compromiso"];

  return (
    <main className="bg-white text-[#111] overflow-x-hidden">

      {/* HERO */}
      <section className="relative h-screen flex items-center justify-center text-center">
        <video
          autoPlay
          muted
          loop
          playsInline
          className="absolute w-full h-full object-cover"
        >
          <source src="/hero-video.mp4" />
        </video>

        <div className="absolute inset-0 bg-black/60" />

        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          className="relative z-10 max-w-4xl px-6"
        >
          <h1 className="text-white text-3xl md:text-6xl font-bold leading-tight">
            Encontramos el talento que impulsa el crecimiento de tu organización
          </h1>
          <p className="text-gray-200 mt-6 text-lg md:text-xl">
            Soluciones integrales en Recursos Humanos para empresas y postulantes.
          </p>
        </motion.div>
      </section>

      {/* QUIÉNES SOMOS */}
      <section className="py-24 max-w-5xl mx-auto px-6 text-center">
        <motion.h2
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          className="text-3xl font-bold text-[#216089] mb-6"
        >
          ¿Quiénes somos?
        </motion.h2>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          className="text-gray-700 leading-8"
        >
          Work Office es una consultora uruguaya especializada en soluciones en Capital Humano,
          con más de 30 años de trayectoria acompañando a empresas públicas y privadas.
        </motion.p>
      </section>

      {/* MISIÓN / VISIÓN */}
      <section className="grid md:grid-cols-2">
        <div className="bg-[#216089] text-white flex items-center p-12">
          <div>
            <h3 className="text-2xl font-bold mb-4">Misión</h3>
            <p>Brindar soluciones personalizadas en Recursos Humanos con calidad y confianza.</p>
          </div>
        </div>

        <Image
          src="/hero-mision.jpg"
          alt="Misión"
          width={900}
          height={600}
          className="w-full h-full object-cover"
        />
      </section>

      <section className="grid md:grid-cols-2">
        <Image
          src="/hero-vision.png"
          alt="Visión"
          width={900}
          height={600}
          className="w-full h-full object-cover order-2 md:order-1"
        />

        <div className="bg-white text-[#216089] flex items-center p-12">
          <div>
            <h3 className="text-2xl font-bold mb-4">Visión</h3>
            <p>Ser referentes en la gestión del Capital Humano como aliados estratégicos.</p>
          </div>
        </div>
      </section>

      {/* VALORES */}
      <section className="py-24 bg-[#216089] text-center">
        <h2 className="text-white text-3xl font-bold mb-10">
          Valores que nos orientan
        </h2>

        <div className="flex flex-wrap justify-center gap-4 px-6">
          {values.map((v) => (
            <motion.div
              key={v}
              whileHover={{ scale: 1.05 }}
              className="bg-white text-[#216089] px-6 py-3 rounded-full font-semibold"
            >
              {v}
            </motion.div>
          ))}
        </div>
      </section>

      {/* SERVICIOS */}
      <section className="py-24 max-w-5xl mx-auto px-6">
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
                <div className="p-5 bg-white text-gray-700 space-y-4">
                  {"desc" in s && <p>{s.desc}</p>}

                  {"items" in s &&
                    Array.isArray(s.items) &&
                    s.items.map((i) => (
                      <div key={i.subtitle}>
                        <h4 className="font-bold text-[#216089]">{i.subtitle}</h4>
                        <p>{i.text}</p>
                      </div>
                    ))}
                </div>
              )}
            </div>
          ))}
        </div>
      </section>

      {/* CONTACTO */}
      <section className="py-24 max-w-4xl mx-auto text-center px-6">
        <h2 className="text-3xl font-bold text-[#216089] mb-8">
          Contacto
        </h2>

        <div className="flex justify-center gap-4">
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
      </section>

      {/* WHATSAPP */}
      <a
        href="https://wa.me/59894270264"
        className="fixed bottom-5 right-5 bg-green-500 text-white p-4 rounded-full shadow-lg"
      >
        WhatsApp
      </a>

    </main>
  );
}