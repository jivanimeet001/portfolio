import React, { Suspense } from 'react';
import { Canvas } from '@react-three/fiber';
import { OrbitControls } from '@react-three/drei';
import Logos3D from './Logos3D';

export default function ThreeOrbitLogos() {
  return (
    <div style={{ width: 320, height: 320, margin: '0 auto', position: 'relative' }}>
      {/* Fixed MJ logo absolutely centered over the canvas */}
      <div style={{
        position: 'absolute',
        left: '50%',
        top: '50%',
        transform: 'translate(-50%, -50%)',
        fontWeight: 800,
        fontSize: 48,
        color: '#fff',
        letterSpacing: 2,
        textShadow: '0 4px 16px rgba(120,60,255,0.18)',
        zIndex: 10,
        pointerEvents: 'none',
        userSelect: 'none',
      }}>
        MJ
      </div>
      <Canvas camera={{ position: [0, 0, 6], fov: 50 }} style={{ position: 'relative', zIndex: 1 }}>
        <ambientLight intensity={0.7} />
        <directionalLight position={[5, 5, 5]} intensity={0.7} />
        <Suspense fallback={null}>
          <Logos3D />
        </Suspense>
        <OrbitControls enableZoom={false} enablePan={false} autoRotate autoRotateSpeed={1.5} />
      </Canvas>
    </div>
  );
}
