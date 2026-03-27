import { useEffect, useRef, useState, useCallback } from 'react';

interface TerminalLine {
    type: 'input' | 'output' | 'success' | 'error' | 'comment';
    content: string;
    delay?: number;
}

export type { TerminalLine };

interface TerminalSimulatorProps {
    lines: TerminalLine[];
    title?: string;
    autoStart?: boolean;
    typingSpeed?: number;
    showCursor?: boolean;
    onComplete?: () => void;
}

export const TerminalSimulator = ({
    lines,
    title = 'Terminal',
    autoStart = true,
    typingSpeed = 30,
    showCursor = true,
    onComplete,
}: TerminalSimulatorProps) => {
    const [displayedContent, setDisplayedContent] = useState<Array<TerminalLine | null>>([]);
    const [isTyping, setIsTyping] = useState(false);
    const [currentIndex, setCurrentIndex] = useState(0);
    const containerRef = useRef<HTMLDivElement>(null);
    const isRunningRef = useRef(false);
    const linesRef = useRef(lines);

    // Keep lines ref updated
    useEffect(() => {
        linesRef.current = lines;
    }, [lines]);

    const typeNextLine = useCallback(async () => {
        if (!isRunningRef.current) return;

        const currentLines = linesRef.current;
        if (currentIndex >= currentLines.length) {
            isRunningRef.current = false;
            setIsTyping(false);
            onComplete?.();
            return;
        }

        const line = currentLines[currentIndex];
        setIsTyping(true);

        // Handle delay before showing line
        if (line.delay && line.delay > 0) {
            await new Promise(resolve => setTimeout(resolve, line.delay));
        }

        if (!isRunningRef.current) return;

        // For input lines, animate character by character
        if (line.type === 'input') {
            const chars = line.content.split('');
            for (const char of chars) {
                if (!isRunningRef.current) return;
                setDisplayedContent(prev => {
                    const newContent = [...prev];
                    newContent[currentIndex] = { ...line, content: prev[currentIndex]?.content + char || char };
                    return newContent;
                });
                await new Promise(resolve => setTimeout(resolve, typingSpeed));
            }
        } else {
            // For non-input lines, show immediately
            setDisplayedContent(prev => {
                const newContent = [...prev];
                newContent[currentIndex] = line;
                return newContent;
            });
        }

        // Move to next line
        setCurrentIndex(prev => prev + 1);
    }, [currentIndex, typingSpeed, onComplete]);

    useEffect(() => {
        if (!autoStart) return;

        isRunningRef.current = true;
        typeNextLine();

        return () => {
            isRunningRef.current = false;
        };
    }, [autoStart]);

    useEffect(() => {
        if (currentIndex > 0 && currentIndex <= linesRef.current.length) {
            typeNextLine();
        }
    }, [currentIndex]);

    useEffect(() => {
        if (containerRef.current) {
            containerRef.current.scrollTop = containerRef.current.scrollHeight;
        }
    }, [displayedContent]);

    const getLineClass = (type: TerminalLine['type'] | undefined) => {
        switch (type) {
            case 'input':
                return 'text-accent';
            case 'output':
                return 'text-slate-300';
            case 'success':
                return 'text-emerald-400';
            case 'error':
                return 'text-red-400';
            case 'comment':
                return 'text-slate-500 italic';
            default:
                return 'text-slate-300';
        }
    };

    const getPromptSymbol = (type: TerminalLine['type'] | undefined) => {
        switch (type) {
            case 'input':
                return <span className="text-accent mr-2">$</span>;
            case 'success':
                return <span className="text-emerald-400 mr-2">✓</span>;
            case 'error':
                return <span className="text-red-400 mr-2">✗</span>;
            default:
                return null;
        }
    };

    return (
        <div className="reveal-up">
            <div className="bg-[#0a0a0c] border border-accent/30 rounded-xl overflow-hidden shadow-2xl shadow-accent/10">
                {/* Terminal Header */}
                <div className="px-4 py-3 bg-[#15151a] border-b border-white/5 flex items-center justify-between">
                    <div className="flex items-center gap-2">
                        <div className="flex gap-1.5">
                            <div className="w-3 h-3 rounded-full bg-red-500/80"></div>
                            <div className="w-3 h-3 rounded-full bg-yellow-500/80"></div>
                            <div className="w-3 h-3 rounded-full bg-green-500/80"></div>
                        </div>
                        <span className="text-xs text-slate-400 font-mono ml-2">{title}</span>
                    </div>
                    <div className="flex items-center gap-2">
                        <span className="text-[10px] text-slate-500 font-mono">bash</span>
                    </div>
                </div>

                {/* Terminal Content */}
                <div
                    ref={containerRef}
                    className="p-4 h-64 overflow-y-auto font-mono text-sm space-y-1"
                >
                    {displayedContent.map((line, i) => {
                        if (!line) {
                            return (
                                <div key={i} className="flex items-start">
                                    <span className="text-slate-600">...</span>
                                </div>
                            );
                        }
                        return (
                            <div key={i} className="flex items-start">
                                {getPromptSymbol(line.type)}
                                <span className={`flex-1 ${getLineClass(line.type)}`}>
                                    {line.content}
                                </span>
                                {showCursor && isTyping && i === currentIndex - 1 && (
                                    <span className="w-2 h-4 bg-accent animate-pulse ml-1"></span>
                                )}
                            </div>
                        );
                    })}
                    {!isTyping && displayedContent.length === lines.length && showCursor && (
                        <div className="flex items-center">
                            <span className="text-accent mr-2">$</span>
                            <span className="w-2 h-4 bg-accent animate-pulse"></span>
                        </div>
                    )}
                </div>
            </div>
        </div>
    );
};
