import { Database, Bot, Cpu, Activity, Repeat, ShoppingCart, Layers, Shield, Zap, Share2, Server, Package } from 'lucide-react';
import { AppNode } from '@/components/ui/AppNode';
import { WorkflowGraph } from '@/components/ui/WorkflowGraph';
import { SectionWrapper } from '@/components/ui/SectionWrapper';
import { SectionLabel } from '@/components/ui/SectionLabel';
import { ProgressBar } from '@/components/ui/ProgressBar';
import { useSectionInView } from '@/hooks/useSectionInView';
import { GraphNodeProps } from '@/types';
import backgroundImage from '@/assets/images/background.png';

const SKILLS = [
    { name: 'NestJS / Node.js', pct: 90 },
    { name: 'Python / FastAPI', pct: 85 },
    { name: 'React / Next.js', pct: 90 },
    { name: 'Kotlin (KMP)', pct: 75 },
    { name: 'RAG / LangChain', pct: 80 },
];

export const ArquiteturaStackSection = () => {
    const ref = useSectionInView();
    const graphNodes: GraphNodeProps[] = [
        { id: 'user', label: 'Usuário / App', icon: Activity, position: { x: 10, y: 50 }, status: 'active' },
        { id: 'gateway', label: 'API Gateway (NodeJS)', icon: Shield, subtext: 'Unified Auth / Security', position: { x: 35, y: 30 }, status: 'active' },
        { id: 'router', label: 'LLM Router (Python)', icon: Bot, subtext: 'Agno Framework / Agents', position: { x: 35, y: 70 }, status: 'active' },
        { id: 'rag', label: 'RAG & Memory', icon: Database, subtext: 'Vector DB / Postgres', position: { x: 65, y: 50 }, status: 'active' },
        { id: 'apps', label: 'Apps Ecossistema', icon: Share2, subtext: 'Multi-session delivery', position: { x: 90, y: 50 }, status: 'active' },
    ];
    const graphConnections = [
        { from: 'user', to: 'gateway', type: 'flowing' as const },
        { from: 'user', to: 'router', type: 'flowing' as const },
        { from: 'gateway', to: 'rag', type: 'static' as const },
        { from: 'router', to: 'rag', type: 'flowing' as const },
        { from: 'rag', to: 'apps', type: 'flowing' as const },
        { from: 'gateway', to: 'apps', type: 'static' as const },
    ];

    return (
        <SectionWrapper id="architecture" variant="dark">
            <div
                ref={ref}
                className="container mx-auto px-6 py-24 md:py-32 relative"
                style={{
                    backgroundImage: `url(${backgroundImage})`,
                    backgroundSize: 'cover',
                    backgroundPosition: 'center',
                }}
            >
                <div className="absolute inset-0 z-0 pointer-events-none opacity-[0.03] mix-blend-overlay" />
                <div className="relative z-10">
                    <SectionLabel number="03" title="Arquitetura e Stack" />
                    <h2 className="text-3xl md:text-4xl font-bold text-white font-display mb-4 reveal-up">
                        Minha caixa criativa
                    </h2>
                    <p className="text-slate-400 max-w-2xl mb-16 reveal-up delay-100">
                        Inspirado no padrão de roteamento unificado, nosso ecossistema utiliza um pipeline de segurança e IA que permite escalabilidade horizontal e multi-tenancy real.
                    </p>

                    {/* Skills with progress bars */}
                    <div className="grid md:grid-cols-2 gap-8 mb-24">
                        {SKILLS.map((skill) => (
                            <div key={skill.name} className="reveal-up">
                                <ProgressBar label={skill.name} value={skill.pct} />
                            </div>
                        ))}
                    </div>

                    {/* Workflow Graph */}
                    <div className="mb-24">
                        <div className="flex items-center gap-2 mb-6 text-accent font-mono text-sm uppercase tracking-widest reveal-up">
                            <Zap size={16} /> Technical Graph View
                        </div>
                        <div className="reveal-up">
                            <WorkflowGraph nodes={graphNodes} connections={graphConnections} />
                        </div>
                        <div className="grid md:grid-cols-3 gap-6 mt-12">
                            {[
                                { icon: Shield, title: 'Segurança Unificada', desc: 'Baseado em NestJS, o Gateway gerencia JWT, Rate Limiting e filtros de exceção globais.', color: 'text-blue-400' },
                                { icon: Bot, title: 'Orquestração de Agentes', desc: 'Utilizando Agno Framework em Python, gerenciamos conhecimento dinâmico (RAG) e memória persistente.', color: 'text-accent' },
                                { icon: Server, title: 'Multi-Sessão Escalável', desc: 'Nossa infraestrutura de banco (Postgres/Redis) permite instâncias replicadas.', color: 'text-purple-400' },
                            ].map((item) => (
                                <div
                                    key={item.title}
                                    className="p-6 bg-[#15151a]/50 backdrop-blur-md rounded-2xl border border-white/10 hover:border-accent/30 transition-all duration-300 reveal-up"
                                >
                                    <h4 className={`flex items-center gap-2 text-white font-bold mb-3 ${item.color}`}>
                                        <item.icon size={18} />
                                        {item.title}
                                    </h4>
                                    <p className="text-xs text-slate-400 leading-relaxed">{item.desc}</p>
                                </div>
                            ))}
                        </div>
                    </div>

                    {/* Pipeline Visualization */}
                    <div className="bg-gray-900/30 p-10 rounded-2xl backdrop-blur-sm border border-white/5">
                        <div className="text-center mb-16 border-t border-white/5 pt-16">
                            <h3 className="text-2xl font-bold text-white mb-4 italic text-slate-500">
                                Acelere seu fluxo de Negócios
                            </h3>
                        </div>
                        <div className="relative max-w-5xl mx-auto">
                            <div className="hidden lg:grid grid-cols-3 gap-8 items-center relative">
                                <svg className="absolute inset-0 w-full h-full pointer-events-none z-0 opacity-30" style={{ overflow: 'visible' }}>
                                    <defs>
                                        <linearGradient id="line-gradient" x1="0%" y1="0%" x2="100%" y2="0%">
                                            <stop offset="0%" stopColor="#d5ff40" stopOpacity="0.1" />
                                            <stop offset="50%" stopColor="#d5ff40" stopOpacity="0.8" />
                                            <stop offset="100%" stopColor="#3b82f6" stopOpacity="0.1" />
                                        </linearGradient>
                                    </defs>
                                    <path d="M 320 250 C 450 250, 450 100, 680 100" stroke="url(#line-gradient)" strokeWidth="2" fill="none" strokeDasharray="10 5" className="animate-dash" />
                                    <path d="M 320 250 C 450 250, 450 200, 680 200" stroke="url(#line-gradient)" strokeWidth="2" fill="none" />
                                    <path d="M 320 250 C 450 250, 450 300, 680 300" stroke="url(#line-gradient)" strokeWidth="2" fill="none" />
                                    <path d="M 320 250 C 450 250, 450 400, 680 400" stroke="url(#line-gradient)" strokeWidth="2" fill="none" strokeDasharray="10 5" className="animate-dash" />
                                </svg>
                                <div className="space-y-6 relative z-10">
                                    <div className="bg-[#15151a] border border-accent/30 p-6 rounded-xl shadow-xl shadow-accent/10">
                                        <div className="w-12 h-12 bg-accent/30 rounded-lg flex items-center justify-center mb-4 text-accent">
                                            <Database size={24} />
                                        </div>
                                        <h3 className="text-xl font-bold text-white mb-2">Backend Monorepo (Py)</h3>
                                        <p className="text-sm text-slate-400">Infraestrutura unificada, auth centralizado e microsserviços compartilhados.</p>
                                    </div>
                                    <div className="bg-[#15151a] border border-blue-500/30 p-6 rounded-xl shadow-xl shadow-blue-900/10">
                                        <div className="w-12 h-12 bg-blue-900/30 rounded-lg flex items-center justify-center mb-4 text-blue-400">
                                            <Bot size={24} />
                                        </div>
                                        <h3 className="text-xl font-bold text-white mb-2">Núcleo de IA & RAG</h3>
                                        <p className="text-sm text-slate-400">Agentes autônomos contextuais, treinados por segmento.</p>
                                    </div>
                                </div>
                                <div className="flex justify-center relative z-10">
                                    <div className="bg-[#0a0a0c] border border-slate-700 p-8 rounded-full w-48 h-48 flex flex-col items-center justify-center text-center shadow-2xl relative">
                                        <div className="absolute inset-0 border-2 border-dashed border-accent/20 rounded-full animate-spin-slow" />
                                        <Cpu size={32} className="text-accent mb-2" />
                                        <span className="font-bold text-white">API Gateway</span>
                                        <span className="text-xs text-slate-500 mt-1">Gestão de Dados &<br />Distribuição</span>
                                    </div>
                                </div>
                                <div className="space-y-4 relative z-10 pl-10">
                                    <AppNode icon={Activity} title="LevantaDAI / GymApp" color="emerald" desc="Gestão Fitness & Saúde" />
                                    <AppNode icon={Repeat} title="TaDeVolta" color="blue" desc="Fidelização & CRM" />
                                    <AppNode icon={ShoppingCart} title="ViralKids" color="purple" desc="E-commerce + IA" />
                                    <AppNode icon={Layers} title="Meu Gestor SaaS" color="orange" desc="Multi-tenant ERP" />
                                    <AppNode icon={Package} title="Boy Entregador" color="emerald" desc="Marketplace & comunidade de empreendedores locais" />
                                    <div className="mt-4 p-4 rounded-lg bg-white/5 border border-white/10 backdrop-blur-sm animate-pulse">
                                        <div className="flex items-center gap-2 text-xs font-bold text-accent">
                                            <Bot size={14} />
                                            Sua Próxima Solução...
                                        </div>
                                        <p className="text-[10px] text-slate-500 mt-1">N aplicações prontas para serem escaladas.</p>
                                    </div>
                                </div>
                            </div>
                            <div className="lg:hidden flex flex-col gap-6 relative">
                                <div className="border-l-2 border-dashed border-accent/30 ml-6 pl-8 space-y-8 pb-4">
                                    {[
                                        { title: 'Infraestrutura Core', desc: 'Backend Python, RAG e IA', dot: 'bg-accent' },
                                        { title: 'Processamento', desc: 'APIs, Autenticação e Regras de Negócio', dot: 'bg-blue-500' },
                                        { title: 'Aplicações Finais', desc: 'GymApp, TaDeVolta, ViralKids, Boy Entregador', dot: 'bg-purple-500' },
                                    ].map((item) => (
                                        <div key={item.title} className="relative">
                                            <div className={`absolute -left-[41px] top-0 w-6 h-6 ${item.dot} rounded-full border-4 border-[#0d0d10]`} />
                                            <h3 className="text-white font-bold">{item.title}</h3>
                                            <p className="text-sm text-slate-400 mt-1">{item.desc}</p>
                                        </div>
                                    ))}
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </SectionWrapper>
    );
};
