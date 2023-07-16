import React from "react";
import { Layout } from "@/components/layout";
import axios from "axios";
import { Card } from "@/components/card";
import { getImagePath } from "@/utils/helpers";
import { Container } from "@/components/container";

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
  const peopleList = data.results;

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
      </Container>
    </Layout>
  );
};

export async function getServerSideProps() {
  const { data } = await axios.get(`${process.env.NEXT_PUBLIC_API_URL}/people`);

  return { props: { data } };
}

export default PeoplePage;
