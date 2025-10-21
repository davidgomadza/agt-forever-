import { createConfig, http } from 'wagmi';
import { optimism } from 'wagmi/chains';

export const config = createConfig({
  chains: [optimism],
  transports: { [optimism.id]: http(process.env.OPTIMISM_RPC_URL) },
});
