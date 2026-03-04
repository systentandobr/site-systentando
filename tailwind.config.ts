import type { Config } from "tailwindcss";

export default {
	darkMode: ["class"],
	content: [
		"./pages/**/*.{ts,tsx}",
		"./components/**/*.{ts,tsx}",
		"./app/**/*.{ts,tsx}",
		"./src/**/*.{ts,tsx}",
	],
	prefix: "",
	theme: {
		container: {
			center: true,
			padding: '2rem',
			screens: {
				'2xl': '1400px'
			}
		},
		extend: {
			fontFamily: {
				sans: ['Inter', 'system-ui', 'sans-serif'],
				display: ['Space Grotesk', 'sans-serif'],
				mono: ['JetBrains Mono', 'monospace'],
			},
			fontSize: {
				'xs': ['0.875rem', { lineHeight: '1.5' }],      // 12px
				'sm': ['1rem', { lineHeight: '1.5' }],     // 14px
				'base': ['1.125em', { lineHeight: '1.6' }],       // 16px (aumentado)
				'lg': ['1.5rem', { lineHeight: '1.6' }],     // 18px
				'xl': ['1.75rem', { lineHeight: '1.5' }],      // 20px
				'2xl': ['2rem', { lineHeight: '1.4' }],      // 24px
				'3xl': ['2.25rem', { lineHeight: '1.3' }],    // 30px
				'4xl': ['2.5rem', { lineHeight: '1.2' }],     // 36px
				'5xl': ['3rem', { lineHeight: '1.1' }],        // 48px
				'6xl': ['3.75rem', { lineHeight: '1' }],       // 60px
			},
			colors: {

				border: 'hsl(var(--border))',
				input: 'hsl(var(--input))',
				ring: 'hsl(var(--ring))',
				background: 'hsl(var(--background))',
				foreground: 'hsl(var(--foreground))',
				primary: {
					DEFAULT: 'hsl(var(--primary))',
					foreground: 'hsl(var(--primary-foreground))',
					50: '#eff6ff',
					100: '#dbeafe',
					200: '#bfdbfe',
					300: '#93c5fd',
					400: '#60a5fa',
					500: '#3b82f6',
					600: '#2563eb',
					700: '#1d4ed8',
					800: '#1e40af',
					900: '#1e3a8a',
					950: '#172554',
				},
				secondary: {
					50: '#faf5ff',
					100: '#f3e8ff',
					200: '#e9d5ff',
					300: '#d8b4fe',
					400: '#c084fc',
					500: '#a855f7',
					600: '#9333ea',
					700: '#7e22ce',
					800: '#6b21a8',
					900: '#581c87',
					950: '#3b0764',
					DEFAULT: 'hsl(var(--secondary))',
					foreground: 'hsl(var(--secondary-foreground))'
				},
				destructive: {
					DEFAULT: 'hsl(var(--destructive))',
					foreground: 'hsl(var(--destructive-foreground))'
				},
				muted: {
					DEFAULT: 'hsl(var(--muted))',
					foreground: 'hsl(var(--muted-foreground))'
				},
				accent: {
					DEFAULT: '#d5ff40',
					dim: 'rgba(213, 255, 64, 0.15)',
					glow: 'rgba(213, 255, 64, 0.4)',
					foreground: '#0a0a0c',
				},
				popover: {
					DEFAULT: 'hsl(var(--popover))',
					foreground: 'hsl(var(--popover-foreground))'
				},
				card: {
					DEFAULT: 'hsl(var(--card))',
					foreground: 'hsl(var(--card-foreground))'
				},
				bronze: {
					DEFAULT: 'hsl(var(--bronze))',
					light: 'hsl(var(--bronze-light))',
					dark: 'hsl(var(--bronze-dark))'
				},
				copper: 'hsl(var(--copper))',
				gold: 'hsl(var(--gold))',
				sidebar: {
					DEFAULT: 'hsl(var(--sidebar-background))',
					foreground: 'hsl(var(--sidebar-foreground))',
					primary: 'hsl(var(--sidebar-primary))',
					'primary-foreground': 'hsl(var(--sidebar-primary-foreground))',
					accent: 'hsl(var(--sidebar-accent))',
					'accent-foreground': 'hsl(var(--sidebar-accent-foreground))',
					border: 'hsl(var(--sidebar-border))',
					ring: 'hsl(var(--sidebar-ring))'
				}
			},
			backgroundImage: {
				'gradient-bronze': 'var(--gradient-bronze)',
				'gradient-hero': 'var(--gradient-hero)',
				'gradient-card': 'var(--gradient-card)',
				'grid': 'linear-gradient(to right, rgba(255, 255, 255, 0.03) 1px, transparent 1px), linear-gradient(to bottom, rgba(255, 255, 255, 0.03) 1px, transparent 1px)',
			},
			boxShadow: {
				'bronze': 'var(--shadow-bronze)',
				'glow': 'var(--shadow-glow)',
				'card': 'var(--shadow-card)',
			},
			borderRadius: {
				lg: 'var(--radius)',
				md: 'calc(var(--radius) - 2px)',
				sm: 'calc(var(--radius) - 4px)'
			},
			keyframes: {
				'accordion-down': {
					from: {
						height: '0'
					},
					to: {
						height: 'var(--radix-accordion-content-height)'
					}
				},
				'accordion-up': {
					from: {
						height: 'var(--radix-accordion-content-height)'
					},
					to: {
						height: '0'
					}
				},
				'dash': {
					'0%': { strokeDashoffset: '1000' },
					'100%': { strokeDashoffset: '0' },
				},
				'float': {
					'0%, 100%': {
						transform: 'translateY(0px)'
					},
					'50%': {
						transform: 'translateY(-10px)'
					}
				},
				'pulse-glow': {
					'0%, 100%': {
						boxShadow: '0 0 20px rgba(213, 255, 64, 0.3)'
					},
					'50%': {
						boxShadow: '0 0 40px rgba(213, 255, 64, 0.6)'
					}
				},
				'shimmer': {
					'0%': { backgroundPosition: '-200% 0' },
					'100%': { backgroundPosition: '200% 0' },
				},
				'gradient-shift': {
					'0%': { backgroundPosition: '0% 50%' },
					'50%': { backgroundPosition: '100% 50%' },
					'100%': { backgroundPosition: '0% 50%' },
				},
				'particle-float': {
					'0%': { transform: 'translateY(100vh) translateX(0)', opacity: '0' },
					'10%': { opacity: '1' },
					'90%': { opacity: '1' },
					'100%': { transform: 'translateY(-100vh) translateX(100px)', opacity: '0' },
				},
				'scroll-line': {
					'0%': { transform: 'translateY(-100%)' },
					'100%': { transform: 'translateY(100%)' },
				},
				'reveal-up': {
					'0%': {
						opacity: '0',
						transform: 'translateY(30px)',
						filter: 'blur(15px)'
					},
					'100%': {
						opacity: '1',
						transform: 'translateY(0)',
						filter: 'blur(0)'
					}
				}
			},
			animation: {
				'spin-slow': 'spin 8s linear infinite',
				'pulse-slow': 'pulse 4s cubic-bezier(0.4, 0, 0.6, 1) infinite',
				'accordion-down': 'accordion-down 0.2s ease-out',
				'accordion-up': 'accordion-up 0.2s ease-out',
				'float': 'float 3s ease-in-out infinite',
				'pulse-glow': 'pulse-glow 2s ease-in-out infinite',
				'dash': 'dash 20s linear infinite',
				'reveal-up': 'reveal-up 1.2s cubic-bezier(0.16, 1, 0.3, 1) forwards',
				'shimmer': 'shimmer 3s linear infinite',
				'gradient-shift': 'gradient-shift 15s ease infinite',
				'particle-float': 'particle-float 20s infinite',
				'scroll-line': 'scroll-line 1.5s cubic-bezier(0.77, 0, 0.175, 1) infinite',
			}
		}
	},
	plugins: [require("tailwindcss-animate")],
} satisfies Config