export interface ThemeColors {
    primary: string;
    primaryForeground: string;
    secondary: string;
    secondaryForeground: string;
    accent: string;
    accentForeground: string;
    background: string;
    foreground: string;
    card: string;
    cardForeground: string;
    border: string;
    input: string;
    ring: string;
}

export interface ThemeConfig {
    id: string;
    name: string;
    colors: ThemeColors;
}

export const THEME_CONFIGS: Record<string, ThemeConfig> = {
    default: {
        id: 'default',
        name: 'Padrão (AgentSummary)',
        colors: {
            primary: '173 80% 40%',           // Viral Teal
            primaryForeground: '0 0% 100%',
            secondary: '25 95% 53%',         // Viral Orange
            secondaryForeground: '0 0% 100%',
            accent: '280 81% 68%',           // Viral Purple
            accentForeground: '0 0% 100%',
            background: '0 0% 100%',
            foreground: '220 26% 14%',
            card: '0 0% 100%',
            cardForeground: '220 26% 14%',
            border: '25 30% 88%',
            input: '25 30% 88%',
            ring: '25 95% 53%',
        }
    },
    'gym-dark': {
        id: 'gym-dark',
        name: 'Gym Dark (Premium)',
        colors: {
            primary: '217 91% 60%',           // Blue
            primaryForeground: '0 0% 100%',
            secondary: '222 47% 11%',         // Dark Blue
            secondaryForeground: '0 0% 100%',
            accent: '262 83% 58%',            // Purple
            accentForeground: '0 0% 100%',
            background: '222 47% 4%',         // Near black
            foreground: '210 40% 98%',
            card: '222 47% 7%',
            cardForeground: '210 40% 98%',
            border: '217 32% 17%',
            input: '217 32% 17%',
            ring: '217 91% 60%',
        }
    },
    'solar-energy': {
        id: 'solar-energy',
        name: 'Energia Solar',
        colors: {
            primary: '45 93% 47%',            // Deep Gold
            primaryForeground: '0 0% 100%',
            secondary: '160 84% 20%',         // Deep Green
            secondaryForeground: '0 0% 100%',
            accent: '25 95% 53%',             // Orange energy
            accentForeground: '0 0% 100%',
            background: '0 0% 100%',
            foreground: '220 26% 14%',
            card: '160 84% 5%',               // Very dark green for light mode contrast or similar? Keeping background safe.
            cardForeground: '220 26% 14%',
            border: '45 93% 80%',
            input: '45 93% 80%',
            ring: '45 93% 47%',
        }
    },
    minimalist: {
        id: 'minimalist',
        name: 'Minimalista',
        colors: {
            primary: '220 10% 10%',           // Black/Slate
            primaryForeground: '0 0% 100%',
            secondary: '220 5% 65%',          // Grey
            secondaryForeground: '0 0% 10%',
            accent: '220 10% 45%',
            accentForeground: '0 0% 100%',
            background: '0 0% 100%',
            foreground: '220 10% 10%',
            card: '0 0% 98%',
            cardForeground: '220 10% 10%',
            border: '220 10% 92%',
            input: '220 10% 92%',
            ring: '220 10% 10%',
        }
    },
    'royal-gold': {
        id: 'royal-gold',
        name: 'Royal Gold',
        colors: {
            primary: '47 62% 52%',            // Royal Gold
            primaryForeground: '0 0% 100%',
            secondary: '0 0% 10%',           // Jet Black
            secondaryForeground: '0 0% 100%',
            accent: '47 62% 70%',            // Light Gold
            accentForeground: '0 0% 10%',
            background: '0 0% 5%',           // Deep black
            foreground: '47 62% 95%',
            card: '0 0% 8%',
            cardForeground: '47 62% 95%',
            border: '47 62% 20%',
            input: '47 30% 15%',
            ring: '47 62% 52%',
        }
    }
};
