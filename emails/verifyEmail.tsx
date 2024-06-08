import {
  Html,
  Head,
  Font,
  Preview,
  Heading,
  Row,
  Section,
  Text,
} from '@react-email/components';

interface VerificationEmailProps {
  username: string;
  otp: string;
}

export default function VerificationEmail({ username, otp }: VerificationEmailProps) {
  return (
    <Html lang="en" dir="ltr">
      <Head>
        <title>Verification Code</title>
        <Font
          fontFamily="Roboto"
          fallbackFontFamily="Verdana"
          webFont={{
            url: 'https://fonts.gstatic.com/s/roboto/v27/KFOmCnqEu92Fr1Mu4mxKKTU1Kg.woff2',
            format: 'woff2',
          }}
          fontWeight={400}
          fontStyle="normal"
        />
      </Head>
      <Preview>Here&apos;s your verification code: {otp}</Preview>
      <Section style={{ fontFamily: 'Roboto, Verdana, sans-serif', lineHeight: '1.6', padding: '20px', border: '1px solid #eaeaea', borderRadius: '5px', maxWidth: '600px', margin: 'auto' }}>
        <Row>
          <Heading as="h2" style={{ color: '#333', textAlign: 'center' }}>Hello {username},</Heading>
        </Row>
        <Row>
          <Text>
            Thank you for signing up for <strong>TodoVault</strong>! We are excited to have you on board.
          </Text>
        </Row>
        <Row>
          <Text>
            TodoVault is your ultimate task management solution, designed to help you organize your tasks efficiently and boost your productivity. Whether you're managing personal to-dos or professional projects, TodoVault has got you covered.
          </Text>
        </Row>
        <Row>
          <Text>To get started, please verify your email address using the OTP below:</Text>
        </Row>
        <Row style={{ textAlign: 'center', margin: '20px 0' }}>
          <div
            style={{
              backgroundColor: '#007bff',
              color: '#fff',
              padding: '10px 20px',
              borderRadius: '5px',
              display: 'inline-block',
              fontSize: '20px',
              fontWeight: 'bold',
            }}
          >
            {otp}
          </div>
        </Row>
        <Row>
          <Text>If you did not sign up for TodoVault, please ignore this email.</Text>
        </Row>
        <Row>
          <Text>
            Best regards,<br />
            The TodoVault Team <br />
            GitHub: <a href="https://github.com/Dharam-IN" target='_blank'>Dharam-IN</a>
          </Text>
        </Row>
      </Section>
    </Html>
  );
}
