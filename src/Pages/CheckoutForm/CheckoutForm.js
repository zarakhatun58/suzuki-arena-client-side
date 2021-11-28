import { CardElement, useElements, useStripe } from "@stripe/react-stripe-js";
import { useState, useEffect } from "react";

const CheckoutForm = ({ booking }) => {
  const { price } = booking;
  const stripe = useStripe();
  const elements = useElements();

  const [error, setError] = useState("");
  const [clientSecret, setClientSecret] = useState("");

  useEffect(() => {
    // Create PaymentIntent as soon as the page loads
    fetch("http://localhost:5000/create-payment-intent", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ price }),
    })
      .then((res) => res.json())
      .then((data) => setClientSecret(data.clientSecret));
  }, [price]);

  const handleSubmit = async (event) => {
    event.preventDefault();

    if (!stripe || !elements) {
      return;
    }

    const card = elements.getElement(CardElement);

    if (card == null) {
      return;
    }

    const { error, paymentMethod } = await stripe.createPaymentMethod({
      type: "card",
      card,
    });

    if (error) {
      // console.log("[error]", error);
      setError(error.message);
    } else {
      console.log("[PaymentMethod]", paymentMethod);
      setError("");
    }
    //payment intent
    // const { paymentIntent, error } = await stripe
    //   .confirmCardPayment("{PAYMENT_INTENT_CLIENT_SECRET}", {
    //     payment_method: {
    //       card: cardElement,
    //       billing_details: {
    //         name: "Jenny Rosen",
    //       },
    //     },
    //   })

    //   .then(function (result) {
    //     // Handle result.error or result.paymentIntent
    //   });
  };
  return (
    <>
      <form
        onSubmit={handleSubmit}
        style={{ width: "500px", marginLeft: "400px", margin: "70px" }}
      >
        <CardElement
          options={{
            style: {
              base: {
                fontSize: "16px",
                color: "#424770",
                "::placeholder": {
                  color: "#aab7c4",
                },
              },
              invalid: {
                color: "#9e2146",
              },
            },
          }}
        />
        <button type="submit" className="btn btn-primary" disabled={!stripe}>
          Pay ${price}
        </button>
      </form>
      {error && <p>{error}</p>}
    </>
  );
};

export default CheckoutForm;
