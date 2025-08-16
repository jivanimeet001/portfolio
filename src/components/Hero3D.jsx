import React, { Suspense } from 'react';
import { Canvas } from '@react-three/fiber';
import { OrbitControls, Float, MeshDistortMaterial } from '@react-three/drei';

function AnimatedSphere() {
  return (
    <Float speed={2} rotationIntensity={1.2} floatIntensity={2}>
      <mesh scale={1.5}>
        <sphereGeometry args={[1, 32, 32]} />
        <MeshDistortMaterial color="#2563eb" attach="material" distort={0.4} speed={2} />
      </mesh>
    </Float>
  );
}

export default function Hero3D() {
  return (
    <div style={{ width: '100%', height: 260, margin: '0 auto', maxWidth: 600 }}>
      <Canvas camera={{ position: [0, 0, 4] }}>
        <ambientLight intensity={0.7} />
        <directionalLight position={[2, 2, 2]} intensity={0.7} />
        <Suspense fallback={null}>
          <AnimatedSphere />
        </Suspense>
        <OrbitControls enableZoom={false} enablePan={false} autoRotate autoRotateSpeed={1.5} />
      </Canvas>
    </div>
  );
}
