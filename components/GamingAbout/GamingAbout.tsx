import FlippableCard from "../Card";
import styles from "./GamingAbout.module.scss";
import MultiverseFilm from "../../public/films_multiverse.jpeg";
import DialFilm from "../../public/films_dial.jpeg";
export const GamingAbout = () => {
  return (
    <div className={styles.gamingAbout}>
      <div className="bgVideo_container">
        <video className="bgVideo" autoPlay muted loop>
          <source src="/videos/gaming.mp4" type="video/mp4" />
        </video>
      </div>

      <div className={styles.gamingAbout__title}>
        <h1>Gaming! 🎮</h1>
      </div>
      <div className={styles.gamingAbout__content}>
        <div className={styles.gamingAbout__content__one}>
          <div>
            Yes! That's my gameplay in the background! I am a sniper in all
            first person shooting games! Have you shot 360 degree trick shots? I
            have! My favorite game is Call Of Duty! I have a streak of 12 times+
            legendary. Though it is the way I pass my time when I do nothing, I
            feel sniping requires a lot of concentration and is not everyone's
            cup of tea!
          </div>
          <div className={styles.gamingAbout__card}>
            <FlippableCard
              bgImage={MultiverseFilm}
              title="Multiverse"
              description="This is my attempt at a fully fledged Multiverse short film on 0 budget"
              btnText="Watch Multiverse!"
              btnLink="/"
            />
          </div>
        </div>

        <div className={styles.gamingAbout__content__two}>
          <div>
            The best part about gaming is the accuracy, concentration and
            problem solving skills it takes to get through the roadblocks. If
            you play Call of Duty on the weekends, count me in. <b>1v1</b>?
          </div>
          <div className={styles.gamingAbout__card}>
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
