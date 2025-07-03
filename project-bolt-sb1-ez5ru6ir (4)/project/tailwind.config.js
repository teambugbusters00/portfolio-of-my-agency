/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  darkMode: 'class',
  theme: {
    extend: {
      fontFamily: {
        'sans': ['Rajdhani', 'Inter', 'system-ui', 'sans-serif'],
        'mono': ['Orbitron', 'JetBrains Mono', 'monospace'],
        'cyber': ['Orbitron', 'monospace'],
      },
      colors: {
        cyber: {
          blue: '#00d4ff',
          purple: '#8b5cf6',
          cyan: '#06b6d4',
          pink: '#ec4899',
          green: '#10b981',
          orange: '#f59e0b',
        },
        neural: {
          dark: '#0a0a0a',
          gray: '#1a1a1a',
          light: '#2a2a2a',
        }
      },
      animation: {
        'fade-in': 'fadeIn 0.5s ease-in-out',
        'slide-up': 'slideUp 0.5s ease-out',
        'pulse-slow': 'pulse 3s cubic-bezier(0.4, 0, 0.6, 1) infinite',
        'holographic': 'holographic-shift 3s ease-in-out infinite',
        'neural-pulse': 'neural-pulse 2s ease-in-out infinite',
        'quantum-float': 'quantum-float 6s ease-in-out infinite',
        'cyber-load': 'cyber-load 2s infinite',
        'glitch-1': 'glitch-1 0.5s infinite',
        'glitch-2': 'glitch-2 0.5s infinite',
        'grid-move': 'grid-move 20s linear infinite',
        'matrix-rain': 'matrix-rain 3s linear infinite',
        'scan-line': 'scan-line 2s ease-in-out infinite',
      },
      keyframes: {
        fadeIn: {
          '0%': { opacity: '0' },
          '100%': { opacity: '1' },
        },
        slideUp: {
          '0%': { transform: 'translateY(20px)', opacity: '0' },
          '100%': { transform: 'translateY(0)', opacity: '1' },
        },
        'holographic-shift': {
          '0%, 100%': { backgroundPosition: '0% 50%' },
          '50%': { backgroundPosition: '100% 50%' },
        },
        'neural-pulse': {
          '0%, 100%': { 
            opacity: '0.5',
            transform: 'scale(1)',
          },
          '50%': { 
            opacity: '1',
            transform: 'scale(1.05)',
          },
        },
        'quantum-float': {
          '0%, 100%': {
            transform: 'translateY(0) rotate(0deg)',
            opacity: '0',
          },
          '10%, 90%': {
            opacity: '1',
          },
          '50%': {
            transform: 'translateY(-100px) rotate(180deg)',
          },
        },
        'cyber-load': {
          '0%': { left: '-100%' },
          '100%': { left: '100%' },
        },
        'glitch-1': {
          '0%, 14%, 15%, 49%, 50%, 99%, 100%': {
            transform: 'translate(0)',
          },
          '15%, 49%': {
            transform: 'translate(-2px, 2px)',
          },
        },
        'glitch-2': {
          '0%, 20%, 21%, 62%, 63%, 99%, 100%': {
            transform: 'translate(0)',
          },
          '21%, 62%': {
            transform: 'translate(2px, -2px)',
          },
        },
        'grid-move': {
          '0%': { backgroundPosition: '0 0' },
          '100%': { backgroundPosition: '50px 50px' },
        },
        'matrix-rain': {
          '0%': { transform: 'translateY(-100vh)' },
          '100%': { transform: 'translateY(100vh)' },
        },
        'scan-line': {
          '0%': { transform: 'translateX(-100%)' },
          '100%': { transform: 'translateX(100%)' },
        },
      },
      backdropBlur: {
        xs: '2px',
      },
      boxShadow: {
        'neural': '0 0 20px rgba(59, 130, 246, 0.5)',
        'quantum': '0 0 30px rgba(139, 92, 246, 0.4)',
        'cyber': '0 0 40px rgba(6, 182, 212, 0.3)',
        'holographic': '0 0 50px rgba(236, 72, 153, 0.3)',
      },
      backgroundImage: {
        'cyber-grid': `
          linear-gradient(rgba(59, 130, 246, 0.1) 1px, transparent 1px),
          linear-gradient(90deg, rgba(59, 130, 246, 0.1) 1px, transparent 1px)
        `,
        'neural-gradient': 'linear-gradient(45deg, #00d4ff, #8b5cf6, #06b6d4, #ec4899)',
        'quantum-gradient': 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)',
      },
      backgroundSize: {
        'cyber-grid': '50px 50px',
        'neural-gradient': '400% 400%',
      },
    },
  },
  plugins: [],
};