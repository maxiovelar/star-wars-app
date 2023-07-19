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

const SpeciesInfo = ({ item }: SpeciesInfoProps) => {
  return (
    <>
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
    </>
  );
};

export default SpeciesInfo;
