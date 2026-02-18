import { SocialFeedCard } from '../ui/SocialFeedCard';
import { DeviceShowcase } from '../ui/DeviceShowcase';

export const SocialSection = () => {
    return (
        <section id="social" className="py-24 relative overflow-hidden z-10">
            <div className="container mx-auto px-6">
                <div className="flex flex-col lg:flex-row items-center gap-12 lg:gap-24 mb-24">
                    {/* Left Side: Content */}
                    <div className="flex-1 text-left">
                        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-blue-500/10 border border-blue-500/20 text-blue-400 text-xs font-medium mb-6">
                            <span className="relative flex h-2 w-2">
                                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-blue-400 opacity-75"></span>
                                <span className="relative inline-flex rounded-full h-2 w-2 bg-blue-500"></span>
                            </span>
                            Alcance Global
                        </div>
                        <h2 className="text-4xl md:text-5xl font-bold text-white mb-6 leading-tight">
                            Conectado<br /><span className="text-blue-500">Em todo lugar.</span>
                        </h2>
                        <p className="text-slate-400 text-lg max-w-xl mb-12 leading-relaxed">
                            Nossa arquitetura alimenta interações sociais e profissionais via smartphone, integrando o ecossistema à rotina das pessoas.
                        </p>

                        <div className="flex gap-8 mb-12">
                            <div>
                                <div className="text-3xl font-bold text-white mb-1">100+</div>
                                <div className="text-xs font-bold text-slate-500 uppercase tracking-wider">Usuários Ativos Diários</div>
                            </div>
                            <div>
                                <div className="text-3xl font-bold text-emerald-500 mb-1">99.9%</div>
                                <div className="text-xs font-bold text-slate-500 uppercase tracking-wider">Uptime SLA</div>
                            </div>
                        </div>
                    </div>

                    {/* Right Side: Device Showcase */}
                    <div className="flex-1 w-full lg:w-auto">
                        <DeviceShowcase />
                    </div>
                </div>

                {/* Bottom: Social Feed Cards */}
                <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
                    <SocialFeedCard
                        platform="Instagram"
                        handle="@systentandobr"
                        content="Acompanhe o workflow de desenvolvimento da nossa nova IA para o GymApp! 🚀"
                        image="https://lh3.googleusercontent.com/aida/AOfcidX7UITrmz_SCV6u8QfF_qns_PcSrzDkQYvo7UzmDAvE2b1r_94h7Pew-LH67DNePQBgkOf0CdkpMs3lNBjPLCFkcA0XQPC82eAEAeEwkTe3LF556ijedRm6AnrN7h_VrEelL1PsW8ekjo2c986YFdNk_4SSWiR6v4Ixju0T0yayqUeXiE1lPeb4YA3j9a4nvrSwqBwCJPgJ8p-yY79M9rMl2enL43AtskcjqzWqUjuzPqRllDkKZ5bd9xl6"
                    />
                    <SocialFeedCard
                        platform="LinkedIn"
                        handle="Systentando Ecosystem"
                        content="Como escalamos N aplicações SaaS com um único Monorepo Python. #Arquitetura #CleanCode"
                        image="https://lh3.googleusercontent.com/aida/AOfcidUEUqueDuaVMz71qQtyzyK9vYn1DpiJp-dtMkpbACASEyQIVlvVav4uhFZ0h1ECW2Po4B_DPsxeOvqmupxZGfdcJGdOzACuaWsBM5hUHt473JQb5UWwby19Nlr_lxgQf2RGGIyJ_eOD4Ih51SOG8gJmMeoljAYzKrkI-SEOyn1eH442gRKcguXUEdRc2HmDFeKO9Td5JaA_iaAWWiQ8yINh_pDaTVkyp5f_7ZNpsRAhkmw55-NlPPGoIXQK"
                    />
                    <SocialFeedCard
                        platform="GitHub"
                        handle="Ecosystem Hub"
                        content="Novo PR: Agentes RAG integrados ao núcleo TaDeVolta. Roadmap 2024 a todo vapor!"
                        image="https://lh3.googleusercontent.com/aida/AOfcidX6LbSZoIWTmpG9eNBFbPCObz7-Z0Jiyy3SK34dipT8h1gQbUTjFFrVIR9PHZL1I5Pv3D52T5Alwf3ldQwAQtROBb5Zi8uldKitMt5-hPVlVD-_z8z4d2iAZC2drsZ3-i3fQ9SFL2K2emIT_nwVshDKsHWbc_f0r3eHVZbywb1CHw9cyJJCxrzT6b4UEo6NNv5QDu2W75TG86Nuzy4th6SNLUNHmX6jvM6evhhqdNNo_hBY3q8q9fXoUFad"
                    />
                </div>
            </div>
        </section>
    );
};
