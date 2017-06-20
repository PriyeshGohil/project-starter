module.exports = function(grunt) {
 require('jit-grunt')(grunt);

 grunt.initConfig({
    pkg: grunt.file.readJSON('package.json'),

    sass: {
      target: {
        files: [{
          expand: true,
          cwd: 'src/css',
          src: ['main.scss'],
          dest: './build/css',
          ext: '.css'
        }],
        options: {
          style: 'compressed'
        }
      },
    },
    
    browserSync: {
      bsFiles: {src: ['build/css/main.css', 'index.html']},
      options: {watchTask: true, server: './'}
    },

    watch: {
      sass: {
        files: ['src/css/**/*.scss', '!build/*'],
        tasks: ['sass:target']
      },
    },

    copy: {
      main: {
        files: [ {expand: true, flatten: true, src: ['src/fonts/*'], dest: 'build/fonts'} ]
      }
    }
  });
  grunt.registerTask('default', ['browserSync','watch']);
};