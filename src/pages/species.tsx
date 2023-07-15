import React from "react";
import { Layout } from "@/components/layout";
import axios from "axios";
import { Card } from "@/components/card";

interface Species {
  name: string;
  classification: string;
  designation: string;
  average_height: string;
  language: string;
}

interface QueryResponse {
  data: {
    count: number;
    next: string;
    previous: string;
    results: Species[];
  };
}

interface SpeciesInfoProps {
  item: Species;
}

const SpeciesInfo = ({ item }: SpeciesInfoProps) => {
  return (
    <section>
      <p>
        <b>{item.name}</b>
      </p>
    </section>
  );
};

const SpeciesPage = ({ data }: QueryResponse) => {
  const speciesList = data.results;

  return (
    <Layout>
      <section className="grid">
        {speciesList.map((item) => (
          <Card key={item.name}>
            <SpeciesInfo item={item} />
          </Card>
        ))}
      </section>
    </Layout>
  );
};

export async function getServerSideProps() {
  const { data } = await axios.get(
    `${process.env.NEXT_PUBLIC_API_URL}/species`
  );

  return { props: { data } };
}

export default SpeciesPage;
