/** @type {import('tailwindcss').Config} */
export default {
	darkMode: ["class"],
	content: [
	  "./pages/**/*.{js,ts,jsx,tsx,mdx}",
	  "./components/**/*.{js,ts,jsx,tsx,mdx}",
	  "./app/**/*.{js,ts,jsx,tsx,mdx}",
	],
	theme: {
	  container: {
		center: true,
		padding: "15px",
	  },
	  screens: {
		sm: "640px",
		md: "768px",
		lg: "960px",
		xl: "1200px",
	  },
	  fontFamily: {
		primary: ["var(--font-jetbrainsMono)", "monospace"],
	  },
	  extend: {
		colors: {
		  primary: '#1c1c22',
		  accent: {
			DEFAULT: '#808080',
			hover: '#999999',
		  }
		},
		borderRadius: {
		  lg: "0.5rem",
		  md: "calc(0.5rem - 2px)",
		  sm: "calc(0.5rem - 4px)",
		},
	  },
	},
	plugins: [require("tailwindcss-animate")],
  };
  