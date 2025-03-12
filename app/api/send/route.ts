import Email from '@/emails/EmailTemplate';
import { Resend } from 'resend';

const resend = new Resend(process.env.RESEND_API_KEY);

export async function POST() {
  const { data, error } = await resend.emails.send({
    from: 'onboarding@resend.dev',
    to: 'victorbenedict.bulaong@gmail.com',
    subject: 'Hello world',
    react: Email(),
  });

  if (error) {
    return Response.json({ error });
  }

  return Response.json(data);
}
