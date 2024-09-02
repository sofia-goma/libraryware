// import "./styles.css";
// import { Suspense, useState } from "react";
// import { motion, Variants, Transition } from "framer-motion";
// import { StarIcon } from "./StarIcon";

// // Ported from https://codepen.io/popmotion/pen/oNGxjpr?editors=1111
// export default function App() {
//   const [isHover, setIsHover] = useState(false);
//   const [isLiked, setIsLiked] = useState(false);

//   return (
//     <motion.button
//       initial={false}
//       animate={[isLiked ? "liked" : "unliked", isHover ? "hover" : "rest"]}
//       whileTap="press"
//       variants={buttonVariants}
//       onHoverStart={() => setIsHover(true)}
//       onHoverEnd={() => setIsHover(false)}
//       onClick={() => setIsLiked(!isLiked)}
//     >
//       <motion.div
//         className="icon"
//         variants={{
//           liked: { opacity: 0, transition: iconFadeTransition },
//           hover: isLiked
//             ? { opacity: 0, transition: iconFadeTransition }
//             : { opacity: 1 }
//         }}
//       >
//         <Suspense fallback={null}>
//           <StarIcon isHover={isHover} isLiked={isLiked} />
//         </Suspense>
//       </motion.div>
//       <div className="label">
//         <motion.span variants={labelTextVariants} className="default">
//           Star
//           <motion.span variants={successTextVariants} className="success">
//             red
//           </motion.span>
//         </motion.span>
//       </div>
//       <div className="number">
//         <motion.span variants={currentCountVariants} className="current">
//           38
//         </motion.span>
//         <motion.span variants={newCountVariants} className="new">
//           39
//         </motion.span>
//       </div>
//     </motion.button>
//   );
// }

// const iconFadeTransition: Transition = { duration: 0.2, delay: 0.3 };

// const buttonVariants: Variants = {
//   rest: {
//     "--button-star-greyscale": "100%",
//     "--button-star-contrast": "0%",
//     transition: { duration: 0.7 }
//   },
//   hover: {
//     "--button-star-greyscale": "0%",
//     "--button-star-contrast": "100%",
//     scale: 1.2,
//     y: -8
//   },
//   press: { scale: 1.1 }
// };

// const labelTextVariants: Variants = {
//   unliked: { x: 24 },
//   liked: { x: -46 }
// };

// const successTextVariants: Variants = {
//   unliked: { opacity: 0 },
//   liked: { opacity: 1 }
// };

// const likedTransition: Transition = {
//   duration: 0.25,
//   delay: 0.3
// };

// const currentCountVariants: Variants = {
//   unliked: { opacity: 1, y: 0, transition: { duration: 0.25 } },
//   liked: { opacity: 0, y: -40, transition: likedTransition }
// };

// const newCountVariants: Variants = {
//   unliked: { opacity: 0, y: 40, transition: { duration: 0.25 } },
//   liked: { opacity: 1, y: 0, transition: likedTransition }
// };
