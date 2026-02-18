import axios from 'axios';
import { getEnvVar } from '@/config/runtimeConfig';

// URL do Backend - deve ser ajustada conforme ambiente
// Em desenvolvimento local, geralmente é http://localhost:9090
const API_URL = getEnvVar('VITE_API_BASE_URL', 'http://localhost:9090');

export const api = axios.create({
    baseURL: API_URL,
    headers: {
        'Content-Type': 'application/json',
    },
});

export interface CreateLeadData {
    name: string;
    email: string;
    phone: string;
    city?: string;
    state?: string;
    source?: string;
    unitId?: string;
    metadata?: {
        companyName?: string;
        role?: string;
        employees?: string;
        [key: string]: any;
    };
}

export const LeadsService = {
    create: async (data: CreateLeadData) => {
        try {
            const response = await api.post('/leads/public', data);
            return response.data;
        } catch (error) {
            console.error('Erro ao criar lead:', error);
            throw error;
        }
    },

    update: async (id: string, data: any) => {
        try {
            const response = await api.patch(`/leads/public/${id}`, data);
            return response.data;
        } catch (error) {
            console.error('Erro ao atualizar lead:', error);
            throw error;
        }
    },
};
