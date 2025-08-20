import React from "react";
import Navbar from "./components/navbar";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

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
import Location from "./components/location";
import Signin from "./components/sigin";

function App() {
  return (
    <Router>
      <Navbar announcement="Topicrem celebrates its 30th anniversary!" />
      <Routes>
        <Route path="/location" element={<Location />} />
        <Route path="/signin" element={<Signin />} />
        <Route
          path="/"
          element={
            <>
              <Productoptions />
              <Runthrough />
              <Productitems />
              <Productcartegories />
              <Statement />
              <Amba />
              <News />
              <Socials />
            </>
          }
        />
      </Routes>
        <Cred />
        <Topifooter />
        <Footer />
    </Router>
  );
}

export default App;
