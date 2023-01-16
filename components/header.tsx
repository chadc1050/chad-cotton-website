import React, {useRef} from "react";
import * as THREE from 'three';
import {FontLoader} from "three/examples/jsm/loaders/FontLoader";
import roboto from '../public/textures/font/Roboto Black_Regular.json'
import {TextGeometry} from "three/examples/jsm/geometries/TextGeometry";
import {extend} from "@react-three/fiber";
import {Mesh} from "three";

extend({TextGeometry, Mesh})

const Header = () => {

    // TODO: The sizing here needs to be dynamic here to the vw since we are not doing this with CSS

    const mainRef = useRef<Mesh>(null);

    const subRef = useRef<Mesh>(null);

    const font = new FontLoader().parse(roboto);

    // Text Geometry will work even though it is not finding the dependency
    return (
        <>
            <mesh ref={mainRef} receiveShadow={true} position={[-3, 5, 3.75]}
                  rotation={new THREE.Euler(0, Math.PI * 0.5, 0)}>
                {/*@ts-ignore*/}
                <textGeometry args={['Chad Cotton', {font: font, size: 1, height: 1}]} onUpdate={geometry => {
                    geometry.center
                    geometry.rotateX(Math.PI * 0.1)
                }}/>
                <meshLambertMaterial attach={'material'} color={'#EB655C'}/>
            </mesh>
            <mesh ref={subRef} receiveShadow={true} position={[-3, 3, 2.75]}
                  rotation={new THREE.Euler(0, Math.PI * 0.5, 0)}>
                {/*@ts-ignore*/}
                <textGeometry args={['Web Developer', {font: font, size: 0.6, height: 1}]} onUpdate={geometry => {
                    geometry.center
                    geometry.rotateX(Math.PI * 0.05)
                }}/>
                <meshLambertMaterial attach={'material'} color={'#EB655C'}/>
            </mesh>
        </>
    )
}

export default Header;