interface SectionLabelProps {
    number: string;
    title: string;
}

export const SectionLabel = ({ number, title }: SectionLabelProps) => (
    <div className="flex items-center gap-2 mb-4 sm:mb-6">
        <span className="w-4 sm:w-6 h-px bg-accent flex-shrink-0" />
        <span className="text-[10px] sm:text-xs font-mono uppercase tracking-widest text-slate-500 break-words">
            {`{${number}} — ${title}`}
        </span>
    </div>
);
