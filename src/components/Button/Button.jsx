import { motion } from "motion/react";
import styles from "./Button.module.css";

function Button({type, children}) {
    return <button className={styles.button}>{children}</button>
}

export default Button;