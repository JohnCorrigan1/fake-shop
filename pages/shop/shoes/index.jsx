import React from "react";
import Header from "../../../components/Header";
import ItemCard from "../../../components/ItemCard";
import Head from "next/head";

export default function Shoes() {
  return (
    <>
      <Head>
        <title>Fake Store</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin />
        <link
          href="https://fonts.googleapis.com/css2?family=Roboto&display=swap"
          rel="stylesheet"
        />
      </Head>
      <Header />
      <style jsx>{`.items-container{
    grid-template-columns: repeat(auto-fit, minmax(350px, 350px));`}</style>
      <div className="grid gap-10 items-container p-10 w-full justify-center">
        <ItemCard title="Dalle Runners" price={54.99} link="/shoe1.png" />
        <ItemCard title="Classic Skate" price={44.99} link="/shoe2.png" />
        <ItemCard
          title="Classic Skate Limited Edition"
          price={49.99}
          link="/shoe3.png"
        />
        <ItemCard title="All white" price={64.99} link="/allwhites.png" />
        <ItemCard title="Red Carpet" price={69.99} link="/redCarpet.png" />
        <ItemCard
          title="All Black High Tops"
          price={74.99}
          link="/allBlackHigh.png"
        />
        <ItemCard
          title="All Black Low Tops"
          price={64.99}
          link="/allBlackLow.png"
        />
        <ItemCard title="Badazzled" price={89.99} link="/badazzled.png" />
      </div>
    </>
  );
}
