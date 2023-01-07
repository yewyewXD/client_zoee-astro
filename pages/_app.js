import { Source_Sans_Pro } from "@next/font/google";
import "../styles/global.scss";

const ssp = Source_Sans_Pro({
  subsets: ["latin"],
  weight: ["400", "600", "700"],
});

function MyApp({ Component, pageProps }) {
  return (
    <main className={ssp.className}>
      <Component {...pageProps} />
    </main>
  );
}

export default MyApp;
