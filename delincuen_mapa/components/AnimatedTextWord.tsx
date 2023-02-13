import { motion } from "framer-motion";

type Props = {
  text: string;
};
export default function AnimatedWord({ text }: Props) {
  const words = text.split(" ");
  const container = {
    hidden: { opacity: 0 },
    visible: (i = 1) => ({
      opacity: 1,
      transition: { staggerChildren: 0.52, delayChildren: 0.04 * i },
    }),
  };

  const child = {
    visible: {
      opacity: 1,
      x: 0,

      transition: {
        type: "spring",
        damping: 12,
        stiffness: 100,
      },
    },
    hidden: {
      opacity: 0,
      x: 100,

      transition: {
        type: "spring",
        damping: 12,
        stiffness: 100,
      },
    },
  };
  return (
    <div>
      <motion.div
        style={{ overflow: "hidden", display: "flex", fontSize: "2rem" }}
        variants={container}
        initial="hidden"
        animate="visible"
      >
        {words.map((word, index) => (
          <motion.span
            variants={child}
            style={{ marginRight: "5px" }}
            key={index}
          >
            {word}
          </motion.span>
        ))}
      </motion.div>
    </div>
  );
}
