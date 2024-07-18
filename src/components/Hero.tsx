import { motion, useScroll } from "framer-motion";
import { fadeInUp, fadeIn, fadeInRight } from "./animations";
import { RefObject } from "react";
import Plant, { PlantType } from "./Plant";
import { useParallax } from "./animations";
import hero from "../assets/images/hero.jpg";

type Props = {
  ref?: RefObject<HTMLDivElement>;
};

const Hero = ({ ref }: Props) => {
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"],
  });
  const sm = useParallax(scrollYProgress, -100, 250);
  const md = useParallax(scrollYProgress, -200, 550);

  return (
    <div className="md:flex-row flex-col flex h-[100vh]">
      <motion.div
        className="md:flex-initial w-full h-full bg-cover bg-center z-10"
        style={{ backgroundImage: `url(${hero})` }}
        initial="hidden"
        animate="visible"
        variants={fadeIn}
        custom={1.5}
      ></motion.div>

      <motion.div 
        className="relative md:px-[4vw] md:pt-[30vh] md:flex-initial md:w-[70vw] md:h-full md:order-first pl-[6vw] pt-[2vh] w-full h-[35vh] background-secondary"
        initial="hidden"
        animate="visible"
        variants={fadeInRight}
        custom={0}
      >
        <motion.h1 
          className="md:text-[4vw] sm:text-5xl text-4xl text-header font-semibold drop-shadow-md"
          initial="hidden"
          whileInView="visible"
          variants={fadeInRight}
          viewport={{ once: true }}
          custom={.5}
        >
          Beautiful Nails for <br />
          Beautiful Moments
        </motion.h1>
        <motion.h5 
          className="relative z-10 lg:text-xl md:text-lg sm:text-lg text-sm my-[3vh] mr-[5vw] text-primary drop-shadow-md"
          initial="hidden"
          whileInView="visible"
          variants={fadeInUp}
          viewport={{ once: true }}
          custom={1.3}
        >
          Providing the highest degree of care and quality by seasoned
          technicians
        </motion.h5>
        <motion.button
          className="button-primary mb-6 drop-shadow-md"
          onClick={() => window.scrollTo({ top: 700, behavior: "smooth" })}
          initial="hidden"
          whileInView="visible"
          variants={fadeIn}
          viewport={{ once: true }}
          custom={2.8}
        >
          See More
        </motion.button>

        <Plant 
          className="h-[280px] md:block hidden absolute left-0 -bottom-24"
          plantType={PlantType.LOW_HANG} 
          leftSide={true}
          stemStroke="#fcaebb"
          leafStroke="#fcaebb"
          leafFill="#fcaebb"
          parallaxWeight={md}
          animateDelay={.2}
        />
        <Plant 
          className="z-0 md:h-[400px] sm:h-[300px] h-[200px] lg:block md:hidden block absolute right-0 -bottom-36"
          plantType={PlantType.LOW_HANG} 
          leftSide={false}
          stemStroke="#fcaebb"
          leafStroke="#fcaebb"
          leafFill="#fcaebb"
          parallaxWeight={sm}
          animateDelay={1}
        />
      </motion.div>
    </div>
  );
};

export default Hero;
