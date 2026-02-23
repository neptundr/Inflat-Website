import React from "react";
import Header from "@/components/inflat/Header";
import HeroSection from "@/components/inflat/HeroSection";
import HowItWorksSection from "@/components/inflat/HowItWorksSection";
import FeaturesSection from "@/components/inflat/FeaturesSection";
import CTASection from "@/components/inflat/CTASection";
import Footer from "@/components/inflat/Footer";

export default function Home() {
    return (
        <div
            className="min-h-screen"
            style={{
                background: "#010A14",
                color: "#E8E8F0",
            }}
        >
            <Header />
            <HeroSection />
            <HowItWorksSection />
            <FeaturesSection />
            <CTASection />
            <Footer />
        </div>
    );
}