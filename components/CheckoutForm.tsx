import {
  Elements,
  useStripe,
  useElements,
  CardNumberElement,
  CardExpiryElement,
  CardCvcElement,
} from "@stripe/react-stripe-js";
import { useSelector } from "react-redux";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import Image from "next/image";

const CheckoutForm = () => {
  const notify = () => toast("Wow so easy!");

  const instructions = useSelector((state) => state.createoffers.instructions);
  const date = useSelector((state) => state.createoffers.date);
  const serviceFees = useSelector((state) => state.createoffers.offer);
  const productFees = useSelector((state) => state.createoffers.goods);
  const user = useSelector((state) => state.users.value);

  console.log(user.token);

  const offersRedux = useSelector((state) => state.offers.value);

  console.log(offersRedux.photo);

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
      toast.error(
        <p className="text-red-500 text-sm">
          Informations de paiement incomplètes
        </p>
      );
      console.error("Error creating payment method:", error);
    } else {
      // fetch pour le processus de paiement
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
            //fetch pour récupérer les les requetes
            fetch("http://localhost:3000/request/saveRequest", {
              method: "POST",
              headers: { "Content-Type": "application/json" },
              body: JSON.stringify({
                instruction: instructions,
                date: date,
                serviceFees: serviceFees,
                productFees: productFees,
                totalFees: serviceFees + productFees,
                from: user.firstname,
                fromConcierge: offersRedux.firstname,
                photoConcierge: offersRedux.photo,
                done: false,
                conciergeId: offersRedux.id,
                clientToken: user.token,
              }),
            })
              .then((response) => response.json())
              .then((data) => {
                console.log(data);

                toast.success(`Requête envoyé à ${offersRedux.firstname} !`);

                setTimeout(() => {
                  window.location.href = "/clientwelcome";
                }, 3000);
              });
          }
        })
        .catch((error) => {
          toast(
            <p className="text-red-500">Informations de paiement incomplètes</p>
          );

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
        backgroundImage: "url('/cardbackground.webp')",
        backgroundPosition: "top",
        backgroundSize: "cover",
      }}
    >
      {" "}
      <ToastContainer />
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
              <Image
                src="/mastercardlogo.webp"
                alt="mastercard logo"
                width={30.9}
                height={24}
                className="ml-3 h-6"
              />
              <Image
                src="/visalogo.webp"
                alt="visa logo"
                width={49.41}
                height={16}
                className="ml-3 h-4"
              />
            </div>
            <div className="flex items-center">
              <Image
                src="/stripe.webp"
                width={148.83}
                height={32}
                className="pl-6 ml-10 h-8 mr-16"
              />
            </div>
          </div>
        </form>
      </div>
    </div>
  );
};

export default CheckoutForm;
