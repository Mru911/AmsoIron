import React from "react";
import Container from "@material-ui/core/Container";
import TextField from "@material-ui/core/TextField";
import { PayPalScriptProvider, PayPalButtons} from "@paypal/react-paypal-js";


const Payment = () => {
  return (
    <Container className="payment">
      <form action="#">
        <TextField
          className="formmrug1"
          label=" Full Name"
          name="name"
          margin="normal"
          required
          variant="outlined"
          autoComplete="off"
          fullWidth
        />
        <TextField
          className="formmrug1"
          label="Address"
          name="address"
          margin="normal"
          required
          variant="outlined"
          autoComplete="off"
          fullWidth
        />
        <TextField
          className="formmrug1"
          label="Contact"
          name="contact"
          margin="normal"
          required
          variant="outlined"
          autoComplete="off"
          fullWidth
        />
        <TextField
          className="formmrug1"
          label="Amount"
          name="amount"
          margin="normal"
          required
          variant="outlined"
          autoComplete="off"
          fullWidth
        />
      </form>
      <PayPalScriptProvider
        options={{ "client-id":"AcW2_vw7tN3S27pMqLbSxiJkqt7CdQsAinb9Bfk5PSDBlG-NSatmCBhT7f9s42bb7HyjuLgxlrpA5VPm" }}
      >
        <PayPalButtons
          createOrder={(data, actions) => {
            return actions.order.create({
              purchase_units: [
                {
                  amount: {
                    value: "100",
                  },
                },
              ],
            });
          }}
          onApprove={async (data, actions) => {
            const details = await actions.order.capture();
            const name = details.payer.name.given_name;
            alert("Transaction completed by " + name);
          }}
        />
      </PayPalScriptProvider>
    </Container>
  );
};

export default Payment;
