// @ts-nocheck
import type { AppProps } from "next/app";
import { useEffect } from "react";
import { useRouter } from "next/router";
import { GlobalStyles } from "../src/styles/GlobalStyles";
import { ThemeModeProvider } from "../src/contexts/ThemeModeContext";

const isProduction = process.env.NODE_ENV === "production";

function MyApp({ Component, pageProps }: AppProps) {
  const router = useRouter();
  useEffect(() => {
    const handleRouteChange = (url: URL) => {
      if (isProduction) gtag.pageview(url);
    };
    router.events.on("routeChangeComplete", handleRouteChange);
    return () => {
      router.events.off("routeChangeComplete", handleRouteChange);
    };
  }, [router.events]);

  const isHome = router.pathname === "/";

  return (
    <ThemeModeProvider>
      <GlobalStyles />
      <Component {...pageProps} isHome={isHome} />
    </ThemeModeProvider>
  );
}

export default MyApp;
