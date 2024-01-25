import {Link} from "react-router-dom";
import { FaXTwitter, FaYoutube } from "react-icons/fa6";
import { RiInstagramFill } from "react-icons/ri";
const Navbar = () => {
  return (
    <header className="bg-white shadow-sm">
      <div className="mx-auto max-w-screen-2xl px-4 sm:px-">
        <div className="flex h-20 items-center justify-between">
          <div className="md:flex md:items-center md:gap-12">
            <Link
              className="flex items-center justify-center gap-4 text-teal-600"
              to="/"
            >
              <img className="h-12" src="logo.png" alt="" />
              <h1 className="text-3xl text-black font-semibold">Nourish_nest</h1>
            </Link>
          </div>

          <div className="hidden md:block">
            <nav aria-label="Global">
              <div className="flex items-center gap-6 text-lg">
                <Link
                  to="/"
                  className="text-[#537f3c] font-medium transition  hover:border-b-2 border-[#537f3c] "
                >
                  <h1>

                  {" "}
                  Home{" "}
                  </h1>
                </Link>

                <Link
                  className="text-[#537f3c] font-medium transition hover:border-b-2 border-[#537f3c] "
                  to="/about"
                >
                  <h1>

                  {" "}
                  About{" "}
                  </h1>
                </Link>

                <Link
                  className="text-[#537f3c] font-medium transition hover:border-b-2 border-[#537f3c] "
                  to="/pricing"
                >
                  <h1>

                  {" "}
                  Services{" "}
                  </h1>
                </Link>

                <Link
                  className="text-[#537f3c] font-medium transition  hover:border-b-2 border-[#537f3c]"
                  to="/contact"
                ><h1>

                  {" "}
                  Contact{" "}
                </h1>
                </Link>
                
              </div>
            </nav>
          </div>

          <div className="flex items-center gap-4">
            <div className="sm:flex sm:gap-4">
              <div className="hidden sm:flex sm:gap-4">
                <div className="h-10 text-2xl duration-200 border-[#537f3c] flex hover:text-white hover:bg-[#537f3c] justify-center items-center w-10 border  rounded-full">
                  <RiInstagramFill />
                </div>
                <div className="h-10 text-2xl duration-200 border-[#537f3c] flex hover:text-white hover:bg-[#537f3c] justify-center items-center w-10 border  rounded-full">
                  <FaYoutube />
                </div>
                <div className="h-10 text-2xl duration-200 border-[#537f3c] flex hover:text-white hover:bg-[#537f3c] justify-center items-center w-10 border  rounded-full">
                  <FaXTwitter />
                </div>
              </div>
            </div>

            <div className="block md:hidden">
              <button className="rounded bg-gray-100 p-2 text-gray-600 transition hover:text-gray-600/75">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-5 w-5"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  strokeWidth="2"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M4 6h16M4 12h16M4 18h16"
                  />
                </svg>
              </button>
            </div>
          </div>
        </div>
      </div>
    </header>
    // <div className="h-20 flex justify-between items-center text-xl px-24 w-full bg-white">
    //   <div className="flex gap-4 items-center">
    //     <img className="h-14" src="logo.png" alt="" />
    //     <h1 className="text-3xl font-semibold font-serif">Elegance</h1>
    //   </div>
    //   <ul className="flex justify-center gap-8">
    //     <li>Home</li>
    //     <li>About</li>
    //     <li>Pricing</li>
    //     <li>Contact</li>
    //   </ul>
    //   <div className="flex flex-row gap-2">
    //     <div className="h-10 text-2xl duration-200 flex hover:text-white hover:bg-black justify-center items-center w-10 border-2 border-black rounded-full">
    //     <RiInstagramFill />
    //     </div>
    //     <div className="h-10 text-2xl duration-200 flex hover:text-white hover:bg-black justify-center items-center w-10 border-2 border-black rounded-full">
    //     <FaYoutube />

    //     </div>
    //     <div className="h-10 text-2xl duration-200 flex hover:text-white hover:bg-black justify-center items-center w-10 border-2 border-black rounded-full">
    //     <FaXTwitter   />
    //     </div>

    //   </div>
    // </div>
  );
};

export default Navbar;
