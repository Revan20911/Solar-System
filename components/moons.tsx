import React from 'react'
import {useEffect, useState, useRef} from 'react';
import {useFrame, useLoader, ThreeElements, useThree, } from '@react-three/fiber';
import { TextureLoader } from 'three';
import moon from "./assets/moon.jpg"

function Luna (props: ThreeElements["mesh"]){

    var url: string  = moon.src;
    const colorMap = useLoader(TextureLoader, url);
    const ref = useRef<THREE.Mesh>(null!)
    

    useFrame((state, delta) =>{

        ref.current.rotation.y += delta / 1;

        let t = (state.clock.elapsedTime + 3 ) / 120;

        ref.current.position.x = 5 * Math.sin(t);
        ref.current.position.z = 5 * Math.cos(t);

    })

    return (

        <mesh {...props} ref={ref}>
            <sphereGeometry args={[0.4, 32, 32]}/>
            <meshStandardMaterial map={colorMap}/>
        </mesh>
        
    )

}

export {Luna};