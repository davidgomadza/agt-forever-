import { useAccount } from 'wagmi';
import { useBalance } from 'wagmi';
import { VerifyHuman } from '../components/VerifyHuman';
import { useState } from 'react';

export default function ClaimPage() {
  const { address } = useAccount();
  const { data: balance } = useBalance({
    address,
    token: process.env.GTPS_CONTRACT_ADDRESS,
    chainId: 10, // Optimism
  });
  const [verified, setVerified] = useState(false);
  const hasEnough = balance && Number(balance.formatted) >= 500;

  const generateClaimCode = () => {
    // Simple hash for proof (use crypto library in prod)
    return `AGT-CLAIM-${address.slice(0,6)}-${Date.now()}`;
  };

  return (
    <div>
      <h1>Claim 8000 AGT</h1>
      <VerifyHuman onSuccess={() => setVerified(true)} />
      {verified && address ? (
        hasEnough ? (
          <div>
            <p>You hold {balance.formatted} GTPS. Eligible!</p>
            <p>Claim code: {generateClaimCode()}</p>
            <p>Email balance screenshot or code to liveforever@buythecurefordeath.world to claim.</p>
          </div>
        ) : (
          <p>Need 500 GTPS. Current: {balance?.formatted || 0}</p>
        )
      ) : (
        <p>Connect wallet and verify.</p>
      )}
    </div>
  );
}
