import { motion } from "framer-motion";

const HeroCausalAnimation = () => (
  <motion.div
    initial={{ opacity: 0, x: 10, scale: 0.996 }}
    animate={{ opacity: 1, x: 0, scale: 1 }}
    transition={{ duration: 1.2, delay: 0.3, ease: [0.22, 1, 0.36, 1] }}
    className="pointer-events-none relative flex h-[760px] w-full items-center justify-end overflow-visible"
    aria-hidden="true"
  >
    <motion.div
      animate={{ opacity: [0.72, 0.94, 0.78], scale: [0.985, 1.025, 1] }}
      transition={{ duration: 11.5, repeat: Infinity, ease: "easeInOut" }}
      className="absolute inset-y-[5%] right-[-6%] w-[92%] rounded-full bg-[radial-gradient(circle,_rgba(176,214,255,0.2),_rgba(116,164,226,0.09)_34%,_rgba(46,69,103,0.028)_58%,_transparent_78%)] blur-[92px]"
    />
    <motion.img
      src="/brand/boulai-enterprise-causal-field.svg?v=1"
      alt=""
      className="absolute right-0 top-[7%] h-[86%] w-[132%] max-w-none translate-x-[9%] object-contain opacity-[0.22] blur-[22px] brightness-[1.2] contrast-[1.05]"
      draggable={false}
    />
    <motion.img
      src="/brand/boulai-enterprise-causal-field.svg?v=1"
      alt=""
      animate={{ y: [0, -8, 0], scale: [1, 1.012, 1] }}
      transition={{ duration: 12, repeat: Infinity, ease: "easeInOut" }}
      className="relative h-full w-[146%] max-w-none translate-x-[12%] object-contain opacity-[0.99] brightness-[1.14] contrast-[1.08] saturate-[1.04] [filter:drop-shadow(0_0_44px_rgba(184,220,255,0.14))]"
      draggable={false}
    />
  </motion.div>
);

export default HeroCausalAnimation;
