import type {AppProps} from 'next/app'
import {ThreeProvider} from "../context/threeprovider";
import '../styles/globals.css'
import Wrapper from "../components/wrapper";
import SEO from "../components/seo";

const App = ({Component, pageProps}: AppProps) => {
    return (
        <>
            <SEO/>
            <ThreeProvider>
                <Wrapper>
                    <Component {...pageProps} />
                </Wrapper>
            </ThreeProvider>
        </>
    )
}

export default App;
