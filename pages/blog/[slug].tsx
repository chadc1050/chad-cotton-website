import {graphqlClient} from "../../graphql/graphql-client";
import parse from 'html-react-parser'
import styles from '../../styles/pages/Blog.module.css'
import {useEffect} from "react";

const Post = ({message}) => {

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