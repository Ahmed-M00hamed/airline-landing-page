import { BrowserRouter, Routes, Route } from "react-router-dom";

import Hero from "./components/hero/Hero";
import Destinations from "./components/Destinations/Destinations";
import Booking from "./components/Booking/Booking";
import Services from "./components/Services/Services";
import Contact from "./components/Contact/Contact";
import Footer from "./components/Footer/Footer";


import { useRef } from "react";

function Home() {
    const destinationsRef = useRef(null);
  return (
    <>
      <Hero scrollToDestinations={() => {
        destinationsRef.current?.scrollIntoView({
          behavior: "smooth"
        });
      }} />

      <Destinations destinationsRef={destinationsRef} />

      <Services />
      <Contact />
      <Footer />


    </>
  );
}

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/booking/:id" element={<Booking />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
