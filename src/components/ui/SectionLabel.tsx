interface SectionLabelProps {
    number: string;
    title: string;
}

export const SectionLabel = ({ number, title }: SectionLabelProps) => (
    <div className="flex items-center gap-2 mb-4">
        <span className="w-6 h-px bg-accent flex-shrink-0" />
        <span className="text-xs font-mono uppercase tracking-widest text-slate-500">
            {`{${number}} — ${title}`}
        </span>
    </div>
);
