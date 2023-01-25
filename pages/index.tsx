import Head from 'next/head'
import styles from '../styles/pages/Home.module.css'
import Earth from "../components/earth";
import {Canvas} from "@react-three/fiber";
import Header from "../components/header";
import {Vector3} from "three";
import * as THREE from 'three';

const viewerPosition: Vector3 = new THREE.Vector3(8, 2, 0);
const intensity: number = 0.5

const Home = () => {
    return (
        <>
            <Head>
                <title>Chad Cotton</title>
                <meta name="description" content="Hello! I am Chad Cotton, a Software Developer from Oklahoma City, Oklahoma!"/>
                <meta name="viewport" content="width=device-width, initial-scale=1"/>
                <link rel="icon" href="icons/icon.ico" type="image/x-icon" />
            </Head>
            <main className={styles.main}>
                <Canvas shadows={true} camera={{position: viewerPosition}}>
                    <pointLight position={viewerPosition}/>
                    <ambientLight intensity={intensity}>
                        <Header/>
                        <Earth/>
                        {/* TODO: Place Social components at bottom of v*/}
                    </ambientLight>
                </Canvas>
            </main>
        </>
    )
}

export default Home
