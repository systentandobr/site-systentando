import { useEffect, useRef } from 'react';
import { ArrowRight } from 'lucide-react';

interface HeroSectionProps {
    scrollToSection: (id: string) => void;
    onOpenLeadModal: () => void;
}

export const HeroSection = ({ scrollToSection, onOpenLeadModal }: HeroSectionProps) => {
    const containerRef = useRef<HTMLDivElement>(null);

    useEffect(() => {
        const elements = containerRef.current?.querySelectorAll('.reveal-up');
        elements?.forEach((el, i) => {
            setTimeout(() => el.classList.add('active'), 100 * i);
        });
    }, []);

    return (
        <header className="relative pt-32 pb-20 lg:pt-48 lg:pb-32 px-6 overflow-hidden">
            {/* Background Gradients */}
            <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full h-full max-w-7xl pointer-events-none">
                <div className="absolute top-[20%] left-[20%] w-96 h-96 bg-accent/15 rounded-full blur-3xl animate-float"></div>
                <div className="absolute top-[30%] right-[20%] w-[30rem] h-[30rem] bg-blue-600/15 rounded-full blur-3xl animate-float" style={{ animationDelay: '-3s' }}></div>
                <div className="absolute bottom-[20%] left-[10%] w-[25rem] h-[25rem] bg-purple-600/10 rounded-full blur-3xl animate-float" style={{ animationDelay: '-5s' }}></div>
            </div>

            <div ref={containerRef} className="container mx-auto text-center relative z-10">
                {/* Badge - Design System */}
                <div className="inline-flex items-center gap-3 mb-6 reveal-up">
                    <span className="w-2 h-2 bg-accent rounded-full animate-pulse"></span>
                    <span className="text-xs font-mono uppercase tracking-[0.2em] text-slate-400">Ecossistema SystentandoBR</span>
                    <span className="w-12 h-px bg-accent/50"></span>
                    <span className="w-2 h-2 bg-accent rounded-full animate-pulse" style={{ animationDelay: '0.5s' }}></span>
                </div>

                <h1 className="text-5xl md:text-7xl font-bold text-white mb-6 leading-tight font-display">
                    <span className="reveal-up delay-100 block">Uma Infraestrutura,</span>
                    <span className="reveal-up delay-200 block text-outline-glow text-transparent">Infinitas Possibilidades.</span>
                </h1>

                <p className="text-lg md:text-xl text-slate-400 max-w-3xl mx-auto mb-10 leading-relaxed reveal-up delay-500">
                    De um monorepo compartilhado a apps especializados. Construímos MVPs que aceleram o modelo SaaS, conectando IA, profissionais especialistas e gestão inteligente em um único pipeline de inovação.
                </p>

                <div className="flex flex-col sm:flex-row justify-center gap-4 reveal-up delay-700">
                    <button onClick={onOpenLeadModal} className="btn-glow px-8 py-4 rounded-full font-bold flex items-center justify-center gap-2 group shadow-lg shadow-accent/20 hover:shadow-xl transition-all hover:-translate-y-1">
                        <span className="relative z-10 flex items-center gap-2 text-sm font-medium tracking-wide">
                            Criar Seu Ecossistema <ArrowRight size={20} className="group-hover:translate-x-1 transition-transform" />
                        </span>
                    </button>
                    <button onClick={() => scrollToSection('architecture')} className="btn-shimmer px-8 py-4 rounded-full font-bold flex items-center justify-center gap-2 transition-all hover:-translate-y-1">
                        <span className="relative z-10 text-sm font-medium tracking-wide">Ver Estrutura Technical</span>
                    </button>
                </div>
            </div>

            {/* Scroll indicator */}
            <div className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 z-20 opacity-60">
                <span className="text-[10px] font-mono uppercase tracking-widest text-accent/80">Scroll</span>
                <div className="w-px h-8 bg-slate-600 overflow-hidden relative">
                    <div className="absolute top-0 left-0 w-full h-full bg-accent animate-scroll-line"></div>
                </div>
            </div>
        </header>
    );
};
