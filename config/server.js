module.exports = () => {
  // Default to dev presets
  const serverConfig = {
    port: process.env.PORT || 8080
  };

  switch (process.env.NODE_ENV) {
    case 'production':
      break;
    case 'stage':
      break;
    case 'test':
      Object.assign(serverConfig, { port: 3001 });
      break;
    case 'dev':
    default:
      break;
  }

  return serverConfig;
};
