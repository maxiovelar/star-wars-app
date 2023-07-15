import Head from "next/head";
import { Layout } from "@/components/layout";

export default function Home() {
  return (
    <>
      <Head>
        <title>Star Wars App</title>
        <meta
          name="description"
          content="A technical test developed by Maxi Ovelar"
        />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Layout>
        {/* <CardList list={planetsExample} /> */}
        Holaaaaaaa
      </Layout>
    </>
  );
}
