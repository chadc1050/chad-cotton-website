import {graphqlClient} from "../../graphql/graphql-client";
import {useEffect} from "react";
import BlogPanel from "../../components/blogPanel";

const Blog = ({message}) => {

    useEffect(() => {
        document.title = 'Blog';
    })

    return (
        <section>
            <h1 className={'sectionHeader'}>Blog</h1>
            <div>
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
                updatedAt
                thumbnail {
                    url
                }
                publishedBy {
                    name
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