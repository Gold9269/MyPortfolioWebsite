import gsap from 'gsap';
import { useRef, useState, useEffect } from 'react';
import { Float, useGLTF, useTexture } from '@react-three/drei';

const Cube = ({ ...props }) => {
  const { nodes } = useGLTF('models/cube.glb');
  const texture = useTexture('textures/cube.png');

  const cubeRef = useRef(null);
  const [hovered, setHovered] = useState(false);
  const timelineRef = useRef(null);

  useEffect(() => {
    if (!cubeRef.current) return; // Ensure cubeRef is set

    timelineRef.current = gsap.timeline({ repeat: -1, repeatDelay: 0.5 })
      .to(cubeRef.current.rotation, {
        y: `+=${Math.PI * 2}`,
        x: `-=${Math.PI * 2}`,
        duration: 2.5,
        ease: 'power1.inOut',
      });

    return () => {
      if (timelineRef.current) timelineRef.current.kill(); // Cleanup on unmount
    };
  }, []);

  const handleHover = () => {
    if (!hovered) {
      setHovered(true);
      timelineRef.current?.pause();

      gsap.delayedCall(1, () => {
        setHovered(false);
        timelineRef.current?.resume();
      });
    }
  };

  return (
    <Float floatIntensity={2}>
      <group position={[9, -4, 0]} rotation={[2.6, 0.8, -1.8]} scale={0.74} {...props}>
        <mesh
          ref={cubeRef}
          geometry={nodes.Cube.geometry}
          material={nodes.Cube.material}
          onPointerEnter={handleHover}
          onPointerLeave={() => setHovered(false)}
        >
          <meshStandardMaterial map={texture} roughness={0.2} metalness={0} />
        </mesh>
      </group>
    </Float>
  );
};

useGLTF.preload('models/cube.glb');

export default Cube;
