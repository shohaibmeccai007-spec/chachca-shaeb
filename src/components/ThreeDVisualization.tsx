import React from 'react';
import { Canvas } from '@react-three/fiber';
import { OrbitControls, Sphere, Html, useFrame } from '@react-three/drei';
import { EffectComposer, Bloom } from '@react-three/postprocessing';
import * as THREE from 'three';

const Agent = ({ position, label }) => {
  const ref = React.useRef();

  useFrame(({ clock }) => {
    const t = clock.getElapsedTime();
    ref.current.position.x = position[0] + Math.sin(t) * 0.1;
    ref.current.position.z = position[2] + Math.cos(t) * 0.1;
  });

  return (
    <>
      <Sphere ref={ref} args={[0.2, 32, 32]} position={position}>
        <meshStandardMaterial
          color="#34D399"
          metalness={0.8}
          roughness={0.3}
        />
      </Sphere>
      <Html position={position} center>
        <div style={{ color: 'lightgray', fontSize: '0.8em' }}>{label}</div>
      </Html>
    </>
  );
};

const ThreeDVisualization = () => {
  return (
    <Canvas
      style={{ width: '100%', height: '100vh' }}
      camera={{ position: [0, 5, 10], fov: 50 }}
    >
      {/* Lighting */}
      <ambientLight intensity={0.5} />
      <pointLight position={[0, 5, 0]} intensity={1} />

      {/* Central Core */}
      <Sphere args={[1, 64, 64]}>
        <meshStandardMaterial
          color="#4F46E5"
          emissive="#2563EB"
          emissiveIntensity={0.5}
          metalness={0.7}
          roughness={0.2}
        />
      </Sphere>

      {/* Orbiting Agents */}
      {Array.from({ length: 8 }).map((_, i) => {
        const angle = (i / 8) * Math.PI * 2;
        const x = Math.cos(angle) * 3;
        const z = Math.sin(angle) * 3;
        return <Agent key={i} position={[x, 0, z]} label={`Agent ${i + 1}`} />;
      })}

      {/* Orbit Controls */}
      <OrbitControls enableZoom={false} />

      {/* Post-Processing */}
      <EffectComposer>
        <Bloom intensity={0.5} luminanceThreshold={0.2} luminanceSmoothing={0.9} />
      </EffectComposer>
    </Canvas>
  );
};

export default ThreeDVisualization;
