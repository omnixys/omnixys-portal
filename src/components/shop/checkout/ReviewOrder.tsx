import { Button } from "@mui/material";
import { useCheckout } from "./useCheckout";
import { validateAddress, validatePayment } from "./validators";

export function ReviewOrder() {
  const { state } = useCheckout();

  const placeOrder = () => {
    const errors = [...validateAddress(state), ...validatePayment(state)];

    if (errors.length > 0) {
      alert(errors.join("\n"));
      return;
    }

    alert("Order is valid. Ready for backend / payment.");
  };

  return (
    <Button variant="contained" size="large" fullWidth onClick={placeOrder}>
      Place Order
    </Button>
  );
}
