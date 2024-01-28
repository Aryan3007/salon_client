/* eslint-disable react/no-unescaped-entities */
import { MdArrowOutward } from "react-icons/md";
import KeenSlider from "keen-slider";
import { useEffect, useRef, useState } from "react";
import "keen-slider/keen-slider.min.css";
import { Modal } from "antd";
import { Link } from "react-router-dom";
import axios from "axios";

// import Offers from "../components/Offers";
const Homepage = () => {
  const keenSliderRef = useRef(null);
  const [reviews, serReviews] = useState([]);


  const [message, setMessage] = useState("");
  const [name, setName] = useState("");


  useEffect(() => {
    const keenSliderInstance = new KeenSlider(keenSliderRef.current, {
      loop: true,
      slides: {
        origin: "center",
        perView: 1.25,
        spacing: 16,
      },
      breakpoints: {
        "(min-width: 1024px)": {
          slides: {
            origin: "auto",
            perView: 2.5,
            spacing: 32,
          },
        },
      },
    });

    const keenSliderPrevious = document.getElementById("keen-slider-previous");
    const keenSliderNext = document.getElementById("keen-slider-next");

    keenSliderPrevious.addEventListener("click", () =>
      keenSliderInstance.prev()
    );
    keenSliderNext.addEventListener("click", () => keenSliderInstance.next());

    // Cleanup the event listeners when the component unmounts
    return () => {
      keenSliderPrevious.removeEventListener("click", () =>
        keenSliderInstance.prev()
      );
      keenSliderNext.removeEventListener("click", () =>
        keenSliderInstance.next()
      );
    };
  }, [reviews]); // Empty dependency array to run the effect only once

  const [modal2Open, setModal2Open] = useState(false);

  const getAllReviews = async () => {
    try {
      const res = await axios.get("http://localhost:3001/review/getreview");
      serReviews(res.data.reviews);
    } catch (error) {
      console.log(error);
    }
  };  
  const postReviews = async () => {
    try {
      const res = await axios.post("http://localhost:3001/review/postreview",{message, name});
      serReviews(res.data.reviews);
    } catch (error) {
      console.log(error);
    }
  };
  useEffect(() => {
    getAllReviews();

  }, []);
  return (
    <>
      <div className="h-full flex lg:flex-row flex-col lg:p-24 pt-16 p-4  gap-3 w-screen">
        <div className="lg:w-1/2 w-full lg:pt-28 pt-12 flex flex-col gap-6">
          <h1 className="lg:text-6xl text-4xl font-semibold">
            Locks of Love, Styles of Grace: Your Journey to Radiant Beauty.
          </h1>
          <p>
            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Quidem
            nobis itaque pariatur quos facilis ipsa dolores beatae, eligendi
            sequi optio a quasi non tempore repellendus fugiat enim at
            doloremque consequatur.
          </p>
          <div className="flex gap-6">
            <button className="btn border-2 border-[#537f3c]">Explore</button>
            <Link to="/pricing">
              <button className="btn2">Book Now</button>
            </Link>
          </div>

          <div className="h-20 w-full bg-white flex gap-5 border-2 p-3 shadow-2xl border-[#537f3c] mt-6 rounded-xl">
            <div className="w-1/3 h-full flex flex-col justify-center items-center ">
              <h1 className="text-2xl font-bold">150+</h1>
              <p>Connections</p>
            </div>{" "}
            <div className="w-1/3 h-full flex flex-col border-x-2 border-[#537f3c] justify-center items-center ">
              <h1 className="text-2xl font-bold">180+</h1>
              <p>Customers</p>
            </div>{" "}
            <div className="w-1/3 h-full flex flex-col justify-center items-center ">
              <h1 className="text-2xl font-bold">4.7+</h1>
              <p>Reviews Ratings</p>
            </div>
          </div>
        </div>
        <div className=" flex min-w-80 gap-4 justify-center items-center lg:w-1/2 w-full my-12 h-full">
          <div className="h-96 lg:w-64 w-80 rounded-xl bg-zinc-100 shadow-2xl home1"></div>
          <div className="h-96 lg:w-64 w-80 rounded-xl bg-zinc-100 shadow-2xl lg:translate-y-16 home2"></div>
          <div className="h-96 lg:w-64 w-80 rounded-xl bg-zinc-100 shadow-2xl lg:translate-y-32 home3"></div>
        </div>
      </div>

      <div className="h-full w-full justify-center flex flex-row flex-wrap gap-6 px-12">
        <div className="h-96 lg:w-[30%]  md:w-1/3 w-80 flex flex-col  justify-center items-center gap-4 lg:px-12 text-center">
          <img className="h-24" src="/experience.png" alt="" />
          <h1 className="text-xl font-semibold">PERSONALIZED EXPERIENCE</h1>
          <p>
            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Eos ex
            magnam illo praesentium repudiandae mollitia reprehenderit voluptate
            in consectetur voluptatibus quis itaque, ab reiciendis placeat,
            minima aliquam fuga blanditiis. Architecto.
          </p>
        </div>
        <div className="h-96 lg:w-[30%]  md:w-1/3 w-80 lg:border-x-2 lg:border-[#537f3c] flex flex-col justify-center items-center gap-4 lg:px-12 text-center">
          <img className="h-24" src="/selfcare.png" alt="" />
          <h1 className="text-xl font-semibold">PROFESSSIONAL CARE</h1>
          <p>
            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Eos ex
            magnam illo praesentium repudiandae mollitia reprehenderit voluptate
            in consectetur voluptatibus quis itaque, ab reiciendis placeat,
            minima aliquam fuga blanditiis. Architecto.
          </p>
        </div>
        <div className="h-96 lg:w-[30%] md:w-1/3 w-80 flex flex-col justify-center items-center gap-4 lg:px-12 text-center">
          <img className="h-24" src="/work.png" alt="" />
          <h1 className="text-xl font-semibold">WE CARE WHAT WE DO</h1>
          <p>
            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Eos ex
            magnam illo praesentium repudiandae mollitia reprehenderit voluptate
            in consectetur voluptatibus quis itaque, ab reiciendis placeat,
            minima aliquam fuga blanditiis. Architecto.
          </p>
        </div>
      </div>

      <div className="h-full flex gap-6 lg:flex-row flex-col justify-center items-center lg:p-12 w-full">
        <div className="h-2/3 p-4 lg:w-1/2 w-full">
          <img
            src="https://images.unsplash.com/photo-1505159401534-f62f81037389?q=80&w=2071&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
            alt=""
          />
        </div>
        <div className="h-full min-w-80 lg:p-12 p-4 flex flex-col justify-center items-center gap-6 lg:w-1/2 w-full">
          <div className="h-full w-full lg:p-12  flex justify-center gap-6 items-center flex-col">
            <h1 className="text-3xl">RITU...</h1>
            <h1 className="text-4xl font-serif font-semibold underline">
              Makeup Artist
            </h1>
            <p className="text-center px-12">
              Lorem ipsum dolor sit amet, consectetur adipisicing elit. Hic modi
              in magni perferendis qui, illum doloribus blanditiis temporibus ut
              laudantium et voluptatem laboriosam doloremque deleniti maxime sit
              earum at explicabo!
            </p>
            <Link to="/about">
              <button className="w-44 btn2">Explore</button>
            </Link>
          </div>
        </div>
      </div>

      {/* <div className="h-full px-12 lg:flex-row justify-center items-center flex-col flex w-full">
        <div className="h-full min-w-96 lg:border-r-[#537f3c] border-2 w-1/2 flex justify-center flex-col gap-4 items-center ">
          <h1 className="uppercase text-xl ">Welcome</h1>
          <h1 className="lg:text-6xl text-4xl font-serif text-center font-semibold underline my-4">
            Opening Hours
          </h1>
          <Link to="/pricing">
          <button className="w-44 btn2">Book Now</button>
          </Link>
        </div>
        <div className=" p-4 flex min-w-96 gap-8 justify-center text-center items-center flex-col lg:w-1/2 w-full h-full">
          <h1 className="lg:text-2xl text-xl">MONDAY to FRIDAY 08:00 - 20:00</h1>
          <h1 className="lg:text-2xl text-xl">SATURDAY 10:00 - 18:00</h1>
          <h1 className="lg:text-2xl text-xl">SUNDAY 10:00 - 18:00</h1>
        </div>
      </div> */}

      <div className="h-full lg:px-36 flex flex-col lg:py-12 w-full my-12">
        <h1 className="text-xl text-center">- Photo Gallery</h1>
        <h1 className="text-4xl px-4 lg:px-44 text-center">
          Indulge in Luxury, Transform with Elegance: Your Journey to Radiant
          Beauty Begins Here at Ritu's Salon
        </h1>

        <div className="flex gap-8 text-white my-12 md:px-20 p-4 lg:flex-row flex-col md:flex-row">
          <div className="h-[600px] flex gap-8 flex-col-reverse lg:w-[60%]">
            <div className="h-1/2 btn rounded-xl couples bg-zinc-300 flex p-3 justify-end flex-col items-baseline">
              <div className="  flex gap-2 mb-4 text-2xl">
                <h1 className="bg-white p-2 px-4 rounded-full">
                  Collection For Couples
                </h1>
                <div className="h-12 w-12 bg-white flex justify-center items-center rounded-full">
                  <MdArrowOutward className="text-2xl" />
                </div>
              </div>
            </div>
            <div className="lg:h-1/2 h-full w-full flex flex-col lg:flex-row gap-8">
              <div className="lg:w-[50%] w-full btn mens flex flex-col justify-end rounded-xl bg-zinc-300 h-full">
                <div className="  flex gap-2 mb-4 text-2xl">
                  <h1 className="bg-white p-2 px-8 rounded-full">Hairs</h1>
                  <div className="h-12 w-12 bg-white flex justify-center items-center rounded-full">
                    <MdArrowOutward className="text-2xl" />
                  </div>
                </div>
              </div>
              <div className="lg:w-[50%] w-full btn womens flex flex-col justify-end rounded-xl bg-zinc-300 h-full">
                <div className="  flex gap-2 mb-4 text-2xl">
                  <h1 className="bg-white p-2 px-6 rounded-full">makeup</h1>
                  <div className="h-12 w-12 bg-white flex justify-center items-center rounded-full">
                    <MdArrowOutward className="text-2xl" />
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="md:h-[600px] btn lg:h-[600px] h-[300px] w-[100%] kids  items-end flex rounded-xl bg-zinc-300 md:w-[40%] lg:w-[40%]">
            <div className="  flex gap-2 mb-4 text-2xl">
              <h1 className="bg-white p-2 px-4 rounded-full">Bridal Makeup</h1>
              <div className="h-12 w-12 bg-white flex justify-center items-center rounded-full">
                <MdArrowOutward className="text-2xl" />
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="h-full flex flex-col lg:flex-row-reverse gap-12 bg-white py-24 justify-center lg:px-28 px-4 w-full">
        <div className="lg:w-1/2 w-full flex flex-col">
          <h1>-FAQ</h1>
          <h1 className="text-4xl">Questions? Look here.</h1>
        </div>

        <div className="space-y-4 lg:w-1/2 w-full p-4">
          <details
            className="group [&_summary::-webkit-details-marker]:hidden "
            open
          >
            <summary className="flex cursor-pointer items-center justify-between gap-1.5 rounded-lg bg-gray-50 p-4 text-gray-900">
              <h2 className="font-medium">
                Lorem ipsum dolor sit amet consectetur adipisicing?
              </h2>
              <svg
                className="h-5 w-5 shrink-0 transition duration-300 group-open:-rotate-180"
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M19 9l-7 7-7-7"
                />
              </svg>
            </summary>
            <p className="mt-4 px-4 leading-relaxed text-gray-700">
              Lorem ipsum dolor sit amet consectetur, adipisicing elit. Ab hic
              veritatis molestias culpa in, recusandae laboriosam neque aliquid
              libero nesciunt voluptate dicta quo officiis explicabo
              consequuntur distinctio corporis earum similique!
            </p>
          </details>
          <details className="group [&_summary::-webkit-details-marker]:hidden">
            <summary className="flex cursor-pointer items-center justify-between gap-1.5 rounded-lg bg-gray-50 p-4 text-gray-900">
              <h2 className="font-medium">
                Lorem ipsum dolor sit amet consectetur adipisicing?
              </h2>
              <svg
                className="h-5 w-5 shrink-0 transition duration-300 group-open:-rotate-180"
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M19 9l-7 7-7-7"
                />
              </svg>
            </summary>
            <p className="mt-4 px-4 leading-relaxed text-gray-700">
              Lorem ipsum dolor sit amet consectetur, adipisicing elit. Ab hic
              veritatis molestias culpa in, recusandae laboriosam neque aliquid
              libero nesciunt voluptate dicta quo officiis explicabo
              consequuntur distinctio corporis earum similique!
            </p>
          </details>
          <details className="group [&_summary::-webkit-details-marker]:hidden">
            <summary className="flex cursor-pointer items-center justify-between gap-1.5 rounded-lg bg-gray-50 p-4 text-gray-900">
              <h2 className="font-medium">
                Lorem ipsum dolor sit amet consectetur adipisicing?
              </h2>
              <svg
                className="h-5 w-5 shrink-0 transition duration-300 group-open:-rotate-180"
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M19 9l-7 7-7-7"
                />
              </svg>
            </summary>
            <p className="mt-4 px-4 leading-relaxed text-gray-700">
              Lorem ipsum dolor sit amet consectetur, adipisicing elit. Ab hic
              veritatis molestias culpa in, recusandae laboriosam neque aliquid
              libero nesciunt voluptate dicta quo officiis explicabo
              consequuntur distinctio corporis earum similique!
            </p>
          </details>
          <details className="group [&_summary::-webkit-details-marker]:hidden">
            <summary className="flex cursor-pointer items-center justify-between gap-1.5 rounded-lg bg-gray-50 p-4 text-gray-900">
              <h2 className="font-medium">
                Lorem ipsum dolor sit amet consectetur adipisicing?
              </h2>
              <svg
                className="h-5 w-5 shrink-0 transition duration-300 group-open:-rotate-180"
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M19 9l-7 7-7-7"
                />
              </svg>
            </summary>
            <p className="mt-4 px-4 leading-relaxed text-gray-700">
              Lorem ipsum dolor sit amet consectetur, adipisicing elit. Ab hic
              veritatis molestias culpa in, recusandae laboriosam neque aliquid
              libero nesciunt voluptate dicta quo officiis explicabo
              consequuntur distinctio corporis earum similique!
            </p>
          </details>
          <details className="group [&_summary::-webkit-details-marker]:hidden">
            <summary className="flex cursor-pointer items-center justify-between gap-1.5 rounded-lg bg-gray-50 p-4 text-gray-900">
              <h2 className="font-medium">
                Lorem ipsum dolor sit amet consectetur adipisicing?
              </h2>
              <svg
                className="h-5 w-5 shrink-0 transition duration-300 group-open:-rotate-180"
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M19 9l-7 7-7-7"
                />
              </svg>
            </summary>
            <p className="mt-4 px-4 leading-relaxed text-gray-700">
              Lorem ipsum dolor sit amet consectetur, adipisicing elit. Ab hic
              veritatis molestias culpa in, recusandae laboriosam neque aliquid
              libero nesciunt voluptate dicta quo officiis explicabo
              consequuntur distinctio corporis earum similique!
            </p>
          </details>
        </div>
      </div>

      <div className="h-full my-12 px-12 flex flex-col justify-center items-center lg:flex-row-reverse w-full">
        <div className=" p-12 flex justify-center items-center flex-col gap-1 lg:w-1/2 w-full h-full">
          <div className="flex justify-center items-center flex-row gap-2">
            <div className="h-16 overflow-hidden lg:flex md:flex hidden w-16 bg-zinc-300 rounded-full">
              <img
                className="h-full w-full"
                src="https://images.unsplash.com/photo-1705965485279-4c3ee59ea5af?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                alt=""
              />
            </div>
            <div className="h-20 overflow-hidden w-20 bg-zinc-300 rounded-full">
              <img
                className="h-full w-full"
                src="https://images.unsplash.com/photo-1697081544011-e472e6a19cc8?q=80&w=2071&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                alt=""
              />
            </div>
            <div className="h-32 w-32 bg-zinc-300 flex justify-center items-center overflow-hidden rounded-full">
              <img
                className="h-full w-full"
                src="https://plus.unsplash.com/premium_photo-1664889357942-227d2a16ef9f?q=80&w=1925&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                alt=""
              />
            </div>
            <div className="h-20 overflow-hidden w-20 bg-zinc-300 rounded-full">
              <img
                className="h-full w-full"
                src="https://images.unsplash.com/photo-1697081544006-c5bb266e3940?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                alt=""
              />
            </div>
            <div className="h-16 overflow-hidden lg:flex md:flex hidden w-16 bg-zinc-300 rounded-full">
              <img
                className="h-full w-full"
                src="https://images.unsplash.com/photo-1697081544094-39589abec590?q=80&w=2071&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                alt=""
              />
            </div>
          </div>
          <div className="flex gap-3 items-center">
            <div className="rating">
              <input defaultValue={5} name="rate" id="star5" type="radio" />
              <label title="text" htmlFor="star5" />

              <input defaultValue={5} name="rate" id="star5" type="radio" />
              <label title="text" htmlFor="star5" />

              <input defaultValue={5} name="rate" id="star5" type="radio" />
              <label title="text" htmlFor="star5" />

              <input defaultValue={5} name="rate" id="star5" type="radio" />
              <label title="text" htmlFor="star5" />

              <input defaultValue={5} name="rate" id="star5" type="radio" />
              <label title="text" htmlFor="star5" />
            </div>
          </div>
          <h1 className="text-xl">Aryan Tyagi</h1>

          <p className="text-center text-sm lg:w-2/3">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Ab debitis
            ut quidem et! Reprehenderit cumque aliquid eius dolore temporibus
            illum?
          </p>
        </div>
        <div className="h-full lg:w-1/2 flex flex-col gap-4 px-4 lg:px-24">
          <h1 className="text-xl ">- Testimonials</h1>
          <h1 className="text-4xl font-semibold my-4">
            Our Customer <br /> Testimonials
          </h1>
          <p>
            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Libero
            suscipit architecto consequatur vitae quia odit similique,
            voluptatem, minima at cumque, exercitationem nam illum nulla maxime
            blanditiis quasi iste necessitatibus inventore!
          </p>

          <button onClick={() => setModal2Open(true)} className="w-64 btn2">
            Write a Review
          </button>

          <Modal
            centered
            open={modal2Open}
            onOk={() => {setModal2Open(false), postReviews()}}
            onCancel={() => setModal2Open(false)}
          >
            <div>
              <h1 className="text-center text-xl">Write Your Review Here</h1>
              <div className="rounded-lg bg-white lg:col-span-3 lg:p-12">
                <form action="" className="space-y-4">
                  <div className="flex-1">
                    <select
                      className="w-full h-12 border bg-white rounded-md border-gray-300 text-black px-2 py-1"
                      id="country"
                    >
                      <option value>Rate Our Service</option>

                      <option value="AF">Excellent</option>
                      <option value="DZ">Very Good</option>
                      <option value="AO">Good</option>
                      <option value="ZW">Bad</option>
                      <option value="ZW">Poor</option>
                    </select>
                  </div>
                  <div>
                    <label className="sr-only " htmlFor="name">
                      Name
                    </label>
                    <input
                    value={name}
                    onChange={(e)=>{setName(e.target.value)}}
                      className="w-full rounded-lg border-gray-200 border-2 p-3 text-sm"
                      placeholder="Name"
                      type="text"
                      id="name"
                    />
                  </div>

                  <div>
                    <label className="sr-only" htmlFor="message">
                      Start Writing here
                    </label>

                    <textarea
                    value={message}
                    onChange={(e)=>{setMessage(e.target.value)}}
                      className="w-full resize-none rounded-lg border-gray-200 border-2 p-3 text-sm"
                      placeholder="Start writing here..."
                      rows="8"
                      id="message"
                    ></textarea>
                  </div>
                </form>
              </div>
            </div>
          </Modal>
        </div>
      </div>

      <section className="lg:px-24">
        <div className="mx-auto px-4 py-12 sm:px-6 lg:me-0 lg:py-16 lg:pe-0 lg:ps-8 xl:py-24">
          <div className="max-w-7xl items-end justify-between sm:flex sm:pe-6 lg:pe-8">
            <h2 className="max-w-xl text-4xl font-semibold tracking-tight text-gray-900 sm:text-5xl">
              Read trusted reviews from our customers
            </h2>

            <div className="mt-8 flex gap-4 lg:mt-0">
              <button
                aria-label="Previous slide"
                id="keen-slider-previous"
                className="rounded-full border border-[#537f3c] p-3 text-[#537f3c]transition hover:bg-[#537f3c] hover:text-white"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth="1.5"
                  stroke="currentColor"
                  className="h-5 w-5 rtl:rotate-180"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M15.75 19.5L8.25 12l7.5-7.5"
                  />
                </svg>
              </button>

              <button
                aria-label="Next slide"
                id="keen-slider-next"
                className="rounded-full border border-[#537f3c] p-3 text-[#537f3c]transition hover:bg-[#537f3c] hover:text-white"
              >
                <svg
                  className="h-5 w-5 rtl:rotate-180"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M9 5l7 7-7 7"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                  />
                </svg>
              </button>
            </div>
          </div>

          <div className="-mx-6 mt-8 lg:col-span-2 lg:mx-0">
            <div ref={keenSliderRef} id="keen-slider" className="keen-slider">
              {reviews?.map((review, index) => (
                <div key={index} className="keen-slider__slide">
                  <blockquote className="flex h-full flex-col justify-between bg-white p-6 shadow-sm sm:p-8 lg:p-12">
                    <div>
                      <div className="flex gap-0.5 text-green-500">
                        {reviews.map((_, index) => (
                          <svg
                            key={index}
                            className="h-5 w-5"
                            fill="currentColor"
                            viewBox="0 0 20 20"
                            xmlns="http://www.w3.org/2000/svg"
                          >
                            <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                          </svg>
                        ))}
                      </div>

                      <div className="mt-4">
                        <p className="text-2xl font-bold text-[#537f3c] sm:text-3xl">
                          Stayin' Alive
                        </p>

                        <p className="mt-4 leading-relaxed text-gray-700">
                          {review.message}
                        </p>
                      </div>
                    </div>

                    <footer className="mt-4 uppercase text-sm font-medium text-gray-700 sm:mt-6">
                      &mdash; {review.name}
                    </footer>
                  </blockquote>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* <Offers/> */}
    </>
  );
};

export default Homepage;
