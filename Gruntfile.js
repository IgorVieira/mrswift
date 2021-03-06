module.exports = function(grunt) {
  grunt.initConfig({
    copy: {
      project: {
        expand: true,
        cwd: '.',
        src: ['**', '!Gruntfile.js', '!package.json',
                   '!public/bower.json'],
        dest: 'dist'
      }
    },

    clean: {
      dist: {
        src: 'dist'
      }
    },

    usemin : {
      html: 'dist/app/views/**/*.jade'
    },

    useminPrepare: {
      options: {
        root: 'dist/public',
        dest: 'dist/public'
      },
      html: 'dist/app/views/**/*.jade'
    },

    ngAnnotate: {
        controllers: {
          files: [
              {
                expand: true,
                src: ['dist/public/js/controllers/*.js']
              }
            ]
        },
        services: {
           files: [
               {
                 expand: true,
                 src: ['dist/public/js/services/*.js']
               },
           ],
       },
        main: {
            expand: true,
            src: ['dist/public/js/main.js']
        }


    }

  });


  grunt.registerTask('default', ['dist', 'minifica']);
    grunt.registerTask('dist', ['clean', 'copy']);
    grunt.registerTask('minifica', ['useminPrepare', 'ngAnnotate', 'concat', 'uglify', 'cssmin', 'usemin']);

    grunt.loadNpmTasks('grunt-contrib-copy');
    grunt.loadNpmTasks('grunt-contrib-clean');
    grunt.loadNpmTasks('grunt-contrib-concat');
    grunt.loadNpmTasks('grunt-contrib-uglify');
    grunt.loadNpmTasks('grunt-contrib-cssmin');
    grunt.loadNpmTasks('grunt-usemin');
    grunt.loadNpmTasks('grunt-ng-annotate');
  };
