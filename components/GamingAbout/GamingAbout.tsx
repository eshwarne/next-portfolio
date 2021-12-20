import FlippableCard from "../Card";
import styles from "./GamingAbout.module.scss";
import AssassinsCreed from "../../public/assassins_creed.jpeg";
import CallOfDuty from "../../public/call_of_duty.jpeg";
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
              bgImage={CallOfDuty}
              title="Call of Duty"
              description="You can find me playing this game most weekends!"
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
              bgImage={AssassinsCreed}
              bgPosition="10% 0%"
              description="I am a big Ezio fan! This game always had me thinking hard to solve puzzles. Highly reccomend this!"
              title="Assassin's Creed"
            />
          </div>
        </div>
      </div>
    </div>
  );
};
