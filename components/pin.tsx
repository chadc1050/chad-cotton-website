import {Vector3} from "three";
import * as THREE from "three";
import {useEffect, useRef, useState} from "react";
import {useFrame} from "@react-three/fiber";
import {useThreeContext} from "../context/threeprovider";

const Pin = ({
                 color,
                 position,
                 rotation,
                 text
             }: { color: string, position: THREE.Vector3, rotation: THREE.Euler, text: string }) => {

    const context = useThreeContext()

    const [hover, setHover] = useState<boolean>(false);


    const pinRef = useRef<THREE.Group>(new THREE.Group())

    const headRadius: number = 0.12
    const pinRadius: number = 0.03
    const pinHeight: number = 0.4

    useEffect(() => {
        pinRef.current.remove()
    })

    useFrame(() => {
        if (hover) {
            pinRef.current.scale.setScalar(1.25)
        } else {
            pinRef.current.scale.setScalar(1)
        }
    })

    const onPinClick = () => {
        context.setBanner(text)
    }

    const calculateHeadLocation = (): THREE.Vector3 => {
        return new Vector3(0, 0.5 * pinHeight, 0);
    }

    // This will be a pin we can attach to a map
    return (
        <>
            <group ref={pinRef}
                   position={position}
                   rotation={rotation}
                   receiveShadow={true}
                   castShadow={true}
                   onPointerOver={() => setHover(true)}
                   onPointerOut={() => setHover(false)}
                   onClick={() => onPinClick()}>
                <mesh position={calculateHeadLocation()}>
                    <sphereGeometry args={[headRadius]}/>
                    <meshLambertMaterial color={color} reflectivity={0.5}/>
                </mesh>
                <mesh>
                    <cylinderGeometry args={[pinRadius, pinRadius, pinHeight]}/>
                    <meshLambertMaterial color={'gray'}/>
                </mesh>
            </group>
        </>
    )
}

export default Pin;