"use client"

import React, { useRef } from "react";
import { motion, useInView } from "framer-motion";
import { SlidersHorizontal, ArrowLeftRight, KeyRound } from "lucide-react";

type StepProps = {
    number: string
    icon: React.ElementType
    title: string
    description: string
    // accent: string
}

const steps: StepProps[] = [
    {
        number: "01",
        icon: SlidersHorizontal,
        title: "Set your preferences",
        description: "Budget, location, rooms, pet-friendly – tell us what matters and we'll curate your feed in seconds.",
        // accent: "#BAFF4E",
    },
    {
        number: "02",
        icon: ArrowLeftRight,
        title: "Swipe through listings",
        description: "Like what you see? Swipe right. Not your style? Swipe left. Our algorithm learns and improves every time.",
        // accent: "#60D945",
    },
    {
        number: "03",
        icon: KeyRound,
        title: "Move in",
        description: "Matched with your dream place? Contact the landlord and sign your lease – all within the app.",
        // accent: "#A8F04E",
    },
];

function StepCard({ step, index} : {step: StepProps ; index: number }) {
    const ref = useRef(null);
    const inView = useInView(ref, { once: true, margin: "-60px" });

    return (
        <motion.div
            ref={ref}
            initial={{ opacity: 0, y: 30 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.5, delay: index * 0.1 }}
            className="group relative rounded-2xl p-8 sm:p-10 transition-all duration-300 hover:-translate-y-1 border border-1 border-white/5"
            style={{
                background: "rgba(18,18,28,0.7)",
                // border: "1px solid rgba(255,255,255,0.05)",
            }}
        >
            {/* Hover glow overlay */}
            <div
                className="absolute inset-0 rounded-2xl opacity-0 bg-gradient-radial group-hover:opacity-100 transition-opacity duration-300"
                style={{
                    // background: `radial-gradient(circle at 40% 0%, rgba(186,255,78,0.05), transparent 70%)`,
                    boxShadow: "0 0 40px rgba(186,255,78,0.04) inset",
                }}
            />
            {/* Border glow on hover */}
            <div
                className="absolute inset-0 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                style={{ border: "1px solid rgba(186,255,78,0.12)" }}
            />

            <span className="text-xs font-mono tracking-widest text-white/15 uppercase">Step {step.number}</span>

            <div
                className="mt-6 w-11 h-11 rounded-xl flex bg-primary/7 border-primary/12 items-center justify-center transition-all duration-300 group-hover:scale-110"
                style={{
                    // background: `rgba(186,255,78,0.07)`,
                    border: "1px solid rgba(186,255,78,0.12)",
                }}
            >
                <step.icon size={20} className="text-primary" />
            </div>

            <h3
                className="mt-6 text-xl font-bold tracking-tight bg-clip-text text-transparent bg-gradient-complimentary"
            >
                {step.title}
            </h3>
            <p className="mt-3 text-sm text-white/30 leading-relaxed font-light">{step.description}</p>

            <div
                className="absolute bottom-0 left-8 right-8 h-px opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                style={{ background: "linear-gradient(90deg, transparent, rgba(186,255,78,0.25), transparent)" }}
            />
        </motion.div>
    );
}

export default function HowItWorksSection() {
    const ref = useRef(null);
    const inView = useInView(ref, { once: true, margin: "-60px" });

    return (
        <section id="how-it-works" className="relative sm:px-10 py-32 sm:py-40">
            <div className="absolute top-0 left-1/2 -translate-x-1/2 w-48 h-px"
                 style={{ background: "linear-gradient(90deg, transparent, rgba(186,255,78,0.12), transparent)" }} />

            <div className="max-w-7xl mx-auto px-6">
                <motion.div
                    ref={ref}
                    initial={{ opacity: 0, y: 24 }}
                    animate={inView ? { opacity: 1, y: 0 } : {}}
                    transition={{ duration: 0.5 }}
                    className="text-center mb-16"
                >
          <span className="text-xs tracking-[0.3em] uppercase font-medium text-accent/80">
            How it works
          </span>
                    <h2 className="mt-4 text-3xl sm:text-4xl md:text-5xl font-extrabold tracking-tight">
                        <span className="text-white">Three steps to your </span>
                        <span
                            className="bg-clip-text text-transparent bg-gradient-primary"
                            // style={{ backgroundImage: "linear-gradient(135deg, #BAFF4E, #60D945)" }}
                        >
              new home
            </span>
                    </h2>
                </motion.div>

                <div className="grid md:grid-cols-3 gap-5">
                    {steps.map((step, i) => (
                        <StepCard key={step.number} step={step} index={i} />
                    ))}
                </div>
            </div>
        </section>
    );
}