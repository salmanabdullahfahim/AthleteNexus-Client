import { useParams } from "react-router-dom";
import CheckoutForm from "./CheckoutForm";
import { Elements } from "@stripe/react-stripe-js";
import { loadStripe } from "@stripe/stripe-js";
import useSelectedClasses from "../../Hook/useSelectedClasses";

const stripePromise = loadStripe(import.meta.env.VITE_Payment_Gateway_PK);

const Payment = () => {
  const { id } = useParams();
  const [selectedClasses] = useSelectedClasses();

  const payClass = selectedClasses.find(cls => parseFloat(cls._id) === parseFloat(id));

  return (
    <div>
      <h1>Payment Page</h1>
      <Elements stripe={stripePromise}>
        <CheckoutForm payClass={payClass} id={id} />
      </Elements>
    </div>
  );
};

export default Payment;
