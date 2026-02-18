import { useState, useEffect } from 'react';

// Layout Components
import { Navbar } from './components/layout/Navbar';
import { Footer } from './components/layout/Footer';

// Section Components
import { HeroSection } from './components/sections/HeroSection';
import { ArchitectureSection } from './components/sections/ArchitectureSection';
import { ProjectsSection } from './components/sections/ProjectsSection';
import { CollaborationSection } from './components/sections/CollaborationSection';
import { SocialSection } from './components/sections/SocialSection';
import { LeadOnboardingModal } from './components/sections/LeadOnboardingModal';

const App = () => {
    const [isScrolled, setIsScrolled] = useState(false);
    const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
    const [isLeadModalOpen, setIsLeadModalOpen] = useState(false);

    // Detect scroll for navbar styling
    useEffect(() => {
        const handleScroll = () => {
            setIsScrolled(window.scrollY > 50);
        };
        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    const scrollToSection = (id: string) => {
        const element = document.getElementById(id);
        if (element) {
            element.scrollIntoView({ behavior: 'smooth' });
            setIsMobileMenuOpen(false);
        }
    };

    const toggleLeadModal = () => setIsLeadModalOpen(!isLeadModalOpen);

    return (
        <div className="min-h-screen bg-[#0a0a0c] text-slate-300 font-sans selection:bg-emerald-500/30 selection:text-emerald-200 overflow-x-hidden relative">

            {/* Background Texture & Premium BG */}
            <div className="fixed inset-0 z-0 pointer-events-none opacity-40 mix-blend-overlay"
                style={{
                    backgroundImage: 'url(https://systentando.com/assets/images/background.png)',
                    backgroundSize: 'cover',
                    backgroundPosition: 'center'
                }}>
            </div>
            <div className="fixed inset-0 z-0 bg-gradient-to-tr from-[#0a0a0c] via-[#0a0a0c]/80 to-emerald-900/10 pointer-events-none"></div>

            <Navbar
                isScrolled={isScrolled}
                isMobileMenuOpen={isMobileMenuOpen}
                setIsMobileMenuOpen={setIsMobileMenuOpen}
                scrollToSection={scrollToSection}
            />

            <main>
                <ArchitectureSection />
                <HeroSection scrollToSection={scrollToSection} onOpenLeadModal={toggleLeadModal} />
                <ProjectsSection />
                <CollaborationSection />
                <SocialSection />
            </main>

            <LeadOnboardingModal
                isOpen={isLeadModalOpen}
                onClose={() => setIsLeadModalOpen(false)}
                unitId="#BR#ALL#SYSTEM#0001"
            />

            <Footer />
        </div>
    );
};

export default App;