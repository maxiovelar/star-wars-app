import React from "react";
import { Layout } from "@/components/layout";
import axios from "axios";
import { Card } from "@/components/card";

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
    <section>
      <p>
        <b>{item.name}</b>
      </p>
    </section>
  );
};

const PeoplePage = ({ data }: QueryResponse) => {
  const peopleList = data.results;

  return (
    <Layout>
      <section className="grid">
        {peopleList.map((item) => (
          <Card key={item.name}>
            <PersonInfo item={item} />
          </Card>
        ))}
      </section>
    </Layout>
  );
};

export async function getServerSideProps() {
  const { data } = await axios.get(`${process.env.NEXT_PUBLIC_API_URL}/people`);

  return { props: { data } };
}

export default PeoplePage;
