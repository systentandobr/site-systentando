import { useState } from 'react';
import {
    BookOpen,
    ChevronRight,
    Code,
    Terminal,
    Bot,
    Shield,
    Settings,
    Key,
    Globe,
    Cpu,
    Download,
    Rocket,
    Lightbulb,
    ArrowRight,
    CheckCircle,
    AlertCircle,
    Menu,
    X,
    Copy,
    Check,
} from 'lucide-react';
import { useSectionInView } from '@/hooks/useSectionInView';

interface NavItem {
    title: string;
    href: string;
    icon: React.ReactNode;
    badge?: string;
}

const SIDEBAR_NAV: NavItem[] = [
    { title: 'Getting Started', href: '#getting-started', icon: <Rocket className="w-4 h-4" /> },
    { title: 'Installation', href: '#installation', icon: <Download className="w-4 h-4" /> },
    { title: 'Configuration', href: '#configuration', icon: <Settings className="w-4 h-4" /> },
    { title: 'CLI Tools', href: '#cli-tools', icon: <Terminal className="w-4 h-4" /> },
    { title: 'API Keys', href: '#api-keys', icon: <Key className="w-4 h-4" /> },
    { title: 'Security', href: '#security', icon: <Shield className="w-4 h-4" /> },
];

const CLI_TOOLS = [
    {
        id: 'opencode',
        name: 'OpenCode CLI',
        description: 'Desenvolvido pela MiniMax com o modelo M2.7, otimizado para coding agent.',
        model: 'MiniMax-M2.7',
        pricing: 'free' as const,
        docsUrl: 'https://platform.minimax.io/docs/token-plan/opencode',
        install: 'npm i -g opencode-ai',
        icon: <Terminal className="w-5 h-5" />,
        color: 'bg-emerald-500/20 text-emerald-400 border-emerald-500/30',
        features: ['Code review', 'Refatoração', 'Planejamento'],
    },
    {
        id: 'cursor',
        name: 'Cursor CLI',
        description: 'Assistente de IA da Cursor.com com Composer 2 para planejamento e geração.',
        model: 'Composer 2',
        pricing: 'freemium' as const,
        docsUrl: 'https://cursor.com/docs/cli/overview',
        install: 'curl https://cursor.com/install -fsSL | bash',
        icon: <Bot className="w-5 h-5" />,
        color: 'bg-purple-500/20 text-purple-400 border-purple-500/30',
        features: ['Planejamento', 'Geração de código', 'Edição inteligente'],
    },
    {
        id: 'claude',
        name: 'Claude Code CLI',
        description: 'Assistente da Anthropic com Claude 4 para desenvolvimento seguro.',
        model: 'Claude 4.6 Opus',
        pricing: 'freemium' as const,
        docsUrl: 'https://docs.anthropic.com/en/docs/claude-code',
        install: 'curl -fsSL https://claude.ai/install.sh | bash',
        icon: <Bot className="w-5 h-5" />,
        color: 'bg-amber-500/20 text-amber-400 border-amber-500/30',
        features: ['Análise de segurança', 'Code review', 'Sistemas críticos'],
    },
    {
        id: 'gemini',
        name: 'Gemini CLI',
        description: 'CLI do Google com Gemini 2.5 para multimodalidade e contexto longo.',
        model: 'Gemini 2.5 Pro',
        pricing: 'freemium' as const,
        docsUrl: 'https://ai.google.dev/gimini-api/docs',
        install: 'npm install -g @google/gemini-cli',
        icon: <Globe className="w-5 h-5" />,
        color: 'bg-blue-500/20 text-blue-400 border-blue-500/30',
        features: ['Análise de código grande', 'Multimodal', 'Contexto longo'],
    },
    {
        id: 'ollama',
        name: 'Ollama CLI',
        description: 'Rode modelos open source (Llama, Qwen, Codellama) localmente no seu PC.',
        model: 'Llama 3.3, Qwen 2.5',
        pricing: 'free' as const,
        docsUrl: 'https://ollama.com/docs',
        install: 'curl -fsSL https://ollama.com/install.sh | bash',
        icon: <Cpu className="w-5 h-5" />,
        color: 'bg-orange-500/20 text-orange-400 border-orange-500/30',
        features: ['Local', 'Privacidade', 'Open source'],
    },
];

