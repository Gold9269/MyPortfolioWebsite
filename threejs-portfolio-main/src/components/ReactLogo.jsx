import { Float, useGLTF } from '@react-three/drei';
import { useRef, useState, useEffect } from 'react';
import gsap from 'gsap';

const ReactLogo = (props) => {
  const { nodes, materials } = useGLTF('models/react.glb');
  const logoRef = useRef();
  const [hovered, setHovered] = useState(false);

  useEffect(() => {
    if (hovered) {
      gsap.to(logoRef.current.scale, { x: 0.35, y: 0.35, z: 0.35, duration: 0.3 });
    } else {
      gsap.to(logoRef.current.scale, { x: 0.3, y: 0.3, z: 0.3, duration: 0.3 });
    }
  }, [hovered]);

  useEffect(() => {
    gsap.to(logoRef.current.rotation, {
      y: Math.PI * 2,
      duration: 6,
      repeat: -1,
      ease: 'linear',
    });
  }, []);

  return (
    <Float floatIntensity={1.5}>
      <group
        ref={logoRef}
        position={[0, 1, 0]}
        scale={0.3}
        {...props}
        dispose={null}
        onPointerOver={() => setHovered(true)}
        onPointerOut={() => setHovered(false)}
      >
        <mesh
          geometry={nodes['React-Logo_Material002_0'].geometry}
          material={materials['Material.002']}
          position={[0, 0.079, 0.181]}
          rotation={[0, 0, -Math.PI / 2]}
          scale={[0.392, 0.392, 0.527]}
        />
      </group>
    </Float>
  );
};

export default ReactLogo;
