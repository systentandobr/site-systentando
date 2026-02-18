import { AppNodeProps, EcosystemColor } from '../../types';

export const AppNode = ({ icon: Icon, title, desc, color }: AppNodeProps) => {
    const colors: Record<EcosystemColor, string> = {
        emerald: "border-l-emerald-500 text-emerald-400 bg-emerald-900/10",
        blue: "border-l-blue-500 text-blue-400 bg-blue-900/10",
        purple: "border-l-purple-500 text-purple-400 bg-purple-900/10",
        orange: "border-l-orange-500 text-orange-400 bg-orange-900/10",
    };

    return (
        <div className={`bg-[#15151a] p-4 rounded-r-lg border-l-4 ${colors[color]} flex items-center gap-4 hover:translate-x-2 transition-transform cursor-default shadow-lg border border-y-transparent border-r-transparent`}>
            <div className={`p-2 rounded bg-[#0a0a0c] ${colors[color].split(' ')[1]}`}>
                <Icon size={20} />
            </div>
            <div>
                <h4 className="font-bold text-slate-200">{title}</h4>
                <p className="text-xs text-slate-500">{desc}</p>
            </div>
        </div>
    );
};
