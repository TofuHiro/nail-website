import { motion, SVGMotionProps } from "framer-motion";

type Props = {
  toggle: () => void;
}

const Path = (props: SVGMotionProps<SVGPathElement>) => (
  <motion.path
    fill="transparent"
    strokeWidth="3"
    stroke="#bb6d77"
    strokeLinecap="round"
    {...props}
  />
);

const MenuButton = ({ toggle }: Props) => {
  return (
    <button onClick={toggle}>
      <svg width="40" height="40" viewBox="0 0 40 40">
        <Path
          d="M 7 10 L 33 10"
          variants={{
            closed: { d: "M 7 10 L 33 10" },
            open: { d: "M 10 30 L 30 10" },
          }}
        />
        <Path
          d="M 7 20 L 33 20"
          opacity="1"
          variants={{
            closed: { opacity: 1 },
            open: { opacity: 0 },
          }}
          transition={{ duration: 0.1 }}
        />
        <Path
          d="M 7 30 L 33 30"
          variants={{
            closed: { d: "M 7 30 L 33 30" },
            open: { d: "M 10 10 L 30 30" },
          }}
        />
      </svg>
    </button>
  );
};

export default MenuButton;
