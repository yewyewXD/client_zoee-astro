import { PayPalScriptProvider, PayPalButtons } from "@paypal/react-paypal-js";

export default function PaymentBtn({ amount, onPaymentSuccess }) {
  return (
    <PayPalScriptProvider
      options={{
        "client-id":
          "AQDq__BKLcKmIebNUR0AgSA4GktK0npPQpz2lvPHmze1NY3PZ1F5elCwQKqZue4K1XxsNC13ZfnImBSH",
        currency: "USD",
      }}
    >
      <PayPalButtons
        createOrder={(_, actions) => {
          return actions.order.create({
            purchase_units: [{ amount: { value: amount } }],
          });
        }}
        onApprove={(data, actions) => {
          return actions.order.capture().then((details) => {
            alert("Transaction completed by " + details.payer.name.given_name);
          });
        }}
      />
    </PayPalScriptProvider>
  );
}
