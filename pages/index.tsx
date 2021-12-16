import type { NextPage } from "next";
import Head from "next/head";
import Image from "next/image";
import About from "../components/About";
import Footer from "../components/Footer";
import Home from "../components/Home";
import MessageBar from "../components/MessageBar";
import Navbar from "../components/Navbar";
import Projects from "../components/Projects";
import Skills from "../components/Skills";

const Portfolio: NextPage = () => {
  return (
    <>
      <Head>
        <title>Eshwar Sundar | Software Engineer</title>
        <meta name="description" content="Eshwar Sundar's portfolio website" />
        <link rel="icon" href="/picture-self.jpeg" />
      </Head>
      <MessageBar />
      <Navbar />
      <div className={"pageContainer"}>
        <section>
          <Home />
        </section>
        <section>
          <About />
        </section>
        <section>
          <Projects />
        </section>
        <section>
          <Skills />
        </section>
        <footer>
          <Footer />
        </footer>
      </div>
    </>
  );
};

export default Portfolio;
