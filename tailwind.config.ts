import type { Config } from 'tailwindcss'

const config: Config = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
        'gradient-conic':
          'conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))',
      },
    },
    daisyui: {
      themes: [
        {
          mytheme: {
            "primary": "#baf221",     
            "secondary": "#7143d3",  
            "accent": "#47b5e0",   
            "neutral": "#211a28",     
            "base-100": "#2b3a55",  
            "info": "#72a6df",       
            "success": "#1c6e57",       
            "warning": "#f0ca60",      
            "error": "#f0302d",
          },
        },
      ],
    },
  },
  plugins: [
    require('daisyui')
  ],
}
export default config
