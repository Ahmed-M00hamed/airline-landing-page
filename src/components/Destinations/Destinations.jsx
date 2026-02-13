import React from "react";
import "./Destinations.css";
import destinationsData from "../../data/Data";
import { GoChevronRight } from "react-icons/go";
import { Link } from "react-router-dom";


import { motion } from "framer-motion";
import { container, fadeUp } from "../animations";




function Destinations({ destinationsRef }) {

    return (

                <motion.section
            ref={destinationsRef}
            className="Destinations"
            id="Destinations"
            variants={container}
            initial="hidden"
            whileInView="visible"
            viewport={{ amount: 0.1 }}
        >
            <motion.div variants={fadeUp} className="top-section">
                <h2>Popular Destinations</h2>
            </motion.div>

            <motion.div variants={container} className="Destinations-container">
                {destinationsData.map((item) => (
                    <motion.div variants={fadeUp} className="Destinations-item" key={item.id}>
                        <img src={item.image} alt={item.from} />
                        <div className="overlay">
                            <h3>From: {item.from}</h3>
                            <h3>To: {item.to}</h3>

                            <p> <span>${item.price}</span></p>


                            <Link to={`/booking/${item.id}`}>
                                <button className="btn btn-primary">Book Now</button>
                            </Link>
                        </div>
                    </motion.div>
                ))}
            </motion.div>
            <motion.div variants={fadeUp} className="more-dest">
                <button className="btn ">Explore All Routes <GoChevronRight /></button>
            </motion.div>

        </motion.section>
    );
}

export default Destinations;
