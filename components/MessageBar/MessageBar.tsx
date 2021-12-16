import { useState } from "react";
import styles from "./MessageBar.module.scss";
export const MessageBar = () => {
  const [isClosed, setIsClosed] = useState<boolean>(false);
  const getDisplayState = () => (isClosed ? "0" : "1");
  return (
    <div className={styles.messageBar} style={{ opacity: getDisplayState() }}>
      <div className={styles.messageBar__message}>
        If you find the website cool, feel free to reuse it. Made with 💝 using
        NextJS.{" "}
        <a
          href="https://github.com/eshwarne/next-portfolio"
          className={styles.link}
          target="_blank"
        >
          SOURCE CODE
        </a>
      </div>
      <div
        className={styles.messageBar__close_btn}
        onClick={() => setIsClosed(true)}
      >
        <a>X</a>
      </div>
    </div>
  );
};
