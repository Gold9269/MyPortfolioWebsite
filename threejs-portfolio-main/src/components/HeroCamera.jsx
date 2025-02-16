import { useRef } from 'react';
import { useFrame } from '@react-three/fiber';
import { easing } from 'maath';

const HeroCamera = ({ isMobile, children }) => {
  const group = useRef();

  useFrame((state, delta) => {
    const mobilePosition = [0, -1, 18]; // Lower and closer for better view on mobile
    const defaultPosition = [0, 0, 20];

    // Adjust camera position for mobile screens
    const targetPosition = isMobile ? mobilePosition : defaultPosition;
    easing.damp3(state.camera.position, targetPosition, 0.25, delta);

    // Adjust rotation behavior
    easing.dampE(group.current.rotation, [-state.pointer.y / 3, state.pointer.x / 5, 0], 0.25, delta);
  });

  return <group ref={group}>{children}</group>;
};

export default HeroCamera;
