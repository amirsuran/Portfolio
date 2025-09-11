"use client";

import { motion } from "framer-motion";
import Button from "@/components/atoms/Button";

export default function Hero() {
  const container = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
        delayChildren: 0.3,
      },
    },
  };

  const item = {
    hidden: { opacity: 0, y: 20 },
    show: { opacity: 1, y: 0, transition: { duration: 0.5 } },
  };

  return (
    <section
      id="home"
      className="relative flex min-h-screen items-center pt-16"
    >
      <div className="container-custom">
        <motion.div
          className="mx-auto max-w-3xl text-center"
          variants={container}
          initial="hidden"
          animate="show"
        >
          {/* Headline */}
          <motion.h1
            className="mb-6 text-4xl font-bold sm:text-5xl md:text-6xl"
            variants={item}
          >
            Building impactful digital experiences
          </motion.h1>

          {/* Subheading */}
          <motion.p
            className="mb-10 text-lg text-text-muted dark:text-text-muted md:text-xl"
            variants={item}
          >
            Frontend Developer specializing in React.js and Next.js
          </motion.p>

          {/* Buttons */}
          <motion.div
            className="flex flex-col items-center justify-center space-y-4 sm:flex-row sm:space-y-0 sm:space-x-4"
            variants={item}
          >
            <Button href="/resume.pdf" download variant="primary">
              Download Resume
            </Button>
            <Button href="#projects" variant="secondary">
              View Projects
            </Button>
          </motion.div>
        </motion.div>

        {/* Scroll indicator */}
        <motion.div
          className="absolute bottom-10 left-1/2 -translate-x-1/2"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.5 }}
        >
          <motion.a
            href="#about"
            className="flex flex-col items-center text-sm text-text-muted"
            animate={{ y: [0, 10, 0] }}
            transition={{
              repeat: Infinity,
              duration: 2,
              ease: "easeInOut",
            }}
          >
            <span className="mb-2">Scroll down</span>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="20"
              height="20"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              <polyline points="6 9 12 15 18 9"></polyline>
            </svg>
          </motion.a>
        </motion.div>
      </div>
    </section>
  );
}
