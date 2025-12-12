import React from "react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { AlertTriangle, Home } from "lucide-react";

const NotFound = ({ language }) => {
  const texts = {
    pt: {
      title: "404",
      subtitle: "Página não encontrada",
      desc: "O caminho que você tentou acessar não existe ou foi movido.",
      button: "Voltar ao Início",
    },
    en: {
      title: "404",
      subtitle: "Page Not Found",
      desc: "The path you tried to access does not exist or has been moved.",
      button: "Back to Home",
    },
  };

  const t = texts[language];

  return (
    <div className="flex flex-col items-center justify-center min-h-[80vh] text-center px-6 relative z-10">
      <motion.div
        initial={{ scale: 0.8, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        transition={{ duration: 0.5 }}
      >
        <AlertTriangle size={64} className="text-rose-500 mb-4 mx-auto" />
        <h1 className="text-6xl font-mono font-bold mb-2 dark:text-neutral-100 text-neutral-800">
          {t.title}
        </h1>
        <h2 className="text-2xl font-medium mb-4 dark:text-neutral-300 text-neutral-600">
          {t.subtitle}
        </h2>
        <p className="mb-8 dark:text-neutral-400 text-neutral-500 max-w-md mx-auto">
          {t.desc}
        </p>

        <Link to="/">
          <button
            className="flex items-center gap-2 px-6 py-3 rounded-full font-medium transition-all shadow-lg
            bg-neutral-800 text-white hover:bg-neutral-700
            dark:bg-neutral-100 dark:text-black dark:hover:bg-neutral-200"
          >
            <Home size={18} />
            {t.button}
          </button>
        </Link>
      </motion.div>
    </div>
  );
};

export default NotFound;