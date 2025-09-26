/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,jsx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        'radial-hero': 'radial-gradient(125% 125% at 50% 10%, #000000 40%, #6633ee 100%)',
        'dashboard-card': 'linear-gradient(135deg, #f8fafc 0%, #e0e7ef 100%)',
        'sidebar-dark': 'linear-gradient(180deg, #18181b 0%, #27272a 100%)',
      },
      colors: {
        hero: {
          DEFAULT: '#63e',
          dark: '#000',
        },
        status: {
          safe: '#22c55e',      // green
          warning: '#eab308',   // yellow
          danger: '#ef4444',    // red
        },
        card: {
          light: '#f8fafc',
          dark: '#1e293b',
        },
        sidebar: {
          light: '#f1f5f9',
          dark: '#18181b',
        },
        nav: {
          light: '#fff',
          dark: '#18181b',
        },
        primary: '#6366f1',
        secondary: '#0ea5e9',
        accent: '#38bdf8',
        // background: '#f8fafc',
        darkbg: '#18181b',
      },
      boxShadow: {
        'card': '0 4px 24px 0 rgba(30, 41, 59, 0.08)',
        'nav': '0 2px 8px 0 rgba(30, 41, 59, 0.06)',
      },
      borderRadius: {
        'xl': '1.25rem',
      },
      fontFamily: {
        sans: ['Inter', 'ui-sans-serif', 'system-ui'],
      },
    },
  },
  darkMode: 'class',
  plugins: [],
}

