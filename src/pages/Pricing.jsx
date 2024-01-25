/* eslint-disable react/no-unescaped-entities */

import { useState } from "react";
import { Link } from "react-router-dom";
import axios from "axios";
import { useEffect } from "react";
import Countdown from "react-countdown";

// Random component
const Completionist = () => (
  <span className="text-sm">Oops!! You are late Offer Ended</span>
);

const Pricing = () => {
  const [services, setServices] = useState();
  const getAllServices = async () => {
    try {
      const res = await axios.get("http://localhost:3001/services/getservices");
      setServices(res.data.allServices);
    } catch (error) {
      console.log(error);
    }
  };
  useEffect(() => {
    getAllServices();
  }, []);

  return (
    <>
      <div className="pt-24 h-full w-full flex justify-center items-center">
        <div className="max-w-screen-xl px-4 py-8 sm:px-6 sm:py-12 lg:px-8 lg:py-16">
          <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 sm:items-stretch md:grid-cols-3 md:gap-8">
            {!services || services.length === 0 ? (
              <div className="flex flex-row gap-2">
                <div className="w-4 h-4 rounded-full bg-blue-700 animate-bounce [animation-delay:.7s]" />
                <div className="w-4 h-4 rounded-full bg-blue-700 animate-bounce [animation-delay:.3s]" />
                <div className="w-4 h-4 rounded-full bg-blue-700 animate-bounce [animation-delay:.7s]" />
              </div>
            ) : (
              services?.map((data) => (
                <div
                  key={data._id}
                  className="divide-y bg-zinc-100  divide-gray-200 rounded-2xl border border-[#537f3c] shadow-sm"
                >
                  <div className="p-6 sm:px-8">
                    <h2 className="text-lg font-medium uppercase text-gray-900">
                      {data.name}
                      <span className="sr-only">Plan</span>
                    </h2>

                    <p className="mt-2 text-gray-700">
                      Lorem ipsum dolor sit amet consectetur adipisicing elit.
                    </p>

                    <p className="mt-2 sm:mt-4">
                      <strong className="text-3xl font-bold text-gray-900 sm:text-4xl">
                        {" "}
                        ₹{data.price}{" "}
                      </strong>

                      <span className="text-sm font-medium text-gray-700">
                        /month
                      </span>
                    </p>

                    <Link
                      to="/payment"
                      className="mt-4 block btn3 rounded border border-indigo-600 bg-indigo-600 px-12 py-3 text-center text-sm font-medium text-white hover:bg-transparent hover:text-[#537f3c]  focus:outline-none focus:ring active:text-indigo-500 sm:mt-6"
                    >
                      Book Now
                    </Link>
                  </div>

                  <div className="p-6 sm:px-8">
                    <p className="text-lg font-medium text-gray-900 sm:text-xl">
                      What's included:
                    </p>

                    <ul className="mt-2 space-y-2 sm:mt-4">
                      {data.included?.map((list, index) => (
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
              ))
            )}
          </div>
        </div>
      </div>

      <div className="h-full w-full flex justify-center items-center">
        <div className="group mb-24 flex flex-col justify-start items-start gap-2 lg:w-1/2 w-80 h-56 duration-500 relative rounded-xl p-4 bg-zinc-900 hover:-translate-y-2 hover:shadow-xl shadow-purple-400">
          <div
            className="absolute p-4 duration-700 shadow-md group-hover:-translate-y-4 group-hover:-translate-x-4 -bottom-10 -right-10 w-1/2 h-1/2 rounded-lg bg-green-700"
            alt="image here"
          >
            <h2 className="text-2xl text-white flex justify-center items-center flex-col font-medium">
              Offer Valid Till : <br />
              <Countdown date={Date.now() + 500000}>
                <Completionist></Completionist>
              </Countdown>
            </h2>
          </div>

          <div className>
            <h2 className="text-2xl font-bold mb-2 text-white">
              Offers Section
            </h2>
            <p className="text-gray-200 line-clamp-3">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean
              convallis magna quis lectus fermentum, quis scelerisque orci
              pellentesque. Duis id porta justo. Sed ac enim id justo tincidunt
              hendrerit id ac lectus. Pellentesque maximus posuere tortor vitae
              consequat.
            </p>
          </div>
          <button className="hover:bg-green-600 bg-green-800 text-white mt-6 rounded p-2 px-6">
            Explore
          </button>
        </div>
      </div>
    </>
  );
};

export default Pricing;
