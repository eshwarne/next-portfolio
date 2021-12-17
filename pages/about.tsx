import type { NextPage } from "next";
import Head from "next/head";
import CodingAbout from "../components/CodingAbout";
import FilmsAbout from "../components/FilmsAbout";
import GamingAbout from "../components/GamingAbout";

const AboutPage: NextPage = () => {
  return (
    <>
      <Head>
        <title>Eshwar Sundar - About</title>
      </Head>
      <div>
        <h1>I love doing three things. CODE, FILM and TRAVEL</h1>
        <section>
          <CodingAbout />
        </section>
        <section>
          <FilmsAbout />
        </section>
        <section>
          <GamingAbout />
        </section>
      </div>
    </>
  );
};
export default AboutPage;
