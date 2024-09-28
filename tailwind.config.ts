import type { Config } from 'tailwindcss'
import flowbite from 'flowbite/plugin'
import daisyui from 'daisyui'

const config: Config = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
    './layouts/**/*.html',
    './content/**/*.md',
    './content/**/*.html',
    './src/**/*.js',
    './node_modules/flowbite/**/*.js',
  ],
  theme: {
    extend: {
      screens: {
        sxs: '320px', // Extra small devices
        xs: '480px', // Extra small devices
        sm: '640px', // Small devices (phones)
        sms: '600px', // Small devices (phones)
        md: '768px', // Medium devices (tablets)
        lg: '1024px', // Large devices (laptops)
        xl: '1280px', // Extra large devices (desktops)
        '2xl': '1536px', // Larger screens
        '3xl': '1920px', // Full HD
        '4xl': '2560px', // Ultra-wide screens
      },
      colors: {
        hciSecondary: '#D84498',
      },
      fontFamily: {
        roboto: ['Roboto', 'sans-serif'],
      },
    },
  },
  plugins: [flowbite, daisyui, require('flowbite/plugin')],
  daisyui: {
    themes: false, // false: only light + dark | true: all themes | array: specific themes like this ["light", "dark", "cupcake"]
    darkTheme: 'light', // name of one of the included themes for dark mode
    base: true, // applies background color and foreground color for root element by default
    styled: true, // include daisyUI colors and design decisions for all components
    utils: true, // adds responsive and modifier utility classes
    prefix: '', // prefix for daisyUI classnames (components, modifiers and responsive class names. Not colors)
    logs: true, // Shows info about daisyUI version and used config in the console when building your CSS
    themeRoot: ':root', // The element that receives theme color CSS variables
  },
}

export default config
