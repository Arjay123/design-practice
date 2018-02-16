module.exports = function(grunt) {

    grunt.initConfig({
      responsive_images: {
        dev: {
          options: {
            engine: 'im',
            sizes: [
                {
                width: 375,
                name: "small",
                quality: 40
                }
            ]
          },

          /*
          You don't need to change this part if you don't change
          the directory structure.
          */
          files: [{
            expand: true,
            src: ['*.png'],
            cwd: 'img_src/',
            dest: 'screenshots/'
          }]
        }
      },

      /* Clear out the images directory if it exists */
      clean: {
        dev: {
          src: ['screenshots'],
        },
      },

      /* Generate the images directory if it is missing */
      mkdir: {
        dev: {
          options: {
            create: ['screenshots']
          },
        },
      },

    });

    grunt.loadNpmTasks('grunt-responsive-images');
    grunt.loadNpmTasks('grunt-contrib-clean');
    grunt.loadNpmTasks('grunt-contrib-copy');
    grunt.loadNpmTasks('grunt-mkdir');
    grunt.registerTask('default', ['clean', 'mkdir', 'responsive_images']);

  };
