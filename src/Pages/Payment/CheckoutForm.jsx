import { useParams } from "react-router-dom";
// import useSelectedClasses from "../../Hooks/useSelectedClasses";
import { CardElement, useElements, useStripe } from "@stripe/react-stripe-js";
import { useContext, useEffect, useState } from "react";
import axios from "axios";
import Swal from "sweetalert2";
import './CheckooutForm.css';
import { AuthContext } from "../../Provider/AuthProvider";

const CheckoutForm = ({ payClass, id }) => {
  const stripe = useStripe();
  const elements = useElements();
  const [cardError, setCardError] = useState('');
  const [clientSecret, setClientSecret] = useState('');
  const [processing, setProcessing] = useState('');
  const [transactionId, setTransactionId] = useState('');

  const { user } = useContext(AuthContext);
  const token = localStorage.getItem('access-token');

  useEffect(() => {
    if (payClass?.price > 0) {
      axios.post('https://athlete-nexus-server.vercel.app/create-payment-intent', {
        price: parseFloat(payClass?.price)

      }, {
        headers: {
          Authorization: `Bearer ${token}`,
        }
      })
        .then(res => {
          setClientSecret(res.data.clientSecret);
        });
    }
  }, [payClass,token]);

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
      type: 'card',
      card
    });

    if (error) {
      console.error('error', error);
      setCardError(error.message);
    } else {
      setCardError('');
      console.log('payment method', paymentMethod);
    }

    setProcessing(true);

    const { paymentIntent, error: confirmError } = await stripe.confirmCardPayment(clientSecret, {
      payment_method: {
        card: card,
        billing_details: {
          name: user?.displayName || 'anonymous',
          email: user?.email || 'anonymous'
        }
      }
    });

    if (confirmError) {
      console.log(confirmError);
    }

    setProcessing(false);

    if (paymentIntent?.status === "succeeded") {
      const transactionId = paymentIntent.id;
      setTransactionId(transactionId);

      const payment = {
        classId: payClass?.classId,
        className: payClass?.className,
        classImage: payClass?.classImage,
        instructorName: payClass?.instructorName,
        instructorEmail: payClass?.instructorEmail,
        studentName: user?.displayName,
        studentEmail: user?.email,
        transactionId,
        price: payClass?.price,
        date: new Date(),
      };

      const token = localStorage.getItem('access-token');
      const config = {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      };

      axios.post('https://athlete-nexus-server.vercel.app/payments', payment, config)
        .then(res => {
          console.log("from step one", res.data);

          if (res.data.postResult.insertedId) {
            axios.delete(`https://athlete-nexus-server.vercel.app/classes/selected?id=${payClass?.classId}&email=${user?.email}`, config)
              .then(res => {
                if (res.data.deletedCount > 0) {
                  Swal.fire(
                    'Paid!',
                    `Payment successful!`,
                    'success'
                  );
                }
              });
          }
        });
    }
  };

  return (
    <div>


      <p className="my-5">Enter your Bank Details</p>
      <form onSubmit={handleSubmit}>
        <CardElement
          options={{
            style: {
              base: {
                fontSize: '16px',
                color: '#424770',
                '::placeholder': {
                  color: '#aab7c4',
                },
              },
              invalid: {
                color: '#9e2146',
              },
            },
          }}
        />
        <button type="submit" className="btn btn-success mt-4" disabled={!stripe || !clientSecret || processing || !user}>
          pay
        </button>
      </form>
      {cardError && <p className="text-red-600 ml-8">{cardError}</p>}
      {transactionId && <p className="text-green-500">Transaction complete with transactionId: {transactionId}</p>}
    </div>
  );
};

export default CheckoutForm;
