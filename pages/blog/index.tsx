import {graphqlClient} from "../../graphql/graphql-client";
import BlogPanel from "../../components/blogPanel";

const Blog = ({message}) => {

    return (
        <section>
            <h1 className={'sectionHeader'}>Blog</h1>
            <div className={'contentWrap'}>
                {message.posts.map((post) => BlogPanel({post}))}
            </div>
        </section>
    )
}


export const getServerSideProps = async (context) => {

    const query = `
        query getPosts {
            posts {
                slug
                description
                publishedAt
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