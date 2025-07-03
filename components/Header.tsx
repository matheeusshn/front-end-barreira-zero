import { motion } from "framer-motion";
import type { ComponentPropsWithRef } from "react";

const MotionH1 = motion<ComponentPropsWithRef<"h1">>("h1");

export default function Header() {
  return (
    <header className="text-center py-10 px-4 bg-gray-100">
      <MotionH1
        className="text-4xl font-bold"
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
      >
        Resolvendo Barreiras com Tecnologia
      </MotionH1>
      <p className="mt-4 text-lg text-gray-700 max-w-xl mx-auto">
        Uma solução de acessibilidade integrando LIBRAS, transcrição de áudio e mais.
      </p>
    </header>
  );
}