"use client"

import React, {useRef} from "react";
import {motion, useInView} from "framer-motion";
import {ArrowRight} from "lucide-react";

export default function CTASection() {
    const ref = useRef(null);
    const inView = useInView(ref, {once: true, margin: "-80px"});

    return (
        <section id="get-started" className="relative sm:px-10 py-32 sm:pt-40">
            <div className="absolute top-0 left-1/2 -translate-x-1/2 w-48 h-px"
                 style={{background: "linear-gradient(90deg, transparent, rgba(186,255,78,0.12), transparent)"}}/>

            <div className="max-w-7xl mx-auto px-6">
                <motion.div
                    ref={ref}
                    initial={{opacity: 0, y: 30}}
                    animate={inView ? {opacity: 1, y: 0} : {}}
                    transition={{duration: 0.6}}
                    className="relative overflow-hidden rounded-3xl p-10 sm:p-16 md:p-20 text-center border-2 border-accent"
                    style={{
                        background: "linear-gradient(145deg, rgba(18,22,16,0.95) 0%, rgba(12,14,10,0.98) 100%)",
                        boxShadow: "0 0 80px rgba(186,255,78,0.04) inset",
                    }}
                >
                    {/* Static bg glow */}
                    <div
                        className="absolute top-1/6 left-1/2 -translate-x-1/2 w-[700px] h-[250px] pointer-events-none"
                        style={{background: "radial-gradient(ellipse, rgba(186,255,78,0.07) 0%, transparent 70%)"}}
                    />

                    <div className="relative z-10">
                        <span className="inline-block text-xs tracking-[0.3em] uppercase font-mono mb-6 text-accent/80">
                          Are you ready?
                        </span>

                        <h2 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-extrabold tracking-tight leading-[1.02]">
                            <span className="text-white white">
                                <span className={"inline-block whitespace-nowrap mr-2 md:mr-3"}> Your next</span>
                                <span className={"inline-block whitespace-nowrap"}> home is</span>
                            </span>
                            <br/>
                            <span
                                className="bg-clip-text text-transparent bg-gradient-primary-complex"
                                // style={{backgroundImage: "linear-gradient(135deg, #BAFF4E, #60D945, #A8F04E)"}}
                            >
                                one swipe away
                            </span>
                        </h2>

                        <p className="mt-8 text-base text-white/50 max-w-lg mx-auto leading-relaxed font-light">
                            Join thousands of people who found their perfect rental through InFlat.
                            {"\nOpen the Telegram bot and start swiping today – it's free."}
                        </p>

                        {/* CTA Buttons */}
                        <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mt-12">
                            <a
                                href="https://t.me/InFlat_HK_bot"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="group relative inline-flex items-center gap-3 px-10 py-4 bg-gradient-primary shadow-glow-primary rounded-full font-semibold text-md tracking-wide transition-all duration-200 hover:scale-105"
                                style={{
                                    // background: "linear-gradient(135deg, #BAFF4E, #8FD920)",
                                    color: "#08080D",
                                    // boxShadow: "0 0 40px rgba(186,255,78,0.3)",
                                }}
                            >
                                <span className={"pl-2"}>Open InFlat</span>
                                <ArrowRight size={16}
                                            className="transition-transform duration-200 group-hover:translate-x-1"/>
                                <div
                                    className="absolute inset-0 rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-300 shadow-glow-accent"
                                    // style={{boxShadow: "0 0 50px rgba(186,255,78,0.5)"}}
                                />
                            </a>

                            {/*<a*/}
                            {/*    href="https://example.com/web"*/}
                            {/*    target="_blank"*/}
                            {/*    rel="noopener noreferrer"*/}
                            {/*    className="inline-flex items-center gap-2 px-8 py-4 rounded-full text-sm text-white/35 hover:text-white/70 border border-white/8 hover:border-[#BAFF4E]/25 hover:shadow-[0_0_20px_rgba(186,255,78,0.08)] transition-all duration-200 tracking-wide"*/}
                            {/*>*/}
                            {/*    Try on web*/}
                            {/*</a>*/}
                        </div>

                        {/* Trust badges */}
                        <div
                            className="flex flex-wrap items-center justify-center gap-x-6 gap-y-2 mt-12 text-white/25 text-sm font-normal">
                            <span>★★★★★ 4.6 on TrustPilot </span>
                            <span className="w-px h-3 bg-white/10 hidden sm:block"/>
                            <span>5K+ active users</span>
                            <span className="w-px h-3 bg-white/10 hidden sm:block"/>
                            <span>Free to use</span>
                        </div>
                    </div>
                </motion.div>
            </div>
        </section>
    );
}