import Head from "next/head";
import {useEffect, useState} from "react";
import slug from "../pages/blog/[slug]";

const SEO = () => {

    const [title, setTitle] = useState<string>('Chad Cotton');

    useEffect(() => {

        let pathComponents = window.location.pathname.split("/");
        let slug = pathComponents.pop();

        if (slug) {

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

            {/*OG Graph TODO: This needs to be updated by the page for proper sharing of content*/}
            <meta property={'og:title'} content={"Chad Cotton | Personal Website"}/>
            <meta property={'og:url'} content={"https://www.chadpcotton.dev/"}/>
            <meta property={'og:description'} content={"Hello! I am Chad Cotton, a Software Developer from Oklahoma City, Oklahoma!"}/>
            <meta property={'og:locale'} content={"en_US"}/>
            <meta property={'og:site:name'} content={"Chad Cotton Personal Website"}/>
            <meta property={'og:image'} content={"https://media.graphassets.com/xHIjDAxTEmuNnEyaHBIU"}/>
            <meta property={'og:image:width'} content={"512"}/>
            <meta property={'og:image:height'} content={"512"}/>
        </Head>
    )
}

export default SEO;