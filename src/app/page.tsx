import Image from "next/image";
import styles from "./page.module.css";
import { experience } from "./text/experience";
import { projects } from "./text/projects";
import Link from 'next/link'
import { resume } from "./text/resume";

export default function Home() { 
  const sections = [
    {
      name:"Experience",
      text: experience(),
    },{
      name: "Resume",
      text: resume()
    },{
      name:"Projects",
      text: projects(),
    }
  ]
  return (
    <div className={styles.page}>
      <div className={styles.name_container}>
        <Image
          src="/headshot_1.jpg"
          alt="headshot"
          width={853}
          height={1279}
          layout="responsive"
        />
        <h1>Nathan Laning</h1>
        <p>nlaning15@gmail.com</p>
        <p>Software Developer</p>
        <a href={"https://github.com/https://www.linkedin.com/in/nathan-laning-6b3a30b4/"}>LinkedIn</a>
        <br></br>
        <a href={"https://github.com/NathanLaning"}>GitHub</a>
        <div className={styles.nav}>
        {
          sections.map((item)=>{
            return(
              <Link 
                style={{ textDecoration: 'none' }}
                href={"/#"+item.name}
                key={item.name}
                passHref
              >
                <h1 key={item.name}>{item.name}</h1>
              </Link>
            )
          })
        }
        </div>
      </div>
      <Image 
        src="/s_pano_4725_2.jpg" 
        alt="photo-mountains-switzerland-4725"
        // layout="responsive"
        width={4974}
        height={1578}
        className={styles.backdrop_photo}
      />
      <div className={styles.top_gradient_cover}></div>
      <div className={styles.content_container}>
        {
          sections.map((item, number)=>{
            return (
              <div 
                key={item.name} 
                id={item.name}
              >
                {item.text}
                {sections.length!==number+1?<div className={styles.divider}></div>:null}
              </div>
              
            )
          }
          )
        }
        </div>
      <div className={styles.bottom_gradient_cover}></div>

    </div>
  );
}
