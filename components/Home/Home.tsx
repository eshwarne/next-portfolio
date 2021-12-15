import styles from "./Home.module.scss";
import pictureSelf from "../../public/picture-self.jpeg";
import Image from "next/image";
import InstagramIcon from "../icons/Instagram";
import LinkedinIcon from "../icons/Linkedin";
import YoutubeIcon from "../icons/Youtube";
import GithubIcon from "../icons/Github";

export function Home() {
  return (
    <div className={styles.home}>
      <div className={styles.home__main}>
        <div className={styles.home__image}>
          <Image
            src={pictureSelf}
            alt="Eshwar Sundar photo"
            layout="fill"
            onMouseEnter={() => {
              document.getElementById("logo-text")?.classList.add("underlined");
            }}
            onMouseLeave={() => {
              document
                .getElementById("logo-text")
                ?.classList.remove("underlined");
            }}
          />
        </div>
        <div className={styles.home__description}>
          Hey! I am Eshwar. I make intuitive and performant user interfaces. I
          can make your next idea come to life! <br />
          Let's work together!
        </div>
        <div className={styles.socialMedia}>
          <li className={styles.socialMedia__item}>
            <a href="https://www.linkedin.com/in/eshwarne/" target="_blank">
              <LinkedinIcon />
            </a>
          </li>
          <li className={styles.socialMedia__item}>
            <a href="https://github.com/eshwarne/" target="_blank">
              <GithubIcon />
            </a>
          </li>
          <li className={styles.socialMedia__item}>
            <a href="https://www.youtube.com/c/EshwarNorthEast" target="_blank">
              <YoutubeIcon />
            </a>
          </li>
          <li className={styles.socialMedia__item}>
            <a href="https://www.instagram.com/eshwarne/" target="_blank">
              <InstagramIcon />
            </a>
          </li>
        </div>

        <div>
          <a href="#about" className={styles.home__main_button}>
            KNOW MORE!
          </a>
        </div>
      </div>
    </div>
  );
}
