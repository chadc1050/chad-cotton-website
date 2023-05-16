import styles from '../styles/components/Footer.module.css'
import Link from "next/link";
import React from "react";

const Footer = () => {
    return (
        <footer className={styles.footer}>
            <ol>
                <li><Link href={'/'}>Home</Link></li>
                <li><Link href={'/about-me'}>About Me</Link></li>
                <li><Link href={'/blog'}>Blog</Link></li>
                <li><Link href={'/contact-me'}>Contact Me</Link></li>
            </ol>
            <ol>
                <li>
                    <Link href={'https://www.linkedin.com/in/chad-cotton-1b1896197/'}>
                        <img src={'../icons/linkedin.svg'}alt={"LinkedIn"}/>
                    </Link>
                </li>
                <li>
                    <Link href={'https://github.com/chadc1050'}>
                        <img src={'../icons/github.svg'}alt={"LinkedIn"}/>
                    </Link>
                </li>
                <li>
                    <Link href={'https://www.youtube.com/@chadcotton5843'}>
                        <img src={'../icons/youtube.svg'}alt={"LinkedIn"}/>
                    </Link>
                </li>
            </ol>
            <p>&copy; 2023 Chad Cotton</p>
        </footer>
    )
}

export default Footer;