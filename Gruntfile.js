module.exports = function(grunt) {
	grunt.initConfig({
		pkg: grunt.file.readJSON('package.json'),
		compass: {
			dist: {
				options: {
					sassDir : 'sass',
					cssDir : 'css',
					outputStyle : 'compact',
					environment : 'production',
					noLineComments : true
				}
			}
		},
		cssmin: {
			minify: {
				expand: true,
				cwd: 'css',
				src: ['*.css', '!*.min.css', '!_*.css'],
				dest: 'css',
				ext: '.min.css'
			}
		},
		watch: {
			files: ['sass/*.sass'],
			tasks: ['compass']
		}
	});
	grunt.loadNpmTasks('grunt-contrib-compass');
	grunt.loadNpmTasks('grunt-contrib-cssmin');
	grunt.loadNpmTasks('grunt-contrib-watch');

	grunt.registerTask('default', ['compass', 'watch']);
};