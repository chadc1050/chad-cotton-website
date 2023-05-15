import Header from "./header";
import Footer from "./footer";

const Wrapper = (props) => {
    return (
        <>
            <Header/>
            <main>
                {props.children}
            </main>
            <Footer/>
        </>
    )
}

export default Wrapper;