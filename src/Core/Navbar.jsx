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
                <div
                    className={`fixed inset-0 bg-bg-dark/95 backdrop-blur-xl z-[55] flex flex-col justify-center items-center gap-8 transition-transform duration-500 ease-in-out ${isOpen ? 'translate-x-0' : 'translate-x-full'}`}
                >
                    <ul className="flex flex-col items-center gap-8 text-center px-6">
                        {['About Institute', 'Ecosystem', 'Courses', 'Blogs', 'Contact'].map((item) => (
                            <li key={item}>
                                <Link
                                    to={`/${item.toLowerCase().replace(' ', '-')}`}
                                    className="font-sans text-2xl md:text-3xl text-white hover:text-[#006AFF] transition-colors duration-300 font-light"
                                    onClick={() => setIsOpen(false)}
                                >
                                    {item}
                                </Link>
                            </li>
                        ))}
                    </ul>
                </div>
            </div>
        </nav>
    );
};

export default Navbar;
