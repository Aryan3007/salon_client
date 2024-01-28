/* eslint-disable react/no-unescaped-entities */
import axios from "axios";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

const PaymentPage = () => {


  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [mobile, setMobile] = useState("");
  const [address, setAddress] = useState("");
  const [date, setDateTime] = useState(0);

  // eslint-disable-next-line no-unused-vars
  const [showPayment, setShowPayment] = useState("");

  const { id } = useParams();
  const [selected, setselected] = useState({});
  const [amount, setservice] = useState(0);

  const getService = async (id) => {
    try {
      const res = await axios.get(
        `http://localhost:3001/services/selectedService/${id}`
      );
      setservice(res.data.service.price);
      setselected(res.data.service);
    } catch (error) {
      console.log(error);
    }
  };
  useEffect(() => {
    getService(id);
  }, [showPayment]);

  const checkOutHandler = async () => {
    try {
        const order = await axios.post('http://localhost:3001/payment/checkout', {
            name: name,
            email: email,
            mobile: mobile,
            address: address,
            date: date,
            amount: parseFloat(amount)
        });

        var options = {
            "key": "rzp_test_5brD1WxKNxDelX",
            "amount": order.data.amount * 100,
            "currency": "INR",
            "name": "Nourish_Nest",
            "description": "Test Transaction",
            "image": "./logo.png",
            "order_id": order.data.id,
            "prefill": {
                "name": "Aryan Tyagi",
                "email": "aryantyagi111s@gmail.com",
                "contact": "9981495170"
            },
            "notes": {
                "address": "Razorpay Corporate Office"
            },
            "theme": {
                "color": "#3399cc"
            },
            "handler": function (response) {
              const { razorpay_payment_id, razorpay_order_id, razorpay_signature } = response;
          
              // Now you have the payment_id, order_id, and signature
              // Send these values to your server for verification
              axios.post('http://localhost:3001/payment/payment-verification', {
                  razorpay_payment_id,
                  razorpay_order_id,
                  razorpay_signature
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
          
            "callback_url": "http://localhost:3001/payment/payment-verification",
        };

        var rzp1 = new window.Razorpay(options);
        rzp1.open();
    } catch (error) {
        console.log(error);
    }
};

  

  return (
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

                <p className="mt-2 text-gray-700">
                  Lorem ipsum dolor sit amet consectetur adipisicing elit.
                </p>

                <p className="mt-2 sm:mt-4">
                  <strong className="text-3xl font-bold text-gray-900 sm:text-4xl">
                    {" "}
                    ₹{selected.price}{" "}
                  </strong>

                  <span className="text-sm font-medium text-gray-700">
                    /month
                  </span>
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
                checkOutHandler()
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
  );
};

export default PaymentPage;
