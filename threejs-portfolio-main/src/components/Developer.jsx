import React, { useEffect, useRef, useMemo } from 'react';
import { useGraph } from '@react-three/fiber';
import { useGLTF, useAnimations, useFBX } from '@react-three/drei';
import { SkeletonUtils } from 'three-stdlib';
import * as THREE from 'three';

const Developer = ({ animationName = 'idle', ...props }) => {
  const group = useRef();

  // Load the avatar model
  const { scene } = useGLTF('/models/animations/Nishant_Avatar.glb');
  const clone = useMemo(() => (scene ? SkeletonUtils.clone(scene) : null), [scene]);
  const { nodes, materials } = useGraph(clone || new THREE.Group());

  // Load animations via hooks at the top level
  const idleFBX = useFBX('/models/animations/idle.fbx');
  const saluteFBX = useFBX('/models/animations/salute.fbx');
  const clappingFBX = useFBX('/models/animations/clapping.fbx');
  const victoryFBX = useFBX('/models/animations/victory.fbx');

  // Extract the first animation from each FBX and assign a name
  const idleAnimation = idleFBX.animations[0]
    ? { ...idleFBX.animations[0], name: 'idle' }
    : null;
  const saluteAnimation = saluteFBX.animations[0]
    ? { ...saluteFBX.animations[0], name: 'salute' }
    : null;
  const clappingAnimation = clappingFBX.animations[0]
    ? { ...clappingFBX.animations[0], name: 'clapping' }
    : null;
  const victoryAnimation = victoryFBX.animations[0]
    ? { ...victoryFBX.animations[0], name: 'victory' }
    : null;

  // Gather available animations and set them on the group using useAnimations
  const animations = [idleAnimation, saluteAnimation, clappingAnimation, victoryAnimation].filter(Boolean);
  const { actions } = useAnimations(animations, group);

  // useEffect to trigger animation changes
  useEffect(() => {
    let currentAction;
    if (actions && actions[animationName]) {
      currentAction = actions[animationName];
      currentAction.reset().fadeIn(0.5).play();
    }
    return () => {
      // Ensure we only fadeOut the action we started
      if (currentAction) {
        currentAction.fadeOut(0.5);
      }
    };
  }, [animationName, actions]);

  // If nodes or materials aren't loaded yet, return null to prevent rendering errors.
  if (!nodes || !materials) return null;

  return (
    <group ref={group} {...props} dispose={null}>
      {nodes.Hips && <primitive object={nodes.Hips} />}
      {Object.entries(nodes).map(([key, node]) =>
        node.isSkinnedMesh ? (
          <skinnedMesh
            key={key}
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

// Preload the GLTF model for performance.
useGLTF.preload('/models/animations/Nishant_Avatar.glb');

export default Developer;
