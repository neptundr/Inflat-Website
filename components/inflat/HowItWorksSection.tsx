"use client"

import React, {useRef} from "react";
import {motion, useInView} from "framer-motion";
import {SlidersHorizontal, ArrowLeftRight, KeyRound} from "lucide-react";

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
        description: "Love what you see? Hit a like. Not your style? Move on. Our algorithm learns and improves every time.",
        // accent: "#60D945",
    },
    {
        number: "03",
        icon: KeyRound,
        title: "Get the keys",
        description: "Matched with your dream place? Contact the landlord and sign your lease.",
        // accent: "#A8F04E",
    },
];

function StepCard({step, index}: { step: StepProps; index: number }) {
    const ref = useRef(null);
    const inView = useInView(ref, {once: true, margin: "-60px"});

    return (
        <motion.div
            initial={{opacity: 0, y: 30}}
            animate={inView ? {opacity: 1, y: 0} : {}}
            transition={{duration: 0.5, delay: index * 0.1}}
            className={`group relative ${index == 0 ? "z-10" : index == 1 ? "z-20" : "z-30"}`}
        >
            <motion.div
                initial={{scale: 0.8, opacity: 0 }}
                animate={inView ? {scale: 1, opacity: 1 } : {}}
                transition={{duration: 0.35, delay: 0.2 + index * 0.1}}
                className="absolute -top-14 -ml-10 w-24 h-24 z-30 rounded-2xl flex bg-black group-hover:shadow-glow-white border-primary/20 items-center justify-center
                    group-hover:scale-110
                    outline outline-1 outline-accent/25 group-hover:outline-2 group-hover:outline-white transition-all duration-300"
                style={{
                    // background: `rgba(186,255,78,0.07)`,
                    // border: "1px solid rgba(186,255,78,0.12)",
                }}
            >
                <step.icon size={32} className="text-primary group-hover:text-white"/>
            </motion.div>

            <div
                ref={ref}
                className={`relative h-fit rounded-2xl z-20 p-8 sm:p-10 transition-all duration-250 bg-black border border-1 border-accent group-hover:border-white
                    /*group-hover:bg-black*/ outline outline-0 outline-transparent group-hover:outline-2 group-hover:outline-white`}
            >
                <div
                    className="absolute inset-0 z-200 rounded-2xl opacity-100 bg-gradient-radial group-hover:opacity-0 transition-opacity duration-300"
                    style={{
                        // background: `radial-gradient(circle at 40% 0%, rgba(186,255,78,0.05), transparent 70%)`,
                        boxShadow: "0 0 40px rgba(186,255,78,0.4) inset",
                    }}
                />
                <div
                    className="absolute inset-0 z-200 rounded-2xl opacity-0 bg-gradient-radial group-hover:opacity-100 transition-opacity duration-300"
                    style={{
                        // background: `radial-gradient(circle at 40% 0%, rgba(186,255,78,0.05), transparent 70%)`,
                        boxShadow: "0 0 40px rgba(200,200,200,0.75) inset",
                    }}
                />
                {/* Border glow on hover */}
                <div
                    className="absolute inset-0 rounded-2xl opacity-100 group-hover:opacity-0 transition-opacity duration-300"
                    style={{border: "1px solid rgba(186,255,78,0.42)"}}
                />
                <div
                    className="absolute inset-0 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                    style={{border: "1px solid rgba(186,186,186,0.42)"}}
                />
                {/*/!* Border glow on hover *!/*/}
                {/*<div*/}
                {/*    className="absolute inset-0 rounded-2xl opacity-100 group-hover:opacity-100 transition-opacity duration-300"*/}
                {/*    style={{ border: "1px solid rgba(186,255,78,0.12)" }}*/}
                {/*/>*/}

                <div className="text-xs mt-20 sm:mt-6 font-mono tracking-widest text-white/80 uppercase">Step {step.number}</div>

                <h3
                    className="mt-4 sm:mt-5 text-2xl font-bold tracking-tight bg-clip-text text-transparent bg-gradient-complimentary
                            group-hover:bg-none group-hover:text-white"
                >
                    {step.title}
                </h3>

                <div
                    className="absolute bottom-0 left-8 right-8 h-px opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                    style={{background: "linear-gradient(90deg, transparent, rgba(186,255,78,0.25), transparent)"}}
                />
            </div>
            <div
                className={`relative rounded-3xl -top-10 z-0 px-8 sm:px-10 pt-11 pb-5 transition-all duration-250 bg-black border border-1 border-primary/40 group-hover:border-white
                    group-hover:bg-black/75 outline outline-0 outline-transparent group-hover:outline-2 group-hover:outline-white`}
            >
                <p className="mt-3 text-sm text-white/75 leading-relaxed font-light">{step.description}</p>
            </div>
        </motion.div>
    );
}

export default function HowItWorksSection() {
    const ref = useRef(null);
    const inView = useInView(ref, {once: true, margin: "-60px"});

    return (
        <section id="how-it-works" className="relative sm:px-10 py-32 sm:py-40">
            <div className="absolute top-0 left-1/2 -translate-x-1/2 w-48 h-px"
                 style={{background: "linear-gradient(90deg, transparent, rgba(186,255,78,0.12), transparent)"}}/>

            <div className="max-w-7xl mx-auto px-6">
                <motion.div
                    ref={ref}
                    initial={{opacity: 0, y: 24}}
                    animate={inView ? {opacity: 1, y: 0} : {}}
                    transition={{duration: 0.5}}
                    className="text-center mb-16"
                >
                    <span className="text-xs tracking-[0.3em] uppercase font-mono text-accent/80">
                        How it works
                    </span>
                    <h2 className="mt-4 text-3xl sm:text-4xl md:text-5xl font-extrabold tracking-tight">
                        <span className="text-white">Three steps to your </span>
                        <span
                            className="bg-clip-text text-transparent bg-gradient-primary whitespace-nowrap"
                            // style={{ backgroundImage: "linear-gradient(135deg, #BAFF4E, #60D945)" }}
                        >
                            new home
                        </span>
                    </h2>
                </motion.div>

                <div className="mt-24 grid md:grid-cols-3 gap-x-6 gap-y-3items-stretch">
                    {steps.map((step, i) => (
                        <StepCard key={step.number} step={step} index={i}/>
                    ))}
                </div>
            </div>
        </section>
    );
}