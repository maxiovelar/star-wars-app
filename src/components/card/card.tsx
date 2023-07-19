import React, { useState } from "react";
import styles from "./card.module.scss";
import Image from "next/image";

const defaultImage = "/assets/starwars.png";

export interface CardProps {
  image?: string;
  children: React.ReactNode;
}

export const Card = ({ image = defaultImage, children }: CardProps) => {
  const [src, setSrc] = useState(image);
  return (
    <article data-testid="card" className={styles.card}>
      <div className={styles["card__image-wrapper"]}>
        <Image
          data-testid="card-image"
          src={src}
          alt="card image"
          width={250}
          height={250}
          className={styles.card__image}
          onError={() => setSrc(defaultImage)}
        />
      </div>
      <section className={styles.card__content}>{children}</section>
    </article>
  );
};
