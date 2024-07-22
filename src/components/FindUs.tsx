import { motion } from "framer-motion";
import { fadeIn, fadeInRight } from "./animations";

const FindUs = () => {
  return (
    <div className="relative z-50 md:px-[6vw] sm:flex-row flex flex-col px-[6vw] py-[6vh] bg-white">
      <div className="flex-1 sm:mr-6 mr-0 py-[2vh]">
        <motion.h2 
          className="lg:text-5xl sm:text-4xl sm:text-end text-start text-3xl font-semibold text-header"
          initial="hidden"
          whileInView="visible"
          variants={fadeInRight}
          viewport={{ once: true }}
          custom={.5}
        >
          FIND US
        </motion.h2>
        <div className="flex sm:justify-end justify-center">
          <motion.p 
            className="sm:text-base text-sm mt-[2vh] max-w-[500px] text-primary text-justify"
            initial="hidden"
            whileInView="visible"
            variants={fadeInRight}
            viewport={{ once: true }}
            custom={1}
          >
            We are based in the Victoria Shopping Centre located in
            Southend-on-Sea. We can be found on the first floor of the centre
            nearby the rear exit.
          </motion.p>
        </div>
      </div>

      <motion.div 
        className="order-last sm:ml-6 ml-0 flex-1 flex sm:justify-start justify-center"
        initial="hidden"
        whileInView="visible"
        variants={fadeIn}
        viewport={{ once: true }}
        custom={1.6}
      >
        <iframe
          className="flex-1 h-[40vh] max-w-[500px] hover:shadow-2xl duration-150"
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d1240.7485902393807!2d0.7117167890564811!3d51.54078171117588!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x47d8d84cf1a7fa75%3A0x99f9fa5f701a00ea!2sChartwell%20N%2C%20Southend-on-Sea%20SS2%205SR!5e0!3m2!1sen!2suk!4v1719865036621!5m2!1sen!2suk"
          allowFullScreen
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
        ></iframe>
      </motion.div>
    </div>
  );
};

export default FindUs;
