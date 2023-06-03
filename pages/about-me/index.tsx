import Link from "next/link";
import styles from '../../styles/pages/AboutMe.module.css';

const AboutMe = () => {

    return (
        <>
            <h1>About Me</h1>
            <section className={`${styles.aboutMe} contentWrap`}>
                <h2>Professional Experience</h2>
                <h3><Link href={'https://www.hobbylobby.com/'} target={'_blank'}>Hobby Lobby</Link></h3>
                <h4>Software Developer</h4>
                <p><em>September 2022 - Present</em></p>
                <p>
                    Member of team responsible for architecting and integrating microservices into the company&apos;s
                    ECommerce ecosystem.
                </p>
                <ul>
                    <li>
                        Written several services in <Link href={'https://spring.io/'} target={'_blank'}>Spring Boot</Link> and <Link
                        href={'https://go.dev/'} target={'_blank'}>Go</Link> fulfilling
                        business requirements such as payment processing, product management, transactional emails, and
                        inventory management.
                    </li>
                    <li>
                        Regularly utilize <Link href={'https://aws.amazon.com/'} target={'_blank'}>AWS</Link> to create system
                        infrastructure using services such as <Link
                        href={'https://aws.amazon.com/sqs/'} target={'_blank'}>SQS</Link>, <Link
                        href={'https://aws.amazon.com/sns/'} target={'_blank'}>SNS</Link>, <Link
                        href={'https://aws.amazon.com/eventbridge/'} target={'_blank'}>EventBridges</Link> and <Link
                        href={'https://aws.amazon.com/lambda/'} target={'_blank'}>Javascript Lambdas</Link>.
                    </li>
                </ul>
                <h3><Link href={'https://www.pcienergysolutions.com/'} target={'_blank'}>PCI Energy Solutions</Link></h3>
                <h4>Junior Software Developer</h4>
                <p><em>January 2022 - September 2022</em></p>
                <p>
                    Responsible for designing, documenting, and creating new interfaces, processes, and workflows
                    for <Link href={'https://www.ercot.com/'} target={'_blank'}>ERCOT</Link> market entities to interact with the Texas
                    energy
                    grid.
                </p>
                <ul>
                    <li>
                        Spearheaded enhancements to client bid data import/submission workflow that were ubiquitously
                        well received by the end users, as it drastically simplified their workflows.
                    </li>
                    <li>
                        Regularly interfaced with and enhanced the firm’s <Link
                        href={'https://en.wikipedia.org/wiki/Jakarta_Enterprise_Beans#:~:text=EJB%20is%20a%20server%2Dside,processing%2C%20and%20other%20web%20services.'} target={'_blank'}>
                        Enterprise Java Beans (EJB)
                    </Link> framework to create or update product features.
                    </li>
                    <li>
                        Onboarded and trained several developers on development and product workflows, advocated for
                        them to implement <Link href={'https://en.wikipedia.org/wiki/SOLID'} target={'_blank'}>SOLID design
                        principles</Link>,
                        and adopt test-driven development.
                    </li>
                </ul>
                <h4>Software Development Intern</h4>
                <p><em>August 2021 - December 2021</em></p>
                <p>
                    Project-driven internship that focused on creating server-side logic to handle files containing
                    market data from <Link href={'https://www.iso-ne.com/'} target={'_blank'}>ISO-NE</Link>, <Link
                    href={'https://www.nyiso.com/'} target={'_blank'}>NYISO</Link>,
                    and <Link href={'https://www.pjm.com/'} target={'_blank'}>PJM</Link> market entities.
                </p>
                <ul>
                    <li>
                        Embraced <Link href={'https://en.wikipedia.org/wiki/Agile_software_development'} target={'_blank'}>Agile
                        Methodologies</Link> and
                        used Atlassian products to plan, track and communicate tasks.
                    </li>
                    <li>
                        Utilized concepts such as deserialization, thread-security, and design patterns to create an
                        efficient, maintainable, and intuitive interface for clients to upload their market data to the
                        application’s database.
                    </li>
                </ul>
            </section>
        </>
    )
}

export default AboutMe;