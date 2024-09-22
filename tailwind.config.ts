import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: {
          DEFAULT: '#4263EB', // Blue color used for the "Complete sign up" button
        },
        gray: {
          100: '#F8F9FA', // Background color
          300: '#E9ECEF', // Border color for input fields
          400: '#CED4DA', // Color for placeholder text and icons
          600: '#6C757D', // Color for secondary text (e.g., "Share posts to your social accounts.")
          900: '#212529', // Color for primary text
        },
      },
      boxShadow: {
        sm: '0 1px 2px 0 rgba(0, 0, 0, 0.05)', // Subtle shadow for input fields
      },
      fontFamily: {
        sans : ['var(--font-ibm-plex-sans)', 'ui-sans-serif', 'system-ui'],
       
      },
     
    },
  },
  plugins: [],
};
export default config;
