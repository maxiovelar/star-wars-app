import React from "react";
import styles from "./card.module.scss";
import Image from "next/image";

import planet1 from "../../public/assets/tatooine.webp";

type CardContent =
  | "planet"
  | "spaceship"
  | "vehicle"
  | "person"
  | "film"
  | "species";

interface CardProps {
  children: React.ReactNode;
}

export const Card = ({ children }: CardProps) => {
  return (
    <article className={styles.card}>
      <div>
        <Image src={planet1} alt={`image`} width={250} height={250} />
      </div>
      {children}
    </article>
  );
};
