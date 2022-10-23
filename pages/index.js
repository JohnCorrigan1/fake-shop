import Head from "next/head";
import Header from "./../components/Header";
import About from "./../components/About";

export default function Home() {
  return (
    <div className="bg-gradient-to-br from-indigo-700 via-purple-600 to-indigo-800 h-screen">
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
      <div>
        <Header />
        <About />
      </div>
    </div>
  );
}
