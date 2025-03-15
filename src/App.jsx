import "./App.css";
import {  Routes, Route } from "react-router-dom";

// Components

import { NavShoesBar , HeroSection , Slider } from "./Component/ShoesBar";
import { MenShoes } from "./Component/Mens";
import WomenShoe from "./Component/Womens";
import Footer from "./Component/ShoeFooter"
import { KidosSection } from "./Component/Kidos";
import { SignUp } from "./Component/Signup";
import { AboutShoes } from "./Component/About";
import LogIn from "./Component/Login";

function App() {
  return (
    <>
    <NavShoesBar />

      {/* Components change based on the URL */}
      <Routes>
        <Route path="/" element={<><Slider /><HeroSection /></>} /> 
        <Route path="/Mens" element={<MenShoes />} />
        <Route path="/Womens" element={<WomenShoe />} />
        <Route path="/Kidos" element={<KidosSection />} />
        <Route path="/Signup" element={<SignUp />} />
        <Route path="/About" element={<AboutShoes />} /> 
        <Route path="/Login" element={<LogIn/>}/>
      </Routes>

      <Footer />
      </>
  );
}

export default App;
