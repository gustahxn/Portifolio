import React from "react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { ArrowLeft } from "lucide-react";

const NotFound = ({ language }) => {
  const texts = {
    pt: {
      title: "Página não encontrada",
      desc: "O caminho que você está tentando acessar não existe.",
      button: "Voltar",
    },
    en: {
      title: "Page not found",
      desc: "The path you are trying to access does not exist.",
      button: "Go Back",
    },
  };

  const t = texts[language];

  return (
    <div className="flex flex-col items-center justify-center min-h-[80vh] px-6 relative z-10 w-full">
      <motion.div
        initial={{ opacity: 0, y: 10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="text-center"
      >
        <h1
          className="text-4xl md:text-5xl font-bold tracking-tight mb-4 font-mono 
          dark:text-neutral-100 text-neutral-900"
        >
          {t.title}
        </h1>

        <p
          className="text-sm md:text-base leading-relaxed mb-10 max-w-md mx-auto
          dark:text-neutral-400 text-neutral-600"
        >
          {t.desc}
        </p>

        <Link to="/">
          <button
            className="inline-flex items-center gap-2 px-6 py-2.5 rounded text-sm font-medium transition-all
            bg-neutral-900 text-white hover:bg-neutral-200 hover:border-neutral-800 hover:text-black
            border-2 border-transparent
            dark:bg-neutral-100 dark:text-black dark:hover:bg-neutral-900 dark:hover:border-neutral-500 dark:hover:text-white"
          >
            <ArrowLeft size={16} />
            {t.button}
          </button>
        </Link>
      </motion.div>
    </div>
  );
};

export default NotFound;