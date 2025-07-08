import { Resend } from 'resend';
import { NextResponse } from 'next/server';

const resend = new Resend('tu_api_key_de_resend');

export async function POST(request: Request) {
  try {
    const body = await request.json();
    const { name, email, service, message } = body;

    const data = await resend.emails.send({
      from: 'Luxury Films <tu_email_verificado@tudominio.com>',
      to: 'anthonypbermdez2019@gmail.com',
      subject: 'Nueva solicitud de cotización - Luxury Films',
      text: `Nueva solicitud de cotización:\n\nNombre: ${name}\nEmail: ${email}\nServicio: ${service}\nMensaje: ${message}`,
    });

    return NextResponse.json(data);
  } catch (error) {
    return NextResponse.json({ error });
  }
}