import { ChevronRight, ExternalLink, ArrowRight } from 'lucide-react';
import { ProjectCardProps, EcosystemColor, ProjectLink } from '../../types';

export const ProjectCard = ({ title, category, icon, description, features, techs, links, color }: ProjectCardProps) => {
    const colors: Record<EcosystemColor, string> = {
        emerald: "hover:border-emerald-500/50 group-hover:shadow-emerald-900/20",
        blue: "hover:border-blue-500/50 group-hover:shadow-blue-900/20",
        purple: "hover:border-purple-500/50 group-hover:shadow-purple-900/20",
        orange: "hover:border-orange-500/50 group-hover:shadow-orange-900/20",
    };

    return (
        <div className={`group bg-[#15151a] rounded-2xl p-8 border border-white/5 transition-all duration-300 hover:-translate-y-2 hover:shadow-2xl ${colors[color]}`}>
            <div className="flex justify-between items-start mb-6">
                <div className="flex gap-4 items-center">
                    <div className="p-3 bg-[#0a0a0c] rounded-xl border border-white/5">
                        {icon}
                    </div>
                    <div>
                        <h3 className="text-xl font-bold text-white group-hover:text-emerald-400 transition-colors">{title}</h3>
                        <span className="text-xs font-semibold text-slate-500 uppercase tracking-wider">{category}</span>
                    </div>
                </div>
                {links.length > 0 && (
                    <a href={links[0].url} target="_blank" rel="noopener noreferrer" className="text-slate-500 hover:text-white transition-colors">
                        <ExternalLink size={20} />
                    </a>
                )}
            </div>

            <p className="text-slate-400 text-sm mb-6 leading-relaxed min-h-[60px]">
                {description}
            </p>

            <div className="mb-6">
                <h4 className="text-xs font-semibold text-slate-300 mb-3 uppercase">Destaques</h4>
                <ul className="space-y-2">
                    {features.map((feat: string, i: number) => (
                        <li key={i} className="flex items-start gap-2 text-sm text-slate-400">
                            <ChevronRight size={14} className="mt-1 text-emerald-500 flex-shrink-0" />
                            {feat}
                        </li>
                    ))}
                </ul>
            </div>

            <div className="pt-6 border-t border-white/5 flex flex-wrap items-center justify-between gap-4">
                <div className="flex gap-2">
                    {techs.map((tech: string, i: number) => (
                        <span key={i} className="px-2 py-1 bg-[#0a0a0c] border border-white/5 rounded text-xs text-slate-400">
                            {tech}
                        </span>
                    ))}
                </div>

                <div className="flex gap-3">
                    {links.map((link: ProjectLink, i: number) => (
                        <a
                            key={i}
                            href={link.url}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="text-xs font-bold text-emerald-500 hover:text-emerald-400 flex items-center gap-1"
                        >
                            {link.label}
                            <ArrowRight size={12} />
                        </a>
                    ))}
                </div>
            </div>
        </div>
    );
};
