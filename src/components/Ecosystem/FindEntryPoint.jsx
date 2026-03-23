import React, { useState, useLayoutEffect, useRef } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { ArrowLeft, ArrowRight, ArrowUpRight, ChevronRight, Users, User, BookOpen } from 'lucide-react';

gsap.registerPlugin(ScrollTrigger);

const entryPoints = [
    {
        id: 'organization',
        title: 'An Organization',
        description: "Leadership development shouldn't require corporate budgets or elite credentials. You deserve access to quality growth, regardless of where you're starting.",
        icon: Users,
        arrowIcon: ArrowUpRight,
        content: {
            title: 'An Organization',
            options: [
                {
                    label: 'You want to assess your current leadership culture',
                    action: 'Start with Martinich Consulting →',
                    actionHref: 'https://highperforming-teams.com/',
                    isActive: true,
                },
                {
                    label: 'You need to train your entire leadership team',
                    action: '',
                    isActive: false,
                },
                {
                    label: 'You need custom programs for specific teams or departments',
                    action: '',
                    isActive: false,
                }
            ],
        }
    },
    {
        id: 'individual',
        title: 'An Individual',
        description: "Your programs check boxes but don't change behavior. The missing piece isn't what you're teaching; it's what you're not building: trust.",
        icon: User,
        arrowIcon: ArrowRight,
        content: {
            title: 'An Individual',
            options: [
                {
                    label: 'You want to develop your personal leadership skills',
                    action: 'Start with LUCA The Leader →',
                    actionHref: 'https://lucatheleader.com/',
                    isActive: true,
                },
                {
                    label: 'You want to connect with other leaders',
                    action: '',
                    isActive: false,
                }
            ],
        }
    },
    {
        id: 'researcher',
        title: 'A Researcher',
        description: "Research stays in journals while practitioners reinvent the wheel. The field needs collaboration that bridges theory and practice, not silos.",
        icon: BookOpen,
        arrowIcon: ArrowRight,
        content: {
            title: 'A Researcher',
            options: [
                {
                    label: 'You want to build on existing research models',
                    action: 'Join Martinich R&D →',
                    isActive: true,
                },
                {
                    label: 'Collaborate on a publication',
                    action: '',
                    isActive: false,
                }
            ],
        }
    }
];

const ThreeUsersIcon = ({ size = 480, strokeWidth = 1, className = "" }) => {
    return (
        <svg 
            width={size}   
            height={size} 
            viewBox="0 0 100 100" 
            fill="none" 
            stroke="currentColor" 
            strokeWidth={strokeWidth * 3} 
            strokeLinecap="round" 
            strokeLinejoin="round" 
            className={className}
        >
            <defs>
                <mask id="users-overlap-mask-find">
                    <rect width="100" height="100" fill="white" />
                    <circle cx="50" cy="54" r={11 + 1.5} fill="black" />
                    <path d="M22 90 c 5 -18, 15 -25, 28 -25 c 13 0, 23 7, 28 25" fill="black" stroke="black" strokeWidth={strokeWidth * 6} />
                </mask>
            </defs>
            <g mask="url(#users-overlap-mask-find)">
                <circle cx="32" cy="38" r="9" />
                <path d="M10 74 c 5 -12, 10 -15, 23 -15 c 8 0, 15 5, 20 12" />
                <circle cx="68" cy="38" r="9" />
                <path d="M47 71 c 5 -7, 12 -12, 21 -12 c 12 0, 18 3, 22 15" />
            </g>
            <circle cx="50" cy="54" r="11" />
            <path d="M22 90 c 5 -18, 15 -25, 28 -25 c 13 0, 23 7, 28 25" />
        </svg>
    );
};

