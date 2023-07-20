import { getImagePath } from "../../utils/helpers";
import { Card } from "../card/card";

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

export const FilmInfo = ({ item }: FilmInfoProps) => {
  return (
    <Card key={`${item.title}`} image={getImagePath(item.title, imageBasePath)}>
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
    </Card>
  );
};
