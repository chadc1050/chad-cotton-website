import {Vector3} from "three";
import * as THREE from "three";

const Pin = (position: Vector3, rotation: Vector3, scale: number) => {

    // This will be a pin we can attach to a map
    return (
        <>
            {/*Sphere for the pin head*/}
            <mesh receiveShadow={true} >
                <sphereGeometry args={[]} />
                <meshBasicMaterial/>
            </mesh>
            {/*Cylinder for the point*/}
            <mesh receiveShadow={true} >
                <sphereGeometry args={[2]} />
                <meshBasicMaterial color={'gray'} />
            </mesh>
        </>
    )
}