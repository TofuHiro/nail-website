import { motion, MotionValue } from "framer-motion"
import { plantSVGs } from "../constants"
import { drawStem, drawLeaves } from "./animations"

export enum PlantType {
  LOW_HANG,
  MEDIUM_HANG,
  HIGH_HANG,
}

type Props = {
  plantType: PlantType,
  leftSide: boolean,
  parallaxWeight?: MotionValue
  stemStroke: string
  leafStroke: string
  leafFill: string
  animateDelay?: number
  className?: string
}

const Plant = ({plantType, leftSide, parallaxWeight, stemStroke, leafStroke, leafFill, animateDelay, className} : Props) => {
  var stemSVG = "";
  var leafSVG = "";

  if (leftSide) {
    switch (plantType) {
      case PlantType.LOW_HANG:
        stemSVG = plantSVGs.leaf_left_3.stem
        leafSVG = plantSVGs.leaf_left_3.leaf
        break;
      case PlantType.MEDIUM_HANG:
        stemSVG = plantSVGs.leaf_left_1.stem
        leafSVG = plantSVGs.leaf_left_1.leaf
        break;
      default://HIGH_HANG
      stemSVG = plantSVGs.leaf_left_2.stem
      leafSVG = plantSVGs.leaf_left_2.leaf
        break;
    }
  } else {
    switch (plantType) {
      case PlantType.LOW_HANG:
        stemSVG = plantSVGs.leaf_right_3.stem
        leafSVG = plantSVGs.leaf_right_3.leaf
        break;
      case PlantType.MEDIUM_HANG:
        stemSVG = plantSVGs.leaf_right_1.stem
        leafSVG = plantSVGs.leaf_right_1.leaf
        break;
      default://HIGH_HANG
      stemSVG = plantSVGs.leaf_right_2.stem
      leafSVG = plantSVGs.leaf_right_2.leaf
        break;
    }
  }

  return (
    <motion.svg
      style={{ y: parallaxWeight }}
      viewBox={leftSide? "0 0 40 40" : "0 0 20 40" }
      className={className}
    >
      <motion.path
        d={stemSVG}
        strokeWidth=".5"
        stroke={stemStroke}
        fill="none"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        variants={drawStem}
        custom={animateDelay}
      />
      <motion.path
        d={leafSVG}
        strokeWidth=".5"
        stroke={leafStroke}
        fill={leafFill}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        variants={drawLeaves}
        custom={animateDelay}
      />
    </motion.svg>
  )
}

export default Plant;