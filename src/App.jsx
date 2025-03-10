
import './App.css'
import { NavShoesBar } from './Component/ShoesBar'
import { HeroSection } from './Component/ShoesBar'
import { Slider } from './Component/ShoesBar'
import { MenShoes } from './Component/Mens'
import Footer from './Component/ShoeFooter'
import WomenShoe from './Component/Womens'
import { KidosSection } from './Component/Kidos'


function App() {
  

  return (
    <>
     <NavShoesBar/>
     <Slider/>
     <HeroSection/>
     <MenShoes/>
     <KidosSection/>
     <WomenShoe/>
    
     <Footer/>
    </>
  )
}

export default App
