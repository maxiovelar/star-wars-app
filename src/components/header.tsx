import React from "react";
import { StarWarsIcon } from "./icons/star-wars-icon";
import styles from "./header.module.scss";
import Link from "next/link";

export const Header = () => {
  return (
    <div className={styles.header}>
      <Link href="/" title="Home">
        <StarWarsIcon height={100} width={200} />
      </Link>
    </div>
  );
};
