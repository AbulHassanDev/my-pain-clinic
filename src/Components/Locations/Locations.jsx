// import required modules
// import Slide1 from "../../assets/images/Locations/slide_img1.jpeg";
// import Slide2 from "../../assets/images/Locations/slide_img2.jpeg";
// import Slide3 from "../../assets/images/Locations/slide_img3.jpeg";
// import Slide4 from "../../assets/images/Locations/slide_img4.jpeg";
import SlickSlider from "./SlickSlider";
import { motion } from "framer-motion";
const yAxisAnimation = {
  initial: { y: 200, opacity: 0 },
  whileInView: { y: 0, opacity: 1 },
  transition: {
    delay: 0.4,
    y: { type: "spring", stiffness: 60 }, // Animating on the Y-axis
    opacity: { duration: 0.2 },
    ease: "easeIn",
    duration: 1,
  },
};
const team = [
  {
    id: 1,
    images: "Slide1",
    name: "Mumbai",
  },
  {
    id: 2,
    images: "Slide2",
    name: "Royal club, Delhi",
  },
  {
    id: 3,
    images: "Slide4",
    name: "Royal club, Kolkata",
  },
  {
    id: 4,
    images: "Slide3",
    name: "Royal club, Delhi",
  },
  {
    id: 5,
    images: "Slide4",
    name: "Royal club, Kolkata",
  },
];
const Locations = () => {
  const styles = {
    borderTop: "1px solid",
    backgroundImage:
      "linear-gradient(283.4deg, #5BD6DD 23.54%, #036DED 70.28%)",
    backgroundClip: "border-box",
    backgroundOrigin: "border-box",
    border: "1px, 0px, 0px, 0px",
  };
  return (
    <div id="location">
      <motion.div
        initial={{ x: 100, opacity: 0 }}
        whileInView={{ x: 0, opacity: 1 }}
        viewport={{ once: false }}
        transition={{
          delay: 0.4,
          x: { type: "spring", stiffness: 50 },
          opacity: { duration: 0.2 },
          ease: "easeIn",
          duration: 1,
        }}
        className="flex flex-col items-center lg:my-9 md:my-6 my-4"
      >
        <h2 className="md:text-5xl text-3xl font-medium bg-gradient-to-r from-[#036DED]  to-[#5BD6DD] bg-clip-text text-transparent">
          Our locations
        </h2>
        <div className="h-1 w-[115px]" style={styles}></div>
      </motion.div>
      <motion.div
        initial={{ x: -200, opacity: 0 }}
        whileInView={{ x: 0, opacity: 1 }}
        viewport={{ once: false }}
        transition={{
          delay: 0.4,
          x: { type: "spring", stiffness: 50 },
          opacity: { duration: 0.2 },
          ease: "easeIn",
          duration: 1,
        }}
        className="mf:max-w-[90%] w-[95%] mx-auto"
      >
        <SlickSlider team={team} />
      </motion.div>
    </div>
  );
};

export default Locations;
