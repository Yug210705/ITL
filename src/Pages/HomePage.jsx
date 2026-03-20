import React from 'react';
import AboutSection from "../components/Home/About";
import Hero from "../components/Home/Hero";
import InfoSlider from "../components/Home/InfoSlider";
import SolutionSection from "../components/Home/SolutionSection";
import MethodologySection from "../components/Home/MethodologySection";
import VisionSection from "../components/Home/VisionSection";
import LeadershipSection from "../components/Home/LeadershipSection";
import RipplesSection from "../components/Home/RipplesSection";
import InsightsSection from "../components/Home/InsightsSection";
import JoinMovementSection from "../components/Home/JoinMovementSection";

export default function HomePage() {
    const bgRef = React.useRef(null);
    const cursorRef = React.useRef(null);

    return (
        <div className="w-full bg-bg-dark relative">
            {/* Global Gradient Glow - same as other pages */}
            <div ref={bgRef} className='fixed h-screen w-full top-0 left-0 z-0 pointer-events-none overflow-hidden'>
                <svg width="100%" height="100%" viewBox="0 0 1280 1607" fill="none" xmlns="http://www.w3.org/2000/svg" className="min-h-screen">
                    <g filter="url(#home_filter0_f)">
                        <path d="M467.322 658.503C274.221 569.998 50.8455 578.503 -6.17874 764.503C-46.8001 897 22.2139 1017.31 125.321 1061.5C422.846 1189 1094.82 1157.5 1317.82 936.5C1541.15 715.177 1549.82 339 1304.32 339C1167.32 339 1106.82 496.503 1019.82 578.503C854.929 733.92 611.321 724.503 467.322 658.503Z" fill="#0000FF" fillOpacity="0.4" />
                    </g>
                    <g filter="url(#home_filter1_f)">
                        <path d="M417.322 678.503C224.221 589.998 0.845512 598.503 -56.1787 784.503C-96.8001 917 -27.7861 1037.31 75.3215 1081.5C372.846 1209 1044.82 1177.5 1267.82 956.5C1491.15 735.177 1499.82 359 1254.32 359C1117.32 359 1056.82 516.503 969.822 598.503C804.929 753.92 561.321 744.503 417.322 678.503Z" fill="#008000" fillOpacity="0.3" />
                    </g>
                    <defs>
                        <filter id="home_filter0_f" x="-218" y="139" width="1904.89" height="1197.32" filterUnits="userSpaceOnUse" colorInterpolationFilters="sRGB">
                            <feFlood floodOpacity="0" result="BackgroundImageFix" />
                            <feBlend mode="normal" in="SourceGraphic" in2="BackgroundImageFix" result="shape" />
                            <feGaussianBlur stdDeviation="80" result="effect1_foregroundBlur" />
                        </filter>
                        <filter id="home_filter1_f" x="-518" y="-91" width="2404.89" height="1697.32" filterUnits="userSpaceOnUse" colorInterpolationFilters="sRGB">
                            <feFlood floodOpacity="0" result="BackgroundImageFix" />
                            <feBlend mode="normal" in="SourceGraphic" in2="BackgroundImageFix" result="shape" />
                            <feGaussianBlur stdDeviation="150" result="effect1_foregroundBlur" />
                        </filter>
                    </defs>
                </svg>
            </div>

            <div className="relative z-10 w-full overflow-x-hidden">
                <div className="relative w-full overflow-hidden">
                    <Hero />
                </div>
                <div className="relative w-full overflow-hidden">
                    <AboutSection bgRef={bgRef} />
                </div>
                <div className="relative w-full overflow-hidden">
                    <InfoSlider />
                </div>
                <div className="relative w-full overflow-hidden">
                    <SolutionSection />
                </div>
                <div className="relative w-full overflow-hidden">
                    <MethodologySection />
                </div>
                <div className="relative w-full overflow-hidden">
                    <VisionSection />
                </div>
                <div className="relative w-full overflow-hidden">
                    <LeadershipSection />
                </div>
                <div className="relative w-full overflow-hidden">
                    <RipplesSection />
                </div>
                <div className="relative w-full overflow-hidden">
                    <InsightsSection />
                </div>
                <div className="relative w-full overflow-hidden">
                    <JoinMovementSection />
                </div>
            </div>
        </div>
    )
}