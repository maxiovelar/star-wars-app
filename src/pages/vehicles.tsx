import React from "react";
import { Layout } from "@/components/layout";
import axios from "axios";
import { Card } from "@/components/card";

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
    <section>
      <p>
        <b>{item.name}</b>
      </p>
    </section>
  );
};

const VehiclesPage = ({ data }: QueryResponse) => {
  const vehicleList = data.results;

  return (
    <Layout>
      <section className="grid">
        {vehicleList.map((item) => (
          <Card key={item.name}>
            <VehicleInfo item={item} />
          </Card>
        ))}
      </section>
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
