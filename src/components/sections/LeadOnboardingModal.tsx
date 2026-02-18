import React, { useState } from 'react';
import { X, ChevronRight, Loader2, PartyPopper } from 'lucide-react';
import { LeadsService } from '../../services/api';
import { applyPhoneMask, validateEmail, validatePhone, formatCEP, isValidCEP } from '@/utils/formatters';
import * as cepPromise from 'cep-promise';

interface LeadOnboardingModalProps {
    isOpen: boolean;
    onClose: () => void;
    unitId: string;
}

export const LeadOnboardingModal: React.FC<LeadOnboardingModalProps> = ({ isOpen, onClose, unitId }) => {
    const [step, setStep] = useState(1);
    const [isSubmitting, setIsSubmitting] = useState(false);
    const [isSuccess, setIsSuccess] = useState(false);
    const [showPostOnboarding, setShowPostOnboarding] = useState(false);
    const [_, setLeadId] = useState<string | null>(null);
    const [error, setError] = useState<string | null>(null);

    const [formData, setFormData] = useState({
        name: '',
        businessName: '',
        businessType: '',
        cep: '',
        city: '',
        state: '',
        phone: '',
        email: '',
        howDidYouKnow: '',
    });

    const [validationErrors, setValidationErrors] = useState<Record<string, string>>({});
    const [isLoadingCep, setIsLoadingCep] = useState(false);

    if (!isOpen) return null;

    const handleCepChange = async (value: string) => {
        const maskedCep = formatCEP(value);
        setFormData({ ...formData, cep: maskedCep });

        // Limpar erro do CEP
        if (validationErrors.cep) {
            const newErrors = { ...validationErrors };
            delete newErrors.cep;
            setValidationErrors(newErrors);
        }

        // Buscar CEP quando tiver 8 dígitos
        const cleanedCep = maskedCep.replace(/\D/g, '');
        if (cleanedCep.length === 8) {
            setIsLoadingCep(true);
            try {
                // Usar default export ou named export dependendo da biblioteca
                const cepFunction = (cepPromise as any).default || cepPromise;
                const cepData = await cepFunction(cleanedCep);
                setFormData(prev => ({
                    ...prev,
                    cep: maskedCep,
                    city: cepData.city || prev.city,
                    state: cepData.state || prev.state,
                }));

                // Limpar erros de cidade e estado se foram preenchidos
                const newErrors = { ...validationErrors };
                if (cepData.city) delete newErrors.city;
                if (cepData.state) delete newErrors.state;
                setValidationErrors(newErrors);
            } catch (err) {
                // CEP não encontrado ou erro na busca
                setValidationErrors({
                    ...validationErrors,
                    cep: 'CEP não encontrado. Verifique e tente novamente.',
                });
            } finally {
                setIsLoadingCep(false);
            }
        } else if (cleanedCep.length < 8) {
            // Limpar cidade e estado se CEP incompleto
            setFormData(prev => ({
                ...prev,
                cep: maskedCep,
                city: '',
                state: '',
            }));
        }
    };

    const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
        const { name, value } = e.target;

        // Aplicar máscara de telefone
        if (name === 'phone') {
            const maskedValue = applyPhoneMask(value);
            setFormData({ ...formData, [name]: maskedValue });

            // Validar telefone em tempo real
            const error = validatePhone(maskedValue);
            if (error) {
                setValidationErrors({ ...validationErrors, phone: error });
            } else {
                const newErrors = { ...validationErrors };
                delete newErrors.phone;
                setValidationErrors(newErrors);
            }
        } else if (name === 'cep') {
            handleCepChange(value);
        } else if (name === 'email') {
            setFormData({ ...formData, [name]: value });

            // Validar email em tempo real (apenas se preenchido)
            if (value.trim()) {
                const error = validateEmail(value);
                if (error) {
                    setValidationErrors({ ...validationErrors, email: error });
                } else {
                    const newErrors = { ...validationErrors };
                    delete newErrors.email;
                    setValidationErrors(newErrors);
                }
            } else {
                // Email é opcional, remover erro se estiver vazio
                const newErrors = { ...validationErrors };
                delete newErrors.email;
                setValidationErrors(newErrors);
            }
        } else {
            setFormData({ ...formData, [name]: value });
            // Limpar erro do campo quando começar a digitar
            if (validationErrors[name]) {
                const newErrors = { ...validationErrors };
                delete newErrors[name];
                setValidationErrors(newErrors);
            }
        }
    };

    const handleNext = (e: React.FormEvent) => {
        e.preventDefault();

        // Validar campos do passo 1
        const errors: Record<string, string> = {};

        if (!formData.name.trim() || formData.name.trim().length < 2) {
            errors.name = 'Nome deve ter pelo menos 2 caracteres';
        }

        if (!formData.businessName.trim()) {
            errors.businessName = 'Nome do negócio é obrigatório';
        }

        if (!formData.businessType) {
            errors.businessType = 'Ramo do negócio é obrigatório';
        }

        if (!formData.cep.trim()) {
            errors.cep = 'CEP é obrigatório';
        } else if (!isValidCEP(formData.cep)) {
            errors.cep = 'CEP inválido';
        }

        if (!formData.city.trim()) {
            errors.city = 'Cidade é obrigatória';
        }

        if (!formData.state.trim()) {
            errors.state = 'Estado é obrigatório';
        }

        if (Object.keys(errors).length > 0) {
            setValidationErrors({ ...validationErrors, ...errors });
            return;
        }

        setStep(step + 1);
    };

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        setIsSubmitting(true);
        setError(null);

        // Validar campos do passo 2 antes de enviar
        const errors: Record<string, string> = {};

        const phoneError = validatePhone(formData.phone);
        if (phoneError) {
            errors.phone = phoneError;
        }

        if (formData.email.trim()) {
            const emailError = validateEmail(formData.email);
            if (emailError) {
                errors.email = emailError;
            }
        }

        if (!formData.howDidYouKnow) {
            errors.howDidYouKnow = 'Como conheceu o TaDeVolta é obrigatório';
        }

        if (Object.keys(errors).length > 0) {
            setValidationErrors({ ...validationErrors, ...errors });
            setIsSubmitting(false);
            return;
        }

        try {
            const response = await LeadsService.create({
                name: formData.name,
                email: formData.email.trim() || '',
                phone: formData.phone,
                city: formData.city,
                state: formData.state,
                unitId: unitId || '#BR#ALL#SYSTEM#0001',
                source: 'website',
                metadata: {
                    origin: 'referral_page_modal',
                    businessName: formData.businessName,
                    businessType: formData.businessType,
                    howDidYouKnow: formData.howDidYouKnow,
                    cep: formData.cep,
                },
            });

            setLeadId(response.id);
            setIsSuccess(true);

            // Transição para o Post Onboarding após 1.5s
            setTimeout(() => {
                setShowPostOnboarding(true);
            }, 1500);

        } catch (err) {
            setError('Ocorreu um erro ao enviar seus dados. Tente novamente.');
            console.error(err);
        } finally {
            setIsSubmitting(false);
        }
    };

    const handleFinalClose = () => {
        onClose();
        // Reset states after closing animation
        setTimeout(() => {
            setIsSuccess(false);
            setShowPostOnboarding(false);
            setStep(1);
            setLeadId(null);
            setFormData({
                name: '',
                businessName: '',
                businessType: '',
                cep: '',
                city: '',
                state: '',
                phone: '',
                email: '',
                howDidYouKnow: '',
            });
            setValidationErrors({});
            setIsLoadingCep(false);
        }, 300);
    };

    return (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/70 backdrop-blur-sm animate-in fade-in duration-200">
            <div className={`bg-gray-900 border border-gray-700 rounded-2xl w-full ${showPostOnboarding ? 'max-w-2xl' : 'max-w-lg'} shadow-2xl overflow-hidden relative transition-all duration-500`} data-aos="zoom-in">

                {/* Header */}
                <div className="p-6 border-b border-gray-800 flex justify-between items-center bg-gray-800/50">
                    <div>
                        <h2 className="text-2xl font-bold text-white">
                            {showPostOnboarding ? 'Personalize sua experiência' : 'Comece agora'}
                        </h2>
                        <p className="text-gray-400 text-sm">
                            {showPostOnboarding ? 'Nos ajude a entender seu cenário' : `Passo ${step} de 2`}
                        </p>
                    </div>
                    <button onClick={handleFinalClose} className="text-gray-400 hover:text-white transition-colors">
                        <X size={24} />
                    </button>
                </div>

                {/* Content */}
                <div className="p-8">
                    {isSuccess ? (
                        <div className="p-8 text-center animate-in zoom-in duration-300">
                            <div className="w-20 h-20 bg-emerald-500/20 text-emerald-500 rounded-full flex items-center justify-center mx-auto mb-6 animate-bounce">
                                <PartyPopper size={40} />
                            </div>
                            <h3 className="text-2xl font-bold text-white mb-2">Inscrição Confirmada!</h3>
                            <p className="text-slate-400 mb-8 max-w-xs mx-auto">
                                Obrigado pelo seu interesse. Nossa equipe de especialistas entrará em contato em breve via WhatsApp.
                            </p>
                            <button
                                onClick={onClose}
                                className="w-full bg-emerald-600 hover:bg-emerald-500 text-white font-bold py-3 rounded-xl transition-all shadow-lg shadow-emerald-900/40"
                            >
                                Fechar
                            </button>
                        </div>
                    ) : (
                        <form onSubmit={step === 1 ? handleNext : handleSubmit} className="space-y-6">
                            {step === 1 ? (
                                <div className="space-y-4 animate-in slide-in-from-right duration-300">
                                    <div>
                                        <label className="block text-sm font-medium text-gray-300 mb-1">
                                            Qual o seu nome e sobrenome? *
                                        </label>
                                        <input
                                            required
                                            type="text"
                                            name="name"
                                            value={formData.name}
                                            onChange={handleChange}
                                            className={`w-full bg-gray-800 border rounded-lg px-4 py-3 text-white focus:ring-2 focus:ring-blue-500 focus:border-blue-500 outline-none transition-all ${validationErrors.name ? 'border-red-500' : 'border-gray-700'
                                                }`}
                                            placeholder="Seu nome completo"
                                        />
                                        {validationErrors.name && (
                                            <p className="text-red-400 text-xs mt-1">{validationErrors.name}</p>
                                        )}
                                    </div>
                                    <div>
                                        <label className="block text-sm font-medium text-gray-300 mb-1">
                                            Qual o nome do seu negócio? *
                                        </label>
                                        <input
                                            required
                                            type="text"
                                            name="businessName"
                                            value={formData.businessName}
                                            onChange={handleChange}
                                            className={`w-full bg-gray-800 border rounded-lg px-4 py-3 text-white focus:ring-2 focus:ring-blue-500 focus:border-blue-500 outline-none transition-all ${validationErrors.businessName ? 'border-red-500' : 'border-gray-700'
                                                }`}
                                            placeholder="Nome do seu estabelecimento"
                                        />
                                        {validationErrors.businessName && (
                                            <p className="text-red-400 text-xs mt-1">{validationErrors.businessName}</p>
                                        )}
                                    </div>
                                    <div>
                                        <label className="block text-sm font-medium text-gray-300 mb-1">
                                            Qual o ramo do seu negócio? *
                                        </label>
                                        <select
                                            required
                                            name="businessType"
                                            value={formData.businessType}
                                            onChange={handleChange}
                                            className={`w-full bg-gray-800 border rounded-lg px-4 py-3 text-white focus:ring-2 focus:ring-blue-500 focus:border-blue-500 outline-none transition-all ${validationErrors.businessType ? 'border-red-500' : 'border-gray-700'
                                                }`}
                                        >
                                            <option value="">Selecione</option>
                                            <option value="Lanchonete">Lanchonete</option>
                                            <option value="Hamburgueria">Hamburgueria</option>
                                            <option value="Restaurante">Restaurante</option>
                                            <option value="Pizzaria">Pizzaria</option>
                                            <option value="Sorveteria">Sorveteria</option>
                                            <option value="Açaíteria">Açaíteria</option>
                                            <option value="Supermercado">Supermercado</option>
                                            <option value="Farmácia">Farmácia</option>
                                            <option value="Distribuidor de bebidas">Distribuidor de bebidas</option>
                                            <option value="Distribuidor de gás e água">Distribuidor de gás e água</option>
                                            <option value="Doces">Doces</option>
                                            <option value="Casa de Bolos">Casa de Bolos</option>
                                            <option value="Comida Saudável">Comida Saudável</option>
                                            <option value="Outros">Outros</option>
                                        </select>
                                        {validationErrors.businessType && (
                                            <p className="text-red-400 text-xs mt-1">{validationErrors.businessType}</p>
                                        )}
                                    </div>
                                    <div>
                                        <label className="block text-sm font-medium text-gray-300 mb-1">
                                            CEP *
                                        </label>
                                        <div className="relative">
                                            <input
                                                required
                                                type="text"
                                                name="cep"
                                                value={formData.cep}
                                                onChange={handleChange}
                                                maxLength={9}
                                                className={`w-full bg-gray-800 border rounded-lg px-4 py-3 text-white focus:ring-2 focus:ring-blue-500 focus:border-blue-500 outline-none transition-all ${validationErrors.cep ? 'border-red-500' : 'border-gray-700'
                                                    }`}
                                                placeholder="00000-000"
                                            />
                                            {isLoadingCep && (
                                                <div className="absolute right-3 top-1/2 transform -translate-y-1/2">
                                                    <Loader2 className="w-5 h-5 text-blue-500 animate-spin" />
                                                </div>
                                            )}
                                        </div>
                                        {validationErrors.cep && (
                                            <p className="text-red-400 text-xs mt-1">{validationErrors.cep}</p>
                                        )}
                                        {formData.cep && !isLoadingCep && !validationErrors.cep && (
                                            <p className="text-green-400 text-xs mt-1">CEP encontrado! Cidade e estado preenchidos automaticamente.</p>
                                        )}
                                    </div>
                                    <div className="grid grid-cols-2 gap-4">
                                        <div>
                                            <label className="block text-sm font-medium text-gray-300 mb-1">
                                                Cidade *
                                            </label>
                                            <input
                                                required
                                                type="text"
                                                name="city"
                                                value={formData.city}
                                                onChange={handleChange}
                                                className={`w-full bg-gray-800 border rounded-lg px-4 py-3 text-white focus:ring-2 focus:ring-blue-500 focus:border-blue-500 outline-none transition-all ${validationErrors.city ? 'border-red-500' : 'border-gray-700'
                                                    } ${formData.cep && isValidCEP(formData.cep) ? 'bg-gray-700 cursor-not-allowed' : ''}`}
                                                placeholder="Cidade"
                                                readOnly={!!(formData.cep && isValidCEP(formData.cep))}
                                            />
                                            {validationErrors.city && (
                                                <p className="text-red-400 text-xs mt-1">{validationErrors.city}</p>
                                            )}
                                        </div>
                                        <div>
                                            <label className="block text-sm font-medium text-gray-300 mb-1">
                                                Estado (UF) *
                                            </label>
                                            <input
                                                required
                                                type="text"
                                                name="state"
                                                value={formData.state}
                                                onChange={handleChange}
                                                maxLength={2}
                                                className={`w-full bg-gray-800 border rounded-lg px-4 py-3 text-white focus:ring-2 focus:ring-blue-500 focus:border-blue-500 outline-none transition-all uppercase ${validationErrors.state ? 'border-red-500' : 'border-gray-700'
                                                    } ${formData.cep && isValidCEP(formData.cep) ? 'bg-gray-700 cursor-not-allowed' : ''}`}
                                                placeholder="UF"
                                                readOnly={!!(formData.cep && isValidCEP(formData.cep))}
                                            />
                                            {validationErrors.state && (
                                                <p className="text-red-400 text-xs mt-1">{validationErrors.state}</p>
                                            )}
                                        </div>
                                    </div>
                                </div>
                            ) : (
                                <div className="space-y-4 animate-in slide-in-from-right duration-300">
                                    <div>
                                        <label className="block text-sm font-medium text-gray-300 mb-1">
                                            Telefone para contato *
                                        </label>
                                        <input
                                            required
                                            type="tel"
                                            name="phone"
                                            value={formData.phone}
                                            onChange={handleChange}
                                            className={`w-full bg-gray-800 border rounded-lg px-4 py-3 text-white focus:ring-2 focus:ring-blue-500 focus:border-blue-500 outline-none transition-all ${validationErrors.phone ? 'border-red-500' : 'border-gray-700'
                                                }`}
                                            placeholder="(00) 00000-0000"
                                        />
                                        {validationErrors.phone && (
                                            <p className="text-red-400 text-xs mt-1">{validationErrors.phone}</p>
                                        )}
                                    </div>
                                    <div>
                                        <label className="block text-sm font-medium text-gray-300 mb-1">
                                            E-mail (opcional)
                                        </label>
                                        <input
                                            type="email"
                                            name="email"
                                            value={formData.email}
                                            onChange={handleChange}
                                            className={`w-full bg-gray-800 border rounded-lg px-4 py-3 text-white focus:ring-2 focus:ring-blue-500 focus:border-blue-500 outline-none transition-all ${validationErrors.email ? 'border-red-500' : 'border-gray-700'
                                                }`}
                                            placeholder="seu@email.com"
                                        />
                                        {validationErrors.email && (
                                            <p className="text-red-400 text-xs mt-1">{validationErrors.email}</p>
                                        )}
                                    </div>
                                    <div>
                                        <label className="block text-sm font-medium text-gray-300 mb-1">
                                            Como conheceu o TaDeVolta? *
                                        </label>
                                        <select
                                            required
                                            name="howDidYouKnow"
                                            value={formData.howDidYouKnow}
                                            onChange={handleChange}
                                            className={`w-full bg-gray-800 border rounded-lg px-4 py-3 text-white focus:ring-2 focus:ring-blue-500 focus:border-blue-500 outline-none transition-all ${validationErrors.howDidYouKnow ? 'border-red-500' : 'border-gray-700'
                                                }`}
                                        >
                                            <option value="">Selecione</option>
                                            <option value="Instagram">Instagram</option>
                                            <option value="Facebook">Facebook</option>
                                            <option value="Google">Google</option>
                                            <option value="Amigos e conhecidos">Amigos e conhecidos</option>
                                            <option value="Outros">Outros</option>
                                        </select>
                                        {validationErrors.howDidYouKnow && (
                                            <p className="text-red-400 text-xs mt-1">{validationErrors.howDidYouKnow}</p>
                                        )}
                                    </div>
                                </div>
                            )}

                            {error && <p className="text-red-400 text-sm bg-red-400/10 p-3 rounded-lg border border-red-400/20">{error}</p>}

                            <div className="flex gap-3 pt-4">
                                {step > 1 && (
                                    <button
                                        type="button"
                                        onClick={() => setStep(step - 1)}
                                        className="px-6 py-3 bg-gray-800 hover:bg-gray-700 text-white rounded-lg font-medium transition-colors border border-gray-700"
                                    >
                                        Voltar
                                    </button>
                                )}
                                <button
                                    type="submit"
                                    disabled={isSubmitting}
                                    className="flex-1 bg-blue-600 hover:bg-blue-500 text-white font-bold py-3 px-6 rounded-lg transition-all flex items-center justify-center gap-2 shadow-lg shadow-blue-900/20 disabled:opacity-70 disabled:cursor-not-allowed"
                                >
                                    {isSubmitting ? (
                                        <Loader2 className="animate-spin" />
                                    ) : step === 2 ? (
                                        'Concluir Cadastro'
                                    ) : (
                                        <>
                                            Próximo Passo <ChevronRight size={18} />
                                        </>
                                    )}
                                </button>
                            </div>
                        </form>
                    )}
                </div>
            </div>
        </div>
    );
};

export default LeadOnboardingModal;