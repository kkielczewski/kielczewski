
/**
 * getEnvironment - Returns the current environment, or development by default
 * @returns {String}
 */
/* eslint-disable */
export const getEnvironment = () => process.env.NODE_ENV ? process.env.NODE_ENV : 'development';
/* eslint-enable */

/**
 * getApiUrl  - Returns the URL for the api, given the current environment
 * @returns {String}
 */
export const getApiUrl = () => {
  switch (getEnvironment()) {
    case 'production':
      return 'https://kielczewski.herokuapp.com';
    case 'stage':
      return 'https://kielczewski.herokuapp.com';
    case 'test':
      return 'https://kielczewski.herokuapp.com';
    case 'development':
    default:
      return 'http://localhost:3000';
  }
};


/**
 * getAppUrl  - Returns the URL for the app, given the environment
 * @returns {String}
 */
export const getAppUrl = () => {
  switch (getEnvironment()) {
    case 'production':
      return 'https://kielczewski.herokuapp.com';
    case 'stage':
      return 'https://kielczewski.herokuapp.com';
    case 'test':
      return 'https://kielczewski.herokuapp.com';
    case 'development':
    default:
      return 'http://localhost:8080';
  }
};
