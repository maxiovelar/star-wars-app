import React, { useEffect, useState } from "react";
import { Layout } from "@/components/layout";
import axios from "axios";
import { Card } from "@/components/card";
import { getImagePath } from "@/utils/helpers";
import { Container } from "@/components/container";
import { Pagination } from "@/components/pagination";

const imageBasePath = "/assets/people/";

interface Person {
  name: string;
  // height: string;
  // mass: string;
  // birth_year: string;
  // gender: string;
}

interface QueryResponse {
  data: {
    count: number;
    next: string;
    previous: string;
    results: Person[];
  };
}

interface PersonInfoProps {
  item: Person;
}

const PersonInfo = ({ item }: PersonInfoProps) => {
  return (
    <p>
      <b>{item.name}</b>
    </p>
  );
};

const PeoplePage = ({ data }: QueryResponse) => {
  const [peopleList, setPeopleList] = useState(data.results);
  const [page, setPage] = useState(1);

  useEffect(() => {
    const getNextPage = async () => {
      const { data } = await axios.get(
        `${process.env.NEXT_PUBLIC_API_URL}people?page=${page}`
      );
      setPeopleList(data.results);
    };
    getNextPage();
  }, [page]);

  return (
    <Layout>
      <Container>
        <h1>People</h1>
        <section className="grid">
          {peopleList.map((item) => (
            <Card
              key={item.name}
              image={getImagePath(item.name, imageBasePath)}
            >
              <PersonInfo item={item} />
            </Card>
          ))}
        </section>
        <Pagination count={data.count} page={page} setPage={setPage} />
      </Container>
    </Layout>
  );
};

export async function getServerSideProps() {
  const { data } = await axios.get(`${process.env.NEXT_PUBLIC_API_URL}/people`);

  return { props: { data } };
}

export default PeoplePage;
