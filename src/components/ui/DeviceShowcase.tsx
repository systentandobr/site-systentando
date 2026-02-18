import { useState, useEffect } from 'react';

interface DeviceShowcaseProps {
    className?: string;
}

const apps = [
    {
        name: "LevantaDAI | Bora Treinar!",
        url: "https://site.deacademias.com.br/",
        color: "emerald"
    },
    {
        name: "TaDeVolta | Member Get Member",
        url: "https://seucliente.tadevolta.com.br/",
        color: "blue"
    }
];

export const DeviceShowcase = ({ className }: DeviceShowcaseProps) => {
    const [currentAppIdx, setCurrentAppIdx] = useState(0);
    const [scrolling, setScrolling] = useState(false);

    useEffect(() => {
        const interval = setInterval(() => {
            setCurrentAppIdx((prev) => (prev + 1) % apps.length);
        }, 15000); // 15 seconds per app

        return () => clearInterval(interval);
    }, []);

    useEffect(() => {
        // Simple scroll simulation delay
        setScrolling(false);
        const timer = setTimeout(() => setScrolling(true), 2000);
        return () => clearTimeout(timer);
    }, [currentAppIdx]);

    return (
        <div className={`relative flex items-center justify-center gap-8 ${className}`}>
            {/* Main Phone Frame */}
            <div className="relative w-[280px] h-[580px] md:w-[320px] md:h-[650px] bg-[#0a0a0c] rounded-[3rem] border-[8px] border-[#1a1a20] shadow-2xl overflow-hidden group">
                {/* Speaker/Sensors Notch */}
                <div className="absolute top-0 left-1/2 -translate-x-1/2 w-32 h-6 bg-[#1a1a20] rounded-b-2xl z-30 flex items-center justify-center gap-2">
                    <div className="w-8 h-1 bg-white/10 rounded-full"></div>
                    <div className="w-2 h-2 bg-white/10 rounded-full"></div>
                </div>

                {/* Iframe Container with Simulated Scroll */}
                <div className="absolute inset-x-0 top-0 bottom-0 bg-[#0a0a0c] z-10">
                    <div
                        className={`w-full h-[400%] transition-transform duration-[12000ms] ease-in-out ${scrolling ? '-translate-y-[75%]' : 'translate-y-0'}`}
                    >
                        <iframe
                            src={apps[currentAppIdx].url}
                            className="w-full h-full border-none pointer-events-none"
                            title={apps[currentAppIdx].name}
                        />
                    </div>
                </div>

                {/* Overlay/Reflection */}
                <div className="absolute inset-0 bg-gradient-to-tr from-white/5 to-transparent pointer-events-none z-20"></div>

                {/* App Badge */}
                <div className="absolute bottom-10 left-1/2 -translate-x-1/2 z-40 animate-in fade-in slide-in-from-bottom-4 duration-500">
                    <div className="bg-[#15151a]/80 backdrop-blur-xl border border-white/20 px-6 py-3 rounded-2xl text-[11px] font-bold text-white shadow-2xl tracking-tight flex items-center gap-3">
                        <div className={`w-2 h-2 rounded-full ${apps[currentAppIdx].color === 'emerald' ? 'bg-emerald-500' : 'bg-blue-500'} animate-pulse`}></div>
                        {apps[currentAppIdx].name}
                    </div>
                </div>
            </div>

            {/* Secondary Phone Frame (Canted/Offset) */}
            <div className="hidden lg:block relative w-[280px] h-[580px] bg-[#0a0a0c] rounded-[3rem] border-[8px] border-[#1a1a20] shadow-2xl overflow-hidden opacity-40 scale-90 translate-x-12 -rotate-6 blur-[1px]">
                <div className="absolute inset-0 bg-gradient-to-b from-emerald-500/10 to-transparent"></div>
                <iframe
                    src={apps[(currentAppIdx + 1) % apps.length].url}
                    className="w-full h-full border-none pointer-events-none"
                    title="Secondary App"
                />
            </div>

            {/* Background Glow */}
            <div className={`absolute inset-0 -z-10 blur-[100px] opacity-20 transition-colors duration-1000 ${apps[currentAppIdx].color === 'emerald' ? 'bg-emerald-500' : 'bg-blue-500'}`}></div>
        </div>
    );
};
