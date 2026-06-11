"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import Image from "next/image";

type Service =
  | { title: string; desc: string }
  | {
      title: string;
      items: { subtitle: string; text: string }[];
    };

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
        telefono: formData.get("telefono") || "",
        mensaje: formData.get("mensaje"),
      }),
    });

    alert("Enviado correctamente");
  }

  const services: Service[] = [
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
          text: "Nos especializamos en guiar, acompañar, estimular, preparar y ayudar a las personas a encontrar una nueva oportunidad laboral acorde a su perfil.",
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
        <h2 className="text-3xl font-bold text-[#216089] text-center mb-10">
          ¿Quiénes somos?
        </h2>

        <p className="text-gray-700 leading-8 text-lg">
          Work Office es una consultora uruguaya especializada en soluciones en Capital Humano, con más de 30 años de trayectoria en el mercado, acompañando a organizaciones públicas y privadas en la gestión de personas.
          <br /><br />
          Nuestra experiencia se complementa con tecnología, alianzas estratégicas y mejora continua.
        </p>
      </section>

      {/* MISIÓN / VISIÓN */}
      <section className="grid md:grid-cols-2">
        <div className="bg-[#216089] text-white flex items-center p-10">
          <div>
            <h3 className="text-2xl font-bold mb-4">Misión</h3>
            <p>Brindar soluciones personalizadas en Recursos Humanos con procesos de calidad y confianza.</p>
          </div>
        </div>

        <Image
          src="/hero-mision.jpg"
          alt="Misión"
          width={900}
          height={700}
          className="w-full h-full object-cover"
        />
      </section>

      <section className="grid md:grid-cols-2">
        <Image
          src="/hero-vision.png"
          alt="Visión"
          width={900}
          height={700}
          className="w-full h-full object-cover"
        />

        <div className="bg-white text-[#216089] flex items-center p-10">
          <div>
            <h3 className="text-2xl font-bold mb-4">Visión</h3>
            <p>Ser referentes en la gestión del Capital Humano como aliados estratégicos.</p>
          </div>
        </div>
      </section>

      {/* VALORES (AHORA BIEN UBICADO DESPUÉS DE MISIÓN/VISIÓN) */}
      <section className="py-24 bg-[#216089]">
        <h2 className="text-white text-center text-3xl font-bold mb-10">
          Valores que nos orientan
        </h2>

        <div className="flex flex-wrap justify-center gap-4 px-6">
          {values.map((v, i) => (
            <div
              key={v}
              className="bg-white text-[#216089] px-6 py-3 rounded-full font-semibold"
            >
              {v}
            </div>
          ))}
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

              <button
                onClick={() =>
                  setOpenService(openService === s.title ? null : s.title)
                }
                className="w-full text-left p-5 bg-[#216089] text-white font-semibold"
              >
                {s.title}
              </button>

              {openService === s.title && "desc" in s && (
                <div className="p-5 bg-white text-gray-700">
                  {s.desc}
                </div>
              )}

              {openService === s.title && "items" in s && (
                <div className="p-5 bg-white space-y-4 text-gray-700">
                  {s.items.map((item) => (
                    <div key={item.subtitle}>
                      <h4 className="font-bold text-[#216089]">
                        {item.subtitle}
                      </h4>
                      <p>{item.text}</p>
                    </div>
                  ))}
                </div>
              )}
            </div>
          ))}
        </div>
      </section>

      {/* CONTACTO (COMPLETO) */}
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
          <form onSubmit={(e) => handleSubmit("empresas", e)} className="space-y-3 text-left">
            <input name="nombre" placeholder="Nombre de la empresa" className="border p-2 w-full" />
            <input name="telefono" placeholder="Nombre de contacto" className="border p-2 w-full" />
            <input name="email" placeholder="Email corporativo" className="border p-2 w-full" />
            <textarea name="mensaje" placeholder="Consulta" className="border p-2 w-full" />
            <button className="bg-[#216089] text-white px-6 py-2 rounded-full">
              Enviar
            </button>
          </form>
        )}

        {openForm === "postulantes" && (
          <form onSubmit={(e) => handleSubmit("postulantes", e)} className="space-y-3 text-left">
            <input name="nombre" placeholder="Nombre" className="border p-2 w-full" />
            <input name="email" placeholder="Email" className="border p-2 w-full" />

            <input
              type="file"
              accept=".pdf"
              name="cv"
              className="border p-2 w-full"
            />

            <textarea name="mensaje" placeholder="Mensaje" className="border p-2 w-full" />

            <button className="bg-[#216089] text-white px-6 py-2 rounded-full">
              Enviar CV
            </button>
          </form>
        )}
      </section>

      {/* DÓNDE ESTAMOS */}
      <section className="py-24 text-center px-6">
        <h2 className="text-3xl font-bold text-[#216089] mb-6">
          ¿Dónde estamos?
        </h2>

        <Image
          src="/mapa-uruguay.png"
          alt="Mapa Uruguay"
          width={900}
          height={500}
          className="mx-auto rounded-xl"
        />

        <p className="mt-6">Convención 1343, Piso 4 Of. 407</p>
        <p>Montevideo | Uruguay</p>
        <p>+598 2900 8504</p>
      </section>

      {/* FOOTER */}
      <footer className="bg-[#216089] text-white text-center py-10">
        <p>Work Office © Todos los derechos reservados</p>
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