// tailwind.config.js
/** @type {import('tailwindcss').Config} */
export default {
    content: [
        "./app/**/*.{js,ts,jsx,tsx}",
        "./components/**/*.{js,ts,jsx,tsx}",
    ],
    theme: {
        extend: {
            colors: {
                primary: 'rgb(var(--color-primary-rgb))',
                // 'primary-transparent': 'rgb(var(--color-primary-rgb)/0.5)',
                complimentary: 'rgb(var(--color-complimentary-rgb))',
                accent: 'rgb(var(--color-accent-rgb))',
                // 'accent-transparent': 'rgb(var(--color-accent-rgb)/0.7)',
            },
            backgroundImage: {
                'gradient-primary':
                    'linear-gradient(90deg, rgb(var(--color-primary-rgb)), rgb(var(--color-accent-rgb)))',

                'gradient-primary-complex':
                    'linear-gradient(90deg, rgb(var(--color-primary-rgb)), rgb(var(--color-accent-rgb)), rgb(var(--color-primary-rgb)))',

                'gradient-complimentary':
                    'linear-gradient(90deg, rgb(var(--color-primary-rgb)), rgb(var(--color-complimentary-rgb)))',

                'gradient-radial':
                    'radial-gradient(circle at 40% 0%, rgb(var(--color-accent-rgb) / 0.05), transparent 70%)',
            },
            boxShadow: {
                'glow-primary': '0 0 30px rgb(var(--color-primary-rgb) / 0.6)',
                'glow-accent': '0 0 30px rgb(var(--color-accent-rgb), var(--color-primary-rgb) / 0.6)',
                'glow-soft': '0 0 60px rgb(var(--color-primary-rgb) / 0.35)',
            },
            fontFamily: {
                thin: ["var(--font-TT)", "system-ui", "sans-serif"],
                'extra-light': ["var(--font-TT)", "system-ui", "sans-serif"],
                normal: ["var(--font-TT)", "system-ui", "sans-serif"],
                medium: ["var(--font-TT)", "system-ui", "sans-serif"],
                extrabold: ["var(--font-TT)", "system-ui", "sans-serif"],
                semibold: ["var(--font-TT)", "system-ui", "sans-serif"],
                bold: ["var(--font-TT)", "system-ui", "sans-serif"],
                light: ["var(--font-TT)", "system-ui", "sans-serif"],
                mono: ["var(--font-TT-mono)", "system-ui", "sans-serif"],
            },
        },
    },
};