import React from 'react';
import {
  Html,
  Body,
  Head,
  Heading,
  Hr,
  Container,
  Preview,
  Section,
  Text,
} from '@react-email/components';
import { Tailwind } from '@react-email/tailwind';

type Props = {
  message: string;
  senderEmail: string;
};

export default function ContactFormEmail({ message, senderEmail }: Props) {
  return (
    <Html>
      <Head />
      <Preview>New message from your portfolio site</Preview>
      <Tailwind>
        <Body className='bg-stone-100 text-stone-900'>
          <Container>
            <Section className='bg-white border border-black/15 my-10 px-10 rounded-md'>
              <Heading className='leading-tight'>
                You received the following message from the contact form
              </Heading>
              <Text>{message}</Text>
              <Hr />
              <Text>The sender&apos;s email is {senderEmail}</Text>
            </Section>
          </Container>
        </Body>
      </Tailwind>
    </Html>
  );
}
