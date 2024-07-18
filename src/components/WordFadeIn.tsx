import { motion } from "framer-motion"
import { fadeInUp } from "./animations"

type Props = {
  word: string
  delay: number
  className?: string
}

const WordFadeIn = ( { word, delay, className } : Props) => { 
  const chars = word.split("");

  return (
    chars.map((char, index) => {
      return (
        <motion.span
        className={`${className} inline-block`}
        initial="hidden"
        whileInView="visible"
        variants={fadeInUp}
        viewport={{ once: true }}
        custom={index * delay}
      >
        {char}
      </motion.span>
    )})
  )
}

export default WordFadeIn;