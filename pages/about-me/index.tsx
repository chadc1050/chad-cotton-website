import {useEffect} from "react";

const AboutMe = () => {

    useEffect(() => {
        document.title = 'About Me';
    })

    return (
        <>
            <h1>About Me</h1>
            <section>
                <h2></h2>
                <p></p>
                <h2>Software</h2>
                <p></p>
            </section>
        </>
    )
}

export default AboutMe;