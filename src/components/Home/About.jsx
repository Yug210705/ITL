import React, { useRef, useState, useEffect, useLayoutEffect } from 'react';
import { Eye, Target, Trophy } from 'lucide-react';
import gsap from 'gsap';
import { useGSAP } from '@gsap/react';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

const AboutSection = ({ bgRef }) => {
    const containerRef = useRef(null);
    const circleRef = useRef(null);
    const centerIconRef = useRef(null);
    const [activeTab, setActiveTab] = useState(0);
    const [isMobile, setIsMobile] = useState(() => typeof window !== 'undefined' && window.innerWidth < 768);

    useLayoutEffect(() => {
        const checkMobile = () => setIsMobile(window.innerWidth < 768);
        checkMobile();
        window.addEventListener('resize', checkMobile);
        return () => window.removeEventListener('resize', checkMobile);
    }, []);

    const content = [
        {
            id: 0,
            label: "Vision",
            text: "A world in which organizations are led by trust and committed to the continuous development of people and purpose.",
            icon: Eye,
            angle: 0
        },
        {
            id: 1,
            label: "Mission",
            text: "To empower leaders with the clarity and courage to navigate complexity, ensuring sustainable growth for their communities.",
            icon: Target,
            angle: 120
        },
        {
            id: 2,
            label: "Impact",
            text: "Celebrating the milestones where human potential meets organizational excellence, creating a legacy of trusted leadership.",
            icon: Trophy,
            angle: 240
        },
    ];

    useGSAP(() => {
        const sections = content.length;

        if (isMobile) {
            // On mobile: simple fade-in animation, no pinning
            gsap.fromTo(containerRef.current,
                { opacity: 0, y: 30 },
                {
                    opacity: 1, y: 0, duration: 0.8,
                    scrollTrigger: {
                        trigger: containerRef.current,
                        start: "top 80%",
                        toggleActions: "play none none reverse"
                    }
                }
            );
            return;
        }

        // Desktop: pinned scroll animation
        const tl = gsap.timeline({
            scrollTrigger: {
                trigger: containerRef.current,
                start: "top top",
                end: "+=2000",
                pin: true,
                scrub: 1,
                onUpdate: (self) => {
                    const progress = self.progress;
                    const index = Math.min(
                        sections - 1,
                        Math.floor(progress * sections)
                    );
                    setActiveTab(index);
                }
            }
        });
        if (bgRef && bgRef.current) {
            ScrollTrigger.create({
                trigger: containerRef.current,
                start: "top top",
                end: "+=2000",
                pin: bgRef.current,
                pinSpacing: false,
                scrub: true
            });
        }

        tl.to(circleRef.current, {
            rotation: -240,
            ease: "none",
            duration: 1
        });

        tl.to(".orbit-icon-wrapper", {
            rotation: "+=240",
            ease: "none",
            duration: 1
        }, "<");

        tl.to(centerIconRef.current, {
            rotation: -240,
            ease: "none",
            duration: 1
        }, "<");

    }, { scope: containerRef, dependencies: [bgRef, isMobile] });

    // Mobile: render a simple tab-based layout without pinning
    if (isMobile) {
        return (
            <section ref={containerRef} className="relative w-full flex flex-col items-center bg-transparent py-16 px-4">


                {/* Header */}
                <div className="flex flex-col items-center text-center mb-8 w-full">
                    <div className="flex items-center gap-3 text-[10px] font-bold tracking-[0.2em] uppercase text-white mb-4">
                        <span className="w-1.5 h-1.5 bg-white inline-block"></span>
                        What Drives Us
                    </div>
                    <h2 className="text-[32px] font-serif text-white leading-tight">
                        Our North Star
                    </h2>
                </div>

                {/* Tab buttons */}
                <div className="flex gap-3 mb-8 w-full justify-center">
                    {content.map((item, index) => (
                        <button
                            key={item.id}
                            onClick={() => setActiveTab(index)}
                            className={`flex-1 py-3 px-2 rounded-xl flex flex-col items-center gap-2 transition-all duration-300 ${activeTab === index
                                ? 'bg-[#0080FFA3] border border-[#0080FFA3] text-white'
                                : 'bg-[#FFFFFF1A] text-white/60'
                                }`}
                        >
                            <item.icon className="w-5 h-5" />
                            <span className="text-[11px] font-sans font-medium">{item.label}</span>
                        </button>
                    ))}
                </div>

                {/* Content */}
                <div className="w-full bg-[#FFFFFF0A] rounded-2xl p-6 border border-white/10">
                    <div className="animate-fadeIn" key={activeTab}>
                        <h3 className="text-2xl font-serif italic text-white mb-3">
                            {content[activeTab].label}
                        </h3>
                        <p className="text-[15px] text-white/50 font-light leading-relaxed font-sans">
                            {content[activeTab].text}
                        </p>
                    </div>
                    <div className="mt-6 flex items-center gap-4 w-full">
                        <span className="font-mono text-sm text-white">
                            {activeTab + 1}/3
                        </span>
                        <div className="flex-1 h-[2px] bg-[#FFFFFF29] rounded-full relative overflow-hidden">
                            <div
                                className="absolute top-0 left-0 h-full bg-[#0080FF] transition-all duration-300 ease-out"
                                style={{ width: `${((activeTab + 1) / 3) * 100}%` }}
                            />
                        </div>
                    </div>
                </div>
            </section>
        );
    }

    // Desktop layout (original pinned layout)
    return (
        <section ref={containerRef} className="relative w-full h-screen flex flex-col items-center justify-center bg-transparent">
            <div className="w-full max-w-7xl px-12 lg:px-24 grid grid-cols-2 gap-12 items-center h-full">
                <div className="relative w-full aspect-square max-w-[500px] mx-auto flex items-center justify-center order-2 lg:order-1">
                    <div ref={circleRef} className="relative w-[400px] h-[400px] rounded-full flex items-center justify-center">
                        <svg className="absolute inset-0 w-full h-full rotate-90" viewBox="0 0 100 100">
                            <circle
                                cx="50"
                                cy="50"
                                r="49"
                                fill="#FFFFFF14"
                                backdrop-filter="blur(50px)"
                                stroke="#FFFFFF85"
                                strokeWidth="0.3"
                                strokeDasharray="2 2"
                                strokeLinecap="round"
                            />
                        </svg>
                        {content.map((item, index) => {
                            const rotation = item.angle;
                            return (
                                <div
                                    key={item.id}
                                    className="absolute top-0 left-0 w-full h-full pointer-events-none"
                                    style={{ transform: `rotate(${rotation}deg)` }}
                                >
                                    <div
                                        className="orbit-icon-wrapper absolute top-0 left-1/2 -translate-x-1/2 -translate-y-1/2 w-20 h-20 flex items-center justify-center pointer-events-auto"
                                        style={{ transform: `rotate(${-rotation}deg)` }}
                                    >
                                        <button
                                            className={`w-20 h-20 rounded-full flex items-center justify-center backdrop-blur-md transition-all duration-300 z-10 
                                                ${activeTab === index
                                                    ? 'bg-[#0080FFA3] border border-[#0080FFA3] text-white'
                                                    : 'bg-[#FFFFFF3D] text-white'
                                                }`}
                                        >
                                            <item.icon className="w-8 h-8" />
                                        </button>
                                    </div>
                                </div>
                            );
                        })}
                    </div>
                    <div ref={centerIconRef} className="absolute z-0 flex items-center justify-center pointer-events-none">
                        <svg width="420" height="420" viewBox="0 0 421 421" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-[420px] h-[400px]">
                            <g filter="url(#filter0_dd_247_79)">
                                <path d="M208.434 151.622C208.85 149.459 211.945 149.459 212.361 151.622L223.777 210.937C223.861 211.377 224.092 211.777 224.431 212.071L270.092 251.614C271.756 253.055 270.209 255.736 268.128 255.015L211.052 235.244C210.628 235.097 210.167 235.097 209.743 235.244L152.667 255.015C150.586 255.736 149.038 253.055 150.703 251.614L196.364 212.071C196.703 211.777 196.934 211.377 197.018 210.937L208.434 151.622Z" fill="white" />
                            </g>
                            <defs>
                                <filter id="filter0_dd_247_79" x="0" y="0" width="420" height="420" filterUnits="userSpaceOnUse" colorInterpolationFilters="sRGB">
                                    <feFlood floodOpacity="0" result="BackgroundImageFix" />
                                    <feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" result="hardAlpha" />
                                    <feOffset />
                                    <feGaussianBlur stdDeviation="75" />
                                    <feComposite in2="hardAlpha" operator="out" />
                                    <feColorMatrix type="matrix" values="0 0 0 0 1 0 0 0 0 1 0 0 0 0 1 0 0 0 0.64 0" />
                                    <feBlend mode="normal" in2="BackgroundImageFix" result="effect1_dropShadow_247_79" />
                                    <feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" result="hardAlpha" />
                                    <feOffset />
                                    <feGaussianBlur stdDeviation="21" />
                                    <feComposite in2="hardAlpha" operator="out" />
                                    <feColorMatrix type="matrix" values="0 0 0 0 1 0 0 0 0 1 0 0 0 0 1 0 0 0 0.16 0" />
                                    <feBlend mode="normal" in2="effect1_dropShadow_247_79" result="effect2_dropShadow_247_79" />
                                    <feBlend mode="normal" in="SourceGraphic" in2="effect2_dropShadow_247_79" result="shape" />
                                </filter>
                            </defs>
                        </svg>
                    </div>
                </div>
                <div className="flex flex-col items-start text-left space-y-6 pl-10 order-2">
                    <div className="flex items-center gap-3 text-sm font-bold tracking-[0.2em] uppercase text-white">
                        <span className="w-2 h-2 bg-white inline-block"></span>
                        What Drives Us
                    </div>
                    <h2 className="text-5xl lg:text-6xl font-serif text-white leading-tight">
                        Our North Star
                    </h2>
                    <div className="mt-8 min-h-[220px] flex flex-col justify-between w-full">
                        <div className="animate-fadeIn" key={activeTab}>
                            <h3 className="text-3xl font-serif italic text-white mb-4">
                                {content[activeTab].label}
                            </h3>
                            <p className="text-lg text-white/50 font-light leading-relaxed font-sans max-w-lg">
                                {content[activeTab].text}
                            </p>
                        </div>
                        <div className="mt-4 flex items-center justify-start gap-4 w-1/2 max-w-md">
                            <span className="font-mono text-sm text-white">
                                {activeTab + 1}/3
                            </span>
                            <div className="flex-1 h-[2px] bg-[#FFFFFF29] rounded-full relative overflow-hidden">
                                <div
                                    className="absolute top-0 left-0 h-full bg-[#0080FF] transition-all duration-300 ease-out"
                                    style={{ width: `${((activeTab + 1) / 3) * 100}%` }}
                                />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default AboutSection;