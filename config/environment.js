'use strict';

const deepAssign = require('deepmerge');

module.exports = function(environment) {
  let ENV = {
    modulePrefix: 'bootcamp-app',
    environment,
    rootURL: '/',
    locationType: 'auto',
    fingerprint: {
      enabled: false
    },
    EmberENV: {
      FEATURES: {
        // Here you can enable experimental features on an ember canary build
        // e.g. 'with-controller': true
      },
      EXTEND_PROTOTYPES: {
        // Prevent Ember Data from overriding Date.parse.
        Date: false
      }
    },

    APP: {
      // Here you can pass flags/options to your application instance
      // when it is created
    }
  };
  // // overwriting the config based on environment
  // if (environment) {
  //   let _envConfig = require(`./${ENV.environment}.js`);
  //   ENV = deepAssign(ENV, _envConfig());
  //   console.log(ENV);
  // }

  return ENV;
};
