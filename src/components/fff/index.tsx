import classNames from "classnames";
import styles from "./styles.module.css";
import { useEffect, useRef } from "react";

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
        <div className={classNames(styles.tiltBox, "shadow-2xl")}>{children}</div>
      </div>
    </div>
  );
};

export default PerspectiveCard;
