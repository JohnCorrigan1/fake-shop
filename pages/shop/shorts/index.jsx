import React from "react";
import Header from "../../../components/Header";
import ItemCard from "../../../components/ItemCard";
import Head from "next/head";

export default function Shorts() {
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
       <ItemCard title="Classic Comfort" link="/shorts.png" price={29.99} />
       <ItemCard title="All Purpose Jeans" link="/jeans.png" price={39.99} />
       <ItemCard title="Classic Comfort Gray" link="/grayShorts.png" price={29.99} />
       <ItemCard title="Comfort Pants Green" link="/greenPants.png" price={39.99} />
       <ItemCard title="Comfort Pants Blue" link="/bluePants.png" price={39.99} />
       <ItemCard title="Bathing Suit set" link="/bathingSuitSet.png" price={44.99} />
       <ItemCard title="Spandex" link="/spandex.png" price={14.99} />
       <ItemCard title="Comfort Bathing Suit" link="/bathingSuit.png" price={24.99} />
      </div>
    </>
  );
}
