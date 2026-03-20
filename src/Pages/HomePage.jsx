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
        <div className="w-full overflow-x-hidden">
            <div className="relative w-full overflow-hidden">
                <Hero />
            </div>
            <div className="relative w-full overflow-hidden">
                <AboutSection />
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
    )
}