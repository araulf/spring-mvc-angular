module.exports = function(config) {
  config.set({
    basePath: '.',
    browsers: ['PhantomJS'],
    frameworks: ['jasmine', 'browserify'],
    files: ['*.spec.js'],
    plugins: ['karma-browserify',
              'karma-jasmine',
              'karma-phantomjs-launcher'],
    singleRun: true
  });
};