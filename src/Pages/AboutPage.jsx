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
            <div className='absolute h-full w-full top-0 left-0 z-0 pointer-events-none opacity-90'>
                <svg width="100%" height="auto" className="min-h-[190vh] w-full" viewBox="0 0 1280 1607" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <g filter="url(#filter0_f_201_1774_about_v2)">
                        <path d="M467.322 458.503C274.221 369.998 50.8455 378.503 -6.17874 564.503C-46.8001 697 22.2139 817.31 125.321 861.5C422.846 989 1094.82 957.5 1317.82 736.5C1541.15 515.177 1549.82 139 1304.32 139C1167.32 139 1106.82 296.503 1019.82 378.503C854.929 533.92 611.321 524.503 467.322 458.503Z" fill="#0000FF" fillOpacity="0.9" />
                    </g>
                    <g filter="url(#filter1_f_201_1774_about_v2)">
                        <path d="M417.322 478.503C224.221 389.998 0.845512 398.503 -56.1787 584.503C-96.8001 717 -27.7861 837.31 75.3215 881.5C372.846 1009 1044.82 977.5 1267.82 756.5C1491.15 535.177 1499.82 159 1254.32 159C1117.32 159 1056.82 316.503 969.822 398.503C804.929 553.92 561.321 544.503 417.322 478.503Z" fill="#008000" fillOpacity="0.9" />
                    </g>
                    <defs>
                        <filter id="filter0_f_201_1774_about_v2" x="-218" y="-61" width="1904.89" height="1197.32" filterUnits="userSpaceOnUse" colorInterpolationFilters="sRGB">
                            <feFlood floodOpacity="0" result="BackgroundImageFix" />
                            <feBlend mode="normal" in="SourceGraphic" in2="BackgroundImageFix" result="shape" />
                            <feGaussianBlur stdDeviation="100" />
                        </filter>
                        <filter id="filter1_f_201_1774_about_v2" x="-518" y="-291" width="2404.89" height="1697.32" filterUnits="userSpaceOnUse" colorInterpolationFilters="sRGB">
                            <feFlood floodOpacity="0" result="BackgroundImageFix" />
                            <feBlend mode="normal" in="SourceGraphic" in2="BackgroundImageFix" result="shape" />
                            <feGaussianBlur stdDeviation="150" />
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