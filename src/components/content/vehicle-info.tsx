const imageBasePath = "/assets/vehicles/";

export interface Vehicle {
  name: string;
  vehicle_class: string;
}

interface VehicleInfoProps {
  item: Vehicle;
}

const VehicleInfo = ({ item }: VehicleInfoProps) => {
  return (
    <>
      <p>{item.name}</p>
      <span>
        <b>Class:</b> {item.vehicle_class}
      </span>
    </>
  );
};

export default VehicleInfo;
