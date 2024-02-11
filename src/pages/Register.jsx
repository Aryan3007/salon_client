import axios from "axios";
import { useState } from "react";
import toast from "react-hot-toast";
import { Link, useNavigate } from "react-router-dom"

const Register = () => {

    const navigate = useNavigate();
    const [firstname, setFirstname] = useState("");
    const [lastname, setLastname] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [mobile, setMobile] = useState("");

 
    const handelRegisterSubmit = async (e) => {
      e.preventDefault();
      try {


        const res = await axios.post("http://localhost:3001/auth/register", {firstname, lastname, email, password, mobile});
    
        if (res?.data?.success) {
          toast.success(res.data.message);
          navigate("/login");
        } else {
          toast.error(res?.data?.message || "Registration failed");
        }
      } catch (error) {
        console.log(error);
      }
    };


  return (

<section className="bg-white  h-full w-full">
  <div className="lg:grid lg:min-h-screen lg:grid-cols-12">
    <section className="relative flex h-32 items-end bg-gray-900 lg:col-span-5 lg:h-full xl:col-span-6">
      <img
        alt="Night"
        src="https://images.unsplash.com/photo-1512496015851-a90fb38ba796?q=80&w=1935&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
        className="absolute inset-0 h-full w-full object-cover opacity-80"
      />

      
    </section>

    <main
      className="flex items-center justify-center px-8 py-8 sm:px-12 lg:col-span-7 lg:px-16 lg:py-12 xl:col-span-6"
    >
      <div className="max-w-xl lg:max-w-3xl">
        <div className="relative -mt-16 block lg:hidden">
         

        </div>

        <form onSubmit={handelRegisterSubmit} action="#" className="mt-8 grid grid-cols-6 gap-6">
          <div className="col-span-6 sm:col-span-3">
            <label htmlFor="FirstName" className="block text-sm font-medium text-gray-700">
              First Name
            </label>

            <input
            value={firstname}
            onChange={(e)=>{setFirstname(e.target.value)}}
              type="text"
              id="FirstName"
              name="first_name"
              className="mt-1 w-full h-12 px-4 border-2 rounded-md border-gray-200 bg-white text-sm text-gray-700 shadow-sm"
            />
          </div>

          <div className="col-span-6 sm:col-span-3">
            <label htmlFor="LastName" className="block text-sm font-medium text-gray-700">
              Last Name
            </label>

            <input
            value={lastname}
            onChange={(e)=>{setLastname(e.target.value)}}
              type="text"
              id="LastName"
              name="last_name"
              className="mt-1 w-full h-12 px-4 border-2 rounded-md border-gray-200 bg-white text-sm text-gray-700 shadow-sm"
            />
          </div>

          <div className="col-span-6">
            <label htmlFor="Email" className="block text-sm font-medium text-gray-700"> Email </label>

            <input
            value={email}
            onChange={(e)=>{setEmail(e.target.value)}}
              type="email"
              id="Email"
              name="email"
              className="mt-1 w-full h-12 px-4 border-2 rounded-md border-gray-200 bg-white text-sm text-gray-700 shadow-sm"
            />
          </div>

          <div className="col-span-6 sm:col-span-3">
            <label htmlFor="Password" className="block text-sm font-medium text-gray-700"> Password </label>

            <input
            value={password}
            onChange={(e)=>{setPassword(e.target.value)}}
              type="password"
              id="Password"
              name="password"
              className="mt-1 w-full h-12 px-4 border-2 rounded-md border-gray-200 bg-white text-sm text-gray-700 shadow-sm"
            />
          </div>
          
          <div className="col-span-6 sm:col-span-3">
            <label htmlFor="mobile" className="block text-sm font-medium text-gray-700"> Mobile No. </label>

            <input
            value={mobile}
            onChange={(e)=>{setMobile(e.target.value)}}
              type="number"
              id="mobile"
              name="mobile"
              className="mt-1 w-full h-12 px-4 border-2 rounded-md border-gray-200 bg-white text-sm text-gray-700 shadow-sm"
            />
          </div>

       
          

          <div className="col-span-6">
            <p className="text-sm text-gray-500">
              By creating an account, you agree to our
              <a href="#" className="text-gray-700 underline"> terms and conditions </a>
              and
              <a href="#" className="text-gray-700 underline">privacy policy</a>.
            </p>
          </div>

          <div className="col-span-6 sm:flex sm:items-center sm:gap-4">
            <button
            
              className="inline-block shrink-0 rounded-md border border-[#537f3c] bg-[#537f3c] px-12 py-3 text-sm font-medium text-white transition hover:bg-transparent hover:text-[#537f3c] focus:outline-none"
            >
              Create an account
            </button>

            <p className="mt-4 text-sm text-gray-500 sm:mt-0">
              Already have an account?
              <Link to="/login" className="text-blue-600 underline"> Log in</Link>.
            </p>
          </div>
        </form>
      </div>
    </main>
  </div>
</section>
  )
}

export default Register
