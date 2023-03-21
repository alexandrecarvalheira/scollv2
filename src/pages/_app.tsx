import "@/styles/globals.css";
import type { AppProps } from "next/app";
import { useEffect, useState } from "react";
import NextHead from "next/head";
import WagmiProvider from "@/context/wagmiProvider";
import AnimateProvider from "@/context/animateProvider";
import Navbar from "@/components/navbar";
import Footer from "@/components/footer";
import { Poppins } from "next/font/google";

const poppins = Poppins({
  weight: "400",
  variable: "--font-poppins",
  display: "swap",
  subsets: ["latin"],
});

export default function App({ Component, pageProps }: AppProps) {
  const [mounted, setMounted] = useState(false);
  useEffect(() => {
    setMounted(true);
  }, []);

  return (
    <>
      <WagmiProvider>
        <AnimateProvider>
          <NextHead>
            <title>Scroll Kingdom</title>
          </NextHead>
          <main className={`${poppins.variable}`}>
            <Navbar />
            {mounted && <Component {...pageProps} />}
            <Footer />
          </main>
        </AnimateProvider>
      </WagmiProvider>
    </>
  );
}
