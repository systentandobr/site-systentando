import { useRef, useEffect } from 'react';

interface CodeSnippetProps {
    code: string;
    language?: string;
    filename?: string;
}

export const CodeSnippet = ({ code, language, filename }: CodeSnippetProps) => {
    const ref = useRef<HTMLDivElement>(null);

    useEffect(() => {
        const el = ref.current;
        if (!el) return;
        const observer = new IntersectionObserver(
            (entries) => {
                entries.forEach((entry) => {
                    if (entry.isIntersecting) {
                        entry.target.classList.add('active');
                    }
                });
            },
            { threshold: 0.15 }
        );
        observer.observe(el);
        return () => observer.disconnect();
    }, []);

    return (
        <div ref={ref} className="reveal-up">
            <div className="bg-[#0a0a0c] border border-accent/20 rounded-lg sm:rounded-xl overflow-hidden">
                {filename && (
                    <div className="px-3 sm:px-4 py-2 border-b border-white/5 flex items-center gap-2 flex-wrap">
                        <span className="text-[10px] sm:text-xs font-mono text-accent break-all">{filename}</span>
                        {language && (
                            <span className="text-[9px] sm:text-[10px] font-mono text-slate-500 uppercase">{language}</span>
                        )}
                    </div>
                )}
                <pre className="p-3 sm:p-4 overflow-x-auto">
                    <code className="text-xs sm:text-sm font-mono text-slate-300 leading-relaxed break-words whitespace-pre-wrap">
                        {code}
                    </code>
                </pre>
            </div>
        </div>
    );
};
