/**
 * Schema types and data for CLI Guides content
 * Data is separated from presentation to allow easy enrichment
 */

// TerminalLine type - shared with TerminalSimulator component
export interface TerminalLine {
    type: 'input' | 'output' | 'success' | 'error' | 'comment';
    content: string;
    delay?: number;
}

export interface TerminalConfig {
    title: string;
    lines: TerminalLine[];
}

export interface CLIGuide {
    id: string;
    name: string;
    description: string;
    longDescription: string;
    icon: string; // Lucide icon name
    model: string;
    docsUrl: string;
    terminal: TerminalConfig;
    tags?: string[];
    pricing?: 'free' | 'freemium' | 'paid';
    useCases?: string[];
}

export interface PlaybookItem {
    subtitle: string;
    content: string;
}

export interface PlaybookSection {
    title: string;
    icon: string; // Lucide icon name
    color: string;
    items: PlaybookItem[];
}

export interface FAQItem {
    question: string;
    answer: string;
    icon: string; // Lucide icon name
    iconColor: string;
}

// ============================================================================
// CLI GUIDES DATA
// ============================================================================

export const CLI_GUIDES: CLIGuide[] = [
    {
        id: 'opencode',
        name: 'OpenCode CLI',
        description: 'Desenvolvido pela MiniMax com o modelo M2.7, otimizado para coding agent.',
        longDescription:
            'OpenCode é um CLI de código aberto desenvolvido pela MiniMax. Usa o modelo MiniMax-M2.7 que foi especificamente treinado para tarefas de programação e agentes de IA. Ideal para desenvolvedores que buscam alta performance em code review e refatoração.',
        icon: 'Terminal',
        model: 'MiniMax-M2.7',
        docsUrl: 'https://platform.minimax.io/docs/token-plan/opencode',
        pricing: 'free',
        useCases: ['Code review', 'Refatoração', 'Planejamento'],
        tags: ['Coding Agent', 'Open Source'],
        terminal: {
            title: 'OpenCode CLI',
            lines: [
                { type: 'comment', content: '# Install OpenCode CLI (via npm)', delay: 500 },
                { type: 'input', content: 'npm i -g opencode-ai' },
                { type: 'output', content: '', delay: 1000 },
                { type: 'success', content: 'added 1 package in 2s' },
                { type: 'comment', content: '# Configure MiniMax API', delay: 300 },
                { type: 'input', content: 'opencode auth login' },
                { type: 'output', content: 'Select provider: MiniMax (minimax.io)', delay: 800 },
                { type: 'success', content: '✓ Authentication successful' },
            ],
        },
    },
    {
        id: 'cursor',
        name: 'Cursor CLI',
        description: 'Assistente de IA da Cursor.com com Composer 2 para planejamento e geração.',
        longDescription:
            'Cursor CLI oferece acesso ao Composer 2, o modelo mais avançado da Cursor para planejamento de projetos e geração de código. Suporta múltiplas janelas de contexto e ferramentas de edição inteligente.',
        icon: 'Bot',
        model: 'Composer 2',
        docsUrl: 'https://cursor.com/docs/cli/overview',
        pricing: 'freemium',
        useCases: ['Planejamento', 'Geração de código', 'Edição inteligente'],
        tags: ['IDE', 'Planejamento'],
        terminal: {
            title: 'Cursor CLI',
            lines: [
                { type: 'comment', content: '# Install Cursor CLI', delay: 500 },
                { type: 'input', content: 'curl https://cursor.com/install -fsSL | bash' },
                { type: 'output', content: 'Downloading Cursor...', delay: 1500 },
                { type: 'success', content: '✓ Cursor installed successfully' },
                { type: 'comment', content: '# Login to your account', delay: 300 },
                { type: 'input', content: 'cursor agent login' },
                { type: 'success', content: '✓ Logged in as marcelio911@gmail.com' },
            ],
        },
    },
    {
        id: 'claude',
        name: 'Claude Code CLI',
        description: 'Assistente da Anthropic com Claude 4 para desenvolvimento seguro.',
        longDescription:
            'Claude Code CLI traz o poder do Claude 4 para sua linha de comando. Focado em segurança e melhores práticas de código, é ideal para quem trabalha com sistemas críticos e precisa de análises profundas.',
        icon: 'Bot',
        model: 'Claude 4.6 Opus',
        docsUrl: 'https://docs.anthropic.com/en/docs/claude-code',
        pricing: 'freemium',
        useCases: ['Análise de segurança', 'Code review', 'Sistemas críticos'],
        tags: ['Anthropic', 'Segurança'],
        terminal: {
            title: 'Claude Code CLI',
            lines: [
                { type: 'comment', content: '# Install Claude Code CLI', delay: 500 },
                { type: 'input', content: 'curl -fsSL https://claude.ai/install.sh | bash' },
                { type: 'output', content: 'Installing Claude...', delay: 1200 },
                { type: 'success', content: '✓ Claude Code installed' },
                { type: 'comment', content: '# Authenticate', delay: 300 },
                { type: 'input', content: 'claude auth' },
                { type: 'success', content: '✓ Authenticated via ANTHROPIC_API_KEY' },
            ],
        },
    },
    {
        id: 'gemini',
        name: 'Gemini CLI',
        description: 'CLI do Google com Gemini 2.5 para multimodalidade e contexto longo.',
        longDescription:
            'Gemini CLI integra o modelo Gemini 2.5 da Google, conhecido por sua capacidade multimodal e janelas de contexto extremamente longas. Perfeito para análise de bases de código inteiras.',
        icon: 'Bot',
        model: 'Gemini 2.5 Pro',
        docsUrl: 'https://ai.google.dev/gemini-api/docs',
        pricing: 'freemium',
        useCases: ['Análise de código grande', 'Multimodal', 'Contexto longo'],
        tags: ['Google', 'Multimodal'],
        terminal: {
            title: 'Gemini CLI',
            lines: [
                { type: 'comment', content: '# Install Gemini CLI', delay: 500 },
                { type: 'input', content: 'npm install -g @google/gemini-cli' },
                { type: 'output', content: 'added 1 package in 1s', delay: 800 },
                { type: 'success', content: '✓ Gemini CLI installed' },
                { type: 'comment', content: '# Start Gemini', delay: 300 },
                { type: 'input', content: 'gemini -p "Hello Gemini!"' },
                { type: 'output', content: 'Hello! How can I assist you today?', delay: 1000 },
            ],
        },
    },
    {
        id: 'codex',
        name: 'Codex CLI',
        description: 'CLI da OpenAI com GPT-5 para geração e compreensão de código.',
        longDescription:
            'Codex CLI utiliza os modelos GPT-5 da OpenAI especificamente otimizados para tarefas de programação. Oferece integração profunda com ferramentas de desenvolvimento e autocomplete inteligente.',
        icon: 'FileCode',
        model: 'GPT-5.3 Codex',
        docsUrl: 'https://codex.com/docs',
        pricing: 'paid',
        useCases: ['Autocomplete', 'Geração de código', 'Integração DevOps'],
        tags: ['OpenAI', 'GPT-5'],
        terminal: {
            title: 'Codex CLI',
            lines: [
                { type: 'comment', content: '# Install Codex CLI', delay: 500 },
                { type: 'input', content: 'npm install -g @codex/cli' },
                { type: 'output', content: 'added 1 package in 2s', delay: 800 },
                { type: 'success', content: '✓ Codex CLI installed' },
                { type: 'comment', content: '# Configure API key', delay: 300 },
                { type: 'input', content: 'export CODEX_API_KEY="your-key"' },
                { type: 'success', content: '✓ Codex configured' },
            ],
        },
    },
    {
        id: 'kiro',
        name: 'Kiro CLI',
        description: 'CLI da Kiro para planejamento e estruturação de projetos.',
        longDescription:
            'Kiro CLI é especializado em planejamento de arquitetura de software e estruturação de projetos. Excelente para iniciar novos projetos com as melhores práticas desde o início.',
        icon: 'Target',
        model: 'Kiro Model',
        docsUrl: 'https://kiro.io/docs',
        pricing: 'freemium',
        useCases: ['Arquitetura', 'Planejamento', 'Estruturação'],
        tags: ['Planejamento', 'Arquitetura'],
        terminal: {
            title: 'Kiro CLI',
            lines: [
                { type: 'comment', content: '# Install Kiro CLI', delay: 500 },
                { type: 'input', content: 'npm install -g @kiro/cli' },
                { type: 'output', content: 'added 1 package in 1s', delay: 800 },
                { type: 'success', content: '✓ Kiro CLI installed' },
                { type: 'input', content: 'kiro --version' },
                { type: 'output', content: 'kiro v1.0.0', delay: 500 },
            ],
        },
    },
    {
        id: 'openrouter',
        name: 'OpenRouter CLI',
        description: 'Acesse 27+ modelos gratuitos (Qwen, Gemma, Llama) via roteador inteligente.',
        longDescription:
            'OpenRouter é um agregador que centraliza acesso a múltiplos modelos de IA. Com o CLI, você pode usar qualquer modelo gratuito (Qwen3, Gemma, Llama, etc) via interface única. O roteador automático escolhe o melhor modelo gratuito baseado na sua tarefa.',
        icon: 'Globe',
        model: '27+ modelos free',
        docsUrl: 'https://openrouter.ai/docs/quickstart',
        pricing: 'free',
        useCases: ['Multi-modelo', 'Coding', 'Roteamento automático'],
        tags: ['Agregador', 'Gratuito', 'Qwen', 'Gemma', 'Llama'],
        terminal: {
            title: 'OpenRouter CLI',
            lines: [
                { type: 'comment', content: '# Install OpenRouter CLI', delay: 500 },
                { type: 'input', content: 'npm install -g @openrouter/cli' },
                { type: 'output', content: 'added 1 package in 2s', delay: 1000 },
                { type: 'comment', content: '# Configure API key', delay: 300 },
                { type: 'input', content: 'export OPENROUTER_API_KEY="sk-or-v1-..."' },
                { type: 'success', content: '✓ OpenRouter configured' },
                { type: 'comment', content: '# List free models', delay: 300 },
                { type: 'input', content: 'openrouter models --free' },
                { type: 'output', content: 'Qwen3, Gemma-3, Llama-3.3, Mistral-Small...', delay: 500 },
            ],
        },
    },
    {
        id: 'ollama',
        name: 'Ollama CLI',
        description: 'Rode modelos open source (Llama, Qwen, Codellama) localmente no seu PC.',
        longDescription:
            'Ollama permite rodar modelos de IA diretamente no seu hardware. Sem cloud, 100% local. Suporta Llama 3.3, Qwen 2.5, Codellama, e muitos outros. Ideal para quem quer privacidade total e não se importa em usar recursos locais.',
        icon: 'Cpu',
        model: 'Llama 3.3, Qwen 2.5',
        docsUrl: 'https://ollama.com/docs',
        pricing: 'free',
        useCases: ['Local', 'Privacidade', 'Open source'],
        tags: ['Local', 'Open Source', 'Llama', 'Qwen'],
        terminal: {
            title: 'Ollama CLI',
            lines: [
                { type: 'comment', content: '# Install Ollama', delay: 500 },
                { type: 'input', content: 'curl -fsSL https://ollama.com/install.sh | bash' },
                { type: 'output', content: 'Installing Ollama...', delay: 1500 },
                { type: 'success', content: '✓ Ollama installed' },
                { type: 'comment', content: '# Pull a model', delay: 300 },
                { type: 'input', content: 'ollama pull qwen2.5-coder' },
                { type: 'output', content: 'pulling manifest... done', delay: 2000 },
                { type: 'success', content: '✓ qwen2.5-coder ready' },
            ],
        },
    },
];

