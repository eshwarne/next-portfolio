import styles from "./Home.module.scss"
import pictureSelf from "../../public/picture-self.jpeg"
import Image from "next/image"
import FacebookIcon from "../icons/Facebook"
import InstagramIcon from "../icons/Instagram"
import LinkedinIcon from "../icons/Linkedin"
import YoutubeIcon from "../icons/Youtube"

export function Home(){
   return(
       <div className={styles.home}>
           <div className={styles.home__image}>
                <Image src={pictureSelf} layout="fill"/>
           </div>
           <div className={styles.home__description}>
               Hey! I am Eshwar. I make intuitive and performant user interfaces. 
               I can make your next idea come to life! <br/>
               Let's work together!
           </div>
           <div className={styles.socialMedia}>
               <li className={styles.socialMedia__item}><a href="#"><LinkedinIcon /></a></li>
               <li className={styles.socialMedia__item}><a href="#"><YoutubeIcon /></a></li>
               <li className={styles.socialMedia__item}><a href="#"><InstagramIcon /></a></li>
               <li className={styles.socialMedia__item}><a href="#"><FacebookIcon /></a></li>
           </div>
       </div>
   ) 
}