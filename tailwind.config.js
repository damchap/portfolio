/** @type {import('tailwindcss').Config} */
module.exports = {
    darkMode: 'selector', 
    content: ["./src/**/*.tsx", "./src/**/*.css"],
    plugins: [require("@tailwindcss/forms")],
    theme: {
        fontFamily: {
            'sans': ['Inter var','ui-sans-serif', 'system-ui'],
            'serif': ['ui-serif', 'Georgia'],
            'mono': ['ui-monospace', 'SFMono-Regular'],
            'display': ['Oswald'],
            'body': ['"Open Sans"'],
        },
        fontsize: {
            'sm': '12px',
            'base': '16px',
            'lg': '18px',
            'xl': '20px',
            '2xl': '24px',
            '3xl': '30px',
            '4xl': '36px',
            '5xl': '48px',
            '6xl': '64px',
            '7xl': '80px',
            '8xl': '96px',
        },
        fontWeight: {
            'hairline': 100,
            'thin': 200,
            'light': 300,
            'normal': 400,
            'medium': 500,
            'semibold': 600,
            'bold': 700,
            'extrabold': 800,
            'black': 900,
        },
        extend: {
            colors: {
                'primary': '#2181FA',
                'primary-dark': '#1961BC',
                'default': '#0F172A',
                'secondary': '#64748B',
                backgroundColor: {
                    'dark': '#111827',
                    'light': '#FFFFFF',
                },
                textColor: {
                    'dark': '#1a1a1a',
                    'light': '#0F172A',
                },
            },
            spacing: {
                '4.5': '1.125rem',
                '72': '18rem',
                '84': '21rem',
                '96': '24rem',
            },
            borderRadius: {
                '4xl': '2rem',
            },
            borderWidth: {
                '1': '1px',
                '3': '3px',
                '6': '6px',
            },
            boxShadow: {
                'outline': '0 0 0 3px rgba(66, 153, 225, 0.5)',
            },
            opacity: {
                '90': '0.9',
            },
            zIndex: {
                '100': '100',
                '200': '200',
            },
            
        }
    }
};
