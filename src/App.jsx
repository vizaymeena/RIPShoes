import "./App.css";
import {  Routes, Route } from "react-router-dom";

// Components
import { NavShoesBar } from "./Layout";
import { HeroSection , Hit, HeroSection2 } from "./Component/ShoesBar";
import { MenShoes } from "./Component/Mens";
import WomenShoe from "./Component/Womens";
// import Footer from "./Component/ShoeFooter"
import { KidosSection } from "./Component/Kidos";
import { SignUp } from "./Component/Signup";
import { AboutShoes } from "./Component/ShoesBar";
import LogIn from "./Component/Login";
import { Money } from "./Component/Receipt";
import { UserPurchases } from "./Component/Purchases";
import { EditForm } from "./Component/EditPurchase";

// Dasboards
import { AdminDashboard } from "./Component/AdminDasboard";
import { UserDashboard } from "./Component/UserDasboard";
// Layout



function App() {
  return (
    <>
    <Routes>
      <Route path="/" element={<NavShoesBar/>}>
       <Route index element={<><Hit /><HeroSection /> <HeroSection2/> <AboutShoes/> </>}/>
      </Route>
   
   

      {/* Components change based on the URL */}
     
        {/* <Route path="/" element={<><Hit /><HeroSection /> <HeroSection2/> </>} />  */}
        <Route path="/Mens" element={<MenShoes />} />
        <Route path="/Womens" element={<WomenShoe />} />
        <Route path="/Kidos" element={<KidosSection />} />
        <Route path="/Signup" element={<SignUp />} />
        {/* <Route path="/About" element={<AboutShoes />} />  */}
        <Route path="/Login" element={<LogIn/>}/>
        <Route path="/Receipt" element={<Money/>}/>

        {/*  */}
        <Route path="/Purchases" element={<UserPurchases/>}/>
        <Route path="/EditPurchase" element={<EditForm/>}/>

        {/* Dasboard Routes*/}
        <Route path="/AdminDashboard" element={<AdminDashboard/>}/>
        <Route path="/UserDashboard" element={<UserDashboard/>}/>

        {/* abot */}
        {/* <Route path="/About" element={<AboutShoes/>}/> */}

        </Routes>

      

     

    
      </>
  );
}

export default App;
