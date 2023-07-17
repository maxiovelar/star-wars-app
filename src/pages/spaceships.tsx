import React, { useEffect, useState } from "react";
import { Layout } from "@/components/layout";
import axios from "axios";
import { Card } from "@/components/card";
import { getImagePath } from "@/utils/helpers";
import { Container } from "@/components/container";
import { Pagination } from "@/components/pagination";

const imageBasePath = "/assets/spaceships/";

interface Spaceship {
  name: string;
  // model: string;
  // manufacturer: string;
  // length: string;
  // passengers: string;
}

interface QueryResponse {
  data: {
    count: number;
    next: string;
    previous: string;
    results: Spaceship[];
  };
}

interface SpaceshipInfoProps {
  item: Spaceship;
}

const SpaceshipInfo = ({ item }: SpaceshipInfoProps) => {
  return (
    <p>
      <b>{item.name}</b>
    </p>
  );
};

const SpaceshipsPage = ({ data }: QueryResponse) => {
  const [spaceshipList, setSpaceshipList] = useState(data.results);
  const [page, setPage] = useState(1);

  useEffect(() => {
    const getNextPage = async () => {
      const { data } = await axios.get(
        `${process.env.NEXT_PUBLIC_API_URL}starships?page=${page}`
      );
      setSpaceshipList(data.results);
    };
    getNextPage();
  }, [page]);

  return (
    <Layout>
      <Container>
        <section className="grid">
          {spaceshipList.map((item) => (
            <Card
              key={item.name}
              image={getImagePath(item.name, imageBasePath)}
            >
              <SpaceshipInfo item={item} />
            </Card>
          ))}
        </section>
        <Pagination count={data.count} page={page} setPage={setPage} />
      </Container>
    </Layout>
  );
};

export async function getServerSideProps() {
  const { data } = await axios.get(
    `${process.env.NEXT_PUBLIC_API_URL}/starships`
  );

  return { props: { data } };
}

export default SpaceshipsPage;
