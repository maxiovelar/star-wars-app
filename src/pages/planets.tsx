import React, { useEffect, useState } from "react";
import axios from "axios";
import { Card } from "@/components/card";
import { getImagePath } from "@/utils/helpers";
import { Container } from "@/components/container";
import { Pagination } from "@/components/pagination";

const imageBasePath = "/assets/planets/";

interface Planet {
  name: string;
  diameter: string;
  climate: string;
  population: string;
}

interface QueryResponse {
  data: {
    count: number;
    next: string;
    previous: string;
    results: Planet[];
  };
}

interface PlanetInfoProps {
  item: Planet;
}

const PlanetInfo = ({ item }: PlanetInfoProps) => {
  return (
    <>
      <p>{item.name}</p>
      <span>
        <b>Diameter:</b> {item.diameter}
      </span>
      <span>
        <b>Climate:</b> {item.climate}
      </span>
      <span>
        <b>Population:</b> {item.population}
      </span>
    </>
  );
};

const PlanetsPage = ({ data }: QueryResponse) => {
  const [planetList, setPlanetList] = useState(data.results);
  const [page, setPage] = useState(1);
  const apiURL = `${process.env.NEXT_PUBLIC_API_URL}planets?page=${page}`;

  useEffect(() => {
    const getNextPage = async () => {
      const { data } = await axios.get(apiURL);
      setPlanetList(data.results);
      document.body.scrollTo({ top: 0, behavior: "smooth" });
    };
    getNextPage();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [page]);

  return (
    <Container>
      <h1>Planets</h1>
      <section className="cards-grid">
        {planetList.map((item, index) => (
          <Card
            key={`${index}-${item.name}`}
            image={getImagePath(item.name, imageBasePath)}
          >
            <PlanetInfo item={item} />
          </Card>
        ))}
      </section>
      <Pagination count={data.count} page={page} setPage={setPage} />
    </Container>
  );
};

export async function getServerSideProps() {
  const { data } = await axios.get(
    `${process.env.NEXT_PUBLIC_API_URL}/planets`
  );

  return { props: { data } };
}

export default PlanetsPage;