// ============================================================================
// PLAYBOOK DATA
// ============================================================================

export const PLAYBOOK_SECTIONS: PlaybookSection[] = [
    {
        title: 'Posicionamento de Mercado',
        icon: 'Target',
        color: 'text-accent',
        items: [
            {
                subtitle: 'O Cenário',
                content:
                    'Desenvolvedores individuais e equipes perdem até 40% de produtividade alternando entre IDE, browser e ferramentas de IA. O Freds unifica tudo isso no Telegram.',
            },
            {
                subtitle: 'Diferencial Competitivo',
                content: 'Zero configuração de API. Suas credenciais nunca saem da sua máquina. Interface conversacional familiar.',
            },
        ],
    },
    {
        title: 'Mapeamento de Recursos',
        icon: 'ShoppingCart',
        color: 'text-emerald-400',
        items: [
            {
                subtitle: 'Para o Desenvolvedor Individual',
                content: 'Geração de código, refatoração e validação automática via `/generate` e `/plan`. Tudo pelo Telegram.',
            },
            {
                subtitle: 'Para Equipes',
                content: 'Workspace compartilhado via Telegram com confirmações human-in-the-loop para operações sensíveis.',
            },
        ],
    },
    {
        title: 'Scripts de Conversão',
        icon: 'MessageSquare',
        color: 'text-blue-400',
        items: [
            {
                subtitle: 'Abordagem Inicial',
                content:
                    '"Como você documenta e planeja suas tarefas de código quando está longe do PC? O Freds transforma momentos de ócio em produtividade."',
            },
            {
                subtitle: 'Quebra de Objeção (Privacidade)',
                content:
                    '"Suas credenciais ficam na sua máquina. O bot só conversa com os CLIs locais — nada de APIs expostas em servidores."',
            },
        ],
    },
    {
        title: 'Checklist de Adoção',
        icon: 'CheckCircle',
        color: 'text-amber-400',
        items: [
            {
                subtitle: 'Pré-requisitos',
                content: 'Já usa algum CLI de IA no dia-a-dia? Se sim, você já está pronto. Se não, qualquer um dos 6 CLIs suportados é rápido de instalar.',
            },
            {
                subtitle: 'Primeiros Passos',
                content: '1) Instale um CLI → 2) Configure o bot com /onboard → 3) Comece a usar /generate e /plan',
            },
        ],
    },
];

