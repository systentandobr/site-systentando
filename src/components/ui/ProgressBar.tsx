import { useEffect, useRef, useState } from 'react';

interface ProgressBarProps {
    label: string;
    value: number;
}

export const ProgressBar = ({ label, value }: ProgressBarProps) => {
    const ref = useRef<HTMLDivElement>(null);
    const [width, setWidth] = useState(0);

    useEffect(() => {
        const el = ref.current;
        if (!el) return;
        const observer = new IntersectionObserver(
            (entries) => {
                entries.forEach((entry) => {
                    if (entry.isIntersecting) {
                        setWidth(value);
                    }
                });
            },
            { threshold: 0.3 }
        );
        observer.observe(el);
        return () => observer.disconnect();
    }, [value]);

    return (
        <div ref={ref}>
            <div className="flex justify-between mb-2">
                <span className="text-sm font-medium text-slate-300">{label}</span>
                <span className="text-sm font-bold text-accent">{value}%</span>
            </div>
            <div className="h-1.5 bg-[#15151a] rounded-full overflow-hidden">
                <div
                    className="h-full bg-accent rounded-full transition-all duration-1000 ease-out"
                    style={{ width: `${width}%` }}
                />
            </div>
        </div>
    );
};
