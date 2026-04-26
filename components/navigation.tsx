"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Download, Menu, X, Pill } from "lucide-react";
import { Button } from "@/components/ui/button";

const navLinks = [
  { href: "#how-it-works", label: "How it Works" },
  { href: "#features", label: "Features" },
  { href: "#download", label: "Download" },
];

export function Navigation() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <motion.header
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.5, ease: "easeOut" }}
      className="sticky top-0 z-50 w-full border-b border-border/50 bg-card/80 backdrop-blur-md"
    >
      <nav className="mx-auto flex h-16 max-w-7xl items-center justify-between px-4 sm:px-6 lg:px-8">
        {/* Logo */}
        <a href="#" className="flex items-center gap-2">
          <div className="flex h-9 w-9 items-center justify-center rounded-lg bg-primary">
            <Pill className="h-5 w-5 text-primary-foreground" />
          </div>
          <span className="text-xl font-bold text-foreground">
            Medisina Scan
          </span>
        </a>

        {/* Desktop Navigation */}
        <div className="hidden items-center gap-8 md:flex">
          {navLinks.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className="text-sm font-medium text-muted-foreground transition-colors hover:text-foreground"
            >
              {link.label}
            </a>
          ))}
          <Button asChild>
            <a href="#download">
              <Download className="mr-2 h-4 w-4" />
              Download APK
            </a>
          </Button>
        </div>

        {/* Mobile Menu Button */}
        <button
          onClick={() => setIsOpen(!isOpen)}
          className="flex h-10 w-10 items-center justify-center rounded-lg text-foreground md:hidden"
          aria-label="Toggle menu"
        >
          {isOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
        </button>
      </nav>

      {/* Mobile Navigation */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.2 }}
            className="border-t border-border bg-card md:hidden"
          >
            <div className="flex flex-col gap-4 px-4 py-6">
              {navLinks.map((link) => (
                <a
                  key={link.href}
                  href={link.href}
                  onClick={() => setIsOpen(false)}
                  className="text-lg font-medium text-muted-foreground transition-colors hover:text-foreground"
                >
                  {link.label}
                </a>
              ))}
              <Button asChild className="mt-2 w-full">
                <a href="#download" onClick={() => setIsOpen(false)}>
                  <Download className="mr-2 h-4 w-4" />
                  Download APK
                </a>
              </Button>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.header>
  );
}
