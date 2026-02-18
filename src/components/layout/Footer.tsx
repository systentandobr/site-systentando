import { Activity, Github, Globe } from 'lucide-react';

export const Footer = () => {
    return (
        <footer className="py-12 border-t border-white/5 bg-[#050507] text-sm text-slate-500 relative z-10">
            <div className="container mx-auto px-6">
                <div className="grid md:grid-cols-4 gap-8 mb-8">
                    <div className="col-span-1 md:col-span-2">
                        <div className="flex items-center gap-2 mb-4">
                            <Activity className="text-emerald-500 w-6 h-6" />
                            <span className="text-lg font-bold text-slate-200">Systentando</span>
                        </div>
                        <p className="max-w-xs">
                            Acelerando o desenvolvimento de SaaS através de um ecossistema colaborativo e infraestrutura compartilhada.
                        </p>
                    </div>

                    <div>
                        <h4 className="text-white font-semibold mb-4">Ecossistema</h4>
                        <ul className="space-y-2">
                            <li><a href="#" className="hover:text-emerald-400 transition-colors">GymApp</a></li>
                            <li><a href="#" className="hover:text-emerald-400 transition-colors">TaDeVolta</a></li>
                            <li><a href="#" className="hover:text-emerald-400 transition-colors">ViralKids</a></li>
                        </ul>
                    </div>

                    <div>
                        <h4 className="text-white font-semibold mb-4">Links</h4>
                        <ul className="space-y-2">
                            <li><a href="https://github.com/systentandobr" className="hover:text-emerald-400 transition-colors">GitHub</a></li>
                            <li><a href="#" className="hover:text-emerald-400 transition-colors">Documentação</a></li>
                            <li><a href="#" className="hover:text-emerald-400 transition-colors">Comunidade</a></li>
                        </ul>
                    </div>
                </div>
                <div className="border-t border-white/5 pt-8 flex flex-col md:flex-row justify-between items-center gap-4">
                    <p>&copy; {new Date().getFullYear()} Systentando Ecossistema. Open Source Initiative.</p>
                    <div className="flex gap-4">
                        <a href="#" className="hover:text-emerald-400"><Github size={20} /></a>
                        <a href="#" className="hover:text-emerald-400"><Globe size={20} /></a>
                    </div>
                </div>
            </div>
        </footer>
    );
};
