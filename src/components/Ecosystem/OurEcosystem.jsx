import React, { useState, useEffect, useLayoutEffect, useRef } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

const tabsData = [
  {
      id: 'martinich-consulting',
      label: 'MARTINICH CONSULTING',
      subtitle: 'STRATEGY & IMPLEMENTATION',
      title: 'Martinich Consulting',
      bullets: [
          'Culture diagnostics and trust-building\ntransformations',
          'Executive coaching and succession planning\nsupport',
          'Tailored solutions co-created with your\nleadership team'
      ],
      btnLabel: 'Visit Martinich Consulting →',
      badge: 'PREMIUM ADVISORY',
      mockupImg: '/images/martinich_mockup.png',
      btnHref: 'https://highperforming-teams.com/'
  },
  {
      id: 'luca-leader',
      label: 'LUCA THE LEADER',
      subtitle: 'AWARENESS & ACCESS',
      title: 'LUCA: The Leader',
      bullets: [
          'Ride the Wave of Leadership with\na fun animated series',
          'Free resources and community-driven\nleadership awareness',
          'Scholarship programs making quality\ntraining accessible to all'
      ],
      btnLabel: 'Watch the Series →',
      badge: 'OPEN TO ALL',
      mockupImg: '/images/luca_mockup.png',
      btnHref: 'https://lucatheleader.com/'
  },
  {
      id: 'martinich-courses',
      label: 'MARTINICH COURSES',
      subtitle: 'LEARNING & DEVELOPMENT',
      title: 'Martinich Courses',
      bullets: [
          'Comprehensive curriculum on trusted leadership principles',
          'Interactive workshops and continuous education',
          'Certification programs for aspiring leaders'
      ],
      btnLabel: 'View Courses →',
      badge: 'ENROLLING NOW',
      mockupImg: '/images/lucaweb.webp',
      btnHref: '#'
  },
  {
      id: 'martinich-rad',
      label: 'MARTINICH R&D',
      subtitle: 'RESEARCH & INNOVATION',
      title: 'Martinich R&D',
      bullets: [
          'Pioneering research on organizational trust',
          'Development of new leadership assessment tools',
          'Collaborative projects with academic institutions'
      ],
      btnLabel: 'Explore R&D →',
      badge: 'LATEST INSIGHTS',
      mockupImg: '/images/lucaweb2.webp',
      btnHref: '#'
  }
];

