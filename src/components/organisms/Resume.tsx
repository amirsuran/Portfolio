"use client";

import { motion } from "framer-motion";
import Button from "@/components/atoms/Button";
import SectionContainer from "@/components/atoms/SectionContainer";
import SectionTitle from "@/components/molecules/SectionTitle";

export default function Resume() {
  return (
    <SectionContainer id="resume" className="text-center">
      <SectionTitle title="Resume" />

      <motion.div
        className="mx-auto max-w-2xl rounded-xl bg-gray-50 p-10 dark:bg-gray-800/50"
        initial={{ opacity: 0, scale: 0.9 }}
        whileInView={{ opacity: 1, scale: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5 }}
      >
        <h3 className="mb-6 text-2xl font-bold">Download Resume</h3>

        <p className="mb-8 text-text-muted">
          Download my resume to learn more about my experience, skills, and
          education.
        </p>

        <Button href="/resume.pdf" variant="primary" download>
          Download Resume
        </Button>
      </motion.div>
    </SectionContainer>
  );
}
