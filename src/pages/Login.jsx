import axios from "axios";
import {  useState } from "react";
import toast from "react-hot-toast";
import { Link, useNavigate } from "react-router-dom";

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();

  const handelLogin = async (e) => {
    e.preventDefault();
    try {
      const res = await axios.post("https://salon-server-jupe.onrender.com/auth/login", {
        email,
        password,
      });
      if (res?.data?.success) {
        toast.success(res.data.message);

        localStorage.setItem("auth", JSON.stringify(res.data));
        navigate("/");
        window.location.reload();
      } else {
        toast.error("Invalid Email or Password");
      }
    } catch (error) {
      console.error("Error during login:", error.response?.data);
      toast.error("Invalid Email or Password");
    }
  };


  return (
    <div className="mx-auto max-w-screen-xl pt-28 lg:min-h-screen rounded-xl flex justify-center items-center px-4 py-16 sm:px-6 lg:px-8">
      <div className="mx-auto max-w-lg bg-white rounded-xl">
        <p className="mx-auto mt-4 max-w-md text-center text-gray-500">
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Obcaecati
          sunt dolores deleniti inventore quaerat mollitia?
        </p>

        <form
          onSubmit={handelLogin}
          className="mb-0 mt-6 space-y-4 rounded-lg p-4 shadow-lg sm:p-6 lg:p-8"
        >
          <p className="text-center text-lg font-medium">
            Sign in to your account
          </p>

          <label htmlFor="email" className="sr-only">
            Email
          </label>

          <input
            value={email}
            onChange={(e) => {
              setEmail(e.target.value);
            }}
            type="email"
            className="w-full rounded-lg border-2 border-gray-200 p-4 pe-12 text-sm shadow-sm"
            placeholder="Enter email"
          />

          <label htmlFor="password" className="sr-only">
            Password
          </label>

          <input
            value={password}
            onChange={(e) => {
              setPassword(e.target.value);
            }}
            type="password"
            className="w-full rounded-lg border-2 border-gray-200 p-4 pe-12 text-sm shadow-sm"
            placeholder="Enter password"
          />

          <button
            type="submit"
            className="block w-full rounded-lg btn2 bg-indigo-600 px-5 py-3 text-sm font-medium text-white"
          >
            Sign in
          </button>
          <h1 className="text-center">OR</h1>

          <p className="text-center text-sm text-gray-500">
            No account?
            <Link to="/register" className="underline text-blue-600">
              {" "}
              Sign up
            </Link>
          </p>
        </form>
      </div>
    </div>
  );
};

export default Login;
