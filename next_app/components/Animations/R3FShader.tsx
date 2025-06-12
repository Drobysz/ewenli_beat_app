'use client'

import { Canvas, useFrame, extend, useThree } from '@react-three/fiber';
import { shaderMaterial } from '@react-three/drei';
import * as THREE from 'three';
import { useRef } from 'react';

const ShadertoyMaterial = shaderMaterial(
  {
    iTime: 0,
    iResolution: new THREE.Vector2( 0, 0),
  },
  // GEOMETRY AND PHYSIC FOR THE GIVEN BACKGROUND ANIMATION WAS TAKEN FROM SHADERTOY: https://www.shadertoy.com/view/dsXyzf
  `
    void main() {
      gl_Position = vec4(position, 1.0);
    }
  `,
  `
    precision highp float;

    uniform vec2 iResolution;
    uniform float iTime;


    void mainImage(out vec4 fragColor, vec2 fragCoord) {
      vec2 uv = fragCoord.xy / iResolution.xy;
      uv = uv * 2.0 - 1.0; 

      float d = -iTime * 0.5;
      float a = 0.0;
      for (float i = 0.0; i < 8.0; ++i) {
        a += cos(i - d - a * uv.x);
        d += sin(uv.y * i + a);
      }
      d += iTime * 0.5;

      vec3 col = vec3(
        cos(uv * vec2(d, a)) * 0.6 + 0.4,
        cos(a + d) * 0.5 + 0.5
      );
      col = cos(col * cos(vec3(d, a, 2.5)) * 0.5 + 0.5);

      float gray = dot(col, vec3(0.299, 0.587, 0.114));
      fragColor   = vec4(vec3(gray), 1.0);
    }

    void main() {
      mainImage(gl_FragColor, gl_FragCoord.xy);
    }
  `
);

extend({ ShadertoyMaterial });

type ShadertoyMaterialInstance = InstanceType<typeof ShadertoyMaterial>;

function LiquidBackground() {
  const mat = useRef<ShadertoyMaterialInstance | null>(null!);
  const { size } = useThree();

  useFrame(({ clock }) => {
    if (!mat.current) return;
    mat.current.iTime = clock.elapsedTime;
    mat.current.iResolution.set(size.width, size.height);
  });
  
  return (
    <mesh>
      <planeGeometry args={[2, 3]} />
      
      {/* @ts-ignore */}
      <shadertoyMaterial ref={mat} />
    </mesh>
  );
}

export function R3FShader() {
  return (
    <Canvas
      gl={{ antialias: true }}
      camera={{ position: [0, 0, 1], fov: 75 }}
      style={{
        position: 'absolute',
        top: 0,
        left: 0,
        width: '150vw',
        height: '200vh',
        zIndex: 1,
      }}
    >
      <LiquidBackground />
    </Canvas>
  );
}