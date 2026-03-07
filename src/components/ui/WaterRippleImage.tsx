"use client";

import React, { useRef, useMemo, useEffect } from "react";
import { Canvas, useFrame, useLoader, useThree } from "@react-three/fiber";
import * as THREE from "three";
import { cn } from "@/lib/utils";

const RippleShader = {
    uniforms: {
        uTexture: { value: null },
        uTime: { value: 0 },
        uMouse: { value: new THREE.Vector2(0.5, 0.5) },
        uHover: { value: 0 },
        uResolution: { value: new THREE.Vector2(1, 1) },
        uTextureResolution: { value: new THREE.Vector2(1, 1) },
    },
    vertexShader: `
        varying vec2 vUv;
        void main() {
            vUv = uv;
            gl_Position = projectionMatrix * modelViewMatrix * vec4(position, 1.0);
        }
    `,
    fragmentShader: `
        varying vec2 vUv;
        uniform sampler2D uTexture;
        uniform float uTime;
        uniform vec2 uMouse;
        uniform float uHover;
        uniform vec2 uResolution;
        uniform vec2 uTextureResolution;

        void main() {
            vec2 s = uResolution;
            vec2 i = uTextureResolution;
            float rs = s.x / s.y;
            float ri = i.x / i.y;
            vec2 newUv = vUv;
            if (rs > ri) {
                newUv.y = vUv.y * (ri / rs) + (1.0 - ri / rs) * 0.5;
            } else {
                newUv.x = vUv.x * (rs / ri) + (1.0 - rs / ri) * 0.5;
            }

            // Enhanced ripple/repel effect
            float dist = distance(vUv, uMouse);
            float ripple = sin(dist * 25.0 - uTime * 5.0) * 0.04 * uHover;
            
            // Subtle wave distortion relative to mouse
            vec2 dir = vUv - uMouse;
            vec2 distortedUv = newUv + dir * ripple;

            vec4 color = texture2D(uTexture, distortedUv);
            gl_FragColor = color;
        }
    `,
};

function RippleMaterial({ url }: { url: string }) {
    const meshRef = useRef<THREE.Mesh>(null);
    const texture = useLoader(THREE.TextureLoader, url);
    const { size } = useThree();
    const mouseTarget = useRef(new THREE.Vector2(0.5, 0.5));
    const hoverState = useRef(0);

    useEffect(() => {
        if (texture) {
            const tex = texture.clone(); // Clone to avoid mutating original
            tex.minFilter = THREE.LinearFilter;
            tex.magFilter = THREE.LinearFilter;
            tex.generateMipmaps = false;
        }
    }, [texture]);

    const uniforms = useMemo(() => ({
        uTexture: { value: texture },
        uTime: { value: 0 },
        uMouse: { value: new THREE.Vector2(0.5, 0.5) },
        uHover: { value: 0 },
        uResolution: { value: new THREE.Vector2(size.width, size.height) },
        uTextureResolution: { value: new THREE.Vector2(texture.image.width, texture.image.height) },
    }), [texture, size]);

    useFrame((state) => {
        if (!meshRef.current) return;

        const material = meshRef.current.material as THREE.ShaderMaterial;
        material.uniforms.uTime.value = state.clock.getElapsedTime();
        material.uniforms.uResolution.value.set(size.width, size.height);

        // Correct interpolation
        material.uniforms.uHover.value = THREE.MathUtils.lerp(
            material.uniforms.uHover.value,
            hoverState.current,
            0.1
        );

        material.uniforms.uMouse.value.lerp(mouseTarget.current, 0.1);
    });

    return (
        <mesh
            ref={meshRef}
            scale={[size.width, size.height, 1]}
            onPointerMove={(e) => {
                mouseTarget.current.set(e.uv!.x, e.uv!.y);
            }}
            onPointerEnter={() => {
                hoverState.current = 1;
            }}
            onPointerLeave={() => {
                hoverState.current = 0;
            }}
        >
            <planeGeometry args={[1, 1]} />
            <shaderMaterial
                args={[RippleShader]}
                uniforms={uniforms}
                transparent
            />
        </mesh>
    );
}

interface WaterRippleImageProps {
    src: string;
    alt: string;
    className?: string;
}

export default function WaterRippleImage({ src, alt, className }: WaterRippleImageProps) {
    return (
        <div className={cn("relative w-full h-full overflow-hidden bg-transparent cursor-pointer", className)}>
            <Canvas
                orthographic
                camera={{ zoom: 1, position: [0, 0, 100] }}
                dpr={[1, 2]}
                gl={{ alpha: true, antialias: true }}
                style={{ pointerEvents: 'auto' }}
            >
                <RippleMaterial url={src} />
            </Canvas>
            <span className="sr-only">{alt}</span>
        </div>
    );
}
