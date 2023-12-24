import React, { useEffect } from 'react'
import { useGLTF } from '@react-three/drei'
import planeScene from '../assets/3d/plane.glb'
import { useAnimations } from '@react-three/drei'
import { useRef} from 'react'
import { a } from '@react-spring/three'



const Plane = ({isRotating , ...props}) =>{
    const ref = useRef();
    const { scene , animations } = useGLTF(planeScene);
    const { actions } = useAnimations(animations,ref);

    useEffect(() => {
        console.log('isRotating',isRotating);
        if(isRotating){
            actions['Take 001'].play();
        }else{
            actions['Take 001'].stop();
        }
    }, [isRotating,actions])
  return (
    <mesh{...props} ref = {ref}>
        <primitive object={scene} />
        
    </mesh>
  )
}

export default Plane