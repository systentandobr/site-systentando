import { ExternalLink } from 'lucide-react';
import { SocialFeedCardProps } from '../../types';

export const SocialFeedCard = ({ platform, handle, content, image }: SocialFeedCardProps) => (
    <div className="bg-[#15151a]/60 backdrop-blur-xl rounded-3xl overflow-hidden border border-white/10 shadow-2xl hover:scale-[1.02] transition-transform duration-300">
        <div className="p-4 flex items-center justify-between border-b border-white/5">
            <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-full bg-gradient-to-tr from-emerald-500 to-blue-500 flex items-center justify-center text-white text-xs font-bold">
                    {handle[0].toUpperCase()}
                </div>
                <div>
                    <h4 className="text-sm font-bold text-white leading-tight">{handle}</h4>
                    <p className="text-[10px] text-slate-500">{platform}</p>
                </div>
            </div>
            <ExternalLink size={16} className="text-slate-600" />
        </div>
        <div className="aspect-square relative flex items-center justify-center overflow-hidden">
            <img src={image} alt="Social feed" className="w-full h-full object-cover opacity-80" />
            <div className="absolute inset-0 bg-gradient-to-t from-[#15151a] to-transparent"></div>
        </div>
        <div className="p-5">
            <p className="text-sm text-slate-300 leading-relaxed italic">
                "{content}"
            </p>
        </div>
    </div>
);
