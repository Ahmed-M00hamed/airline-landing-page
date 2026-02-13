import React from 'react'
import './services.css'
import { PlaneTakeoff, Sofa, GraduationCap } from 'lucide-react';

import { motion } from "framer-motion";
import { container, fadeUp, fadeLeft, fadeRight } from "../animations";


function Services() {
    return (
        <motion.section
            className="services-container"
            variants={container}
            initial="hidden"
            whileInView="visible"
            viewport={{ amount: 0.7 }}
        >
            <div className="container">
                <motion.div
                    className="top-section"
                    variants={fadeUp}
                >
                    <h2>Why Choose Airline</h2>
                </motion.div>
                <div className="bottom-section">
                    <motion.div 
                    className="service"
                    variants={fadeLeft}
                    >
                        <div className="service-icon">
                            <PlaneTakeoff />
                        </div>
                        <div className="service-content">
                            <h3>On-Time</h3>
                            <p> Performance</p>
                        </div>
                    </motion.div>
                    <motion.div 
                    className="service"
                    variants={fadeUp}
                    >
                        <div className="service-icon">
                            <Sofa />
                        </div>
                        <div className="service-content">
                            <h3>Comfortable</h3>
                            <p> Cabins</p>
                        </div>
                    </motion.div>
                    <motion.div 
                    className="service"
                    variants={fadeRight}
                    >
                        <div className="service-icon">
                            <GraduationCap />
                        </div>
                        <div className="service-content">
                            <h3>Experienced Crew</h3>
                            <p>Competitive Prices</p>
                        </div>
                    </motion.div>
                </div>
            </div>


        </motion.section>
    )
}

export default Services