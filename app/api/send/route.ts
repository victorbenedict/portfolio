import NotificationEmail from '@/emails/EmailTemplate';
import { admin } from '@/lib/data';
import { NextResponse } from 'next/server';
import { Resend } from 'resend';

const resend = new Resend(process.env.RESEND_API_KEY);
const adminEmail = process.env.ADMIN_EMAIL;

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

    await resend.emails.send({
      from: `${admin.name || 'Admin'} <onboarding@resend.dev>`, // Fallback for admin.name
      to: email,
      ...(adminEmail ? { bcc: adminEmail } : {}),
      subject: 'Message Received! ✅',
      react: NotificationEmail({ recipient, recipientMessage }),
    });

    return NextResponse.json(
      { message: 'Data received', data: { recipient, email } },
      { status: 200 }
    );
  } catch (error) {
    return NextResponse.json(
      { error: error instanceof Error ? error.message : 'Unknown error' },
      { status: 500 }
    );
  }
}
