import React from "react";
import styles from "./footer.module.scss";
import { LinkedinIcon } from "./icons/linkedin-icon";
import { GithubIcon } from "./icons/github-icon";

export const Footer = () => {
  return (
    <footer className={styles.footer}>
      <div>
        <p>
          Designed and built by <b>Maxi Ovelar</b>
        </p>
        <a
          href="https://www.linkedin.com/in/maximiliano-ovelar/"
          target="_blank"
          rel="noopener noreferrer"
        >
          <LinkedinIcon height={24} width={24} fill="#000000" />
        </a>
        <a
          href="https://github.com/maxiovelar"
          target="_blank"
          rel="noopener noreferrer"
        >
          <GithubIcon height={24} width={24} fill="#000000" />
        </a>
      </div>
      <p>
        Powered by &nbsp;
        <a href="https://swapi.dev/" target="_blank" rel="noreferrer">
          swapi.dev
        </a>
      </p>
      <p>
        Copyright © {new Date().getFullYear()} Maxi Ovelar. All Rights Reserved
      </p>
    </footer>
  );
};
