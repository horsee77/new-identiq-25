import { Resend } from "resend";
import { NextResponse } from "next/server";

function escapeHtml(value) {
  return String(value ?? "")
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;")
    .replace(/'/g, "&#039;");
}

export async function POST(request) {
  try {
    const body = await request.json();

    const {
      first_name,
      last_name,
      email,
      phone,
      company,
      message,
      agree,
      source,
    } = body;

    if (!first_name || !last_name || !email || !message || !agree) {
      return NextResponse.json(
        { success: false, error: "Preencha os campos obrigatórios." },
        { status: 400 }
      );
    }

    const apiKey = process.env.RESEND_API_KEY;
    const to = process.env.CONTACT_TO_EMAIL;

    if (!apiKey) {
      return NextResponse.json(
        { success: false, error: "RESEND_API_KEY não configurada." },
        { status: 500 }
      );
    }

    if (!to) {
      return NextResponse.json(
        { success: false, error: "Email de destino não configurado." },
        { status: 500 }
      );
    }

    const resend = new Resend(apiKey);

    const safeFirstName = escapeHtml(first_name);
    const safeLastName = escapeHtml(last_name);
    const safeEmail = escapeHtml(email);
    const safePhone = escapeHtml(phone || "-");
    const safeCompany = escapeHtml(company || "-");
    const safeSource = escapeHtml(source || "-");
    const safeMessage = escapeHtml(message).replace(/\n/g, "<br/>");

    const { data, error } = await resend.emails.send({
      from: "Contato do site <onboarding@resend.dev>",
      to: [to],
      subject: source
        ? `Novo lead da ${source}`
        : `Novo contato de ${first_name} ${last_name}`,
      replyTo: email,
      html: `
        <div style="font-family: Arial, sans-serif; line-height: 1.6;">
          <h2>Novo contato pelo site</h2>
          <p><strong>Origem:</strong> ${safeSource}</p>
          <p><strong>Nome:</strong> ${safeFirstName} ${safeLastName}</p>
          <p><strong>Email:</strong> ${safeEmail}</p>
          <p><strong>Telefone:</strong> ${safePhone}</p>
          <p><strong>Empresa:</strong> ${safeCompany}</p>
          <p><strong>Mensagem:</strong></p>
          <p>${safeMessage}</p>
        </div>
      `,
    });

    if (error) {
      console.error("Erro Resend:", error);
      return NextResponse.json(
        { success: false, error: "Erro ao enviar email." },
        { status: 500 }
      );
    }

    return NextResponse.json({
      success: true,
      message: "Mensagem enviada com sucesso.",
      data,
    });
  } catch (error) {
    console.error("Erro interno:", error);
    return NextResponse.json(
      { success: false, error: "Erro interno do servidor." },
      { status: 500 }
    );
  }
}