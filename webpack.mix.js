// webpack.mix.js

let mix = require('laravel-mix');

mix
	.js('src/js/app.js', '')
	.sass('src/scss/style.scss', '')
	.options({
		processCssUrls: false,
		postCss: [require('tailwindcss')],
	})
	.browserSync({
		proxy: process.env.MIX_APP_HOST,
		host: process.env.MIX_APP_HOST,
		open: 'external',
		files: ['./**/*.php', './**/*.css', './**/*.js'],
	});
	
