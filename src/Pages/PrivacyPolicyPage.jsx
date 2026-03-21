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
        <div ref={containerRef} className="bg-[#0A0A0A] min-h-screen relative overflow-clip text-white w-full pt-32 pb-0">
            
            {/* FIXED BACKGROUND GLOW - Always covers the viewport no matter how far down you scroll */}
            <div className='fixed h-full w-full top-0 left-0 z-0 pointer-events-none'>
                <svg width="100%" height="100%" viewBox="0 0 1280 1000" fill="none" xmlns="http://www.w3.org/2000/svg" preserveAspectRatio="xMidYMid slice">
                    <g filter="url(#filter0_f_201_1774_home)">
                        <path d="M467.322 458.503C274.221 369.998 50.8455 378.503 -6.17874 564.503C-46.8001 697 22.2139 817.31 125.321 861.5C422.846 989 1094.82 957.5 1317.82 736.5C1541.15 515.177 1549.82 139 1304.32 139C1167.32 139 1106.82 296.503 1019.82 378.503C854.929 533.92 611.321 524.503 467.322 458.503Z" fill="#0000FF" style={{ fill: "#0000FF", fillOpacity: 0.6 }} />
                    </g>
                    <g filter="url(#filter1_f_201_1774_home)">
                        <path d="M417.322 478.503C224.221 389.998 0.845512 398.503 -56.1787 584.503C-96.8001 717 -27.7861 837.31 75.3215 881.5C372.846 1009 1044.82 977.5 1267.82 756.5C1491.15 535.177 1499.82 159 1254.32 159C1117.32 159 1056.82 316.503 969.822 398.503C804.929 553.92 561.321 544.503 417.322 478.503Z" fill="#008000" style={{ fill: "#008000", fillOpacity: 0.6 }} />
                    </g>
                    <defs>
                        <filter id="filter0_f_201_1774_home" x="-218" y="-61" width="1904.89" height="1197.32" filterUnits="userSpaceOnUse" colorInterpolationFilters="sRGB">
                            <feFlood floodOpacity="0" result="BackgroundImageFix" />
                            <feBlend mode="normal" in="SourceGraphic" in2="BackgroundImageFix" result="shape" />
                            <feGaussianBlur stdDeviation="150" result="effect1_foregroundBlur_201_1774" />
                        </filter>
                        <filter id="filter1_f_201_1774_home" x="-518" y="-291" width="2404.89" height="1697.32" filterUnits="userSpaceOnUse" colorInterpolationFilters="sRGB">
                            <feFlood floodOpacity="0" result="BackgroundImageFix" />
                            <feBlend mode="normal" in="SourceGraphic" in2="BackgroundImageFix" result="shape" />
                            <feGaussianBlur stdDeviation="280" result="effect1_foregroundBlur_201_1774" />
                        </filter>
                    </defs>
                </svg>
            </div>

            {/* FULL PAGE SCATTERED FLOATING ELEMENTS */}
            <div className="absolute w-full h-full top-0 left-0 overflow-hidden pointer-events-none z-0">
                {/* Visual 1 - Top Right Element */}
                <div className="absolute top-[15%] right-[-5%] opacity-30 transform rotate-12">
                    <svg width="400" height="400" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <circle cx="12" cy="12" r="11" stroke="white" strokeWidth="0.1" strokeDasharray="1 4"/>
                        <circle cx="12" cy="12" r="7" stroke="white" strokeWidth="0.1"/>
                    </svg>
                </div>
                
                {/* Visual 2 - Middle Left Element */}
                <div className="absolute top-[35%] left-[-10%] opacity-20 transform -rotate-45">
                    <svg width="500" height="500" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M2 12L12 2L22 12L12 22L2 12Z" stroke="white" strokeWidth="0.1"/>
                        <path d="M6 12L12 6L18 12L12 18L6 12Z" stroke="white" strokeWidth="0.1" strokeDasharray="1 2"/>
                    </svg>
                    <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-64 h-64 bg-[#006AFF]/10 blur-3xl rounded-full"></div>
                </div>

                {/* Visual 3 - Lower Right Element */}
                <div className="absolute top-[55%] right-[5%] opacity-40">
                    <div className="grid grid-cols-4 gap-4">
                        {[...Array(16)].map((_, i) => (
                            <div key={i} className="w-1.5 h-1.5 bg-white rounded-full opacity-20"></div>
                        ))}
                    </div>
                </div>

                {/* Visual 4 - Bottom Left Element */}
                <div className="absolute top-[75%] left-[2%] opacity-10">
                    <svg width="600" height="200" viewBox="0 0 600 200" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M0 100 Q 150 0 300 100 T 600 100" stroke="white" strokeWidth="2" strokeDasharray="5 15"/>
                        <path d="M0 120 Q 150 20 300 120 T 600 120" stroke="white" strokeWidth="0.5"/>
                    </svg>
                    <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-[#0000FF]/5 blur-3xl rounded-full"></div>
                </div>

                {/* Visual 5 - Bottom Right Element */}
                <div className="absolute top-[85%] right-[-5%] opacity-20 transform rotate-[30deg]">
                    <svg width="300" height="300" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M12 22C17.5228 22 22 17.5228 22 12C22 6.47715 17.5228 2 12 2C6.47715 2 2 6.47715 2 12C2 17.5228 6.47715 22 12 22Z" stroke="white" strokeWidth="0.1"/>
                        <circle cx="12" cy="12" r="3" fill="white" fillOpacity="0.2"/>
                    </svg>
                </div>
            </div>

            <div className="relative z-10 max-w-[1400px] mx-auto px-6 md:px-12 lg:px-20 w-full flex flex-col font-sans">
                
                {/* Header Area */}
                <div className="border-b border-white/10 pb-12 mb-12 lg:mb-16 mt-0 relative">
                    {/* Decorative Top Graphic */}
                    <div className="absolute top-0 right-10 w-32 h-32 border border-white/5 rounded-full flex items-center justify-center opacity-30">
                        <div className="w-16 h-16 border border-[#006AFF]/30 rounded-full flex items-center justify-center">
                            <div className="w-2 h-2 bg-white rounded-full"></div>
                        </div>
                    </div>

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
                            {/* In-content visual separator */}
                            <div className="w-full flex justify-center py-6">
                                <div className="w-1.5 h-1.5 rounded-full bg-white/20"></div>
                            </div>
                        </section>

                        <div className="w-full h-[1px] bg-gradient-to-r from-white/10 to-transparent"></div>

                        <section id="information" className="reveal-section space-y-6 scroll-mt-32">
                            <h2 className="text-3xl md:text-4xl font-serif text-white tracking-wide">2. Information We Collect</h2>
                            <p>We may collect information about you in a variety of ways. The core data we may accumulate includes:</p>
                            
                            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-6">
                                <div className="bg-black/40 border border-[#006AFF]/20 p-6 rounded-sm">
                                    <div className="w-8 h-8 rounded-full border border-white/10 flex items-center justify-center mb-4 bg-white/5">
                                        <span className="text-white text-xs font-serif font-bold">1</span>
                                    </div>
                                    <strong className="text-white font-serif block text-lg mb-2">Personal Information</strong>
                                    <p className="text-white/60 text-sm">Identifiable details, such as your name, corporate email address, organizational role, and contact information when you register or subscribe.</p>
                                </div>
                                <div className="bg-black/40 border border-white/5 p-6 rounded-sm">
                                    <div className="w-8 h-8 rounded-full border border-white/10 flex items-center justify-center mb-4 bg-white/5">
                                        <span className="text-white text-xs font-serif font-bold">2</span>
                                    </div>
                                    <strong className="text-white font-serif block text-lg mb-2">Engagement Data</strong>
                                    <p className="text-white/60 text-sm">Information our servers automatically coordinate when you explore our ecosystem, such as your IP address, browser architecture, and interaction metrics.</p>
                                </div>
                                <div className="bg-black/40 border border-white/5 p-6 rounded-sm md:col-span-2">
                                    <div className="w-8 h-8 rounded-full border border-white/10 flex items-center justify-center mb-4 bg-white/5">
                                        <span className="text-white text-xs font-serif font-bold">3</span>
                                    </div>
                                    <strong className="text-white font-serif block text-lg mb-2">Professional Context</strong>
                                    <p className="text-white/60 text-sm">Details you provide regarding your enterprise structure or leadership challenges, which we process in strict confidence.</p>
                                </div>
                            </div>
                        </section>

                        <div className="w-full h-[1px] bg-gradient-to-r from-white/10 to-transparent"></div>

                        <section id="optimization" className="reveal-section space-y-6 scroll-mt-32 relative">
                            {/* Abstract Element inside main content */}
                            <div className="absolute top-0 right-0 w-32 h-32 border border-[#006AFF]/10 rounded-full flex items-center justify-center opacity-40 pointer-events-none -translate-y-1/2 translate-x-1/2">
                                <div className="w-full h-[1px] bg-[#006AFF]/20 transform rotate-45"></div>
                            </div>

                            <h2 className="text-3xl md:text-4xl font-serif text-white tracking-wide">3. Optimization & Utilization</h2>
                            <p>Having accurate context allows us to cultivate a highly refined, efficient, and calibrated experience across all touchpoints. Specifically, we harness data to:</p>
                            
                            <div className="pl-6 border-l border-[#006AFF]/30 py-2 space-y-4 mt-8 bg-gradient-to-r from-[#006AFF]/5 to-transparent pr-4">
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
                        
                        <div className="w-full h-[1px] bg-gradient-to-r from-white/10 to-transparent"></div>

                        <section id="security" className="reveal-section space-y-6 scroll-mt-32">
                            <h2 className="text-3xl md:text-4xl font-serif text-white tracking-wide">4. Security Infrastructure</h2>
                            <p>
                                We utilize comprehensive administrative, technical, and physical security measures designed to shield your personal information from unauthorized access. The trust you place in us requires uncompromising standards in our security topology. While we endeavor to use commercially acceptable means to protect your data, absolute systemic guarantees remain intrinsically impossible over broadband networks.
                            </p>
                        </section>

                        <div className="w-full h-[1px] bg-gradient-to-r from-white/10 to-transparent"></div>

                        <section id="third-party" className="reveal-section space-y-6 scroll-mt-32">
                            <h2 className="text-3xl md:text-4xl font-serif text-white tracking-wide">5. Third-Party Protocols</h2>
                            <p>
                                In the orchestration of our services, we may engage vetted third-party modules that mirror our dedication to data security. We do not sell, rent, or trade your personal intelligence schemas to any unauthorized aggregators or external agencies without your explicit consent.
                            </p>
                            {/* In-content visual separator */}
                            <div className="w-full flex justify-center py-6">
                                <div className="w-1.5 h-1.5 rounded-full bg-white/20"></div>
                            </div>
                        </section>
                        
                        <div className="w-full h-[1px] bg-gradient-to-r from-white/10 to-transparent"></div>

                        <section id="contact" className="reveal-section space-y-6 scroll-mt-32 bg-gradient-to-b from-white/[0.02] to-transparent border border-white/5 p-8 md:p-12 relative overflow-hidden">
                            <div className="absolute -top-10 -right-10 w-64 h-64 bg-[#006AFF]/10 blur-[80px] rounded-full pointer-events-none"></div>
                            
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
                                <div className="absolute top-0 right-0 w-32 h-32 bg-[#006AFF]/20 blur-3xl rounded-full pointer-events-none"></div>
                                <h3 className="text-white/40 uppercase tracking-[0.2em] text-[10px] font-bold mb-8 flex items-center gap-4">
                                    <span>ON THIS PAGE</span>
                                    <div className="h-[1px] bg-white/10 flex-grow"></div>
                                </h3>
                                
                                {/* Decorative Line Indicator */}
                                <div className="hidden lg:block absolute left-8 top-[90px] bottom-8 w-[1px] bg-white/5 -z-10"></div>

                                <ul className="space-y-5 text-[13px] font-medium text-white/50 relative pl-0">
                                    <li>
                                        <button onClick={() => handleScroll('intro')} className="hover:text-white transition-colors duration-300 text-left relative group w-full flex justify-between items-center">
                                            <div className="flex items-center">
                                                <span className="hidden lg:block absolute -left-0 w-1.5 h-1.5 rounded-full bg-white/10 group-hover:bg-[#006AFF] transition-colors"></span>
                                                <span className="lg:pl-6">1. Introduction</span>
                                            </div>
                                        </button>
                                    </li>
                                    <li>
                                        <button onClick={() => handleScroll('information')} className="hover:text-white transition-colors duration-300 text-left relative group w-full flex justify-between items-center">
                                            <div className="flex items-center">
                                                <span className="hidden lg:block absolute -left-0 w-1.5 h-1.5 rounded-full bg-white/10 group-hover:bg-[#006AFF] transition-colors"></span>
                                                <span className="lg:pl-6">2. Information We Collect</span>
                                            </div>
                                        </button>
                                    </li>
                                    <li>
                                        <button onClick={() => handleScroll('optimization')} className="hover:text-white transition-colors duration-300 text-left relative group w-full flex justify-between items-center">
                                            <div className="flex items-center">
                                                <span className="hidden lg:block absolute -left-0 w-1.5 h-1.5 rounded-full bg-white/10 group-hover:bg-[#006AFF] transition-colors"></span>
                                                <span className="lg:pl-6">3. Optimization & Utilization</span>
                                            </div>
                                        </button>
                                    </li>
                                    <li>
                                        <button onClick={() => handleScroll('security')} className="hover:text-white transition-colors duration-300 text-left relative group w-full flex justify-between items-center">
                                            <div className="flex items-center">
                                                <span className="hidden lg:block absolute -left-0 w-1.5 h-1.5 rounded-full bg-white/10 group-hover:bg-[#006AFF] transition-colors"></span>
                                                <span className="lg:pl-6">4. Security Infrastructure</span>
                                            </div>
                                        </button>
                                    </li>
                                    <li>
                                        <button onClick={() => handleScroll('third-party')} className="hover:text-white transition-colors duration-300 text-left relative group w-full flex justify-between items-center">
                                            <div className="flex items-center">
                                                <span className="hidden lg:block absolute -left-0 w-1.5 h-1.5 rounded-full bg-white/10 group-hover:bg-[#006AFF] transition-colors"></span>
                                                <span className="lg:pl-6">5. Third-Party Protocols</span>
                                            </div>
                                        </button>
                                    </li>
                                    <li>
                                        <button onClick={() => handleScroll('contact')} className="hover:text-white transition-colors duration-300 text-left relative group w-full flex justify-between items-center">
                                            <div className="flex items-center">
                                                <span className="hidden lg:block absolute -left-0 w-1.5 h-1.5 rounded-full bg-white/10 group-hover:bg-[#006AFF] transition-colors"></span>
                                                <span className="lg:pl-6">6. Dialogue & Inquiry</span>
                                            </div>
                                        </button>
                                    </li>
                                </ul>
                            </div>
                            
                            {/* Top Element */}
                            <div className="reveal-sidebar w-full aspect-square border border-white/5 bg-black/40 backdrop-blur-md p-8 flex flex-col justify-between overflow-hidden relative group shadow-[0_10px_30px_rgba(0,0,0,0.5)]">
                                <div className="absolute top-0 right-0 w-32 h-32 bg-[#006AFF]/30 blur-3xl rounded-full group-hover:bg-[#006AFF]/40 transition-all duration-700"></div>
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
                            
                            {/* Divider Element */}
                            <div className="hidden lg:flex w-full justify-center py-4">
                                <div className="flex flex-col items-center gap-4 opacity-50">
                                    <div className="w-[1px] h-24 bg-gradient-to-b from-[#006AFF] to-transparent"></div>
                                </div>
                            </div>

                            {/* Bottom Element */}
                            <div className="reveal-sidebar relative lg:sticky lg:top-32 w-full border border-white/10 bg-black/60 backdrop-blur-xl p-8 overflow-hidden shadow-[0_20px_40px_rgba(0,0,0,0.5)]">
                                <div className="absolute top-0 left-0 w-full h-[2px] bg-gradient-to-r from-transparent via-[#006AFF] to-transparent opacity-80"></div>
                                <div className="absolute right-0 bottom-0 w-32 h-32 bg-[#006AFF]/10 blur-[50px] rounded-full pointer-events-none"></div>
                                
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
                <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[60vw] max-w-[800px] aspect-square bg-[#006AFF]/10 blur-[100px] rounded-full pointer-events-none"></div>
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
