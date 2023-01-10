import { Source_Sans_Pro } from "@next/font/google";
import "../styles/global.scss";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

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
