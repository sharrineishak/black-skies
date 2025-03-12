import styles from "./ActionBar.module.css";

function ActionBar({ children, align = "center" }) {
  return (
    <div className={`${styles.actionBar} ${styles[align]}`}>{children}</div>
  );
}

export default ActionBar;
