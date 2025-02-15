import React, { useEffect, useRef, useMemo } from 'react';
import { useGraph } from '@react-three/fiber';
import { useGLTF, useAnimations, useFBX } from '@react-three/drei';
import { SkeletonUtils } from 'three-stdlib';

const Developer = ({ animationName = 'idle', ...props }) => {
  const group = useRef();

  // Load the GLTF model
  const { scene } = useGLTF('/models/animations/Nishant_Avatar.glb');

  // Ensure the model is properly cloned
  const clone = useMemo(() => (scene ? SkeletonUtils.clone(scene) : null), [scene]);

  // Extract nodes and materials safely
  const { nodes, materials } = useGraph(clone || new THREE.Group());

  // Load animations with safety checks
  const loadAnimation = (path, name) => {
    const { animations } = useFBX(path);
    if (animations.length > 0) animations[0].name = name;
    return animations[0] || null;
  };

  const idleAnimation = loadAnimation('/models/animations/idle.fbx', 'idle');
  const saluteAnimation = loadAnimation('/models/animations/salute.fbx', 'salute');
  const clappingAnimation = loadAnimation('/models/animations/clapping.fbx', 'clapping');
  const thumbsAnimation = loadAnimation('/models/animations/victory.fbx', 'victory');

  // Validate animations before using them
  const animations = [idleAnimation, saluteAnimation, clappingAnimation, thumbsAnimation].filter(Boolean);
  const { actions } = useAnimations(animations, group);

  useEffect(() => {
    if (actions && actions[animationName]) {
      actions[animationName].reset().fadeIn(0.5).play();
      return () => actions[animationName].fadeOut(0.5);
    }
  }, [animationName, actions]);

  if (!nodes || !materials) return null; // Avoid rendering if nodes are undefined

  return (
    <group ref={group} {...props} dispose={null}>
      {nodes.Hips && <primitive object={nodes.Hips} />}
      {Object.entries(nodes).map(([key, node]) =>
        node.isSkinnedMesh ? (
          <skinnedMesh
            key={key} // Ensure each child has a unique key
            name={key}
            geometry={node.geometry}
            material={materials[node.material?.name]}
            skeleton={node.skeleton}
            morphTargetDictionary={node.morphTargetDictionary}
            morphTargetInfluences={node.morphTargetInfluences}
          />
        ) : null
      )}
    </group>
  );
};

useGLTF.preload('/models/animations/Nishant_Avatar.glb');

export default Developer;
