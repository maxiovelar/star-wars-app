import React, { useEffect } from "react";
import axios from "axios";
import { Container } from "../../components/container/container";
import { Pagination } from "../../components/pagination/pagination";
import {
  Film,
  Person,
  Planet,
  PlanetInfo,
  StarshipInfo,
  VehicleInfo,
  FilmInfo,
  PersonInfo,
  SpeciesInfo,
  Starship,
  Species,
  Vehicle,
} from "../../components/content";
import { GetServerSideProps } from "next";

type ItemType = Planet | Starship | Vehicle | Person | Film | Species;

export type CollectionType =
  | "planets"
  | "starships"
  | "vehicles"
  | "people"
  | "films"
  | "species";

export interface QueryResponse {
  data: {
    count: number;
    next: string;
    previous: string;
    results: ItemType[];
  };
  collection: CollectionType;
}

interface ItemInfoProps {
  collection: CollectionType;
  item: ItemType;
  imageBasePath: string;
}

const ItemInfo = ({ collection, item }: ItemInfoProps) => {
  const itemInfo: Record<CollectionType, React.ReactNode> = {
    planets: <PlanetInfo item={item as Planet} />,
    starships: <StarshipInfo item={item as Starship} />,
    vehicles: <VehicleInfo item={item as Vehicle} />,
    people: <PersonInfo item={item as Person} />,
    films: <FilmInfo item={item as Film} />,
    species: <SpeciesInfo item={item as Species} />,
  };

  return itemInfo[collection];
};

const CollectionPage = ({ data, collection }: QueryResponse) => {
  return (
    <Container>
      <h1>{collection}</h1>
      <section className="cards-grid">
        {data.results.map((item, index) => (
          <ItemInfo
            key={`${index}-${collection}`}
            collection={collection as CollectionType}
            item={item}
            imageBasePath={`/assets/${collection}/`}
          />
        ))}
      </section>
      <Pagination count={data.count} collection={collection} />
    </Container>
  );
};

export const getServerSideProps: GetServerSideProps = async ({ query }) => {
  const { page, collection } = query;

  const queryPage = page ? `?page=${page}` : "";

  const { data } = await axios.get(
    `${process.env.NEXT_PUBLIC_API_URL}${collection}${queryPage}`
  );

  return { props: { data, collection } };
};

export default CollectionPage;
