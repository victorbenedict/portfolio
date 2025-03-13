import { admin } from '@/lib/data';
import {
  Body,
  Container,
  Head,
  Hr,
  Html,
  Link,
  Preview,
  Text,
} from '@react-email/components';

interface NotficationEmailProps {
  recipient: string;
  recipientMessage: string;
}

export const NotficationEmail = ({
  recipient,
  recipientMessage,
}: NotficationEmailProps) => (
  <Html>
    <Head />
    <Body style={main}>
      <Preview>
        The sales intelligence platform that helps you uncover qualified leads.
      </Preview>
      <Container style={container}>
        <Text style={paragraph}>Hi {recipient},</Text>
        <Text style={paragraph}>
          Thank you for reaching out through my{' '}
          <Link href='https://victorbenedict-portfolio.vercel.app/'>
            portfolio
          </Link>
          !
        </Text>
        <Text style={paragraph}>Here’s what you sent:</Text>
        <Container style={messageContainer}>
          <Text style={messageStyle}>{recipientMessage}</Text>
        </Container>

        <Text style={paragraph}>
          I’ll review your message and get back to you soon.
        </Text>
        <Text style={paragraph}>
          All the best,
          <br />
          Victor Benedict
        </Text>

        <Hr style={hr} />
        <Text style={footer}>
          This email is an automated notification. Please do not reply to this
          email.
        </Text>
      </Container>
    </Body>
  </Html>
);

NotficationEmail.PreviewProps = {
  recipient: 'Alan',
  recipientMessage:
    'We’re thrilled to offer you the Software Engineer position at TechCorp',
} as NotficationEmailProps;

export default NotficationEmail;

const main = {
  backgroundColor: '#ffffff',
  fontFamily:
    '-apple-system,BlinkMacSystemFont,"Segoe UI",Roboto,Oxygen-Sans,Ubuntu,Cantarell,"Helvetica Neue",sans-serif',
};

const container = {
  margin: '0 auto',
  padding: '20px 0 48px',
};

const paragraph = {
  fontSize: '16px',
  lineHeight: '26px',
};

const hr = {
  borderColor: '#cccccc',
  margin: '20px 0',
};

const footer = {
  color: '#8898aa',
  fontSize: '12px',
};

const messageContainer = {
  backgroundColor: '#f4f4f4',
  padding: '15px',
  borderRadius: '5px',
  margin: '10px 0',
  border: '1px solid #ddd',
};

const messageStyle = {
  fontSize: '16px',
  color: '#333',
  lineHeight: '1.5',
};
