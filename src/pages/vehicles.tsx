import React, { useEffect, useState } from "react";
import axios from "axios";
import { Card } from "@/components/card";
import { getImagePath } from "@/utils/helpers";
import { Container } from "@/components/container";
import { Pagination } from "@/components/pagination";

const imageBasePath = "/assets/vehicles/";

interface Vehicle {
  name: string;
  // model: string;
  // manufacturer: string;
  // passengers: string;
}

interface QueryResponse {
  data: {
    count: number;
    next: string;
    previous: string;
    results: Vehicle[];
  };
}

interface VehicleInfoProps {
  item: Vehicle;
}

const VehicleInfo = ({ item }: VehicleInfoProps) => {
  return (
    <p>
      <b>{item.name}</b>
    </p>
  );
};

const VehiclesPage = ({ data }: QueryResponse) => {
  const [vehicleList, setVehicleList] = useState(data.results);
  const [page, setPage] = useState(1);

  useEffect(() => {
    const getNextPage = async () => {
      const { data } = await axios.get(
        `${process.env.NEXT_PUBLIC_API_URL}vehicles?page=${page}`
      );
      setVehicleList(data.results);
    };
    getNextPage();
  }, [page]);

  return (
    <Container>
      <h1>Vehicles</h1>
      <section className="grid">
        {vehicleList.map((item) => (
          <Card key={item.name} image={getImagePath(item.name, imageBasePath)}>
            <VehicleInfo item={item} />
          </Card>
        ))}
      </section>
      <Pagination count={data.count} page={page} setPage={setPage} />
    </Container>
  );
};

export async function getServerSideProps() {
  const { data } = await axios.get(
    `${process.env.NEXT_PUBLIC_API_URL}/vehicles`
  );

  return { props: { data } };
}

export default VehiclesPage;
