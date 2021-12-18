import styles from "./RouteButton.module.scss";
import Link from "next/link";
type RouteButtonPropsType = {
  content: string;
  routePath: string;
};
export const RouteButton = ({ content, routePath }: RouteButtonPropsType) => {
  return (
    <div className={styles.routeButton}>
      <Link href={routePath}>
        <a className={styles.routeButton__btn}>{content}</a>
      </Link>
    </div>
  );
};
