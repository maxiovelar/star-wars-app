import React, { useEffect, useState } from "react";
import axios from "axios";
import { Card } from "@/components/card";
import { getImagePath } from "@/utils/helpers";
import { Container } from "@/components/container";
import { Pagination } from "@/components/pagination";

const imageBasePath = "/assets/films/";

interface Film {
  title: string;
  episode_id: number;
  release_date: string;
  director: string;
}

interface QueryResponse {
  data: {
    count: number;
    next: string;
    previous: string;
    results: Film[];
  };
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

const FilmsPage = ({ data }: QueryResponse) => {
  const [filmList, setFilmList] = useState(data.results);
  const [page, setPage] = useState(1);
  const apiURL = `${process.env.NEXT_PUBLIC_API_URL}films?page=${page}`;

  useEffect(() => {
    const getNextPage = async () => {
      const { data } = await axios.get(apiURL);
      setFilmList(data.results);
      document.body.scrollTo({ top: 0, behavior: "smooth" });
    };
    getNextPage();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [page]);

  return (
    <Container>
      <h1>Films</h1>
      <section className="cards-grid">
        {filmList.map((item) => (
          <Card
            key={item.title}
            image={getImagePath(item.title, imageBasePath)}
          >
            <FilmInfo item={item} />
          </Card>
        ))}
      </section>
      <Pagination count={data.count} page={page} setPage={setPage} />
    </Container>
  );
};

export async function getServerSideProps() {
  const { data } = await axios.get(`${process.env.NEXT_PUBLIC_API_URL}/films`);

  return { props: { data } };
}

export default FilmsPage;
