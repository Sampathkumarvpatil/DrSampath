
import React from "react";
import { motion } from "framer-motion";

const SectionTitle = ({ subtitle, title, description, centered = true, light = false }) => {
  return (
    <div className={`mb-12 ${centered ? "text-center" : "text-left"}`}>
      {subtitle && (
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.1 }}
          viewport={{ once: true }}
          className={`text-sm uppercase tracking-widest font-medium mb-2 ${
            light ? "text-primary-300" : "text-primary-600"
          }`}
        >
          {subtitle}
        </motion.p>
      )}
      <motion.h2
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.2 }}
        viewport={{ once: true }}
        className={`${
          light ? "text-white" : "text-dark"
        } font-bold mb-4 relative`}
      >
        {title}
        <span className="block h-1 w-12 bg-accent-500 mt-4 mb-4 mx-auto rounded-full"></span>
      </motion.h2>
      {description && (
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.3 }}
          viewport={{ once: true }}
          className={`text-lg max-w-3xl mx-auto ${
            light ? "text-light-dark" : "text-gray-600"
          }`}
        >
          {description}
        </motion.p>
      )}
    </div>
  );
};

export default SectionTitle;
      