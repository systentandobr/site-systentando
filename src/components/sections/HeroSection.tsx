import { ArrowRight } from 'lucide-react';

interface HeroSectionProps {
    scrollToSection: (id: string) => void;
    onOpenLeadModal: () => void;
}

export const HeroSection = ({ scrollToSection, onOpenLeadModal }: HeroSectionProps) => {
    return (
        <header className="relative pt-32 pb-20 lg:pt-48 lg:pb-32 px-6 overflow-hidden">
            {/* Background Gradients */}
            <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full h-full max-w-7xl pointer-events-none">
                <div className="absolute top-[20%] left-[20%] w-96 h-96 bg-emerald-500/10 rounded-full blur-3xl animate-pulse-slow"></div>
                <div className="absolute top-[30%] right-[20%] w-[30rem] h-[30rem] bg-blue-600/10 rounded-full blur-3xl animate-pulse-slow" style={{ animationDelay: '2s' }}></div>
            </div>

            <div className="container mx-auto text-center relative z-10">
                <h1 className="text-5xl md:text-7xl font-bold text-white mb-6 leading-tight">
                    Uma Infraestrutura,<br />
                    <span className="text-transparent bg-clip-text bg-gradient-to-r from-emerald-400 to-blue-500">Infinitas Possibilidades.</span>
                </h1>

                <p className="text-lg md:text-xl text-slate-400 max-w-3xl mx-auto mb-10 leading-relaxed">
                    De um monorepo compartilhado a apps especializados. Construímos MVPs que aceleram o modelo SaaS, conectando IA, profissionais especialistas e gestão inteligente em um único pipeline de inovação.
                </p>

                <div className="flex flex-col sm:flex-row justify-center gap-4">
                    <button onClick={onOpenLeadModal} className="px-8 py-4 bg-emerald-600 hover:bg-emerald-500 text-white rounded-lg font-bold transition-all shadow-lg shadow-emerald-900/20 flex items-center justify-center gap-2 group hover:scale-105">
                        Criar Seu Ecossistema <ArrowRight size={20} className="group-hover:translate-x-1 transition-transform" />
                    </button>
                    <button onClick={() => scrollToSection('architecture')} className="px-8 py-4 bg-[#1a1a20] hover:bg-[#25252e] text-white border border-slate-700 rounded-lg font-bold transition-all flex items-center justify-center gap-2">
                        Ver Estrutura Technical
                    </button>
                </div>
            </div>
        </header>
    );
};
