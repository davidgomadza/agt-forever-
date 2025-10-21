import { useAccount, useBalance } from 'wagmi';
import { MiniKit } from '@worldcoin/minikit-js';
import { VerifyHuman } from '../components/VerifyHuman';
import { ethers } from 'ethers';

export default function BuyPage() {
  const { address } = useAccount();
  const [verified, setVerified] = useState(false);

  const handlePayUSDC = async () => {
    if (!verified) return alert('Verify first');
    // Use pay command for USDC (20 USDC to payment address)
    const response = await MiniKit.commands.pay({
      token: 'USDC', // On Optimism
      to: process.env.PAYMENT_ADDRESS,
      amount: '20', // $20
      chain: 'optimism',
    });
    if (response.success) alert('Payment sent! Email tx hash for GTPS.');
  };

  const handleSendETH = async () => {
    if (!verified) return alert('Verify first');
    // Equivalent to $20 in ETH (assume fixed 0.01 ETH for example; use oracle in prod)
    const response = await MiniKit.commands.sendTransaction({
      to: process.env.PAYMENT_ADDRESS,
      value: ethers.utils.parseEther('0.01').toString(),
      chainId: 10, // Optimism
    });
    if (response.success) alert('ETH sent! Email proof.');
  };

  return (
    <div>
      <h1>Buy GTPS</h1>
      <p>500 GTPS for $20. No millionaires/billionaires. One per person.</p>
      <VerifyHuman onSuccess={() => setVerified(true)} />
      <button onClick={handlePayUSDC}>Pay $20 USDC</button>
      <button onClick={handleSendETH}>Pay ETH Equivalent</button>
      <a href="https://paypal.me/davidgomadza">Pay via PayPal</a>
      <p>After payment, email proof to liveforever@buythecurefordeath.world for GTPS transfer.</p>
      {/* Conditions disclaimer */}
      <p>By buying, you confirm you're not a millionaire/billionaire and agree to terms.</p>
    </div>
  );
}