const getPricingBadge = (pricing: 'free' | 'freemium' | 'paid') => {
    const badges = {
        free: { label: 'Grátis', bg: 'bg-emerald-500/20', text: 'text-emerald-400' },
        freemium: { label: 'Freemium', bg: 'bg-blue-500/20', text: 'text-blue-400' },
        paid: { label: 'Pago', bg: 'bg-amber-500/20', text: 'text-amber-400' },
    };
    return badges[pricing];
};

const CodeBlock = ({ code, language = 'bash' }: { code: string; language?: string }) => {
    const [copied, setCopied] = useState(false);

    const handleCopy = () => {
        navigator.clipboard.writeText(code);
        setCopied(true);
        setTimeout(() => setCopied(false), 2000);
    };

    return (
        <div className="relative group">
            <div className="absolute top-3 left-4 text-xs text-slate-500 font-mono">{language}</div>
            <button
                onClick={handleCopy}
                className="absolute top-3 right-3 p-2 rounded-lg bg-white/5 hover:bg-white/10 text-slate-400 hover:text-white transition-all opacity-0 group-hover:opacity-100"
            >
                {copied ? <Check className="w-4 h-4 text-emerald-400" /> : <Copy className="w-4 h-4" />}
            </button>
            <pre className="bg-[#0a0a0c] border border-white/10 rounded-xl p-6 pt-10 overflow-x-auto">
                <code className="text-sm text-slate-300 font-mono leading-relaxed">{code}</code>
            </pre>
        </div>
    );
};

const StepCard = ({
    number,
    title,
    description,
    code,
}: {
    number: string;
    title: string;
    description: string;
    code?: string;
}) => (
    <div className="relative">
        <div className="absolute left-8 top-0 bottom-0 w-px bg-gradient-to-b from-accent/50 via-accent/20 to-transparent" />
        <div className="relative flex gap-6">
            <div className="flex-shrink-0 w-16 h-16 rounded-full bg-[#15151a] border-2 border-accent/40 flex items-center justify-center z-10">
                <span className="text-xl font-bold text-accent">{number}</span>
            </div>
            <div className="flex-1 bg-[#15151a] rounded-2xl p-6 border border-white/5 mb-8">
                <h3 className="text-xl font-bold text-white mb-3">{title}</h3>
                <p className="text-slate-400 mb-4 leading-relaxed">{description}</p>
                {code && <CodeBlock code={code} />}
            </div>
        </div>
    </div>
);

const DocCallout = ({
    type,
    title,
    children,
}: {
    type: 'info' | 'warning' | 'success';
    title: string;
    children: React.ReactNode;
}) => {
    const styles = {
        info: {
            border: 'border-blue-500/30',
            bg: 'bg-blue-500/10',
            icon: <AlertCircle className="w-5 h-5 text-blue-400" />,
            titleColor: 'text-blue-400',
        },
        warning: {
            border: 'border-amber-500/30',
            bg: 'bg-amber-500/10',
            icon: <AlertCircle className="w-5 h-5 text-amber-400" />,
            titleColor: 'text-amber-400',
        },
        success: {
            border: 'border-emerald-500/30',
            bg: 'bg-emerald-500/10',
            icon: <CheckCircle className="w-5 h-5 text-emerald-400" />,
            titleColor: 'text-emerald-400',
        },
    };

    const style = styles[type];

    return (
        <div className={`${style.bg} border ${style.border} rounded-xl p-5`}>
            <div className={`flex items-center gap-2 mb-3 ${style.titleColor}`}>
                {style.icon}
                <span className="font-semibold">{title}</span>
            </div>
            <div className="text-slate-300 text-sm leading-relaxed">{children}</div>
        </div>
    );
};

