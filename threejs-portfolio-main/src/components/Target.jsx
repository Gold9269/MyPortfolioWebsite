import { useGLTF } from "@react-three/drei";
import { useEffect, useRef, useState } from "react";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";

const Target = (props) => {
  const targetRef = useRef();
  const timelineRef = useRef(null);
  const [hovered, setHovered] = useState(false);

  const { scene } = useGLTF(
    "https://vazxmixjsiawhamofees.supabase.co/storage/v1/object/public/models/target-stand/model.gltf"
  );

  useGSAP(() => {
    timelineRef.current = gsap.timeline({ repeat: -1, yoyo: true }).to(targetRef.current.position, {
      y: targetRef.current.position.y + 0.5,
      duration: 1.5,
    });
  }, []);

  useEffect(() => {
    if (scene) {
      scene.traverse((obj) => {
        if (obj.isMesh) {
          obj.material.metalness = 0.2; // Reduce metal effect
          obj.material.roughness = 0.8; // Increase roughness
        }
      });
    }
  }, [scene]);

  const handleHover = () => {
    setHovered(true);
    timelineRef.current.pause();

    gsap.delayedCall(1, () => {
      setHovered(false);
      timelineRef.current.resume();
    });
  };

  return (
    <group 
      ref={targetRef} 
      {...props} 
      rotation={[0, Math.PI / 5, 0]} 
      scale={[1.5, 1.5, 1.5]} 
      onPointerEnter={handleHover}  // ✅ Now using handleHover
    >
      {/* Soft Local Light to Reduce Overexposure */}
      <pointLight intensity={0.5} position={[0, 2, 0]} />

      {/* Render 3D Model */}
      <primitive object={scene} />
    </group>
  );
};

export default Target;

