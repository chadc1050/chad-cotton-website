import type {AppProps} from 'next/app'
import {ThreeProvider} from "../context/threeprovider";
import '../styles/globals.css'
const App = ({Component, pageProps}: AppProps) => {
    return (
        <ThreeProvider>
            <Component {...pageProps} />
        </ThreeProvider>
)
}

export default App;
