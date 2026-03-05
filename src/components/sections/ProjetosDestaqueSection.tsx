import { Activity, Repeat, ShoppingCart, Layers, Truck } from 'lucide-react';
import { useSectionInView } from '@/hooks/useSectionInView';
import { SectionWrapper } from '@/components/ui/SectionWrapper';
import { SectionLabel } from '@/components/ui/SectionLabel';
import { ProjectShowcaseCard } from '@/components/ui/ProjectShowcaseCard';

const PROJECTS = [
    {
        title: 'GymApp / LevantaDAI',
        category: 'Health & Fitness',
        icon: <Activity className="text-accent w-12 h-12" />,
        description: 'Sistema de gestão para academias modernas. Integra profissionais físicos com alunos.',
        features: [
            'Gestão de Treinos e Fichas',
            'App Android na Google Play',
            'Marketplace de Personais',
            'IA para sugestão de exercícios',
        ],
        techs: ['Kotlin (KMP)', 'Nestjs', 'Python', 'MongoDB', 'Docker'],
        links: [
            { label: 'Google Play', url: 'https://play.google.com/store/apps/details?id=com.tadevolta.gym' },
            { label: 'Site', url: 'https://site.deacademias.com.br/' },
            { label: 'Gestor', url: 'https://meugestor.deacademias.com.br/#/auth-gym' },
            { label: 'GitHub', url: 'https://github.com/systentandobr/gym-app' },
        ],
        color: 'emerald' as const,
        badge: 'App',
        date: undefined,
        image: undefined,
    },
    {
        title: 'TaDeVolta',
        category: 'Sales Force & CRM',
        icon: <Repeat className="text-blue-400 w-12 h-12" />,
        description: 'Transforme clientes em força de vendas. Plataforma de fidelização e cashback inteligente.',
        features: [
            'Automação de Marketing',
            'Gestão de Recompensas',
            'Análise de Retenção',
            'Integração com WhatsApp API',
        ],
        techs: ['React', 'FastAPI', 'Nestjs', 'MongoDB', 'Docker'],
        links: [
            { label: 'Seu Cliente', url: 'https://seucliente.tadevolta.com.br/' },
            { label: 'Gestão', url: 'https://meugestor.tadevolta.com.br/#/login' },
            { label: 'Repositório', url: 'https://github.com/systentandobr/backend-monorepo-py/tree/main/tadevolta' },
        ],
        color: 'blue' as const,
        badge: 'SaaS',
        date: undefined,
        image: undefined,
    },
    {
        title: 'ViralKids',
        category: 'E-commerce AI',
        icon: <ShoppingCart className="text-purple-400 w-12 h-12" />,
        description: 'Loja modelo com CRM integrado e Agente Autônomo para atendimento.',
        features: [
            'Agente de IA (RAG) para atendimento',
            'Consulta de pedidos automatizada',
            'Recomendação de produtos via IA',
            'Checkout Transparente',
        ],
        techs: ['Next.js', 'RAG / LangChain', 'Stripe', 'Docker'],
        links: [
            { label: 'Site', url: 'https://site.viralkids.com.br/' },
            { label: 'Repositório', url: 'https://github.com/systentandobr/viralkids' },
        ],
        color: 'purple' as const,
        badge: 'E-commerce',
        date: undefined,
        image: undefined,
    },
    {
        title: 'Meu Gestor SaaS',
        category: 'Enterprise Management',
        icon: <Layers className="text-orange-400 w-12 h-12" />,
        description: 'Gestão inteligente para múltiplos segmentos. O núcleo administrativo do ecossistema.',
        features: [
            'Multi-tenant (Várias empresas)',
            'Controle Financeiro & Fiscal',
            'Dashboards em Tempo Real',
            'Gestão de RH',
        ],
        techs: ['React', 'Nestjs', 'MongoDB', 'Docker'],
        links: [{ label: 'Saiba Mais', url: 'https://meugestor.tadevolta.com.br/#/login' }],
        color: 'orange' as const,
        badge: 'ERP',
        date: undefined,
        image: undefined,
    },
    {
        title: 'Boy Entregador',
        category: 'Marketplace & Comunidade',
        icon: <Truck className="text-green-400 w-12 h-12" />,
        description: 'Marketplace que une empreendedores locais em comunidade para criar e potencializar novas oportunidades de comércio e organização de serviços.',
        features: [
            'Onboarding de prestadores de serviços',
            'Agenda de entregas',
            'Ganhos e comissões',
            'Clientes e pedidos',
            'Dashboard de serviços (agenda, clientes, ganhos)',
            'Dashboard de vendas',
            'Integração com WhatsApp API e WebPush',
        ],
        techs: ['Next.js', 'Zustand', 'Tailwind CSS', 'Lucide React', 'Web Push API', 'Nestjs', 'MongoDB', 'Docker'],
        links: [{ label: 'Marketplace', url: 'https://marketplace.tadevolta.com.br/' }],
        color: 'green' as const,
        badge: 'App',
        date: undefined,
        image: undefined,
    },
];

export const ProjetosDestaqueSection = () => {
    const ref = useSectionInView();

    return (
        <SectionWrapper id="projects" variant="gradient">
            <div ref={ref} className="container mx-auto px-6 py-24 md:py-32">
                <SectionLabel number="02" title="Projetos em destaque" />
                <h2 className="text-3xl md:text-4xl font-bold text-white font-display mb-6 reveal-up">
                    Misturamos infraestrutura com resultado.
                </h2>
                <p className="text-slate-400 max-w-2xl mb-16 reveal-up delay-100">
                    Projetos reais, operando e evoluindo com contribuição da comunidade.
                </p>

                <div className="grid md:grid-cols-2 gap-8">
                    {PROJECTS.map((project) => (
                        <div key={project.title} className="reveal-up">
                            <ProjectShowcaseCard {...project} />
                        </div>
                    ))}
                </div>
            </div>
        </SectionWrapper>
    );
};
