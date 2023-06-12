import Link from "next/link";
import styles from '../styles/components/BlogPanel.module.css';
import Author from "./author";

const BlogPanel = ({idx, post}) => {
    return (
        <section key={idx} className={styles.blogPanel}>
            <h2>
                <Link href={'/blog/' + post.slug}>{post.title}</Link>
            </h2>
            <h3>
                <Link href={'/blog/' + post.slug}>{post.subtitle}</Link>
            </h3>
            <Author name={post.publishedBy.name} date={post.createdAt} imageUrl={post.authorThumbnail?.url}/>
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