import {graphqlClient} from "../../graphql/graphql-client";
import parse from 'html-react-parser'
import styles from '../../styles/pages/Blog.module.css'
import {useEffect} from "react";

const Post = ({message}) => {

    return (
        <section className={`${styles.blog} contentWrap`}>
            <h1>{message.post.title}</h1>
            <h2>{message.post.subtitle}</h2>
            <p><em>{new Date(message.post.publishedAt).toLocaleString()}</em></p>
            <img alt={'Post Image'} src={message.post.headerImage?.url ?? ''}/>
            <div className={styles.blogContent}>
                {parse(message.post.content.html)}
            </div>
        </section>
    )
}

export const getServerSideProps = async (context) => {

    const slug: string = context.params.slug

    const query = `
        query getPost($slug:String!) {
            post(where:{slug:$slug}) {
                slug
                publishedAt
                slug
                subtitle
                title
                updatedAt
                headerImage {
                    url
                }
                publishedBy {
                    name
                }
                content {
                    html
                }
            }
        }`;


    const blog = await graphqlClient.request(query, {slug});

    if (blog.post) {
        return {
            props: {
                message: blog
            }
        };
    } else {
        return {
            notFound: true
        }
    }
}

export default Post;