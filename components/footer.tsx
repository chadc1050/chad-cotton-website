import styles from '../styles/components/Footer.module.css'
import Link from "next/link";
import React from "react";

const Footer = () => {
    return (
        <footer className={styles.footer}>
            <ol>
                <li>
                    <div className={'fancyLink'}>
                        <Link href={'/'}>Home</Link>
                    </div>
                </li>
                <li>
                    <div className={'fancyLink'}>
                        <Link href={'/about-me'}>About Me</Link>
                    </div>
                </li>
            <li>
                <div className={'fancyLink'}>
                    <Link href={'/blog'}>Blog</Link>
                </div>
            </li>
            <li>
                <div className={'fancyLink'}>
                    <Link href={'/contact-me'}>Contact Me</Link>
                </div>
            </li>
        </ol>
    <ol>
        <li>
            <Link href={'https://www.linkedin.com/in/chad-cotton-1b1896197/'} target={'_blank'}>
                <img src={'../icons/linkedin.svg'} alt={"LinkedIn"}/>
            </Link>
        </li>
        <li>
            <Link href={'https://github.com/chadc1050'} target={'_blank'}>
                <img src={'../icons/github.svg'} alt={"LinkedIn"}/>
            </Link>
        </li>
        <li>
            <Link href={'https://www.youtube.com/@chadcotton5843'} target={'_blank'}>
                <img src={'../icons/youtube.svg'} alt={"LinkedIn"}/>
            </Link>
        </li>
    </ol>
    <p>&copy; 2023 Chad Cotton</p>
</footer>
)
}

export default Footer;