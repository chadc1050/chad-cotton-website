import {Canvas} from "@react-three/fiber";
import Earth from "./earth";
import {useEffect, useState} from "react";
import * as THREE from "three";
import Button from "./button";
import styles from '../styles/components/Hero.module.css'
import Typewriter from "./typewriter";

const Hero = () => {

    const [camera, setCamera] = useState<THREE.Camera>(new THREE.Camera);

    const lightPosition: THREE.Vector3 = new THREE.Vector3(12, 1, 3)

    useEffect(() => {
        const camera = new THREE.PerspectiveCamera(70, window.innerWidth / window.innerHeight, 0.1, 1000)
        camera.position.set(4, 1, 0)
        setCamera(camera)
    }, [])

    return (
        <section className={styles.hero}>
            <div>
                    <div>
                        <h1>Chad Cotton</h1>
                        <h2>Software Developer</h2>
                    </div>
                    <Button text={'Who Am I?'} link={'/about-me'}/>
            </div>
            <div>
                <figure className={styles.earth}>
                    <Canvas shadows={true} camera={{position: camera.position}}>
                        <pointLight position={lightPosition}/>
                        <Earth/>
                    </Canvas>
                    <Typewriter />
                </figure>
            </div>
        </section>
    )
}

export default Hero;