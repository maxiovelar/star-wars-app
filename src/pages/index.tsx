import { Card } from "@/components/card";
import { Container } from "@/components/container";
import Head from "next/head";
import Link from "next/link";

interface Item {
  name: string;
  image: string;
  href: string;
}

interface CollectionInfoProps {
  item: Item;
}

const collections = [
  { name: "Planets", image: "/assets/planets/tatooine.webp", href: "/planets" },
  {
    name: "Spaceships",
    image: "/assets/spaceships/star-destroyer.webp",
    href: "/spaceships",
  },
  { name: "Vehicles", image: "/assets/vehicles/at-at.webp", href: "/vehicles" },
  {
    name: "People",
    image: "/assets/people/luke-skywalker.webp",
    href: "/people",
  },
  {
    name: "Films",
    image: "/assets/films/return-of-the-jedi.webp",
    href: "/films",
  },
  {
    name: "Species",
    image: "/assets/species/yoda's-species.webp",
    href: "/species",
  },
];

const CollectionInfo = ({ item }: CollectionInfoProps) => {
  return (
    <>
      <p>{item.name}</p>
      <Link href={item.href} className="home-card-link">
        See more
      </Link>
    </>
  );
};

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
      <Container>
        <h1>Collections</h1>
        <section className="home-grid">
          {collections.map((item) => (
            <Card key={item.name} image={item.image}>
              <CollectionInfo item={item} />
            </Card>
          ))}
        </section>
      </Container>
    </>
  );
}
