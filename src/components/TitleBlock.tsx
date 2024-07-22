import { motion, MotionValue } from "framer-motion"
import { fadeIn } from "./animations"
import WordFadeIn from "./WordFadeIn"

type Props = {
  bgImage: any
  bgFadeDelay: number
  bgParallax?: MotionValue
  titleParallax?: MotionValue
  title: string
  titleFadeDelay: number
}

const TitleBlock = ( { bgImage, bgFadeDelay, bgParallax, titleParallax, title, titleFadeDelay } : Props) => {
  return (
    <div className="relative -z-10 h-[95vh]">
      <motion.img
        src={bgImage}
        className="w-full h-full object-cover bg-center fixed -top-40"
        style={{ y: bgParallax }}
        initial="hidden"
        animate="visible"
        variants={fadeIn}
        custom={bgFadeDelay}
      ></motion.img>
      <div className="drop-shadow-3xl">
        <motion.h2 
          className="py-[40vh] text-7xl font-semibold text-center text-dim" 
          style={{ y: titleParallax, clipPath: 'inset(0% 0% 45.5% 0%)'}}
          >
          <WordFadeIn word={title} delay={titleFadeDelay}/>
        </motion.h2>
      </div>
    </div>
  )
}

export default TitleBlock;