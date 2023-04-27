import * as THREE from 'three';
import {useMemo, useRef, useState} from "react";
import {extend, useFrame} from "@react-three/fiber";
import {Mesh, MeshBasicMaterial, SphereGeometry} from "three";
import Pin from "./pin";

extend({SphereGeometry, Mesh, MeshBasicMaterial})

const Earth = () => {

    const [hover, setHover] = useState<boolean>(false);

    const earthRef = useRef<THREE.Group>(null);

    const radius: number = 2;
    const earthTexture: THREE.Texture = useMemo(() => new THREE.TextureLoader().load('textures/body/earth.jpg'), []);

    useFrame(() => {
        if (earthRef.current && !hover) {
            earthRef.current.rotation.y += 0.02;
        }
    })

    return (
        <>
            <group ref={earthRef}>
                <mesh
                    receiveShadow={true}
                    castShadow={true}
                    onPointerOver={() => setHover(true)}
                    onPointerOut={() => setHover(false)}>
                    <sphereGeometry args={[radius]}/>
                    <meshPhongMaterial map={earthTexture}/>
                </mesh>
                <Pin color={'red'} position={new THREE.Vector3(-0.3, 1, 1.7)} rotation={new THREE.Euler(1, 0, 0)} text={"I currently live in Oklahoma City, Oklahoma..."}/>
                <Pin color={'green'} position={new THREE.Vector3(0.5, 1.25, 1.45)}
                     rotation={new THREE.Euler(0.9, 0, 0)} text={"I am originally from Leominster, Massachusetts..."}/>
            </group>
        </>
    )
}

export default Earth