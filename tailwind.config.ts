/** @type {import('tailwindcss').Config} */
export default {
    content: [
      "./index.html",
      "./src/**/*.{js,ts,jsx,tsx}",
    ],
    theme: {
      extend: {
        colors: {
          // Add custom colors if needed
        },
        animation: {
          'pulse-soft': 'pulse-soft 2s cubic-bezier(0.4, 0, 0.6, 1) infinite',
        },
        keyframes: {
          'pulse-soft': {
            '0%, 100%': {
              opacity: '1',
            },
            '50%': {
              opacity: '0.7',
            },
          }
        }
      },
    },
    plugins: [],
    safelist: [
      // Dynamic color classes to prevent purging
      'bg-blue-50', 'text-blue-600', 'bg-blue-100', 'focus:ring-blue-500',
      'bg-red-50', 'text-red-600', 'bg-red-100', 'focus:ring-red-500',
      'bg-green-50', 'text-green-600', 'bg-green-100', 'focus:ring-green-500',
      'bg-purple-50', 'text-purple-600', 'bg-purple-100', 'focus:ring-purple-500',
      'bg-orange-50', 'text-orange-600', 'bg-orange-100', 'focus:ring-orange-500',
      'bg-pink-50', 'text-pink-600', 'bg-pink-100', 'focus:ring-pink-500',
      'bg-indigo-50', 'text-indigo-600', 'bg-indigo-100', 'focus:ring-indigo-500',
      'bg-amber-50', 'text-amber-600', 'bg-amber-100', 'focus:ring-amber-500',
    ]
  }