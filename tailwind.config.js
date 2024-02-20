/** @type {import('tailwindcss').Config} */
export default {
  darkMode: ['class', '[data-mode="dark"]'],
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      keyframes: {
        dialogOverlayAnimation: {
          '0%': {
            backgroundColor: 'rgba(0,0,0,0)',
          },
          '100%': {
            backgroundColor: 'rgba(0,0,0,0.5)',
          },
        },
        dialogContentShow: {
          '0%': {
            opacity: 0,
            transform: 'translate(-50%, -25%) scale(0.96)',
          },
          '100%': {
            opacity: 1,
            transform: 'translate(-50%, -50%) scale(1)',
          },
        },
        dialogOverlayCloseAnimation: {
          '0%': {
            backgroundColor: 'rgba(0,0,0,0.5)',
          },
          '100%': {
            backgroundColor: 'rgba(0,0,0,0)',
          },
        },
        dialogContentClose: {
          '0%': {
            opacity: 1,
            transform: 'translate(-50%, -50%) scale(1)',
          },
          '100%': {
            opacity: 0,
            transform: 'translate(-50%, -25%) scale(0.96)',
          },
        },
      },
      animation: {
        dialogOverlayAnimation:
          'dialogOverlayAnimation 150ms ease-out forwards',
        dialogContentShow: 'dialogContentShow 200ms ease-out forwards',
        dialogOverlayCloseAnimation:
          'dialogOverlayCloseAnimation 150ms ease-out forwards',
        dialogContentClose: 'dialogContentClose 200ms ease-out forwards',
      },
    },
    plugins: [],
  },
}
