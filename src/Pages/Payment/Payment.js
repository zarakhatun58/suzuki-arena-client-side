import React, { useEffect, useState } from "react";
import { useParams } from "react-router";
import { loadStripe } from "@stripe/stripe-js";
import CheckoutForm from "./../CheckoutForm/CheckoutForm";
import { Elements } from "@stripe/react-stripe-js";

const stripePromise = loadStripe(
  "pk_test_51Jw5YtSJFgxE6rP2kzkTljGewNEiwFCYSq9uGlFpYlUvZTFuINsktPWTIh0GWnJSnhGAiy9TkbXuFujs6TIFXQkv00MxFoKNEi"
);

const Payment = () => {
  const { id } = useParams();
  const [booking, setBooking] = useState({});
  useEffect(() => {
    fetch(`https://arcane-river-42711.herokuapp.com/services/${id}`)
      .then((res) => res.json())
      .then((data) => setBooking(data));
  }, [id]);
  return (
    <div className="row my-5 mt-4 mb-4">
      <h2>
        {" "}
        Please pay for :{id} for {booking.name}
      </h2>
      <h4>pay: ${booking.price}</h4>

      <Elements stripe={stripePromise}>
        <CheckoutForm booking={booking} />
      </Elements>
    </div>
  );
};

export default Payment;
