import { useEffect, useRef, useState } from 'react';
import type { ReactNode } from 'react';
import { ArrowRight } from 'lucide-react';
import { useScroll, useMotionValueEvent } from 'framer-motion';

interface HeroSectionProps {
    scrollToSection: (id: string) => void;
    onOpenLeadModal: () => void;
    children?: ReactNode;
}

const VIDEO_SRC = '/assets/Video_202603042335.mp4';

/** Primeira dobra: 0-4s | Segunda dobra: 4s até o fim (aproveitando 250vh) */
const FIRST_FOLD_RATIO = 100 / 250; // 100vh da primeira dobra em 250vh total
const VIDEO_SECOND_START = 4; // segundos

function scrollProgressToVideoTime(progress: number, duration: number): number {
    if (progress <= FIRST_FOLD_RATIO) {
        return (progress / FIRST_FOLD_RATIO) * VIDEO_SECOND_START;
    }
    const secondSegmentProgress = (progress - FIRST_FOLD_RATIO) / (1 - FIRST_FOLD_RATIO);
    return VIDEO_SECOND_START + secondSegmentProgress * (duration - VIDEO_SECOND_START);
}

export const HeroSection = ({ scrollToSection, onOpenLeadModal, children }: HeroSectionProps) => {
    const heroRef = useRef<HTMLElement>(null);
    const videoRef = useRef<HTMLVideoElement>(null);
    const containerRef = useRef<HTMLDivElement>(null);
    const [videoReady, setVideoReady] = useState(false);

    const { scrollYProgress } = useScroll({
        target: heroRef,
        offset: ['start start', 'end end'],
    });

    useMotionValueEvent(scrollYProgress, 'change', (progress: number) => {
        const video = videoRef.current;
        if (!video || !videoReady) return;
        if (video.duration && !Number.isNaN(video.duration)) {
            video.currentTime = scrollProgressToVideoTime(progress, video.duration);
        }
    });

    useEffect(() => {
        const elements = containerRef.current?.querySelectorAll('.reveal-up');
        elements?.forEach((el, i) => {
            setTimeout(() => el.classList.add('active'), 100 * i);
        });
    }, []);

    const handleVideoLoadedMetadata = () => {
        setVideoReady(true);
    };

    return (
        <header
            ref={heroRef}
            className="relative min-h-[200vh] md:min-h-[250vh] overflow-hidden"
        >
            {/* Sticky Video Container - fullscreen Apple style */}
            <div className="sticky top-0 h-screen w-full overflow-hidden will-change-transform">
                <video
                    ref={videoRef}
                    src={VIDEO_SRC}
                    className="absolute inset-0 w-full h-full object-cover"
                    muted
                    playsInline
                    preload="metadata"
                    aria-hidden
                    onLoadedMetadata={handleVideoLoadedMetadata}
                />
                {/* Fallback gradient when video not loaded */}
                {!videoReady && (
                    <div
                        className="absolute inset-0 bg-gradient-to-br from-[#0a0a0c] via-[#0f0f13] to-accent/10"
                        aria-hidden
                    />
                )}
                {/* Overlay for text readability */}
                <div
                    className="absolute inset-0 pointer-events-none"
                    style={{
                        background:
                            'linear-gradient(to bottom, transparent 20%, rgba(10,10,12,0.5) 60%, rgba(10,10,12,0.85) 100%)',
                    }}
                />
            </div>

            {/* Content Overlay - responsivo e otimizado */}
            <div className="absolute inset-0 top-0 left-0 right-0 h-screen flex flex-col justify-center items-center px-4 sm:px-6 md:px-12 lg:px-16 pointer-events-none z-10">
                <div ref={containerRef} className="w-full max-w-4xl text-left pointer-events-auto mx-auto sm:mx-auto sm:ml-auto sm:mr-0 md:ml-[35%] lg:ml-[42%]">
                    {/* Badge - Design System */}
                    <div className="inline-flex items-center gap-2 sm:gap-3 mb-4 sm:mb-6 reveal-up flex-wrap">
                        <span className="w-2 h-2 bg-accent rounded-full animate-pulse flex-shrink-0" />
                        <span className="text-[10px] sm:text-xs font-mono uppercase tracking-[0.15em] sm:tracking-[0.2em] text-slate-400">
                            Ecossistema SystentandoBR
                        </span>
                        <span className="w-8 sm:w-12 h-px bg-accent/50 hidden sm:block" />
                        <span
                            className="w-2 h-2 bg-accent rounded-full animate-pulse hidden sm:block flex-shrink-0"
                            style={{ animationDelay: '0.5s' }}
                        />
                    </div>

                    <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-bold text-white mb-4 sm:mb-6 leading-[1.1] sm:leading-[1.15] font-display text-glow break-words">
                        <span className="reveal-up delay-100 block">Vamos criar algo</span>
                        <span className="reveal-up delay-200 block">extraordinário juntos.</span>
                        <span className="reveal-up delay-300 block">Um MVP que marque,</span>
                        <span className="reveal-up delay-300 block italic">converta e venda.</span>
                    </h1>

                    <p className="text-sm sm:text-base md:text-lg lg:text-xl text-slate-100 max-w-full sm:max-w-2xl mb-6 sm:mb-8 md:mb-10 leading-relaxed reveal-up delay-500 hero-paragraph-contrast break-words">
                        Cada linha de código tem um propósito. A infraestrutura certa transforma sua ideia em uma máquina de resultados desde o primeiro dia.
                    </p>

                    <div className="flex flex-col sm:flex-row justify-start gap-3 sm:gap-4 reveal-up delay-700">
                        <button
                            onClick={onOpenLeadModal}
                            className="btn-glow px-5 sm:px-6 md:px-8 py-3 sm:py-4 rounded-full font-bold flex items-center justify-center gap-2 group shadow-lg shadow-accent/20 hover:shadow-xl transition-all hover:-translate-y-1 w-full sm:w-auto"
                        >
                            <span className="relative z-10 flex items-center gap-2 text-xs sm:text-sm font-medium tracking-wide whitespace-nowrap">
                                Criar Seu Ecossistema{' '}
                                <ArrowRight
                                    size={18}
                                    className="w-4 h-4 sm:w-5 sm:h-5 group-hover:translate-x-1 transition-transform flex-shrink-0"
                                />
                            </span>
                        </button>
                        <button
                            onClick={() => scrollToSection('o-que-resolvemos')}
                            className="btn-shimmer px-5 sm:px-6 md:px-8 py-3 sm:py-4 rounded-full font-bold flex items-center justify-center gap-2 transition-all hover:-translate-y-1 w-full sm:w-auto"
                        >
                            <span className="relative z-10 text-xs sm:text-sm font-medium tracking-wide whitespace-nowrap">
                                O que resolvemos
                            </span>
                        </button>
                    </div>
                </div>

                {/* Scroll indicator */}
                <div className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 opacity-60">
                    <span className="text-[10px] font-mono uppercase tracking-widest text-accent/80">
                        Scroll
                    </span>
                    <div className="w-px h-8 bg-slate-600 overflow-hidden relative">
                        <div className="absolute top-0 left-0 w-full h-full bg-accent animate-scroll-line" />
                    </div>
                </div>
            </div>

            {/* Segunda dobra: Stats e OQue sobrepostos ao vídeo */}
            {children && (
                <div className="relative z-10 min-h-[150vh]">
                    {children}
                </div>
            )}
        </header>
    );
};
