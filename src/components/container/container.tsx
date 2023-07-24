import React, { ReactNode } from "react";
import styles from "./Container.module.scss";
import { type ContainerProps } from "../../../types";

export const Container = ({ children }: ContainerProps) => {
  return <div className={styles.container}>{children}</div>;
};
