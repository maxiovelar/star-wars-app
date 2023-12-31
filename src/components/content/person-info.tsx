import { type Person } from "../../../types";
import { getImagePath } from "../../utils/helpers";
import { Card } from "../card/card";

const imageBasePath = "/assets/people/";

interface PersonInfoProps {
  item: Person;
}

export const PersonInfo = ({ item }: PersonInfoProps) => {
  return (
    <Card key={`${item.name}`} image={getImagePath(item.name, imageBasePath)}>
      <div>
        <p>{item.name}</p>
        <span>
          <b>Gender:</b> {item.gender}
        </span>
        <span>
          <b>Height:</b> {item.height}
        </span>
        <span>
          <b>Mass:</b> {item.mass}
        </span>
      </div>
    </Card>
  );
};
