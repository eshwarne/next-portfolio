import styles from "./About.module.scss";
import Image from "next/image";
import MeFilming from "../../public/films.jpg";
import MeSports from "../../public/sports.jpg";
import MeTravel from "../../public/travel.jpg";
export const About = () => {
  return (
    <div className={styles.about}>
      <h2 className={styles.about__title}>About</h2>
      <div className={styles.about__gallery}>
        <div className={`${styles.about__textual} ${styles.about__item}`}>
          When I am not coding, I do a lot of other things. I make and act in
          sci-fi and thriller films, I travel a lot with my friends and I love
          playing football. If you are playing Call Of Duty this weekend, find
          me on <i style={{ color: "#28FFBF" }}>@DiningPhilosopher</i>
        </div>
        <div className={`${styles.about__visual} ${styles.about__item}`}>
          <div className={styles.about__visual__image}>
            <Image src={MeFilming} layout="fill" objectFit="cover" />
          </div>
          <div className={styles.about__visual__image}>
            <Image src={MeSports} layout="fill" objectFit="cover" />
          </div>
          <div className={styles.about__visual__image}>
            <Image src={MeTravel} layout="fill" objectFit="cover" />
          </div>
        </div>
      </div>
    </div>
  );
};
