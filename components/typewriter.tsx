import {useThreeContext} from "../context/threeprovider";
import {useEffect, useState} from "react";
import styles from '../styles/components/Typewriter.module.css'

const Typewriter = () => {

    const [displayedText, setDisplayedText] = useState<string>('');
    const [currentText, setCurrentText] = useState<string>('');
    const [typewriteTimeout, setTypewriteTimeout] = useState<NodeJS.Timeout>();

    const [cursor, setCursor] = useState<number>(0);

    const threeContext = useThreeContext();

    useEffect(() => {
        console.log(cursor, displayedText, currentText, threeContext.banner)
        if (cursor <= currentText.length) {
            setTypewriteTimeout(setTimeout(() => setDisplayedText((displayedText) => displayedText + currentText.charAt(cursor)), 60));
            setCursor((cursor) => cursor + 1);
        }
    },[currentText, displayedText]);

    useEffect(() => {
        if (typewriteTimeout) {
            clearTimeout(typewriteTimeout)
        }
        setDisplayedText('');
        setCursor(0);
        setCurrentText(threeContext.banner);
    }, [threeContext.banner]);

    return (
        displayedText === '' ? <p><em>&nbsp;</em></p> : <p className={styles.typewriter}><em>{displayedText}</em></p>
    )
}

export default Typewriter;