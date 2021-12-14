import type { NextPage } from "next";
import Head from "next/head";
import Image from "next/image";
import About from "../components/About";
import Home from "../components/Home";
import Navbar from "../components/Navbar";
import Projects from "../components/Projects";

const Portfolio: NextPage = () => {
  return (
    <div>
      <Head>
        <title>Eshwar Sundar | Software Engineer</title>
        <meta name="description" content="Eshwar Sundar's portfolio website" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <header>
        <Navbar />
      </header>
      <section id="home">
        <Home />
      </section>
      <section>
        <About />
      </section>
      <section>
        <Projects />
      </section>
    </div>
  );
};

export default Portfolio;
