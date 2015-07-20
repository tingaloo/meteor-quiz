module.exports = function(grunt) {

  grunt.loadNpmTasks('grunt-jslint'); // load the task

  grunt.initConfig({
    pkg: grunt.file.readJSON('package.json'),
    sass: {
      dist: {
        files: {
          '../client/stylesheets/css/custom.css' : '../client/stylesheets/scss/custom.scss'
        }
      }
    },
    watch: {
      css: {
        files: '../**/**/*.scss',
        tasks: ['sass']
      }
    }
  });


  grunt.loadNpmTasks('grunt-contrib-sass');
  grunt.loadNpmTasks('grunt-contrib-watch');
  grunt.registerTask('default',['watch']);
}
