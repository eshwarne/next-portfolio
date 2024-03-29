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
      <span className={styles.home__locator} id="home"></span>
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
            <a
              href="https://www.linkedin.com/in/eshwarne/"
              target="_blank"
              rel="noreferrer"
            >
              <LinkedinIcon />
            </a>
          </li>
          <li className={styles.socialMedia__item}>
            <a
              href="https://github.com/eshwarne/"
              rel="noreferrer"
              target="_blank"
            >
              <GithubIcon />
            </a>
          </li>
          <li className={styles.socialMedia__item}>
            <a
              href="https://www.youtube.com/c/EshwarNorthEast"
              rel="noreferrer"
              target="_blank"
            >
              <YoutubeIcon />
            </a>
          </li>
          <li className={styles.socialMedia__item}>
            <a
              href="https://www.instagram.com/eshwarne/"
              rel="noreferrer"
              target="_blank"
            >
              <InstagramIcon />
            </a>
          </li>
        </div>

        <div>
          <a href="#about" className={styles.home__main_button}>
            LET'S BEGIN!
          </a>
        </div>
      </div>
    </div>
  );
}
