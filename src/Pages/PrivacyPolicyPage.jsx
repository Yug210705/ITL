import React, { useEffect, useLayoutEffect, useRef } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

export default function PrivacyPolicyPage() {
    const containerRef = useRef(null);

    useLayoutEffect(() => {
        let ctx = gsap.context(() => {
            gsap.from(".reveal-header", {
                y: 50,
                opacity: 0,
                duration: 1.2,
                stagger: 0.15,
                ease: "power3.out",
                delay: 0.1
            });

            gsap.utils.toArray('.reveal-section').forEach((section) => {
                gsap.from(section, {
                    y: 50,
                    opacity: 0,
                    duration: 1,
                    ease: "power2.out",
                    scrollTrigger: {
                        trigger: section,
                        start: "top 85%",
                    }
                });
            });

            gsap.utils.toArray('.reveal-sidebar').forEach((sidebarItem) => {
                gsap.from(sidebarItem, {
                    x: 30,
                    opacity: 0,
                    duration: 1,
                    ease: "power2.out",
                    scrollTrigger: {
                        trigger: sidebarItem,
                        start: "top 90%"
                    }
                });
            });

            gsap.from(".reveal-finale", {
                y: 80,
                scale: 0.95,
                opacity: 0,
                duration: 1.2,
                ease: "power3.out",
                scrollTrigger: {
                    trigger: ".reveal-finale",
                    start: "top 80%"
                }
            });

        }, containerRef);
        return () => ctx.revert();
    }, []);

    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);

    const handleScroll = (id) => {
        const element = document.getElementById(id);
        if (element) {
            element.scrollIntoView({ behavior: 'smooth' });
        }
    };

    return (
        <div ref={containerRef} className="bg-bg-dark min-h-screen relative overflow-clip text-white w-full pt-32 pb-0">
            
            {/* SHARED PREMIUM BACKGROUND SVG */}
            <div className='absolute h-full w-full top-0 left-0 z-0 pointer-events-none overflow-hidden'>
                <svg width="100%" height="1500" className="min-h-[190vh]" viewBox="0 0 1280 1607" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <g filter="url(#filter0_f_shared_privacy)">
                        <path d="M467.322 658.503C274.221 569.998 50.8455 578.503 -6.17874 764.503C-46.8001 897 22.2139 1017.31 125.321 1061.5C422.846 1189 1094.82 1157.5 1317.82 936.5C1541.15 715.177 1549.82 339 1304.32 339C1167.32 339 1106.82 496.503 1019.82 578.503C854.929 733.92 611.321 724.503 467.322 658.503Z" fill="#0000FF" style={{ fill: "#0000FF", fillOpacity: 0.8 }} />
                    </g>
                    <g filter="url(#filter1_f_shared_privacy)">
                        <path d="M417.322 678.503C224.221 589.998 0.845512 598.503 -56.1787 784.503C-96.8001 917 -27.7861 1037.31 75.3215 1081.5C372.846 1209 1044.82 1177.5 1267.82 956.5C1491.15 735.177 1499.82 359 1254.32 359C1117.32 359 1056.82 516.503 969.822 598.503C804.929 753.92 561.321 744.503 417.322 678.503Z" fill="#008000" style={{ fill: "#008000", fillOpacity: 0.8 }} />
                    </g>
                    <defs>
                        <filter id="filter0_f_shared_privacy" x="-218" y="139" width="1904.89" height="1197.32" filterUnits="userSpaceOnUse" colorInterpolationFilters="sRGB">
                            <feFlood floodOpacity="0" result="BackgroundImageFix" />
                            <feBlend mode="normal" in="SourceGraphic" in2="BackgroundImageFix" result="shape" />
                            <feGaussianBlur stdDeviation="100" result="effect1_foregroundBlur_shared" />
                        </filter>
                        <filter id="filter1_f_shared_privacy" x="-518" y="-91" width="2404.89" height="1697.32" filterUnits="userSpaceOnUse" colorInterpolationFilters="sRGB">
                            <feFlood floodOpacity="0" result="BackgroundImageFix" />
                            <feBlend mode="normal" in="SourceGraphic" in2="BackgroundImageFix" result="shape" />
                            <feGaussianBlur stdDeviation="225" result="effect1_foregroundBlur_shared" />
                        </filter>
                    </defs>
                </svg>
            </div>

            <div className="relative z-10 max-w-[1400px] mx-auto px-6 md:px-12 lg:px-20 w-full flex flex-col font-sans">
                
                {/* Header Area */}
                <div className="border-b border-white/10 pb-12 mb-12 lg:mb-16 mt-0 relative">
                    <span className="reveal-header flex items-center gap-3 font-sans text-[9px] md:text-[10px] font-bold tracking-[0.25em] uppercase text-white/50 mb-6">
                        <span className="w-1.5 h-1.5 bg-white inline-block"></span>
                        INSTITUTE FOR TRUSTED LEADERSHIP
                    </span>

                    <h1 className="reveal-header font-serif text-[48px] md:text-[64px] lg:text-[80px] leading-[1.05] text-white tracking-tight max-w-4xl relative z-10">
                        Privacy Policy
                    </h1>
                    
                    <p className="reveal-header mt-8 text-white/50 max-w-2xl text-[16px] md:text-[18px] leading-relaxed font-light">
                        Complete transparency regarding our data collection, security parameters, and how we protect the intelligence of the leaders in our ecosystem.
                    </p>
                </div>

                <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 relative">
                    
                    {/* Main Content - Flush Left with Logo */}
                    <div className="col-span-1 lg:col-span-8 lg:pr-10 space-y-16 text-white/80 text-[15px] md:text-[16px] leading-[1.9] font-light z-10 pb-20">
                        <section id="intro" className="reveal-section space-y-6 scroll-mt-32">
                            <h2 className="text-3xl md:text-4xl font-serif text-white tracking-wide">1. Introduction</h2>
                            <p className="text-xl text-white/60 font-serif italic mb-4">Establishing a trustworthy digital environment.</p>
                            <p>
                                At the Institute for Trusted Leadership (ITL), respecting your privacy is foundational to our vision of building a world where trust defines leadership. This Privacy Policy details how we collect, use, specify, and safeguard your data when you visit our digital platform or engage with our ecosystem.
                            </p>
                        </section>

                        <div className="w-full h-[1px] bg-white/10"></div>

                        <section id="information" className="reveal-section space-y-6 scroll-mt-32">
                            <h2 className="text-3xl md:text-4xl font-serif text-white tracking-wide">2. Information We Collect</h2>
                            <p>We may collect information about you in a variety of ways. The core data we may accumulate includes:</p>
                            
                            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-6">
                                <div className="bg-white/[0.02] border border-white/5 p-8 hover:bg-white/[0.04] transition-colors duration-300">
                                    <div className="w-8 h-8 rounded-full border border-white/10 flex items-center justify-center mb-4 bg-white/5">
                                        <span className="text-white text-xs font-serif font-bold">1</span>
                                    </div>
                                    <strong className="text-white font-serif block text-lg mb-2">Personal Information</strong>
                                    <p className="text-white/60 text-sm">Identifiable details, such as your name, corporate email address, organizational role, and contact information when you register or subscribe.</p>
                                </div>
                                <div className="bg-white/[0.02] border border-white/5 p-8 hover:bg-white/[0.04] transition-colors duration-300">
                                    <div className="w-8 h-8 rounded-full border border-white/10 flex items-center justify-center mb-4 bg-white/5">
                                        <span className="text-white text-xs font-serif font-bold">2</span>
                                    </div>
                                    <strong className="text-white font-serif block text-lg mb-2">Engagement Data</strong>
                                    <p className="text-white/60 text-sm">Information our servers automatically coordinate when you explore our ecosystem, such as your IP address, browser architecture, and interaction metrics.</p>
                                </div>
                                <div className="bg-white/[0.02] border border-white/5 p-8 md:col-span-2 hover:bg-white/[0.04] transition-colors duration-300">
                                    <div className="w-8 h-8 rounded-full border border-white/10 flex items-center justify-center mb-4 bg-white/5">
                                        <span className="text-white text-xs font-serif font-bold">3</span>
                                    </div>
                                    <strong className="text-white font-serif block text-lg mb-2">Professional Context</strong>
                                    <p className="text-white/60 text-sm">Details you provide regarding your enterprise structure or leadership challenges, which we process in strict confidence.</p>
                                </div>
                            </div>
                        </section>

                        <div className="w-full h-[1px] bg-white/10"></div>

                        <section id="optimization" className="reveal-section space-y-6 scroll-mt-32 relative">
                            <h2 className="text-3xl md:text-4xl font-serif text-white tracking-wide">3. Optimization & Utilization</h2>
                            <p>Having accurate context allows us to cultivate a highly refined, efficient, and calibrated experience across all touchpoints. Specifically, we harness data to:</p>
                            
                            <div className="pl-6 border-l border-[#006AFF]/30 py-2 space-y-4 mt-8 bg-white/[0.02] p-6">
                                <p className="flex items-start gap-4">
                                    <span className="text-[#006AFF] font-bold mt-1">✓</span>
                                    <span className="text-white/70">Orchestrate personalized interactions and tailored insights for your leadership journey.</span>
                                </p>
                                <p className="flex items-start gap-4">
                                    <span className="text-[#006AFF] font-bold mt-1">✓</span>
                                    <span className="text-white/70">Facilitate the delivery of premium intelligence, high-level reports, and strategic methodologies.</span>
                                </p>
                                <p className="flex items-start gap-4">
                                    <span className="text-[#006AFF] font-bold mt-1">✓</span>
                                    <span className="text-white/70">Maintain the integrity of our digital platforms through anonymous statistical evaluation.</span>
                                </p>
                            </div>
                        </section>
                        
                        <div className="w-full h-[1px] bg-white/10"></div>

                        <section id="security" className="reveal-section space-y-6 scroll-mt-32">
                            <h2 className="text-3xl md:text-4xl font-serif text-white tracking-wide">4. Security Infrastructure</h2>
                            <p>
                                We utilize comprehensive administrative, technical, and physical security measures designed to shield your personal information from unauthorized access. The trust you place in us requires uncompromising standards in our security topology. While we endeavor to use commercially acceptable means to protect your data, absolute systemic guarantees remain intrinsically impossible over broadband networks.
                            </p>
                        </section>

                        <div className="w-full h-[1px] bg-white/10"></div>

                        <section id="third-party" className="reveal-section space-y-6 scroll-mt-32">
                            <h2 className="text-3xl md:text-4xl font-serif text-white tracking-wide">5. Third-Party Protocols</h2>
                            <p>
                                In the orchestration of our services, we may engage vetted third-party modules that mirror our dedication to data security. We do not sell, rent, or trade your personal intelligence schemas to any unauthorized aggregators or external agencies without your explicit consent.
                            </p>
                        </section>
                        
                        <div className="w-full h-[1px] bg-white/10"></div>

                        <section id="contact" className="reveal-section space-y-6 scroll-mt-32 bg-white/[0.02] border border-white/5 p-8 md:p-12 relative overflow-hidden">
                            <h2 className="text-3xl md:text-4xl font-serif text-white tracking-wide mb-2">6. Dialogue & Inquiry</h2>
                            <p className="relative z-10 text-white/60 mb-8">
                                Your understanding of our data ethics is important to the ITL ecosystem. If you have inquiries, conceptual questions, or requests regarding this matrix, please initiate contact with our administration:
                            </p>
                            
                            <a href="mailto:info@institute-for-trusted-leadership.com" className="inline-flex items-center gap-4 bg-[#006AFF] hover:bg-[#0055CC] text-white px-6 py-4 transition-colors duration-300 font-bold tracking-[0.1em] uppercase text-xs z-10 relative">
                                <span>Contact Administration</span>
                                <svg width="16" height="16" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <path d="M5 12H19" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                                    <path d="M12 5L19 12L12 19" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                                </svg>
                            </a>
                        </section>
                    </div>

                    {/* Right Sidebar - Sticky Stack with Table of Contents and Cards */}
                    <div className="col-span-1 lg:col-span-4 relative z-20 mt-12 lg:mt-0">
                        <div className="relative lg:sticky lg:top-32 flex flex-col gap-8 lg:gap-12 pt-0">
                            
                            {/* Table of Contents - Moved to Right Sidebar */}
                            <div className="reveal-sidebar w-full border border-white/5 bg-black/40 backdrop-blur-md p-8 relative overflow-hidden shadow-[0_10px_30px_rgba(0,0,0,0.5)]">
                                <h3 className="text-white/40 uppercase tracking-[0.2em] text-[10px] font-bold mb-8 flex items-center gap-4">
                                    <span>ON THIS PAGE</span>
                                    <div className="h-[1px] bg-white/10 flex-grow"></div>
                                </h3>
                                
                                <ul className="space-y-5 text-[13px] font-medium text-white/50 relative pl-0">
                                    <li>
                                        <button onClick={() => handleScroll('intro')} className="hover:text-white transition-colors duration-300 text-left relative group w-full flex justify-between items-center">
                                            <div className="flex items-center">
                                                <span className="lg:pl-0">1. Introduction</span>
                                            </div>
                                        </button>
                                    </li>
                                    <li>
                                        <button onClick={() => handleScroll('information')} className="hover:text-white transition-colors duration-300 text-left relative group w-full flex justify-between items-center">
                                            <div className="flex items-center">
                                                <span className="lg:pl-0">2. Information We Collect</span>
                                            </div>
                                        </button>
                                    </li>
                                    <li>
                                        <button onClick={() => handleScroll('optimization')} className="hover:text-white transition-colors duration-300 text-left relative group w-full flex justify-between items-center">
                                            <div className="flex items-center">
                                                <span className="lg:pl-0">3. Optimization & Utilization</span>
                                            </div>
                                        </button>
                                    </li>
                                    <li>
                                        <button onClick={() => handleScroll('security')} className="hover:text-white transition-colors duration-300 text-left relative group w-full flex justify-between items-center">
                                            <div className="flex items-center">
                                                <span className="lg:pl-0">4. Security Infrastructure</span>
                                            </div>
                                        </button>
                                    </li>
                                    <li>
                                        <button onClick={() => handleScroll('third-party')} className="hover:text-white transition-colors duration-300 text-left relative group w-full flex justify-between items-center">
                                            <div className="flex items-center">
                                                <span className="lg:pl-0">5. Third-Party Protocols</span>
                                            </div>
                                        </button>
                                    </li>
                                    <li>
                                        <button onClick={() => handleScroll('contact')} className="hover:text-white transition-colors duration-300 text-left relative group w-full flex justify-between items-center">
                                            <div className="flex items-center">
                                                <span className="lg:pl-0">6. Dialogue & Inquiry</span>
                                            </div>
                                        </button>
                                    </li>
                                </ul>
                            </div>
                            
                            {/* Top Element */}
                            <div className="reveal-sidebar w-full aspect-square border border-white/5 bg-black/40 backdrop-blur-md p-8 flex flex-col justify-between overflow-hidden relative group shadow-[0_10px_30px_rgba(0,0,0,0.5)]">
                                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" className="opacity-40">
                                    <rect x="2" y="2" width="20" height="20" rx="4" stroke="white" strokeWidth="1.5"/>
                                    <path d="M2 12H22" stroke="white" strokeWidth="1.5"/>
                                    <path d="M12 2V22" stroke="white" strokeWidth="1.5"/>
                                </svg>
                                
                                <div>
                                    <div className="text-[10px] tracking-[0.2em] uppercase text-[#006AFF] mb-2 font-bold">Secure Infrastructure</div>
                                    <div className="text-white/80 font-serif italic text-lg line-clamp-2">Protected data within the leadership ecosystem.</div>
                                </div>
                            </div>
                            
                            {/* Bottom Element */}
                            <div className="reveal-sidebar relative lg:sticky lg:top-32 w-full border border-white/10 bg-black/60 backdrop-blur-xl p-8 overflow-hidden shadow-[0_20px_40px_rgba(0,0,0,0.5)]">
                                <h3 className="font-serif text-xl text-white mb-3 relative z-10">Data Integrity</h3>
                                <p className="text-sm text-white/50 mb-6 leading-relaxed relative z-10">
                                    Our protocols map onto advanced leadership methodologies, treating your interaction history as highly restricted intelligence.
                                </p>
                                
                                <div className="flex items-center justify-between text-[10px] text-white/40 uppercase tracking-wider relative z-10">
                                    <span>Status</span>
                                    <span className="text-[#006AFF] font-bold">Secure ✓</span>
                                </div>
                            </div>

                        </div>
                    </div>
                </div>
            </div>

            {/* GRAND FINALE CTA SECTION */}
            <div className="reveal-finale relative mt-10 lg:mt-12 w-full bg-transparent border-t border-white/5 py-16 lg:py-20 overflow-hidden flex flex-col items-center justify-center text-center z-20">
                <div className="relative z-10 px-6 max-w-3xl mx-auto flex flex-col items-center">
                    <h2 className="font-serif text-[32px] md:text-[48px] lg:text-[56px] leading-[1.1] text-white mb-6 tracking-tight">
                        Trusted Leadership Starts Here
                    </h2>
                    <p className="text-white/60 text-[16px] md:text-[18px] leading-relaxed mb-10 font-light">
                        Return to the ecosystem to continue your journey into strategic, trust-based leadership models grounded in integrity.
                    </p>
                    <a href="/" className="inline-flex items-center justify-center gap-4 bg-white text-black px-8 py-5 text-xs font-bold uppercase tracking-[0.15em] hover:bg-gray-200 transition-colors group">
                        <span>Return to Ecosystem</span>
                    </a>
                </div>
            </div>
        </div>
    );
}
