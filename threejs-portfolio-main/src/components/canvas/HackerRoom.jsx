import React, { useEffect, useState, Suspense } from "react";
import { useGLTF, useVideoTexture } from "@react-three/drei";
import CanvasLoader from "../Loading";

const Computers = ({ isMobile }) => {
  // Destructure scene from the GLTF object
  const { scene } = useGLTF("/desktop_pc/scene.gltf");
  // Load the video texture (ensure the video path is correct)
  const videoTexture = useVideoTexture("/textures/project/project1.mp4");

  useEffect(() => {
    // Traverse the scene to find the mesh by its name (as per your GLTF)
    scene.traverse((child) => {
      if (child.isMesh) {
        // For debugging, you can log all mesh names:
        // console.log("Mesh name:", child.name);
        if (child.name === "MY SCREEN_MY SCREEN_0") {
          // Apply the video texture to this mesh's material
          if (child.material) {
            child.material.map = videoTexture;
            child.material.needsUpdate = true;
            console.log("Video texture applied to:", child.name);
          }
        }
      }
    });
  }, [scene, videoTexture]);

  return (
    <group>
      <hemisphereLight intensity={0.15} groundColor="black" />
      <spotLight
        position={[-20, 50, 10]}
        angle={0.12}
        penumbra={1}
        intensity={1}
        castShadow
        shadow-mapSize={1024}
      />
      <pointLight intensity={1} />
      <primitive
        object={scene}
        scale={isMobile ? 0.7 : 1}
        position={isMobile ? [0, -3, -2.2] : [1.25, -3.25, -1.5]}
        rotation={[-0.01, -1.6, -0.2]}
      />
    </group>
  );
};

const HackerRoom = () => {
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    if (typeof window !== "undefined" && window.matchMedia) {
      const mediaQuery = window.matchMedia("(max-width: 500px)");
      setIsMobile(mediaQuery.matches);

      const handleMediaQueryChange = (event) => {
        setIsMobile(event.matches);
      };

      // Use modern or legacy event listeners
      if (mediaQuery.addEventListener) {
        mediaQuery.addEventListener("change", handleMediaQueryChange);
      } else if (mediaQuery.addListener) {
        mediaQuery.addListener(handleMediaQueryChange);
      }

      return () => {
        if (mediaQuery.removeEventListener) {
          mediaQuery.removeEventListener("change", handleMediaQueryChange);
        } else if (mediaQuery.removeListener) {
          mediaQuery.removeListener(handleMediaQueryChange);
        }
      };
    }
  }, []);

  return (
    <Suspense fallback={<CanvasLoader />}>
      <Computers isMobile={isMobile} />
    </Suspense>
  );
};

export default HackerRoom;
