'use server';
import React from 'react';
import { getErrorMessage, validateString } from '@/lib/utils';
import { Resend } from 'resend';
import ContactFormEmail from '@/email/ContactFormEmail';

const resend = new Resend(process.env.RESEND_API_KEY);

export const sendEmail = async (formData: FormData) => {
  ('use server');
  const senderEmail = formData.get('senderEmail');
  const message = formData.get('message');
  console.log(senderEmail);

  if (!validateString(senderEmail, 100)) {
    return {
      error: 'Invalid send email',
    };
  }
  if (!validateString(message, 5000)) {
    return {
      error: 'Invalid message',
    };
  }
  let data;
  try {
    data = await resend.emails.send({
      from: 'Portfolio Contact Form<onboarding@resend.dev>',
      to: 'victorbenedictbulaong@gmail.com',
      subject: 'Message from contact from',
      reply_to: senderEmail as string,
      react: React.createElement(ContactFormEmail, {
        message: message as string,
        senderEmail: senderEmail as string,
      }),
    });
  } catch (error: unknown) {
    return {
      error: getErrorMessage(error),
    };
  }
  return { data };
};
