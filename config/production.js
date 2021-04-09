module.exports = function() {
  let ENV = {
    OPTIONS: {
      fingerprint: {
        enabled: true,
        prepend: 'http://mydomain.com/'
      },
      hinting: true,
      minifyJS: { enabled: true },
      minifyCSS: { enabled: true },
      sourcemaps: {
        enabled: true,
        extensions: ['js']
      }
    },
  };

  return ENV;
};