import TestimonialSlider from "./TestimonialCards/TestimonialsSlider";
import { motion } from "framer-motion";
const team = [
  {
    id: 1,
    paragraph1:
      "My entire experience at Elixir – from the professional Doctor to the experienced technicians, to the very relaxed first visit in a comfortable, spacious room, to home visits later, and finally to the wonderful Tanya herself – was delightful.",
    para2:
      "I see an improvement in my skin and hair after doing the treatment. Keep up the great work Team Elixir!",
    name: "Anis lalani",
  },
  {
    id: 2,
    paragraph1:
      "I’d just like to say a big thank you to Elixir for their thorough consultation and suggesting the perfect vitamin and Glutathione drip.",
    para2:
      "After 3 weeks of having the drip I’m free from all arthritic pain in my body, and particularly my hands. I feel more energetic and my skin is glowing.",
    name: "Anis lalani",
  },
  {
    id: 3,
    paragraph1:
      "Elixir has been a blessing for my skin! Stubborn pigmentation and acne scars have definitely reduced and added a glow to my skin.",
    para2:
      "Tanya and the team are extremely professional and warm! Glad to have elixir as part of my routine 😊",
    name: "Anis lalani",
  },
  {
    id: 4,
    paragraph1:
      "I’d just like to say a big thank you to Elixir for their thorough consultation and suggesting the perfect vitamin and Glutathione drip.",
    para2:
      "After 3 weeks of having the drip I’m free from all arthritic pain in my body, and particularly my hands. I feel more energetic and my skin is glowing.",
    name: "Anis lalani",
  },
];
const Testimonials = () => {
  return (
    <>
      <div className="  w-full py-[1rem]">
        <h2 className=" textGradient text-[48px] font-medium text-center  ">
          Book Appoinment
        </h2>
        <div className=" w-[100px] h-[2px] mx-auto border-gradient  "></div>

        <div className=" mf:max-w-[1000px] w-[95%] mx-auto">
          <TestimonialSlider team={team} />
        </div>
      </div>
    </>
  );
};

export default Testimonials;
