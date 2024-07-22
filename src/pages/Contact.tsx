import { RefObject } from "react";
import { motion, useScroll } from "framer-motion";
import { fadeInLeft, fadeInRight, useParallax } from "../components/animations";
import contact from "../assets/images/contact.jpg";
import Plant, { PlantType } from "../components/Plant";
import TitleBlock from "../components/TitleBlock";

type Props = {
  ref?: RefObject<HTMLDivElement>;
};

const Contact = ({ ref }: Props) => {
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"],
  });
  const md = useParallax(scrollYProgress, 450, -450);
  const titleParallax = useParallax(scrollYProgress, -350, 650);
  const bgParallax = useParallax(scrollYProgress, 250, -250);

  return (
    <>
      <TitleBlock bgImage={contact} bgFadeDelay={.2} titleParallax={titleParallax} bgParallax={bgParallax} title="CONTACT" titleFadeDelay={.2}/>

      <div className="relative md:px-[22vw] pt-[6vh] px-[6vw] pb-[4vh] bg-white">
        <div className="sm:flex-row flex flex-col">
          <motion.p 
            className="flex-1 sm:mr-6 mr-0 sm:my-8 my-4 text-primary text-justify"
            initial="hidden"
            whileInView="visible"
            variants={fadeInRight}
            viewport={{ once: true }}
            custom={.8}
          >
            Feel free to call the provided number during opening times to check
            for availability or book in your appointment. Walk ins are also
            welcome if you're nearby, however booking ahead is highly
            recommended.
            <br />
            <br />
            If you have any enquiries, feel free to call the provided number
            during opening times or message us on our instagram or facebook.
          </motion.p>
          <motion.div 
            className="flex-1 sm:ml-6 ml-0 sm:my-8 my-4 text-primary text-center text-sm hover:shadow-xl duration-200 outline outline-1 outline-[#ad636d]"
            initial="hidden"
            whileInView="visible"
            variants={fadeInLeft}
            viewport={{ once: true }}
            custom={.8}
          >
            <p>
              <span className="font-bold text-base">Address</span>
              <br />
              332 Chartwell North
              <br />
              Southend-on-Sea
              <br />
              SS2 5SR
              <br />
              <span className="font-bold text-base">Phone</span>
              <br />
              01702 461921
              <br />
              <span className="font-bold text-base">Opening Times</span>
              <br />
              Mon-Sat: 9:30 - 18:30
              <br />
              Sun: CLOSED
            </p>
          </motion.div>
        </div>

        <div className="sm:flex-row flex flex-col bg-white">
          <motion.div 
            className="flex sm:justify-end justify-center flex-1 sm:mr-6 mr-0 py-[2vh]"
            initial="hidden"
            whileInView="visible"
            variants={fadeInRight}
            viewport={{ once: true }}
            custom={.5}
          >
            <p className="mt-[2vh] text-primary text-justify">
              We are based in the Victoria Shopping Centre located in
              Southend-on-Sea. We can be found on the first floor of the centre
              nearby the rear exit.
            </p>
          </motion.div>

          <motion.div 
            className="sm:ml-6 ml-0 flex-1 sm:justify-start justify-center"
            initial="hidden"
            whileInView="visible"
            variants={fadeInLeft}
            viewport={{ once: true }}
            custom={.5}
          >
            <iframe
              className="w-full h-[40vh] sm:mr-[8vw] mr-0"
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d1240.7485902393807!2d0.7117167890564811!3d51.54078171117588!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x47d8d84cf1a7fa75%3A0x99f9fa5f701a00ea!2sChartwell%20N%2C%20Southend-on-Sea%20SS2%205SR!5e0!3m2!1sen!2suk!4v1719865036621!5m2!1sen!2suk"
              allowFullScreen
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            ></iframe>
          </motion.div>
        </div>

        <Plant
          className="md:block hidden xl:h-[300px] md:h-[200px] sm:h-[150px] absolute left-0 -bottom-36 drop-shadow-md"
          plantType={PlantType.HIGH_HANG} 
          leftSide={true}
          stemStroke="#a36f78"
          leafStroke="#a36f78"
          leafFill="#a36f78"
          parallaxWeight={md}
        />
        <Plant
          className="md:block hidden 2xl:h-[350px] xl:h-[300px] md:h-[250px] sm:h-[200px] absolute right-0 bottom-40 drop-shadow-md"
          plantType={PlantType.MEDIUM_HANG} 
          leftSide={false}
          stemStroke="#fcaebb"
          leafStroke="#fcaebb"
          leafFill="#fcaebb"
          parallaxWeight={md}
        />
      </div>
    </>
  );
};

export default Contact;
