import styles from "./Payment.module.css";
import RemitaPayment from "react-remita";
import { useState } from "react";

function Payment() {
  const [paymentData, setpaymentData] = useState({
    key: "", // enter your key here
    customerId: "",
    firstName: "",
    lastName: "",
    email: "",
    amount: null,
    narration: "",
  });
  let data = {
    ...paymentData,
    onSuccess: function (response) {
      // function callback when payment is successful
      console.log("callback Successful Response", response);
    },
    onError: function (response) {
      // function callback when payment fails
      console.log("callback Error Response", response);
    },
    onClose: function () {
      // function callback when payment modal is closed
      console.log("closed");
    },
  };

  return (
    <div className={styles.App}>
      <div className={styles.container}>
        <p>Pay with remita example</p>
        <input
          className="input"
          type="text"
          placeholder="firstname"
          onChange={(e) =>
            setpaymentData({ ...paymentData, firstName: e.target.value })
          }
        />
        <input
          className="input"
          type="text"
          placeholder="lastname"
          onChange={(e) =>
            setpaymentData({ ...paymentData, lastName: e.target.value })
          }
        />
        <input
          className="input"
          type="text"
          placeholder="email"
          onChange={(e) =>
            setpaymentData({ ...paymentData, email: e.target.value })
          }
        />
        <input
          className="input"
          type="text"
          placeholder="amount"
          onChange={(e) =>
            setpaymentData({ ...paymentData, amount: e.target.value })
          }
        />
        <input
          className="input"
          type="text"
          placeholder="description(optional)"
          onChange={(e) =>
            setpaymentData({ ...paymentData, narration: e.target.value })
          }
        />
        <RemitaPayment
          remitaData={data}
          className={styles.btn} // class to style the button
          text="Pay with Remita" //text to show on button
          // add a 'live' prop to use the live urls/keys
        />
      </div>
    </div>
  );
}

export default Payment;
