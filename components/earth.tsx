import * as THREE from 'three';
import {useRef} from "react";
import {extend, useFrame} from "@react-three/fiber";
import {Mesh, MeshBasicMaterial, SphereGeometry} from "three";

extend({SphereGeometry, Mesh, MeshBasicMaterial})

const Earth = () => {

    const earthRef = useRef<Mesh>(null);
    const radius: number = 2;
    const earthTexture: THREE.Texture = new THREE.TextureLoader().load('textures/body/earth.jpg');

    useFrame(() => {
        if (earthRef.current) {
            earthRef.current.rotation.y += 0.01
        }
    })

    // TODO: Need to add a Raycaster(?) for when mouse is in hover state so that we can pause rotation (abstract it for other objects)

    return(
        <mesh ref={earthRef} receiveShadow={true} >
            <sphereGeometry args={[radius]} />
            <meshBasicMaterial map={earthTexture}/>
        </mesh>
    )
}

export default Earth