import * as THREE from 'three';
import {useRef, useState} from "react";
import {extend, useFrame} from "@react-three/fiber";
import {Mesh, MeshBasicMaterial, SphereGeometry} from "three";

extend({SphereGeometry, Mesh, MeshBasicMaterial})

const Earth = () => {

    const [rotate, setRotate] = useState<boolean>(true);

    const earthRef = useRef<THREE.Mesh>(null);

    const radius: number = 2;
    const earthTexture: THREE.Texture = new THREE.TextureLoader().load('textures/body/earth.jpg');

    useFrame(() => {
        if (earthRef.current && rotate) {
            earthRef.current.rotation.y += 0.02
        }
    })

    return (
        <>
            <mesh ref={earthRef}
                  receiveShadow={true}
                  onPointerOver={event => setRotate(false)}
                  onPointerOut={event => setRotate(true)}>
                <sphereGeometry args={[radius]}/>
                <meshBasicMaterial map={earthTexture}/>
            </mesh>
        </>
    )
}

export default Earth