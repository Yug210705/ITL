import React, { useState } from 'react';
import { Link } from 'react-router-dom';

const Navbar = () => {
    const [isOpen, setIsOpen] = useState(false);

    const toggleMenu = () => {
        setIsOpen(!isOpen);
    };

    return (
        <nav className="fixed top-0 left-0 w-full py-4 md:py-8 z-50 bg-transparent border-b-[0.5px] border-[#FFFFFF29] px-4 md:px-12 lg:px-20">
            <div className="flex justify-between items-center max-w-[1400px] mx-auto w-full">
                <Link to="/" className="flex items-center gap-2 md:gap-3 text-white no-underline group shrink-0">
                    <span className="font-sans italic font-bold text-2xl md:text-3xl tracking-wide group-hover:opacity-90 transition-opacity">
                        I.T.L
                    </span>
                    <span className="font-sans text-[8px] min-[350px]:text-[9px] md:text-xs leading-tight text-white border-l border-white/30 pl-2 md:pl-3 uppercase tracking-wide max-w-[80px] min-[350px]:max-w-[120px] md:max-w-none">
                        Institute for <br />
                        Trusted Leadership
                    </span>
                </Link>

                <div className="hidden lg:flex items-center">
                    <ul className="flex gap-8 lg:gap-10">
                        {['About Institute', 'Ecosystem', 'Courses', 'Blogs', 'Contact'].map((item) => (
                            <li key={item}>
                                <Link
                                    to={`/${item.toLowerCase().replace(' ', '-')}`}
                                    className="font-sans text-sm text-white hover:text-white transition-colors duration-300 font-normal tracking-wide"
                                >
                                    {item}
                                </Link>
                            </li>
                        ))}
                    </ul>
                </div>

                <div
                    className="lg:hidden flex flex-col justify-between w-6 h-4 cursor-pointer z-[60]"
                    onClick={toggleMenu}
                >
                    <span className={`block w-full h-[2px] bg-white transition-all duration-300 ease-in-out ${isOpen ? 'rotate-[-45deg] translate-y-[7px]' : ''}`}></span>
                    <span className={`block w-full h-[2px] bg-white transition-all duration-300 ease-in-out ${isOpen ? 'opacity-0' : ''}`}></span>
                    <span className={`block w-full h-[2px] bg-white transition-all duration-300 ease-in-out ${isOpen ? 'rotate-[45deg] -translate-y-[7px]' : ''}`}></span>
                </div>
                {/* Premium Mobile Menu Overlay */}
                <div
                    className={`fixed inset-0 bg-[#0A0A0A]/98 backdrop-blur-2xl z-[55] flex flex-col justify-between transition-all duration-500 ease-in-out ${isOpen ? 'opacity-100 pointer-events-auto' : 'opacity-0 pointer-events-none'}`}
                >
                    {/* Decorative Background Element */}
                    <div className="absolute top-0 right-0 w-[150%] h-[150%] bg-[radial-gradient(circle_at_top_right,_var(--tw-gradient-stops))] from-[#00336640] via-transparent to-transparent pointer-events-none -z-10" />

                    <div className="flex flex-col flex-1 max-w-[1400px] w-full mx-auto px-6 md:px-12 pt-32 pb-8 overflow-y-auto">
                        <ul className="flex flex-col items-start gap-6 md:gap-8">
                            {['About Institute', 'Ecosystem', 'Courses', 'Blogs', 'Contact'].map((item, i) => (
                                <li 
                                    key={item} 
                                    className={`transition-all duration-700 ease-out`}
                                    style={{ 
                                        transform: isOpen ? 'translateY(0)' : 'translateY(24px)',
                                        opacity: isOpen ? 1 : 0,
                                        transitionDelay: isOpen ? `${150 + i * 100}ms` : '0ms'
                                    }}
                                >
                                    <Link
                                        to={`/${item.toLowerCase().replace(' ', '-')}`}
                                        className="font-serif text-[38px] min-[380px]:text-[46px] md:text-6xl text-white tracking-wide hover:italic transition-all duration-300 block group"
                                        onClick={() => setIsOpen(false)}
                                    >
                                        <div className="flex items-center gap-4 md:gap-6">
                                            <span className="text-xs md:text-sm font-sans font-medium text-white/30 group-hover:text-white/60 transition-colors w-6">0{i + 1}</span>
                                            {item}
                                        </div>
                                    </Link>
                                </li>
                            ))}
                        </ul>
                    </div>

                    {/* Bottom contact info footer */}
                    <div 
                        className="max-w-[1400px] w-full mx-auto px-6 md:px-12 pb-12 transition-all duration-1000 ease-out"
                        style={{ 
                            transform: isOpen ? 'translateY(0)' : 'translateY(20px)',
                            opacity: isOpen ? 1 : 0,
                            transitionDelay: isOpen ? '600ms' : '0ms'
                        }}
                    >
                        <div className="w-full h-px bg-white/10 mb-8 relative overflow-hidden">
                            <div className={`absolute top-0 left-0 h-full bg-white/40 transition-all duration-1000 ease-out ${isOpen ? 'w-full' : 'w-0'}`} style={{ transitionDelay: '500ms' }} />
                        </div>
                        <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-6">
                            <div className="flex flex-col gap-2">
                                <span className="text-white/50 text-[10px] tracking-[0.2em] uppercase font-bold">Institute for Trusted Leadership</span>
                                <a href="mailto:contact@trustedleadership.org" className="text-white text-sm font-sans hover:text-[#0080FF] transition-colors">contact@trustedleadership.org</a>
                            </div>
                            <div className="flex gap-6">
                                <a href="#" className="text-white/50 hover:text-white transition-colors text-sm font-sans">LinkedIn</a>
                                <a href="#" className="text-white/50 hover:text-white transition-colors text-sm font-sans">Twitter</a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </nav>
    );
};

export default Navbar;
