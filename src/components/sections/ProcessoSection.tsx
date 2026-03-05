import { Search, FileText, Code, Rocket, Activity, Briefcase, Users } from 'lucide-react';
import { useSectionInView } from '@/hooks/useSectionInView';
import { SectionWrapper } from '@/components/ui/SectionWrapper';
import { SectionLabel } from '@/components/ui/SectionLabel';
import { FeatureRow } from '@/components/ui/FeatureRow';

const STEPS = [
    {
        step: '01',
        title: 'Descoberta',
        subtitle: 'Primeiro contato',
        items: [
            'Entendimento: Alinhamos expectativas e objetivos do projeto.',
            'Canal do Projeto: Grupo de WhatsApp para informações e suporte.',
            'Definição estratégica: Planejamento inicial e visão geral.',
        ],
        icon: Search,
    },
    {
        step: '02',
        title: 'Planejamento',
        subtitle: 'Briefing e estruturação',
        items: [
            'Assinatura do contrato: Formalizamos tudo para segurança.',
            'Envio do Briefing: Coletamos informações essenciais.',
            'Direcionamento visual: Definição de referências e identidade.',
        ],
        icon: FileText,
    },
    {
        step: '03',
        title: 'Desenvolvimento',
        subtitle: 'Criação e ajustes',
        items: [
            'Execução do design: Desenvolvimento com base no briefing aprovado.',
            'Apresentação e revisões: Feedback para aprovação ou ajustes.',
            'Programação: Implementação no stack do ecossistema.',
        ],
        icon: Code,
    },
    {
        step: '04',
        title: 'Entrega',
        subtitle: 'Projeto finalizado',
        items: [
            'Entrega da aplicação: Publicada e testada.',
            'Documentação: Guias e suporte pós-entrega.',
            'Suporte: Acompanhamento conforme contrato.',
        ],
        icon: Rocket,
    },
];

export const ProcessoSection = () => {
    const ref = useSectionInView();

    return (
        <SectionWrapper id="processo" variant="gradient">
            <div ref={ref} className="container mx-auto px-6 py-24 md:py-32">
                <SectionLabel number="04" title="Processo" />
                <h2 className="text-3xl md:text-4xl font-bold text-white font-display mb-6 reveal-up">
                    Como funciona nosso workflow
                </h2>
                <p className="text-slate-400 max-w-2xl mb-16 reveal-up delay-100">
                    Criar algo único exige um processo estruturado, mas sem burocracia. Nosso objetivo é tornar tudo claro, colaborativo e eficiente.
                </p>

                <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-20">
                    {STEPS.map((s) => (
                        <div
                            key={s.step}
                            className="reveal-up p-6 bg-[#15151a] border border-white/10 rounded-2xl hover:border-accent/30 transition-all duration-300 hover:-translate-y-1 relative overflow-hidden group"
                        >
                            <div className="absolute top-0 left-0 w-1 h-0 bg-accent group-hover:h-full transition-all duration-500" />
                            <span className="text-xs font-mono text-accent mb-2 block">
                                {s.title} / {s.step}
                            </span>
                            <h3 className="text-lg font-bold text-white mb-4 flex items-center gap-2">
                                <s.icon size={18} className="text-accent" />
                                {s.subtitle}
                            </h3>
                            <ul className="space-y-2">
                                {s.items.map((item, j) => (
                                    <li key={j} className="text-sm text-slate-400 flex items-start gap-2">
                                        <span className="w-1.5 h-1.5 rounded-full bg-accent flex-shrink-0 mt-1.5" />
                                        {item}
                                    </li>
                                ))}
                            </ul>
                        </div>
                    ))}
                </div>

                {/* Ecossistema Multidisciplinar - from CollaborationSection */}
                <div className="bg-[#15151a] rounded-3xl p-8 md:p-12 border border-accent/20 relative overflow-hidden">
                    <div className="absolute inset-0 opacity-10" style={{ backgroundImage: 'radial-gradient(var(--accent) 1px, transparent 1px)', backgroundSize: '20px 20px' }} />
                    <div className="relative z-10 grid lg:grid-cols-2 gap-12 items-center">
                        <div>
                            <h3 className="text-2xl font-bold text-white mb-6 reveal-up">
                                Ecossistema Multidisciplinar: <br />
                                <span className="text-accent">O "Uber" de Especialistas</span>
                            </h3>
                            <p className="text-slate-300 text-lg mb-8 reveal-up delay-100">
                                O ecossistema Systentando não é apenas código. Estamos construindo uma rede onde diferentes apps conectam necessidades a especialistas.
                            </p>
                            <div className="space-y-6">
                                <div className="reveal-up delay-200">
                                    <FeatureRow icon={<Activity size={20} />} title="Saúde & Bem-estar" text="GymApp conecta alunos a Personais, Nutricionistas e Médicos do Esporte." />
                                </div>
                                <div className="reveal-up delay-300">
                                    <FeatureRow icon={<Briefcase size={20} />} title="Jurídico & Contábil" text="Novos módulos conectarão empresas a advogados e contadores sob demanda." />
                                </div>
                                <div className="reveal-up delay-400">
                                    <FeatureRow icon={<Users size={20} />} title="Colaboração Cruzada" text="Desenvolvedores mantêm a plataforma, especialistas entregam o serviço." />
                                </div>
                            </div>
                        </div>
                        <div className="bg-[#0a0a0c] p-8 rounded-2xl border border-white/10 reveal-up delay-300">
                            <h4 className="text-xl font-bold text-white mb-6 flex items-center gap-2">
                                <Code className="text-accent" size={20} />
                                Junte-se como Desenvolvedor
                            </h4>
                            <p className="text-slate-400 text-sm mb-6">
                                Nossa infraestrutura monorepo permite que você contribua em micro-serviços, frontend ou modelos de IA, impactando todos os apps do ecossistema simultaneamente.
                            </p>
                            <ul className="space-y-3 mb-8">
                                {['Acesso a arquitetura escalável real', 'Aprendizado em RAG e Agentes Autônomos', 'Visibilidade profissional e networking'].map((item, i) => (
                                    <li key={i} className="flex items-center gap-3 text-sm text-slate-300">
                                        <div className="w-1.5 h-1.5 rounded-full bg-accent" />
                                        {item}
                                    </li>
                                ))}
                            </ul>
                            <a
                                href="https://github.com/systentandobr"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="block w-full text-center bg-white text-black font-bold py-3 rounded-lg hover:bg-slate-200 transition-colors"
                            >
                                Acessar GitHub
                            </a>
                        </div>
                    </div>
                </div>
            </div>
        </SectionWrapper>
    );
};
