const { webpackConfig } = require('direflow-scripts');

/**
 * Webpack configuration for Direflow Component
 * Additional webpack plugins / overrides can be provided here
 */
module.exports = (config, env) => ({
  ...webpackConfig(config, env),
  // Add your own webpack config here (optional)
  output: {
    ...webpackConfig(config, env).output,
    chunkFilename: "[name].js", // fixes 'Conflict: Multiple chunks emit assets to the same filename vendor.js (chunks 0 and 1)'
  }
});
