import Hero from "../components/hero";
import styles from '../styles/pages/Home.module.css';
import Link from "next/link";

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
                        <img alt={'Enterprise Software Picture'} src={'../enterprise-software.png'}/>
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
                                <img style={{animationDelay: "-1s"}} alt={'Go Language'} src={'../icons/golang.svg'}/>
                            </div>
                            <div style={{animationDelay: "-2s"}}>
                                <img style={{animationDelay: "-2s"}} alt={'Rust Language'} src={'../icons/rust.svg'}/>
                            </div>
                            <div style={{animationDelay: "-3s"}}>
                                <img style={{animationDelay: "-3s"}} alt={'Javascript Language'}
                                     src={'../icons/js.svg'}/>
                            </div>
                            <div style={{animationDelay: "-4s"}}>
                                <img style={{animationDelay: "-4s"}} alt={'Typescript Language'}
                                     src={'../icons/ts.svg'}/>
                            </div>
                            <div style={{animationDelay: "-5s"}}>
                                <img style={{animationDelay: "-5s"}} alt={'Java Language'} src={'../icons/java.svg'}/>
                            </div>
                            <div style={{animationDelay: "-6s"}}>
                                <img style={{animationDelay: "-6s"}} alt={'Python Language'}
                                     src={'../icons/python.svg'}/>
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
                            <img alt={'Maintenance'} src={'../web-maintenance.png'}/>
                            <img alt={'Rocket'} src={'../rocket.png'}/>
                            <img alt={'Security'} src={'../security.png'}/>
                        </div>
                    </figure>
                </section>
            </div>
        </>
    )
}

export default Home
