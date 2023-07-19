const imageBasePath = "/assets/people/";

export interface Person {
  name: string;
  height: string;
  mass: string;
  gender: string;
}

interface PersonInfoProps {
  item: Person;
}

const PersonInfo = ({ item }: PersonInfoProps) => {
  return (
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
  );
};

export default PersonInfo;
