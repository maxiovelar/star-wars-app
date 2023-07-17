import React, { useEffect, useState } from "react";
import { Layout } from "@/components/layout";
import axios from "axios";
import { Card } from "@/components/card";
import { getImagePath } from "@/utils/helpers";
import { Container } from "@/components/container";
import { Pagination } from "@/components/pagination";

const imageBasePath = "/assets/films/";

interface Film {
  title: string;
  episode_id: number;
  director: string;
  producer: string;
  release_date: string;
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
    <p>
      <b>{item.title}</b>
    </p>
  );
};

const FilmsPage = ({ data }: QueryResponse) => {
  const [filmList, setFilmList] = useState(data.results);
  const [page, setPage] = useState(1);

  useEffect(() => {
    const getNextPage = async () => {
      const { data } = await axios.get(
        `${process.env.NEXT_PUBLIC_API_URL}films?page=${page}`
      );
      setFilmList(data.results);
    };
    getNextPage();
  }, [page]);

  return (
    <Layout>
      <Container>
        <h1>Films</h1>
        <section className="grid">
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
    </Layout>
  );
};

export async function getServerSideProps() {
  const { data } = await axios.get(`${process.env.NEXT_PUBLIC_API_URL}/films`);

  return { props: { data } };
}

export default FilmsPage;
