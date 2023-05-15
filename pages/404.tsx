import {useEffect} from "react";

const NotFound = () => {

    useEffect(() => {
        document.title = 'You\'re Lost!'
    })

    // TODO: Make a custom error page.
    return (
        <>
            <h1>Could not find page!</h1>
        </>
    )
}

export default NotFound