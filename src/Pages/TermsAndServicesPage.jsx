import React, { useEffect, useLayoutEffect, useRef } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

export default function TermsAndServicesPage() {
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
                    <g filter="url(#filter0_f_shared_terms)">
                        <path d="M467.322 658.503C274.221 569.998 50.8455 578.503 -6.17874 764.503C-46.8001 897 22.2139 1017.31 125.321 1061.5C422.846 1189 1094.82 1157.5 1317.82 936.5C1541.15 715.177 1549.82 339 1304.32 339C1167.32 339 1106.82 496.503 1019.82 578.503C854.929 733.92 611.321 724.503 467.322 658.503Z" fill="#0000FF" style={{ fill: "#0000FF", fillOpacity: 0.8 }} />
                    </g>
                    <g filter="url(#filter1_f_shared_terms)">
                        <path d="M417.322 678.503C224.221 589.998 0.845512 598.503 -56.1787 784.503C-96.8001 917 -27.7861 1037.31 75.3215 1081.5C372.846 1209 1044.82 1177.5 1267.82 956.5C1491.15 735.177 1499.82 359 1254.32 359C1117.32 359 1056.82 516.503 969.822 598.503C804.929 753.92 561.321 744.503 417.322 678.503Z" fill="#008000" style={{ fill: "#008000", fillOpacity: 0.8 }} />
                    </g>
                    <defs>
                        <filter id="filter0_f_shared_terms" x="-218" y="139" width="1904.89" height="1197.32" filterUnits="userSpaceOnUse" colorInterpolationFilters="sRGB">
                            <feFlood floodOpacity="0" result="BackgroundImageFix" />
                            <feBlend mode="normal" in="SourceGraphic" in2="BackgroundImageFix" result="shape" />
                            <feGaussianBlur stdDeviation="100" result="effect1_foregroundBlur_shared" />
                        </filter>
                        <filter id="filter1_f_shared_terms" x="-518" y="-91" width="2404.89" height="1697.32" filterUnits="userSpaceOnUse" colorInterpolationFilters="sRGB">
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
                        Terms of Service
                    </h1>
                    
                    <p className="reveal-header mt-8 text-white/50 max-w-2xl text-[16px] md:text-[18px] leading-relaxed font-light">
                        The operational boundaries and expectations established to ensure a safe, constructive, and highly professional leadership ecosystem.
                    </p>
                </div>

                <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 relative">
                    
                    {/* Main Content - Flush Left with Logo */}
                    <div className="col-span-1 lg:col-span-8 lg:pr-10 space-y-16 text-white/80 text-[15px] md:text-[16px] leading-[1.9] font-light z-10 pb-20">
                        <section id="agreement" className="reveal-section space-y-6 scroll-mt-32">
                            <h2 className="text-3xl md:text-4xl font-serif text-white tracking-wide">1. Agreement to Terms</h2>
                            <p className="text-xl text-white/60 font-serif italic mb-4">Establishing a safe operational platform.</p>
                            <p>
                                By accessing our ecosystem at the Institute for Trusted Leadership (ITL), you agree to be strictly bound by these Terms of Service. If you disagree with any segment of these principles, you must immediately suspend access across our platforms. These operational decrees dictate our interactive boundaries.
                            </p>
                        </section>

                        <div className="w-full h-[1px] bg-white/10"></div>

                        <section id="intellectual" className="reveal-section space-y-6 scroll-mt-32 relative">
                            <h2 className="text-3xl md:text-4xl font-serif text-white tracking-wide">2. Intellectual Convergence</h2>
                            <p>
                                All intelligence, conceptual models, visual assets, and strategic literature presented across ITL channels constitute the exclusive intellectual property of the Institute. You are granted a limited license strictly for personal, non-commercial leadership development. Reproduction, widespread distribution, or commercial extraction without explicit, documented permission is severely prohibited.
                            </p>
                        </section>

                        <div className="w-full h-[1px] bg-white/10"></div>

                        <section id="expectations" className="reveal-section space-y-6 scroll-mt-32">
                            <h2 className="text-3xl md:text-4xl font-serif text-white tracking-wide">3. Expectations for Conduct</h2>
                            <p>As a participant in our vision to ground leadership in trust, you agree to:</p>
                            
                            <div className="flex flex-col gap-6 mt-6">
                                <div className="bg-white/[0.02] p-8 border-l border-[#008000]/40 hover:bg-white/[0.04] transition-colors duration-300">
                                    <strong className="text-white font-serif block text-xl mb-2">Authenticity</strong>
                                    <p className="text-white/60">Provide factual intelligence when registering for programs or requesting high-level insights.</p>
                                </div>
                                <div className="bg-white/[0.02] p-8 border-l border-[#008000]/40 hover:bg-white/[0.04] transition-colors duration-300">
                                    <strong className="text-white font-serif block text-xl mb-2">Respect</strong>
                                    <p className="text-white/60">Maintain a constructive, forward-looking paradigm in any interaction within the ITL ecosystem.</p>
                                </div>
                                <div className="bg-white/[0.02] p-8 border-l border-[#008000]/40 hover:bg-white/[0.04] transition-colors duration-300">
                                    <strong className="text-white font-serif block text-xl mb-2">Integrity</strong>
                                    <p className="text-white/60">Abstain from deploying malicious code, automated extraction spiders, or any mechanics designed to compromise our infrastructure.</p>
                                </div>
                            </div>
                        </section>
                        
                        <div className="w-full h-[1px] bg-white/10"></div>

                        <section id="limitation" className="reveal-section space-y-6 scroll-mt-32">
                            <h2 className="text-3xl md:text-4xl font-serif text-white tracking-wide">4. Limitation of Liability</h2>
                            <p>
                                While our strategic paradigms are forged through deep expertise and proven methodologies, they are presented as high-level guidance rather than immutable, guaranteed pathways. The Institute for Trusted Leadership shall not be held liable for any indirect, circumstantial, or enterprise-level impacts resulting from the deployment or misinterpretation of our frameworks.
                            </p>
                        </section>

                        <div className="w-full h-[1px] bg-white/10"></div>

                        <section id="modification" className="reveal-section space-y-6 scroll-mt-32">
                            <h2 className="text-3xl md:text-4xl font-serif text-white tracking-wide">5. Modification of Terms</h2>
                            <p>
                                We retain the prerogative to calibrate and evolve these Terms of Service at any juncture. Advanced modifications will be reflected directly on this platform. Continued participation in the ITL ecosystem post-modification conveys your absolute acceptance of the updated parameters.
                            </p>
                        </section>
                        
                        <div className="w-full h-[1px] bg-white/10"></div>

                        <section id="governing" className="reveal-section space-y-6 scroll-mt-32 bg-white/[0.02] border border-white/5 p-8 md:p-12 relative overflow-hidden">
                            <h2 className="text-3xl md:text-4xl font-serif text-white tracking-wide mb-4">6. Governing Law</h2>
                            <p className="relative z-10 text-white/60 mb-0">
                                Any structural disputes arising from these Terms or your engagement with the Institute's ecosystem shall be navigated and resolved under the laws and jurisdictions applicable to the corporate seat of the Institute for Trusted Leadership, disregarding conflict of law provisions.
                            </p>
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
                                        <button onClick={() => handleScroll('agreement')} className="hover:text-white transition-colors duration-300 text-left relative group w-full flex justify-between items-center">
                                            <div className="flex items-center">
                                                <span className="lg:pl-0">1. Agreement to Terms</span>
                                            </div>
                                        </button>
                                    </li>
                                    <li>
                                        <button onClick={() => handleScroll('intellectual')} className="hover:text-white transition-colors duration-300 text-left relative group w-full flex justify-between items-center">
                                            <div className="flex items-center">
                                                <span className="lg:pl-0">2. Intellectual Convergence</span>
                                            </div>
                                        </button>
                                    </li>
                                    <li>
                                        <button onClick={() => handleScroll('expectations')} className="hover:text-white transition-colors duration-300 text-left relative group w-full flex justify-between items-center">
                                            <div className="flex items-center">
                                                <span className="lg:pl-0">3. Expectations for Conduct</span>
                                            </div>
                                        </button>
                                    </li>
                                    <li>
                                        <button onClick={() => handleScroll('limitation')} className="hover:text-white transition-colors duration-300 text-left relative group w-full flex justify-between items-center">
                                            <div className="flex items-center">
                                                <span className="lg:pl-0">4. Limitation of Liability</span>
                                            </div>
                                        </button>
                                    </li>
                                    <li>
                                        <button onClick={() => handleScroll('modification')} className="hover:text-white transition-colors duration-300 text-left relative group w-full flex justify-between items-center">
                                            <div className="flex items-center">
                                                <span className="lg:pl-0">5. Modification of Terms</span>
                                            </div>
                                        </button>
                                    </li>
                                    <li>
                                        <button onClick={() => handleScroll('governing')} className="hover:text-white transition-colors duration-300 text-left relative group w-full flex justify-between items-center">
                                            <div className="flex items-center">
                                                <span className="lg:pl-0">6. Governing Law</span>
                                            </div>
                                        </button>
                                    </li>
                                </ul>
                            </div>
                            
                            {/* Top Element */}
                            <div className="reveal-sidebar w-full aspect-square border border-white/5 bg-black/40 backdrop-blur-md p-8 flex flex-col justify-between overflow-hidden relative group shadow-[0_10px_30px_rgba(0,0,0,0.5)]">
                                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" className="opacity-40">
                                    <path d="M12 22C17.5228 22 22 17.5228 22 12C22 6.47715 17.5228 2 12 2C6.47715 2 2 6.47715 2 12C2 17.5228 6.47715 22 12 22Z" stroke="white" strokeWidth="1.5"/>
                                    <path d="M12 8L16 12M12 16L16 12M16 12H8" stroke="white" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                                </svg>
                                
                                <div>
                                    <div className="text-[10px] tracking-[0.2em] uppercase text-white/40 mb-2 font-bold">Guiding Frameworks</div>
                                    <div className="text-white/80 font-serif italic text-lg line-clamp-2">The architecture for trusted leadership.</div>
                                </div>
                            </div>

                            {/* Bottom Element */}
                            <div className="reveal-sidebar relative lg:sticky lg:top-32 w-full border border-white/10 bg-black/60 backdrop-blur-xl p-8 overflow-hidden shadow-[0_20px_40px_rgba(0,0,0,0.5)] mt-0 lg:mt-32">
                                <h3 className="font-serif text-xl text-white mb-3 relative z-10">Legal Inquiries?</h3>
                                <p className="text-sm text-white/50 mb-6 leading-relaxed relative z-10">
                                    If you have complex requirements regarding our terms, reach out to our structural compliance team.
                                </p>
                                
                                <a href="mailto:compliance@institute-for-trusted-leadership.com" className="block w-full text-center py-3 px-6 bg-white/[0.05] hover:bg-white/10 border border-white/10 hover:border-white/30 text-[11px] font-bold tracking-[0.15em] uppercase text-white transition-all duration-300 relative z-10">
                                    Contact Compliance
                                </a>
                            </div>

                        </div>
                    </div>
                </div>
            </div>

            {/* GRAND FINALE CTA SECTION */}
            <div className="reveal-finale relative mt-10 lg:mt-12 w-full bg-transparent border-t border-white/5 py-16 lg:py-20 overflow-hidden flex flex-col items-center justify-center text-center z-20">
                <div className="relative z-10 px-6 max-w-3xl mx-auto flex flex-col items-center">
                    <h2 className="font-serif text-[32px] md:text-[48px] lg:text-[56px] leading-[1.1] text-white mb-6 tracking-tight">
                        Leadership Built on Trust
                    </h2>
                    <p className="text-white/60 text-[16px] md:text-[18px] leading-relaxed mb-10 font-light">
                        Upholding the integrity of the Institute through shared principles and absolute transparency.
                    </p>
                    <a href="/" className="inline-flex items-center justify-center gap-4 bg-white text-black px-8 py-5 text-xs font-bold uppercase tracking-[0.15em] hover:bg-gray-200 transition-colors group">
                        <span>Return to Ecosystem</span>
                    </a>
                </div>
            </div>
        </div>
    );
}
