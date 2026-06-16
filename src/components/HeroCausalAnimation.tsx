import { motion } from "framer-motion";

const HeroCausalAnimation = () => (
  <motion.div
    initial={{ opacity: 0, x: 14, scale: 0.992 }}
    animate={{ opacity: 1, x: 0, scale: 1 }}
    transition={{ duration: 1.2, delay: 0.3, ease: [0.22, 1, 0.36, 1] }}
    className="pointer-events-none relative flex h-[640px] w-full items-center justify-center"
    aria-hidden="true"
  >
    <div className="absolute inset-y-[8%] right-[6%] w-[68%] rounded-full bg-[radial-gradient(circle,_rgba(112,164,255,0.1),_rgba(112,164,255,0.015)_42%,_transparent_72%)] blur-3xl" />
    <img
      src="/brand/boulai-enterprise-causal-field.svg?v=1"
      alt=""
      className="relative h-full w-full max-w-[56rem] object-contain opacity-[0.92]"
      draggable={false}
    />
  </motion.div>
);

export default HeroCausalAnimation;
