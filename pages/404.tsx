import {useEffect} from "react";

const NotFound = () => {

    useEffect(() => {
        document.title = 'You\'re Lost!'
    })

    // TODO: Make a custom error page using 3JS with Astronaut lost in space
    return <p>Could not find page</p>
}

export default NotFound