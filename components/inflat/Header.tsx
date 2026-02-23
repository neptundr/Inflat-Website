"use client"

import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { Menu, X } from "lucide-react";

export default function Header() {
    const [scrolled, setScrolled] = useState(false);
    const [mobileOpen, setMobileOpen] = useState(false);

    useEffect(() => {
        const onScroll = () => setScrolled(window.scrollY > 40);
        window.addEventListener("scroll", onScroll, { passive: true });
        return () => window.removeEventListener("scroll", onScroll);
    }, []);

    const scrollTo = (id: string) => {
        setMobileOpen(false);
        const el = document.getElementById(id);
        if (el) el.scrollIntoView({ behavior: "smooth" });
    };

    const navItems = [
        { label: "How it works", id: "how-it-works" },
        { label: "Features", id: "features" },
        { label: "Get started", id: "get-started" },
    ];

    return (
        <motion.header
            // initial={{ y: -20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.5 }}
            className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 border-b border-transparent ${
                scrolled ? "bg-021021/95 backdrop-blur-xl border-b border-white/10" : "bg-transparent"
            }`}
        >
            <div className="max-w-7xl mx-auto px-6 h-16 flex items-center justify-between">
                {/* Logo */}
                <div className="flex items-center gap-2">
                    <div
                        className="w-7 h-7 rounded-lg flex items-center justify-center bg-primary"
                        // style={{ background: "linear-gradient(135deg, #BAFF4E, #8FD920)" }}
                    >
                        <span className="text-[#08080D] font-black text-xs">iF</span>
                    </div>
                    <span className="text-white font-semibold text-lg tracking-tight">InFlat</span>
                </div>

                {/* Desktop nav */}
                <nav className="hidden md:flex items-center gap-8">
                    {navItems.map((item) => (
                        <button
                            key={item.id}
                            onClick={() => scrollTo(item.id)}
                            className="text-sm text-white/45 hover:text-white transition-colors duration-200 tracking-wide"
                        >
                            {item.label}
                        </button>
                    ))}
                    <button
                        onClick={() => scrollTo("get-started")}
                        className="text-sm px-5 py-2 rounded-full font-semibold transition-all duration-200 hover:scale-105 bg-gradient-primary"
                        style={{
                            // background: "linear-gradient(135deg, #BAFF4E, #8FD920)",
                            color: "#08080D",
                            boxShadow: "0 0 20px rgba(186,255,78,0.25)",
                        }}
                    >
                        Download App
                    </button>
                </nav>

                <button className="md:hidden text-white/70" onClick={() => setMobileOpen(!mobileOpen)}>
                    {mobileOpen ? <X size={22} /> : <Menu size={22} />}
                </button>
            </div>

            {mobileOpen && (
                <div className="md:hidden bg-[#08080D]/95 backdrop-blur-xl border-b border-white/5 px-6 pb-6">
                    {navItems.map((item) => (
                        <button
                            key={item.id}
                            onClick={() => scrollTo(item.id)}
                            className="block w-full text-left py-3 text-white/60 hover:text-white text-sm border-b border-white/5 transition-colors"
                        >
                            {item.label}
                        </button>
                    ))}
                    <button
                        onClick={() => scrollTo("get-started")}
                        className="mt-4 w-full text-sm px-5 py-2.5 rounded-full font-semibold"
                        style={{ background: "linear-gradient(135deg, #BAFF4E, #8FD920)", color: "#08080D" }}
                    >
                        Download App
                    </button>
                </div>
            )}
        </motion.header>
    );
}