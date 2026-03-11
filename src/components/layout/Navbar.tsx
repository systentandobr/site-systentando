import { Activity, Github, Menu, X } from 'lucide-react';
import { Link } from 'react-router-dom';

interface NavbarProps {
    isScrolled: boolean;
    isMobileMenuOpen: boolean;
    setIsMobileMenuOpen: (open: boolean) => void;
    scrollToSection: (id: string) => void;
}

export const Navbar = ({ isScrolled, isMobileMenuOpen, setIsMobileMenuOpen, scrollToSection }: NavbarProps) => {
    return (
        <nav className={`fixed w-full z-50 transition-all duration-300 ${isScrolled ? 'glass-panel py-3' : 'bg-transparent border-transparent py-5'}`}>
            <div className="container mx-auto px-6 flex justify-between items-center">
                <div className="flex items-center gap-2 group cursor-pointer" onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}>
                    <div className="relative">
                        <div className="absolute inset-0 bg-accent blur opacity-20 group-hover:opacity-40 transition-opacity rounded-full"></div>
                        <Activity className="text-accent relative z-10 w-8 h-8" />
                    </div>
                    <span className="text-xl font-bold text-white tracking-tight font-display">Systentando<span className="text-accent">.</span></span>
                </div>

                {/* Desktop Nav */}
                <div className="hidden md:flex items-center gap-6">
                    <button onClick={() => scrollToSection('o-que-resolvemos')} className="hover:text-accent text-slate-300 transition-colors text-sm font-medium">O que resolvemos</button>
                    <button onClick={() => scrollToSection('projects')} className="hover:text-accent text-slate-300 transition-colors text-sm font-medium">Projetos</button>
                    <Link to="/freds-code-assistant" className="hover:text-accent text-slate-300 transition-colors text-sm font-medium">Freds Code Assistant</Link>
                    <button onClick={() => scrollToSection('architecture')} className="hover:text-accent text-slate-300 transition-colors text-sm font-medium">Arquitetura</button>
                    <button onClick={() => scrollToSection('processo')} className="hover:text-accent text-slate-300 transition-colors text-sm font-medium">Processo</button>
                    <button onClick={() => scrollToSection('depoimentos')} className="hover:text-accent text-slate-300 transition-colors text-sm font-medium">Depoimentos</button>
                    <button onClick={() => scrollToSection('contato')} className="hover:text-accent text-slate-300 transition-colors text-sm font-medium">Contato</button>
                    <button onClick={() => scrollToSection('faq')} className="hover:text-accent text-slate-300 transition-colors text-sm font-medium">FAQ</button>
                    <a href="https://github.com/systentandobr" target="_blank" rel="noopener noreferrer" className="bg-accent/10 hover:bg-accent/20 text-accent border border-accent/30 px-4 py-2 rounded-full text-sm font-semibold transition-all flex items-center gap-2">
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
                <div className="md:hidden absolute top-full left-0 w-full bg-[#0f0f13] border-b border-accent/20 py-4 px-6 flex flex-col gap-2 max-h-[70vh] overflow-y-auto">
                    <button onClick={() => scrollToSection('o-que-resolvemos')} className="text-left py-2 hover:text-accent text-slate-300">O que resolvemos</button>
                    <button onClick={() => scrollToSection('projects')} className="text-left py-2 hover:text-accent text-slate-300">Projetos</button>
                    <Link to="/freds-code-assistant" className="text-left py-2 hover:text-accent text-slate-300">Freds Code Assistant</Link>
                    <button onClick={() => scrollToSection('architecture')} className="text-left py-2 hover:text-accent text-slate-300">Arquitetura</button>
                    <button onClick={() => scrollToSection('processo')} className="text-left py-2 hover:text-accent text-slate-300">Processo</button>
                    <button onClick={() => scrollToSection('depoimentos')} className="text-left py-2 hover:text-accent text-slate-300">Depoimentos</button>
                    <button onClick={() => scrollToSection('contato')} className="text-left py-2 hover:text-accent text-slate-300">Contato</button>
                    <button onClick={() => scrollToSection('faq')} className="text-left py-2 hover:text-accent text-slate-300">FAQ</button>
                </div>
            )}
        </nav>
    );
};
