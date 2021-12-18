import FlippableCard from "../Card";
import styles from "./FilmsAbout.module.scss";
import MultiverseFilm from "../../public/films_multiverse.jpeg";
import DialFilm from "../../public/films_dial.jpeg";
export const FilmsAbout = () => {
  return (
    <div className={styles.filmsAbout}>
      <div className="bgVideo_container">
        <video className="bgVideo" autoPlay muted loop>
          <source src="/videos/films.mp4" type="video/mp4" />
        </video>
      </div>

      <div className={styles.filmsAbout__title}>
        <h1>Film Making! 🎬</h1>
      </div>
      <div className={styles.filmsAbout__content}>
        <div className={styles.filmsAbout__content__one}>
          <div>
            I love making science fiction and thriller films! The process of
            writing the story to showing it on the big screen is a quite
            thrilling and fun filled journey. With over 200K+ views on Youtube
            and offline showcasing, I can proudly say people love my films. The
            COVID situation made me put a pause to it as our team didn't want to
            violate any social distancing norms. Looking to get back soon!
          </div>
          <div className={styles.filmsAbout__card}>
            <FlippableCard
              bgImage={MultiverseFilm}
              title="Multiverse"
              description="This is my attempt at a fully fledged Multiverse short film on 0 budget"
              btnText="Watch Multiverse!"
              btnLink="/"
            />
          </div>
        </div>

        <div className={styles.filmsAbout__content__two}>
          <div>
            The best part of my film making journey is taking on all the aspects
            of the film. From story, direction, screenplay, acting and getting
            it on screen, I do it all! The creative work involved is what makes
            film making so different from any other field. Try making a few,
            it's fun!
          </div>
          <div className={styles.filmsAbout__card}>
            <FlippableCard
              bgImage={DialFilm}
              bgPosition="10% 0%"
              description="A film that is close to my heart! Revolves around a unsolved mystery case in the neighborhood"
              title="Dial"
              btnText="Experience DIAL!"
              btnLink="/"
            />
          </div>
        </div>
      </div>
    </div>
  );
};
