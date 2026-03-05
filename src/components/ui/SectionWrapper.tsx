import { ReactNode } from 'react';

interface SectionWrapperProps {
    id?: string;
    children: ReactNode;
    className?: string;
    variant?: 'default' | 'dark' | 'gradient' | 'overlay';
}

export const SectionWrapper = ({ id, children, className = '', variant = 'default' }: SectionWrapperProps) => {
    const baseClasses = variant === 'overlay'
        ? 'relative z-10 overflow-hidden'
        : 'relative z-10 overflow-hidden border-t border-white/5';
    const variantClasses = {
        default: 'bg-[#0a0a0c]',
        dark: 'bg-[#0d0d10]',
        gradient: 'bg-gradient-to-b from-[#0d0d10] to-[#0a0a0c]',
        overlay: 'bg-transparent',
    };

    return (
        <section id={id} className={`${baseClasses} ${variantClasses[variant]} ${className}`}>
            {variant !== 'overlay' && (
                <>
                    {/* Background blurs */}
                    <div className="absolute inset-0 pointer-events-none">
                        <div className="absolute top-[10%] right-[10%] w-64 h-64 bg-accent/5 rounded-full blur-3xl animate-float" />
                        <div className="absolute bottom-[20%] left-[5%] w-48 h-48 bg-blue-600/5 rounded-full blur-3xl animate-float" style={{ animationDelay: '-3s' }} />
                        <div className="absolute top-[50%] right-[20%] w-32 h-32 bg-purple-600/5 rounded-full blur-3xl animate-float" style={{ animationDelay: '-5s' }} />
                    </div>
                    {/* Grid overlay */}
                    <div className="absolute inset-0 bg-grid opacity-[0.03] pointer-events-none" />
                </>
            )}
            <div className="relative z-10">
                {children}
            </div>
        </section>
    );
};
