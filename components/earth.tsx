import * as THREE from 'three';
import {useRef, useState} from "react";
import {extend, useFrame} from "@react-three/fiber";
import {Mesh, MeshBasicMaterial, SphereGeometry} from "three";

extend({SphereGeometry, Mesh, MeshBasicMaterial})

const Earth = ({camera}: { camera: THREE.Camera }) => {

    const [rotate, setRotate] = useState(true)

    const earthRef = useRef<THREE.Mesh>(null);
    const rayRef = useRef<THREE.Raycaster>(null)

    const radius: number = 2;
    const mouse = new THREE.Vector2();
    const earthTexture: THREE.Texture = new THREE.TextureLoader().load('textures/body/earth.jpg');

    const normalizeMouseCoordinates = (x: number, y: number): THREE.Vector2 => {
        let normalizedX = 2.0 * (x / window.innerWidth) - 1.0;
        let normalizedY = -2.0 * (y / window.innerHeight) + 1.0;
        return new THREE.Vector2(normalizedX, normalizedY);
    }

    onmousemove = (event: MouseEvent) => {
        mouse.x = event.clientX;
        mouse.y = event.clientY;

        camera.updateMatrixWorld();

        rayRef.current?.setFromCamera(normalizeMouseCoordinates(mouse.x, mouse.y), camera)

        // Camera not setting origination point need to set it manually
        rayRef.current?.ray.origin.copy(camera.position)

        console.log(rayRef.current)

        if (earthRef.current) {
            const intersectObject = rayRef.current?.intersectObject(earthRef.current);
            console.log(intersectObject)
            if (intersectObject?.length) {
                setRotate(false)
            } else {
                setRotate(true)
            }
        }
    }

    useFrame(() => {
        if (earthRef.current && rotate) {
            earthRef.current.rotation.y += 0.01
        }
    })

    return (
        <>
            <raycaster ref={rayRef}/>
            <mesh ref={earthRef} receiveShadow={true}>
                <sphereGeometry args={[radius]}/>
                <meshBasicMaterial map={earthTexture}/>
            </mesh>
        </>
    )
}

export default Earth