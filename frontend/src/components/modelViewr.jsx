import React, { Suspense } from 'react';
import { Canvas } from '@react-three/fiber';
import { OrbitControls, useGLTF, Stage } from '@react-three/drei';

function PCModel() {
  const gltf = useGLTF('/desktop_pc/scene.gltf'); // public folder

  return (
    <group>
      {/* Better lighting setup */}
      <hemisphereLight intensity={3} groundColor="#444444" />
      <pointLight position={[2.5, 1.5,0.2]} intensity={1.5} />
      <spotLight
        position={[3, 0.3, 3.5]}
        angle={3}
        penumbra={1}
        intensity={3}
        castShadow
        shadow-mapSize={1024}
      />

      {/* Model */}
      <primitive
        object={gltf.scene}
        scale={0.55}
        position={[2, -0.6, -0.5]}
        rotation={[-0.005, -0.2, -0.1]} // slight tilt for realism
      />
    </group>
  );
}

function ModelViewer() {
  return (
    <div className="w-full h-[500px] sm:h-[600px] md:h-[700px]">
      <Canvas
        frameloop="demand"
        shadows
        camera={{ position: [25, 2.5, 5], fov: 25 }} // Top-left angled view
        className="rounded-xl"
        gl={{ preserveDrawingBuffer: true }}
      >
        <Suspense fallback={null}>
          <PCModel />
        </Suspense>

        <OrbitControls
          enableZoom={false}
          maxPolarAngle={Math.PI / 2.2}
          minPolarAngle={Math.PI / 2.5} // allows top-ish angle only
        />
      </Canvas>
    </div>
  );
}

useGLTF.preload('/desktop_pc/scene.gltf');

export default ModelViewer;
