import Footer from "./components/Footer";
import Navbar from "./components/Navbar";
import About from "./pages/About";
import Contact from "./pages/Contact";
import Homepage from "./pages/Homepage";
import { Routes, Route } from "react-router-dom";
import Pricing from "./pages/Pricing";
import Pagenotfound from "./pages/Pagenotfound";
import PaymentPage from "./pages/PaymentPage";
import { Toaster } from "react-hot-toast";
import Register from "./pages/Register";
import Login from "./pages/Login";
import Appointment from "./pages/Appointment";
import Success from "./pages/Success";

function App() {
  return (
    <>
    <div className="w-full z-20 bg-transparent fixed">
      <Navbar/>
    </div>
      <Toaster />
    <Routes>
    <Route path="/" element={<Homepage />} />
    <Route path="/contact" element={<Contact />} />
    <Route path="/about" element={<About />} />
    <Route path="/register" element={<Register />} />
    <Route path="/login" element={<Login />} />
    <Route path="/pricing" element={<Pricing />} />
    <Route path="/payment/:id" element={<PaymentPage />} />
    <Route path="/status/test/:id" element={<Appointment />} />
    <Route path="/appointment" element={<Success />} />

    <Route path="/*" element={<Pagenotfound />} />
    </Routes>
      <Footer/>
    </>
  );
}

export default App;
