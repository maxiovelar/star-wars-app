import React, { ReactNode } from "react";
import styles from "./layout.module.css";

export const Layout = ({ children }: { children: ReactNode }) => {
  return <main className={styles.layout}>{children}</main>;
};
