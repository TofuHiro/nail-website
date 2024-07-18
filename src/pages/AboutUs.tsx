import { RefObject } from "react";
import { motion, useScroll } from "framer-motion";
import { fadeIn, fadeInRight, useParallax } from "../components/animations";
import about from "../assets/images/about.jpg";
import heart from "../assets/images/heart.jpg";
import Plant, { PlantType } from "../components/Plant";
import TitleBlock from "../components/TitleBlock";

type Props = {
  ref?: RefObject<HTMLDivElement>;
};

const AboutUs = ({ ref }: Props) => {
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"],
  });
  const md = useParallax(scrollYProgress, 450, -350);
  const titleParallax = useParallax(scrollYProgress, -350, 650);

  return (
    <>
      <TitleBlock bgImage={about} bgFadeDelay={.2} parallax={titleParallax} title="ABOUT" titleFadeDelay={.2}/>

      <div className="relative md:px-[22vw] pt-[6vh] px-[6vw] pb-[4vh]">
        <motion.p className="text-primary text-justify"
          initial="hidden"
          whileInView="visible"
          variants={fadeIn}
          viewport={{ once: true }}
          custom={1}
        >
          My Beautiful Nails is a warm, modern nail salon located in the
          Victoria Shopping Centre based in Southend-on-Sea where you can drop
          by if you feel like being or need a relaxing break from your shopping.
          It is run by highly proficient technicians with years of experience
          who will tend to any of your needs with pleasure, from simple and
          refined to complex and creative.
          <br />
          <br />
        </motion.p>

        <Plant 
          className="md:block hidden xl:h-[300px] md:h-[200px] sm:h-[150px] absolute left-0 -bottom-28 drop-shadow-md"
          plantType={PlantType.MEDIUM_HANG} 
          leftSide={true}
          stemStroke="#fcaebb"
          leafStroke="#fcaebb"
          leafFill="#fcaebb"
          parallaxWeight={md}
        />
      </div>

      <div className="relative md:px-[22vw] pt-[2vh] px-[6vw] pb-[4vh] sm:flex-row flex flex-col background-primary text-dim">
        <motion.p className="lg:basis-2/3 flex-1 sm:mr-6 mr-0 sm:my-8 my-4 text-justify"
          initial="hidden"
          whileInView="visible"
          variants={fadeInRight}
          viewport={{ once: true }}
          custom={.5}
          >
          Feel free to call the provided number during opening times to check
          for availability or book in your appointment. Walk ins are also
          welcome if you're nearby, however booking ahead is highly recommended.
          <br />
          <br />
          If you have any enquiries, feel free to call the provided number
          during opening times or message us on our instagram or facebook.
        </motion.p>
        <div className="lg:basis-1/3 flex-1 sm:ml-6 ml-0 sm:my-8 my-4">
          <motion.img 
            src={heart}
            alt="About us"
            initial="hidden"
            whileInView="visible"
            variants={fadeIn}
            viewport={{ once: true }}
            custom={.5}
            />
        </div>

        <Plant 
          className="md:block hidden 2xl:h-[350px] xl:h-[300px] md:h-[250px] sm:h-[200px] absolute right-0 -bottom-16 drop-shadow-md"
          plantType={PlantType.HIGH_HANG} 
          leftSide={false}
          stemStroke="#a36f78"
          leafStroke="#a36f78"
          leafFill="#a36f78"
          parallaxWeight={md}
        />
      </div>
    </>
  );
};

export default AboutUs;
