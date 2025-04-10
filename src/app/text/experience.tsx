import styles from "./contents.module.css";
export const experience = () => {
    return (
        <div className={styles.contents}>
        <h1>Experience</h1>
                
                <h2>Work Experience</h2>
                        
                    <div className={styles.text_left_and_right}><h3>Software Engineer/AI Engineer</h3><h4>Diesl.ai - October 2024 - March 2025</h4></div>
                        <p>My girlfriend and I decided to move out of Vermont, to Colorado, so I was in need of a job. A good friend of ours got me in touch with a startup, Diesl.ai. Loving the idea of, and accepting the risks of, working for a startup. I jumped on board as soon as I could. Working for a startup gave me really quick exposure to the full breadth of the software solution thus far along with giving really good control over the solutions we developed. Unfortunately the company had to lay off all of its contract employees, otherwise I would be developing for them to this day. Diesl.ai allowed me views quite a bit deeper into the AI space along with many more modern workflows such as Kubernetes and cloud management via Azure. I was also responsible for the more complex AI solutions we were developing and was able to really press into topics and problems that are at the edge of current understanding and practices. I also worked quite a bit on our front end and backend solutions and maintained databases and pods on our clusters.</p>
                        <br></br>
                        <p>Skills:</p>
                        <ul>
                            <li>Extensive python development, primarily creating AI solutions revolving around document comparison and document extraction. Experience using OCR, RAG, and basic prompting techniques</li>
                            <li>Experience with Azure cloud tools such as Service Bus, Document intelligence, WebPubSub, and cloud based AI solutions</li>
                            <li>Experience in Java Spring Boot backend and Next.js front end </li>
                            <li>Designed and maintained several Postgres Databases</li>
                            <li>Extensive Docker experience using Docker compose, Nvidia Cuda Toolkit Integration, Pod management in Kubernetes, and inter container communications in a dev, prod, and staging environment</li>
                        </ul>
                        
                        
                    <div className={styles.text_left_and_right}><h3>Manufacturing/Process Engineer </h3><h4>OnLogic - Burlington, VT - September 2018 - November 2024</h4></div>
                        <p>{"This is by far my longest working role. I started my career as a production technician manufacturing computers. I significantly raised the bar in just about every positions I on the assembly line and proved myself as driven employee. I was quickly given more and more responsibility within the department and company as I became the first lead production technician. This essentially made me more directly responsible for the output of the assembly line and managing the various flex positions to ensure as smooth as a work flow as possible. I also started handling production readiness of any and all new products that were introduced. Creating new work instructions for the assembly line to follow along with maintaining/upgrading existing ones. After that I started creating software solutions, mainly on weekends, to increase velocity or quality within the assembly process. Tools such as part picking verification and BIOS flash drive automation. After this I was tasked with overhauling our product introduction process. At the time this was just a google sheet everyone edited and it made changes and KPI tracking difficult for our project managers. This was a full scale solo project on bare metal hardware that leveraged a PHP/MySQL/Vanilla JS setup to create a system for managing all of these parts. It also had built in functionality to allow users to associate custom tasks to products, product families, and component types. It also featured KPI tracking to better predict flow of products and identify bottlenecks. Shortly after this project I started developing a project that would automate testing interactions with computers using USB OTG support on raspberry PI's to automate tasks such as keyboard or mouse inputs. Unfortunately this never left the POC phase as I just did not have the capacity between nights and weekends to make a mature solution. Fortunately our IT team had a very similar project in the works, though it would take them years to actually deliver it due to competing company priorities. I did oversee the production readiness of this project to ensure that it was meeting the needs of our manufacturing team. Eventually I was given the Manufacturing Engineer title, first at the company, as I was just doing so many tasks beyond my scope as a technician that the company felt I deserved a more accurate title. With this also came more quality responsibilities that included managing quality KPI's, providing more customer support directly, and handling all production related improvements and corrective actions. This eventually extended, when our process engineer moved on from the company, to company wide process improvements and corrective actions. I also participated in customer technical calls and quality audits. I also traveled several times to our Netherlands office to assist in training the production team to better align practices between the two sites. All of these systems we managed on a multi-VM fallback setup with just about everything made in house to keep the latency as low as possible as seconds on the production line can cost a lot of money. With a couple offshoot IOT devices and compute machines for developing AI models. At this point I also started work with a co-worker as a indispensable collaborator developing full scale dev ops software for our production line. This included much more complex tools including dynamic travelers (something that travels with every system so that the techs know what steps are needed), Warehouse picking tools, Capacity management tools, Schedule capacity planning, Additional manufacturing tracking using NFC, AI Visions systems for accessory/picking verification. we were also responsible for the working condition and upgrades to the assembly line. The majority of our systems were either pneumatic or belt driven, so this required machining parts, purchasing off the shelf components, 3D printing where we could, and getting a bit creative with improvements that we could keep within budget. "}</p>
                        <br></br>
                        <p>Skills:</p>
                        <ul>
                            <li>Extensive Python, Javascript/React/Next.js, PHP, HTML/CSS, G-script, MySQL/Postgres, Docker, Ansible, C#, EFI/DOS scripting, and Linux Server Management experience</li>
                            <li>An ability to create software that is fast, flexible, and meets the needs of the end user in really short dev cycles was an essential skill.</li>
                            <li>The ability to wear many, many, hats within a work day has given me great context switching ability and stress management</li>
                            <li>Significant experience in manufacturing has allowed me to have a really good understanding of operational flow, pain points, and how to scale up and down production to match expected capacity</li>
                            <li>Leadership Skills, from directly leading the operations team output, to taking a multi-day leadership training class within the company. I developed many skills to be a better leader and am capable of giving and receiving direct and fair feedback</li>
                            <li>Process engineering included continuous improvements, especially to our assembly line, to identify bottle necks and wasted capacity. This did extend beyond operations though and I was directly involved in our Engineering, Sales, Product Management, and IT teams</li>
                            <li>Corrective action ownership required me to be responsible for revamping what the company should be prioritizing the most while putting pressure on various departments and individuals to create real change within the company for the sake of improvements</li>
                            <li>KPI evaluation meant that I have spent a lot of time analyzing throughput of a number of different metrics. From support tickets, to manufacturing flow, to new product enablement</li>
                            <li>Directly involved with the Engineering department to determine optimized designs for assembly</li>
                            <li>Assisted in creating AI solutions for manufacturing, including optimization models for production assembly time and computer vision systems</li>
                            <li>{"Created work instructions for manufacturing using Adobe and Affinity products, this required designs that follow UI/UX standards that meet the \"correct\" amount of information "}</li>
                        </ul>
                        <div className={styles.text_left_and_right}><h3>IT Internship </h3><h4>WSFS Bank - Wilmington, DE - Summer 2016</h4></div>
                        <p>An IT role for customer support within the company as well as assisting in large scale networking and desktop management after the acquisition of another company. I mostly accomplished tasks independently and was handed increasingly complex projects to accomplish during my time</p>
                        <br></br>
                        <p>Skills:</p>
                        <ul>
                            <li>Extensive hardware experience in IT support, such as completing tickets, working with users to help resolve various issues, and giving insight into some of the larger scale deployment of workstations</li>
                            <li>Created an automated system for driver deployment (it was completely manual beforehand)</li>
                            <li>Did basic hardware swapping such as hard drive replacement and RAM upgrades</li>
                            <li>Determined solutions based on user related issues</li>
                            <li>Implemented network infrastructure in a new building which mainly included re-patching a server rack and wiring work stations throughout the building</li>
                        </ul>
                        <div className={styles.text_left_and_right}><h3>Networking Internship </h3><h4> Berkley Technology Services – Wilmington, DE - Summer 2015</h4></div>
                        <p>Summer internship working within the Networking space, This taught me a lot of information around IPv4/6 protocols and other various networking information. My primary task whilst working there was maintenance on all of the access points company wide.</p>
                        <br></br>
                        <p>Skills:</p>
                        <ul>
                            <li>Basic automation development to speed up login, diagnostics, and other repeated steps during evaluation of hundreds of switches</li>
                            <li>Learning a good bit of information about networking structures on a large scale</li>
                            <li>Learning various protocols and what they are useful for</li>
                        </ul>
                        <h2>Education</h2>
                
                        
                    <div className={styles.text_left_and_right}><h3>University of Vermont, Burlington VT</h3><h4>Graduated In 2018 with a bachelors in Computer Science and a Minor in Math</h4></div>
                        
                        <p>Started my undergrad as a Electrical Engineer and still participate in Hobbyist projects including electrical and mechanical design. I still pursued Math as it is also very helpful for some of the more complex software engineering projects.</p>
                        <br></br>
                        <p>Skills:</p>
                        <ul>
                            <li>Baseline knowledge of numerous programming languages and concepts (Java, Python, C/C++, SQL, JavaScript/PHP/HTML/CSS)</li>
                            <li>Some more complex theoretical based classes such as running state management, proofs, logic comparisons, statistical analysis, and machine level code and understanding of the hardware itself</li>
                            <li>Higher level math classes such as Differential Equations and Linear Algebra</li>
                        </ul>
                        <div className={styles.text_left_and_right}><h3>Leland & Gray High School, Townshend VT</h3><h4>Graduated 2014</h4></div>
                        
                        <p>I excelled at math and programming in high school and was one of the 2 students in the schools highest level of mathematics (calculus). I also mentored other students on programming as there was no teacher with enough technical knowledge to teach it at my high school. This is also when I started building computers for myself and others as a side hobby</p>
                    
                    
        </div>
    )
};