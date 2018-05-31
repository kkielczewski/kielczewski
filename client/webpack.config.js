const buildValidations = require('./build-utils/build-validations');

const webpackMerge = require('webpack-merge');

const addons = (addonsArg) => {
  const addon = [...[addonsArg]]
    .filter(Boolean); // If addons is undefined, filter it out

  /* eslint-disable */
  return addon.map(addonName =>
    require(`./build-utils/addons/webpack.${addonName}.js`)
  );
  /* eslint-enable */
};

module.exports = (env) => {
  if (!env) {
    throw new Error(buildValidations.ERR_NO_ENV_FLAG);
  }
  /* eslint-disable */
  const envConfig = require(`./build-utils/webpack.${env.env}.js`);
  /* eslint-enable */

  const mergedConfig = webpackMerge(
    envConfig,
    ...addons(env.addons)
  );

  return mergedConfig;
};
