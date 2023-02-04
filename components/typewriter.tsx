import * as THREE from "three";
import React, {useEffect, useState} from "react";
import {Html} from "@react-three/drei";

const Typewriter = ({text, time, position}: { text: string, time: number, position: THREE.Vector3 }) => {

    const [currentText, setCurrentText] = useState<string>('')

    useEffect(() => {
        let current = ''
        for (let cursor = 0; cursor < text.length; cursor++) {
            setTimeout(() => {
                current += text.at(cursor)
                setCurrentText(current)
            }, time)
        }
    }, [text, time])

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