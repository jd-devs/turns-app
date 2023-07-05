/** @type {import('tailwindcss').Config} */
export default {
	darkMode: 'class',
	content: [
		'index.html',
		'./src/**/*.{html,js,jsx}',
		'node_modules/flowbite-react/**/*.{js,jsx,ts,tsx}',
	],
	theme: {
		extend: {},
	},
	plugins: [require('flowbite/plugin')],
};
