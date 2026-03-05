import { ArrowRight } from 'lucide-react';
import { useSectionInView } from '@/hooks/useSectionInView';
import { SectionWrapper } from '@/components/ui/SectionWrapper';
import { SectionLabel } from '@/components/ui/SectionLabel';
import { DeviceShowcase } from '@/components/ui/DeviceShowcase';

interface ContatoSectionProps {
    onOpenLeadModal?: () => void;
}

export const ContatoSection = ({ onOpenLeadModal }: ContatoSectionProps) => {
    const ref = useSectionInView();

    return (
        <SectionWrapper id="contato">
            <div ref={ref} className="container mx-auto px-6 py-24 md:py-32">
                <SectionLabel number="06" title="Contato" />
                <div className="flex flex-col lg:flex-row items-center gap-12 lg:gap-24 mb-24">
                    <div className="flex-1 text-left">
                        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-blue-500/10 border border-blue-500/20 text-blue-400 text-xs font-medium mb-6 reveal-up">
                            <span className="relative flex h-2 w-2">
                                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-blue-400 opacity-75" />
                                <span className="relative inline-flex rounded-full h-2 w-2 bg-blue-500" />
                            </span>
                            Alcance Global
                        </div>
                        <h2 className="text-4xl md:text-5xl font-bold text-white mb-6 leading-tight reveal-up delay-100">
                            Conectado
                            <br />
                            <span className="text-blue-500">Em todo lugar.</span>
                        </h2>
                        <p className="text-slate-400 text-lg max-w-xl mb-12 leading-relaxed reveal-up delay-200">
                            Nossa arquitetura alimenta interações sociais e profissionais via smartphone, integrando o ecossistema à rotina das pessoas.
                        </p>
                        <div className="flex gap-8 mb-12">
                            <div className="reveal-up delay-300">
                                <div className="text-3xl font-bold text-white mb-1">100+</div>
                                <div className="text-xs font-bold text-slate-500 uppercase tracking-wider">Usuários Ativos Diários</div>
                            </div>
                            <div className="reveal-up delay-300">
                                <div className="text-3xl font-bold text-accent mb-1">99.9%</div>
                                <div className="text-xs font-bold text-slate-500 uppercase tracking-wider">Uptime SLA</div>
                            </div>
                        </div>
                        {onOpenLeadModal && (
                            <button
                                onClick={onOpenLeadModal}
                                className="btn-glow px-8 py-4 rounded-full font-bold flex items-center gap-2 group shadow-lg shadow-accent/20 hover:shadow-xl transition-all hover:-translate-y-1 reveal-up delay-400"
                            >
                                <span className="relative z-10 flex items-center gap-2 text-sm font-medium tracking-wide">
                                    Entre em contato
                                    <ArrowRight size={20} className="group-hover:translate-x-1 transition-transform" />
                                </span>
                            </button>
                        )}
                    </div>
                    <div className="flex-1 w-full lg:w-auto reveal-up delay-200">
                        <DeviceShowcase />
                    </div>
                </div>

                
            </div>
        </SectionWrapper>
    );
};
