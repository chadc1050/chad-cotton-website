import {extend, useFrame} from "@react-three/fiber";
import * as THREE from "three";
import {Ref, useCallback, useEffect, useMemo, useRef, useState} from "react";
import {SVGLoader, SVGResult} from "three/examples/jsm/loaders/SVGLoader";
import {redirect} from "next/navigation";
import {Group} from "three";

extend({THREE})

const Social = ({path, link, position, rotation}: { path: string, link: string, position: THREE.Vector3, rotation: THREE.Vector3 }) => {

    // const groupRef = useCallback(() => {
    //     new SVGLoader().load(path, (result: SVGResult) => {
    //         result.paths.forEach((path) => {
    //
    //             const material = new THREE.MeshBasicMaterial({
    //                 color: path.color,
    //                 side: THREE.DoubleSide,
    //                 depthWrite: false
    //             });
    //
    //             SVGLoader.createShapes(path).forEach((shape) => {
    //                 const geometry = new THREE.ShapeGeometry(shape);
    //                 const mesh = new THREE.Mesh(geometry, material);
    //                 groupRef?.add(mesh);
    //             })
    //         })
    //     })
    // }, [path]);

    // console.log(groupRef)
    return (
        <></>
        // <group rotation={new THREE.Euler(rotation.x, rotation.y, rotation.z)} position={position} ref={groupRef} onClick={() => redirect(link)}/>
    )
}

export default Social