const FindEntryPoint = () => {
    const [selectedEntry, setSelectedEntry] = useState('organization');
    const [iconSize, setIconSize] = useState(440);
    const containerRef = useRef(null);

    useLayoutEffect(() => {
        const handleResize = () => {
            if (window.innerWidth < 768) setIconSize(280);
            else if (window.innerWidth < 1024) setIconSize(340);
            else setIconSize(440);
        };
        handleResize();
        window.addEventListener('resize', handleResize);
        return () => window.removeEventListener('resize', handleResize);
    }, []);

    useLayoutEffect(() => {
        let ctx = gsap.context(() => {
            gsap.from(".reveal-find", {
                y: 80,
                opacity: 0,
                duration: 1,
                stagger: 0.15,
                ease: "power2.out",
                scrollTrigger: {
                    trigger: containerRef.current,
                    start: "top 90%",
                    once: true // Fix jitter by only running once
                }
            });
        }, containerRef);
        return () => ctx.revert();
    }, []);

    // Animate details transition
    useLayoutEffect(() => {
        if (!selectedEntry) return;
        let ctx = gsap.context(() => {
            gsap.fromTo(".detail-reveal", 
                { opacity: 0, x: -30 }, 
                { opacity: 1, x: 0, duration: 0.8, stagger: 0.1, ease: "power2.out" }
            );
            gsap.fromTo(".detail-icon-reveal", 
                { opacity: 0, scale: 0.8 }, 
                { opacity: 0.5, scale: 1, duration: 1, ease: "elastic.out(1, 0.75)" }
            );
        }, containerRef);
        return () => ctx.revert();
    }, [selectedEntry]);

    return (
        <section ref={containerRef} className="w-full relative pt-4 md:pt-8 pb-0 overflow-hidden z-10 bg-transparent">
            {/* Background */}
            <div className="absolute inset-0 z-[-1]" style={{
                background: 'linear-gradient(180deg, #0A0A0A 0%, #09041A 15%, #160655 25%, #2A04B2 45%, #230198 60%, #100342 85%, #070217 95%, #0A0A0A 100%)'
            }}>
                <div className="absolute top-[10%] left-[10%] w-[80%] h-[60%] rounded-full opacity-[0.35] pointer-events-none"
                     style={{
                         background: 'radial-gradient(circle at center, #5611ff 0%, transparent 65%)',
                         filter: 'blur(120px)'
                     }}></div>
            </div>

            <div className="container mx-auto max-w-[1440px] px-6 md:px-12 relative z-10">
                
                {/* Header Section */}
                <div className="grid grid-cols-1 md:grid-cols-[1fr_2fr] lg:grid-cols-[1fr_2.5fr] gap-6 md:gap-8 items-start mb-6 md:mb-16 text-left w-full mx-auto">
                    {/* Left Header */}
                    <div className="relative pt-6 md:pt-14 md:pl-16">
                        <div className="absolute top-0 left-0 w-full h-[20px] overflow-hidden pointer-events-none hidden md:block">
                            <svg className="absolute top-0 left-0 w-full" style={{ height: '40px' }}>
                                <rect x="0.5" y="0.5" rx="16" fill="none" stroke="rgba(255,255,255,0.2)" strokeWidth="1" strokeDasharray="8 8" className="w-[calc(100%-1px)]" style={{ height: '39px' }} />
                            </svg>
                        </div>
                        <span className="flex items-center gap-2 md:gap-3 font-sans text-[9px] md:text-[10px] font-bold tracking-[0.25em] uppercase text-[#ccc]">
                            <span className="w-1.5 md:w-2 h-1.5 md:h-2 bg-white inline-block"></span>
                            WHERE DO YOU FIT
                        </span>
                    </div>
                    {/* Right Header */}
                    <div className="relative pt-0 md:pt-14 md:pl-16">
                        <div className="absolute top-0 left-0 w-full h-[20px] overflow-hidden pointer-events-none hidden md:block">
                            <svg className="absolute top-0 left-0 w-full" style={{ height: '40px' }}>
                                <rect x="0.5" y="0.5" rx="16" fill="none" stroke="rgba(255,255,255,0.2)" strokeWidth="1" strokeDasharray="8 8" className="w-[calc(100%-1px)]" style={{ height: '39px' }} />
                            </svg>
                        </div>
                        <h2 className="font-serif text-[28px] sm:text-[36px] md:text-[52px] lg:text-[60px] leading-[1.15] text-white">
                            Find Your Entry Point<br className="hidden md:block" /> into the ITL Ecosystem
                        </h2>
                    </div>
                </div>
            </div>

            {/* Entry Cards Grid */}
            <div className="w-full relative mt-4 mx-auto border-t border-white/10 reveal-find">
                <div className="grid grid-cols-1 md:grid-cols-3 gap-0">
                    {entryPoints.map((entry) => {
                        const Icon = entry.icon;
                        const isActive = selectedEntry === entry.id;
                        const DynamicArrow = isActive ? ArrowUpRight : ArrowRight;
                        
                        return (
                            <div 
                                key={entry.id}
                                onClick={() => setSelectedEntry(entry.id)}
                                className={`cursor-pointer px-8 md:px-12 lg:px-[70px] py-12 md:py-[40px] lg:py-[60px] flex flex-col gap-6 relative transition-all duration-500 border-b md:border-b-0 border-white/5 md:border-r border-white/5 last:border-0 last:border-r-0 ${
                                    isActive 
                                        ? 'bg-[#482abb] shadow-[0_20px_50px_rgba(0,0,0,0.3)] z-20' 
                                        : 'bg-transparent hover:bg-white/5 z-0'
                                }`}
                            >
                                <div className="flex justify-between items-start text-white mb-6">
                                    <Icon size={44} strokeWidth={1.2} className="text-white drop-shadow-lg" />
                                    <DynamicArrow size={24} strokeWidth={1.5} className="text-white/80" />
                                </div>
                                <h3 className="text-white font-serif text-[28px] lg:text-[34px] font-normal tracking-wide">
                                    {entry.title}
                                </h3>
                                <p className="text-white/70 font-sans text-[15px] leading-[1.6]">
                                    {entry.description}
                                </p>
                            </div>
                        );
                    })}
                </div>
            </div>

            {/* Extended Details Overlay */}
            {selectedEntry && (
                <div className="w-full min-h-[400px] p-8 md:p-12 lg:px-24 lg:py-6 relative overflow-hidden flex flex-col items-start bg-transparent">
                    
                    <button 
                        onClick={() => setSelectedEntry(null)}
                        className="text-white/80 hover:text-white mb-16 md:mb-24 transition-all p-3 -ml-3 group flex items-center gap-4 reveal-find"
                    >
                        <ArrowLeft size={36} strokeWidth={1} className="group-hover:-translate-x-1 transition-transform" />
                        <span className="font-sans text-[12px] font-bold tracking-[0.2em] uppercase opacity-0 group-hover:opacity-100 transition-opacity">Back</span>
                    </button>

                    <div className="w-full grid grid-cols-1 lg:grid-cols-[1.3fr_1fr] gap-12 lg:gap-24 items-start relative z-10 mx-auto max-w-[1440px]">
                        
                        {/* Left Content Area */}
                        <div className="flex flex-col text-left text-white w-full pr-0 lg:pr-10">
                            <span className="flex items-center gap-2 md:gap-3 font-sans text-[9px] md:text-[10px] font-bold tracking-[0.25em] uppercase text-white/90 mb-4 md:mb-6 detail-reveal">
                                <span className="w-1.5 md:w-2 h-1.5 md:h-2 bg-white inline-block"></span>
                                IF YOU ARE..
                            </span>
                            <h3 className="font-serif text-[36px] md:text-[52px] lg:text-[68px] mb-10 md:mb-16 font-normal text-white leading-[1.05] detail-reveal">
                                {entryPoints.find(e => e.id === selectedEntry)?.content.title}
                            </h3>

                            <div className="flex flex-col w-full">
                                {entryPoints.find(e => e.id === selectedEntry)?.content.options.map((opt, idx) => (
                                    <div key={idx} className="flex flex-col transition-all group detail-reveal">
                                        <div 
                                            onClick={() => {/* If needed activate opt */}}
                                            className={`flex justify-between items-center font-sans text-[16px] md:text-[22px] font-normal py-6 md:py-10 border-b border-white/20 ${opt.isActive ? 'text-white border-transparent' : 'text-white/70 hover:text-white'}`}>
                                            <span className="max-w-[85%] leading-[1.4] tracking-tight">{opt.label}</span>
                                            {!opt.isActive && <ChevronRight size={20} md:size={24} strokeWidth={1} className="text-white/30 group-hover:text-white/70 transition-colors" />}
                                        </div>
                                        {opt.isActive && (
                                            <div className="pb-8 md:pb-12 border-b border-white/[0.08]">
                                                <button 
                                                    onClick={() => opt.actionHref && window.open(opt.actionHref, '_blank')}
                                                    className="bg-[#1a1a1e] hover:bg-[#25252a] text-[#f8f8f8] text-[12px] md:text-[14px] font-sans font-bold py-3 md:py-4 px-6 md:px-8 rounded-[4px] transition-all flex items-center tracking-[0.02em] mt-6 w-fit border border-white/5 shadow-2xl">
                                                    {opt.action}
                                                </button>
                                            </div>
                                        )}
                                    </div>
                                ))}
                            </div>
                        </div>

                        {/* Right Detail Icon */}
                        {/* Right Detail Icon */}
                        <div className={`flex justify-center items-start h-auto text-white w-full ${selectedEntry === 'organization' ? 'lg:pt-12' : 'pt-10 lg:pt-0'} pointer-events-none select-none detail-icon-reveal opacity-50`}>
                            {selectedEntry === 'organization' && (
                                <div className="w-full max-w-[280px] md:max-w-[340px] lg:max-w-none">
                                    <ThreeUsersIcon size={iconSize} strokeWidth={1} className="drop-shadow-[0_0_80px_rgba(0,0,0,0.6)] w-full h-auto" />
                                </div>
                            )}
                            {selectedEntry === 'individual' && <User size={iconSize} strokeWidth={1} className="drop-shadow-[0_0_80px_rgba(0,0,0,0.6)]" />}
                            {selectedEntry === 'researcher' && <BookOpen size={iconSize} strokeWidth={1} className="drop-shadow-[0_0_80px_rgba(0,0,0,0.6)]" />}
                        </div>
                    </div>
                </div>
            )}
        </section>
    );
};

export default FindEntryPoint;
