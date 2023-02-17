import { useState } from "react";
import { Source_Sans_Pro } from "@next/font/google";
import "react-datepicker/dist/react-datepicker.css";
import "../styles/global.scss";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import PaymentModal from "../components/UI/modal/PaymentModal";

const ssp = Source_Sans_Pro({
  subsets: ["latin"],
  weight: ["400", "600", "700"],
});

function MyApp({ Component, pageProps }) {
  const [isModalOpened, setIsModalOpened] = useState(false);
  const [modalProps, setModalProps] = useState({});

  function openPaymentModal(anyProps) {
    setIsModalOpened(true);
    if (anyProps) {
      setModalProps(anyProps);
    } else {
      setModalProps({});
    }
  }

  return (
    <div className={ssp.className}>
      {isModalOpened && (
        <PaymentModal
          {...modalProps}
          onClose={() => {
            setIsModalOpened(false);
          }}
        />
      )}

      <Component openPaymentModal={openPaymentModal} {...pageProps} />
    </div>
  );
}

export default MyApp;
