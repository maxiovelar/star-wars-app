import React, { useEffect, useState } from "react";
import axios from "axios";
import { Card } from "@/components/card";
import { getImagePath } from "@/utils/helpers";
import { Container } from "@/components/container";
import { Pagination } from "@/components/pagination";

const imageBasePath = "/assets/people/";

interface Person {
  name: string;
  height: string;
  mass: string;
  gender: string;
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
    <div>
      <p>{item.name}</p>
      <span>
        <b>Gender:</b> {item.gender}
      </span>
      <span>
        <b>Height:</b> {item.height}
      </span>
      <span>
        <b>Mass:</b> {item.mass}
      </span>
    </div>
  );
};

const PeoplePage = ({ data }: QueryResponse) => {
  const [peopleList, setPeopleList] = useState(data.results);
  const [page, setPage] = useState(1);
  const apiURL = `${process.env.NEXT_PUBLIC_API_URL}people?page=${page}`;

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
      <h1>People</h1>
      <section className="cards-grid">
        {peopleList.map((item, index) => (
          <Card
            key={`${index}-${item.name}`}
            image={getImagePath(item.name, imageBasePath)}
          >
            <PersonInfo item={item} />
          </Card>
        ))}
      </section>
      <Pagination count={data.count} page={page} setPage={setPage} />
    </Container>
  );
};

export async function getServerSideProps() {
  const { data } = await axios.get(`${process.env.NEXT_PUBLIC_API_URL}/people`);

  return { props: { data } };
}

export default PeoplePage;
