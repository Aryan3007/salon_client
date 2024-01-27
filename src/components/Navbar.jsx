import { Link, useNavigate } from "react-router-dom";
import { FaXTwitter, FaYoutube } from "react-icons/fa6";
import { RiInstagramFill } from "react-icons/ri";
import toast from "react-hot-toast";
import { useState } from "react";
import { IoMdMenu } from "react-icons/io";
import { useAuth } from "../context/auth";
const Navbar = () => {
  const [hidden, setHidden] = useState(false);
  const [auth, setAuth] = useAuth();

  const navigate = useNavigate();
  const handelLogout = () => {
    setAuth({
      ...auth,
      user: null,
      token: "",
    });
    localStorage.removeItem("auth");
    toast.success("logout successfully");
    navigate("/");
  };

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
              <h1 className="text-3xl text-black font-semibold">
                Nourish_nest
              </h1>
            </Link>
          </div>

          <div className="hidden md:block">
            <nav aria-label="Global">
              <div className="flex items-center gap-6 text-lg">
                <Link
                  to="/"
                  className="text-[#537f3c] font-medium transition  hover:border-b-2 border-[#537f3c] "
                >
                  <h1> Home </h1>
                </Link>

                <Link
                  className="text-[#537f3c] font-medium transition hover:border-b-2 border-[#537f3c] "
                  to="/about"
                >
                  <h1> About </h1>
                </Link>

                <Link
                  className="text-[#537f3c] font-medium transition hover:border-b-2 border-[#537f3c] "
                  to="/pricing"
                >
                  <h1> Services </h1>
                </Link>

                <Link
                  className="text-[#537f3c] font-medium transition  hover:border-b-2 border-[#537f3c]"
                  to="/contact"
                >
                  <h1> Contact </h1>
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

                <div>
                  {auth.user ? (
                    <div>
                      <button
                        onClick={handelLogout}
                        className="py-2 px-4 bg-green-800 text-white rounded-xl hover:bg-green-700"
                      >
                        Logout
                      </button>
                    </div>
                  ) : (
                    <div>
                      <Link to="/login">
                        <button className="py-2 px-4 bg-green-800 text-white rounded-xl hover:bg-green-700">
                          SignIn
                        </button>
                      </Link>
                    </div>
                  )}
                </div>
              </div>
            </div>

            <div
              onClick={() => setHidden(!hidden)}
              className="text-3xl lg:hidden"
            >
              <IoMdMenu />

              {hidden && (
                <div
                  className={` hiddenclass bg-white absolute top-16 h-auto py-8 w-screen right-0 menumobile`}
                >
                  <div>
                    <Link to="/">
                      <h1 className="hover:border-b-2 border-black text-lg text-center p-1">
                        Home
                      </h1>
                    </Link>
                    <Link to="/about">
                      <h1 className="hover:border-b-2 border-black text-lg text-center p-1">
                        About
                      </h1>
                    </Link>
                    <Link to="/pricing">
                      <h1 className="hover:border-b-2 border-black text-lg text-center p-1">
                        service
                      </h1>
                    </Link>

                    <Link to="/contact">
                      <h1 className="hover:border-b-2 border-black text-lg text-center p-1">
                        Contact
                      </h1>
                    </Link>

                    <Link to="/login">
                      <h1
                        onClick={handelLogout}
                        className="hover:border-b-2 border-black text-lg text-center p-1"
                      >
                        Logout
                      </h1>
                    </Link>
                  </div>
                </div>
              )}
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
