import {useEffect} from "react";
import {useRouter} from "next/router";

const NotFound = () => {

    // TODO: Make a custom error page.

    const router = useRouter();

    useEffect(() => {
        router.replace("/404")
    }, [])

    return (
        <>
            <h1>Could not find page!</h1>
        </>
    )
}

export default NotFound