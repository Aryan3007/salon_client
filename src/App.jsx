import Footer from "./components/Footer";
import Navbar from "./components/Navbar";
import About from "./pages/About";
import Contact from "./pages/Contact";
import Homepage from "./pages/Homepage";
import { Routes, Route } from "react-router-dom";
import Pricing from "./pages/Pricing";
import Pagenotfound from "./pages/Pagenotfound";
import PaymentPage from "./pages/PaymentPage";
function App() {
  return (
    <>
    <div className="w-full z-20 bg-transparent fixed">
      <Navbar/>
    </div>
    <Routes>
    <Route path="/" element={<Homepage />} />
    <Route path="/contact" element={<Contact />} />
    <Route path="/about" element={<About />} />
    <Route path="/pricing" element={<Pricing />} />
    <Route path="/payment" element={<PaymentPage />} />

    <Route path="/*" element={<Pagenotfound />} />
    </Routes>
      <Footer/>
    </>
  );
}

export default App;
