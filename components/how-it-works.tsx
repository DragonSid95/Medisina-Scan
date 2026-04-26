"use client";

import { motion } from "framer-motion";
import { Camera, Cpu, FileCheck } from "lucide-react";

const steps = [
  {
    icon: Camera,
    title: "Snap a Photo",
    description: "Place the medicine on a flat surface and take a clear photo",
  },
  {
    icon: Cpu,
    title: "AI Analysis",
    description: "The app analyzes it instantly using on-device AI",
  },
  {
    icon: FileCheck,
    title: "Get Results",
    description: "View the medicine name and details clearly",
  },
];

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.2,
    },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: 30 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.5 },
  },
};

export function HowItWorks() {
  return (
    <section
      id="how-it-works"
      className="border-t border-border bg-card px-4 py-20 sm:px-6 lg:px-8"
    >
      <div className="mx-auto max-w-6xl">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center"
        >
          <h2 className="text-3xl font-bold text-foreground sm:text-4xl">
            How It Works
          </h2>
          <p className="mx-auto mt-4 max-w-2xl text-lg text-muted-foreground">
            Three simple steps to identify any medicine
          </p>
        </motion.div>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="mt-16 grid gap-8 md:grid-cols-3"
        >
          {steps.map((step, index) => (
            <motion.div
              key={step.title}
              variants={itemVariants}
              className="group relative"
            >
              <div className="flex flex-col items-center text-center">
                {/* Step number */}
                <div className="absolute -top-3 left-1/2 -translate-x-1/2 flex h-7 w-7 items-center justify-center rounded-full bg-primary text-sm font-bold text-primary-foreground">
                  {index + 1}
                </div>

                {/* Icon */}
                <div className="flex h-20 w-20 items-center justify-center rounded-2xl bg-primary/10 transition-colors group-hover:bg-primary/20">
                  <step.icon className="h-10 w-10 text-primary" />
                </div>

                {/* Content */}
                <h3 className="mt-6 text-xl font-semibold text-foreground">
                  {step.title}
                </h3>
                <p className="mt-3 text-base leading-relaxed text-muted-foreground">
                  {step.description}
                </p>
              </div>

              {/* Connector line */}
              {index < steps.length - 1 && (
                <div className="absolute right-0 top-10 hidden h-0.5 w-full translate-x-1/2 bg-border md:block" />
              )}
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
