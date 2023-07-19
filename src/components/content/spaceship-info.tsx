const imageBasePath = "/assets/spaceships/";

export interface Spaceship {
  name: string;
  starship_class: string;
}

interface SpaceshipInfoProps {
  item: Spaceship;
}

const SpaceshipInfo = ({ item }: SpaceshipInfoProps) => {
  return (
    <>
      <p>{item.name}</p>
      <span>
        <b>Class:</b> {item.starship_class}
      </span>
    </>
  );
};

export default SpaceshipInfo;
