import React, { useState } from "react";
import styles from "./navigation.module.scss";
import cx from "classnames";
import { PlanetsIcon } from "../icons/planets-icon";
import { SpaceShipIcon } from "../icons/space-ship-icon";
import { VehiclesIcon } from "../icons/vehicles-icon";
import { PeopleIcon } from "../icons/people-icon";
import { FilmsIcon } from "../icons/films-icon";
import { SpeciesIcon } from "../icons/species-icon";
import Link from "next/link";
import { ArrowRightIcon } from "../icons/arrow-right-icon";
import { useViewportWidth } from "../../hooks/useViewportWidth";

const categories = [
  {
    name: "Planets",
    href: "planets",
    icon: <PlanetsIcon height={25} width={25} />,
  },
  {
    name: "Starships",
    href: "starships",
    icon: <SpaceShipIcon height={25} width={25} />,
  },
  {
    name: "Vehicles",
    href: "vehicles",
    icon: <VehiclesIcon height={25} width={25} />,
  },
  {
    name: "People",
    href: "people",
    icon: <PeopleIcon height={25} width={25} />,
  },
  {
    name: "Films",
    href: "films",
    icon: <FilmsIcon height={25} width={25} />,
  },
  {
    name: "Species",
    href: "species",
    icon: <SpeciesIcon height={25} width={25} />,
  },
];

const MobileNavigation = () => {
  return (
    <nav className={styles.mobile}>
      <ul className={styles.mobile__list}>
        {categories.map((category) => (
          <li key={category.name}>
            <Link href={`/collections/${category.href}`} title={category.name}>
              {category.icon}
            </Link>
          </li>
        ))}
      </ul>
    </nav>
  );
};

const DesktopNavigation = () => {
  const [isExpanded, setIsExpanded] = useState(false);

  const handleExpand = () => {
    setIsExpanded(!isExpanded);
  };

  return (
    <nav
      data-testid="navigation"
      className={cx(styles.desktop, {
        [styles["desktop--expanded"]]: isExpanded,
      })}
    >
      <ul
        className={cx(styles.desktop__list, styles["desktop__list--expanded"])}
      >
        {categories.map((category) => (
          <li key={category.name} className={styles["list-item"]}>
            <Link
              href={`/collections/${category.href}`}
              title={category.name}
              className={styles["list-item__link"]}
            >
              {category.icon}
              {isExpanded && category.name}
            </Link>
          </li>
        ))}
      </ul>
      <div className={styles["desktop__button-container"]}>
        <button
          data-testid="expand-button"
          onClick={handleExpand}
          className={cx(styles.button, {
            [styles["button--expanded"]]: isExpanded,
          })}
          title={isExpanded ? "Collapse" : "Expand"}
        >
          <ArrowRightIcon height={25} width={25} />
        </button>
      </div>
    </nav>
  );
};

export const Navigation = () => {
  const screenWidth = useViewportWidth();
  const isMobile = screenWidth < 1024;
  return isMobile ? <MobileNavigation /> : <DesktopNavigation />;
};
