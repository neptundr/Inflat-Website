"use client"

import React, { useRef } from "react";
import { motion, useInView } from "framer-motion";
import { Zap, Shield, Heart, Bell, Sparkles, DollarSign} from "lucide-react";

type FeatureProps = {
    icon: React.ElementType
    title: string
    desc: string
}

type FeatureItemProps = {
    feature: FeatureProps,
    index: number
}

const features: FeatureProps[] = [
    { icon: Zap, title: "Instant results", desc: "New listings appear in your feed within minutes of being posted." },
    { icon: Shield, title: "Verified listings", desc: "Every property is verified by our team – no scams, no surprises." },
    { icon: Sparkles, title: "Flat insights", desc: "Parking, pets, perfect views – all in one glance." },
    { icon: Heart, title: "Intelligent matching", desc: "Our algorithm learns your taste and surfaces better matches over time." },
    { icon: Bell, title: "Real-time alerts", desc: "Get notified the moment a listing matches your criteria." },
    { icon: DollarSign, title: "Money-smart picks", desc: "We balance your preferences and your wallet in every search." },
];

function FeatureItem({ feature, index } : FeatureItemProps) {
    const ref = useRef(null);
    const inView = useInView(ref, { once: true, margin: "-40px" });

    return (
        <motion.div
            ref={ref}
            initial={{ opacity: 0, y: 20 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.4, delay: index * 0.06 }}
            className="group flex gap-4 p-5 rounded-xl transition-all duration-250 hover:bg-primary/5 cursor-default"
            style={{ border: "1px solid transparent" }}
        >
            <div
                className="shrink-0 w-10 h-10 rounded-lg flex items-center justify-center bg-complimentary/10 transition-all duration-250 group-hover:scale-110"
                style={{
                    // background: "rgba(186,255,78,0.06)",
                    border: "1px solid rgba(186,255,78,0.1)",
                }}
            >
                <feature.icon size={17} className="text-primary/60 group-hover:text-primary transition-colors duration-250" />
            </div>
            <div>
                <h4 className="text-lg font-semibold text-white/75 tracking-tight group-hover:text-white transition-colors duration-250">
                    {feature.title}
                </h4>
                <p className="mt-1 text-sm text-white/50 leading-relaxed font-light">{feature.desc}</p>
            </div>
        </motion.div>
    );
}

export default function FeaturesSection() {
    const leftRef = useRef(null);
    const leftInView = useInView(leftRef, { once: true, margin: "-60px" });

    return (
        <section id="features" className="relative sm:px-10 py-32 sm:py-40">
            <div className="absolute top-0 left-1/2 -translate-x-1/2 w-48 h-px"
                 style={{ background: "linear-gradient(90deg, transparent, rgba(186,255,78,0.12), transparent)" }} />

            <div className="max-w-7xl mx-auto px-6">
                <div className="grid lg:grid-cols-2 gap-16 items-start">
                    {/* Left sticky */}
                    <motion.div
                        ref={leftRef}
                        initial={{ opacity: 0, y: 24 }}
                        animate={leftInView ? { opacity: 1, y: 0 } : {}}
                        transition={{ duration: 0.5 }}
                        className="lg:sticky lg:top-28"
                    >
                        <span className="text-xs tracking-[0.3em] uppercase font-medium text-accent/80">
                          Features
                        </span>
                        <h2 className="mt-4 text-3xl sm:text-4xl md:text-5xl font-extrabold text-white tracking-tight leading-tight">
                            Built for the way
                            <br />
                            <span
                                className="bg-clip-text text-transparent bg-gradient-primary"
                                // style={{ backgroundImage: "linear-gradient(135deg, #BAFF4E, #60D945)" }}
                            >
                                you search
                            </span>
                        </h2>
                        <p className="mt-6 text-sm text-white/28 leading-relaxed max-w-sm font-light">
                            Every feature in InFlat is designed to remove friction from your rental search –
                            so you can focus on finding the place that feels like home.
                        </p>

                        {/* Stats */}
                        <div className="flex gap-10 mt-10">
                            {[
                                { value: "50K+", label: "Active listings" },
                                { value: "2.3K", label: "Swipes daily" },
                                { value: "94%", label: "Match rate" },
                            ].map(({ value, label }) => (
                                <div key={label} className="group cursor-default">
                                    <div
                                        className="text-2xl font-bold bg-clip-text bg-gradient-complimentary text-transparent transition-all duration-200"
                                        // style={{ backgroundImage: "linear-gradient(135deg, #BAFF4E, #8FD920)" }}
                                    >
                                        {value}
                                    </div>
                                    <div className="text-xs text-white/25 mt-1">{label}</div>
                                </div>
                            ))}
                        </div>
                    </motion.div>

                    {/* Right features */}
                    <div className="grid sm:grid-cols-2 gap-1">
                        {features.map((f, i) => (
                            <FeatureItem key={f.title} feature={f} index={i} />
                        ))}
                    </div>
                </div>
            </div>
        </section>
    );
}