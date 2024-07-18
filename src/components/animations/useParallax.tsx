import { MotionValue, useTransform } from "framer-motion";

function useParallax(value: MotionValue<number>, lower: number, upper: number) {
  return useTransform(value, [0, 1], [lower, upper]);
}

export default useParallax;
