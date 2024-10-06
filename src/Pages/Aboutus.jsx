import React from "react";
import Welcome from "../Components/Aboutus/Welcome";
import Services from "../Components/Aboutus/Services";
import MPC from "../Components/Aboutus/MPC";
import Facilities from "../Components/Aboutus/Facilities";
import Career from "../Components/Aboutus/Career";
import { Footer, Navbar } from "../Components/Index";

const Aboutus = () => {
  return (
    <div>
      <Navbar />
      <Welcome />
      <Services />
      <MPC />
      <Facilities />
      <Career />
      <Footer />
    </div>
  );
};

export default Aboutus;
