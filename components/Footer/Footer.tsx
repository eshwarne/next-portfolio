import styles from "./Footer.module.scss";
import Image from "next/image";
import Tony from "../../public/tony_dog.jpeg";
export const Footer = () => {
  return (
    <div className={styles.footer}>
      <div className={styles.footer__main}>
        <div className={styles.footer__text}>
          Thanks for going through my website! I really appreciate it! Here is a
          photo of my dog Tony 🐕, celebrating his birthday, to make your day!
          🥳
        </div>
        <div className={styles.footer__image}>
          <Image
            alt="Tony, the golden retriever"
            layout="fill"
            src={Tony}
            objectFit="cover"
          />
        </div>
      </div>
      <div className={styles.footer__tech}>
        Made with 🤍 with NextJS and Sanity.IO
      </div>
    </div>
  );
};
