import { useRef, useMemo } from 'react';
import { useFrame } from '@react-three/fiber';
import * as THREE from 'three';

const NeuralNetwork = ({ count = 80 }) => {
  const pointsRef = useRef();
  const linesRef = useRef();

  // Create random particles with velocities
  const [particles, initialPositions] = useMemo(() => {
    const temp = [];
    const positions = new Float32Array(count * 3);
    for (let i = 0; i < count; i++) {
      const x = (Math.random() - 0.5) * 30;
      const y = (Math.random() - 0.5) * 20;
      const z = (Math.random() - 0.5) * 20;
      
      positions[i * 3] = x;
      positions[i * 3 + 1] = y;
      positions[i * 3 + 2] = z;

      temp.push({
        x, y, z,
        vx: (Math.random() - 0.5) * 0.03,
        vy: (Math.random() - 0.5) * 0.03,
        vz: (Math.random() - 0.5) * 0.03,
      });
    }
    return [temp, positions];
  }, [count]);

  // Max distance for a connection
  const maxDistance = 6;

  useFrame((state) => {
    if (!pointsRef.current || !linesRef.current) return;

    const positions = pointsRef.current.geometry.attributes.position.array;
    const mouseX = state.mouse.x * 12;
    const mouseY = state.mouse.y * 10;

    // Update positions
    for (let i = 0; i < count; i++) {
      const p = particles[i];
      
      // Update by velocity
      p.x += p.vx;
      p.y += p.vy;
      p.z += p.vz;

      // Mouse influence (attraction force if mouse is active)
      const dx = mouseX - p.x;
      const dy = mouseY - p.y;
      const distToMouse = Math.sqrt(dx * dx + dy * dy);
      if (distToMouse < 6) {
        // Gently pull towards mouse
        p.x += dx * 0.003;
        p.y += dy * 0.003;
      }

      // Bound check
      if (p.x < -18 || p.x > 18) p.vx *= -1;
      if (p.y < -12 || p.y > 12) p.vy *= -1;
      if (p.z < -12 || p.z > 12) p.vz *= -1;

      // Update positions buffer
      positions[i * 3] = p.x;
      positions[i * 3 + 1] = p.y;
      positions[i * 3 + 2] = p.z;
    }
    pointsRef.current.geometry.attributes.position.needsUpdate = true;

    // Build connections
    const linePositions = [];
    const lineColors = [];

    // Colors to interpolate between based on distance
    const colorBlue = new THREE.Color('#00f0ff');
    const colorPink = new THREE.Color('#bd00ff');

    for (let i = 0; i < count; i++) {
      const pi = particles[i];
      for (let j = i + 1; j < count; j++) {
        const pj = particles[j];
        const dx = pi.x - pj.x;
        const dy = pi.y - pj.y;
        const dz = pi.z - pj.z;
        const dist = Math.sqrt(dx * dx + dy * dy + dz * dz);

        if (dist < maxDistance) {
          // Add segment points
          linePositions.push(pi.x, pi.y, pi.z);
          linePositions.push(pj.x, pj.y, pj.z);

          // Closer connections glow cyan, further connections fade to pink/purple
          const ratio = dist / maxDistance;
          const mixedColor = colorBlue.clone().lerp(colorPink, ratio);
          
          lineColors.push(mixedColor.r, mixedColor.g, mixedColor.b);
          lineColors.push(mixedColor.r, mixedColor.g, mixedColor.b);
        }
      }
    }

    const lineGeom = linesRef.current.geometry;
    lineGeom.setAttribute('position', new THREE.Float32BufferAttribute(linePositions, 3));
    lineGeom.setAttribute('color', new THREE.Float32BufferAttribute(lineColors, 3));
    lineGeom.attributes.position.needsUpdate = true;
    if (lineGeom.attributes.color) lineGeom.attributes.color.needsUpdate = true;
  });

  return (
    <group>
      {/* Neural Network Nodes */}
      <points ref={pointsRef}>
        <bufferGeometry>
          <bufferAttribute
            attach="attributes-position"
            args={[initialPositions, 3]}
          />
        </bufferGeometry>
        <pointsMaterial
          color="#00f0ff"
          size={0.2}
          sizeAttenuation
          transparent
          opacity={0.8}
        />
      </points>

      {/* Neural Network Connections */}
      <lineSegments ref={linesRef}>
        <bufferGeometry />
        <lineBasicMaterial
          vertexColors
          transparent
          opacity={0.3}
          linewidth={1}
        />
      </lineSegments>
    </group>
  );
};

export default NeuralNetwork;
