"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import SectionContainer from "@/components/atoms/SectionContainer";
import SectionTitle from "@/components/molecules/SectionTitle";

export default function About() {
  return (
    <SectionContainer id="about">
      <SectionTitle title="About Me" />

      <div className="grid gap-10 md:grid-cols-2 md:gap-16">
        {/* Profile Image */}
        <motion.div
          initial={{ opacity: 0, x: -50 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="relative mx-auto aspect-square h-auto max-w-sm overflow-hidden rounded-xl shadow-lg"
        >
          <Image
            src="/profile.jpg"
            alt="Profile"
            fill
            className="object-cover"
            sizes="(max-width: 768px) 100vw, 400px"
            priority
          />
        </motion.div>

        {/* Bio */}
        <motion.div
          initial={{ opacity: 0, x: 50 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="flex flex-col justify-center"
        >
          <p className="mb-4 text-lg leading-relaxed">
            I&apos;m a passionate frontend developer with experience building
            responsive, user-friendly web applications. I focus on creating
            clean, efficient code and intuitive user experiences. When I&apos;m
            not coding, I enjoy photography and exploring new technologies.
          </p>
        </motion.div>
      </div>
    </SectionContainer>
  );
}
