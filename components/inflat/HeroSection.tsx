"use client"

import React, {useRef, useState} from "react";
import {motion} from "framer-motion";
import ParticlesLayer from "@/components/inflat/Particle";

export default function HeroSection() {
    const [btnHovered, setBtnHovered] = useState(false);
    const ref = useRef<HTMLDivElement>(null);

    const handleMouseMove = (e: React.MouseEvent) => {
        const rect = ref.current!.getBoundingClientRect();
        const x = e.clientX - rect.left;
        const y = e.clientY - rect.top;

        ref.current!.style.setProperty("--x", `${x}px`);
        ref.current!.style.setProperty("--y", `${y}px`);
    };

    return (
        <section
            ref={ref}
            onMouseMove={handleMouseMove}
            className="group relative min-h-screen flex flex-col items-center justify-center overflow-hidden pt-16"
        >
            {/* particle layer */}
            <div className="absolute inset-0" style={{filter: "blur(50px)"}}>
                <ParticlesLayer count={35} minSize={150} maxSize={400} speed={2.5} color="rgba(232, 255, 61, 0.87)"/>
                <div
                    className={`pointer-events-none absolute inset-0 glow-layer transition-opacity duration-500 opacity-0 group-hover:opacity-80`}/>
            </div>

            <div
                className="absolute inset-0 bg-white opacity-5"
                // style={{ zIndex: -1 }}
            />
            <motion.div
                initial={{ opacity: 100 }}
                animate={{ opacity: 0 }}
                transition={{ duration: 0.4, delay:0.3}}

                className={`absolute inset-0 bg-black`}
                // style={{ zIndex: -2 }}
            />
            <div
                className={`absolute inset-0 bg-black transition-opacity duration-500 ${btnHovered ? "opacity-100" : "opacity-50"}`}
                // style={{ zIndex: -2 }}
            />

            <div
                className={`absolute inset-0 z-10 overflow-hidden opacity-0`}
                style={{
                    backgroundImage: "url(/textures/HK.png)",
                    backgroundRepeat: "no-repeat",
                    backgroundPosition: "center bottom",
                    backgroundSize: "auto 100%",
                    filter: "brightness(0%) " +
                        "blur(3.5px)" +
                        "",
                }}
            />

            <div
                className="absolute z-20 top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[700px] rounded-full pointer-events-none"
                style={{
                    background: "radial-gradient(circle, rgba(186,255,78,0.17) 0%, transparent 65%)",
                }}
            />
            <div
                className="absolute z-20 top-3/4 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[800px] rounded-full pointer-events-none"
                style={{
                    background: "radial-gradient(circle, rgba(0,0,0,0.90) 0%, transparent 50%)",
                    filter: "blur(50px)"
                }}
            />
            <div className="absolute inset-x-0 bottom-0 h-1/3 z-20 pointer-events-none bg-gradient-to-b from-transparent to-[#010801]" />

            <div className="relative z-20 max-w-4xl mx-auto px-6 text-center">
                {/* Headline */}
                <motion.h1
                    initial={{opacity: 0, y: 24}}
                    animate={{opacity: 1, y: 0}}
                    transition={{duration: 0.6, delay: 0.1}}
                    className="text-7xl sm:text-6xl md:text-7xl lg:text-8xl font-title font-extrabold tracking-tight leading-[0.95]"
                >
                    <span className={`text-white mb-10 transition-all duration-300`}>Swipe.</span>
                    <br/>
                    <span
                        className="bg-clip-text text-transparent bg-gradient-primary-complex"
                        // style={{backgroundImage: "linear-gradient(135deg, #BAFF4E, #60D945, #BAFF4E)"}}
                    >
                        Match.
                    </span>
                    <br/>
                    <span className={`text-white transition-all duration-300`}>Move in.</span>
                </motion.h1>

                {/* CTA buttons */}
                <motion.div
                    initial={{opacity: 0, y: 16}}
                    animate={{opacity: 1, y: 0}}
                    transition={{duration: 0.5, delay: 0.25}}
                    className="flex flex-col sm:flex-row items-center justify-center gap-4 mt-10"
                >
                    <a
                        // href="#get-started"
                        onClick={e => {
                            e.preventDefault();
                            document.getElementById("get-started")?.scrollIntoView({behavior: "smooth"});
                        }}
                        className={`group relative px-9 py-4 hover:my-4 rounded-full 
                                    bg-primary hover:bg-accent
                                    font-extrabold  text-black 
                                    border-4 border-accent 
                                    text-4xl sm:text-5xl md:text-6xl lg:text-7xl sm:hover:text-6xl md:hover:text-7xl lg:hover:text-7xl 
                                    tracking-wide transition-all duration-300 whitespace-nowrap
                                    shadow-glow-primary hover:shadow-glow-primary-extended`}
                        style={{
                            // background: "linear-gradient(135deg, #BAFF4E, #8FD920)",
                            // color: "#FFFFFF",
                            // boxShadow: "0 0 30px var(--color-accent)",
                        }}
                        onMouseEnter={() => setBtnHovered(true)}
                        onMouseLeave={() => setBtnHovered(false)}
                    >
                        {/* Hover glow overlay */}
                        <div
                            className="absolute inset-0 rounded-full bg-gradient-radial opacity-100"
                            style={{
                                // background: `radial-gradient(circle at 40% 0%, rgba(186,255,78,0.05), transparent 70%)`,
                                boxShadow: "0 0 40px rgba(186,255,78,0.25) inset",
                            }}
                        />
                        {/* Border glow on hover */}
                        <div
                            className="absolute inset-0 rounded-full opacity-100"
                            style={{border: "1px solid rgba(186,255,78,0.42)"}}
                        />
                        Start swiping
                    </a>
                    {/*<a*/}
                    {/*    href="#how-it-works"*/}
                    {/*    onClick={e => {*/}
                    {/*        e.preventDefault();*/}
                    {/*        document.getElementById("how-it-works")?.scrollIntoView({behavior: "smooth"});*/}
                    {/*    }}*/}
                    {/*    className="px-8 py-3.5 rounded-full text-sm text-white/45 hover:text-white border border-white/10 hover:border-primary/30 shadow hover:shadow-glow-primary transition-all duration-200 tracking-wide"*/}
                    {/*>*/}
                    {/*    See how it works*/}
                    {/*</a>*/}
                </motion.div>

                {/* Subtitle */}
                <motion.p
                    initial={{opacity: 0, y: 16}}
                    animate={{opacity: 1, y: 0}}
                    transition={{duration: 0.5, delay: 0.4}}
                    className={`mt-10 text-base sm:text-lg  max-w-md mx-auto leading-relaxed font-normal transition-colors ${btnHovered ? "text-gray-300" : "text-gray-400"}`}
                >
                    Your dream home, in seconds
                </motion.p>
            </div>
            <motion.div
                initial={{opacity: 0}}
                animate={{opacity: 1}}
                transition={{delay: 1.1, duration: 0.6}}
                className="pt-11 -mb-16 z-30 flex flex-col items-center gap-2"
            >
                <span className="text-xs text-gray-400 tracking-widest font-mono uppercase">Scroll</span>
                <div className="w-px h-10 bg-gradient-to-b from-gray-500/40 to-transparent"/>
            </motion.div>
        </section>
    );
}