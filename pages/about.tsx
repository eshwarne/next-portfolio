import type { NextPage } from "next";
import Head from "next/head";
import CodingAbout from "../components/CodingAbout";
import FilmsAbout from "../components/FilmsAbout";
import GamingAbout from "../components/GamingAbout";
import MoreAbout from "../components/MoreAbout";

const AboutPage: NextPage = () => {
  return (
    <>
      <Head>
        <title>Eshwar Sundar - About</title>
      </Head>
      <div>
        <section>
          <MoreAbout />
        </section>
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
