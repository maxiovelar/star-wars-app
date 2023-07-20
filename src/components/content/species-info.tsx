import { getImagePath } from "../../utils/helpers";
import { Card } from "../card/card";

const imageBasePath = "/assets/species/";

export interface Species {
  name: string;
  classification: string;
  designation: string;
  language: string;
}

interface SpeciesInfoProps {
  item: Species;
}

export const SpeciesInfo = ({ item }: SpeciesInfoProps) => {
  return (
    <Card key={`${item.name}`} image={getImagePath(item.name, imageBasePath)}>
      <p>{item.name}</p>
      <span>
        <b>Classification:</b> {item.classification}
      </span>
      <span>
        <b>Designation:</b> {item.designation}
      </span>
      <span>
        <b>Language:</b> {item.language}
      </span>
    </Card>
  );
};
