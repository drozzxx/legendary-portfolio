'use client'

import { useRef, useMemo } from 'react'
import { useFrame, useThree } from '@react-three/fiber'
import * as THREE from 'three'

const vertexShader = `
  varying vec2 vUv;
  void main() {
    vUv = uv;
    gl_Position = projectionMatrix * modelViewMatrix * vec4(position, 1.0);
  }
`

const fragmentShader = `
  uniform float uTime;
  uniform vec2 uResolution;
  varying vec2 vUv;
  
  void main() {
    vec2 uv = vUv;
    
    // Create stars
    float stars = 0.0;
    
    // Small stars - more visible with animation (smaller size)
    for(int i = 0; i < 50; i++) {
      vec2 starPos = vec2(
        fract(sin(float(i) * 123.456) * 789.012),
        fract(cos(float(i) * 456.789) * 321.098)
      );
      float dist = distance(uv, starPos);
      float brightness = 1.0 - smoothstep(0.0, 0.006, dist);
      
      // Add individual star animation
      float starAnim = sin(uTime * 2.0 + float(i) * 0.5) * 0.5 + 0.5;
      brightness *= starAnim * 0.7 + 0.3;
      
      stars += brightness * 1.2;
    }
    
    // Medium stars - more visible with animation (smaller size)
    for(int i = 0; i < 30; i++) {
      vec2 starPos = vec2(
        fract(sin(float(i) * 234.567) * 890.123),
        fract(cos(float(i) * 567.890) * 432.109)
      );
      float dist = distance(uv, starPos);
      float brightness = 1.0 - smoothstep(0.0, 0.010, dist);
      
      // Add individual star animation
      float starAnim = sin(uTime * 1.5 + float(i) * 0.8) * 0.5 + 0.5;
      brightness *= starAnim * 0.8 + 0.2;
      
      stars += brightness * 1.5;
    }
    
    // Large bright stars with strong animation (smaller size)
    for(int i = 0; i < 15; i++) {
      vec2 starPos = vec2(
        fract(sin(float(i) * 345.678) * 901.234),
        fract(cos(float(i) * 678.901) * 543.210)
      );
      float dist = distance(uv, starPos);
      float brightness = 1.0 - smoothstep(0.0, 0.015, dist);
      
      // Strong individual star animation
      float starAnim = sin(uTime * 3.0 + float(i) * 1.2) * 0.5 + 0.5;
      brightness *= starAnim * 0.9 + 0.1;
      
      stars += brightness * 2.0;
    }
    
    // Add global twinkling effect
    float globalTwinkle = sin(uTime * 2.0 + uv.x * 10.0) * 0.3 + 0.7;
    stars *= globalTwinkle;
    
    // Add wave effect
    float wave = sin(uTime * 1.0 + uv.y * 8.0) * 0.2 + 0.8;
    stars *= wave;
    
    // Background
    vec3 color = vec3(0.0, 0.0, 0.0);
    
    // Add stars with more intensity
    color += vec3(stars * 1.8);
    
    gl_FragColor = vec4(color, 1.0);
  }
`

export default function Starfield() {
  const meshRef = useRef<THREE.Mesh>(null)
  const { size } = useThree()

  const uniforms = useMemo(
    () => ({
      uTime: { value: 0 },
      uResolution: { value: new THREE.Vector2(size.width, size.height) },
    }),
    [size]
  )

  useFrame((state) => {
    if (meshRef.current) {
      const material = meshRef.current.material as THREE.ShaderMaterial
      if (material.uniforms) {
        material.uniforms.uTime.value = state.clock.elapsedTime
      }
    }
  })

  return (
    <mesh ref={meshRef} position={[0, 0, 0]}>
      <planeGeometry args={[2, 2]} />
      <shaderMaterial
        vertexShader={vertexShader}
        fragmentShader={fragmentShader}
        uniforms={uniforms}
      />
    </mesh>
  )
} 