import { WorkflowGraphProps } from '../../types';

export const WorkflowGraph = ({ nodes, connections }: WorkflowGraphProps) => {
    return (
        <div className="relative w-full aspect-[16/9] md:aspect-video max-w-5xl mx-auto bg-[#0a0a0c]/50 border border-white/5 rounded-3xl overflow-hidden backdrop-blur-sm min-h-[400px] md:min-h-0">
            {/* Grid Background */}
            <div className="absolute inset-0 opacity-[0.03]" style={{ backgroundImage: 'radial-gradient(#34d399 0.5px, transparent 0.5px)', backgroundSize: '24px 24px' }}></div>

            {/* Connection Lines (SVG) - Visible only on Desktop */}
            <svg className="absolute inset-0 w-full h-full pointer-events-none hidden md:block" viewBox="0 0 100 100" preserveAspectRatio="none">
                <defs>
                    <linearGradient id="flow-gradient" x1="0%" y1="0%" x2="100%" y2="0%">
                        <stop offset="0%" stopColor="#10b981" stopOpacity="0" />
                        <stop offset="50%" stopColor="#10b981" stopOpacity="0.5" />
                        <stop offset="100%" stopColor="#3b82f6" stopOpacity="0" />
                    </linearGradient>
                </defs>
                {connections.map((conn: { from: string; to: string; type?: string }, idx: number) => {
                    const fromNode = nodes.find((n: any) => n.id === conn.from);
                    const toNode = nodes.find((n: any) => n.id === conn.to);
                    if (!fromNode || !toNode) return null;

                    const d = `M ${fromNode.position.x} ${fromNode.position.y} C ${(fromNode.position.x + toNode.position.x) / 2} ${fromNode.position.y}, ${(fromNode.position.x + toNode.position.x) / 2} ${toNode.position.y}, ${toNode.position.x} ${toNode.position.y}`;

                    return (
                        <g key={idx}>
                            <path
                                d={d}
                                stroke="white"
                                strokeOpacity="0.05"
                                strokeWidth="1"
                                fill="none"
                            />
                            {conn.type === 'flowing' && (
                                <path
                                    d={d}
                                    stroke="url(#flow-gradient)"
                                    strokeWidth="2"
                                    fill="none"
                                    strokeDasharray="20 100"
                                    className="animate-dash"
                                />
                            )}
                        </g>
                    );
                })}
            </svg>

            {/* Mobile Vertical Pipeline (Visible only on Mobile) */}
            <div className="absolute top-0 bottom-0 left-1/2 w-px bg-white/5 md:hidden"></div>

            {/* Nodes Container */}
            <div className="relative w-full h-full flex flex-col md:block items-center justify-center gap-8 p-8 md:p-0 overflow-y-auto md:overflow-hidden">
                {nodes.map((node: any) => {
                    const Icon = node.icon;
                    return (
                        <div
                            key={node.id}
                            className="relative md:absolute md:-translate-x-1/2 md:-translate-y-1/2 group cursor-default w-full md:w-auto flex items-center justify-center md:block"
                            style={{
                                left: typeof window !== 'undefined' && window.innerWidth >= 768 ? `${node.position.x}%` : 'auto',
                                top: typeof window !== 'undefined' && window.innerWidth >= 768 ? `${node.position.y}%` : 'auto'
                            }}
                        >
                            <div className="relative w-full max-w-[280px] md:max-w-none">
                                {/* Pulse effect for active nodes */}
                                {node.status === 'active' && (
                                    <div className="absolute inset-0 bg-emerald-500/20 rounded-xl blur-xl animate-pulse"></div>
                                )}

                                <div className="relative bg-[#15151a] border border-white/10 rounded-xl p-3 flex items-center gap-3 shadow-2xl transition-all duration-300 group-hover:border-emerald-500/30 group-hover:scale-105">
                                    <div className={`p-2 rounded-lg bg-[#0a0a0c] ${node.status === 'active' ? 'text-emerald-400' : 'text-slate-500'}`}>
                                        <Icon size={18} />
                                    </div>
                                    <div className="min-w-[100px] flex-1">
                                        <h5 className="text-xs font-bold text-white leading-none mb-1">{node.label}</h5>
                                        {node.subtext && <p className="text-[10px] text-slate-500 leading-none">{node.subtext}</p>}
                                    </div>

                                    {node.status === 'active' && (
                                        <div className="w-1.5 h-1.5 rounded-full bg-emerald-500 animate-pulse"></div>
                                    )}
                                </div>
                            </div>
                        </div>
                    );
                })}
            </div>
        </div>
    );
};
