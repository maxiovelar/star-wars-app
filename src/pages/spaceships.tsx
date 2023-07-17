import React, { useEffect, useState } from "react";
import axios from "axios";
import { Card } from "@/components/card";
import { getImagePath } from "@/utils/helpers";
import { Container } from "@/components/container";
import { Pagination } from "@/components/pagination";
import { useStore } from "@/hooks/useStore";
import { Loader } from "@/components/loader";

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
  const { isLoading, setIsLoading } = useStore();

  // useEffect(() => {
  //   setIsLoading(false);
  //   // eslint-disable-next-line react-hooks/exhaustive-deps
  // }, []);

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
    <Container>
      {isLoading ? (
        <Loader />
      ) : (
        <>
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
        </>
      )}
    </Container>
  );
};

export async function getServerSideProps() {
  const { data } = await axios.get(
    `${process.env.NEXT_PUBLIC_API_URL}/starships`
  );

  return { props: { data } };
}

export default SpaceshipsPage;
