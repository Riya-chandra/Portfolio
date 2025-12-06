"use client";

import { useState, useEffect, useRef } from "react";
import { motion, useScroll, useMotionValueEvent, AnimatePresence } from "framer-motion";
import { Menu, X } from "lucide-react";
import { cn } from "@/lib/utils";
import Link from "next/link";

export function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const { scrollY } = useScroll();
  const closeBtnRef = useRef<HTMLButtonElement | null>(null);

  useMotionValueEvent(scrollY, "change", (latest) => {
    setIsScrolled(latest > 50);
  });

  // lock body scroll while menu is open
  useEffect(() => {
    if (typeof window === "undefined") return;
    if (isMobileMenuOpen) {
      document.body.style.overflow = "hidden";
      document.documentElement.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
      document.documentElement.style.overflow = "";
    }
    return () => {
      document.body.style.overflow = "";
      document.documentElement.style.overflow = "";
    };
  }, [isMobileMenuOpen]);

  // focus the close button when the drawer opens
  useEffect(() => {
    if (!isMobileMenuOpen) return;
    const t = setTimeout(() => closeBtnRef.current?.focus(), 70);
    return () => clearTimeout(t);
  }, [isMobileMenuOpen]);

  const navLinks = [
    { name: "Work", href: "#work" },
    { name: "Services", href: "#services" },
    { name: "About", href: "#about" },
    { name: "Contact", href: "#contact" },
  ];

  const handleSmoothScroll = (e: React.MouseEvent<HTMLElement>, href: string) => {
    e.preventDefault();
    const targetId = href.replace("#", "");
    const element = document.getElementById(targetId);
    if (element) {
      const offset = 80; // navbar height offset
      const top = element.getBoundingClientRect().top + window.pageYOffset - offset;
      window.scrollTo({ top, behavior: "smooth" });
    }
    setIsMobileMenuOpen(false);
  };

  return (
    <>
      <motion.nav
        initial={{ y: -100 }}
        animate={{ y: 0 }}
        transition={{ duration: 0.5 }}
        className={cn(
          "fixed top-0 left-0 right-0 z-50 transition-all duration-300 px-4",
          isScrolled ? "py-3" : "py-5"
        )}
      >
        <div
          className={cn(
            "max-w-7xl mx-auto rounded-full transition-all duration-300 flex items-center justify-between px-6 py-3",
            "glass bg-black/40 backdrop-blur-md border border-white/5"
          )}
        >
          <Link href="/" className="text-2xl font-bold tracking-tighter relative z-50 text-white">
            Riya Chandra<span className="text-blue-400">.</span>
          </Link>

          {/* Desktop Menu */}
          <div className="hidden md:flex items-center gap-8">
            {navLinks.map((link) => (
              <Link
                key={link.name}
                href={link.href}
                onClick={(e) => handleSmoothScroll(e as any, link.href)}
                className="text-sm font-medium text-white/80 hover:text-white transition-colors"
              >
                {link.name}
              </Link>
            ))}
            <button className="bg-white text-black px-5 py-2 rounded-full text-sm font-semibold hover:bg-white/90 transition-colors">
              Let's Talk
            </button>
          </div>

          {/* Mobile toggle */}
          <button
            aria-label={isMobileMenuOpen ? "Close menu" : "Open menu"}
            aria-expanded={isMobileMenuOpen}
            className="md:hidden relative z-50 text-white p-2 rounded-md hover:bg-white/10 transition-colors"
            onClick={() => setIsMobileMenuOpen((s) => !s)}
          >
            {isMobileMenuOpen ? <X /> : <Menu />}
          </button>
        </div>
      </motion.nav>

      {/* Mobile drawer */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.2 }}
            className="fixed inset-0 z-[1000] md:hidden"
            role="dialog"
            aria-modal="true"
          >
            {/* Backdrop */}
            <div
              className="absolute inset-0 bg-black/60 backdrop-blur-sm"
              onClick={() => setIsMobileMenuOpen(false)}
            />

            {/* Aside Drawer */}
            <motion.aside
              initial={{ x: "-100%" }}
              animate={{ x: 0 }}
              exit={{ x: "-100%" }}
              transition={{ type: "spring", stiffness: 300, damping: 30 }}
              className="absolute left-0 top-0 h-full w-80 max-w-[85vw] bg-[#09090b] border-r border-white/10 shadow-2xl flex flex-col"
            >
              {/* STICKY HEADER inside Drawer */}
              <div className="sticky top-0 z-10 bg-[#09090b] px-6 py-5 border-b border-white/10 flex items-center justify-between shrink-0">
                <Link
                  href="/"
                  className="text-xl font-bold tracking-tight text-white"
                  onClick={() => setIsMobileMenuOpen(false)}
                >
                  Riya Chandra<span className="text-blue-400">.</span>
                </Link>
                <button
                  aria-label="Close menu"
                  ref={closeBtnRef}
                  onClick={() => setIsMobileMenuOpen(false)}
                  className="p-2 rounded-full bg-white/5 hover:bg-white/10 text-white transition-colors"
                >
                  <X className="w-5 h-5" />
                </button>
              </div>

              {/* Scrollable content */}
              <div className="flex-1 overflow-y-auto px-6 py-8">
                <nav className="flex flex-col gap-4" aria-label="Primary navigation">
                  {navLinks.map((link, i) => (
                    <motion.button
                      key={link.name}
                      onClick={(e) => handleSmoothScroll(e as any, link.href)}
                      initial={{ x: -20, opacity: 0 }}
                      animate={{ x: 0, opacity: 1 }}
                      transition={{ delay: i * 0.1 + 0.1 }}
                      className="text-left w-full text-2xl font-medium text-white/90 hover:text-blue-400 transition-colors py-2"
                    >
                      {link.name}
                    </motion.button>
                  ))}
                </nav>

                <div className="mt-10">
                  <motion.button
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.4 }}
                    onClick={() => setIsMobileMenuOpen(false)}
                    className="w-full px-6 py-4 rounded-xl bg-white text-black font-bold text-lg shadow-lg active:scale-95 transition-all"
                  >
                    Let's Talk
                  </motion.button>
                </div>
                
                {/* Copyright / Footer at bottom of scroll area */}
                <div className="mt-12 pt-6 border-t border-white/10">
                   <p className="text-xs text-white/40 font-medium tracking-wide">
                     &copy; 2025 Riya Chandra.
                   </p>
                </div>
              </div>
            </motion.aside>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}