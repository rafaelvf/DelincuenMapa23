import React from "react";
import { motion } from "framer-motion";

const Loader = () => {
  return (
    <motion.div
      animate={{ rotate: 360 }}
      transition={{ duration: 1, repeat: Infinity, ease: "linear" }}
      style={{
        width: "50px",
        height: "50px",
        border: "5px solid #30323d",
        borderRadius: "50%",
      }}
    />
  );
};

export default Loader;
