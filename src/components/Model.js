import React, { useRef, useState, useEffect } from 'react';
import { useGLTF } from '@react-three/drei';
import { useFrame } from '@react-three/fiber';
import * as THREE from 'three';

function Model({ onLoad }) {
    const modelRef = useRef();
    const { scene, nodes, materials } = useGLTF(`${process.env.PUBLIC_URL}/van.glb`);
    
    // Add responsive scaling
    const [scale, setScale] = useState(0.8);
    const [hasLoaded, setHasLoaded] = useState(false);

    useEffect(() => {
        const handleResize = () => {
            if (window.innerWidth <= 1200) {
                setScale(1.0);
            } else {
                setScale(0.85); // Increased from 0.65 to 0.85 for larger screens
            }
        };

        handleResize(); // Set initial scale
        window.addEventListener('resize', handleResize);
        return () => window.removeEventListener('resize', handleResize);
    }, []);

    // Clone the scene to avoid modifying the cached one
    const clonedScene = React.useMemo(() => {
        return scene.clone();
    }, [scene]);
    
    // Simple loading check - call onLoad when scene is ready
    useEffect(() => {
        if (scene && !hasLoaded && onLoad) {
            setHasLoaded(true);
            // Small delay to ensure scene is fully processed
            setTimeout(() => {
                onLoad();
            }, 200);
        }
    }, [scene, hasLoaded, onLoad]);

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
            scale={scale}
        />
    );
}

// Preload the model
useGLTF.preload(`${process.env.PUBLIC_URL}/van.glb`);

export default Model;