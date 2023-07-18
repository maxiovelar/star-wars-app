import React, { useEffect, useState } from "react";
import axios from "axios";
import { Card } from "@/components/card";
import { getImagePath } from "@/utils/helpers";
import { Container } from "@/components/container";
import { Pagination } from "@/components/pagination";

const imageBasePath = "/assets/species/";

interface Species {
  name: string;
  classification: string;
  designation: string;
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
    <>
      <p>{item.name}</p>
      <span>
        <b>Classification:</b> {item.classification}
      </span>
      <span>
        <b>Designation:</b> {item.designation}
      </span>
      <span>
        <b>Language:</b> {item.language}
      </span>
    </>
  );
};

const SpeciesPage = ({ data }: QueryResponse) => {
  const [speciesList, setPeopleList] = useState(data.results);
  const [page, setPage] = useState(1);
  const apiURL = `${process.env.NEXT_PUBLIC_API_URL}species?page=${page}`;

  useEffect(() => {
    const getNextPage = async () => {
      const { data } = await axios.get(apiURL);
      setPeopleList(data.results);
      document.body.scrollTo({ top: 0, behavior: "smooth" });
    };
    getNextPage();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [page]);

  return (
    <Container>
      <h1>Species</h1>
      <section className="cards-grid">
        {speciesList.map((item) => (
          <Card key={item.name} image={getImagePath(item.name, imageBasePath)}>
            <SpeciesInfo item={item} />
          </Card>
        ))}
      </section>
      <Pagination count={data.count} page={page} setPage={setPage} />
    </Container>
  );
};

export async function getServerSideProps() {
  const { data } = await axios.get(
    `${process.env.NEXT_PUBLIC_API_URL}/species`
  );

  return { props: { data } };
}

export default SpeciesPage;
