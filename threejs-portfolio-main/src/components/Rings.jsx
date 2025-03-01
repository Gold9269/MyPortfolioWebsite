import { Center, useTexture } from "@react-three/drei";
import gsap from "gsap";
import { useCallback, useRef, useState, useEffect } from "react";

const Rings = ({ position }) => {
  const refList = useRef([]);
  const timelineRef = useRef(null);
  const [hovered, setHovered] = useState(false);

  // Collect each mesh reference
  const getRef = useCallback((mesh) => {
    if (mesh && !refList.current.includes(mesh)) {
      refList.current.push(mesh);
    }
  }, []);

  const texture = useTexture("textures/rings.png");

  // Update each ring's position whenever the position prop changes
  useEffect(() => {
    if (refList.current.length > 0) {
      refList.current.forEach((r) => {
        r.position.set(...position);
      });
    }
  }, [position]);

  // Create the GSAP timeline once on mount to animate rotation
  useEffect(() => {
    if (refList.current.length === 0) return;
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
  }, []);

  // Pause the timeline on hover and resume after 1 second
  useEffect(() => {
    if (hovered && timelineRef.current) {
      timelineRef.current.pause();
      const timer = setTimeout(() => {
        setHovered(false);
        timelineRef.current.resume();
      }, 1000);
      return () => clearTimeout(timer);
    }
  }, [hovered]);

  const handleHover = () => {
    setHovered(true);
  };

  return (
    <Center>
      {/* Apply the position prop to the group so the rings stay in the desired place */}
      <group position={position} scale={0.5} onPointerEnter={handleHover}>
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
