import { BodyBenefits } from './BodyBenefits/BodyBenefits'
import BrainBenefits from './BrainBenefits/BrainBenefits';
import BenefitsForCells from './BenefitsForCells/BenefitsForCells';
import { motion } from 'framer-motion';
const yAxisAnimation = {
    initial: { y: 100, opacity: 0 },
    whileInView: { y: 0, opacity: 1 },
    transition: {
        delay: 0.2,
        y: { type: "spring", stiffness: 60 }, // Animating on the Y-axis
        opacity: { duration: 0.2 },
        ease: "easeIn",
        duration: 1,
    },
};
const Benefits = () => {
    const styles = {
        borderTop: '1px solid',
        backgroundImage: 'linear-gradient(283.4deg, #5BD6DD 23.54%, #036DED 70.28%)',
        backgroundClip: 'border-box',
        backgroundOrigin: 'border-box',
        border: "1px, 0px, 0px, 0px",
    };
    return (
        <div className='' id='benefits'>
            <motion.dev 
            {...yAxisAnimation}
            className="flex flex-col items-center lg:my-9 md:my-6 my-4">
                <h2 className='md:text-5xl text-3xl font-medium bg-gradient-to-r from-[#036DED]  to-[#5BD6DD] bg-clip-text text-transparent'>Benefits</h2>
                <div className="h-1 w-[115px]" style={styles}>
                </div>
            </motion.dev>            
            <BodyBenefits />
            <BrainBenefits />
            <BenefitsForCells />
        </div>
    )
}
export default Benefits;
