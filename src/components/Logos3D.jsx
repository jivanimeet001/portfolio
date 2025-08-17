import React from 'react';
import { useFrame } from '@react-three/fiber';
import { useRef } from 'react';
import * as THREE from 'three';
import { Sphere, Html } from '@react-three/drei';
import { FaReact, FaNodeJs, FaHtml5, FaCss3Alt, FaJs, FaDatabase, FaGithub } from 'react-icons/fa';

const logos = [
  { icon: FaReact, color: '#61dafb' },
  { icon: FaNodeJs, color: '#68a063' },
  { icon: FaHtml5, color: '#e34c26' },
  { icon: FaCss3Alt, color: '#2965f1' },
  { icon: FaJs, color: '#f7df1e' },
  { icon: FaDatabase, color: '#a78bfa' },
  { icon: FaGithub, color: '#fff' },
];

export default function Logos3D() {
  const logoRefs = useRef([]);

  useFrame(({ clock }) => {
    const t = clock.getElapsedTime();
    logos.forEach((_, i) => {
      const angle = (i / logos.length) * Math.PI * 2 + t * 0.7;
      const x = Math.cos(angle) * 2.2;
      const z = Math.sin(angle) * 2.2;
      // y = 0 for all, so icons orbit in the xz-plane and can go behind the sphere
      if (logoRefs.current[i]) {
        logoRefs.current[i].position.set(x, 0, z);
      }
    });
  });

  // Use Html for orbiting icons, but set z so they pass behind the sphere
  return (
    <group>
      {/* Solid circle (sphere) behind MJ */}
      <Sphere args={[0.95, 40, 40]} position={[0, 0, 0]}>
        <meshStandardMaterial color="#22223b" />
      </Sphere>
      {/* Orbiting logos as Html overlays, z controls front/behind */}
      {logos.map((logo, i) => {
        const t = performance.now() / 1000;
        const angle = (i / logos.length) * Math.PI * 2 + t * 0.7;
        const x = Math.cos(angle) * 2.2;
        const z = Math.sin(angle) * 2.2;
        return (
          <Html
            key={i}
            center
            position={[x, 0, z]}
            style={{ pointerEvents: 'none' }}
            zIndexRange={z > 0 ? [1, 10] : [0, 0]} // in front of sphere if z > 0
          >
            <logo.icon size={48} color={logo.color} style={{ filter: 'drop-shadow(0 4px 16px rgba(120,60,255,0.18))' }} />
          </Html>
        );
      })}
    </group>
  );
}
