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
			colors: {
				border: 'hsl(var(--border))',
				input: 'hsl(var(--input))',
				ring: 'hsl(var(--ring))',
				background: 'hsl(var(--background))',
				foreground: 'hsl(var(--foreground))',
				primary: {
					DEFAULT: 'hsl(var(--primary))',
					foreground: 'hsl(var(--primary-foreground))',
					hover: 'hsl(var(--primary-hover))',
					glow: 'hsl(var(--primary-glow))'
				},
				secondary: {
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
					DEFAULT: 'hsl(var(--accent))',
					foreground: 'hsl(var(--accent-foreground))'
				},
				popover: {
					DEFAULT: 'hsl(var(--popover))',
					foreground: 'hsl(var(--popover-foreground))'
				},
				card: {
					DEFAULT: 'hsl(var(--card))',
					foreground: 'hsl(var(--card-foreground))'
				},
				sidebar: {
					DEFAULT: 'hsl(var(--sidebar-background))',
					foreground: 'hsl(var(--sidebar-foreground))',
					primary: 'hsl(var(--sidebar-primary))',
					'primary-foreground': 'hsl(var(--sidebar-primary-foreground))',
					accent: 'hsl(var(--sidebar-accent))',
					'accent-foreground': 'hsl(var(--sidebar-accent-foreground))',
					border: 'hsl(var(--sidebar-border))',
					ring: 'hsl(var(--sidebar-ring))'
				},
				oxford_blue: {
					DEFAULT: '#0a1128',
					100: '#020308',
					200: '#040710',
					300: '#060a18',
					400: '#080e21',
					500: '#0a1128',
					600: '#1d3172',
					700: '#2f50bc',
					800: '#6c86da',
					900: '#b6c2ed',
				},
				penn_blue: {
					DEFAULT: '#001f54',
					100: '#000610',
					200: '#000c21',
					300: '#001231',
					400: '#001841',
					500: '#001f54',
					600: '#003da7',
					700: '#005dfd',
					800: '#5492ff',
					900: '#a9c9ff',
				},
				indigo_dye: {
					DEFAULT: '#034078',
					100: '#010d18',
					200: '#011930',
					300: '#022648',
					400: '#02335f',
					500: '#034078',
					600: '#0567c3',
					700: '#1c8ef9',
					800: '#68b4fb',
					900: '#b3d9fd',
				},
				cerulean: {
					DEFAULT: '#1282a2',
					100: '#041a20',
					200: '#073440',
					300: '#0b4e60',
					400: '#0e6881',
					500: '#1282a2',
					600: '#18b2dc',
					700: '#4cc9eb',
					800: '#88dbf2',
					900: '#c3edf8',
				},
				white: {
					DEFAULT: '#fefcfb',
					100: '#512814',
					200: '#a25128',
					300: '#d68359',
					400: '#eabfaa',
					500: '#fefcfb',
					600: '#fefdfc',
					700: '#fefdfd',
					800: '#fffefd',
					900: '#fffefe',
				},
			},
			backgroundImage: {
				'gradient-primary': 'var(--gradient-primary)',
				'gradient-hero': 'var(--gradient-hero)',
				'gradient-subtle': 'var(--gradient-subtle)',
				'gradient-glass': 'var(--gradient-glass)'
			},
			boxShadow: {
				'elegant': 'var(--shadow-elegant)',
				'card': 'var(--shadow-card)',
				'glow': 'var(--shadow-glow)',
				'glass': 'var(--shadow-glass)',
				'floating': 'var(--shadow-floating)'
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
				}
			},
			animation: {
				'accordion-down': 'accordion-down 0.2s ease-out',
				'accordion-up': 'accordion-up 0.2s ease-out'
			}
		}
	},
	plugins: [require("tailwindcss-animate")],
} satisfies Config;
