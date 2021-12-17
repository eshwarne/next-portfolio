import styles from "./MoreAbout.module.scss";
export const MoreAbout = () => {
  return (
    <div className={styles.moreAbout}>
      <div className={styles.moreAbout__backBtn}>{"<"}</div>
      <div className={styles.moreAbout__gallery}>
        <div className={styles.moreAbout__gallery__title}>MORE ABOUT ME!</div>
        <div className={styles.moreAbout__gallery__caption}>
          I am really glad that you came to this page!
        </div>
      </div>
    </div>
  );
};
