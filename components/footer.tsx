"use client";

import { motion } from "framer-motion";
import { Pill, AlertTriangle } from "lucide-react";

export function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <motion.footer
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5 }}
      className="border-t border-border bg-foreground px-4 py-12 text-background sm:px-6 lg:px-8"
    >
      <div className="mx-auto max-w-6xl">
        {/* Disclaimer */}
        <div className="mb-8 flex items-start gap-3 rounded-lg bg-background/10 p-4">
          <AlertTriangle className="mt-0.5 h-5 w-5 shrink-0 text-yellow-400" />
          <p className="text-sm leading-relaxed text-background/80">
            <strong>Disclaimer:</strong> This app does not replace professional
            medical advice. Always consult a healthcare professional for
            medical concerns.
          </p>
        </div>

        <div className="flex flex-col items-center gap-6 text-center sm:flex-row sm:justify-between sm:text-left">
          {/* Logo */}
          <div className="flex items-center gap-2">
            <div className="flex h-8 w-8 items-center justify-center rounded-lg bg-background">
              <Pill className="h-4 w-4 text-foreground" />
            </div>
            <span className="text-lg font-bold">Medisina Scan</span>
          </div>

          {/* Center text */}
          <div className="text-sm text-background/70">
            A Health-Tech Thesis Project
          </div>

          {/* Copyright */}
          <div className="text-sm text-background/70">
            © {currentYear} Medisina Scan. All rights reserved.
          </div>
        </div>
      </div>
    </motion.footer>
  );
}
