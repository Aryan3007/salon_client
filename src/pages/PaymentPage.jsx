/* eslint-disable no-unused-vars */
/* eslint-disable react/no-unescaped-entities */
import axios from "axios";
import { useEffect, useState } from "react";
import toast from "react-hot-toast";
import { Link, useParams } from "react-router-dom";

const PaymentPage = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [mobile, setMobile] = useState("");
  const [address, setAddress] = useState("");
  const [date, setDateTime] = useState(0);

  // eslint-disable-next-line no-unused-vars
  const [showPayment, setShowPayment] = useState("");

  // eslint-disable-next-line no-unused-vars
  const [loginedUser, setLoginedUser] = useState({});

  useEffect(() => {
    // Get the user data from localStorage
    const authData = localStorage.getItem("auth");

    // Parse the string to a JavaScript object
    const parsedAuthData = authData ? JSON.parse(authData) : {};

    // Set the state with the parsed user data
    setLoginedUser(parsedAuthData.user);
  }, []); // Run this effect only once when the component mounts

  const { id } = useParams();
  const [selected, setselected] = useState({});
  const [amount, setservice] = useState(0);

  const getService = async (id) => {
    try {
      const res = await axios.get(
        `https://salon-server-jupe.onrender.com/services/selectedService/${id}`
      );
      setservice(res.data.service.price);
      setselected(res.data.service);
    } catch (error) {
      console.log(error);
    }
  };
  useEffect(() => {
    getService(id);
  }, [id]);

  const checkOutHandler = async () => {
    try {
      if (
        name === "" ||
        email === "" ||
        mobile === "" ||
        address === "" ||
        date === 0
      ) {
        toast.error("All fields are required");
        return;
      } else {
        const order = await axios.post(
          "https://salon-server-jupe.onrender.com/payment/checkout",
          {
            name: name,
            email: email,
            mobile: mobile,
            address: address,
            date: date,
            amount: parseFloat(amount),
            userId: loginedUser._id,
          }
        );

        var options = {
          key: "rzp_live_uPVVyBnLtxnQSb",
          amount: order.data.amount * 100,
          currency: "INR",
          name: "Nourish_Nest",
          description: "Test Transaction",
          image: "./logo.png",
          order_id: order.data.id,
          prefill: {
            name: "Ritu Bdola",
            email: "ritukabdola.765@gmail.com",
            contact: "9981495170",
          },
          notes: {
            address: "Razorpay Corporate Office",
          },
          theme: {
            color: "#537f3c",
          },
          handler: function (response) {
            const {
              razorpay_payment_id,
              razorpay_order_id,
              razorpay_signature,
            } = response;

            // Now you have the payment_id, order_id, and signature
            // Send these values to your server for verification
            axios
              .post("https://salon-server-jupe.onrender.com/payment/payment-verification", {
                razorpay_payment_id,
                razorpay_order_id,
                razorpay_signature,
              })
              .then((verificationResponse) => {
                console.log(verificationResponse.data);

                // Handle success or failure based on the server's response
                if (verificationResponse.data.success) {
                  window.location.href = `http://localhost:5173/success/${razorpay_payment_id}`;
                } else {
                  window.location.href = "http://localhost:5173/failed";
                }
              })
              .catch((error) => {
                console.error(error);
                // Handle the error
              });
          },

          callback_url: "https://salon-server-jupe.onrender.com/payment/payment-verification",
        };

        var rzp1 = new window.Razorpay(options);
        rzp1.open();

      }
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <>
      {loginedUser ? (
        <div
          className={`lg:p-24 p-4 h-full pt-24 flex lg:flex-row justify-center flex-col  w-full`}
        >
          <div className="h-[700px] lg:flex w-96 hidden justify-center">
            <div className="max-w-screen-xl px-4 py-8 sm:px-6 sm:py-5">
              <div className=" ">
                <div className="divide-y bg-zinc-100 divide-gray-200 rounded-2xl border border-[#537f3c] shadow-sm">
                  <div className="p-6 sm:px-8">
                    <h2 className="text-lg font-medium uppercase text-gray-900">
                      {selected.name}
                      <span className="sr-only">Plan</span>
                    </h2>

                   

                    <p className="mt-2 sm:mt-4">
                      <strong className="text-3xl font-bold text-gray-900 sm:text-4xl">
                        {" "}
                        ₹{selected.price}{" "}
                      </strong>
                    </p>
                  </div>

                  <div className="p-6 sm:px-8">
                    <p className="text-lg font-medium text-gray-900 sm:text-xl">
                      What's included:
                    </p>

                    <ul className="mt-2 space-y-2 sm:mt-4">
                      {selected.included?.map((list, index) => (
                        <li key={index} className="flex items-center gap-1">
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            fill="none"
                            viewBox="0 0 24 24"
                            strokeWidth="1.5"
                            stroke="currentColor"
                            className="h-5 w-5 text-indigo-700"
                          >
                            <path
                              strokeLinecap="round"
                              strokeLinejoin="round"
                              d="M4.5 12.75l6 6 9-13.5"
                            />
                          </svg>

                          <span className="text-gray-700">{list}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="flex flex-col lg:w-2/3 w-full h-full gap-4">
            <div
              className={` h-full mt-6 w-full flex flex-col bg-gray-100 border border-[#537f3c] rounded-xl p-4 shadow-sm`}
            >
              <h2 className="text-black font-semibold text-xl">
                Appointment Shedule Form
              </h2>
              <p className=" text-sm my-4 font-semibold underline text-green-700">NOTE : We are providing our services in indore, Mhow, Pitampur, Rau</p>
              <div className="flex flex-wrap gap-4">
                <div className="mt-4">
                  <label className="text-black" htmlFor="name">
                    Name
                  </label>
                  <input
                    required
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                    placeholder="Your name"
                    className="w-full h-12 bg-white rounded-md border-gray-300 text-black px-2 py-1"
                    type="text"
                    name="name"
                  />
                </div>
                <div className="mt-4">
                  <label className="text-black" htmlFor="email">
                    Email
                  </label>
                  <input
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    required
                    placeholder="Your email"
                    className="w-full h-12 bg-white rounded-md border-gray-300 text-black px-2 py-1"
                    type="text"
                    name="email"
                  />
                </div>
                <div className="mt-4">
                  <label className="text-black">Mobile No.</label>
                  <input
                    required
                    value={mobile}
                    onChange={(e) => setMobile(e.target.value)}
                    placeholder="Mobile number"
                    className="w-full h-12 bg-white rounded-md border-gray-300 text-black px-2 py-1"
                    type="text"
                    name="number"
                  />
                </div>
              </div>

              <div className="mt-4">
                <label className="text-black" htmlFor="address">
                  Address
                </label>
                <textarea
                  value={address}
                  onChange={(e) => setAddress(e.target.value)}
                  required
                  placeholder="Your address"
                  className="w-full resize-none bg-white rounded-md border-gray-300 text-black px-2 py-1"
                  id="address"
                />
              </div>
              <div className="mt-4 flex w-full space-x-2">
                <div className="">
                  <label className="text-black" htmlFor="city">
                    Date & Time
                  </label>
                  <input
                    required
                    onChange={(e) => setDateTime(e.target.value)}
                    placeholder="Select Date & Time"
                    className="w-full h-12 bg-white rounded-md border-gray-300 text-black px-2 py-1"
                    type="date"
                  />
                </div>
              </div>
              <div className="mt-4 flex flex-row space-x-2">
                <div className="">
                  <label className="text-black" htmlFor="city">
                    Ammount To be Paid
                  </label>
                  <input
                    value={amount}
                    readOnly
                    className="w-full h-12 bg-white rounded-md border-gray-300 text-black px-2 py-1"
                    type="number"
                  />
                </div>
              </div>
              <div className="mt-4 flex justify-end">
                <button
                 
                  onClick={() => {
                    checkOutHandler();
                  }}
                  className="btn2 "
                  type="submit"
                >
                  Proceed for Payment
                </button>
              </div>
            </div>
          </div>
        </div>
      ) : (
        <section className="bg-gray-50">
          <div className="mx-auto max-w-screen-xl px-4 py-32 lg:flex lg:h-screen lg:items-center">
            <div className="mx-auto max-w-xl text-center">
              <h1 className="text-3xl font-extrabold sm:text-5xl">
                To use Our Services
                <strong className="font-extrabold text-[#537f3c] sm:block">
                  {" "}
                  Login Now!!{" "}
                </strong>
              </h1>

              <p className="mt-4 sm:text-xl/relaxed ">
                Unlock the full spectrum of our services—Login to access
                exclusive features and personalized appointments. Elevate your
                salon experience with a seamless blend of convenience and
                customization.
              </p>

              <div className="mt-8 flex flex-wrap justify-center gap-4">
                <Link
                  className="block w-full rounded bg-[#537f3c] px-12 py-3 text-sm font-medium text-white shadow hover:bg-none focus:outline-none focus:ring sm:w-auto"
                  to="/login"
                >
                  Login now
                </Link>

                <Link
                  className="block w-full rounded px-12 py-3 text-sm font-medium text-[#537f3c] shadow  focus:outline-none focus:ring  sm:w-auto"
                  to="/"
                >
                  Back to Home
                </Link>
              </div>
            </div>
          </div>
        </section>
      )}
    </>
  );
};

export default PaymentPage;
