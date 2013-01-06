module.exports = function(grunt) {

  // Project configuration.
  grunt.initConfig({
    meta: {
      banner: '#version <%= grunt.template.today() %>'
    },
    min: {
      dist: {
        src: ['src/js/tile-stitcher.js'],
        dest: 'dist/tile-stitcher.min.js'
      }
    },
    lint: {
      files: ['src/js/tile-stitcher.js']
    },
    watch: {
      files: ['src/js/tile-stitcher.js'],
      tasks: 'default'
    },
    jshint: {
      options: {
        "regexdash": true,
        "browser": true,
        "wsh": true,
        "trailing": true,
        "sub": true,
        "curly": true,
        "eqeqeq": true
      }
    },
    uglify: {}
  });

  // Default task.
  grunt.registerTask('default', 'lint min');

};