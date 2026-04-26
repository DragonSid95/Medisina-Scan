"use client";

import { motion } from "framer-motion";
import { Download, QrCode } from "lucide-react";
import { Button } from "@/components/ui/button";

export function Hero() {
  return (
    <section className="relative overflow-hidden px-4 py-20 sm:px-6 sm:py-28 lg:px-8 lg:py-36">
      {/* Background decoration */}
      <div className="absolute inset-0 -z-10">
        <div className="absolute left-1/2 top-0 -translate-x-1/2 h-[500px] w-[800px] rounded-full bg-primary/5 blur-3xl" />
      </div>

      <div className="mx-auto max-w-4xl text-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          <span className="mb-4 inline-flex items-center rounded-full bg-accent/10 px-4 py-1.5 text-sm font-medium text-accent">
            Free Android App
          </span>
        </motion.div>

        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="mt-6 text-balance text-4xl font-bold tracking-tight text-foreground sm:text-5xl lg:text-6xl"
        >
          Never Guess Your Medicine Again
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="mx-auto mt-6 max-w-2xl text-pretty text-lg leading-relaxed text-muted-foreground sm:text-xl"
        >
          Instantly identify local medicines like Biogesic, Medicol, and Neozep
          using your phone camera. Designed for the Philippine context.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="mt-10 flex flex-col items-center justify-center gap-6 sm:flex-row sm:gap-8"
        >
          {/* Download Button */}
          <Button asChild size="lg" className="h-14 px-8 text-lg">
            <a href="#download">
              <Download className="mr-2 h-5 w-5" />
              Download Android APK (Free)
            </a>
          </Button>

          {/* QR Code */}
          <div className="flex flex-col items-center gap-2">
            <div className="flex h-28 w-28 items-center justify-center rounded-xl border-2 border-dashed border-border bg-card p-2">
              <QrCode className="h-20 w-20 text-muted-foreground" />
            </div>
            <span className="text-sm text-muted-foreground">
              Scan to download
            </span>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
