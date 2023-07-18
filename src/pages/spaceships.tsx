import React, { useEffect, useState } from "react";
import axios from "axios";
import { Card } from "@/components/card";
import { getImagePath } from "@/utils/helpers";
import { Container } from "@/components/container";
import { Pagination } from "@/components/pagination";

const imageBasePath = "/assets/spaceships/";

interface Spaceship {
  name: string;
  starship_class: string;
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
    <>
      <p>{item.name}</p>
      <span>
        <b>Class:</b> {item.starship_class}
      </span>
    </>
  );
};

const SpaceshipsPage = ({ data }: QueryResponse) => {
  const [spaceshipList, setSpaceshipList] = useState(data.results);
  const [page, setPage] = useState(1);
  const apiURL = `${process.env.NEXT_PUBLIC_API_URL}starships?page=${page}`;

  useEffect(() => {
    const getNextPage = async () => {
      const { data } = await axios.get(apiURL);
      setSpaceshipList(data.results);
      document.body.scrollTo({ top: 0, behavior: "smooth" });
    };
    getNextPage();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [page]);

  return (
    <Container>
      <h1>Spaceships</h1>
      <section className="cards-grid">
        {spaceshipList.map((item) => (
          <Card key={item.name} image={getImagePath(item.name, imageBasePath)}>
            <SpaceshipInfo item={item} />
          </Card>
        ))}
      </section>
      <Pagination count={data.count} page={page} setPage={setPage} />
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
