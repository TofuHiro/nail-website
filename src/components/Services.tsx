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
  const smBack = useParallax(scrollYProgress, -600, 1400);
  const mdBack = useParallax(scrollYProgress, -100, 1200);
  const lgBack = useParallax(scrollYProgress, 1000, 1500);

  return (
    <div className="relative sm:px-[18vw] py-[6vh] px-[6vw] background-primary text-dim">
      <h2 className="relative z-10 sm:text-5xl text-4xl text-center font-semibold drop-shadow-md">
        OUR SERVICES
      </h2>

      <ul className="relative z-10 grid lg:grid-cols-3 sm:grid-cols-2 grid-cols-1 mt-[5vh] sm:mx-0 mx-8 text-center justify-items-center">
        {services.map((service) => (
          <li key={service.id} className="mx-5 flex flex-col justify-between max-w-[360px]">
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

      <motion.div 
        key="small-plants" 
        className="absolute sm:top-0 top-[70vh] left-0 w-full" 
        style={{ y: smBack}}
      >
        <Plant 
          className="h-[140px] absolute right-0 sm:top-[30vh] top-[90vh]"
          width={100}
          height={100}
          plantType={PlantType.HIGH_HANG} 
          leftSide={false}
          stemStroke="white"
          leafStroke="white"
          leafFill="white"
        />
        <Plant 
          className="h-[160px] absolute right-0 sm:bottom-[17vh] bottom-[40vh]"
          width={100}
          height={100}
          plantType={PlantType.LOW_HANG} 
          leftSide={false}
          stemStroke="white"
          leafStroke="white"
          leafFill="white"
        />
        <Plant 
          className="h-[110px] absolute -left-2 sm:top-[40vh] top-[80vh]"
          width={100}
          height={100}
          plantType={PlantType.MEDIUM_HANG} 
          leftSide={true}
          stemStroke="white"
          leafStroke="white"
          leafFill="white"
        />
        <Plant 
          className="h-[100px] absolute -left-2 sm:bottom-[20vh] bottom-[60vh]"
          width={100}
          height={100}
          plantType={PlantType.HIGH_HANG} 
          leftSide={true}
          stemStroke="white"
          leafStroke="white"
          leafFill="white"
        />
      </motion.div>

      <motion.div 
        key="medium-plants" 
        className="absolute sm:top-0 top-[90vh] left-0 w-full" 
        style={{ y: mdBack}}
      >
        <Plant 
          className="h-[190px] absolute right-0 sm:bottom-[30vh] bottom-[60vh]"
          width={180}
          height={180}
          plantType={PlantType.HIGH_HANG} 
          leftSide={false}
          stemStroke="white"
          leafStroke="white"
          leafFill="white"
        />
        <Plant 
          className="h-[220px] absolute right-0 sm:top-[5vh] top-[40vh]"
          width={200}
          height={200}
          plantType={PlantType.LOW_HANG} 
          leftSide={false}
          stemStroke="white"
          leafStroke="white"
          leafFill="white"
        />
        <Plant 
          className="h-[220px] absolute -left-2 sm:top-[8vh] top-[20vh]"
          width={200}
          height={200}
          plantType={PlantType.HIGH_HANG} 
          leftSide={true}
          stemStroke="white"
          leafStroke="white"
          leafFill="white"
        />
        <Plant 
          className="h-[210px] absolute -left-2 sm:bottom-[30vh] bottom-[80vh]"
          width={200}
          height={200}
          plantType={PlantType.HIGH_HANG} 
          leftSide={true}
          stemStroke="white"
          leafStroke="white"
          leafFill="white"
        />
      </motion.div>
      
      <motion.div 
        key="large-plants" 
        className="absolute sm:top-0 top-[130vh] left-0 w-full" 
        style={{ y: lgBack}}
      >
        <Plant 
          className="h-[260px] absolute right-0 sm:bottom-[55vh] bottom-[100vh]"
          width={250}
          height={250}
          plantType={PlantType.MEDIUM_HANG} 
          leftSide={false}
          stemStroke="white"
          leafStroke="white"
          leafFill="white"
        />
        <Plant 
          className="h-[310px] absolute -left-2 sm:bottom-[50vh] bottom-[150vh]"
          width={300}
          height={300}
          plantType={PlantType.LOW_HANG} 
          leftSide={true}
          stemStroke="white"
          leafStroke="white"
          leafFill="white"
        />
      </motion.div>
    </div>
  );
};

export default Services;
