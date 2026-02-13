import React from 'react'
import './contact.css'
import { MapPinned, Mail, Phone } from 'lucide-react';

import { motion } from "framer-motion";
import { container, fadeUp, fadeLeft, fadeRight } from "../animations";

function Contact() {
    return (
        <motion.section 
        className="contact" 
        id='contact'
        variants={container}
        initial="hidden"
        whileInView="visible"
        viewport={{ amount: 0.1 }}
        >
            <motion.div 
            className="top-section"
            variants={fadeUp}
            >
                <h2>Contact Us</h2>
            </motion.div>
            <div className="bottom-section">
                <motion.div 
                className="contact-info"
                variants={fadeLeft}
                >
                    <div className="info-item">
                        <h3> <MapPinned /> Address</h3>
                        <p>10 Of Ramadan || Cairo || Egypt</p>
                    </div>
                    <div className="info-item">
                        <h3><Mail /> Email</h3>
                        <p>a8411498@gmail.com</p>
                    </div>
                    <div className="info-item">
                        <h3><Phone /> Phone</h3>
                        <p>+20 10 232 13149</p>
                    </div>
                </motion.div>
                <motion.form 
                action=""
                className="contact-form"
                variants={fadeRight}
                >
                    <div className="row">
                        <div className="input-group">
                            <label htmlFor="name">Full Name</label>
                            <input type="text" id="name" placeholder="Your Name" />
                        </div>
                        <div className="input-group">
                            <label htmlFor="company">Company</label>
                            <input type="text" id="company" placeholder="Your Company" />
                        </div>
                    </div>

                    <div className="row">
                        <div className="input-group">
                            <label htmlFor="email">Email</label>
                            <input type="email" id="email" placeholder="Your Email" />
                        </div>
                        <div className="input-group">
                            <label htmlFor="phone">Phone Number</label>
                            <input type="tel" id="phone" placeholder="Your Phone Number" />
                        </div>
                    </div>

                    <label htmlFor="address">Address</label>
                    <input type="text" id="address" placeholder="Your Address" />

                    <label htmlFor="message">Message</label>
                    <textarea name="" id="message" cols="30" rows="10" placeholder="Your Message"></textarea>
                    <button type="submit" className='btn btn-primary'>Send</button>
                </motion.form>
            </div>
        </motion.section>
    )
}

export default Contact