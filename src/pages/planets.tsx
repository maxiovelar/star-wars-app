import React, { useEffect, useState } from "react";
import axios from "axios";
import { Card } from "@/components/card";
import { getImagePath } from "@/utils/helpers";
import { Container } from "@/components/container";
import { Pagination } from "@/components/pagination";
import { useStore } from "@/hooks/useStore";
import { Loader } from "@/components/loader";

const imageBasePath = "/assets/planets/";

interface Planet {
  name: string;
  // diameter: string;
  // climate: string;
  // gravity: string;
  // terrain: string;
  // surface_water: string;
  // population: string;
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
    <p>
      <b>{item.name}</b>
    </p>
  );
};

const PlanetsPage = ({ data }: QueryResponse) => {
  const [planetList, setPlanetList] = useState(data.results);
  const [page, setPage] = useState(1);
  const { isLoading, setIsLoading } = useStore();

  useEffect(() => {
    setIsLoading(false);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  useEffect(() => {
    const getNextPage = async () => {
      const { data } = await axios.get(
        `${process.env.NEXT_PUBLIC_API_URL}planets?page=${page}`
      );
      setPlanetList(data.results);
    };
    getNextPage();
  }, [page]);

  return (
    <Container>
      {isLoading ? (
        <Loader />
      ) : (
        <>
          <h1>Planets</h1>
          <section className="grid">
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
        </>
      )}
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
