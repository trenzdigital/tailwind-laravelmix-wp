const colors = require('tailwindcss/colors');
module.exports = {
	purge: {
		mode: 'layers',
		content: ['./*.php', './inc/**/*.php', './template-parts/**/*.php', './assets/**/*.js'],
	},
	darkMode: false, // or 'media' or 'class'
	theme: {
		extend: {
			colors: {
				teal: colors.teal,
			},
		},
	},
	variants: {
		extend: {},
	},
	plugins: [],
};
