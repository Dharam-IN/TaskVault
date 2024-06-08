import * as React from 'react';
import { Html } from '@react-email/html';

interface EmailTemplateProps {
  username: string;
  otp: string;
}

const EmailTemplate: React.FC<Readonly<EmailTemplateProps>> = ({
  username,
  otp,
}) => (
  <Html lang="en">
    <div style={{ fontFamily: 'Arial, sans-serif', lineHeight: '1.6' }}>
      <div style={{ padding: '20px', border: '1px solid #eaeaea', borderRadius: '5px', maxWidth: '600px', margin: 'auto' }}>
        <h1 style={{ color: '#333', textAlign: 'center' }}>Welcome to TodoVault, {username}!</h1>
        <p>Hi {username},</p>
        <p>
          Thank you for signing up for <strong>TodoVault</strong>! We are excited to have you on board.
        </p>
        <p>
          TodoVault is your ultimate task management solution, designed to help you organize your tasks efficiently and
          boost your productivity. Whether you're managing personal to-dos or professional projects, TodoVault has got you covered.
        </p>
        <p>
          To get started, please verify your email address using the OTP below:
        </p>
        <div style={{ textAlign: 'center', margin: '20px 0' }}>
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
        </div>
        <p>
          If you did not sign up for TodoVault, please ignore this email.
        </p>
        <p>
          Best regards,<br />
          The TodoVault Team <br />
          GitHub: <a href="https://github.com/Dharam-IN">Dharam-IN</a>
        </p>
      </div>
    </div>
  </Html>
);

export default EmailTemplate;
