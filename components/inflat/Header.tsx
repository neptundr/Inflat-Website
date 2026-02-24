"use client"

import React, {useState, useEffect} from "react"
import {motion, AnimatePresence} from "framer-motion"
import {Menu, X} from "lucide-react"

export default function Header() {
    const [scrolled, setScrolled] = useState(false)
    const [mobileOpen, setMobileOpen] = useState(false)

    useEffect(() => {
        const onScroll = () => setScrolled(window.scrollY > 40)
        window.addEventListener("scroll", onScroll, {passive: true})
        return () => window.removeEventListener("scroll", onScroll)
    }, [])

    const scrollTo = (id: string) => {
        const el = document.getElementById(id)

        // Close menu first
        setMobileOpen(false)

        // Wait for menu + overflow unlock to finish
        setTimeout(() => {
            // const headerOffset = 80 // your header height (h-20 = 80px)
            const elementPosition = !el? 0: el.getBoundingClientRect().top + window.pageYOffset

            window.scrollTo({
                top: elementPosition,
                behavior: "smooth",
            })
        }, 50)
    }

    const navItems = [
        {label: "How It Works", id: "how-it-works"},
        {label: "Features", id: "features"},
    ]

    useEffect(() => {
        if (mobileOpen) {
            document.body.style.overflow = "hidden"
        } else {
            document.body.style.overflow = ""
        }

        return () => {
            document.body.style.overflow = ""
        }
    }, [mobileOpen])

    return (
        <>
            <motion.header
                animate={{y: 0, opacity: 1}}
                transition={{duration: 0.5}}
                className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 border-b border-transparent ${
                    scrolled || mobileOpen
                        ? "bg-[#021021]/5 backdrop-blur-md border-white/10"
                        : "bg-transparent"
                }`}
            >
                <div className="max-w-7xl mx-auto px-8 h-20 flex items-center justify-between">
                    <button
                        onClick={() => {
                            setMobileOpen(false);
                            scrollTo("none");
                        }}
                        className="text-white font-bold text-lg tracking-tight cursor-pointer"
                    >
                        InFlat
                    </button>
                    {/* Desktop nav */}
                    <nav className="hidden md:flex items-center gap-8">
                        {navItems.map((item) => (
                            <button
                                key={item.id}
                                onClick={() => scrollTo(item.id)}
                                className="text-sm text-white/50 hover:text-white font-semibold transition-colors duration-200 tracking-wide"
                            >
                                {item.label}
                            </button>
                        ))}
                        <button
                            onClick={() => scrollTo("get-started")}
                            className="text-sm px-5 py-2 rounded-full font-semibold transition-all duration-200 hover:scale-105 bg-gradient-primary shadow-glow-primary-reduced hover:shadow-glow-primary"
                            style={{color: "#08080D"}}
                        >
                            Get Started
                        </button>
                    </nav>

                    {/* Mobile button */}
                    <button
                        className="md:hidden text-white/70 z-[60]"
                        onClick={() => setMobileOpen(!mobileOpen)}
                    >
                        {mobileOpen ? <X size={22}/> : <Menu size={22}/>}
                    </button>
                </div>

                {/* Mobile dropdown */}
                <AnimatePresence>
                    {mobileOpen && (
                        <motion.div
                            initial={{height: 0, opacity: 0}}
                            animate={{height: "auto", opacity: 1}}
                            exit={{height: 0, opacity: 0}}
                            transition={{duration: 0.35, ease: "easeInOut"}}
                            className="md:hidden overflow-hidden border-t border-white/5 touch-pan-y"
                        >
                            <div className="px-8 pb-6">
                                {navItems.map((item) => (
                                    <button
                                        key={item.id}
                                        onClick={() => scrollTo(item.id)}
                                        className="block w-full text-left pb-3 pt-4 text-white/60 hover:text-white text-md sm:text-sm font-semibold border-b border-white/5 transition-colors"
                                    >
                                        {item.label}
                                    </button>
                                ))}
                                <button
                                    onClick={() => scrollTo("get-started")}
                                    className="mt-6 w-full text-md sm:text-sm px-5 py-2.5 rounded-full font-semibold text-black bg-gradient-primary shadow-glow-primary-reduced"
                                >
                                    Get Started
                                </button>
                            </div>
                        </motion.div>
                    )}
                </AnimatePresence>
            </motion.header>

            {/* Background overlay */}
            <AnimatePresence>
                {mobileOpen && (
                    <motion.div
                        initial={{opacity: 0}}
                        animate={{opacity: 1}}
                        exit={{opacity: 0}}
                        transition={{duration: 0.3}}
                        onClick={() => setMobileOpen(false)}
                        className="fixed inset-0 z-40 bg-black/40 backdrop-blur-md md:hidden"
                    />
                )}
            </AnimatePresence>
        </>
    )
}