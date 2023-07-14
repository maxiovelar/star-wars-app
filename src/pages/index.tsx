import Head from "next/head";
import { Inter } from "next/font/google";
import { Layout } from "@/components/layout";
import { Container } from "@/components/container";
import { Footer } from "@/components/footer";
import { Navigation } from "@/components/navigation";
import { Header } from "@/components/header";

const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  return (
    <>
      <Head>
        <title>Technical Test</title>
        <meta
          name="description"
          content="A technical test developed by Maxi Ovelar"
        />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Layout>
        <Navigation />
        <Header />
        <Container>Hola</Container>
        <Footer />
      </Layout>
    </>
  );
}
