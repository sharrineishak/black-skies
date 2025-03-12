import { motion } from "motion/react";
import styles from "./Button.module.css";
import { useState } from "react";

function Button({ children, type = "primary" }) {
  const [hover, setHover] = useState();

  function handleMouseEnter() {
    setHover(true);
  }

  function handleMouseLeave() {
    setHover(false);
  }

  const defaultTransition = { duration: 0.3, ease: [0, 0.5, 0.5, 1] };

  return (
    <motion.button
      whileHover={{ scale: 1.02 }}
      whileTap={{
        scale: type === "tile" ? 0.99 : 0.9,
        transition: { duration: 0.05 },
      }}
      className={`${styles.button} ${styles[type]}`}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
      transition={defaultTransition}
    >
      {type === "tile" && (
        <>
          {/* ------------------- Focus Dots Effect ----------------------*/}
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
        </>
      )}
      {children}
    </motion.button>
  );
}

export default Button;
