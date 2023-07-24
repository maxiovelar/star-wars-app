import { type Planet } from "../../../types";
import { getImagePath } from "../../utils/helpers";
import { Card } from "../card/card";

const imageBasePath = "/assets/planets/";

interface PlanetInfoProps {
  item: Planet;
}

export const PlanetInfo = ({ item }: PlanetInfoProps) => {
  return (
    <Card key={`${item.name}`} image={getImagePath(item.name, imageBasePath)}>
      <p>{item.name}</p>
      <span>
        <b>Diameter:</b> {item.diameter}
      </span>
      <span>
        <b>Climate:</b> {item.climate}
      </span>
      <span>
        <b>Population:</b> {item.population}
      </span>
    </Card>
  );
};
