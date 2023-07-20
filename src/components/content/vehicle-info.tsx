import { getImagePath } from "../../utils/helpers";
import { Card } from "../card/card";

const imageBasePath = "/assets/vehicles/";

export interface Vehicle {
  name: string;
  vehicle_class: string;
}

interface VehicleInfoProps {
  item: Vehicle;
}

export const VehicleInfo = ({ item }: VehicleInfoProps) => {
  return (
    <Card key={`${item.name}`} image={getImagePath(item.name, imageBasePath)}>
      <p>{item.name}</p>
      <span>
        <b>Class:</b> {item.vehicle_class}
      </span>
    </Card>
  );
};
