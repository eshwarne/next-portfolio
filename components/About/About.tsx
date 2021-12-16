import styles from "./About.module.scss";
import Image from "next/image";
import MeFilming from "../../public/films.jpg";
import MeSports from "../../public/sports.jpg";
import MeTravel from "../../public/travel.jpg";
export const About = () => {
  return (
    <div className={styles.about}>
      <span className={styles.about__locator} id="about"></span>
      <div>
        <h2 className={styles.about__title}>About</h2>
      </div>
      <div className={styles.about__gallery}>
        <div className={`${styles.about__textual} ${styles.about__item}`}>
          <div>
            I love writing code! 👨‍💻 I strongly believe technology can change
            anything and that's why I am so passionate about it! I am trying to
            make an impact in the Web and Mobile space. I love working across
            the stack!
          </div>
          <div>
            When I am not coding, I make and act in sci-fi and thriller films
            and write books. I travel a lot with my friends and I love playing
            football. If you are playing Call Of Duty this weekend, find me on{" "}
            <i style={{ color: "#28FFBF" }}>@DiningPhilosopher</i> 🎮
          </div>
        </div>
        <div className={`${styles.about__visual} ${styles.about__item}`}>
          <div
            className={`${styles.about__visual__image} ${styles["about__visual__image--one"]}`}
          >
            <Image
              alt="Eshwar Sundar Filming"
              src={MeFilming}
              layout="fill"
              objectFit="cover"
            />
          </div>
          <div
            className={`${styles.about__visual__image}  ${styles["about__visual__image--two"]}`}
          >
            <Image
              alt="Eshwar Sundar Football"
              src={MeSports}
              layout="fill"
              objectFit="cover"
            />
          </div>
          <div
            className={`${styles.about__visual__image}  ${styles["about__visual__image--three"]}`}
          >
            <Image
              alt="Eshwar Sundar Travel"
              src={MeTravel}
              layout="fill"
              objectFit="cover"
            />
          </div>
        </div>
      </div>
    </div>
  );
};
