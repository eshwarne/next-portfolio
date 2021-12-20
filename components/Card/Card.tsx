import styles from "./Card.module.scss";
import Image from "next/image";
import { ExternalButton } from "../ExternalButton/ExternalButton";

type CardPropsType = {
  bgImage: StaticImageData;
  bgPosition?: string;
  title: string;
  description: string;
  btnText?: string;
  btnLink?: string;
};
export const FlippableCard = ({
  bgImage,
  bgPosition,
  title,
  description,
  btnLink,
  btnText,
}: CardPropsType) => {
  return (
    <div className={`${styles.flippableCard}`}>
      <div
        className={`${styles.flippableCard__front} ${styles.flippableCard__face}`}
      >
        <Image
          className={styles.flippableCard__image}
          layout="fill"
          src={bgImage}
          objectFit="cover"
          objectPosition={bgPosition || "0 0"}
        />
      </div>
      <div
        className={`${styles.flippableCard__back}  ${styles.flippableCard__face}`}
      >
        <div className={styles.flippableCard__back__content}>
          <div className={styles.flippableCard__back__content__title}>
            {title}
          </div>
          <div className={styles.flippableCard__back__content__description}>
            {description}
          </div>
          {btnText && btnLink && (
            <div className={styles.flippableCard__back__content__button}>
              <ExternalButton routePath={btnLink} content={btnText} />
            </div>
          )}
        </div>
      </div>
    </div>
  );
};
