import React, { ReactNode } from "react";
import styles from "./Container.module.scss";

export const Container = ({ children }: { children: ReactNode }) => {
  return <section className={styles.container}>{children}</section>;
};
