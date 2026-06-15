import nodemailer from "nodemailer";
import { NextRequest, NextResponse } from "next/server";

export async function POST(req: NextRequest) {
  try {
    console.log("🔥 API /contact fue llamada");

    const formData = await req.formData();

    const type = String(formData.get("type") || "");
    const name = String(formData.get("name") || "");
    const email = String(formData.get("email") || "");
    const message = String(formData.get("message") || "");

    // 📎 FILE SAFE HANDLING (FIX TYPESCRIPT ERROR)
    const file = formData.get("cv");

    let cvFile: File | null = null;

    if (file instanceof File) {
      cvFile = file;
    }

    console.log("📩 TYPE:", type);
    console.log("👤 NAME:", name);
    console.log("📧 EMAIL:", email);
    console.log("💬 MESSAGE:", message);
    console.log("📎 FILE:", cvFile ? cvFile.name : "sin archivo");

    // ⚠️ VALIDACIÓN BÁSICA
    if (!type || !name || !email) {
      console.log("❌ FALTAN CAMPOS OBLIGATORIOS");

      return NextResponse.json(
        { ok: false, error: "missing_fields" },
        { status: 400 }
      );
    }

    const transporter = nodemailer.createTransport({
      service: "gmail",
      auth: {
        user: process.env.EMAIL_USER,
        pass: process.env.EMAIL_PASS,
      },
    });

    let attachments: any[] = [];

    // 📎 ATTACHMENT SAFE
    if (cvFile) {
      const buffer = Buffer.from(await cvFile.arrayBuffer());

      attachments.push({
        filename: cvFile.name,
        content: buffer,
      });
    }

    const to =
      type === "empresas"
        ? "comercial@workoffice.com.uy"
        : "postulantes@workoffice.com.uy";

    await transporter.sendMail({
      from: `"Work Office" <${process.env.EMAIL_USER}>`,
      to,
      subject:
        type === "empresas"
          ? "Nueva consulta empresa"
          : "Nuevo CV de postulante",
      text: `
Tipo: ${type}
Nombre: ${name}
Email: ${email}
Mensaje: ${message}
      `,
      attachments,
    });

    console.log("✅ EMAIL ENVIADO CORRECTAMENTE");

    return NextResponse.json(
      { ok: true },
      { status: 200 }
    );

  } catch (error) {
    console.error("❌ ERROR EN API CONTACT:", error);

    return NextResponse.json(
      { ok: false, error: "server_error" },
      { status: 500 }
    );
  }
}