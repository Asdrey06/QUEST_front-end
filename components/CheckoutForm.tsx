import {
  Elements,
  useStripe,
  useElements,
  CardNumberElement,
  CardExpiryElement,
  CardCvcElement,
} from "@stripe/react-stripe-js";
import { useSelector } from "react-redux";

const CheckoutForm = () => {
  const instructions = useSelector((state) => state.createoffers.instructions);
  const date = useSelector((state) => state.createoffers.date);
  const serviceFees = useSelector((state) => state.createoffers.offer);
  const productFees = useSelector((state) => state.createoffers.goods);

  console.log(instructions);
  console.log(date);
  console.log(serviceFees);
  console.log(productFees);

  const offersRedux = useSelector((state) => state.offers.value);
  console.log(offersRedux.id);

  const stripe = useStripe();
  const elements = useElements();

  const handleSubmit = async (event) => {
    event.preventDefault();

    if (!stripe || !elements) {
      return;
    }

    const { error, paymentMethod } = await stripe.createPaymentMethod({
      type: "card",
      card: elements.getElement(CardNumberElement),
    });

    if (error) {
      console.error("Error creating payment method:", error);
    } else {
      console.log("Payment method:", paymentMethod);

      fetch("http://localhost:3000/processpayment", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          paymentMethodId: paymentMethod.id,
        }),
      })
        .then((response) => response.json())
        .then((data) => {
          if (data.success === true) {
            fetch("http://localhost:3000/request/saveRequest", {
              method: "POST",
              headers: { "Content-Type": "application/json" },
              body: JSON.stringify({
                instruction: instructions,
                date: date,
                serviceFees: serviceFees,
                productFees: productFees,
                totalFees: serviceFees + productFees,
                id: offersRedux.id,
              }),
            })
              .then((response) => response.json())
              .then((data) => {
                console.log(data);
                // window.location.href = "/clientwelcome";
              });
          }
        })
        .catch((error) => {
          console.error("Error sending payment method to server:", error);
        });
    }
  };

  const elementsOptions = {
    style: {
      base: {
        fontSize: "20px",
        color: "#32325d",
        fontFamily: "Arial, sans-serif",
      },
    },
  };

  return (
    <div
      className="mb-10 bg-white rounded-3xl shadow-2xl"
      style={{
        backgroundImage: "url('/cardbackground.png')",
        backgroundPosition: "top",
        backgroundSize: "cover",
      }}
    >
      <div className=" pt-5 pb-5 flex items-center w-full justify-center  pr-48 text-center">
        <form onSubmit={handleSubmit} className="w-full">
          <CardNumberElement
            options={elementsOptions}
            className="ml-10 p-3 mb-5 w-full text-lg border-2 rounded-2xl border-emerald-200"
          />
          <CardExpiryElement
            options={elementsOptions}
            className="ml-10 p-3 mb-5 w-full text-lg border-2 rounded-2xl border-emerald-200"
          />
          <CardCvcElement
            options={elementsOptions}
            className="ml-10 p-3 mb-5 w-full text-lg border-2 rounded-2xl border-emerald-200"
          />
          <div className="ml-10 flex flex-row">
            <button
              type="submit"
              className="flex flex-row items-center justify-center font-semibold pl-6 w-36 text-center text-white h-10 text-sm pr-6 border-2 rounded-xl bg-indigo-400 hover:bg-indigo-300"
            >
              <p className="flex flex-row">
                Faire <p className="ml-1">offre</p>
              </p>
            </button>
            <div className="flex items-center">
              <img src="/mastercardlogo.png" className="ml-3 h-6" />
              <img src="/visalogo.png" className="ml-3 h-4" />
            </div>
            <div className="flex items-center">
              <img src="/stripe.png" className="pl-6 ml-10 h-9" />
            </div>
          </div>
        </form>
      </div>
    </div>
  );
};

export default CheckoutForm;
