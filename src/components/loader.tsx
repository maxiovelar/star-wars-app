import React from "react";
import styles from "./Loader.module.scss";
import cx from "classnames";

export const Loader = () => {
  const skeletonList = [...Array(10)];
  return (
    <section className="grid">
      {skeletonList.map((_, index) => (
        <div key={index} className={styles.skeleton}>
          <div className={cx(styles.skeleton__image, styles.animation)}></div>
          <div className={styles.skeleton__content}>
            <span
              className={cx(styles["content-text"], styles.animation)}
            ></span>
            <span
              className={cx(styles["content-text"], styles.animation)}
            ></span>
          </div>
        </div>
      ))}
    </section>
  );
};
