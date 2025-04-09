import Image from "next/image";
import styles from "./page.module.css";
import {About} from "./about";
export default function Home() {
  return (
    <div className={styles.page}>
      <div className={styles.name_container}>
        <Image
        src="/headshot_1.jpg"
        alt="headshot"
        width={853}
        height={1279}
        />
        <h1>Nathan Laning</h1>
        <p>nlaning15@gmail.com</p>
        <p>Software Developer</p>
        <div className={styles.nav}>
        <h1>About</h1>
        <h1>Portfolio</h1>
        <h1>Resume</h1>
      </div>
      </div>
      <Image 
        src="/s_pano_4725_2.jpg" 
        alt="photo-mountains-switzerland-4725"
        width={4974}
        height={1578}
        className={styles.backdrop_photo}
      />
      <div className={styles.gradient_cover}>
      </div>
      <div className={styles.contents}>
        <About></About>
      </div>

    </div>
  );
}
