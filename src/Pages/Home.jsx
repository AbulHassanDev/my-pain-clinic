import React from "react";
import {
  Navbar,
  Welcome,
  About,
  Apoinment,
  Services,
  Team,
  Benefits,
  Testimonials,
  Footer,
  Locations,
} from "../Components/Index";

const Home = () => {
  return (
    <div>
      <Navbar />
      <Welcome />
      <About />
      <Services />
      <Apoinment />
      <Benefits />
      <Testimonials />
      {/* <Locations /> */}
      <Team />
      <Footer />
    </div>
  );
};

export default Home;
