import { Code, Shield, Zap, GitBranch, FileSearch, CheckCircle, MousePointer, Sparkles, Bot, Lock, Terminal, Rocket } from 'lucide-react';
import { useSectionInView } from '@/hooks/useSectionInView';
import { SectionWrapper } from '@/components/ui/SectionWrapper';
import { SectionLabel } from '@/components/ui/SectionLabel';

export const FredsCodeAssistantPage = () => {
    const heroRef = useSectionInView();
    const featuresRef = useSectionInView();
    const integrationsRef = useSectionInView();
    const gettingStartedRef = useSectionInView();

    return (
        <div className="min-h-screen dark:bg-[#0a0a0c] bg-[#0a0a0c] dark:text-slate-300 text-slate-300 font-sans">
            {/* Hero Section */}
            <SectionWrapper id="freds-hero" variant="gradient">
                <div ref={heroRef} className="container mx-auto px-6 py-32 md:py-40">
                    <div className="max-w-4xl mx-auto text-center">
                        <div className="inline-flex items-center gap-2 px-4 py-2 bg-accent/10 border border-accent/30 rounded-full text-accent text-sm font-mono mb-8 reveal-up">
                            <Bot className="w-4 h-4" />
                            <span>Assistente de IA para Desenvolvimento</span>
                        </div>
                        <h1 className="text-5xl md:text-7xl font-bold text-white font-display mb-6 reveal-up delay-100">
                            Freds Code Assistant
                        </h1>
                        <p className="text-2xl md:text-3xl text-slate-400 mb-4 reveal-up delay-200">
                            Aqui você <span className="text-accent font-semibold">não precisa expor suas credentials</span>
                        </p>
                        <p className="text-lg text-slate-500 max-w-2xl mx-auto mb-12 reveal-up delay-300">
                            Assistente de IA integrado ao Telegram que roda localmente usando os principais CLIs de mercado. 
                            Segurança embarcada, sem APIs expostas em VPS. Se você já utiliza algum desses CLIs no dia-a-dia, 
                            você já está pronto para começar.
                        </p>
                        <div className="flex flex-col sm:flex-row gap-4 justify-center reveal-up delay-400">
                            <a
                                href="https://github.com/systentandobr/code-assistant-friendly"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="px-8 py-4 bg-accent hover:bg-accent/90 text-white rounded-full font-semibold transition-all flex items-center justify-center gap-2"
                            >
                                <Code className="w-5 h-5" />
                                Ver no GitHub
                            </a>
                            <a
                                href="#como-comecar"
                                className="px-8 py-4 bg-white/5 hover:bg-white/10 border border-white/10 text-white rounded-full font-semibold transition-all flex items-center justify-center gap-2"
                            >
                                <Rocket className="w-5 h-5" />
                                Começar Agora
                            </a>
                        </div>
                    </div>
                </div>
            </SectionWrapper>

            {/* Features Section */}
            <SectionWrapper id="freds-features" variant="dark">
                <div ref={featuresRef} className="container mx-auto px-6 py-24 md:py-32">
                    <div className="max-w-6xl mx-auto">
                        <SectionLabel number="01" title="Por que escolher o Freds?" />
                        <h2 className="text-3xl md:text-4xl font-bold text-white font-display mb-6 reveal-up">
                            Segurança e produtividade em um só lugar
                        </h2>
                        <p className="text-slate-400 max-w-2xl mb-16 reveal-up delay-100">
                            Use os principais CLIs de mercado localmente. Suas credentials nunca saem da sua máquina.
                        </p>

                        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                            {[
                                {
                                    icon: <Shield className="w-8 h-8 text-accent" />,
                                    title: 'Segurança Embutida',
                                    description: 'Use Codex CLI, Claude Code CLI, Gemini CLI, Cursor CLI, Kiro CLI, OpenCode localmente. Suas credentials nunca saem da sua máquina.',
                                },
                                {
                                    icon: <Zap className="w-8 h-8 text-accent" />,
                                    title: 'Pronto para Usar',
                                    description: 'Se você já usa algum desses CLIs no dia-a-dia, você já está pronto para começar. Zero configuração adicional.',
                                },
                                {
                                    icon: <Code className="w-8 h-8 text-accent" />,
                                    title: 'Geração de Código',
                                    description: 'Gere código, crie planos, navegue repositórios e execute comandos Git via interface conversacional no Telegram.',
                                },
                                {
                                    icon: <GitBranch className="w-8 h-8 text-accent" />,
                                    title: 'Operações Git',
                                    description: 'Status, branch, checkout, commit, push - tudo via comandos simples no Telegram com confirmação human-in-the-loop.',
                                },
                                {
                                    icon: <FileSearch className="w-8 h-8 text-accent" />,
                                    title: 'Navegação de Repositórios',
                                    description: 'ls, cd, cat, tree, pwd dentro do workspace. Busque arquivos e navegue como se estivesse no terminal.',
                                },
                                {
                                    icon: <CheckCircle className="w-8 h-8 text-accent" />,
                                    title: 'Validação Automática',
                                    description: 'Após gerar código, executa build automaticamente e usa IA para corrigir erros encontrados.',
                                },
                            ].map((feature, i) => (
                                <div
                                    key={i}
                                    className="bg-[#15151a] rounded-2xl p-6 border border-white/5 hover:border-accent/30 transition-all reveal-up"
                                    style={{ animationDelay: `${i * 100}ms` }}
                                >
                                    <div className="mb-4">{feature.icon}</div>
                                    <h3 className="text-xl font-bold text-white mb-3">{feature.title}</h3>
                                    <p className="text-slate-400 text-sm leading-relaxed">{feature.description}</p>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            </SectionWrapper>

            {/* Integrations Section */}
            <SectionWrapper id="freds-integrations" variant="gradient">
                <div ref={integrationsRef} className="container mx-auto px-6 py-24 md:py-32">
                    <div className="max-w-6xl mx-auto">
                        <SectionLabel number="02" title="Integrações Suportadas" />
                        <h2 className="text-3xl md:text-4xl font-bold text-white font-display mb-6 reveal-up">
                            Use os principais CLIs de mercado
                        </h2>
                        <p className="text-slate-400 max-w-2xl mb-16 reveal-up delay-100">
                            Sem expor suas credentials. Tudo roda localmente na sua máquina.
                        </p>

                        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                            {[
                                { name: 'Cursor CLI', description: 'Geração de código e planejamento via Cursor', icon: <MousePointer className="w-6 h-6" /> },
                                { name: 'Claude Code CLI', description: 'Assistente Claude para desenvolvimento', icon: <Sparkles className="w-6 h-6" /> },
                                { name: 'Gemini CLI', description: 'Google Gemini para geração de código', icon: <Bot className="w-6 h-6" /> },
                                { name: 'Codex CLI', description: 'Codex para assistência em código', icon: <Code className="w-6 h-6" /> },
                                { name: 'OpenCode CLI', description: 'OpenCode para desenvolvimento', icon: <Terminal className="w-6 h-6" /> },
                                { name: 'Kiro CLI', description: 'Kiro para assistência em código', icon: <Zap className="w-6 h-6" /> },
                            ].map((integration, i) => (
                                <div
                                    key={i}
                                    className="bg-[#15151a]/50 backdrop-blur-sm rounded-xl p-6 border border-white/5 hover:border-accent/30 transition-all flex items-start gap-4 reveal-up"
                                    style={{ animationDelay: `${i * 100}ms` }}
                                >
                                    <div className="text-accent flex-shrink-0 mt-1">{integration.icon}</div>
                                    <div>
                                        <h3 className="text-lg font-bold text-white mb-2">{integration.name}</h3>
                                        <p className="text-slate-400 text-sm">{integration.description}</p>
                                    </div>
                                </div>
                            ))}
                        </div>

                        <div className="mt-16 bg-accent/10 border border-accent/30 rounded-2xl p-8 text-center reveal-up delay-500">
                            <Lock className="w-12 h-12 text-accent mx-auto mb-4" />
                            <h3 className="text-2xl font-bold text-white mb-3">Segurança Primeiro</h3>
                            <p className="text-slate-400 max-w-2xl mx-auto">
                                Todas as operações rodam localmente. Suas API keys nunca saem da sua máquina. 
                                Comandos sensíveis sempre pedem confirmação antes de executar.
                            </p>
                        </div>
                    </div>
                </div>
            </SectionWrapper>

            {/* Getting Started Section */}
            <SectionWrapper id="como-comecar" variant="dark">
                <div ref={gettingStartedRef} className="container mx-auto px-6 py-24 md:py-32">
                    <div className="max-w-4xl mx-auto">
                        <SectionLabel number="03" title="Como Começar" />
                        <h2 className="text-3xl md:text-4xl font-bold text-white font-display mb-6 reveal-up">
                            Em 3 passos você está rodando
                        </h2>
                        <p className="text-slate-400 max-w-2xl mb-16 reveal-up delay-100">
                            Se você já usa algum CLI no dia-a-dia, você já está pronto para começar.
                        </p>

                        <div className="space-y-8">
                            {[
                                {
                                    number: '01',
                                    title: 'Instale um CLI',
                                    description: 'Escolha um dos CLIs suportados: Cursor CLI, Claude Code CLI, Gemini CLI, Codex CLI, OpenCode ou Kiro CLI. Se você já usa algum, pule esta etapa!',
                                    code: 'curl https://cursor.com/install -fsSL | bash',
                                },
                                {
                                    number: '02',
                                    title: 'Configure o Bot',
                                    description: 'Crie um bot no Telegram via @BotFather, configure o token no config.yaml e execute make onboard.',
                                    code: 'make onboard',
                                },
                                {
                                    number: '03',
                                    title: 'Comece a Usar',
                                    description: 'Execute make run-with-ssh e comece a conversar com o Freds no Telegram. Use /generate para gerar código, /plan para planejar refatorações.',
                                    code: 'make run-with-ssh',
                                },
                            ].map((step, i) => (
                                <div
                                    key={i}
                                    className="bg-[#15151a] rounded-2xl p-8 border border-white/5 hover:border-accent/30 transition-all reveal-up"
                                    style={{ animationDelay: `${i * 150}ms` }}
                                >
                                    <div className="flex items-start gap-6">
                                        <div className="flex-shrink-0">
                                            <div className="w-16 h-16 rounded-full bg-accent/10 border border-accent/30 flex items-center justify-center">
                                                <span className="text-2xl font-bold text-accent">{step.number}</span>
                                            </div>
                                        </div>
                                        <div className="flex-1">
                                            <h3 className="text-2xl font-bold text-white mb-3">{step.title}</h3>
                                            <p className="text-slate-400 mb-4">{step.description}</p>
                                            {step.code && (
                                                <div className="bg-[#0a0a0c] rounded-lg p-4 border border-white/5">
                                                    <code className="text-sm text-slate-300 font-mono">{step.code}</code>
                                                </div>
                                            )}
                                        </div>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            </SectionWrapper>

            {/* Target Audience Section */}
            <SectionWrapper id="freds-audience" variant="gradient">
                <div className="container mx-auto px-6 py-24 md:py-32">
                    <div className="max-w-6xl mx-auto">
                        <SectionLabel number="04" title="Para Quem é Destinado" />
                        <h2 className="text-3xl md:text-4xl font-bold text-white font-display mb-6 reveal-up">
                            Desenvolvedores que querem produtividade sem comprometer segurança
                        </h2>

                        <div className="grid md:grid-cols-3 gap-8 mt-16">
                            {[
                                {
                                    title: 'Desenvolvedores Individuais',
                                    description: 'Que já usam CLIs de IA no dia-a-dia e querem uma interface conversacional',
                                    icon: <Code className="w-8 h-8 text-accent" />,
                                },
                                {
                                    title: 'Equipes de Desenvolvimento',
                                    description: 'Que precisam de um assistente compartilhado via Telegram com workspace isolado',
                                    icon: <Bot className="w-8 h-8 text-accent" />,
                                },
                                {
                                    title: 'DevOps e Engenheiros',
                                    description: 'Que querem automatizar operações Git e validação de builds sem expor APIs',
                                    icon: <Terminal className="w-8 h-8 text-accent" />,
                                },
                            ].map((audience, i) => (
                                <div
                                    key={i}
                                    className="bg-[#15151a] rounded-2xl p-8 border border-white/5 hover:border-accent/30 transition-all text-center reveal-up"
                                    style={{ animationDelay: `${i * 100}ms` }}
                                >
                                    <div className="mb-4 flex justify-center">{audience.icon}</div>
                                    <h3 className="text-xl font-bold text-white mb-3">{audience.title}</h3>
                                    <p className="text-slate-400 text-sm">{audience.description}</p>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            </SectionWrapper>

            {/* CTA Section */}
            <SectionWrapper id="freds-cta" variant="dark">
                <div className="container mx-auto px-6 py-24 md:py-32">
                    <div className="max-w-4xl mx-auto text-center">
                        <h2 className="text-4xl md:text-5xl font-bold text-white font-display mb-6 reveal-up">
                            Pronto para começar?
                        </h2>
                        <p className="text-xl text-slate-400 mb-12 reveal-up delay-100">
                            Se você já utiliza algum CLI no dia-a-dia, você já está pronto para começar com o Freds.
                        </p>
                        <div className="flex flex-col sm:flex-row gap-4 justify-center reveal-up delay-200">
                            <a
                                href="https://github.com/systentandobr/code-assistant-friendly"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="px-8 py-4 bg-accent hover:bg-accent/90 text-white rounded-full font-semibold transition-all flex items-center justify-center gap-2"
                            >
                                <Code className="w-5 h-5" />
                                Ver no GitHub
                            </a>
                            <a
                                href="https://github.com/systentandobr/code-assistant-friendly#readme"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="px-8 py-4 bg-white/5 hover:bg-white/10 border border-white/10 text-white rounded-full font-semibold transition-all flex items-center justify-center gap-2"
                            >
                                <Rocket className="w-5 h-5" />
                                Documentação
                            </a>
                        </div>
                    </div>
                </div>
            </SectionWrapper>
        </div>
    );
};
