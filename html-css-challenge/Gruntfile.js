module.exports = function(grunt) {

	// Default task(s)
	grunt.registerTask('default', ['cleanup','htmlmin:dist','concat:css', 'concat:cssResponsive', 'cssmin', 'copy:css', 'copy:fancyboxImages', 'copy:fonts','concat:jsFancyBox', 'concat:jsOffCanvasMenu', 'copy:js', 'copy:contactForm', 'copy:favicons','copy:images','uglify']);

	// Load the plugin that provides the "uglify" task.
	grunt.loadNpmTasks('grunt-contrib-uglify');
	grunt.loadNpmTasks('grunt-contrib-concat');
	grunt.loadNpmTasks('grunt-contrib-cssmin');
	grunt.loadNpmTasks('grunt-contrib-csslint');
	grunt.loadNpmTasks('grunt-contrib-copy');
	grunt.loadNpmTasks('grunt-contrib-htmlmin');
	grunt.loadNpmTasks('grunt-contrib-clean');

	// Project Configuration
	grunt.initConfig({
		pkg: grunt.file.readJSON('package.json'),

		// Concats all CSS and JS files together
		'concat': {
			css: {
				src: [
					'src/css/bootstrap.css',
					'src/css/theme.css',
					'src/css/font-awesome.min.css',
					'src/css/animate.min.css'
				],
				dest: 'build/css/cmg.css'
			},
			cssResponsive: {
				src: [
					'src/css/bootstrap-grid.css'
				],
				dest: 'build/css/cmg-responsive.css'
			}
		},

		// Minifies the concatinated CSS file
		'cssmin': {
			core: {
				files: {
					'dist/css/cmg.min.css': [
					'build/css/cmg.css'
					]
				}
			},
			responsive: {
				files: {
					'dist/css/cmg-responsive.min.css': [
					'build/css/cmg-responsive.css'
					]
				}
			},
			style: {
				files: {
					'dist/css/cmg-style.min.css': [
					'src/css/style.css',
					'src/css/images.css'
					]
				}
			}
		},

		// Copies Files to Dist
		'copy': {
			css: {
				files: [
					{expand: false, src: ['src/css/style.css'], dest: 'dist/css/style.css', filter: 'isFile'},
					{expand: false, src: ['src/css/chrome.css'], dest: 'dist/css/chrome.css', filter: 'isFile'},
					{expand: false, src: ['src/css/fonts.css'], dest: 'dist/css/fonts.css', filter: 'isFile'}
				],
			},
			fonts: {
				files: [
					//Cicle Gordita
					{expand: false, src: ['src/fonts/Cicle_Gordita-webfont.eot'], dest: 'dist/fonts/Cicle_Gordita-webfont.eot'},
					{expand: false, src: ['src/fonts/Cicle_Gordita-webfont.svg'], dest: 'dist/fonts/Cicle_Gordita-webfont.svg'},
					{expand: false, src: ['src/fonts/Cicle_Gordita-webfont.ttf'], dest: 'dist/fonts/Cicle_Gordita-webfont.ttf'},
					{expand: false, src: ['src/fonts/Cicle_Gordita-webfont.woff'], dest: 'dist/fonts/Cicle_Gordita-webfont.woff'}
				],
			}
			favicons: {
				files: [
					{expand: false, src: ['src/favicon.ico'], dest: 'dist/favicon.ico'},
					{expand: false, src: ['src/plugins/fancybox/source/fancybox_loading@2x.gif'], dest: 'dist/images/loading.gif'}
				],
			}
		},

		// Check CSS
		'csslint': {
			all: [
				'src/css/*.css',
				'src/plugins/off-canvas-menu/css/*.css'
			],
			options: {
				dest: 'build/cmg-csslint.xml'
			}
		},

		// Minify HTML
		'htmlmin': {
			dist: {
				options: {
					removeComments: true,
					collapseWhitespace: true,
					maxLineLength: 500,
					minifyJS: true
				},
				files: [
					{
						expand: true,
						cwd: 'src/',
						src: ['**/*.html'],
						dest: 'dist/',
					},
				],
			},
		},

		// Clean
		'clean': {
			dist: ['dist']
		}
	});
};