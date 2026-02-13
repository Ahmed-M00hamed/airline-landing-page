import "./footer.css";
import { Facebook, Instagram, Twitter } from 'lucide-react';

import { motion } from "framer-motion";
import { container, fadeUp, fadeLeft, fadeRight } from "../animations";
const Footer = () => {
    return (
        <motion.footer
            className="footer"
            variants={container}
            initial="hidden"
            whileInView="visible"
            viewport={{ amount: 0.5 }}
        >
            <div className="footer-content">

                <motion.div
                    variants={fadeUp}
                    className="logo"
                >
                    <a href="/"><h3>SkyLine</h3></a>
                    <p>Book flights to destinations around the world.</p>
                </motion.div>

                <motion.div
                    className="company"
                    variants={fadeLeft}
                >
                    <h4>Company</h4>
                    <a href="#">About</a>
                    <a href="#">Careers</a>
                    <a href="#contact">Contact</a>
                </motion.div>

                <motion.div
                    className="social"
                    variants={fadeRight}
                >
                    <h4>Follow Us</h4>
                    <div className="social-logos">
                        <a href="#"><Facebook /></a>
                        <a href="#"><Instagram /></a>
                        <a href="#"><Twitter /></a>
                    </div>

                </motion.div>
            </div>

            <p className="copy">© 2026 SkyLine Airlines</p>
        </motion.footer>
    );
};

export default Footer;
