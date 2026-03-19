import React, { useLayoutEffect, useRef } from 'react';
import { gsap } from 'gsap';

const Hero = () => {
    const heroRef = useRef(null);

    useLayoutEffect(() => {
        let ctx = gsap.context(() => {
            gsap.from(".hero-reveal", {
                y: 50,
                opacity: 0,
                duration: 1.2,
                stagger: 0.2,
                ease: "power3.out",
                delay: 0.5
            });
        }, heroRef);
        return () => ctx.revert();
    }, []);

    return (
        <section ref={heroRef} className="relative w-full min-h-[90vh] md:min-h-screen flex flex-col pt-24 md:pt-32 px-6 md:px-0 bg-transparent">
            <div className="container mx-auto flex flex-col flex-grow relative z-10 w-full max-w-[1440px]">
                
                <div className="grid grid-cols-1 lg:grid-cols-[1.2fr_0.8fr] gap-10 lg:gap-8 w-full flex-grow py-10 md:py-16">
                    
                    <div className="flex flex-col justify-start text-left hero-reveal lg:-mt-12">
                        <span className="flex items-center gap-3 font-sans text-[10px] md:text-xs font-semibold tracking-[0.25em] uppercase text-white/80">
                            <span className="w-1.5 h-1.5 md:w-2 md:h-2 bg-white inline-block"></span>
                            ECOSYSTEM
                        </span>

                        <h1 className="font-serif text-3xl md:text-5xl xl:text-6xl leading-[1.1] text-white mt-4 md:mt-6 tracking-tight">
                            One Vision.<br />
                            Four Pathways to Impact.
                        </h1>
                    </div>

                    <div className="flex flex-col justify-end lg:pb-24 lg:translate-y-12 hero-reveal">
                        <p className="font-sans text-base leading-relaxed text-white max-w-[560px] lg:text-right lg:ml-auto">
                            The Institute of Trusted Leadership operates through an integrated ecosystem of specialized divisions, each addressing different aspects of leadership development and organizational transformation.
                        </p>
                    </div>

                </div>

                <div className="absolute bottom-10 left-0 w-full border-t-[0.5px] border-white/20 pt-6 flex justify-between items-center text-white/70 font-sans text-[10px] md:text-xs tracking-[0.1em] uppercase hero-reveal">
                    <span>Scroll to Discover</span>
                    <div className="animate-bounce">
                        <svg width="12" height="14" viewBox="0 0 10 12" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M9.85403 7.35375L5.35403 11.8537C5.30759 11.9002 5.25245 11.9371 5.19175 11.9623C5.13105 11.9874 5.06599 12.0004 5.00028 12.0004C4.93457 12.0004 4.86951 11.9874 4.80881 11.9623C4.74811 11.9371 4.69296 11.9002 4.64653 11.8537L0.146528 7.35375C0.0527077 7.25993 0 7.13268 0 7C0 6.86732 0.0527077 6.74007 0.146528 6.64625C0.240348 6.55243 0.367596 6.49972 0.500278 6.49972C0.63296 6.49972 0.760208 6.55243 0.854028 6.64625L4.50028 10.2931V0.5C4.50028 0.367392 4.55296 0.240215 4.64672 0.146447C4.74049 0.0526785 4.86767 0 5.00028 0C5.13289 0 5.26006 0.0526785 5.35383 0.146447C5.4476 0.240215 5.50028 0.367392 5.50028 0.5V10.2931L9.14653 6.64625C9.24035 6.55243 9.3676 6.49972 9.50028 6.49972C9.63296 6.49972 9.76021 6.55243 9.85403 6.64625C9.94785 6.74007 10.0006 6.86732 10.0006 7C10.0006 7.13268 9.94785 7.25993 9.85403 7.35375Z" fill="currentColor" />
                        </svg>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Hero;
