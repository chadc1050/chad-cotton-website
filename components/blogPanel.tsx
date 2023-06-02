import Link from "next/link";
import styles from '../styles/components/BlogPanel.module.css';

const BlogPanel = ({post}) => {
    return (
        <section className={styles.blogPanel}>
            <h2>
                <Link href={'/blog/' + post.slug}>{post.title}</Link>
            </h2>
            <h3>
                <Link href={'/blog/' + post.slug}>{post.subtitle}</Link>
            </h3>
            <div className={'shake'}>
                <div className={'inlineFlex'}>
                    <Link href={'/about-me'}>
                        <img alt={'Post Thumbnail'} src={post.authorThumbnail?.url}/>
                    </Link>
                    <Link href={'/about-me'}>
                        <p>{post.publishedBy.name}</p>
                        <p><em>{new Date(post.publishedAt).toLocaleDateString()}</em></p>
                    </Link>
                </div>
            </div>
            <div>
            </div>
            <p>{post.description}</p>
            <div className={'fancyLink marginBottom'}>
                <Link href={'/blog/' + post.slug}>Read More</Link>
            </div>
        </section>
    )
}

export default BlogPanel;