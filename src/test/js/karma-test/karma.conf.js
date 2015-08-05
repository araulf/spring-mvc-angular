module.exports = function(config) {
  config.set({
    basePath: '.',
    browsers: ['PhantomJS'],
    frameworks: ['jasmine'],
    files: ['*.spec.js'],
    plugins: ['karma-jasmine',
              'karma-phantomjs-launcher'],
    singleRun: true
  });
};