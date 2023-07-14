import React from "react";
import { StarWarsIcon } from "./icons/star-wars-icon";
import styles from "./header.module.css";

export const Header = () => {
  return (
    <div className={styles.header}>
      <StarWarsIcon height={100} width={200} />
    </div>
  );
};
