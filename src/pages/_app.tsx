import "@/styles/globals.css";
import "@roq/nextjs/index.css";
import type { AppProps } from "next/app";
import { ChakraProvider } from "@chakra-ui/react";
import { RoqProvider, ChatProvider } from "@roq/nextjs";

export default function App({ Component, pageProps }: AppProps) {
  return (
    <ChakraProvider>
      <RoqProvider
        config={{
          host: process.env.NEXT_PUBLIC_ROQ_PLATFORM_URL!,
          auth: {
            useRoqAuth: true,
          },
        }}
        themeMode="dark"
      >
        <ChatProvider>
          <Component {...pageProps} />
        </ChatProvider>
      </RoqProvider>
    </ChakraProvider>
  );
}
