import { FeatureRowProps } from '../../types';

export const FeatureRow = ({ icon, title, text }: FeatureRowProps) => (
    <div className="flex gap-4 items-start">
        <div className="mt-1 text-emerald-400">
            {icon}
        </div>
        <div>
            <h4 className="font-bold text-white mb-1">{title}</h4>
            <p className="text-sm text-slate-400">{text}</p>
        </div>
    </div>
);
