import {
  Body,
  Container,
  Head,
  Hr,
  Html,
  Preview,
  Text,
} from "@react-email/components";

interface NotificationEmailProps {
  name: string;
  email: string;
  message: string;
}

export const NotificationEmail = ({
  name,
  email,
  message,
}: NotificationEmailProps) => (
  <Html>
    <Head />
    <Body style={main}>
      <Preview>You received an message from your portfolio!</Preview>
      <Container style={container}>
        <Text style={paragraph}>Sender name: {name}</Text>
        <Text style={paragraph}>Sender email: {email}</Text>
        <Text style={paragraph}>Message:</Text>
        <Container style={messageContainer}>
          <Text style={messageStyle}>{message}</Text>
        </Container>
        <Hr style={hr} />
        <Text style={footer}>
          This email is an automated notification. Please do not reply to this
          email.
        </Text>
      </Container>
    </Body>
  </Html>
);

NotificationEmail.PreviewProps = {
  name: "Alan",
  email: "alan@email.com",
  message:
    "We’re thrilled to offer you the Software Engineer position at TechCorp",
} as NotificationEmailProps;

export default NotificationEmail;

const main = {
  backgroundColor: "#ffffff",
  fontFamily:
    '-apple-system,BlinkMacSystemFont,"Segoe UI",Roboto,Oxygen-Sans,Ubuntu,Cantarell,"Helvetica Neue",sans-serif',
};

const container = {
  margin: "0 auto",
  padding: "20px 0 48px",
};

const paragraph = {
  fontSize: "16px",
  lineHeight: "26px",
};

const hr = {
  borderColor: "#cccccc",
  margin: "20px 0",
};

const footer = {
  color: "#8898aa",
  fontSize: "12px",
};

const messageContainer = {
  backgroundColor: "#f4f4f4",
  padding: "15px",
  borderRadius: "5px",
  margin: "10px 0",
  border: "1px solid #ddd",
};

const messageStyle = {
  fontSize: "16px",
  color: "#333",
  lineHeight: "1.5",
};
