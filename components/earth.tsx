import * as THREE from 'three';
import {useMemo, useRef, useState} from "react";
import {extend, useFrame} from "@react-three/fiber";
import {Mesh, MeshBasicMaterial, SphereGeometry} from "three";

extend({SphereGeometry, Mesh, MeshBasicMaterial})

const Earth = () => {

    const [hover, setHover] = useState<boolean>(false);

    const earthRef = useRef<THREE.Mesh>(null);

    const radius: number = 2;
    const earthTexture: THREE.Texture = useMemo(() => new THREE.TextureLoader().load('textures/body/earth.jpg'), []);

    useFrame(() => {
        if (earthRef.current && !hover) {
            earthRef.current.rotation.y += 0.02;
        }
    })

    return (
        <>
            <mesh ref={earthRef}
                  receiveShadow={true}
                  onPointerOver={() => setHover(true)}
                  onPointerOut={() => setHover(false)}>
                <sphereGeometry args={[radius]}/>
                <meshBasicMaterial map={earthTexture}/>
            </mesh>
        </>
    )
}

export default Earth