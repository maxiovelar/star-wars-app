import React from "react";
import { Layout } from "@/components/layout";
import axios from "axios";
import { Card } from "@/components/card";

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
    <section>
      <p>
        <b>{item.title}</b>
      </p>
    </section>
  );
};

const FilmsPage = ({ data }: QueryResponse) => {
  const filmList = data.results;

  return (
    <Layout>
      <section className="grid">
        {filmList.map((item) => (
          <Card key={item.title}>
            <FilmInfo item={item} />
          </Card>
        ))}
      </section>
    </Layout>
  );
};

export async function getServerSideProps() {
  const { data } = await axios.get(`${process.env.NEXT_PUBLIC_API_URL}/films`);

  return { props: { data } };
}

export default FilmsPage;
