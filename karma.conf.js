module.exports = function(config) {
  config.set({
    basePath: '.',
    browser: ['PhantomJS'],
    frameworks: ['jasmine', 'requirejs'],
    files: ['**/*.spec.js'],
    plugins: ['karma-requirejs',
              'karma-jasmine',
              'karma-phantomjs-launcher'],
    singleRun: true
  });
};