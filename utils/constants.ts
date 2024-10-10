import { createThirdwebClient, getContract } from "thirdweb";
import { xaiSepolia } from "thirdweb/chains";
import { inAppWallet } from "thirdweb/wallets";

export const appMetadata = {
  name: "Cat Attack",
  url: "https://catattack.thirdweb.com",
};

export const CLIENT_ID = process.env.NEXT_PUBLIC_THIRDWEB_CLIENT_ID || "";
console.log("Client ID:", process.env.NEXT_PUBLIC_THIRDWEB_CLIENT_ID);
export const CHAIN = xaiSepolia;
export const CONTRACT_ADDR = "0x870eceF7Ac6713B784Fee6159Cb25D99e40869fb";

export const client = createThirdwebClient({ clientId: CLIENT_ID });
export const contract = getContract({
  client,
  address: CONTRACT_ADDR,
  chain: CHAIN,
});

export const accountAbstraction = {
  chain: CHAIN,
  gasless: true,
};

export const wallets = [
  inAppWallet({
    auth: {
      options: ["email"],
    },
  }),
];
