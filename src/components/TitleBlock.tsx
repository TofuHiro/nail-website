import { motion, MotionValue } from "framer-motion"
import { fadeIn } from "./animations"
import WordFadeIn from "./WordFadeIn"

type Props = {
  bgImage: any
  bgFadeDelay: number
  parallax?: MotionValue
  title: string
  titleFadeDelay: number
}

const TitleBlock = ( { bgImage, bgFadeDelay, parallax, title, titleFadeDelay } : Props) => {
  return (
    <motion.div
      className="h-[80vh] bg-cover bg-center bg-fixed"
      style={{ backgroundImage: `url(${bgImage})` }}
      initial="hidden"
      animate="visible"
      variants={fadeIn}
      custom={bgFadeDelay}
    >
      <div className="drop-shadow-3xl">
        <motion.h2 
          className="py-[40vh] text-7xl font-semibold text-center text-dim" 
          style={{ y: parallax, clipPath: 'inset(0% 0% 45.5% 0%)'}}
          >
          <WordFadeIn word={title} delay={titleFadeDelay}/>
        </motion.h2>
      </div>
    </motion.div>
  )
}

export default TitleBlock;