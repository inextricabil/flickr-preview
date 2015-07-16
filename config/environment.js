/* jshint node: true */

module.exports = function(environment) {
  var ENV = {
    modulePrefix: 'flickr-viewer',
    environment: environment,
    baseURL: '/',
    locationType: 'auto',
    EmberENV: {
      FEATURES: {
        // Here you can enable experimental features on an ember canary build
        // e.g. 'with-controller': true
      }
    },

    APP: {
      // Here you can pass flags/options to your application instance
      // when it is created
    }
  };

  if (environment === 'development') {
    ENV.contentSecurityPolicy = {
    'default-src': "'none'",
    'script-src': "'self' http://api.flickr.com http://localhost:4200",
    'font-src': "'self'",
    'connect-src': "'self'",
    'img-src': "'self' http://farm1.staticflickr.com http://farm2.staticflickr.com http://farm3.staticflickr.com http://farm4.staticflickr.com http://farm5.staticflickr.com http://farm6.staticflickr.com http://farm7.staticflickr.com http://farm8.staticflickr.com http://farm9.staticflickr.com",
    'style-src': "'self'",
    'media-src': "'self'"
  };

  }

  if (environment === 'test') {
    // Testem prefers this...
    ENV.baseURL = '/';
    ENV.locationType = 'none';

    // keep test console output quieter
    ENV.APP.LOG_ACTIVE_GENERATION = false;
    ENV.APP.LOG_VIEW_LOOKUPS = false;

    ENV.APP.rootElement = '#ember-testing';
  }

  if (environment === 'production') {

  }

  return ENV;
};
