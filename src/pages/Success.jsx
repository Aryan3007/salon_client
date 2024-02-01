/* eslint-disable react/no-unescaped-entities */
import { useEffect, useState } from "react";
import axios from "axios";
import { Link, useParams } from "react-router-dom";

const Success = () => {
  const { razorpayPaymentId } = useParams(); // Use the correct parameter name
  console.log(razorpayPaymentId);
  const [status, setStatus] = useState({});

  const getAppointment = async () => {
    try {
      const response = await axios.get(
        `http://localhost:3001/status/appointment/${razorpayPaymentId}`
      );
      console.log(response);
      setStatus(response.data.result);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    getAppointment();
  }, [razorpayPaymentId]); // Include 'razorpayPaymentId' in the dependency array to re-run the effect when it changes

  return (
    <div className="pt-24 flex justify-center items-center">
      <section className="rounded-3xl bg-zinc-100 shadow-2xl">
        <div className="p-8 text-center sm:p-12">
          <p className="text-sm font-semibold uppercase tracking-widest text-[#537f3c]">
            Your appointment has been Sheduled
          </p>

          <h2 className="mt-6 text-3xl font-bold">
            Thanks for Using our Service, we're getting it ready!
          </h2>
          <div className="bg-white rounded-xl shadow-lg my-4 p-4 ">
            <p>
              Amount You Paid :{" "}
              <span className="font-semibold">Rs. {status.amount}</span>{" "}
            </p>
            <p>
              Transaction ID :{" "}
              <span className="font-semibold">
                {" "}
                {status.razorpay_payment_id}
              </span>
            </p>
            <p>
              Selected Date :{" "}
              <span className="font-semibold">{status.date}</span>
            </p>
            <p className="my-4">
              For any quary reach us  {" "}
              <Link to="/contact">
              <span className="text-green-500 font-bold underline">{" "} Here</span>
              </Link>
            </p>
          </div>
          <Link
            className="mt-8 inline-block w-full rounded-xl bg-[#537f3c] py-4 text-sm font-bold text-white shadow-xl"
            to="/appointment"
          >
            Go to Appointment Section
          </Link>
        </div>
      </section>
    </div>
  );
};

export default Success;
