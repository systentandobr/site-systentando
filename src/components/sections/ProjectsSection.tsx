import { Activity, Repeat, ShoppingCart, Layers } from 'lucide-react';
import { ProjectCard } from '../ui/ProjectCard';

export const ProjectsSection = () => {
    return (
        <section id="projects" className="py-24 relative z-10">
            <div className="container mx-auto px-6">
                <div className="mb-16">
                    <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">Nossas Soluções</h2>
                    <p className="text-slate-400">Projetos reais, operando e evoluindo com contribuição da comunidade.</p>
                </div>

                <div className="grid md:grid-cols-2 gap-8">
                    {/* Project 1: GymApp */}
                    <ProjectCard
                        title="GymApp / LevantaDAI"
                        category="Health & Fitness"
                        icon={<Activity className="text-emerald-400" />}
                        description="Sistema de gestão para academias modernas. Integra profissionais físicos com alunos."
                        features={[
                            "Gestão de Treinos e Fichas",
                            "App Android na Google Play",
                            "Marketplace de Personais",
                            "IA para sugestão de exercícios"
                        ]}
                        techs={["Kotlin (KMP)", "Nestjs", "Python", "MongoDB", "Docker"]}
                        links={[
                            { label: "Google Play", url: "https://play.google.com/store/apps/details?id=com.tadevolta.gym" },
                            { label: "Site", url: "https://site.deacademias.com.br/" },
                            { label: "Gestor", url: "https://meugestor.deacademias.com.br/#/auth-gym" },
                            { label: "GitHub", url: "https://github.com/systentandobr/gym-app" }
                        ]}
                        color="emerald"
                    />

                    {/* Project 2: TaDeVolta */}
                    <ProjectCard
                        title="TaDeVolta"
                        category="Sales Force & CRM"
                        icon={<Repeat className="text-blue-400" />}
                        description="Transforme clientes em força de vendas. Plataforma de fidelização e cashback inteligente."
                        features={[
                            "Automação de Marketing",
                            "Gestão de Recompensas",
                            "Análise de Retenção",
                            "Integração com WhatsApp API"
                        ]}
                        techs={["React", "FastAPI", "Nestjs", "MongoDB", "Docker"]}
                        links={[
                            { label: "Seu Cliente", url: "https://seucliente.tadevolta.com.br/" },
                            { label: "Gestão", url: "https://meugestor.tadevolta.com.br/#/login" },
                            { label: "Repositório", url: "https://github.com/systentandobr/backend-monorepo-py/tree/main/tadevolta" }
                        ]}
                        color="blue"
                    />

                    {/* Project 3: ViralKids */}
                    <ProjectCard
                        title="ViralKids"
                        category="E-commerce AI"
                        icon={<ShoppingCart className="text-purple-400" />}
                        description="Loja modelo com CRM integrado e Agente Autônomo para atendimento."
                        features={[
                            "Agente de IA (RAG) para atendimento",
                            "Consulta de pedidos automatizada",
                            "Recomendação de produtos via IA",
                            "Checkout Transparente"
                        ]}
                        techs={["Next.js", "RAG / LangChain", "Stripe", "Docker"]}
                        links={[
                            { label: "Site", url: "https://viralkids.com.br/" },
                            { label: "Repositório", url: "https://github.com/systentandobr/viralkids" }
                        ]}
                        color="purple"
                    />

                    {/* Project 4: Meu Gestor SaaS */}
                    <ProjectCard
                        title="Meu Gestor SaaS"
                        category="Enterprise Management"
                        icon={<Layers className="text-orange-400" />}
                        description="Gestão inteligente para múltiplos segmentos. O núcleo administrativo do ecossistema."
                        features={[
                            "Multi-tenant (Várias empresas)",
                            "Controle Financeiro & Fiscal",
                            "Dashboards em Tempo Real",
                            "Gestão de RH"
                        ]}
                        techs={["React", "Nestjs", "MongoDB", "Docker"]}
                        links={[
                            { label: "Saiba Mais", url: "https://meugestor.tadevolta.com.br/#/login" }
                        ]}
                        color="orange"
                    />
                </div>
            </div>
        </section>
    );
};
