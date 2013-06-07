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
		watch: {
			files: ['sass/*.sass'],
			tasks: ['compass']
		}
	});
	grunt.loadNpmTasks('grunt-contrib-compass');
	grunt.loadNpmTasks('grunt-contrib-watch');

	grunt.registerTask('default', ['compass', 'watch']);
};