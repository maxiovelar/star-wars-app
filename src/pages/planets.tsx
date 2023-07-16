import React, { useEffect, useState } from "react";
import axios from "axios";
import { Layout } from "@/components/layout";
import InfiniteScroll from "react-infinite-scroll-component";
import { Card } from "@/components/card";
import { getImagePath } from "@/utils/helpers";

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
  const planetList = data.results;
  // const [planetList, setPlanetList] = useState(planets.results);
  // const [page, setPage] = useState(1);

  // const handleScroll = () => {
  //   if (
  //     window.innerHeight + Math.ceil(window.scrollY) >=
  //     document.body.offsetHeight - 500
  //   ) {
  //     setPage(page + 1);
  //   }
  // };

  // useEffect(() => {
  //   window.addEventListener("scroll", handleScroll);
  //   return () => {
  //     window.removeEventListener("scroll", handleScroll);
  //   };
  // }, []);

  // useEffect(() => {
  //   const getMorePlanets = async () => {
  //     const { data } = await axios.get(
  //       `${process.env.NEXT_PUBLIC_API_URL}/planets?page=${page}`
  //     );
  //     setPlanetList((prev) => [...prev, ...data.results]);
  //   };
  //   getMorePlanets();
  // }, [page]);

  return (
    <Layout>
      {/* <InfiniteScroll
        dataLength={planetList.length}
        next={() => setPage((prevPage) => prevPage + 1)}
        hasMore={true}
        loader={<h4>Loading...</h4>}
        endMessage={
          <p style={{ textAlign: "center" }}>
            <b>Yay! You have seen it all</b>
          </p>
        }
      > */}
      {/* {
          planetList.map((planet) => (
            <Card key={planet.name} item={planet} />
          ))
          // <CardList list={planetList} />)
        } */}
      {/* <CardList list={planetList} /> */}
      {/* </InfiniteScroll> */}

      <section className="grid">
        {planetList.map((item) => (
          <Card key={item.name} image={getImagePath(item.name, imageBasePath)}>
            <PlanetInfo item={item} />
          </Card>
        ))}
      </section>
    </Layout>
  );
};

export async function getServerSideProps() {
  const { data } = await axios.get(
    `${process.env.NEXT_PUBLIC_API_URL}/planets?page=1`
  );

  return { props: { data } };
}

export default PlanetsPage;
