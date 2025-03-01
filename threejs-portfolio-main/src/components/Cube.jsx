import gsap from 'gsap';
import { useRef, useEffect } from 'react';
import { Float, useGLTF, useTexture } from '@react-three/drei';

const Cube = ({ ...props }) => {
  const { nodes } = useGLTF('models/cube.glb');
  const texture = useTexture('textures/cube.png');

  const cubeRef = useRef();
  const timelineRef = useRef();

  // Create a continuous GSAP timeline that rotates the cube clockwise then anticlockwise.
  useEffect(() => {
    if (!cubeRef.current) return;
    timelineRef.current = gsap.timeline({ repeat: -1, repeatDelay: 0.5 })
      .to(cubeRef.current.rotation, {
        y: `+=${Math.PI * 2}`,
        duration: 2,
        ease: "power2.inOut",
      })
      .to(cubeRef.current.rotation, {
        y: `-=${Math.PI * 2}`,
        duration: 2,
        ease: "power2.inOut",
      });
  }, []);

  // On pointer enter, smoothly slow down the rotation.
  const handlePointerEnter = () => {
    if (timelineRef.current) {
      gsap.to(timelineRef.current, { timeScale: 0.2, duration: 0.5, ease: "power2.inOut" });
    }
  };

  // On pointer leave, smoothly restore the rotation speed.
  const handlePointerLeave = () => {
    if (timelineRef.current) {
      gsap.to(timelineRef.current, { timeScale: 1, duration: 0.5, ease: "power2.inOut" });
    }
  };

  return (
    <Float floatIntensity={2}>
      <group
        position={[9, -4, 0]}
        rotation={[2.6, 0.8, -1.8]}
        scale={0.74}
        dispose={null}
        {...props}
      >
        <mesh
          ref={cubeRef}
          castShadow
          receiveShadow
          geometry={nodes.Cube.geometry}
          onPointerEnter={handlePointerEnter}
          onPointerLeave={handlePointerLeave}
        >
          <meshMatcapMaterial
            matcap={texture}
            toneMapped={false}
            color="#dddddd"
          />
        </mesh>
      </group>
    </Float>
  );
};

useGLTF.preload('models/cube.glb');

export default Cube;
