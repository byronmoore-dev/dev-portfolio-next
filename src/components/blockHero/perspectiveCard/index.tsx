"use client";
import classNames from "classnames";
import styles from "./styles.module.css";

const PerspectiveCard = ({ children }: { children: React.ReactNode }) => {
  return (
    <div className={styles.container}>
      <div className={styles.tiltBoxWrap}>
        <span className={styles.t_over}></span>
        <span className={styles.t_over}></span>
        <span className={styles.t_over}></span>
        <span className={styles.t_over}></span>
        <span className={styles.t_over}></span>
        <span className={styles.t_over}></span>
        <span className={styles.t_over}></span>
        <span className={styles.t_over}></span>
        <span className={styles.t_over}></span>
        <div className={classNames(styles.tiltBox)}>{children}</div>
      </div>
    </div>
  );
};

export default PerspectiveCard;
