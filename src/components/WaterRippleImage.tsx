"use client";

import React, { useRef, useEffect, useMemo } from "react";
import * as THREE from "three";
import { useFrame, useThree } from "@react-three/fiber";

const fragmentShader = `
uniform sampler2D uTexture;
uniform vec2 uMouse;
uniform float uTime;
varying vec2 vUv;

void main() {
    vec2 uv = vUv;
    
    // Calculate distance from mouse
    float dist = distance(uv, uMouse);
    
    // Create ripple effect
    float ripple = sin(dist * 50.0 - uTime * 5.0) * 0.005;
    
    // Apply distortion based on distance and ripple
    float strength = smoothstep(0.3, 0.0, dist);
    uv += (uv - uMouse) * ripple * strength;
    
    vec4 color = texture2D(uTexture, uv);
    gl_FragColor = color;
}
`;

const vertexShader = `
varying vec2 vUv;
void main() {
    vUv = uv;
    gl_Position = projectionMatrix * modelViewMatrix * vec4(position, 1.0);
}
`;

interface RipplePlaneProps {
    imageSrc: string;
}

const RipplePlane = ({ imageSrc }: RipplePlaneProps) => {
    const meshRef = useRef<THREE.Mesh>(null);
    const { viewport } = useThree();
    const texture = useMemo(() => new THREE.TextureLoader().load(imageSrc), [imageSrc]);

    const uniforms = useMemo(() => ({
        uTexture: { value: texture },
        uMouse: { value: new THREE.Vector2(0.5, 0.5) },
        uTime: { value: 0 },
    }), [texture]);

    useFrame((state) => {
        const { mouse, clock } = state;
        if (meshRef.current) {
            // Convert mouse coordinates (-1 to 1) to UV coordinates (0 to 1)
            uniforms.uMouse.value.x = (mouse.x + 1) / 2;
            uniforms.uMouse.value.y = (mouse.y + 1) / 2;
            uniforms.uTime.value = clock.getElapsedTime();
        }
    });

    return (
        <mesh ref={meshRef} scale={[viewport.width, viewport.height, 1]}>
            <planeGeometry args={[1, 1, 32, 32]} />
            <shaderMaterial
                fragmentShader={fragmentShader}
                vertexShader={vertexShader}
                uniforms={uniforms}
            />
        </mesh>
    );
};

import { Canvas } from "@react-three/fiber";

export default function WaterRippleImage({ src }: { src: string }) {
    return (
        <div className="w-full h-full relative cursor-none group">
            <Canvas camera={{ position: [0, 0, 1] }}>
                <RipplePlane imageSrc={src} />
            </Canvas>
            <div className="absolute inset-0 border border-white/10 rounded-3xl pointer-events-none group-hover:border-primary/30 transition-colors duration-500" />
        </div>
    );
}
