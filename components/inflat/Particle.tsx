"use client";

import React, { useEffect, useRef } from "react";

interface ParticleProps {
    count?: number;
    color?: string;
    minSize?: number;
    maxSize?: number;
    speed?: number; // units per second (scaled below)
}

interface ParticleState {
    x: number;
    y: number;
    dx: number; // px / second
    dy: number; // px / second
    size: number;
    el: HTMLDivElement;
}

export default function ParticlesLayer({
                                           count = 30,
                                           color = "rgba(186,255,78,0.3)",
                                           minSize = 40,
                                           maxSize = 120,
                                           speed = 0.3,
                                       }: ParticleProps) {
    const containerRef = useRef<HTMLDivElement>(null);
    const particlesRef = useRef<ParticleState[]>([]);
    const rafRef = useRef<number | null>(null);

    useEffect(() => {
        const container = containerRef.current;
        if (!container) return;

        const particles: ParticleState[] = [];
        const width = container.clientWidth;
        const height = container.clientHeight;

        for (let i = 0; i < count; i++) {
            const size = minSize + Math.random() * (maxSize - minSize);
            const el = document.createElement("div");

            Object.assign(el.style, {
                position: "absolute",
                left: "0px",
                top: "0px",
                width: `${size}px`,
                height: `${size}px`,
                borderRadius: "50%",
                pointerEvents: "none",
                background: `radial-gradient(circle, ${color} 0%, transparent 50%)`,
                willChange: "transform",
            });

            container.appendChild(el);

            particles.push({
                x: Math.random() * (width - size),
                y: (Math.random() * (height - size)),
                dx: (Math.random() - 0.5) * speed * 100, // px/sec
                dy: (Math.random() - 0.5) * speed * 100, // px/sec
                size,
                el,
            });
        }

        particlesRef.current = particles;

        let lastTime = performance.now();

        const animate = (time: number) => {
            const dt = (time - lastTime) / 1000;
            lastTime = time;

            const w = container.clientWidth;
            const h = container.clientHeight;

            for (const p of particlesRef.current) {
                p.x += p.dx * dt;
                p.y += p.dy * dt;

                if (p.x <= 0) {
                    p.x = 0;
                    p.dx *= -1;
                } else if (p.x >= w - p.size) {
                    p.x = w - p.size;
                    p.dx *= -1;
                }

                if (p.y <= 0) {
                    p.y = 0;
                    p.dy *= -1;
                } else if (p.y >= h - p.size) {
                    p.y = h - p.size;
                    p.dy *= -1;
                }

                p.el.style.transform = `translate(${p.x}px, ${p.y}px)`;
            }

            rafRef.current = requestAnimationFrame(animate);
        };

        rafRef.current = requestAnimationFrame(animate);

        return () => {
            if (rafRef.current !== null) {
                cancelAnimationFrame(rafRef.current);
            }
            particles.forEach((p) => {
                container.removeChild(p.el);
            });
            particlesRef.current = [];
        };
    }, [count, color, minSize, maxSize, speed]);

    return (
        <div
            ref={containerRef}
            className="absolute inset-0 z-0 pointer-events-none"
        />
    );
}