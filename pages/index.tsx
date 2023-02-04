import Head from 'next/head'
import styles from '../styles/pages/Home.module.css'
import Earth from "../components/earth";
import {Canvas, extend} from "@react-three/fiber";
import Header from "../components/header";
import * as THREE from 'three';
import {useContext, useEffect, useState} from "react";
import Social from "../components/social";
import Typewriter from "../components/typewriter";
import {useThreeContext} from "../context/threeprovider";

const Home = () => {

    const threeContext = useThreeContext();

    const [camera, setCamera] = useState<THREE.Camera>(new THREE.Camera);

    const lightPosition: THREE.Vector3 = new THREE.Vector3(12, 1, 3)

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
                    <pointLight position={lightPosition}/>
                    <Header/>
                    <Earth/>
                    {threeContext.banner !== '' ?
                        <Typewriter text={threeContext.banner} time={100} position={new THREE.Vector3(2.5, -1, 1.5)}/>
                        :
                        <>
                            <Social path={'icons/linkedin.svg'}
                                    link={'https://www.linkedin.com/in/chad-cotton-1b1896197/'}
                                    position={new THREE.Vector3(6, 3, 0)} rotation={new THREE.Vector3(1, 1, 1)}/>
                            <Social path={'icons/youtube.svg'}
                                    link={'https://www.youtube.com/channel/UCwD-1ZWGinHVb6xN1k6j5bw'}
                                    position={new THREE.Vector3(6, 3, 0)} rotation={new THREE.Vector3(1, 1, 1)}/>
                            <Social path={'icons/github.svg'}
                                    link={'https://github.com/chadc1050'}
                                    position={new THREE.Vector3(6, 3, 0)} rotation={new THREE.Vector3(1, 1, 1)}/>
                        </>
                    }
                </Canvas>
            </main>
        </>
    )
}

export default Home
