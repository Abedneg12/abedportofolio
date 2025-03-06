// app/api/contact/route.ts
import { NextResponse } from 'next/server';
import { Resend } from 'resend';

const resend = new Resend(process.env.RESEND_API_KEY);

export async function POST(request: Request) {
  try {
    const { name, email, message } = await request.json();
    
    const { data, error } = await resend.emails.send({
      from: 'Portfolio <no-reply@yourdomain.com>',
      to: 'your-email@example.com',
      subject: 'Pesan Baru dari Portfolio',
      html: `
        <h3>Pesan dari ${name}</h3>
        <p>Email: ${email}</p>
        <p>Pesan:</p>
        <p>${message}</p>
      `
    });

    if (error) {
      return NextResponse.json({ error }, { status: 500 });
    }

    return NextResponse.json(data);
  } catch (error) {
    return NextResponse.json(
      { error: 'Internal Server Error' },
      { status: 500 }
    );
  }
}