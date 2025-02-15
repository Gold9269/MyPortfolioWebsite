import { useGSAP } from "@gsap/react";
import { Center, useTexture } from "@react-three/drei";
import gsap from "gsap";
import { useCallback, useRef, useState } from "react";

const Rings = ({ position }) => {
  const refList = useRef([]);
  const timelineRef = useRef(null);
  const [hovered, setHovered] = useState(false);

  const getRef = useCallback((mesh) => {
    if (mesh && !refList.current.includes(mesh)) {
      refList.current.push(mesh);
    }
  }, []);

  const texture = useTexture("textures/rings.png");

  useGSAP(() => {
    if (refList.current.length === 0) return;

    refList.current.forEach((r) => {
      r.position.set(...position);
    });

    timelineRef.current = gsap
      .timeline({ repeat: -1, repeatDelay: 0.5 })
      .to(
        refList.current.map((r) => r.rotation),
        {
          y: `+=${Math.PI * 2}`,
          x: `-=${Math.PI * 2}`,
          duration: 2.5,
          stagger: { each: 0.15 },
        }
      );
  }, [position]);

  // Handle hover effect
  const handleHover = () => {
    setHovered(true);
    timelineRef.current.pause(); // Pause animation on hover

    gsap.delayedCall(1, () => {
      setHovered(false);
      timelineRef.current.resume(); // Resume after 3 seconds
    });
  };

  return (
    <Center>
      <group scale={0.5} onPointerEnter={handleHover}>
        {Array.from({ length: 4 }, (_, index) => (
          <mesh key={index} ref={getRef}>
            <torusGeometry args={[(index + 1) * 0.5, 0.1]} />
            <meshMatcapMaterial matcap={texture} toneMapped={false} />
          </mesh>
        ))}
      </group>
    </Center>
  );
};

export default Rings;
