module.exports = () => {
  // Default to dev presets
  const dbConfig = {
    url: process.env.MONGODB_URI || 'mongodb://localhost:27017/test',
    opts: {
      autoReconnect: true
    }
  };

  switch (process.env.NODE_ENV) {
    case 'production':
      break;
    case 'stage':
      break;
    case 'test':
      Object.assign(dbConfig, { url: process.env.MONGODB_URI || 'mongodb://localhost:27017/test' });
      break;
    case 'dev':
    default:
      break;
  }

  return dbConfig;
};
