import {graphqlClient} from "../../graphql/graphql-client";
import parse from 'html-react-parser'
import styles from '../../styles/pages/Blog.module.css'
import {useEffect} from "react";
import {GetServerSidePropsContext} from "next";
import Author from "../../components/author";

const Post = ({message}) => {

    return (
        <section className={`${styles.blog} contentWrap`}>
            <div className={styles.blogHeader}>
                <div className={'marginBottom'}>
                    <h1>{message.post.title}</h1>
                    <h2>{message.post.subtitle}</h2>
                    <Author name={message.post.publishedBy.name} date={message.post.publishedAt}
                            imageUrl={message.post.authorThumbnail?.url}/>
                </div>
                <img alt={'Post Image'} src={message.post.headerImage?.url ?? ''}/>
            </div>
            <div className={styles.blogContent}>
                {parse(message.post.content.html)}
            </div>
        </section>
    )
}

export const getServerSideProps = async (context: GetServerSidePropsContext) => {

    const slug = context.params?.slug;

    const query = `
        query getPost($slug:String!) {
            post(where:{slug:$slug}) {
                slug
                publishedAt
                slug
                subtitle
                title
                headerImage {
                    url
                }
                publishedBy {
                    name
                }
                authorThumbnail {
                    url
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