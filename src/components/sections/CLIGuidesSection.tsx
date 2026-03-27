import { useState } from 'react';
import {
    BookOpen,
    ChevronRight,
    Download,
    Key,
    Shield,
    Zap,
    TrendingUp,
    Users,
    AlertCircle,
    CheckCircle,
    ShoppingCart,
    MessageSquare,
    ArrowRight,
    Terminal,
    Bot,
    FileCode,
    Target,
    Globe,
    Cpu,
} from 'lucide-react';
import { useSectionInView } from '@/hooks/useSectionInView';
import { SectionWrapper } from '@/components/ui/SectionWrapper';
import { SectionLabel } from '@/components/ui/SectionLabel';
import { TerminalSimulator } from '@/components/ui/TerminalSimulator';
import {
    CLI_GUIDES,
    PLAYBOOK_SECTIONS,
    FAQ_ITEMS,
    getPricingInfo,
    type CLIGuide,
    type PlaybookSection,
    type FAQItem,
} from '@/data/freds/cli-guides-data';

// Icon registry for data-driven icon rendering
const ICON_REGISTRY: Record<string, React.ComponentType<{ className?: string }>> = {
    Terminal,
    Bot,
    FileCode,
    Target,
    Shield,
    TrendingUp,
    CheckCircle,
    Users,
    AlertCircle,
    ShoppingCart,
    MessageSquare,
    BookOpen,
    Download,
    ArrowRight,
    Key,
    Zap,
    Globe,
    Cpu,
};

const getIcon = (iconName: string, className = 'w-5 h-5') => {
    const Icon = ICON_REGISTRY[iconName] || Terminal;
    return <Icon className={className} />;
};

// ============================================================================
// CLI CARD COMPONENT
// ============================================================================

interface CLICardProps {
    guide: CLIGuide;
    isActive: boolean;
    onToggle: () => void;
}

const CLICard = ({ guide, isActive, onToggle }: CLICardProps) => {
    const pricingInfo = getPricingInfo(guide.pricing || 'freemium');

    return (
        <div
            className={`bg-[#15151a] rounded-2xl border transition-all ${
                isActive
                    ? 'border-accent/50 shadow-lg shadow-accent/10'
                    : 'border-white/5 hover:border-accent/30'
            }`}
        >
            {/* Card Header */}
            <div className="p-6">
                <div className="flex items-start justify-between mb-4">
                    <div className="w-12 h-12 rounded-xl bg-accent/10 flex items-center justify-center text-accent">
                        {getIcon(guide.icon, 'w-6 h-6')}
                    </div>
                    <div className="flex flex-col items-end gap-2">
                        <span className="px-2 py-1 bg-accent/10 rounded text-xs text-accent font-mono">
                            {guide.model}
                        </span>
                        <span className={`px-2 py-1 rounded text-xs ${pricingInfo.color}`}>
                            {pricingInfo.label}
                        </span>
                    </div>
                </div>
                <h3 className="text-xl font-bold text-white mb-2">{guide.name}</h3>
                <p className="text-slate-400 text-sm leading-relaxed">{guide.description}</p>

                {/* Tags */}
                {guide.tags && guide.tags.length > 0 && (
                    <div className="flex flex-wrap gap-2 mt-4">
                        {guide.tags.map((tag) => (
                            <span
                                key={tag}
                                className="px-2 py-0.5 bg-white/5 rounded text-[10px] text-slate-500"
                            >
                                {tag}
                            </span>
                        ))}
                    </div>
                )}
            </div>

            {/* Expandable Terminal */}
            <div className="px-6 pb-6">
                <button
                    onClick={onToggle}
                    className="w-full py-3 bg-[#0a0a0c] hover:bg-[#1a1a1f] rounded-lg border border-white/5 transition-all flex items-center justify-between group"
                >
                    <span className="text-sm text-slate-400 group-hover:text-white transition-colors">
                        {isActive ? 'Ocultar instalação' : 'Ver instalação'}
                    </span>
                    <Download
                        className={`w-4 h-4 text-slate-500 transition-transform ${isActive ? 'rotate-180' : ''}`}
                    />
                </button>

                {isActive && (
                    <div className="mt-4 space-y-4">
                        <TerminalSimulator
                            lines={guide.terminal.lines}
                            title={guide.terminal.title}
                            autoStart={true}
                        />

                        {/* Detalhes adicionais */}
                        <div className="p-4 bg-[#0a0a0c] rounded-lg border border-white/5">
                            <p className="text-xs text-slate-500 leading-relaxed">{guide.longDescription}</p>
                        </div>

                        {/* Use Cases */}
                        {guide.useCases && guide.useCases.length > 0 && (
                            <div className="flex flex-wrap gap-2">
                                {guide.useCases.map((useCase) => (
                                    <span
                                        key={useCase}
                                        className="px-2 py-1 bg-accent/10 rounded text-xs text-accent"
                                    >
                                        {useCase}
                                    </span>
                                ))}
                            </div>
                        )}

                        <a
                            href={guide.docsUrl}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="flex items-center justify-center gap-2 py-2 bg-accent/10 hover:bg-accent/20 rounded-lg text-sm text-accent transition-all"
                        >
                            {getIcon('BookOpen', 'w-4 h-4')}
                            Ver documentação oficial
                            {getIcon('ArrowRight', 'w-4 h-4')}
                        </a>
                    </div>
                )}
            </div>
        </div>
    );
};

