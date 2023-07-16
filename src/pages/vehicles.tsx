import React from "react";
import { Layout } from "@/components/layout";
import axios from "axios";
import { Card } from "@/components/card";
import { getImagePath } from "@/utils/helpers";
import { Container } from "@/components/container";

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
  const vehicleList = data.results;

  return (
    <Layout>
      <Container>
        <h1>Vehicles</h1>
        <section className="grid">
          {vehicleList.map((item) => (
            <Card
              key={item.name}
              image={getImagePath(item.name, imageBasePath)}
            >
              <VehicleInfo item={item} />
            </Card>
          ))}
        </section>
      </Container>
    </Layout>
  );
};

export async function getServerSideProps() {
  const { data } = await axios.get(
    `${process.env.NEXT_PUBLIC_API_URL}/vehicles`
  );

  return { props: { data } };
}

export default VehiclesPage;
