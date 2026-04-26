"use client";

import { motion } from "framer-motion";
import { WifiOff, Target, Accessibility, Zap } from "lucide-react";

const features = [
  {
    icon: WifiOff,
    title: "Works Offline",
    description:
      "No internet connection required. Use it anywhere, anytime - perfect for areas with limited connectivity.",
  },
  {
    icon: Target,
    title: "Accurate Recognition",
    description:
      "Trained on selected medicine classes commonly found in Philippine pharmacies for reliable results.",
  },
  {
    icon: Accessibility,
    title: "Accessible Design",
    description:
      "Large text, high contrast colors, and simple interface designed for users of all ages including seniors.",
  },
  {
    icon: Zap,
    title: "Fast and Private",
    description:
      "All processing happens on your device. No cloud uploads means your health data stays private.",
  },
];

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.15,
    },
  },
};

const itemVariants = {
  hidden: { opacity: 0, scale: 0.95 },
  visible: {
    opacity: 1,
    scale: 1,
    transition: { duration: 0.4 },
  },
};

export function Features() {
  return (
    <section
      id="features"
      className="border-t border-border px-4 py-20 sm:px-6 lg:px-8"
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
            Features
          </h2>
          <p className="mx-auto mt-4 max-w-2xl text-lg text-muted-foreground">
            Built with accessibility and reliability in mind
          </p>
        </motion.div>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="mt-16 grid gap-6 sm:grid-cols-2"
        >
          {features.map((feature) => (
            <motion.div
              key={feature.title}
              variants={itemVariants}
              className="group rounded-2xl border border-border bg-card p-6 transition-shadow hover:shadow-lg"
            >
              <div className="flex items-start gap-4">
                <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-accent/10">
                  <feature.icon className="h-6 w-6 text-accent" />
                </div>
                <div>
                  <h3 className="text-lg font-semibold text-foreground">
                    {feature.title}
                  </h3>
                  <p className="mt-2 leading-relaxed text-muted-foreground">
                    {feature.description}
                  </p>
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
