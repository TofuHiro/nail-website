import { RefObject } from "react";
import { Link } from "react-router-dom";
import { motion, useScroll } from "framer-motion";
import { fadeIn, fadeInLeft, useParallax } from "./animations";
import intro from "../assets/images/intro.jpg";
import Plant, { PlantType } from "./Plant";

type Props = {
  ref?: RefObject<HTMLDivElement>;
};

const Intro = ({ ref }: Props) => {
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"],
  });
  const lg = useParallax(scrollYProgress, 400, -400);

  return (
    <div className="z-10 relative md:px-[6vw] sm:flex-row md:pb-[6vh] sm:pb-[8vh] pb-[12vh] flex flex-col px-[6vw] py-[6vh] bg-white">
      <div className="sm:order-first order-last sm:mr-6 mr-0 flex-1 flex sm:justify-end justify-center">
        <motion.img
          src={intro}
          alt="About Us"
          className="max-h-[50vh] shadow-2xl"
          initial="hidden"
          whileInView="visible"
          variants={fadeIn}
          viewport={{ once: true }}
          custom={1.6}
        />
      </div>

      <div className="flex-1 sm:ml-6 ml-0 py-[2vh]">
        <motion.h2 
          className="lg:text-5xl sm:text-4xl text-3xl font-semibold text-header"
          initial="hidden"
          whileInView="visible"
          variants={fadeInLeft}
          viewport={{ once: true }}
          custom={.5}
          >
          ABOUT US
        </motion.h2>
        <div className="flex sm:justify-start justify-center">
          <motion.p 
            className="lg:text-lg text-sm mt-[2vh] max-w-[500px] text-primary text-justify"
            initial="hidden"
            whileInView="visible"
            variants={fadeInLeft}
            viewport={{ once: true }}
            custom={1}
            >
            My Beautiful Nails is a warm, modern nail salon located in the
            Victoria Shopping Centre based in Southend-on-Sea. It is run by
            highly proficient technicians with years of experience who will tend
            to any of your needs with pleasure, from simple and refined to
            complex and creative.
          </motion.p>
        </div>
        <Link to="/about">
          <motion.button 
            className="button-primary mt-4"
            initial="hidden"
            whileInView="visible"
            variants={fadeIn}
            viewport={{ once: true }}
            custom={1.8}
            >
            Learn More
          </motion.button>
        </Link>
      </div>

      <Plant
        className="sm:block hidden xl:h-[300px] md:h-[200px] sm:h-[150px] absolute right-0 bottom-20 drop-shadow-md"
        width={150}
        height={150}
        plantType={PlantType.MEDIUM_HANG}
        parallaxWeight={lg}
        leftSide={false}
        stemStroke="#fcaebb"
        leafStroke="#fcaebb"
        leafFill="#fcaebb"
      />
    </div>
  );
};

export default Intro;
