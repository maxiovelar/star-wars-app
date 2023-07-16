import React from "react";
import styles from "./footer.module.scss";
import { LinkedinIcon } from "./icons/linkedin-icon";
import { GithubIcon } from "./icons/github-icon";

export const Footer = () => {
  return (
    <footer className={styles.footer}>
      <section className={styles.footer__social}>
        <p>
          Designed and built by <b>Maxi Ovelar</b>
        </p>
        <a
          href="https://www.linkedin.com/in/maximiliano-ovelar/"
          target="_blank"
          rel="noopener noreferrer"
        >
          <LinkedinIcon
            height={24}
            width={24}
            className={styles["footer__social--icon-color"]}
          />
        </a>
        <a
          href="https://github.com/maxiovelar"
          target="_blank"
          rel="noopener noreferrer"
        >
          <GithubIcon
            height={24}
            width={24}
            className={styles["footer__social--icon-color"]}
          />
        </a>
      </section>
      <p>
        Powered by &nbsp;
        <a
          href="https://swapi.dev/"
          target="_blank"
          rel="noreferrer"
          className={styles.footer__link}
        >
          swapi.dev
        </a>
      </p>
      <p>
        Copyright © {new Date().getFullYear()} Maxi Ovelar. All Rights Reserved
      </p>
    </footer>
  );
};
