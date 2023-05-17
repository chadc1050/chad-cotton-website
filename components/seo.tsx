import Head from "next/head";
import {useEffect, useState} from "react";
import slug from "../pages/blog/[slug]";

const SEO = () => {

    const [title, setTitle] = useState<string>('Chad Cotton');

    useEffect(() => {

        let pathComponents = window.location.pathname.split("/");
        let slug = pathComponents.pop();

        if (slug !== '') {

            let title = slug.toLowerCase()
                .split("-")
                .map((word: string) => word.charAt(0).toUpperCase() + word.substring(1))
                .join(' ');

            setTitle(title);

        } else {
            setTitle('Chad Cotton')
        }
    }, [typeof window !== "undefined" && window.location.pathname])

    return (
        <Head>
            <title>{title}</title>
            <meta name="description" content="Hello! I am Chad Cotton, a Software Developer from Oklahoma City, Oklahoma!"/>
            <meta name="author" content="Chad Cotton"/>
            <meta name="viewport" content="width=device-width, initial-scale=1"/>
            <meta charSet="utf-8"/>
            <link rel="icon" href="icons/icon.ico" type="image/x-icon"/>
        </Head>
    )
}

export default SEO;