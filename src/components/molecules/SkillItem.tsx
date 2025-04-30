"use client";

import { motion } from "framer-motion";

interface SkillItemProps {
  name: string;
  icon: React.ReactNode;
  proficiency: number; // 0-100
}

export default function SkillItem({ name, icon, proficiency }: SkillItemProps) {
  return (
    <motion.div
      className="flex flex-col items-center rounded-lg border border-gray-200 p-6 shadow-sm dark:border-gray-700"
      whileHover={{ y: -5, transition: { duration: 0.2 } }}
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-50px" }}
      transition={{ duration: 0.5 }}
    >
      {/* Icon */}
      <div className="mb-4 text-4xl text-primary">{icon}</div>

      {/* Name */}
      <h3 className="mb-3 text-lg font-medium">{name}</h3>

      {/* Progress bar */}
      <div className="mt-2 h-2 w-full rounded-full bg-gray-200 dark:bg-gray-700">
        <motion.div
          className="h-2 rounded-full bg-primary"
          style={{ width: `${proficiency}%` }}
          initial={{ width: 0 }}
          whileInView={{ width: `${proficiency}%` }}
          viewport={{ once: true }}
          transition={{
            duration: 1,
            ease: "easeOut",
            delay: 0.2,
          }}
        />
      </div>

      {/* Percentage */}
      <span className="mt-1 text-sm text-text-muted">{proficiency}%</span>
    </motion.div>
  );
}
