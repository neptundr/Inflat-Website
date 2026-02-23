"use client"

import React from "react";
import {motion} from "framer-motion";

export default function HeroSection() {
    return (
        <section className="relative min-h-screen flex flex-col items-center justify-center overflow-hidden pt-16">
            {/* Static background glow — no animation, no lag */}
            <div
                className="absolute top-1/3 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[700px] rounded-full pointer-events-none"
                style={{
                    background: "radial-gradient(circle, rgba(186,255,78,0.07) 0%, transparent 65%)",
                }}
            />

            <div className="relative z-10 max-w-4xl mx-auto px-6 text-center">
                {/* Badge */}
                {/*<motion.div*/}
                {/*    initial={{opacity: 0, y: 16}}*/}
                {/*    animate={{opacity: 1, y: 0}}*/}
                {/*    transition={{duration: 0.5}}*/}
                {/*    className="inline-flex bg-primary/5 border border-primary/30 items-center gap-2 px-4 py-1.5 rounded-full mb-8"*/}
                {/*>*/}
                {/*    <span className="w-1.5 h-1.5 rounded-full bg-primary"/>*/}
                {/*    <span className="text-xs text-primary tracking-widest uppercase font-medium">*/}
                {/*        Now available*/}
                {/*    </span>*/}
                {/*</motion.div>*/}

                {/* Headline */}
                <motion.h1
                    initial={{opacity: 0, y: 24}}
                    animate={{opacity: 1, y: 0}}
                    transition={{duration: 0.6, delay: 0.1}}
                    className="text-5xl sm:text-6xl md:text-7xl lg:text-8xl font-extrabold tracking-tight leading-[0.95]"
                >
                    <span className="text-white">Swipe.</span>
                    <br/>
                    <span
                        className="bg-clip-text text-transparent bg-gradient-primary-complex"
                        // style={{backgroundImage: "linear-gradient(135deg, #BAFF4E, #60D945, #BAFF4E)"}}
                    >
                        Match.
                    </span>
                    <br/>
                    <span className="text-white">Move in.</span>
                </motion.h1>

                {/* Subtitle */}
                <motion.p
                    initial={{opacity: 0, y: 16}}
                    animate={{opacity: 1, y: 0}}
                    transition={{duration: 0.5, delay: 0.25}}
                    className="mt-8 text-base sm:text-lg text-white/35 max-w-md mx-auto leading-relaxed font-light"
                >
                    {"Finding your next home shouldn't feel like a job."}
                    <br/>
                    InFlat makes rental search as intuitive as swiping right.
                </motion.p>

                {/* CTA buttons */}
                <motion.div
                    initial={{opacity: 0, y: 16}}
                    animate={{opacity: 1, y: 0}}
                    transition={{duration: 0.5, delay: 0.4}}
                    className="flex flex-col sm:flex-row items-center justify-center gap-4 mt-10"
                >
                    <a
                        href="#get-started"
                        onClick={e => {
                            e.preventDefault();
                            document.getElementById("get-started")?.scrollIntoView({behavior: "smooth"});
                        }}
                        className="group px-8 py-3.5 rounded-full font-semibold bg-primary text-sm text-black tracking-wide transition-all duration-200 hover:scale-105"
                        style={{
                            // background: "linear-gradient(135deg, #BAFF4E, #8FD920)",
                            // color: "#FFFFFF",
                            boxShadow: "0 0 30px var(--color-primary)",
                        }}
                    >
                        Start swiping
                    </a>
                    <a
                        href="#how-it-works"
                        onClick={e => {
                            e.preventDefault();
                            document.getElementById("how-it-works")?.scrollIntoView({behavior: "smooth"});
                        }}
                        className="px-8 py-3.5 rounded-full text-sm text-white/45 hover:text-white border border-white/10 hover:border-primary/30 shadow hover:shadow-glow-primary transition-all duration-200 tracking-wide"
                    >
                        See how it works
                    </a>
                </motion.div>

                {/* Scroll indicator */}

            </div>
            <motion.div
                initial={{opacity: 0}}
                animate={{opacity: 1}}
                transition={{delay: 1.2, duration: 0.6}}
                className="pt-11 -mb-16 flex flex-col items-center gap-2"
            >
                <span className="text-xs text-white/20 tracking-widest uppercase">Scroll</span>
                <div className="w-px h-10 bg-gradient-to-b from-white/20 to-transparent"/>
            </motion.div>
        </section>
    );
}