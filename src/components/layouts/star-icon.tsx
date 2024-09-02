// import { motion } from "framer-motion/three";
// import { degreesToRadians } from "popmotion";
// import { useGLTF } from "@react-three/drei";
// import { Canvas } from "@react-three/fiber";

// export function StarIcon({ isLiked, isHover }) {
//   const { nodes } = useGLTF("/star-icon.glb");

//   return (
//     <Canvas
//       resize={{ offsetSize: true }}
//       dpr={[1, 2]}
//       camera={{ position: [0, 0, 5.5], fov: 45 }}
//     >
//       {lights.map(([x, y, z, intensity], i) => (
//         <pointLight
//           key={i}
//           intensity={intensity}
//           position={[x / 8, y / 8, z / 8]}
//           color="#fff"
//         />
//       ))}
//       <group dispose={null}>
//         <motion.mesh
//           geometry={nodes.Star.geometry}
//           rotation={[Math.PI / 2, 0, degreesToRadians(360)]}
//           scale={1}
//           animate={[isLiked ? "liked" : "unliked", isHover ? "hover" : ""]}
//           variants={{
//             unliked: {
//               x: [0, 0],
//               y: [0, 0],
//               scale: 0.9
//             },
//             liked: {
//               x: 4,
//               y: [0, -1.5, 2],
//               scale: 0.9,
//               transition: { duration: 0.5 }
//             },
//             hover: {
//               rotateZ: 0,
//               rotateY: 0.3,
//               scale: 1.3,
//               transition: {
//                 rotateZ: { duration: 1.5, ease: "linear", repeat: Infinity }
//               }
//             }
//           }}
//         >
//           <meshPhongMaterial
//             color="#ffdd00"
//             emissive="#ff9500"
//             specular="#fff"
//             shininess="100"
//           />
//         </motion.mesh>
//       </group>
//     </Canvas>
//   );
// }

// const lights = [
//   [2, 1, 4, 1],
//   [8, 0, 4, 1]
// ];
