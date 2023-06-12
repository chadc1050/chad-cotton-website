import React from "react";
import styles from '../styles/components/Header.module.css'
import Link from "next/link";

const Header = () => {

    return (
        <header className={styles.header}>
            <nav>
                <ol>
                    <li><Link href={'/'}>Home</Link></li>
                    <li><Link href={'/about-me'}>About Me</Link></li>
                    <li><Link href={'/blog'}>Blog</Link></li>
                    <li><Link href={'/contact-me'}>Contact Me</Link></li>
                </ol>
            </nav>
        </header>
    )
}

export default Header;