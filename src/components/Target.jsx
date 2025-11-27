import {
  useGLTF,
  Mask,
  useMask,
  PivotControls,
  RoundedBox,
  Float,
} from "@react-three/drei";
import { useRef, useState, useEffect } from "react";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import * as THREE from "three";

const Target = (props) => {
  const targetRef = useRef();
  const [model, setModel] = useState(null);
  const [error, setError] = useState(null);

  // Mask functionality
  const stencil = useMask(1, false);

  // Model loading with error handling
  useEffect(() => {
    const loadModel = async () => {
      try {
        const gltf = await useGLTF.preload("/models/target-stand/model.gltf");
        setModel(gltf);
      } catch (err) {
        console.error("Model loading failed:", err);
        setError("Model not available");
        // Fallback scene
        const fallbackScene = new THREE.Group();
        const geometry = new THREE.CylinderGeometry(0.5, 0.2, 2, 8);
        const material = new THREE.MeshStandardMaterial({
          color: 0xff6b6b,
          metalness: 0.3,
          roughness: 0.4,
        });
        const stand = new THREE.Mesh(geometry, material);
        fallbackScene.add(stand);

        // Target top part
        const targetGeometry = new THREE.CircleGeometry(1, 16);
        const targetMaterial = new THREE.MeshStandardMaterial({
          color: 0xff0000,
          side: THREE.DoubleSide,
        });
        const target = new THREE.Mesh(targetGeometry, targetMaterial);
        target.position.y = 1.2;
        target.rotation.x = Math.PI / 2;
        fallbackScene.add(target);

        setModel({ scene: fallbackScene });
      }
    };

    loadModel();
  }, []);

  useGSAP(() => {
    if (targetRef.current) {
      gsap.to(targetRef.current.position, {
        y: targetRef.current.position.y + 1,
        duration: 1.5,
        repeat: -1,
        yoyo: true,
      });
    }
  });

  // Circular Mask Component
  const CircularMask = (maskProps) => (
    <group {...maskProps}>
      <PivotControls
        offset={[0, 0, 1]}
        activeAxes={[true, true, false]}
        disableRotations
        depthTest={false}
      >
        <mesh position={[0, 0, 1]}>
          <ringGeometry args={[0.785, 0.85, 64]} />
          <meshPhongMaterial color="black" />
        </mesh>
        <Mask id={1} position={[0, 0, 0.95]}>
          <circleGeometry args={[0.8, 64]} />
        </Mask>
      </PivotControls>
    </group>
  );

  // Box Component
  const Box = ({
    args = [1, 4, 1],
    radius = 0.05,
    smoothness = 4,
    color = "black",
    ...boxProps
  }) => (
    <RoundedBox
      args={args}
      radius={radius}
      smoothness={smoothness}
      {...boxProps}
    >
      <meshPhongMaterial color={color} />
    </RoundedBox>
  );

  if (error) {
    return (
      <group {...props}>
        <CircularMask position={[0, 2, 0]} />
        <mesh ref={targetRef} rotation={[0, Math.PI / 5, 0]} scale={1.5}>
          <cylinderGeometry args={[0.5, 0.2, 2, 8]} />
          <meshStandardMaterial color="#ff6b6b" />
        </mesh>
        <mesh position={[0, 1.2, 0]} rotation={[Math.PI / 2, 0, 0]}>
          <circleGeometry args={[1, 16]} />
          <meshStandardMaterial color="#ff0000" side={THREE.DoubleSide} />
        </mesh>
      </group>
    );
  }

  return (
    <group {...props}>
      {/* Circular Masks around target */}
      <CircularMask position={[-1, 1, 0]} />
      <CircularMask position={[1, 1, 0]} />

      {/* Main Target with Float effect */}
      <Float floatIntensity={2} rotationIntensity={1} speed={2}>
        <mesh ref={targetRef} rotation={[0, Math.PI / 5, 0]} scale={1.5}>
          {model && <primitive object={model.scene} />}
        </mesh>
      </Float>

      {/* Surrounding Boxes */}
      <Box
        color="#EAC435"
        args={[1, 5, 1]}
        rotation-y={Math.PI / 4}
        position={[0, 0, -2]}
      />
      <Box color="#03CEA4" args={[2, 2, 2]} position={[-2, 0, -2]} />
      <Box color="#FB4D3D" args={[2, 2, 2]} position={[2, 0, -2]} />
    </group>
  );
};

export default Target;
