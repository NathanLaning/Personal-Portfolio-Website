import styles from "./contents.module.css";
import Image from "next/image";
import Link from 'next/link'
export const projects = () => {
    return (
        <div className={styles.contents}>
            <h1>Projects</h1>

            <h2>Software</h2>
               <p>{"Although the majority of my work experience is protected by the company I performed them for, I can discuss them at a high level here, and will include GitHub links to any that I can share"}</p>
                <h3>{"This Website!"}</h3>
                    <p>This website was creating for the sole purpose of job applications, however it is all self hosted from my own server and has DNS rounting and SSL certifications installed! It is pretty simple, but is made in Next.js on a linux machine with an Nginx load balancer!</p>
                    <p><a href={"https://github.com/NathanLaning/Personal-Portfolio-Website"}>GitHub Page</a></p>
                <h3>BIOS Flashing tool</h3>
                    <p>Although distributing is against some clause at my previous position, I feel confortable sharing photos of the application as I thought it turned out quite nice!</p>
                    <Image 
                        src="/qf_ss.png"
                        alt="QuickFlash!"
                        width={713}
                        height={509}
                        className={styles.portfolio_photo}
                    />
                    <p>This was written in a mix of C# (primarily for the ease of making a very pretty UI) and batch scripting (for its ease of use in terms of interacting with flash drives in Windows.) </p>
                <h3>Diesl.ai</h3>
                <p>{"Although I cannot show much code from my time at Diesl, as none of the repos are public, the site itself can be seen here: "}<a href="https://diesl.ai/">Diesl.ai</a>{". Most of the information on my contributions can be found in the "}
                    <Link 
                        style={{ textDecoration: 'none' }}
                        href={"/#experience"}
                        key="0"
                        passHref>
                    <a>Experience</a>
                </Link>{"section of this website. One particular project that took some tinkering, and is something I can talk freely about, is minimizing the size of docker images when working with the NVidia toolkit. These images started out somewhere in the neighborhood of ~18GB's per image. I was able to pull this number all the way down to about 4GB's by extracting only essential tools and rebuilding the entire link system to allow our OCR tools to interact with the toolkit as if it was installed. This was an enormous save on deployment time and overall cost. Additionally, this solution lacks readily available documentation and resources explaining how to do this. This presented a unique challenge, and I plan to share my approach and findings by writing a medium article."}</p>
                <h3>Normal Map Tool</h3>
                <p>Early on I was interested in working with 3D graphics. Nowadays much better versions of this type of software exist, but this was my first attempt at creating a normal map creation tool!</p>
                <p><a href={"https://github.com/NathanLaning/Normal-Map-Tool/tree/main"}>Github</a></p>
                <Image
                    src="/Normal_map_converter.png"
                    alt="Normal Map Tool"
                    width={1284}
                    height={663}
                    className={styles.portfolio_photo}
                />
            <h2>Other Projects and Hobbies!</h2>
            <h3>This Server!</h3>
            <p>The server that runs this site currently, among many other services, was a fun project because I wanted to have plenty of space and compute built into machine that was really built to just be rugged and dust proof</p>
            <Image
                src="/computer.jpg"
                alt="Server Sort Of?!?!"
                width={963}
                height={703}
                className={styles.portfolio_photo}
            />
            <p>The main reason this thing looks so wild is I procured a Titan for its high quantites of VRAM so that I could run pretty moderate sized AI models on this machine, along with any other number crunchy projects without bogging down my own machine. The extra space also allowed me to add some full size hard drives. Unsuprisingly all of this gets a little hot so there are a couple of fans strapped to it, like the one seen in the photo</p>
            <h3>Sewing projects!</h3>
            <p> A much more recent hobby of mine has been sewing gear. This includes bike bags, chalk bags for climbing, and gear for my dog, and fixing pretty much anything that breaks!</p>
            <Image
                src="/sewing.jpg"
                alt="Dog bag and Climbing Volume Backpack"
                width={4000}
                height={2000}
                className={styles.portfolio_photo}
            />
            <h3>Bikes Galore!</h3>
            <p>As an avid mountain biker I have built the majority of my own bikes at this point and take a lot of pride in maintaning them! I wont go into much detail as there are few parallels between these bikes and any potential jobs, but I feel it is reflective of my tinkerer mentallity and is something I am proud of!</p>
            <Image
                src="/bike1.jpg"
                alt="Nukeproof!"
                width={3857}
                height={2215}
                className={styles.portfolio_photo}
            />
            <Image
                src="/bike2.jpg"
                alt="Jeffsy!"
                width={3652}
                height={1954}
                className={styles.portfolio_photo}
            />
            <Image
                src="/bike3.jpg"
                alt="Session!"
                width={4080}
                height={3072}
                className={styles.portfolio_photo}
            />
        </div>
    )
};