// ============================================================================
// FAQ DATA
// ============================================================================

export const FAQ_ITEMS: FAQItem[] = [
    {
        question: 'Minhas API keys ficam seguras?',
        answer: 'Sim! O Freds conversa diretamente com os CLIs locais na sua máquina. Suas credenciais nunca saem do seu ambiente. O bot só envia texto — não expõe tokens.',
        icon: 'Shield',
        iconColor: 'text-emerald-400',
    },
    {
        question: 'Quanto custa usar o Freds?',
        answer: 'O Freds em si é gratuito. Você só paga pelas APIs dos modelos que usar (MiniMax, OpenAI, Anthropic, Google). Cada provedor tem planos free com limites mensais generosos.',
        icon: 'TrendingUp',
        iconColor: 'text-amber-400',
    },
    {
        question: 'Precisa de cartão de crédito?',
        answer: 'Não! MiniMax, OpenAI e Google oferecem tiers gratuitos sem cartão. O OpenCode CLI com MiniMax-M2.7 é totalmente gratuito para começar.',
        icon: 'CheckCircle',
        iconColor: 'text-accent',
    },
    {
        question: 'Qual CLI devo escolher?',
        answer: 'Comece pelo OpenCode CLI com MiniMax-M2.7 — é otimizado para coding agent e tem tier gratuito generoso. Se precisar de mais recursos, experimente Cursor ou Claude Code.',
        icon: 'Users',
        iconColor: 'text-blue-400',
    },
    {
        question: 'Funciona offline?',
        answer: 'Parcialmente. O bot Telegram precisa de internet, mas os CLIs podem usar modelos locais (Ollama, LM Studio) quando configurados. O Freds suporta fallback entre provedores.',
        icon: 'AlertCircle',
        iconColor: 'text-orange-400',
    },
];

// ============================================================================
// CONTENT ENRICHMENT HELPERS
// ============================================================================

/**
 * Get pricing badge info
 */
export const getPricingInfo = (pricing: 'free' | 'freemium' | 'paid') => {
    const info = {
        free: { label: 'Gratuito', color: 'bg-emerald-500/20 text-emerald-400' },
        freemium: { label: 'Freemium', color: 'bg-blue-500/20 text-blue-400' },
        paid: { label: 'Pago', color: 'bg-amber-500/20 text-amber-400' },
    };
    return info[pricing];
};
