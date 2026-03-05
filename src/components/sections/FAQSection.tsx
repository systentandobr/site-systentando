import { useSectionInView } from '@/hooks/useSectionInView';
import { SectionWrapper } from '@/components/ui/SectionWrapper';
import { SectionLabel } from '@/components/ui/SectionLabel';

const FAQ_ITEMS = [
    {
        question: 'Como funciona o ecossistema Systentando?',
        answer: 'O Systentando é um monorepo compartilhado que conecta múltiplas aplicações (GymApp, TaDeVolta, ViralKids, Meu Gestor) a uma infraestrutura comum de autenticação, IA e gestão. Cada app é especializado em um segmento, mas compartilha APIs e serviços.',
    },
    {
        question: 'Posso contribuir no GitHub?',
        answer: 'Sim! O ecossistema é open source e aceita contribuições. Desenvolvedores podem contribuir em micro-serviços, frontend ou modelos de IA. Acesse github.com/systentandobr para começar.',
    },
    {
        question: 'Qual o prazo para integrar minha aplicação?',
        answer: 'O prazo depende do escopo. MVPs simples podem ser integrados em 2-4 semanas. Projetos mais complexos variam conforme a necessidade de customização e integração com sistemas legados.',
    },
    {
        question: 'Como funciona o suporte pós-entrega?',
        answer: 'Oferecemos suporte conforme o contrato. Para contribuidores do ecossistema, a comunidade no GitHub e canais oficiais estão disponíveis para dúvidas e suporte técnico.',
    },
];

export const FAQSection = () => {
    const ref = useSectionInView();

    return (
        <SectionWrapper id="faq" variant="gradient">
            <div ref={ref} className="container mx-auto px-6 py-24 md:py-32">
                <SectionLabel number="07" title="FAQ" />
                <h2 className="text-3xl md:text-4xl font-bold text-white font-display mb-6 reveal-up">
                    Tem dúvidas?
                </h2>
                <p className="text-slate-400 max-w-2xl mb-16 reveal-up delay-100">
                    Respostas às perguntas mais frequentes sobre o ecossistema.
                </p>

                <div className="max-w-3xl space-y-0 border border-white/10 rounded-2xl overflow-hidden">
                    {FAQ_ITEMS.map((item, i) => (
                        <details
                            key={i}
                            className="group border-b border-white/10 last:border-b-0 reveal-up"
                        >
                            <summary className="flex justify-between items-center gap-4 px-6 py-5 cursor-pointer list-none font-semibold text-white hover:text-accent transition-colors">
                                <span>{item.question}</span>
                                <span className="text-accent text-2xl transition-transform group-open:rotate-45 flex-shrink-0">
                                    +
                                </span>
                            </summary>
                            <div className="px-6 pb-5 text-slate-400 text-sm leading-relaxed">
                                {item.answer}
                            </div>
                        </details>
                    ))}
                </div>
            </div>
        </SectionWrapper>
    );
};
