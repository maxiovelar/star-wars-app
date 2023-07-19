const imageBasePath = "/assets/films/";

export interface Film {
  title: string;
  episode_id: number;
  release_date: string;
  director: string;
}

interface FilmInfoProps {
  item: Film;
}

const FilmInfo = ({ item }: FilmInfoProps) => {
  return (
    <>
      <p>{item.title}</p>
      <span>
        <b>Episode:</b> {item.episode_id}
      </span>
      <span>
        <b>Release Date:</b> {item.release_date}
      </span>
      <span>
        <b>Director:</b> {item.director}
      </span>
    </>
  );
};

export default FilmInfo;
