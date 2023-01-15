import * as THREE from 'three';
import {useRef} from "react";
import {useFrame} from "@react-three/fiber";
import {BufferGeometry, Material, Mesh} from "three";

const Earth = () => {

    const earthRef = useRef<Mesh>(null)

    useFrame(() => {
        if (earthRef.current) {
            earthRef.current.rotation.y += 0.01
        }
    })

    return(
        <mesh ref={earthRef} receiveShadow={true} rotation-y={Math.PI * 0.25}>
            <sphereGeometry args={[2]} />
            <meshBasicMaterial map={new THREE.TextureLoader().load('textures/earth.jpg')}/>
        </mesh>
    )
}

export default Earth