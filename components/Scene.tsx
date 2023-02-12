import React from 'react'
import {Suspense, useEffect, useState, useRef} from 'react';

import { Canvas, useThree,  } from '@react-three/fiber';
import { OrbitControls, PerspectiveCamera, SpotLight, Stars } from '@react-three/drei';
import * as THREE from "three";


import {Earth, Mars, Venus, Sun, SkyBox, Saturn, Jupiter } from './planets';
import { Physics } from '@react-three/cannon';
import { Planet } from './types';
import { planetList } from './types';
import { EffectComposer, Bloom, Noise, Vignette, Selection, SelectiveBloom, Select } from '@react-three/postprocessing'


const Scene = ({setInfo}: {setInfo:  React.Dispatch<React.SetStateAction<Planet | null>>}) => {

  
    function setPlanetInfo(n: number){

      let planet = planetList[n];
      
      setInfo(planet);
    }

    return(
        <>
  
        <Suspense  fallback={null}>
          
        <Stars radius={10000} depth={5} count={10000} factor={4} saturation={0} fade speed={1} />
          
          
        <OrbitControls  maxDistance={100000}/>
          <pointLight castShadow position={[0,0,0]} distance={10000} intensity={4}/>
          <Physics  gravity={[0,0,0]} iterations={1}>
                
                <Sun />
                <Venus receiveShadow onClick={() => setPlanetInfo(1)}/>
                <Earth onClick={() => setPlanetInfo(2)} position={[30,0,0]}/>
                <Mars position={[35,0,0]}/>
                <Jupiter/>
                <Saturn position={[45,0,0]}/>
          </Physics>
        
        </Suspense>

       
            <Selection>
            <EffectComposer>
            <Bloom luminanceThreshold={0.8} luminanceSmoothing={0.9} height={300} />
            
            
            </EffectComposer>
            <Select enabled>
              <Sun/>
            </Select>
              
            </Selection>
       
        </>
    )

    
}

export default Scene;

