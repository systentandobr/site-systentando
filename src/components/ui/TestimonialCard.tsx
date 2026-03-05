import { TestimonialProps } from '../../types';

export const TestimonialCard = ({ author, handle, rating, content, avatarUrl }: TestimonialProps) => (
    <div className="bg-[#15151a] border border-white/10 rounded-2xl p-6 md:p-8 hover:border-accent/30 transition-all duration-300 hover:-translate-y-1">
        <div className="flex gap-1 mb-4 text-accent">
            {Array.from({ length: 5 }).map((_, i) => (
                <span key={i}>{i < rating ? '★' : '☆'}</span>
            ))}
        </div>
        <p className="text-slate-400 text-sm md:text-base leading-relaxed mb-6 italic">
            "{content}"
        </p>
        <div className="flex items-center gap-3">
            {avatarUrl ? (
                <img src={avatarUrl} alt={author} className="w-10 h-10 rounded-full object-cover" />
            ) : (
                <div className="w-10 h-10 rounded-full bg-accent/20 flex items-center justify-center text-accent font-bold">
                    {author[0]}
                </div>
            )}
            <div>
                <div className="font-semibold text-white">{author}</div>
                <div className="text-xs text-accent">{handle}</div>
            </div>
        </div>
    </div>
);
