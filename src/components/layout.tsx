import React, { ReactNode } from "react";
import styles from "./layout.module.scss";
import { Navigation } from "./navigation";
import { Header } from "./header";
import { Footer } from "./footer";

export interface LayoutProps {
  children: ReactNode;
}

export const Layout = ({ children }: LayoutProps) => {
  return (
    <main className={styles.layout}>
      <Navigation />
      <Header />
      {children}
      <Footer />
    </main>
  );
};
