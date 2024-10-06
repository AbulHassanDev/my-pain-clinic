import React from "react";
import {
  Footer,
  Header,
  HowItWork,
  Navbar,
  Roadmap,
  TrainBenefits,
  TrainingFooter,
} from "../Components/Index";

const Training = () => {
  return (
    <div className=" text-[#fff]">
      <Navbar />
      <Header />
      <Roadmap />
      <TrainBenefits />
      <HowItWork />
      <TrainingFooter />
      <Footer />
    </div>
  );
};

export default Training;
