import Hero from "../components/About/Hero";
import VisionOriginSection from "../components/About/VisionOriginSection";
import FounderSection from "../components/About/FounderSection";
import PrinciplesSection from "../components/About/PrinciplesSection";
import GuidingPrinciplesSection from "../components/About/GuidingPrinciplesSection";
import JourneySection from "../components/About/JourneySection";
import JoinMovementSection from "../components/About/JoinMovementSection";

export default function AboutPage() {
    return (
        <div className="bg-bg-dark min-h-screen relative overflow-hidden">
            {/* Exact SVG glow from Ecosystem page */}
            <div className='absolute h-full w-full top-0 left-0 z-0 pointer-events-none'>
                <svg width="full" height="1500" className="min-h-[190vh]" viewBox="0 0 1280 1607" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <g filter="url(#filter0_f_201_1774_about)">
                        <path d="M467.322 658.503C274.221 569.998 50.8455 578.503 -6.17874 764.503C-46.8001 897 22.2139 1017.31 125.321 1061.5C422.846 1189 1094.82 1157.5 1317.82 936.5C1541.15 715.177 1549.82 339 1304.32 339C1167.32 339 1106.82 496.503 1019.82 578.503C854.929 733.92 611.321 724.503 467.322 658.503Z" fill="#0000FF" style={{ fill: "#0000FF;fill:color(display-p3 0.0000 0.0000 1.0000);fill-opacity:1" }} />
                    </g>
                    <g filter="url(#filter1_f_201_1774_about)">
                        <path d="M417.322 678.503C224.221 589.998 0.845512 598.503 -56.1787 784.503C-96.8001 917 -27.7861 1037.31 75.3215 1081.5C372.846 1209 1044.82 1177.5 1267.82 956.5C1491.15 735.177 1499.82 359 1254.32 359C1117.32 359 1056.82 516.503 969.822 598.503C804.929 753.92 561.321 744.503 417.322 678.503Z" fill="#008000" style={{ fill: "#008000;fill:color(display-p3 0.0000 0.5020 0.0000);fill-opacity:1" }} />
                    </g>
                    <defs>
                        <filter id="filter0_f_201_1774_about" x="-218" y="139" width="1904.89" height="1197.32" filterUnits="userSpaceOnUse" colorInterpolationFilters="sRGB">
                            <feFlood floodOpacity="0" result="BackgroundImageFix" />
                            <feBlend mode="normal" in="SourceGraphic" in2="BackgroundImageFix" result="shape" />
                            <feGaussianBlur stdDeviation="150" result="effect1_foregroundBlur_201_1774_about" />
                        </filter>
                        <filter id="filter1_f_201_1774_about" x="-518" y="-91" width="2404.89" height="1697.32" filterUnits="userSpaceOnUse" colorInterpolationFilters="sRGB">
                            <feFlood floodOpacity="0" result="BackgroundImageFix" />
                            <feBlend mode="normal" in="SourceGraphic" in2="BackgroundImageFix" result="shape" />
                            <feGaussianBlur stdDeviation="225" result="effect1_foregroundBlur_201_1774" />
                        </filter>
                    </defs>
                </svg>
            </div>

            <div className="relative z-10 w-full flex flex-col">
                <Hero />
                <VisionOriginSection />
                <FounderSection />
                <PrinciplesSection />
                <GuidingPrinciplesSection />
                <JourneySection />
                <JoinMovementSection />
            </div>
        </div>
    );
}