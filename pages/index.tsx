import Head from 'next/head'
import styles from '../styles/pages/Home.module.css'
import Earth from "../components/earth";
import {Canvas, useStore} from "@react-three/fiber";
import Header from "../components/header";
import {Vector3} from "three";
import * as THREE from 'three';
import {useEffect, useState} from "react";

const viewerPosition: Vector3 = new THREE.Vector3(8, 2, 0);
const intensity: number = 0.5

const Home = () => {

    const [camera, setCamera] = useState<THREE.Camera>(new THREE.Camera)

    useEffect(() => {
        const camera = new THREE.PerspectiveCamera(70, window.innerWidth / window.innerHeight, 0.1, 1000)
        camera.position.set(8, 2, 0)
        setCamera(camera)
    }, [])

    return (
        <>
            <Head>
                <title>Chad Cotton</title>
                <meta name="description"
                      content="Hello! I am Chad Cotton, a Software Developer from Oklahoma City, Oklahoma!"/>
                <meta name="author" content="Chad Cotton"/>
                <meta name="viewport" content="width=device-width, initial-scale=1"/>
                <meta charSet="utf-8"/>
                <link rel="icon" href="icons/icon.ico" type="image/x-icon"/>
            </Head>
            <main className={styles.main}>
                <Canvas shadows={true} camera={{position: camera.position}}>
                    <scene>
                        <pointLight position={viewerPosition}/>
                        <ambientLight intensity={intensity}>
                            <Header />
                            <Earth />
                            {/* TODO: Place Social components at bottom of v*/}
                        </ambientLight>
                    </scene>
                </Canvas>
            </main>
        </>
    )
}

export default Home
