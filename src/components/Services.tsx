import { RefObject } from "react";
import { Link } from "react-router-dom";
import { motion, useScroll } from "framer-motion";
import { services } from "../constants";
import { drawNails, useParallax, fadeInUp, fadeIn } from "./animations";
import Plant, { PlantType } from "./Plant";

type Props = {
  ref?: RefObject<HTMLDivElement>;
};

const Services = ({ ref }: Props) => {
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"],
  });
  const smBack = useParallax(scrollYProgress, -650, 650);
  const mdBack = useParallax(scrollYProgress, -400, 400);
  const lgBack = useParallax(scrollYProgress, -200, 200);

  return (
    <div className="relative sm:px-[18vw] py-[6vh] px-[6vw] background-primary text-dim">
      <h2 className="relative z-10 sm:text-5xl text-4xl text-center font-semibold drop-shadow-md">
        OUR SERVICES
      </h2>

      <ul className="relative z-10 grid lg:grid-cols-3 sm:grid-cols-2 grid-cols-1 mt-[5vh] sm:mx-0 mx-8 text-center">
        {services.map((service) => (
          <li key={service.id} className="mx-5 flex flex-col justify-between">
            <div>
              <motion.svg 
                className="drop-shadow-md"
                viewBox="0 0 500 500">
                {service.svgs?.map((path, index) => (
                  <motion.path
                    key={index}
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true }}
                    variants={drawNails}
                    custom={index}
                    d={path.path}
                    stroke={path.color}
                    strokeWidth="4"
                    fill={path.fillColor}
                  />
                ))}
              </motion.svg>

              <motion.h3 
                className="sm:text-2xl text-xl font-bold drop-shadow-md"
                initial="hidden"
                whileInView="visible"
                variants={fadeInUp}
                viewport={{ once: true }}
                custom={.4}
              >
                  {service.title}
              </motion.h3>
            </div>
          
            <motion.p 
              className="sm:text-base text-sm drop-shadow-md"
              initial="hidden"
              whileInView="visible"
              variants={fadeIn}
              viewport={{ once: true }}
              custom={1.2}
            >
                {service.description}
            </motion.p>

            <Link to="/prices">
              <motion.button 
                className="button-dim shadow-lg"
                initial="hidden"
                whileInView="visible"
                variants={fadeIn}
                viewport={{ once: true }}
                custom={1.8}
              >
                See Prices
              </motion.button>
            </Link>
          </li>
        ))}
      </ul>

      <Plant 
        className="sm:block hidden h-[140px] absolute right-0 sm:top-[30vh] top-[90vh]"
        plantType={PlantType.HIGH_HANG} 
        leftSide={false}
        stemStroke="white"
        leafStroke="white"
        leafFill="white"
        parallaxWeight={smBack}
      />
      <Plant 
        className="sm:block hidden h-[160px] absolute right-0 sm:bottom-[17vh] bottom-[40vh]"
        plantType={PlantType.LOW_HANG} 
        leftSide={false}
        stemStroke="white"
        leafStroke="white"
        leafFill="white"
        parallaxWeight={smBack}
      />
      <Plant 
        className="h-[190px] absolute right-0 sm:bottom-[30vh] bottom-[60vh]"
        plantType={PlantType.HIGH_HANG} 
        leftSide={false}
        stemStroke="white"
        leafStroke="white"
        leafFill="white"
        parallaxWeight={mdBack}
      />
      <Plant 
        className="h-[290px] absolute right-0 sm:bottom-[55vh] bottom-[100vh]"
        plantType={PlantType.MEDIUM_HANG} 
        leftSide={false}
        stemStroke="white"
        leafStroke="white"
        leafFill="white"
        parallaxWeight={lgBack}
      />
      <Plant 
        className="h-[220px] absolute right-0 sm:top-[5vh] top-[40vh]"
        plantType={PlantType.LOW_HANG} 
        leftSide={false}
        stemStroke="white"
        leafStroke="white"
        leafFill="white"
        parallaxWeight={mdBack}
      />

      <Plant 
        className="sm:block hidden h-[110px] absolute -left-2 sm:top-[40vh] top-[80vh]"
        plantType={PlantType.MEDIUM_HANG} 
        leftSide={true}
        stemStroke="white"
        leafStroke="white"
        leafFill="white"
        parallaxWeight={smBack}
      />
      <Plant 
        className="h-[220px] absolute -left-2 sm:top-[8vh] top-[20vh]"
        plantType={PlantType.HIGH_HANG} 
        leftSide={true}
        stemStroke="white"
        leafStroke="white"
        leafFill="white"
        parallaxWeight={mdBack}
      />
      <Plant 
        className="h-[210px] absolute -left-2 sm:bottom-[30vh] bottom-[80vh]"
        plantType={PlantType.HIGH_HANG} 
        leftSide={true}
        stemStroke="white"
        leafStroke="white"
        leafFill="white"
        parallaxWeight={mdBack}
      />
      <Plant 
        className="sm:block hidden h-[100px] absolute -left-2 sm:bottom-[20vh] bottom-[60vh]"
        plantType={PlantType.HIGH_HANG} 
        leftSide={true}
        stemStroke="white"
        leafStroke="white"
        leafFill="white"
        parallaxWeight={smBack}
      />
      <Plant 
        className="h-[310px] absolute -left-2 sm:bottom-[50vh] bottom-[150vh]"
        plantType={PlantType.LOW_HANG} 
        leftSide={true}
        stemStroke="white"
        leafStroke="white"
        leafFill="white"
        parallaxWeight={lgBack}
      />
    </div>
  );
};

export default Services;
