import Hero from "../components/hero";
import styles from '../styles/pages/Home.module.css';
import Link from "next/link";
import Image from "next/image";

import rust from "../public/icons/rust.svg";
import java from "../public/icons/java.svg";
import js from "../public/icons/js.svg";
import ts from "../public/icons/ts.svg";
import go from "../public/icons/golang.svg";
import python from "../public/icons/python.svg";

const Home = () => {

    return (
        <>
            <Hero/>
            <div className={'contentWrap'}>
                <section className={`${styles.homePanel} ${styles.reversed}`}>
                    <div>
                        <h3>Enterprise Applications Developer</h3>
                        <p>
                            I have been programming for the better part of a decade, and have worked on developing
                            scalable,
                            maintainable software for enterprise over the past two years. To learn more about my
                            experiences, check
                            out my <Link href={'/about-me'}>professional history</Link>!
                        </p>
                    </div>
                    <figure>
                        <Image width={640} height={410} alt={'Enterprise Software Picture'}
                               src={'/enterprise-software.png'}/>
                    </figure>
                </section>
                <section className={styles.homePanel}>
                    <div>
                        <h3>Language and Framework Knowledge</h3>
                        <p>
                            Over the years, I have been able to consume a wide depth and breadth of language and
                            framework
                            knowledge in the realms of Java, Go, Python, Javascript and Rust!
                        </p>
                    </div>
                    <figure>
                        <div className={styles.iconRotator}>
                            <div style={{animationDelay: "-1s"}}>
                                <Image width={75} height={75} style={{animationDelay: "-1s"}}
                                       alt={'Go Language'}
                                       src={go}/>
                            </div>
                            <div style={{animationDelay: "-2s"}}>
                                <Image width={75} height={75} style={{animationDelay: "-2s"}}
                                       alt={'Rust Language'}
                                       src={rust}/>
                            </div>
                            <div style={{animationDelay: "-3s"}}>
                                <Image width={75} height={75} style={{animationDelay: "-3s"}}
                                       alt={'Javascript Language'}
                                       src={js}/>
                            </div>
                            <div style={{animationDelay: "-4s"}}>
                                <Image width={75} height={75} style={{animationDelay: "-4s"}}
                                       alt={'Typescript Language'}
                                       src={ts}/>
                            </div>
                            <div style={{animationDelay: "-5s"}}>
                                <Image width={75} height={75} style={{animationDelay: "-5s"}}
                                       alt={'Java Language'}
                                       src={java}/>
                            </div>
                            <div style={{animationDelay: "-6s"}}>
                                <Image width={75} height={75} style={{animationDelay: "-6s"}}
                                       alt={'Python Language'}
                                       src={python}/>
                            </div>
                        </div>
                    </figure>
                </section>
                <section className={`${styles.homePanel} ${styles.reversed}`}>
                    <div>
                        <h3>Technical Values</h3>
                        <p>
                            In my experience, the core tenants to a great application are its ability to
                            be <em>performant</em>, <em>secure</em> and <em>maintainable</em>. When culminated and
                            technically expressed within an application, it leads to both an excellent user and
                            developer
                            experience, while ensuring that the user can confidently engage with it without the fear of
                            exposing sensitive data. That is why I always ensure that when I deploy code,
                            it thoroughly expresses these core technical values.
                        </p>
                    </div>
                    <figure>
                        <div className={styles.values}>
                            <Image width={100} height={100} alt={'Maintenance'} src={'/web-maintenance.png'}/>
                            <Image width={100} height={100} alt={'Rocket'} src={'/rocket.png'}/>
                            <Image width={100} height={100} alt={'Security'} src={'/security.png'}/>
                        </div>
                    </figure>
                </section>
            </div>
        </>
    )
}

export default Home
