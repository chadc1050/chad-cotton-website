import Link from "next/link";
import styles from '../styles/components/Author.module.css'

const Author = ({name, imageUrl, date}: { name: string, imageUrl: string, date: string }) => {

    return (
        <div className={`${styles.author}`}>
            <div className={'shake'}>
                <div className={'inlineFlex'}>
                    <Link href={'/about-me'}>
                        <img alt={'Post Thumbnail'} src={imageUrl}/>
                    </Link>
                    <Link href={'/about-me'}>
                        <p>{name}</p>
                        <p><em>{new Date(date).toLocaleDateString()}</em></p>
                    </Link>
                </div>
            </div>
        </div>
    )

}

export default Author;