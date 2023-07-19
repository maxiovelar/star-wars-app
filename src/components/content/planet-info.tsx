const imageBasePath = "/assets/planets/";

export interface Planet {
  name: string;
  diameter: string;
  climate: string;
  population: string;
}

interface PlanetInfoProps {
  item: Planet;
}

const PlanetInfo = ({ item }: PlanetInfoProps) => {
  return (
    <>
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
    </>
  );
};

export default PlanetInfo;
