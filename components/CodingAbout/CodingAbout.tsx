import FlippableCard from "../Card";
import styles from "./CodingAbout.module.scss";
import TechBanner from "../../public/tech_banner.png";
import JunctureBanner from "../../public/juncture_banner.png";
export const CodingAbout = () => {
  return (
    <div className={styles.codingAbout}>
      <div className="bgVideo_container">
        <video className="bgVideo" autoPlay muted loop>
          <source src="/videos/coding.mp4" type="video/mp4" />
        </video>
      </div>

      <div className={styles.codingAbout__title}>
        <h1>Coding! 👨🏻‍💻</h1>
      </div>
      <div className={styles.codingAbout__content}>
        <div className={styles.codingAbout__content__one}>
          <div>
            Technology fascinates me! The kind of things code can do is amazing!
            In my high school I was a biology student. I had not worked with
            computers until I took Computer Engineering at VIT, Vellore back in
            2016. From there on, I never looked back. From solving simple puzzle
            kind of coding problems to building products that people use, I have
            come a long way and look to learn much more! I am currently working
            on a project called "Juncture".
          </div>
          <div className={styles.codingAbout__card}>
            <FlippableCard
              bgImage={JunctureBanner}
              bgPosition="10% 0%"
              description="Juncture is an application that looks to solve the problem of less physical activity among children these days. Connect with me to know more about this as I have not open sourced this project yet!"
              title="Juncture"
            />
          </div>
        </div>

        <div className={styles.codingAbout__content__two}>
          <div>
            I primarily work on Web and tablet-potrait development. I love the
            way distributed systems gossip with each other and solve problems
            together. I involve in architecting and designing systems and
            looking to explore more in this space. Big fan of the book{" "}
            <i>"Designing Data-Intensive Applications"</i>.<div></div>
          </div>

          <div className={styles.codingAbout__card}>
            <FlippableCard
              bgImage={TechBanner}
              title="Tech I Love!"
              description="I have worked with many techonologies, but these are the technologies I really loved working with because of the great developer experience!"
            />
          </div>
        </div>
      </div>
    </div>
  );
};
