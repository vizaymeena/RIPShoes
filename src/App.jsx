import "./App.css";
import { Routes, Route } from "react-router-dom";

// Components
import { NavShoesBar } from "./Layout";
import { HeroSection, Hit, HeroSection2, AboutShoes } from "./Component/ShoesBar";
import { MenShoes } from "./Component/Mens";
import WomenShoe from "./Component/Womens";
import { KidosSection } from "./Component/Kidos";
import { SignUp } from "./Component/Signup";
import LogIn from "./Component/Login";
import { Money } from "./Component/Receipt";
import { UserPurchases } from "./Component/Purchases";
import { EditForm } from "./Component/EditPurchase";

// Dashboards
import { AdminDashboard } from "./Component/AdminDasboard";
import { UserDashboard } from "./Component/UserDasboard";

function App() {
  return (
    <>
      <Routes>
        {/* Main layout route with NavShoesBar */}
        <Route path="/" element={<NavShoesBar />}>
          <Route index element={<><Hit /><HeroSection /><HeroSection2 /><AboutShoes /></>} />
          <Route path="Mens" element={<MenShoes />} />
          <Route path="Womens" element={<WomenShoe />} />
          <Route path="Kidos" element={<KidosSection />} />
           
          <Route path="Signup" element={<SignUp />} />
          <Route path="Login" element={<LogIn />} />
        </Route>

      

        {/* Receipt and Purchases */}
        <Route path="Receipt" element={<Money />} />
        <Route path="Purchases" element={<UserPurchases />} />
        <Route path="EditPurchase" element={<EditForm />} />

        {/* Dashboard Routes */}
        <Route path="AdminDasboard" element={<AdminDashboard />} />
        <Route path="UserDasboard" element={<UserDashboard />} />
      </Routes>
    </>
  );
}

export default App;
