/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {

    colors: {
      'grey-900': '#2a4144',
      'grey-500': '#86a2a5',
      'green-950': '#052e16',
      'green-600': '#0c7d69',
      'green-200': '#e0f1e8',
      'red-error': '#d73c3c',
      'white': '#ffffff'
    },

    extend: {
      fontFamily:{
        karla: 'Karla, sans-serif'
      },

      width: {
        'mobile': '21.5rem',
        'tablet': '43rem',
        'desktop': '46rem'
      }
    },
  },
  plugins: [
    require('@tailwindcss/forms')
  ],
}

