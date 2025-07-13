import React from "react";
import Navbar from "./components/navbar";
import Productoptions from "./components/productsoptions";
import Productitems from "./components/productitems";
import Runthrough from "./components/runthrough";
import Productcartegories from "./components/productcategories";
import Statement from "./components/statement";
import Amba from "./components/amba";
import News from "./components/news";
import Socials from "./components/socials";
import Footer from "./components/footer";
import Cred from "./components/cred";
import Topifooter from "./components/topifooter";

function App() {
  return (
   <div className=""> 
    <Navbar announcement="Topicrem celebrates its 30th anniversary!" />
    <Productoptions />
    <Runthrough />
    <Productitems />
    <Productcartegories />
    <Statement />
    <Amba />
    <News />
    <Socials />
    <Cred />
    <Topifooter />
    <Footer />

   </div>
  );
}

export default App;
