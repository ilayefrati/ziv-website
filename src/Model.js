import React, { useRef } from 'react';
import { useGLTF } from '@react-three/drei';
import { useFrame } from '@react-three/fiber';
import * as THREE from 'three';

function Model() {
    const modelRef = useRef();
    const { scene, nodes, materials } = useGLTF(`${process.env.PUBLIC_URL}/van.glb`);
    
    // Clone the scene to avoid modifying the cached one
    const clonedScene = React.useMemo(() => {
        return scene.clone();
    }, [scene]);
    
    // Apply premium automotive-inspired materials
    React.useEffect(() => {
        clonedScene.traverse((node) => {
            if (node.isMesh) {
                if (node.material) {
                    // Automotive-quality materials
                    node.material.roughness = 0.3;
                    node.material.metalness = 0.7;
                    node.material.envMapIntensity = 2.5;
                    
                    // Add dramatic rim lighting via emissive
                    node.material.emissive = new THREE.Color(0x333333);
                    node.material.emissiveIntensity = 0.2;
                    
                    // Better reflections and shadows
                    node.castShadow = true;
                    node.receiveShadow = true;
                    
                    // Enhance material quality
                    if (node.material.map) {
                        node.material.map.anisotropy = 16;
                    }
                    
                    // Add slight clearcoat effect for car paint look
                    if (node.material.name && 
                        (node.material.name.includes('body') || 
                         node.material.name.includes('paint') || 
                         node.material.name.includes('exterior'))) {
                        node.material.clearcoat = 0.6;
                        node.material.clearcoatRoughness = 0.2;
                        node.material.envMapIntensity = 3;
                    }
                }
            }
        });
    }, [clonedScene]);
    
    return (
        <primitive 
            ref={modelRef} 
            object={clonedScene} 
            scale={1.2}
        />
    );
}

export default Model;