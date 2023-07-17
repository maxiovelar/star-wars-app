import { Loader } from "@/components/loader";
import { useStore } from "@/hooks/useStore";
import Head from "next/head";
import Image from "next/image";

const banner = "/assets/home-banner.jpg";

export default function Home() {
  const { isLoading } = useStore();
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
      {isLoading ? (
        <Loader />
      ) : (
        <Image
          src={banner}
          alt="home banner"
          width={1920}
          height={1080}
          style={{ height: "100%", width: "100%", objectFit: "cover" }}
        />
      )}
    </>
  );
}
