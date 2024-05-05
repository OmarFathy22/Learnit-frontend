import type { Config } from "tailwindcss";

const config: Config = {

  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    screens: {
      'max-300': {  'max': '300px' },
      'max-350': {  'max': '350px' },
      'max-400': {  'max': '400px' },
      'max-500': {  'max': '500px' },
      'max-600': {  'max': '600px' },
      'min-600': {  'min': '600px' },
      'max-900': {  'max': '900px' },
      'min-900': {  'min': '900px' },
      'max-1100': {  'max': '1100px' },
      'min-1100': {  'min': '1100px' },
      'max-1200': {  'max': '1200px' },
      'min-1200': {  'min': '1200px' },
      'max-1300': {  'max': '1300px' },
      'min-1300': {  'min': '1300px' },
      'max-1400': {  'max': '1400px' },
      'min-1400': {  'min': '1400px' },
    },
    extend: {
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      },
    },
  },
  plugins: [],
};
export default config;
