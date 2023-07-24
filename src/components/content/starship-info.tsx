import { type Starship } from "../../../types";
import { getImagePath } from "../../utils/helpers";
import { Card } from "../card/card";

const imageBasePath = "/assets/starships/";

interface StarshipInfoProps {
  item: Starship;
}

export const StarshipInfo = ({ item }: StarshipInfoProps) => {
  return (
    <Card key={`${item.name}`} image={getImagePath(item.name, imageBasePath)}>
      <p>{item.name}</p>
      <span>
        <b>Class:</b> {item.starship_class}
      </span>
    </Card>
  );
};