// ============================================================================
// PLAYBOOK COMPONENT
// ============================================================================

interface PlaybookViewProps {
    sections: PlaybookSection[];
}

const PlaybookView = ({ sections }: PlaybookViewProps) => (
    <div className="mb-16 bg-gradient-to-br from-[#15151a] to-[#1a1a20] rounded-2xl border border-accent/20 p-8">
        <div className="flex items-center gap-3 mb-8">
            <div className="w-12 h-12 rounded-xl bg-accent/20 flex items-center justify-center">
                <TrendingUp className="w-6 h-6 text-accent" />
            </div>
            <div>
                <h3 className="text-2xl font-bold text-white">Playbook de Vendas</h3>
                <p className="text-slate-400 text-sm">Guia estratégico para apresentar o Freds</p>
            </div>
        </div>

        <div className="grid md:grid-cols-2 gap-6">
            {sections.map((section, i) => (
                <div
                    key={i}
                    className="bg-[#0a0a0c]/50 rounded-xl p-6 border border-white/5"
                >
                    <div className={`flex items-center gap-2 mb-4 ${section.color}`}>
                        {getIcon(section.icon, 'w-5 h-5')}
                        <h4 className="font-bold">{section.title}</h4>
                    </div>
                    <div className="space-y-4">
                        {section.items.map((item, j) => (
                            <div key={j}>
                                <p className="text-sm font-medium text-slate-300 mb-1">
                                    {item.subtitle}
                                </p>
                                <p className="text-sm text-slate-500 leading-relaxed">{item.content}</p>
                            </div>
                        ))}
                    </div>
                </div>
            ))}
        </div>

        {/* CTA no playbook */}
        <div className="mt-8 p-6 bg-accent/10 rounded-xl border border-accent/20">
            <p className="text-white font-medium mb-4">
                "Não vendemos software — vendemos{' '}
                <span className="text-accent">tempo de volta e produtividade asegurada</span>{' '}
                para desenvolvedores."
            </p>
            <div className="flex flex-wrap gap-3">
                {['Geração de Código', 'Validação Automática', 'Zero Exposição de API'].map((tag) => (
                    <span key={tag} className="px-3 py-1 bg-accent/20 rounded-full text-xs text-accent">
                        {tag}
                    </span>
                ))}
            </div>
        </div>
    </div>
);

// ============================================================================
// FAQ COMPONENT
// ============================================================================

interface FAQViewProps {
    items: FAQItem[];
}

const FAQView = ({ items }: FAQViewProps) => (
    <div className="space-y-4">
        {items.map((faq, i) => (
            <div
                key={i}
                className="bg-[#15151a]/50 backdrop-blur-sm rounded-xl p-6 border border-white/5 hover:border-accent/30 transition-all"
            >
                <div className="flex items-start gap-4">
                    <div className="flex-shrink-0 mt-1">{getIcon(faq.icon, `${faq.iconColor} w-5 h-5`)}</div>
                    <div>
                        <h3 className="text-lg font-bold text-white mb-2">{faq.question}</h3>
                        <p className="text-slate-400 text-sm leading-relaxed">{faq.answer}</p>
                    </div>
                </div>
            </div>
        ))}
    </div>
);

