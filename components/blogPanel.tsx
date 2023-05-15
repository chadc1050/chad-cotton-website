import Link from "next/link";
import styles from '../styles/components/BlogPanel.module.css';

const BlogPanel = ({post}) => {
    return (
        <Link key={post.slug} className={styles.blogPanel} href={'/blog/' + post.slug}>
            <section>
                <img alt={'Post Thumbnail'} src={post.thumbnail?.url}/>
                <div>
                    <h2>{post.title}</h2>
                    <h3>{post.publishedBy.name}</h3>
                    <div className={"inline"}>
                        <h4>Published: {new Date(post.publishedAt).toLocaleString()}</h4>
                        <h4>Updated: {new Date(post.updatedAt).toLocaleString()}</h4>
                    </div>
                    <p>{post.description}</p>
                </div>
            </section>
        </Link>
    )
}

export default BlogPanel;