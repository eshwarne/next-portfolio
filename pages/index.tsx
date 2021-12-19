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
import {
  getAllProjectsQueryString,
  getAllSkillsQueryString,
} from "../lib/sanityQueries";
import { getClient } from "../lib/sanityUtils";
export async function getStaticProps() {
  const projects = await getClient().fetch(getAllProjectsQueryString());
  const skills = await getClient().fetch(getAllSkillsQueryString());
  return {
    props: {
      projects,
      skills,
    },
  };
}
const Portfolio: NextPage = ({ projects, skills }: any) => {
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
          <Projects projects={projects} />
        </section>
        <section>
          <Skills skills={skills} />
        </section>
        <footer>
          <Footer />
        </footer>
      </div>
    </>
  );
};

export default Portfolio;
