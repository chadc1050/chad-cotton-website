import * as THREE from "three";
import React, {useEffect, useState} from "react";
import {Html} from "@react-three/drei";

const Typewriter = ({text, time, position}: { text: string, time: number, position: THREE.Vector3 }) => {

    const [currentText, setCurrentText] = useState<string>('')


    useEffect(() => {
        typeWriter()
    }, [])

    var i = 0;
    var speed = 100; /* The speed/duration of the effect in milliseconds */

    function typeWriter() {
        if (i < text.length) {
            console.log(currentText)
            const current = currentText
            setCurrentText(current + text.charAt(i));
            i++;
            setTimeout(typeWriter, speed);
        }
    }

    return (
        <Html
            position={position}
            style={{
                color: "white",
                display: "block",
                fontSize: "14px"
            }}>
            <h1>{currentText}</h1>
        </Html>
    )
}

export default Typewriter;