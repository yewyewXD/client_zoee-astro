import { ChakraProvider } from "@chakra-ui/react";
import theme from "../theme";
import { Source_Sans_Pro } from "@next/font/google";

const ssp = Source_Sans_Pro({
  subsets: ["latin"],
  weight: ["400", "600", "700"],
});

function MyApp({ Component, pageProps }) {
  return (
    <main className={ssp.className}>
      <ChakraProvider theme={theme}>
        <Component {...pageProps} />
      </ChakraProvider>
    </main>
  );
}

export default MyApp;
