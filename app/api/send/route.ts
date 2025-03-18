import NotificationEmail from '@/emails/EmailTemplate';
import { admin } from '@/lib/data';
import { NextResponse } from 'next/server';
import { Resend } from 'resend';

const resend = new Resend(process.env.RESEND_API_KEY);
const adminEmail = process.env.ADMIN_EMAIL;

export async function POST(req: Request) {
  try {
    const body = await req.json();
    const { name, email, message } = body;

    if (!name || !email || !message) {
      return NextResponse.json(
        { error: 'Missing required fields' },
        { status: 400 }
      );
    }

    if (!adminEmail) {
      throw new Error('ADMIN_EMAIL is not defined in environment variables.');
    }

    await resend.emails.send({
      from: `${admin.name || 'Admin'} <onboarding@resend.dev>`,
      to: adminEmail,
      subject: 'Message Received from Porfolio',
      react: NotificationEmail({ name, email, message }),
    });

    return NextResponse.json(
      { message: 'Data received', data: { name, email, message } },
      { status: 200 }
    );
  } catch (error) {
    return NextResponse.json(
      { error: error instanceof Error ? error.message : 'Unknown error' },
      { status: 500 }
    );
  }
}