const CLIToolCard = ({
    tool,
    isActive,
    onToggle,
}: {
    tool: (typeof CLI_TOOLS)[0];
    isActive: boolean;
    onToggle: () => void;
}) => {
    const badge = getPricingBadge(tool.pricing);

    return (
        <div
            className={`bg-[#15151a] rounded-2xl border transition-all duration-300 ${
                isActive ? 'border-accent/50 shadow-lg shadow-accent/10' : 'border-white/5 hover:border-white/20'
            }`}
        >
            <button onClick={onToggle} className="w-full p-6 text-left">
                <div className="flex items-start justify-between mb-4">
                    <div className={`w-12 h-12 rounded-xl border flex items-center justify-center ${tool.color}`}>
                        {tool.icon}
                    </div>
                    <div className="flex flex-col items-end gap-2">
                        <span className="px-2 py-1 bg-accent/10 rounded text-xs text-accent font-mono">{tool.model}</span>
                        <span className={`px-2 py-1 rounded text-xs ${badge.bg} ${badge.text}`}>{badge.label}</span>
                    </div>
                </div>
                <h3 className="text-xl font-bold text-white mb-2">{tool.name}</h3>
                <p className="text-slate-400 text-sm leading-relaxed">{tool.description}</p>
                <div className="flex items-center gap-2 mt-4 text-accent text-sm">
                    <span>{isActive ? 'Ocultar detalhes' : 'Ver detalhes'}</span>
                    <ChevronRight className={`w-4 h-4 transition-transform ${isActive ? 'rotate-90' : ''}`} />
                </div>
            </button>

            {isActive && (
                <div className="px-6 pb-6 space-y-4 border-t border-white/5 pt-4">
                    <div>
                        <p className="text-xs text-slate-500 uppercase tracking-wider mb-2">Instalação</p>
                        <CodeBlock code={tool.install} />
                    </div>
                    <div>
                        <p className="text-xs text-slate-500 uppercase tracking-wider mb-2">Recursos</p>
                        <div className="flex flex-wrap gap-2">
                            {tool.features.map((feature) => (
                                <span key={feature} className="px-2 py-1 bg-white/5 rounded text-xs text-slate-400">
                                    {feature}
                                </span>
                            ))}
                        </div>
                    </div>
                    <a
                        href={tool.docsUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex items-center justify-center gap-2 py-2.5 bg-accent/10 hover:bg-accent/20 rounded-lg text-sm text-accent transition-all"
                    >
                        <BookOpen className="w-4 h-4" />
                        Ver documentação oficial
                        <ArrowRight className="w-4 h-4" />
                    </a>
                </div>
            )}
        </div>
    );
};

export const DocumentationPage = () => {
    const [sidebarOpen, setSidebarOpen] = useState(false);
    const [activeCLITool, setActiveCLITool] = useState<string | null>(null);
    const contentRef = useSectionInView();

    const scrollToSection = (href: string) => {
        const element = document.querySelector(href);
        if (element) {
            element.scrollIntoView({ behavior: 'smooth' });
        }
        setSidebarOpen(false);
    };

    return (
        <div className="min-h-screen bg-[#0a0a0c] text-slate-300">
            {/* Mobile Sidebar Toggle */}
            <button
                onClick={() => setSidebarOpen(!sidebarOpen)}
                className="fixed top-24 left-4 z-50 md:hidden p-3 bg-[#15151a] border border-white/10 rounded-xl"
            >
                {sidebarOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
            </button>

            {/* Sidebar Overlay */}
            {sidebarOpen && (
                <div
                    className="fixed inset-0 bg-black/50 z-40 md:hidden"
                    onClick={() => setSidebarOpen(false)}
                />
            )}

            {/* Sidebar */}
            <aside
                className={`fixed top-0 left-0 h-full w-72 bg-[#0d0d10] border-r border-white/5 z-40 transition-transform duration-300 md:translate-x-0 ${
                    sidebarOpen ? 'translate-x-0' : '-translate-x-full'
                }`}
            >
                <div className="p-6 border-b border-white/5">
                    <div className="flex items-center gap-3">
                        <div className="w-10 h-10 rounded-xl bg-accent/10 flex items-center justify-center">
                            <BookOpen className="w-5 h-5 text-accent" />
                        </div>
                        <div>
                            <h1 className="text-lg font-bold text-white">Documentação</h1>
                            <p className="text-xs text-slate-500">Freds Code Assistant</p>
                        </div>
                    </div>
                </div>

                <nav className="p-4 space-y-1">
                    {SIDEBAR_NAV.map((item) => (
                        <button
                            key={item.href}
                            onClick={() => scrollToSection(item.href)}
                            className="w-full flex items-center gap-3 px-4 py-3 rounded-xl text-left text-slate-400 hover:text-white hover:bg-white/5 transition-all group"
                        >
                            <span className="text-slate-500 group-hover:text-accent transition-colors">{item.icon}</span>
                            <span className="flex-1">{item.title}</span>
                            {item.badge && (
                                <span className="px-2 py-0.5 bg-accent/10 rounded text-xs text-accent">{item.badge}</span>
                            )}
                        </button>
                    ))}
                </nav>

                <div className="absolute bottom-0 left-0 right-0 p-4 border-t border-white/5">
                    <div className="bg-accent/10 rounded-xl p-4">
                        <div className="flex items-center gap-2 mb-2">
                            <Lightbulb className="w-4 h-4 text-accent" />
                            <span className="text-sm font-semibold text-white">Dica</span>
                        </div>
                        <p className="text-xs text-slate-400 leading-relaxed">
                            Comece pelo OpenCode CLI — é gratuito e não requer cartão de crédito.
                        </p>
                    </div>
                </div>
            </aside>

            {/* Main Content */}
            <main className="md:ml-72 min-h-screen">
                <div ref={contentRef} className="max-w-4xl mx-auto px-6 py-12 md:py-20">
                    {/* Hero */}
                    <div className="mb-16">
                        <div className="inline-flex items-center gap-2 px-3 py-1.5 bg-accent/10 border border-accent/30 rounded-full text-accent text-sm font-mono mb-6">
                            <BookOpen className="w-4 h-4" />
                            <span>Documentação v1.0</span>
                        </div>
                        <h1 className="text-4xl md:text-5xl font-bold text-white font-display mb-6 leading-tight">
                            Freds Code Assistant
                        </h1>
                        <p className="text-xl text-slate-400 leading-relaxed">
                            Assistente de IA para desenvolvimento que roda localmente usando CLIs de mercado.
                            Suas credenciais nunca saem da sua máquina.
                        </p>
                    </div>

                    {/* Getting Started */}
                    <section id="getting-started" className="mb-20 scroll-mt-24">
                        <div className="flex items-center gap-3 mb-6">
                            <div className="w-10 h-10 rounded-xl bg-accent/10 flex items-center justify-center text-accent">
                                <Rocket className="w-5 h-5" />
                            </div>
                            <h2 className="text-2xl font-bold text-white">Getting Started</h2>
                        </div>

                        <DocCallout type="success" title="Pré-requisito">
                            Você precisa ter pelo menos um CLI de IA instalado no seu sistema. Se ainda não tem,
                           推荐的 CLIs estão listados na seção{' '}
                            <button onClick={() => scrollToSection('#cli-tools')} className="text-accent hover:underline">
                                CLI Tools
                            </button>
                            .
                        </DocCallout>

                        <div className="mt-8 space-y-0">
                            <StepCard
                                number="01"
                                title="Instale um CLI de IA"
                                description="Escolha um dos CLIs suportados. Se você já usa algum, pule esta etapa."
                            />
                            <StepCard
                                number="02"
                                title="Configure o Bot"
                                description="Crie um bot no Telegram via @BotFather e configure o token no arquivo de configuração."
                                code="make onboard"
                            />
                            <StepCard
                                number="03"
                                title="Comece a Usar"
                                description="Execute o Freds e comece a conversar via Telegram. Use comandos como /generate e /plan."
                                code="make run-with-ssh"
                            />
                        </div>
                    </section>

                    {/* Installation */}
                    <section id="installation" className="mb-20 scroll-mt-24">
                        <div className="flex items-center gap-3 mb-6">
                            <div className="w-10 h-10 rounded-xl bg-blue-500/10 flex items-center justify-center text-blue-400">
                                <Download className="w-5 h-5" />
                            </div>
                            <h2 className="text-2xl font-bold text-white">Instalação</h2>
                        </div>

                        <p className="text-slate-400 mb-8 leading-relaxed">
                            Escolha seu CLI favorito e siga as instruções de instalação. Todos os CLIs abaixo
                            são compatíveis com o Freds Code Assistant.
                        </p>

                        <DocCallout type="info" title="Suporte Local">
                            Se você prefere rodar modelos localmente, o Ollama CLI permite usar Llama, Qwen e
                            outros modelos open-source sem custos de API.
                        </DocCallout>
                    </section>

                    {/* Configuration */}
                    <section id="configuration" className="mb-20 scroll-mt-24">
                        <div className="flex items-center gap-3 mb-6">
                            <div className="w-10 h-10 rounded-xl bg-purple-500/10 flex items-center justify-center text-purple-400">
                                <Settings className="w-5 h-5" />
                            </div>
                            <h2 className="text-2xl font-bold text-white">Configuração</h2>
                        </div>

                        <div className="space-y-6">
                            <div className="bg-[#15151a] rounded-2xl p-6 border border-white/5">
                                <h3 className="text-lg font-bold text-white mb-4">Arquivo config.yaml</h3>
                                <CodeBlock
                                    code={`telegram:
  bot_token: "SEU_BOT_TOKEN_AQUI"
  allowed_users:
    - seu_usuario_telegram

clis:
  preferred:
    - opencode
    - cursor
    - claude
  path: "/usr/local/bin"

security:
  human_in_the_loop: true
  confirm_sensitive: true`}
                                    language="yaml"
                                />
                            </div>

                            <DocCallout type="warning" title="Nunca cometa credenciais">
                                Adicione o config.yaml ao .gitignore antes de fazer commit. Use variáveis de
                                ambiente para informações sensíveis.
                            </DocCallout>
                        </div>
                    </section>

                    {/* CLI Tools */}
                    <section id="cli-tools" className="mb-20 scroll-mt-24">
                        <div className="flex items-center gap-3 mb-6">
                            <div className="w-10 h-10 rounded-xl bg-emerald-500/10 flex items-center justify-center text-emerald-400">
                                <Terminal className="w-5 h-5" />
                            </div>
                            <h2 className="text-2xl font-bold text-white">CLI Tools</h2>
                        </div>

                        <p className="text-slate-400 mb-8 leading-relaxed">
                            Escolha um ou mais CLIs para usar com o Freds. Cada CLI traz um modelo diferente.
                            Todos funcionam localmente na sua máquina.
                        </p>

                        <div className="grid md:grid-cols-2 gap-4">
                            {CLI_TOOLS.map((tool) => (
                                <CLIToolCard
                                    key={tool.id}
                                    tool={tool}
                                    isActive={activeCLITool === tool.id}
                                    onToggle={() =>
                                        setActiveCLITool(activeCLITool === tool.id ? null : tool.id)
                                    }
                                />
                            ))}
                        </div>
                    </section>

                    {/* API Keys */}
                    <section id="api-keys" className="mb-20 scroll-mt-24">
                        <div className="flex items-center gap-3 mb-6">
                            <div className="w-10 h-10 rounded-xl bg-amber-500/10 flex items-center justify-center text-amber-400">
                                <Key className="w-5 h-5" />
                            </div>
                            <h2 className="text-2xl font-bold text-white">API Keys</h2>
                        </div>

                        <p className="text-slate-400 mb-8 leading-relaxed">
                            Configure suas API keys para ativar os CLIs correspondentes. Cada provedor tem
                            um tier gratuito com limites mensais.
                        </p>

                        <div className="grid md:grid-cols-2 gap-4">
                            {[
                                { name: 'MiniMax', key: 'MINIMAX_API_KEY', url: 'https://platform.minimax.io', free: true },
                                { name: 'Anthropic', key: 'ANTHROPIC_API_KEY', url: 'https://console.anthropic.com', free: true },
                                { name: 'Google', key: 'GEMINI_API_KEY', url: 'https://ai.google.dev', free: true },
                                { name: 'OpenAI', key: 'OPENAI_API_KEY', url: 'https://platform.openai.com', free: false },
                            ].map((provider) => (
                                <div
                                    key={provider.key}
                                    className="bg-[#15151a] rounded-xl p-5 border border-white/5"
                                >
                                    <div className="flex items-center justify-between mb-3">
                                        <h3 className="font-bold text-white">{provider.name}</h3>
                                        {provider.free && (
                                            <span className="px-2 py-0.5 bg-emerald-500/20 rounded text-xs text-emerald-400">
                                                Tier gratuito
                                            </span>
                                        )}
                                    </div>
                                    <code className="text-xs text-slate-500 block mb-3">{provider.key}</code>
                                    <a
                                        href={provider.url}
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className="text-sm text-accent hover:underline"
                                    >
                                        Obter API Key →
                                    </a>
                                </div>
                            ))}
                        </div>
                    </section>

                    {/* Security */}
                    <section id="security" className="mb-20 scroll-mt-24">
                        <div className="flex items-center gap-3 mb-6">
                            <div className="w-10 h-10 rounded-xl bg-red-500/10 flex items-center justify-center text-red-400">
                                <Shield className="w-5 h-5" />
                            </div>
                            <h2 className="text-2xl font-bold text-white">Segurança</h2>
                        </div>

                        <div className="space-y-4">
                            <DocCallout type="success" title="Zero Exposição de API">
                                Suas credenciais nunca saem da sua máquina. O Freds conversa diretamente com
                                os CLIs locais — não há servidores intermediários.
                            </DocCallout>

                            <DocCallout type="warning" title="Human-in-the-Loop">
                                Operações sensíveis (como push forçado ou exclusão de arquivos) pedem
                                confirmação antes de executar.
                            </DocCallout>

                            <div className="bg-[#15151a] rounded-2xl p-6 border border-white/5">
                                <h3 className="text-lg font-bold text-white mb-4">Boas Práticas</h3>
                                <ul className="space-y-3">
                                    {[
                                        'Nunca cometa arquivos de configuração com API keys',
                                        'Use variáveis de ambiente para credenciais',
                                        'Revise comandos antes de executar',
                                        'Mantenha os CLIs atualizados',
                                    ].map((item, i) => (
                                        <li key={i} className="flex items-start gap-3 text-slate-400 text-sm">
                                            <CheckCircle className="w-4 h-4 text-accent mt-0.5 flex-shrink-0" />
                                            {item}
                                        </li>
                                    ))}
                                </ul>
                            </div>
                        </div>
                    </section>

                    {/* Footer CTA */}
                    <section className="bg-gradient-to-r from-accent/10 via-accent/5 to-transparent border border-accent/20 rounded-2xl p-8 text-center">
                        <h2 className="text-2xl font-bold text-white mb-4">Pronto para começar?</h2>
                        <p className="text-slate-400 mb-6 max-w-xl mx-auto">
                            Se você já utiliza algum CLI de IA no dia-a-dia, você já está pronto para começar
                            com o Freds.
                        </p>
                        <div className="flex flex-wrap justify-center gap-4">
                            <a
                                href="https://github.com/systentandobr/code-assistant-friendly"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="px-6 py-3 bg-accent hover:bg-accent/90 text-black rounded-full font-semibold transition-all flex items-center gap-2"
                            >
                                <Code className="w-4 h-4" />
                                Ver no GitHub
                            </a>
                            <a
                                href="https://github.com/systentandobr/code-assistant-friendly#readme"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="px-6 py-3 bg-white/5 hover:bg-white/10 border border-white/10 text-white rounded-full font-semibold transition-all flex items-center gap-2"
                            >
                                <BookOpen className="w-4 h-4" />
                                Documentação Completa
                            </a>
                        </div>
                    </section>
                </div>
            </main>
        </div>
    );
};