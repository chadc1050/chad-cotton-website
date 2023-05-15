import {graphqlClient} from "../../graphql/graphql-client";
import parse from 'html-react-parser'
import {useEffect} from "react";
import styles from '../../styles/pages/Blog.module.css'

const Post = ({message}) => {

    useEffect(() => {
        document.title = message.post.title;
    })

    return (
        <section className={styles.blog}>
            <h1>{message.post.title}</h1>
            <h2>{message.post.subtitle}</h2>
            <h3>{message.post.publishedBy.name}</h3>
            <div className={"inline"}>
                <h4>{new Date(message.post.publishedAt).toLocaleString()}</h4>
                <h4>{new Date(message.post.updatedAt).toLocaleString()}</h4>
            </div>
            <div>
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
                publishedBy {
                    name
                }
                content {
                    html
                }
            }
        }`;

    return {
        props: {
            message: await graphqlClient.request(query, {slug})
        }
    };
}

export default Post;