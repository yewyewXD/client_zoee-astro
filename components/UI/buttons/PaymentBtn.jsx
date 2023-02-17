import { PayPalScriptProvider, PayPalButtons } from "@paypal/react-paypal-js";

export default function PaymentBtn({ amount, onPaymentSuccess }) {
  return (
    <div>
      <PayPalScriptProvider
        options={{
          "client-id":
            "AaHPnKzlfK8m-naYbmXtODff6G7X5HwMGezszVPJnlUDvHv37qHS2WFW4Bjp8npByf9w0a0r8oP2o3FY",
          currency: "USD",
        }}
      >
        <PayPalButtons
          createOrder={(_, actions) => {
            return actions.order.create({
              purchase_units: [{ amount: { value: amount } }],
              application_context: {
                shipping_preference: "NO_SHIPPING",
              },
            });
          }}
          onApprove={(data, actions) => {
            return actions.order.capture().then((details) => {
              const {
                email_address,
                name: { given_name, surname },
              } = details.payer;
              onPaymentSuccess({
                id: details.id,
                name: `${given_name} ${surname}`,
                email: email_address,
                date: details.update_time,
              });
            });
          }}
          onError={() => {}}
        />
      </PayPalScriptProvider>
    </div>
  );
}
