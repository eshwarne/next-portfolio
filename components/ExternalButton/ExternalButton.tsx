import styles from "./ExternalButton.module.scss";
import Link from "next/link";
type ExternalButtonPropsType = {
  content: string;
  routePath: string;
};
export const ExternalButton = ({
  content,
  routePath,
}: ExternalButtonPropsType) => {
  return (
    <div className={styles.externalButton}>
      <a
        href={routePath}
        target="_blank"
        className={styles.externalButton__btn}
        rel="noreferrer"
      >
        {content}
      </a>
    </div>
  );
};
