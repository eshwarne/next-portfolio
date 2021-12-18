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
      <Link href={routePath}>
        <a className={styles.externalButton__btn}>{content}</a>
      </Link>
    </div>
  );
};