// ============================================================================
// MAIN SECTION COMPONENT
// ============================================================================

export const CLIGuidesSection = () => {
    const guidesRef = useSectionInView();
    const [activeGuide, setActiveGuide] = useState<string | null>(null);
    const [showPlaybook, setShowPlaybook] = useState(false);
    const [showFAQ, setShowFAQ] = useState(false);

    return (
        <>
            {/* CLI Guides Section */}
            <SectionWrapper id="cli-guias" variant="dark">
                <div ref={guidesRef} className="container mx-auto px-6 py-24 md:py-32">
                    <div className="max-w-6xl mx-auto">
                        <SectionLabel number="06" title="Guias de Instalação" />
                        <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-6 mb-16">
                            <div>
                                <h2 className="text-3xl md:text-4xl font-bold text-white font-display mb-4 reveal-up">
                                    Instale e configure seu CLI
                                </h2>
                                <p className="text-slate-400 max-w-2xl reveal-up delay-100">
                                    Escolha um ou mais CLIs de IA para usar com o Freds. Cada CLI
                                    traz um modelo diferente — todos funcionam localmente.
                                </p>
                            </div>
                            <div className="flex flex-wrap gap-3 reveal-up delay-200">
                                <button
                                    onClick={() => setShowPlaybook(!showPlaybook)}
                                    className="px-6 py-3 bg-accent/10 hover:bg-accent/20 border border-accent/30 rounded-full text-accent font-medium transition-all flex items-center gap-2"
                                >
                                    <BookOpen className="w-4 h-4" />
                                    {showPlaybook ? 'Ocultar' : 'Playbook'} de Vendas
                                    <ChevronRight
                                        className={`w-4 h-4 transition-transform ${showPlaybook ? 'rotate-90' : ''}`}
                                    />
                                </button>
                                <button
                                    onClick={() => setShowFAQ(!showFAQ)}
                                    className="px-6 py-3 bg-white/5 hover:bg-white/10 border border-white/10 rounded-full text-slate-300 font-medium transition-all flex items-center gap-2"
                                >
                                    <Shield className="w-4 h-4" />
                                    {showFAQ ? 'Ocultar' : 'Ver'} FAQ
                                </button>
                            </div>
                        </div>

                        {/* Playbook de Vendas (collapsible) */}
                        {showPlaybook && <PlaybookView sections={PLAYBOOK_SECTIONS} />}

                        {/* FAQ (collapsible) */}
                        {showFAQ && (
                            <div className="mb-16">
                                <h3 className="text-2xl font-bold text-white mb-6">Perguntas Frequentes</h3>
                                <FAQView items={FAQ_ITEMS} />
                            </div>
                        )}

                        {/* CLI Cards Grid */}
                        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                            {CLI_GUIDES.map((guide, i) => (
                                <div
                                    key={guide.id}
                                    className="reveal-up"
                                    style={{ animationDelay: `${i * 100}ms` }}
                                >
                                    <CLICard
                                        guide={guide}
                                        isActive={activeGuide === guide.id}
                                        onToggle={() =>
                                            setActiveGuide(activeGuide === guide.id ? null : guide.id)
                                        }
                                    />
                                </div>
                            ))}
                        </div>

                        {/* Bottom CTA */}
                        <div className="mt-16 text-center reveal-up">
                            <p className="text-slate-400 mb-6">
                                Ainda não tem um CLI instalado? Comece pelo OpenCode — é gratuito e
                                suporta MiniMax-M2.7.
                            </p>
                            <div className="flex flex-wrap justify-center gap-4">
                                <a
                                    href="#como-comecar"
                                    className="px-8 py-4 bg-accent hover:bg-accent/90 text-white rounded-full font-semibold transition-all flex items-center gap-2"
                                >
                                    <Zap className="w-5 h-5" />
                                    Ver Tutorial Completo
                                </a>
                                <a
                                    href="https://platform.minimax.io/docs/token-plan/opencode"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="px-8 py-4 bg-white/5 hover:bg-white/10 border border-white/10 rounded-full font-semibold transition-all flex items-center gap-2"
                                >
                                    <Key className="w-5 h-5" />
                                    Criar API Key MiniMax
                                </a>
                            </div>
                        </div>
                    </div>
                </div>
            </SectionWrapper>
        </>
    );
};
