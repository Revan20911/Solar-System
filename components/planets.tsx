import React from 'react'
import {useEffect, useState, useRef} from 'react';
import {useFrame, useLoader, ThreeElements, useThree, } from '@react-three/fiber';
import { useSphere} from '@react-three/cannon';
import mars from "./assets/mars.jpg"
import earth from "./assets/earth.jpg"
import venus from "./assets/venus.jpg"
import Sky from "./assets/sky.jpg"
import jupiter from "./assets/Jupiter.jpg"
import saturn from "./assets/Saturn.jpg"
import rings from "./assets/rings.png"


import * as THREE from 'three';
import { TextureLoader, TorusGeometry } from 'three';
import { Luna } from './moons';




function SkyBox(){

    var url: string  = Sky.src;
    const colorMap = useLoader(TextureLoader, url);
    const { scene } = useThree();

    const color = new THREE.Color(0x000000)

    scene.background = color ;

    return null;

}



const Sun = () => {

    
    return (
        <mesh castShadow >
          <sphereGeometry  args={[5, 32, 32]} />
          <meshStandardMaterial  emissive={"white"} emissiveIntensity={10} color="orange" opacity={1} />
          <mesh  rotation={[-Math.PI / 2, 0, 0]}>
                <ringGeometry  args={[24.9, 25, 128, 32]}/>
                <meshStandardMaterial  emissive={"blue"} emissiveIntensity={10}  opacity={0.5}/>
                
            </mesh>
            <mesh  rotation={[-Math.PI / 2, 0, 0]}>
            <ringGeometry  args={[39.9, 40, 128, 32]}/>
            <meshStandardMaterial  emissive={"red"} emissiveIntensity={10}  opacity={0.5}/>
            </mesh>
            <mesh  rotation={[-Math.PI / 2, 0, 0]}>
            <ringGeometry  args={[14.9,15, 128, 32]}/>
            <meshStandardMaterial  emissive={"yellow"} emissiveIntensity={10}  opacity={0.5}/>
            </mesh>
            <mesh  rotation={[-Math.PI / 2, 0, 0]}>
            <ringGeometry  args={[224.9, 225, 128, 32]}/>
            <meshStandardMaterial  emissive={"orange"} emissiveIntensity={10}  opacity={0.5}/>
            </mesh>
            <mesh  rotation={[-Math.PI / 2, 0, 0]}>
            <ringGeometry  args={[124.9, 125, 128, 32]}/>
            <meshStandardMaterial  emissive={"orange"} emissiveIntensity={10}  opacity={0.5}/>
            </mesh>
        </mesh>
      );

};

function Venus (props: ThreeElements["mesh"]){

    var url: string  = venus.src;
    const colorMap = useLoader(TextureLoader, url);
    const ref = useRef<THREE.Mesh>(null!)
    

    useFrame((state, delta) =>{

        ref.current.rotation.y += delta / 1;

        let t = (state.clock.elapsedTime + 3) / 12;

        ref.current.position.x = 15 * Math.sin(t);
        ref.current.position.z = 15 * Math.cos(t);

    })

    return (

        <mesh {...props} ref={ref}>
            <sphereGeometry args={[1, 32, 32]}/>
            <meshStandardMaterial map={colorMap}/>
        </mesh>
        
    )

}

function Jupiter (props: ThreeElements["mesh"]){

    var url: string  = jupiter.src;
    const colorMap = useLoader(TextureLoader, url);
    const ref = useRef<THREE.Mesh>(null!)
    

    useFrame((state, delta) =>{

        ref.current.rotation.y += delta / 1;

        let t = (state.clock.elapsedTime + 3) / 24;

        ref.current.position.x = 125 * Math.sin(t);
        ref.current.position.z = 125 * Math.cos(t);

    })

    return (

        <mesh {...props} ref={ref}>
            <sphereGeometry args={[7, 32, 32]}/>
            <meshStandardMaterial map={colorMap}/>
            
        </mesh>
        
    )

}






function Mars(props: ThreeElements["mesh"]){


    const ref = useRef<THREE.Mesh>(null!);
    var url: string  = mars.src;
    const colorMap = useLoader(TextureLoader, url);

    useFrame((state, delta) =>{

        ref.current.rotation.y += delta / 1;

        let t = (state.clock.elapsedTime) / 32;

        ref.current.position.x = 40 * Math.sin(t);
        ref.current.position.z = 40 * Math.cos(t);

    })

    return (
        <group>
    
            <mesh position={[0,0,0]} {...props} ref={ref} receiveShadow castShadow >
            <sphereGeometry args={[0.5,32,32]}/>
            <meshPhysicalMaterial map={colorMap}/>

            
            
            </mesh>

            
        
        </group>
    )

}


function Earth(props: ThreeElements["mesh"]){

    var url: string  = earth.src;
    const colorMap = useLoader(TextureLoader, url);
    const ref = useRef<THREE.Mesh>(null!)
    

    useFrame((state, delta) =>{

        ref.current.rotation.y += delta / 1;

        let t = (state.clock.elapsedTime + 3) / 16;

        ref.current.position.x = 25 * Math.sin(t);
        ref.current.position.z = 25 * Math.cos(t);

    })

    return (

        <mesh {...props} ref={ref}>
            <sphereGeometry args={[1, 32, 32]}/>
            <meshStandardMaterial map={colorMap}/>
            <mesh  rotation={[-Math.PI / 2, 0, 0]}>
            <ringGeometry  args={[4.9, 5, 128, 32]}/>
            <meshStandardMaterial  emissive={"orange"} emissiveIntensity={10}  opacity={0.5}/>
            </mesh>
            <Luna/>
            <mesh>
                <sphereGeometry args={[1.02,32,32]}/>
                <meshStandardMaterial opacity={0.2}   transparent/>
            </mesh>

        </mesh>
        
    )

}


function Saturn(props: ThreeElements["mesh"]){

    

    var url: string  = saturn.src;
    var rurl: string = rings.src
    const colorMap = useLoader(TextureLoader, url);
    const ringMap = useLoader(TextureLoader, rurl)
    const ref = useRef<THREE.Mesh>(null!)

    
    

    useFrame((state, delta) =>{

        // ref.current.rotation.y += delta / 1;

        let t = (state.clock.elapsedTime + 3) / 16;

        ref.current.position.x = 225 * Math.sin(t);
        ref.current.position.z = 225 * Math.cos(t);

    })

    return (

        <group>

        <mesh   {...props} ref={ref}>
            <sphereGeometry attach="geometry" args={[5, 32, 32]}/>
            <meshStandardMaterial   map={colorMap}/>
            <mesh  rotation-x={90}  position={[0,0,0]}>
            <ringGeometry  args={[15,10,32, 32]}/>
            <meshPhongMaterial map={ringMap}/>
            </mesh>
            <mesh  position={[15,3,0]}>
                <sphereGeometry args={[0.2, 32,32]}/>
            </mesh>
            

        </mesh>


        

        </group>
        
    )

}




export  {Mars, Earth, Venus, Sun, SkyBox, Saturn, Jupiter};