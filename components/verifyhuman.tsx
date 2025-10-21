import { MiniKit } from '@worldcoin/minikit-js';
import { useState } from 'react';

export const VerifyHuman = ({ onSuccess }) => {
  const [verified, setVerified] = useState(false);

  const verify = async () => {
    if (!MiniKit.isInstalled()) return alert('Open in World App');
    const response = await MiniKit.commands.verify({ action: process.env.INCOGNITO_ACTION }); // From .env
    if (response.success) {
      setVerified(true);
      onSuccess();
    }
  };

  return <button onClick={verify}>Verify with World ID</button>;
};
