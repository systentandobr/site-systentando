import { useSectionInView } from '@/hooks/useSectionInView';
import { SectionWrapper } from '@/components/ui/SectionWrapper';
import { SectionLabel } from '@/components/ui/SectionLabel';
import { TestimonialCard } from '@/components/ui/TestimonialCard';

const TESTIMONIALS = [
    {
        author: 'Cliente Parceiro',
        handle: '@parceiro',
        rating: 5,
        content: 'A infraestrutura compartilhada acelerou nosso MVP em meses. Recomendo o ecossistema para quem quer escalar rápido.',
    },
    {
        author: 'Desenvolvedor Contribuidor',
        handle: '@dev_contrib',
        rating: 5,
        content: 'Contribuir no monorepo foi uma experiência única. A arquitetura é limpa e a documentação facilita muito.',
    },
    {
        author: 'Em breve',
        handle: '@seu_depoimento',
        rating: 5,
        content: 'Seu depoimento pode aparecer aqui. Entre em contato e conte sua experiência com o ecossistema Systentando.',
    },
];

export const DepoimentosSection = () => {
    const ref = useSectionInView();

    return (
        <SectionWrapper id="depoimentos" variant="dark">
            <div ref={ref} className="container mx-auto px-6 py-24 md:py-32">
                <SectionLabel number="05" title="Depoimentos" />
                <h2 className="text-3xl md:text-4xl font-bold text-white font-display mb-6 reveal-up">
                    Não acredite apenas na nossa palavra
                </h2>
                <p className="text-slate-400 max-w-2xl mb-16 reveal-up delay-100">
                    Veja o que dizem sobre o ecossistema.
                </p>

                <div className="grid md:grid-cols-3 gap-8">
                    {TESTIMONIALS.map((t) => (
                        <div key={t.handle} className="reveal-up">
                            <TestimonialCard {...t} />
                        </div>
                    ))}
                </div>
            </div>
        </SectionWrapper>
    );
};
