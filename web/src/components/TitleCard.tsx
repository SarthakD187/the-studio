import { motion } from "framer-motion";
import { useNavigate } from "react-router-dom";

export function TitleCard() {
  const navigate = useNavigate();
  return (
    <div
      className="min-h-dvh w-full flex items-center justify-center bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-zinc-900 via-zinc-950 to-black"
      onClick={() => navigate("/")}
      role="button"
      aria-label="Enter The Studio"
    >
      <motion.div
        initial={{ opacity: 0, filter: "blur(8px)" }}
        animate={{ opacity: 1, filter: "blur(0px)" }}
        transition={{ duration: 0.8 }}
        className="backdrop-blur-xl bg-white/5 border border-white/10 rounded-2xl px-10 py-14 text-center shadow-2xl"
      >
        <h1 className="text-6xl md:text-8xl font-bold tracking-tight">The Studio</h1>
        <p className="mt-4 text-zinc-300">Click anywhere to enter</p>
      </motion.div>
    </div>
  );
}
