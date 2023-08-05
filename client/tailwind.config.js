/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    borderRadius: {
      'none': '0',
      'sm': '.125rem',
      'DEFAULT': '.25rem',
      'md': '.375rem',
      'lg': '.5rem',
      'full': '9999px',
      'large': '15px',
    },
    colors: {
   'main-c':'#000',
   'sub-c':'#001825',
   'sub-t':'#24E509',
   'main-t':'#00CFFF',
   'third-t':'#035907',
   'third-c':'#EFEFEF',
   'white':'#fff',
   'wallpaperc':'#FFCF16',
   'bluef-c':'#9CEAEB',
   'green-c':'#51CC32',
   'blue-c':'#0080FF',
   'red':'#EF412D'
  
  },
  fontFamily: {
    sans: ['Graphik', 'sans-serif'],
    serif: ['Merriweather', 'serif'],
  },
    extend: {
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
        'gradient-conic':
          'conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))',
      },
    },
  },
  plugins: [],
}
