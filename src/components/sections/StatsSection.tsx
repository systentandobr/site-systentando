import { useSectionInView } from '@/hooks/useSectionInView';
import { SectionWrapper } from '@/components/ui/SectionWrapper';

const STATS = [
    { value: '10+', label: 'anos de experiência' },
    { value: '>99%', label: 'uptime SLA' },
    { value: '100+', label: 'clientes satisfeitos' },
    { value: '+25', label: 'projetos entregues' },
];

export const StatsSection = () => {
    const ref = useSectionInView();

    return (
        <SectionWrapper variant="overlay">
            <div ref={ref} className="container mx-auto px-6 py-20">
                <div className="grid grid-cols-2 md:grid-cols-4 gap-4 sm:gap-6 md:gap-8">
                    {STATS.map((stat) => (
                        <div
                            key={stat.label}
                            className="reveal-up text-center p-4 sm:p-6 md:p-8 bg-[#15151a]/50 backdrop-blur-sm border border-white/5 rounded-xl sm:rounded-2xl hover:border-accent/30 transition-all duration-300 hover:-translate-y-1"
                        >
                            <div className="text-2xl sm:text-3xl md:text-4xl font-bold text-accent font-display mb-1 sm:mb-2">
                                {stat.value}
                            </div>
                            <div className="text-xs sm:text-sm text-slate-400 leading-tight sm:leading-normal break-words px-1">
                                {stat.label}
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </SectionWrapper>
    );
};