const OurEcosystem = () => {
  const [activeTab, setActiveTab] = useState('martinich-consulting');
  const activeData = tabsData.find(t => t.id === activeTab);
  const activeIndex = tabsData.findIndex(t => t.id === activeTab);
  
  const [isHovered, setIsHovered] = useState(false);
  
  // Keep active tab in view for mobile
  useEffect(() => {
    const activeTabElement = document.getElementById(`tab-${activeTab}`);
    if (activeTabElement) {
      activeTabElement.scrollIntoView({
        behavior: 'smooth',
        block: 'nearest',
        inline: 'center'
      });
    }
  }, [activeTab]);
  
  const sectionRef = useRef(null);
  const graphicRef = useRef(null);
  const contentRef = useRef(null);

  // AUTO-SCROLL LOGIC - Cycles every 3.5 seconds, pauses on hover
  useEffect(() => {
    if (isHovered) return; // Pause on hover

    const timer = setInterval(() => {
      const nextIndex = (activeIndex + 1) % tabsData.length;
      setActiveTab(tabsData[nextIndex].id);
    }, 3500); 

    return () => clearInterval(timer);
  }, [activeIndex, isHovered]);

  useLayoutEffect(() => {
    let ctx = gsap.context(() => {
      // Reveal entire section
      gsap.from(".reveal-up", {
        y: 60,
        opacity: 0,
        duration: 0.8,
        stagger: 0.2,
        ease: "power2.out",
        scrollTrigger: {
          trigger: sectionRef.current,
          start: "top 95%",
        }
      });

      // Revolving orbits on scroll entry - One by one clockwise from down
      const orbitsConfig = [
        { el: ".orbit-outer", startRot: 280 },
        { el: ".orbit-mid", startRot: 250 },
        { el: ".orbit-inner", startRot: 320 }
      ];

      orbitsConfig.forEach((config, i) => {
        const tl = gsap.timeline({
          scrollTrigger: {
            trigger: sectionRef.current,
            start: `top ${110 - (i * 15)}%`, // Start earlier
            end: `top ${40 - (i * 10)}%`,   // Complete higher up in the viewport
            scrub: 1.5,                     // Smooth but responsive
            toggleActions: "play reverse play reverse"
          }
        });

        tl.fromTo(config.el, 
          { rotation: config.startRot, opacity: 0 },
          { 
            rotation: 0, 
            opacity: 1,
            ease: "none" // Scrubbing works best with linear easing
          }
        );

        // Counter-rotate text inside orbits immediately
        tl.fromTo(`${config.el} .node-content`, 
          { rotation: -config.startRot },
          { 
            rotation: 0, 
            ease: "none"
          }, 0); 
      });
    }, sectionRef);
    return () => ctx.revert();
  }, []);

  useLayoutEffect(() => {
    let ctx = gsap.context(() => {
      gsap.from(".tab-content-reveal", {
        opacity: 0,
        y: 20,
        duration: 0.5,
        stagger: 0.1,
        ease: "power2.out"
      });
      gsap.from(".mockup-reveal", {
        opacity: 0,
        scale: 0.95,
        duration: 0.6,
        ease: "back.out(1.4)"
      });
    }, contentRef);
    return () => ctx.revert();
  }, [activeTab]);

  return (
      <section ref={sectionRef} className="w-full relative pt-4 px-4 md:px-0 bg-transparent">

          <div className="relative w-full h-[600px] md:h-[800px] lg:h-[950px] overflow-hidden reveal-up">
              
              {/* Refined Background Glows */}
              <div className="absolute inset-0 pointer-events-none z-0">
                  {/* Subtle centered corona */}
                  <div className="absolute top-[62%] lg:top-[45%] left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] md:w-[1000px] h-[600px] md:h-[1000px] bg-gradient-to-r from-[#0033ff15] via-[#0052ff10] to-[#00aaff05] blur-[100px] rounded-full"></div>
                  {/* Pulsating corner accents */}
                  <div className="absolute -top-[10%] -left-[10%] w-[500px] h-[500px] bg-[#001Aff08] blur-[120px] rounded-full animate-pulse-slow"></div>
                  <div className="absolute -bottom-[20%] -right-[10%] w-[600px] h-[600px] bg-[#0052ff05] blur-[110px] rounded-full animate-pulse-slow" style={{ animationDelay: '2s' }}></div>
              </div>
              
              <div className="absolute left-1/2 -translate-x-1/2 top-10 md:top-14 text-center lg:left-0 lg:translate-x-0 lg:top-[45%] lg:-translate-y-1/2 lg:pl-16 lg:text-left z-10 w-full lg:w-auto px-6">
                  <div className="flex items-center justify-center lg:justify-start gap-2.5 mb-5">
                      <span className="w-1.5 md:w-2 h-1.5 md:h-2 bg-[#006AFF] rounded-full animate-pulse"></span>
                      <span className="font-sans text-[10px] md:text-[11px] font-extrabold tracking-[0.3em] uppercase text-white/40">
                          THE POWER OF INTEGRATION
                      </span>
                  </div>
                  <h2 className="font-serif text-[40px] sm:text-[44px] md:text-[52px] lg:text-[76px] text-white leading-tight tracking-tight mb-8">
                      Our <br className="md:hidden" /> <span className="italic text-white/90">Ecosystem</span>
                  </h2>
              </div>

              {/* Ecosystem Graphic Wrapper */}
              <div ref={graphicRef} className="absolute pointer-events-none origin-center transform scale-[0.52] min-[400px]:scale-[0.58] sm:scale-[0.7] md:scale-[0.85] lg:scale-100 top-[62%] lg:top-[45%] left-1/2 lg:left-[88%] -translate-x-1/2 lg:-translate-x-0 -translate-y-1/2 transition-all duration-700">
                  
                  {/* Outer Orbit (Radius 460) */}
                  <div className="absolute rounded-full border border-white/20 orbit-outer shadow-[0_0_50px_rgba(255,255,255,0.05)]"
                      style={{ width: '920px', height: '920px', top: '-460px', left: '-460px' }}>
                      <div className="absolute flex items-center justify-center rounded-full bg-[#111] text-[16px] lg:text-[10px] text-white font-serif italic text-center leading-[1.3] node-content w-[150px] lg:w-[120px] h-[150px] lg:h-[120px] top-[100px] left-[100px] border border-white/30"
                          style={{ boxShadow: '0 0 60px rgba(0,0,0,1), inset 0 0 20px rgba(255,255,255,0.1)' }}>
                          <span className="drop-shadow-lg">Martinich<br />Consulting</span>
                      </div>
                  </div>

                  {/* Mid Orbit (Radius 320) */}
                  <div className="absolute rounded-full border border-white/20 orbit-mid shadow-[0_0_40px_rgba(255,255,255,0.05)]"
                      style={{ width: '640px', height: '640px', top: '-320px', left: '-320px' }}>
                      <div className="absolute flex items-center justify-center rounded-full bg-[#111] text-[16px] lg:text-[10px] text-white font-serif italic text-center leading-[1.3] node-content w-[140px] lg:w-[110px] h-[140px] lg:h-[110px] top-[250px] lg:top-[265px] left-[-70px] lg:left-[-55px] border border-white/30"
                          style={{ boxShadow: '0 0 60px rgba(0,0,0,1), inset 0 0 20px rgba(255,255,255,0.1)' }}>
                          <span className="drop-shadow-lg">LUCA: The<br />Leader</span>
                      </div>
                  </div>

                  {/* Inner Orbit (Radius 190) */}
                  <div className="absolute rounded-full border border-white/20 orbit-inner z-30 shadow-[0_0_30px_rgba(255,255,255,0.05)]"
                      style={{ width: '380px', height: '380px', top: '-190px', left: '-190px' }}>
                      <div className="absolute flex items-center justify-center rounded-full bg-[#111] text-[15px] lg:text-[10px] text-white font-serif italic text-center leading-[1.3] node-content w-[130px] lg:w-[100px] h-[130px] lg:h-[100px] top-[300px] lg:top-[330px] left-[130px] lg:left-[140px] border border-white/30"
                          style={{ boxShadow: '0 0 60px rgba(0,0,0,1), inset 0 0 20px rgba(255,255,255,0.1)' }}>
                          <span className="drop-shadow-lg">Martinich<br />R&D</span>
                      </div>
                  </div>

                  {/* ILT center white glowing core */}
                  <div className="absolute rounded-full bg-white flex items-center justify-center z-20"
                      style={{
                          width: '210px', height: '210px',
                          top: '-105px', left: '-105px',
                          boxShadow: '0 0 100px 50px rgba(255,255,255,0.5), 0 0 200px 100px rgba(255,255,255,0.2)'
                      }}>
                      <span className="font-serif italic text-black text-[42px] tracking-widest pl-2">ILT</span>
                  </div>

              </div>
          </div>

          {/* TABS + CONTENT - Pauses auto-scroll on hover */}
          <div ref={contentRef} onMouseEnter={() => setIsHovered(true)} onMouseLeave={() => setIsHovered(false)} className="w-full px-4 md:px-12 lg:px-20 pb-16 mt-6 md:mt-10 reveal-up">
              <div className="flex flex-col w-full max-w-[1440px] mx-auto">
                  <div className="flex w-full rounded-t-[20px] border border-[#252525] border-b-0 overflow-x-auto no-scrollbar">
                      {tabsData.map((tab) => {
                          const isActive = activeTab === tab.id;
                          return (
                              <button key={tab.id} onClick={() => setActiveTab(tab.id)}
                                  className={`flex-1 min-w-[160px] md:min-w-0 flex items-center justify-center h-[56px] transition-colors duration-200 border-r border-[#252525] last:border-r-0 ${isActive ? 'bg-[#161616]' : 'bg-[#090909] hover:bg-[#111]'}`} id={`tab-${tab.id}`}>
                                  <span className={`font-sans text-[9px] md:text-[10px] tracking-[0.15em] font-semibold uppercase transition-colors ${isActive ? 'text-[#e8e8e8]' : 'text-[#3a3a3a] hover:text-[#555]'}`}>
                                      {tab.label}
                                  </span>
                              </button>
                          );
                      })}
                  </div>

                  <div className="w-full bg-[#0f0f0f] border border-[#252525] rounded-b-[20px] relative overflow-hidden">
                      <div className="absolute bottom-[-40px] left-[-20px] w-[300px] md:w-[400px] h-[200px] md:h-[280px] bg-[#1833ff] opacity-[0.1] blur-[80px] pointer-events-none rounded-full"></div>
                      <div className="flex flex-col lg:flex-row min-h-[420px]">
                          <div className="w-full lg:w-[42%] flex flex-col justify-center relative z-10 p-8 md:p-12 lg:p-14 lg:pl-16">
                              <div className="flex items-center gap-2 mb-5 tab-content-reveal">
                                  <span className="w-[5px] h-[5px] bg-[#888] inline-block flex-shrink-0"></span>
                                  <span className="font-sans text-[9px] font-bold tracking-[0.22em] uppercase text-[#777]">{activeData.subtitle}</span>
                              </div>
                              <h3 className="font-serif text-[38px] lg:text-[50px] text-white mb-6 leading-[1.1] font-normal tab-content-reveal">{activeData.title}</h3>
                              <ul className="flex flex-col gap-3 mb-9 text-[#666] text-[13.5px] font-sans font-light tab-content-reveal">
                                  {activeData.bullets.map((bullet, idx) => (
                                      <li key={idx} className="flex items-start gap-3">
                                          <span className="w-[5px] h-[5px] rounded-full bg-[#444] mt-[7px] shrink-0"></span>
                                          <span className="leading-[1.6] whitespace-pre-line">{bullet}</span>
                                      </li>
                                  ))}
                              </ul>
                              <div className="tab-content-reveal">
                                  <button onClick={() => window.open(activeData.btnHref, '_blank')} className="bg-[#0055FF] hover:bg-[#0044ee] transition-colors text-white text-[12px] font-medium py-[10px] px-6 rounded-md tracking-wide w-full md:w-fit">{activeData.btnLabel}</button>
                              </div>
                          </div>

                          <div className="flex-1 flex flex-col items-center lg:items-start justify-center relative z-10 p-8 pt-0 lg:p-10 lg:pl-4 mockup-reveal">
                              <div className="w-full bg-[#060606] rounded-[22px] border border-[#2a2a2a] p-[10px] md:p-[14px]" style={{ boxShadow: '0 32px 80px rgba(0,0,0,0.9), 0 8px 24px rgba(0,0,0,0.6)' }}>
                                  <div className="relative w-full overflow-hidden rounded-[12px] bg-white aspect-[4/3]">
                                      <div className="absolute top-0 left-0 z-20 flex items-center gap-1.5 bg-[#0055FF] text-white rounded-tl-[12px] rounded-br-[12px] px-3 py-[7px] text-[7.5px] font-bold tracking-[0.14em] uppercase">
                                          <span className="w-[3px] h-[3px] bg-white rounded-full"></span>
                                          {activeData.badge}
                                      </div>
                                      <img src={activeData.mockupImg} alt={activeData.title} className="w-full h-full object-cover" style={{ objectPosition: 'top center' }} onError={(e) => { e.target.src = '/images/lucaweb2.webp'; }} />
                                  </div>
                              </div>
                              <div className="flex items-center w-full gap-2 mt-6">
                                  {tabsData.map((_, i) => (
                                      <div key={i} onClick={() => setActiveTab(tabsData[i].id)} className={`h-[2px] flex-1 rounded-full cursor-pointer transition-all duration-300 ${i <= activeIndex ? 'bg-[#0055FF]' : 'bg-[#282828] hover:bg-[#3a3a3a]'}`} />
                                  ))}
                              </div>
                          </div>
                      </div>
                  </div>
              </div>
          </div>
      </section>
  );
};

export default OurEcosystem;
