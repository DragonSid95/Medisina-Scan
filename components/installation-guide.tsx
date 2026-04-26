"use client";

import { motion } from "framer-motion";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { Download, Shield, Smartphone } from "lucide-react";

const steps = [
  {
    id: "step-1",
    icon: Download,
    title: "Download the APK",
    content:
      'Click the "Download Android APK" button above to download the installation file to your phone. The file will be saved to your Downloads folder.',
  },
  {
    id: "step-2",
    icon: Shield,
    title: "Allow Installation from Unknown Sources",
    content:
      'When you try to install, your phone may ask for permission. Go to Settings > Security > Install unknown apps, and enable it for your browser or file manager. This is safe for verified APKs.',
  },
  {
    id: "step-3",
    icon: Smartphone,
    title: "Install and Open the App",
    content:
      'Open the downloaded APK file and tap "Install". Once installed, open Medisina Scan from your app drawer and start scanning medicines!',
  },
];

export function InstallationGuide() {
  return (
    <section
      id="download"
      className="border-t border-border bg-card px-4 py-20 sm:px-6 lg:px-8"
    >
      <div className="mx-auto max-w-3xl">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center"
        >
          <h2 className="text-3xl font-bold text-foreground sm:text-4xl">
            How to Install
          </h2>
          <p className="mx-auto mt-4 max-w-2xl text-lg text-muted-foreground">
            Follow these simple steps to get started
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.1 }}
          className="mt-12"
        >
          <Accordion type="single" collapsible defaultValue="step-1" className="space-y-4">
            {steps.map((step, index) => (
              <AccordionItem
                key={step.id}
                value={step.id}
                className="rounded-xl border border-border bg-background px-6 data-[state=open]:bg-primary/5"
              >
                <AccordionTrigger className="py-5 hover:no-underline">
                  <div className="flex items-center gap-4">
                    <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-primary text-sm font-bold text-primary-foreground">
                      {index + 1}
                    </div>
                    <span className="text-left text-lg font-medium">
                      {step.title}
                    </span>
                  </div>
                </AccordionTrigger>
                <AccordionContent className="pb-5 pl-14 pr-4 text-base leading-relaxed text-muted-foreground">
                  {step.content}
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </motion.div>
      </div>
    </section>
  );
}
