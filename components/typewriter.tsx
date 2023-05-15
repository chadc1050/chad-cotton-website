import {useThreeContext} from "../context/threeprovider";
import {useCallback, useEffect, useState} from "react";
import styles from '../styles/components/Typewriter.module.css'

const Typewriter = () => {

    const [displayedText, setDisplayedText] = useState<string>('');
    const [currentText, setCurrentText] = useState<string>('');

    const threeContext = useThreeContext();

    useEffect(() => {
        setDisplayedText(() => '');
        setCurrentText(() => threeContext.banner);
    },[threeContext.banner])

    useEffect(() => {
        typewrite();
    }, [currentText])

    let cursor = 0;

    const typewrite = () => {
        //TODO: Fix issue when someone clicks really fast on pins
        if (currentText === threeContext.banner && cursor <= currentText.length) {
            setDisplayedText((displayedText) => displayedText + currentText.charAt(cursor - 1));
            cursor++;
            setTimeout(typewrite, 60);
        }
    };

    return (
        displayedText !== ''
            ? <p className={styles.typewriter}><em>{displayedText}</em></p>
            : <></>
    )
}

export default Typewriter;