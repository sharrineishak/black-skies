import { motion } from "motion/react";
import styles from "./Button.module.css";
import { useState } from "react";

function Button({ children }) {
  const [hover, setHover] = useState();

  function handleMouseEnter() {
    setHover(true);
  }

  function handleMouseLeave() {
    setHover(false);
  }

  const defaultTransition = { duration: 0.4, ease: [0, 0.5, 0.5, 1] };

  return (
    <motion.button
      whileHover={{ scale: 1.02 }}
      whileTap={{ scale: 0.99, transition: { duration: 0.08 } }}
      className={styles.button}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
      transition={defaultTransition}
    >
      <motion.div
        initial={{ top: 0, left: "50%", opacity: 0 }}
        animate={{ left: hover ? 0 : "50%", opacity: hover ? 1 : 0 }}
        transition={defaultTransition}
        className={styles.dot}
      />
      <motion.div
        initial={{ top: 0, right: "50%", opacity: 0 }}
        animate={{ right: hover ? 0 : "50%", opacity: hover ? 1 : 0 }}
        transition={defaultTransition}
        className={styles.dot}
      />
      <motion.div
        initial={{ bottom: 0, left: "50%", opacity: 0 }}
        animate={{ left: hover ? 0 : "50%", opacity: hover ? 1 : 0 }}
        transition={defaultTransition}
        className={styles.dot}
      />
      <motion.div
        initial={{ bottom: 0, right: "50%", opacity: 0 }}
        animate={{ right: hover ? 0 : "50%", opacity: hover ? 1 : 0 }}
        transition={defaultTransition}
        className={styles.dot}
      />
      {children}
    </motion.button>
  );
}

export default Button;
