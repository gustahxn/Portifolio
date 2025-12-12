import React from "react";
import { Link, useLocation } from "react-router-dom";
import { motion } from "framer-motion";
import { AlertCircle, ArrowLeft } from "lucide-react";

const NotFound = ({ language }) => {
  const location = useLocation();

  const texts = {
    pt: {
      label: "ERRO DE SISTEMA",
      title: "404",
      desc: "O recurso solicitado não pôde ser encontrado no servidor.",
      terminalLog: "Tentativa de acesso negada ou rota inexistente:",
      suggestion: "Tente navegar de volta para a segurança.",
      button: "Retornar ao Início",
    },
    en: {
      label: "SYSTEM ERROR",
      title: "404",
      desc: "The requested resource could not be found on the server.",
      terminalLog: "Access attempt denied or route non-existent:",
      suggestion: "Try navigating back to safety.",
      button: "Return to Home",
    },
  };

  const t = texts[language];

  return (
    <div className="flex flex-col items-center justify-center min-h-[80vh] px-6 relative z-10 w-full max-w-2xl mx-auto">
      
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="w-full"
      >
        
        <div className="text-center mb-8">
          <div className="inline-flex items-center gap-2 px-3 py-1 text-xs font-mono font-bold tracking-wider mb-4
            bg-rose-100 text-rose-600 dark:bg-rose-900/30 dark:text-rose-400 border border-rose-200 dark:border-rose-800 rounded-sm">
            <AlertCircle size={14} />
            {t.label}
          </div>
          
          <h1 className="text-8xl md:text-9xl font-black font-mono tracking-tighter mb-2
            bg-gradient-to-b from-neutral-800 to-neutral-400 dark:from-white dark:to-neutral-600 
            bg-clip-text text-transparent select-none">
            {t.title}
          </h1>
          
          <p className="text-neutral-500 dark:text-neutral-400 font-medium font-mono text-sm">
            {t.desc}
          </p>
        </div>

        <div className="w-full font-mono text-sm shadow-none mb-8 rounded-sm
          bg-neutral-50 border border-neutral-300
          dark:bg-neutral-900/80 dark:border-neutral-800">
          
          <div className="flex items-center gap-2 px-4 py-2 border-b border-neutral-300 dark:border-neutral-800 bg-neutral-100 dark:bg-neutral-800">
            <div className="w-3 h-3 bg-neutral-400 dark:bg-neutral-600" />
            <span className="ml-2 text-xs text-neutral-500">debug_console.exe</span>
          </div>

          <div className="p-4 space-y-2 text-neutral-600 dark:text-neutral-400">
            <div className="flex">
              <span className="text-emerald-500 mr-2">➜</span>
              <span>~ root user request</span>
            </div>
            <div className="flex text-rose-500">
              <span className="mr-2">✖</span>
              <span>Error: Target not found</span>
            </div>
            <div className="pl-4 border-l-2 border-neutral-300 dark:border-neutral-700 ml-1 py-1 my-2 bg-neutral-100 dark:bg-neutral-900/50 p-2">
              <p>{t.terminalLog}</p>
              <p className="text-rose-500 font-bold mt-1 break-all">"{location.pathname}"</p>
            </div>
            <div className="flex items-center gap-2 animate-pulse mt-4">
              <span className="text-emerald-500">➜</span>
              <span className="w-2 h-4 bg-emerald-500 block"></span>
            </div>
          </div>
        </div>

        <div className="flex justify-center">
          <Link to="/">
            <motion.button
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
              className="group flex items-center gap-3 px-8 py-3 font-bold transition-all rounded-sm
                bg-neutral-900 text-white border border-transparent hover:bg-black
                dark:bg-white dark:text-black dark:hover:bg-neutral-200"
            >
              <ArrowLeft size={18} className="group-hover:-translate-x-1 transition-transform" />
              {t.button}
            </motion.button>
          </Link>
        </div>

      </motion.div>
    </div>
  );
};

export default NotFound;