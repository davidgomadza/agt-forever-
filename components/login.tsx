import { useState } from 'react';
import { useForm } from 'react-hook-form';
import twilio from 'twilio'; // Configure with your Twilio keys

export const Login = ({ onSuccess }) => {
  const { register, handleSubmit } = useForm();
  const [mode, setMode] = useState('email'); // or 'sms'
  const [codeSent, setCodeSent] = useState(false);
  const [verificationCode, setVerificationCode] = useState('');

  const sendCode = async (data) => {
    const randomCode = Math.floor(100000 + Math.random() * 900000).toString();
    if (mode === 'sms') {
      const client = twilio(process.env.TWILIO_SID, process.env.TWILIO_TOKEN);
      await client.messages.create({ body: `Code: ${randomCode}`, from: '+1234567890', to: data.phone });
    } else {
      // Email logic (use Nodemailer or service)
      console.log(`Email code ${randomCode} to ${data.email}`);
    }
    setCodeSent(true);
    setVerificationCode(randomCode); // Store for verification (use secure storage in prod)
  };

  const verifyCode = (input) => {
    if (input.code === verificationCode) onSuccess();
  };

  return (
    <form onSubmit={handleSubmit(codeSent ? verifyCode : sendCode)}>
      {!codeSent ? (
        <>
          <select onChange={(e) => setMode(e.target.value)}>
            <option value="email">Email</option>
            <option value="sms">SMS</option>
          </select>
          {mode === 'email' ? <input {...register('email')} placeholder="Email" /> : <input {...register('phone')} placeholder="Phone" />}
          <button>Send Code</button>
        </>
      ) : (
        <>
          <input {...register('code')} placeholder="Enter Code" />
          <button>Verify</button>
        </>
      )}
    </form>
  );
};
