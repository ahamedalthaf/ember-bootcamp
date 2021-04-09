module.exports = function() {
  let ENV = {
    OPTIONS: {
      fingerprint: {
        enabled: false
      },
      hinting: false,
      minifyJS: { enabled: false },
      minifyCSS: { enabled: false },
      sourcemaps: {
        enabled: false,
        extensions: ['js']
      }
    },
  };

  return ENV;
};