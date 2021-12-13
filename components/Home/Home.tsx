import styles from "./Home.module.scss"
import pictureSelf from "../../public/picture-self.jpeg"
import Image from "next/image"
export function Home(){
   return(
       <div className={styles.home}>
           <div className={styles.home__image}>
                <Image src={pictureSelf} layout="fill"/>
           </div>
           <div className={styles.home__description}>
               Hey! I am Eshwar. I make intuitive and performant user interfaces. 
               I can make your next idea come to life! Let's work together!
           </div>
           <div className={styles.socialMedia}>
               <li className={styles.socialMedia__item}>LinkedIn</li>
               <li className={styles.socialMedia__item}>Facebook</li>
               <li className={styles.socialMedia__item}>Instagram</li>
               <li className={styles.socialMedia__item}>Youtube</li>
           </div>
       </div>
   ) 
}