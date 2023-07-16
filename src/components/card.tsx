import React from "react";
import styles from "./card.module.scss";
import Image from "next/image";

import planet1 from "../../public/assets/tatooine.webp";

interface CardProps {
  children: React.ReactNode;
}

export const Card = ({ children }: CardProps) => {
  return (
    <article className={styles.card}>
      <div className={styles["card__image-wrapper"]}>
        <Image
          src={planet1}
          alt={`image`}
          width={250}
          height={250}
          className={styles.card__image}
        />
      </div>
      {children}
    </article>
  );
};
