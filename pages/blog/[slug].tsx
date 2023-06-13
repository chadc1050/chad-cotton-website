import {graphqlClient} from "../../graphql/graphql-client";
import parse from 'html-react-parser'
import styles from '../../styles/pages/Blog.module.css'
import {GetServerSidePropsContext} from "next";
import Author from "../../components/author";
import Image from "next/image";

const Post = ({message}) => {

    return (
        <section className={`${styles.blog} contentWrap`}>
            <div className={styles.blogHeader}>
                <div className={'marginBottom'}>
                    <h1>{message.post.title}</h1>
                    <h2>{message.post.subtitle}</h2>
                    <Author name={message.post.publishedBy.name} date={message.post.createdAt}
                            imageUrl={message.post.authorThumbnail?.url}/>
                </div>
                <Image width={720} height={540} alt={'Post Image'} src={message.post.headerImage?.url ?? ''}/>
            </div>
            <article className={styles.blogContent}>
                {parse(message.post.content.html)}
            </article>
        </section>
    )
}

export const getServerSideProps = async (context: GetServerSidePropsContext) => {

    const slug = context.params?.slug;

    const query = `
        query getPost($slug:String!) {
            post(where:{slug:$slug}) {
                slug
                description
                slug
                subtitle
                title
                createdAt
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