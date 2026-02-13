import "./hero.css";
import { motion } from "framer-motion";
import { container, fadeUp, fadeLeft, fadeRight } from "../animations";


function Hero({ scrollToDestinations }) {
  return (
    <section className="hero">
      <motion.div
        className="hero-content"
        variants={container}
        initial="hidden"
        whileInView="visible"
        viewport={{ amount: 0.7 }}
      >
        <motion.h1 variants={fadeUp}>Fly With Confidence Across The World</motion.h1>
        <motion.p variants={fadeUp}>Safe flights • Modern aircraft • Affordable fares</motion.p>

        <div className="buttons">
          <motion.button
            className="btn btn-primary"
            variants={fadeLeft}
          >
            Book Your Flight</motion.button>
          <motion.button
            className="btn btn-secondary"
            onClick={scrollToDestinations}
            variants={fadeRight}
          >
            View Destinations</motion.button>
        </div>
      </motion.div>
    </section>
  );
}
export default Hero;
