import React, { useState } from "react";
import styles from "./navigation.module.css";
import cx from "classnames";
import { PlanetsIcon } from "./icons/planets-icon";
import { SpaceShipIcon } from "./icons/space-ship-icon";
import { VehiclesIcon } from "./icons/vehicles-icon";
import { PeopleIcon } from "./icons/people-icon";
import { FilmsIcon } from "./icons/films-icon";
import { SpeciesIcon } from "./icons/species-icon";
import Link from "next/link";
import { ArrowRightIcon } from "./icons/arrow-right-icon";
import { useViewportWidth } from "@/hooks/useViewportWidth";
import { Container } from "./container";

const categories = [
  {
    name: "Planets",
    href: "/planets",
    icon: <PlanetsIcon height={25} width={25} />,
  },
  {
    name: "Spaceships",
    href: "/spaceships",
    icon: <SpaceShipIcon height={25} width={25} />,
  },
  {
    name: "Vehicles",
    href: "/vehicles",
    icon: <VehiclesIcon height={25} width={25} />,
  },
  {
    name: "People",
    href: "/people",
    icon: <PeopleIcon height={25} width={25} />,
  },
  {
    name: "Films",
    href: "/films",
    icon: <FilmsIcon height={25} width={25} />,
  },
  {
    name: "Species",
    href: "/species",
    icon: <SpeciesIcon height={25} width={25} />,
  },
];

const MobileNavigation = () => {
  return (
    <nav className={styles.mobile}>
      <Container>
        <ul>
          {categories.map((category) => (
            <li key={category.name}>
              <Link href={category.href} title={category.name}>
                {category.icon}
              </Link>
            </li>
          ))}
        </ul>
      </Container>
    </nav>
  );
};

const DesktopNavigation = () => {
  const [isExpanded, setIsExpanded] = useState(false);
  const handleExpand = () => {
    setIsExpanded(!isExpanded);
  };
  return (
    <nav className={cx(styles.desktop, { [styles.expanded]: isExpanded })}>
      <ul>
        {categories.map((category) => (
          <li key={category.name}>
            <Link href={category.href} title={category.name}>
              {category.icon}
              {isExpanded && category.name}
            </Link>
          </li>
        ))}
      </ul>
      <button onClick={handleExpand} title={isExpanded ? "Collapse" : "Expand"}>
        <ArrowRightIcon height={25} width={25} />
      </button>
    </nav>
  );
};

export const Navigation = () => {
  const screenWidth = useViewportWidth();
  const isMobile = screenWidth < 1024;
  return isMobile ? <MobileNavigation /> : <DesktopNavigation />;
};
