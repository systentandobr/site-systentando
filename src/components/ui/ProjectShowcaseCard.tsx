import { ChevronRight, ExternalLink, ArrowRight } from 'lucide-react';
import { ProjectShowcaseProps, EcosystemColor, ProjectLink } from '../../types';

export const ProjectShowcaseCard = ({
    title,
    category,
    icon,
    description,
    features,
    techs,
    links,
    color,
    image,
    badge,
    date,
}: ProjectShowcaseProps) => {
    const colorClasses: Record<EcosystemColor, string> = {
        emerald: 'from-accent/20 to-accent/5',
        blue: 'from-blue-500/20 to-blue-500/5',
        purple: 'from-purple-500/20 to-purple-500/5',
        orange: 'from-orange-500/20 to-orange-500/5',
    };

    return (
        <div className="group bg-[#15151a] rounded-2xl overflow-hidden border border-white/5 transition-all duration-300 hover:-translate-y-2 hover:shadow-2xl hover:border-accent/30">
            {/* Image or placeholder */}
            <div className="relative aspect-video overflow-hidden">
                {image ? (
                    <img
                        src={image}
                        alt={title}
                        className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                    />
                ) : (
                    <div
                        className={`w-full h-full bg-gradient-to-br ${colorClasses[color]} flex items-center justify-center`}
                    >
                        <div className="opacity-40 group-hover:opacity-60 transition-opacity">
                            {icon}
                        </div>
                    </div>
                )}
                <div className="absolute inset-0 bg-gradient-to-t from-[#15151a] via-transparent to-transparent opacity-80" />
                {(badge || date) && (
                    <div className="absolute top-4 left-4 flex gap-2">
                        {badge && (
                            <span className="px-3 py-1 bg-[#0a0a0c]/80 backdrop-blur-sm border border-white/10 rounded-full text-xs font-mono text-slate-300">
                                {badge}
                            </span>
                        )}
                        {date && (
                            <span className="px-3 py-1 bg-[#0a0a0c]/80 backdrop-blur-sm border border-white/10 rounded-full text-xs font-mono text-slate-400">
                                {date}
                            </span>
                        )}
                    </div>
                )}
            </div>

            <div className="p-6 md:p-8">
                <div className="flex justify-between items-start mb-4">
                    <div>
                        <h3 className="text-xl font-bold text-white group-hover:text-accent transition-colors">
                            {title}
                        </h3>
                        <span className="text-xs font-semibold text-slate-500 uppercase tracking-wider">
                            {category}
                        </span>
                    </div>
                    {links.length > 0 && (
                        <a
                            href={links[0].url}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="text-slate-500 hover:text-white transition-colors"
                        >
                            <ExternalLink size={20} />
                        </a>
                    )}
                </div>

                <p className="text-slate-400 text-sm mb-6 leading-relaxed min-h-[48px]">
                    {description}
                </p>

                <div className="mb-6">
                    <h4 className="text-xs font-semibold text-slate-300 mb-3 uppercase">Destaques</h4>
                    <ul className="space-y-2">
                        {features.slice(0, 3).map((feat: string, i: number) => (
                            <li key={i} className="flex items-start gap-2 text-sm text-slate-400">
                                <ChevronRight size={14} className="mt-1 text-accent flex-shrink-0" />
                                {feat}
                            </li>
                        ))}
                    </ul>
                </div>

                <div className="pt-6 border-t border-white/5 flex flex-wrap items-center justify-between gap-4">
                    <div className="flex gap-2">
                        {techs.slice(0, 4).map((tech: string, i: number) => (
                            <span
                                key={i}
                                className="px-2 py-1 bg-[#0a0a0c] border border-white/5 rounded text-xs text-slate-400"
                            >
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
                                className="text-xs font-bold text-accent hover:text-accent/80 flex items-center gap-1"
                            >
                                {link.label}
                                <ArrowRight size={12} />
                            </a>
                        ))}
                    </div>
                </div>
            </div>
        </div>
    );
};
