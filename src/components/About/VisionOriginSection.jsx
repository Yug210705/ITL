import React, { useRef } from 'react';
import gsap from 'gsap';
import { useGSAP } from '@gsap/react';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

const VisionOriginSection = () => {
    const containerRef = useRef(null);
    const triggerRef = useRef(null);
    const headerRef = useRef(null);
    const lineRef = useRef(null);
    const maskRef = useRef(null);

    useGSAP(() => {
        const blocks = gsap.utils.toArray('.content-reveal');
        
        // Initial state
        gsap.set(blocks, { opacity: 0, y: 50 });
        gsap.set(headerRef.current, { y: "15vh", opacity: 0 });
        gsap.set(lineRef.current, { scaleX: 0 });

        const tl = gsap.timeline({
            scrollTrigger: {
                trigger: triggerRef.current,
                start: "top top",
                end: "+=5000", // Increased scroll length for slower animation
                pin: true,
                scrub: 1.2,
            }
        });

        // 1. Initial Reveal (Title + Line)
        tl.to(headerRef.current, { y: 0, opacity: 1, duration: 2, ease: "power2.out" })
          .to(lineRef.current, { scaleX: 1, duration: 1.5, ease: "power2.inOut" }, "-=1");

        // 2. Sequential Paragraph Animations
        blocks.forEach((block, i) => {
            // Reveal current block
            tl.to(block, { 
                opacity: 1, 
                y: 0, 
                duration: 4, 
                ease: "power2.out" 
            });

            // If not the last block, fade it out for the next one
            if (i < blocks.length - 1) {
                tl.to(block, { 
                    opacity: 0, 
                    y: -30, 
                    duration: 3, 
                    ease: "power2.in" 
                }, "+=2"); // Pause at 100% opacity before starting fade out
            }
        });

        // Small padding at the end
        tl.to({}, { duration: 1 });

    }, { scope: containerRef });

    return (
        <div ref={containerRef} className="relative w-full min-h-screen text-white bg-transparent">
            {/* Background Glows (SVGs) */}
            <div className='absolute inset-0 h-full w-full -z-10 pointer-events-none'>
                <svg width="100%" height="150%" viewBox="0 0 1280 1607" fill="none" className="opacity-40">
                    <g filter="url(#filter0_f_vision)">
                        <path d="M467.322 658.503C274.221 569.998 50.8455 578.503 -6.17874 764.503C-46.8001 897 22.2139 1017.31 125.321 1061.5C422.846 1189 1094.82 1157.5 1317.82 936.5C1541.15 715.177 1549.82 339 1304.32 339C1167.32 339 1106.82 496.503 1019.82 578.503C854.929 733.92 611.321 724.503 467.322 658.503Z" fill="#0000FF" />
                    </g>
                    <g filter="url(#filter1_f_vision)">
                        <path d="M417.322 678.503C224.221 589.998 0.845512 598.503 -56.1787 784.503C-96.8001 917 -27.7861 1037.31 75.3215 1081.5C372.846 1209 1044.82 1177.5 1267.82 956.5C1491.15 735.177 1499.82 359 1254.32 359C1117.32 359 1056.82 516.503 969.822 598.503C804.929 753.92 561.321 744.503 417.322 678.503Z" fill="#008000" />
                    </g>
                    <defs>
                        <filter id="filter0_f_vision" x="-218" y="139" width="1904.89" height="1197.32" filterUnits="userSpaceOnUse">
                            <feGaussianBlur stdDeviation="150" />
                        </filter>
                        <filter id="filter1_f_vision" x="-518" y="-91" width="2404.89" height="1697.32" filterUnits="userSpaceOnUse">
                            <feGaussianBlur stdDeviation="300" />
                        </filter>
                    </defs>
                </svg>
            </div>

            <section ref={triggerRef} className="relative h-screen w-full flex flex-col items-center justify-center px-4 md:px-8 lg:px-16 overflow-hidden pt-12">
                
                {/* Header Section (Pinned) */}
                <div ref={headerRef} className="w-full max-w-5xl mx-auto flex flex-col items-center z-20 mb-10">
                    <div className="flex items-center justify-center gap-3 mb-6">
                        <span className="w-2 md:w-2.5 h-2 md:h-2.5 bg-white inline-block" />
                        <span className="text-white font-sans text-[11px] md:text-xs font-bold tracking-[0.25em] uppercase">
                            WHERE WE BEGAN
                        </span>
                    </div>

                    <h2 className="font-serif text-[38px] md:text-[60px] lg:text-[72px] leading-[1.05] mb-8 text-center text-white tracking-tight">
                        Born <span className="italic text-white/30">from</span> a Vision, <br />
                        Built on Experience
                    </h2>
                    
                    <div className="w-[85vw] md:w-full max-w-2xl mx-auto h-[0.5px] bg-white/20 relative">
                        <div ref={lineRef} className="absolute inset-0 bg-white" />
                    </div>
                </div>

                {/* Sequential Content Blocks */}
                <div ref={maskRef} className="relative w-full max-w-5xl h-[350px] md:h-[400px] z-10 flex items-center justify-center">
                    
                    {/* Block 1: The Problem */}
                    <div className="content-reveal absolute inset-x-0 lg:inset-x-auto flex flex-col items-start text-left lg:translate-x-[-15%] opacity-0 pointer-events-none">
                        <div className="flex items-center gap-3 mb-5">
                            <span className="w-1.5 h-1.5 bg-white inline-block" />
                            <span className="text-white font-sans text-[11px] md:text-xs font-bold tracking-[0.3em] uppercase">THE PROBLEM</span>
                        </div>
                        <h3 className="font-serif text-[32px] md:text-[48px] lg:text-[56px] text-white mb-6 tracking-tight">The Trust Gap</h3>
                        <p className="font-sans text-white/80 text-[16px] md:text-[19px] leading-relaxed max-w-xl">
                            Leadership development has focused on skills and frameworks, while trust in leaders continues to decline. Organizations optimize performance—but lose people, engagement, and long-term resilience.
                        </p>
                    </div>

                    {/* Block 2: The Insight */}
                    <div className="content-reveal absolute inset-x-0 lg:inset-x-auto flex flex-col items-start text-left lg:translate-x-[-15%] opacity-0 pointer-events-none">
                        <div className="flex items-center gap-3 mb-5">
                            <span className="w-1.5 h-1.5 bg-white inline-block" />
                            <span className="text-white font-sans text-[11px] md:text-xs font-bold tracking-[0.3em] uppercase">THE INSIGHT</span>
                        </div>
                        <h3 className="font-serif text-[32px] md:text-[48px] lg:text-[56px] text-white mb-6 tracking-tight">
                            Trust is the Missing <br />
                            Foundation
                        </h3>
                        <p className="font-sans text-white/80 text-[16px] md:text-[19px] leading-relaxed max-w-xl">
                            Through years of research and global consulting, one insight became clear: trust isn’t a soft skill—it’s the currency of leadership effectiveness.
                        </p>
                    </div>

                    {/* Block 3: The Solution */}
                    <div className="content-reveal absolute inset-x-0 lg:inset-x-auto flex flex-col items-start text-left lg:translate-x-[-15%] opacity-0 pointer-events-none">
                        <div className="flex items-center gap-3 mb-5">
                            <span className="w-1.5 h-1.5 bg-white inline-block" />
                            <span className="text-white font-sans text-[11px] md:text-xs font-bold tracking-[0.3em] uppercase">THE SOLUTION</span>
                        </div>
                        <h3 className="font-serif text-[32px] md:text-[48px] lg:text-[56px] text-white mb-6 tracking-tight">An Integrated Ecosystem</h3>
                        <p className="font-sans text-white/80 text-[16px] md:text-[19px] leading-relaxed max-w-xl">
                            Trust cannot be built through training alone. It requires research, development, organizational transformation, and continuous learning—working together.
                        </p>
                    </div>

                </div>

            </section>
        </div>
    );
};

export default VisionOriginSection;