import Image from "next/image";
import Header from "./components/Header";
import Hero from "./components/Hero";
import Content from "./components/Content";
import Explore from "./components/Explore";
import Footer from "./components/Footer";
import Achivements from "./components/Achivements";
import Courses from "./components/Courses";
import Staff from "./components/Staff";
import Reviews from "./components/Reviews";

export default function Home() {
  return (
    <div className="w-auto">
      <Header />
      <Hero />
      <Content />
      <Explore/>
      <Achivements/>
      <Courses/>
      <Staff/>
      <Reviews/>


  
      {/* coustomers review ends */}
      
      <Footer/>
    </div>


  );
}
