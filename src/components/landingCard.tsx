import React from "react";
import { motion, scale } from "motion/react";

interface CardProps {
  imageUrl: string;
  title: string;
}

// Define variants for the card
const cardVariants = {
  rest: { backgroundColor: "#030712", scale: 1 }, // gray-950
  hover: { backgroundColor: "#030712", scale: 1.02 }, // neutral-600
};

// Define variants for the title
const titleVariants = {
  rest: { x: 0, color: "#E5E5E5" }, // neutral-200
  hover: { x: 16, color: "#F5F5F5" }, // neutral-50
};

export const LandingCard: React.FC<CardProps> = ({ imageUrl, title }) => {
  return (
    <div>
      <motion.div
        className="sm:mx-auto sm:max-w-sm rounded-md bg-gray-950 overflow-hidden"
        variants={cardVariants}
        initial="rest"
        whileHover="hover"
        transition={{ duration: 0.3 }}
      >
        <img
          src={imageUrl}
          alt={title}
          className="w-full h-48 object-cover rounded-md"
        />
        <div className="py-2">
          <motion.h2
            className="font-semibold"
            variants={titleVariants}
            transition={{ duration: 0.3 }}
          >
            {title}
          </motion.h2>
        </div>
      </motion.div>
    </div>
  );
};
