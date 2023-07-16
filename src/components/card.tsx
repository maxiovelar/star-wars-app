import React from "react";
import styles from "./card.module.scss";
import Image from "next/image";

import starwarsLogo from "../../public/assets/starwars.png";

interface CardProps {
  image?: string;
  children: React.ReactNode;
}

export const Card = ({ image, children }: CardProps) => {
  return (
    <article className={styles.card}>
      <div className={styles["card__image-wrapper"]}>
        <Image
          src={image ?? starwarsLogo}
          alt="card image"
          width={250}
          height={250}
          className={styles.card__image}
        />
      </div>
      <section className={styles.card__content}>{children}</section>
    </article>
  );
};
