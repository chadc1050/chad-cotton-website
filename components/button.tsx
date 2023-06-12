import Link from "next/link";
import styles from "../styles/components/Button.module.css"

const Button = ({text, link}: {text: string, link: string}) => {
    return (
        <Link className={styles.button} href={link}>
            <div>{text}</div>
        </Link>
    )
}

export default Button;