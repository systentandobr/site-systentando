import { Activity, Github, Menu, X } from 'lucide-react';

interface NavbarProps {
    isScrolled: boolean;
    isMobileMenuOpen: boolean;
    setIsMobileMenuOpen: (open: boolean) => void;
    scrollToSection: (id: string) => void;
}

export const Navbar = ({ isScrolled, isMobileMenuOpen, setIsMobileMenuOpen, scrollToSection }: NavbarProps) => {
    return (
        <nav className={`fixed w-full z-50 transition-all duration-300 border-b ${isScrolled ? 'bg-[#0a0a0c]/90 backdrop-blur-md border-emerald-900/30 py-3' : 'bg-transparent border-transparent py-5'}`}>
            <div className="container mx-auto px-6 flex justify-between items-center">
                <div className="flex items-center gap-2 group cursor-pointer" onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}>
                    <div className="relative">
                        <div className="absolute inset-0 bg-emerald-500 blur opacity-20 group-hover:opacity-40 transition-opacity rounded-full"></div>
                        <Activity className="text-emerald-400 relative z-10 w-8 h-8" />
                    </div>
                    <span className="text-xl font-bold text-white tracking-tight">Systentando<span className="text-emerald-500">.</span></span>
                </div>

                {/* Desktop Nav */}
                <div className="hidden md:flex items-center gap-8">
                    <button onClick={() => scrollToSection('architecture')} className="hover:text-emerald-400 transition-colors text-sm font-medium">Arquitetura</button>
                    <button onClick={() => scrollToSection('projects')} className="hover:text-emerald-400 transition-colors text-sm font-medium">Projetos</button>
                    <button onClick={() => scrollToSection('collaboration')} className="hover:text-emerald-400 transition-colors text-sm font-medium">Colabore</button>
                    <a href="https://github.com/systentandobr" target="_blank" rel="noopener noreferrer" className="bg-emerald-600/10 hover:bg-emerald-600/20 text-emerald-400 border border-emerald-500/30 px-4 py-2 rounded-full text-sm font-semibold transition-all flex items-center gap-2">
                        <Github size={16} />
                        Repositórios
                    </a>
                </div>

                {/* Mobile Menu Toggle */}
                <button className="md:hidden text-white" onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}>
                    {isMobileMenuOpen ? <X /> : <Menu />}
                </button>
            </div>

            {/* Mobile Nav */}
            {isMobileMenuOpen && (
                <div className="md:hidden absolute top-full left-0 w-full bg-[#0f0f13] border-b border-emerald-900/30 py-4 px-6 flex flex-col gap-4">
                    <button onClick={() => scrollToSection('architecture')} className="text-left py-2 hover:text-emerald-400">Arquitetura</button>
                    <button onClick={() => scrollToSection('projects')} className="text-left py-2 hover:text-emerald-400">Projetos</button>
                    <button onClick={() => scrollToSection('collaboration')} className="text-left py-2 hover:text-emerald-400">Colabore</button>
                </div>
            )}
        </nav>
    );
};
