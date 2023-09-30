import "@rainbow-me/rainbowkit/styles.css";
import "../styles/globals.css";

import { getDefaultWallets, RainbowKitProvider } from "@rainbow-me/rainbowkit";
import { publicProvider } from "wagmi/providers/public";
import { createConfig, WagmiConfig, configureChains } from "wagmi";
import { createPublicClient, http } from "viem";
import { celoAlfajores } from "@wagmi/core/chains";

const { chains } = configureChains(
  [celoAlfajores],
  [publicProvider()]
);

const { connectors } = getDefaultWallets({
  appName: "Celo NFT Marketplace",
  projectId: "006a26d0ccd618646f99be82a14b5a25",
  chains,
});

const config = createConfig({
  autoConnect: true,
  publicClient: createPublicClient({
    chain: celoAlfajores,
    transport: http()
  }),
  connectors
});

function MyApp({ Component, pageProps }) {
  return (
    <WagmiConfig config={config}>
      <RainbowKitProvider chains={chains}>
        <Component {...pageProps} />
      </RainbowKitProvider>
    </WagmiConfig>
  );
}

