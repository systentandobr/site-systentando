import { useSectionInView } from '@/hooks/useSectionInView';
import { SectionWrapper } from '@/components/ui/SectionWrapper';
import { SectionLabel } from '@/components/ui/SectionLabel';
import { CodeSnippet } from '@/components/ui/CodeSnippet';

const CODE_EXAMPLE = `systentando/
├── backend-monorepo/     # APIs, Auth, IA
├── gym-app/              # App Fitness (KMP)
├── viralkids/            # E-commerce + RAG
├── tadevolta/            # CRM & Fidelização
└── meugestor/            # ERP Multi-tenant`;

export const OQueResolvemosSection = () => {
    const ref = useSectionInView();

    return (
        <SectionWrapper id="o-que-resolvemos" variant="overlay">
            <div ref={ref} className="container mx-auto px-4 sm:px-6 py-16 sm:py-20 md:py-24 lg:py-32">
                <SectionLabel number="01" title="O que resolvemos" />
                <div className="grid lg:grid-cols-2 gap-8 sm:gap-10 md:gap-12 lg:gap-16 items-center">
                    <div className="space-y-4 sm:space-y-5 md:space-y-6">
                        <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-white font-display leading-tight sm:leading-tight reveal-up break-words">
                            O que pretendemos resolver?
                        </h2>
                        <p className="text-base sm:text-lg md:text-xl text-slate-400 leading-relaxed reveal-up delay-100 break-words">
                            Aceleramos o lançamento de MVPs SaaS com uma infraestrutura compartilhada. 
                            De um monorepo único a aplicações especializadas: Fitness, E-commerce, CRM, ERP — 
                            cada produto nasce com autenticação, IA e gestão já integrados.
                        </p>
                        <p className="text-sm sm:text-base md:text-lg text-slate-400 leading-relaxed reveal-up delay-200 break-words">
                            Conectamos profissionais especialistas, modelos de IA (RAG, agentes) e gestão inteligente 
                            em um único pipeline. O resultado: menos tempo construindo fundações, mais tempo 
                            resolvendo o problema real do seu negócio.
                        </p>
                        <ul className="space-y-2 sm:space-y-3 reveal-up delay-300">
                            {[
                                'MVPs que escalam desde o dia um',
                                'IA contextual por segmento',
                                'Multi-tenant e gestão unificada',
                                'Código aberto e colaborativo',
                            ].map((item, i) => (
                                <li key={i} className="flex items-start gap-2 sm:gap-3 text-sm sm:text-base text-slate-300">
                                    <span className="w-1.5 h-1.5 rounded-full bg-accent flex-shrink-0 mt-1.5 sm:mt-2" />
                                    <span className="break-words">{item}</span>
                                </li>
                            ))}
                        </ul>
                    </div>
                    <div className="reveal-up delay-200">
                        <CodeSnippet
                            code={CODE_EXAMPLE}
                            filename="estrutura-monorepo"
                            language="tree"
                        />
                    </div>
                </div>
            </div>
        </SectionWrapper>
    );
};
