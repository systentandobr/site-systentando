import { Activity, Briefcase, Users, Code } from 'lucide-react';
import { FeatureRow } from '../ui/FeatureRow';

export const CollaborationSection = () => {
    return (
        <section id="collaboration" className="py-24 bg-gradient-to-b from-[#0d0d10] to-[#0a0a0c] border-t border-white/5 relative z-10">
            <div className="container mx-auto px-6">
                <div className="bg-[#15151a] rounded-3xl p-8 md:p-12 border border-emerald-500/20 relative overflow-hidden">
                    {/* Background pattern */}
                    <div className="absolute inset-0 opacity-10" style={{ backgroundImage: 'radial-gradient(#34d399 1px, transparent 1px)', backgroundSize: '20px 20px' }}></div>

                    <div className="relative z-10 grid lg:grid-cols-2 gap-12 items-center">
                        <div>
                            <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
                                Ecossistema Multidisciplinar: <br />
                                <span className="text-emerald-400">O "Uber" de Especialistas</span>
                            </h2>
                            <p className="text-slate-300 text-lg mb-8">
                                O ecossistema Systentando não é apenas código. Estamos construindo uma rede onde diferentes apps conectam necessidades a especialistas.
                            </p>

                            <div className="space-y-6">
                                <FeatureRow
                                    icon={<Activity size={20} />}
                                    title="Saúde & Bem-estar"
                                    text="GymApp conecta alunos a Personais, Nutricionistas e Médicos do Esporte."
                                />
                                <FeatureRow
                                    icon={<Briefcase size={20} />}
                                    title="Jurídico & Contábil"
                                    text="Novos módulos conectarão empresas a advogados e contadores sob demanda."
                                />
                                <FeatureRow
                                    icon={<Users size={20} />}
                                    title="Colaboração Cruzada"
                                    text="Desenvolvedores mantêm a plataforma, especialistas entregam o serviço."
                                />
                            </div>
                        </div>

                        <div className="bg-[#0a0a0c] p-8 rounded-2xl border border-white/10">
                            <h3 className="text-xl font-bold text-white mb-6 flex items-center gap-2">
                                <Code className="text-emerald-500" />
                                Junte-se como Desenvolvedor
                            </h3>
                            <p className="text-slate-400 text-sm mb-6">
                                Nossa infraestrutura monorepo permite que você contribua em micro-serviços, frontend ou modelos de IA, impactando todos os apps do ecossistema simultaneamente.
                            </p>

                            <div className="space-y-3 mb-8">
                                <div className="flex items-center gap-3 text-sm text-slate-300">
                                    <div className="w-1.5 h-1.5 rounded-full bg-emerald-500"></div>
                                    Acesso a arquitetura escalável real
                                </div>
                                <div className="flex items-center gap-3 text-sm text-slate-300">
                                    <div className="w-1.5 h-1.5 rounded-full bg-emerald-500"></div>
                                    Aprendizado em RAG e Agentes Autônomos
                                </div>
                                <div className="flex items-center gap-3 text-sm text-slate-300">
                                    <div className="w-1.5 h-1.5 rounded-full bg-emerald-500"></div>
                                    Visibilidade profissional e networking
                                </div>
                            </div>

                            <a href="https://github.com/systentandobr" target="_blank" rel="noopener noreferrer" className="block w-full text-center bg-white text-black font-bold py-3 rounded-lg hover:bg-slate-200 transition-colors">
                                Acessar GitHub
                            </a>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};
