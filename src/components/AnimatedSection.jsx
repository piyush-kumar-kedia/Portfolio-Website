import { motion } from "framer-motion";
import { spring, staggerContainer, staggerItem } from "../motion/stagger";

const MotionSection = motion.section;

export function Stagger({ children, className }) {
  return (
    <motion.div
      className={className}
      variants={staggerContainer}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.12, margin: "0px 0px -8% 0px" }}
    >
      {children}
    </motion.div>
  );
}

export function StaggerItem({ children, className }) {
  return (
    <motion.div className={className} variants={staggerItem}>
      {children}
    </motion.div>
  );
}

export default function AnimatedSection({ children, className, ...props }) {
  return (
    <MotionSection
      className={className}
      initial={{ opacity: 0, y: 22 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.08, margin: "0px 0px -12% 0px" }}
      transition={spring}
      {...props}
    >
      {children}
    </MotionSection>
  );
}
