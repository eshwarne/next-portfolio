import styles from "./Navbar.module.css"
export function Navbar(){
    return(
        <nav className={styles.nav}>
          <div className={styles.logo}>
            <h1>Eshwar Sundar</h1>
          </div>
          <div className={styles.nav__button_group}>
            <li className={styles.nav__item}>Home</li>
            <li className={styles.nav__item}>About</li>
            <li className={styles.nav__item}>Projects</li>
            <li className={styles.nav__item}>Skills</li>
          </div>
        </nav>
    )
}