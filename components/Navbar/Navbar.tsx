import styles from "./Navbar.module.scss"
export function Navbar(){
    return(
        <nav className={styles.nav}>
          <div>
            <h1 className={styles.logo}>Eshwar Sundar</h1>
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