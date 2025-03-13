import NotficationEmail from '@/emails/EmailTemplate';
import { admin } from '@/lib/data';
import { NextResponse } from 'next/server';
import { Resend } from 'resend';

const resend = new Resend(process.env.RESEND_API_KEY);

export async function POST(req: Request) {
  try {
    const body = await req.json();
    const { name: recipient, email, message: recipientMessage } = body;

    if (!recipient || !email || !recipientMessage) {
      return NextResponse.json(
        { error: 'Missing required fields' },
        { status: 400 }
      );
    }

    const { data } = await resend.emails.send({
      from: `${admin.name} <onboarding@resend.dev>`,
      to: email,
      subject: 'Message Received! ✅',
      react: NotficationEmail({ recipient, recipientMessage }),
    });

    return NextResponse.json(
      { message: 'Data received', data: { recipient, email } },
      { status: 200 }
    );
  } catch (error) {
    return NextResponse.json({ error: error });
  }
}
