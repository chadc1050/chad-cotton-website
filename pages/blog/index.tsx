import {graphqlClient} from "../../graphql/graphql-client";
import BlogPanel from "../../components/blogPanel";
import {GetServerSidePropsContext} from "next";

const Blog = ({message}) => {

    return (
        <section>
            <h1 className={'sectionHeader'}>Blog</h1>
            <div className={'contentWrap'}>
                {message.posts.reverse((post) => new Date(post.createdAt)).map((post, idx: number) => BlogPanel({idx, post}))}
            </div>
        </section>
    )
}


export const getServerSideProps = async () => {

    const query = `
        query getPosts {
            posts {
                slug
                description
                createdAt
                slug
                subtitle
                title
                publishedBy {
                    name
                }
                authorThumbnail {
                    url
                }
            }
        }`;

    return {
        props: {
            message: await graphqlClient.request(query)
        }
    };
}

export default Blog;