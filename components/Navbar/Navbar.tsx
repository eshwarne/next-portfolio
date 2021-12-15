import styles from "./Navbar.module.scss";
export function Navbar() {
  return (
    <nav className={styles.nav}>
      <div>
        <h1 className={styles.logo}>Eshwar Sundar</h1>
      </div>
      <div className={styles.nav__button_group}>
        <li className={styles.nav__item}>
          <a href="#home">Home</a>
        </li>
        <li className={styles.nav__item}>
          <a href="#about">About</a>
        </li>
        <li className={styles.nav__item}>
          <a href="#projects">Projects</a>
        </li>
        <li className={styles.nav__item}>
          <a href="#skills">Skills</a>
        </li>
      </div>
    </nav>
  );
}
