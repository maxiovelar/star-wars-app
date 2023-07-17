import React from "react";
import { StarWarsIcon } from "./icons/star-wars-icon";
import styles from "./header.module.scss";
import Link from "next/link";

export const Header = () => {
  return (
    <div className={styles.header}>
      <Link href="/" title="Home">
        <StarWarsIcon className={styles.header__icon} />
      </Link>
    </div>
  );
};
