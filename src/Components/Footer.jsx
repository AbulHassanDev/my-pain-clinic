import React from 'react';
import Images1 from "../assets/images/Footer_/footer.png";
import pay_icon1 from "../assets/images/Footer_/icons_pay/Symbol_1.png";
import pay_icon2 from "../assets/images/Footer_/icons_pay/Symbol_2.png";
import pay_icon3 from "../assets/images/Footer_/icons_pay/Symbol_3.png";
import pay_icon4 from "../assets/images/Footer_/icons_pay/Symbol_4.png";
import pay_icon5 from "../assets/images/Footer_/icons_pay/Symbol_5.png";
import location from "../assets/images/Footer_/icons_pay/location.svg";
import PhoneIcon from "../assets/images/Footer_/icons_pay/phone.svg";
import MailIcon from "../assets/images/Footer_/icons_pay/mail.svg";

import { FaFacebookF, FaTwitter, FaInstagram, FaPinterestP } from "react-icons/fa6";
import { BiBasketball } from "react-icons/bi";
import { motion } from 'framer-motion';
const yAxisAnimation = {
    initial: { y: 140, opacity: 0 },
    whileInView: { y: 0, opacity: 1 },
    transition: {
        delay: 0.8,
        y: { type: "spring", stiffness: 40 }, // Animating on the Y-axis
        opacity: { duration: 0.2 },
        ease: "easeIn",
        duration: 1,
    },
};
const Header = () => {
    return (
        <footer className="text-white px-8 lg:h-[60vh] py-12 bg-[#392B38] relative FooterBg" id='contact'>
            {/* <img className='absolute h-[40vh] bottom-[20%] left-0 right-0' src={Images1} alt="" /> */}
            <div className="container max-w-7xl z-10 mx-auto grid grid-cols-1 md:grid-cols-4 gap-4">
                <div className="mb-8 md:mb-0">
                    <motion.h3 
                    {...yAxisAnimation}
                    className="md:text-2xl text-lg font-semibold mb-4">Important Links</motion.h3>
                    <ul className='space-y-3'>
                        <motion.li 
                        initial={{ x: -100, opacity: 0 }}
                        whileInView={{ x: 0, opacity: 1 }}
                        viewport={{ once: false }}
                        transition={{
                          delay: 0.2,
                          x: { type: "spring", stiffness: 50 },
                          opacity: { duration: 0.2 },
                          ease: "easeIn",
                          duration: 1
                        }}
                        className="mb-2">About Us</motion.li>
                        <motion.li 
                        initial={{ x: -100, opacity: 0 }}
                        whileInView={{ x: 0, opacity: 1 }}
                        viewport={{ once: false }}
                        transition={{
                          delay: 0.3,
                          x: { type: "spring", stiffness: 50 },
                          opacity: { duration: 0.2 },
                          ease: "easeIn",
                          duration: 1
                        }}
                        className="mb-2">Assesments</motion.li>
                        <motion.li 
                        initial={{ x: -100, opacity: 0 }}
                        whileInView={{ x: 0, opacity: 1 }}
                        viewport={{ once: false }}
                        transition={{
                          delay: 0.4,
                          x: { type: "spring", stiffness: 50 },
                          opacity: { duration: 0.2 },
                          ease: "easeIn",
                          duration: 1
                        }}
                        className="mb-2"><a href="tel:+1514890000" className="hover:text-yellow-400">Services</a></motion.li>
                        <motion.li 
                        initial={{ x: -100, opacity: 0 }}
                        whileInView={{ x: 0, opacity: 1 }}
                        viewport={{ once: false }}
                        transition={{
                          delay: 0.5,
                          x: { type: "spring", stiffness: 50 },
                          opacity: { duration: 0.2 },
                          ease: "easeIn",
                          duration: 1
                        }}
                        ><a href="mailto:calinscompagnies@calins.com"
                            className="hover:text-yellow-400">Treatments</a>
                        </motion.li>
                        <motion.li 
                        initial={{ x: -100, opacity: 0 }}
                        whileInView={{ x: 0, opacity: 1 }}
                        viewport={{ once: false }}
                        transition={{
                          delay: 0.6,
                          x: { type: "spring", stiffness: 50 },
                          opacity: { duration: 0.2 },
                          ease: "easeIn",
                          duration: 1
                        }}
                        ><a href="mailto:calinscompagnies@calins.com"
                            className="hover:text-yellow-400">Testimonials</a>
                        </motion.li>
                        <motion.li 
                        initial={{ x: -100, opacity: 0 }}
                        whileInView={{ x: 0, opacity: 1 }}
                        viewport={{ once: false }}
                        transition={{
                          delay: 0.7,
                          x: { type: "spring", stiffness: 50 },
                          opacity: { duration: 0.2 },
                          ease: "easeIn",
                          duration: 1
                        }}
                        ><a href="mailto:calinscompagnies@calins.com"
                            className="hover:text-yellow-400">Gallery</a>
                        </motion.li>
                        <motion.li 
                        initial={{ x: -100, opacity: 0 }}
                        whileInView={{ x: 0, opacity: 1 }}
                        viewport={{ once: false }}
                        transition={{
                          delay: 0.8,
                          x: { type: "spring", stiffness: 50 },
                          opacity: { duration: 0.2 },
                          ease: "easeIn",
                          duration: 1
                        }}
                        ><a href="mailto:calinscompagnies@calins.com"
                            className="hover:text-yellow-400">Contact</a>
                        </motion.li>
                    </ul>
                </div>
                <div className="mb-8 md:mb-0">
                    <motion.h3 
                    {...yAxisAnimation}
                    className="md:text-2xl text-lg font-semibold mb-4">Support</motion.h3>
                    <ul className='space-y-3'>
                        <motion.li 
                        initial={{ x: -100, opacity: 0 }}
                        whileInView={{ x: 0, opacity: 1 }}
                        viewport={{ once: false }}
                        transition={{
                          delay: 0.2,
                          x: { type: "spring", stiffness: 50 },
                          opacity: { duration: 0.2 },
                          ease: "easeIn",
                          duration: 1
                        }}
                        ><a href="#" className="hover:text-yellow-400">FAQ&apos;s</a></motion.li>
                        <motion.li 
                        initial={{ x: -100, opacity: 0 }}
                        whileInView={{ x: 0, opacity: 1 }}
                        viewport={{ once: false }}
                        transition={{
                          delay: 0.3,
                          x: { type: "spring", stiffness: 50 },
                          opacity: { duration: 0.2 },
                          ease: "easeIn",
                          duration: 1
                        }}
                        ><a href="#" className="hover:text-yellow-400">Privacy Policy </a></motion.li>
                        <motion.li 
                        initial={{ x: -100, opacity: 0 }}
                        whileInView={{ x: 0, opacity: 1 }}
                        viewport={{ once: false }}
                        transition={{
                          delay: 0.4,
                          x: { type: "spring", stiffness: 50 },
                          opacity: { duration: 0.2 },
                          ease: "easeIn",
                          duration: 1
                        }}
                        ><a href="#" className="hover:text-yellow-400">Term & Conditions</a></motion.li>
                        <motion.li
                        initial={{ x: -100, opacity: 0 }}
                        whileInView={{ x: 0, opacity: 1 }}
                        viewport={{ once: false }}
                        transition={{
                          delay: 0.5,
                          x: { type: "spring", stiffness: 50 },
                          opacity: { duration: 0.2 },
                          ease: "easeIn",
                          duration: 1
                        }}
                        ><a href="#" className="hover:text-yellow-400">Track Shipment</a></motion.li>

                    </ul>
                </div>
                <div className="mb-8 md:mb-0">
                    <motion.h3 
                    {...yAxisAnimation}
                    className="md:text-2xl text-lg font-semibold mb-4">Contact Us</motion.h3>
                    <ul className='-ml-6 space-y-4'>
                        <motion.li 
                        initial={{ x: -100, opacity: 0 }}
                        whileInView={{ x: 0, opacity: 1 }}
                        viewport={{ once: false }}
                        transition={{
                          delay: 0.2,
                          x: { type: "spring", stiffness: 50 },
                          opacity: { duration: 0.2 },
                          ease: "easeIn",
                          duration: 1
                        }}
                        className='flex items-start gap-3'>

                            <img src={location} className='w-[12px] h-[15px]' alt="" />
                            <a href="#" className="hover:text-yellow-400">  Address : Sphere Mall, Navchandra Building, V. N,
                                Linking Rd, Bandra West, Mumbai,
                                Maharashtra 400050</a></motion.li>

                        <motion.li 
                        initial={{ x: -100, opacity: 0 }}
                        whileInView={{ x: 0, opacity: 1 }}
                        viewport={{ once: false }}
                        transition={{
                          delay: 0.3,
                          x: { type: "spring", stiffness: 50 },
                          opacity: { duration: 0.2 },
                          ease: "easeIn",
                          duration: 1
                        }}
                        className='flex gap-3'>
                            <img src={PhoneIcon} alt="" />
                            <a href="#" className="hover:text-yellow-400">Phone : +91 81694 00905,  +91 81694 00916</a></motion.li>
                        <motion.li 
                        initial={{ x: -100, opacity: 0 }}
                        whileInView={{ x: 0, opacity: 1 }}
                        viewport={{ once: false }}
                        transition={{
                          delay: 0.4,
                          x: { type: "spring", stiffness: 50 },
                          opacity: { duration: 0.2 },
                          ease: "easeIn",
                          duration: 1
                        }}
                        className='flex gap-3'>
                            <img src={MailIcon} alt="" />
                            <a href="#" className="hover:text-yellow-400">Email : connect@mypainclinicglobal.com</a></motion.li>
                        <motion.li 
                        initial={{ x: -100, opacity: 0 }}
                        whileInView={{ x: 0, opacity: 1 }}
                        viewport={{ once: false }}
                        transition={{
                          delay: 0.5,
                          x: { type: "spring", stiffness: 50 },
                          opacity: { duration: 0.2 },
                          ease: "easeIn",
                          duration: 1
                        }}
                        className='flex space-x-2 ml-6 text-xl'>
                            <a href="#"><FaFacebookF /></a>
                            <a href="#"><FaTwitter /></a>
                            <a href="#"><FaInstagram /></a>
                            <a href="#"><FaPinterestP /></a>
                            <a href="#"><BiBasketball /></a>

                        </motion.li>
                    </ul>
                </div>
                <div>
                    <motion.h3 
                    {...yAxisAnimation}
                    className="md:text-2xl text-lg font-semibold mb-4">Opening Hours</motion.h3>
                    <ul className="mb-4 space-y-6">
                        <motion.li 
                        initial={{ x: -100, opacity: 0 }}
                        whileInView={{ x: 0, opacity: 1 }}
                        viewport={{ once: false }}
                        transition={{
                          delay: 0.2,
                          x: { type: "spring", stiffness: 50 },
                          opacity: { duration: 0.2 },
                          ease: "easeIn",
                          duration: 1
                        }}
                        className='flex justify-start items-end'>
                            <p href="#" className="hover:text-yellow-400">
                                Monday - Friday :
                            </p>
                            <p>09:00 AM - 20:00 PM</p>
                        </motion.li>
                        <motion.li 
                        initial={{ x: -100, opacity: 0 }}
                        whileInView={{ x: 0, opacity: 1 }}
                        viewport={{ once: false }}
                        transition={{
                          delay: 0.3,
                          x: { type: "spring", stiffness: 50 },
                          opacity: { duration: 0.2 },
                          ease: "easeIn",
                          duration: 1
                        }}
                        className='flex'>
                            <p href="#" className="hover:text-yellow-400">
                                Saturday :
                            </p>
                            <p>09:00 AM - 19:00 PM</p>
                        </motion.li >
                        <motion.li 
                        initial={{ x: -100, opacity: 0 }}
                        whileInView={{ x: 0, opacity: 1 }}
                        viewport={{ once: false }}
                        transition={{
                          delay: 0.4,
                          x: { type: "spring", stiffness: 50 },
                          opacity: { duration: 0.2 },
                          ease: "easeIn",
                          duration: 1
                        }}
                        className='flex'>
                            <p href="#" className="hover:text-yellow-400">
                                Sunday :
                            </p>
                            <p>Closed</p>
                        </motion.li>
                        <motion.li 
                        initial={{ x: -100, opacity: 0 }}
                        whileInView={{ x: 0, opacity: 1 }}
                        viewport={{ once: false }}
                        transition={{
                          delay: 0.5,
                          x: { type: "spring", stiffness: 50 },
                          opacity: { duration: 0.2 },
                          ease: "easeIn",
                          duration: 1
                        }}
                        className='flex gap-2'>
                            <a href="#">
                                <img src={pay_icon1} className='w-[20px] h-[20px]' alt="" />
                            </a>
                            <a href='#'>
                                <img src={pay_icon2} className='w-[20px] h-[20px]' alt="" />
                            </a>
                            <a href='#'>
                                <img src={pay_icon3} className='w-[20px] h-[20px]' alt="" />
                            </a>
                            <a href='#'>
                                <img src={pay_icon4} className='w-[20px] h-[20px]' alt="" />
                            </a>
                            <a href='#'>
                                <img src={pay_icon5} className='w-[20px] h-[20px]' alt="" />
                            </a>
                        </motion.li>
                    </ul>
                    <motion.div 
                    initial={{ x: -100, opacity: 0 }}
                    whileInView={{ x: 0, opacity: 1 }}
                    viewport={{ once: false }}
                    transition={{
                      delay: 0.6,
                      x: { type: "spring", stiffness: 50 },
                      opacity: { duration: 0.2 },
                      ease: "easeIn",
                      duration: 1
                    }}
                    className="mt-4 ">
                        <a href="#" className="mr-2"><i className="fab fa-facebook fa-2x"></i></a>
                        <a href="#" className="mr-2"><i className="fab fa-instagram fa-2x"></i></a>
                        <a href="mailto:calinscompagnies@calins.com"><i className="far fa-envelope fa-2x"></i></a>
                    </motion.div>
                </div>
            </div>
            <motion.p 
            {...yAxisAnimation}
            className="text-end mt-8 mr-20">&copy;  2024 - All rights reserved.</motion.p>
        </footer>
    )
}

export default Header;