import nodemailer from "nodemailer";

export async function POST(req: Request) {
  try {
    console.log("🔥 API /contact fue llamada");

    const formData = await req.formData();

    const type = String(formData.get("type") || "");
    const name = String(formData.get("name") || "");
    const email = String(formData.get("email") || "");
    const message = String(formData.get("message") || "");

    const file = formData.get("cv") as File | null;

    // 🔍 DEBUG EXTRA (para ver qué está llegando)
    console.log("📩 TYPE:", type);
    console.log("👤 NAME:", name);
    console.log("📧 EMAIL:", email);
    console.log("💬 MESSAGE:", message);
    console.log("📎 FILE:", file ? file.name : "sin archivo");

    // ⚠️ VALIDACIÓN BÁSICA (evita envíos vacíos)
    if (!type || !name || !email) {
      console.log("❌ FALTAN CAMPOS OBLIGATORIOS");
      return Response.json({ ok: false, error: "missing_fields" });
    }

    const transporter = nodemailer.createTransport({
      service: "gmail",
      auth: {
        user: process.env.EMAIL_USER,
        pass: process.env.EMAIL_PASS,
      },
    });

    let attachments: any[] = [];

    if (file) {
      const buffer = Buffer.from(await file.arrayBuffer());

      attachments.push({
        filename: file.name,
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
Nombre: ${name}
Email: ${email}
Mensaje: ${message}
      `,
      attachments,
    });

    console.log("✅ EMAIL ENVIADO CORRECTAMENTE");

    return Response.json({ ok: true });
  } catch (error) {
    console.error("❌ ERROR EN API CONTACT:", error);

    return Response.json({
      ok: false,
      error: "server_error",
    });
  }
}