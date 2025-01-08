module.exports = {
  apps: [ {
    name: 'food-explorer',
    script: './src/server.js',
    env: {
      NODE_ENV: 'development',
    },
    env_production: {
      NODE_ENV: 'production',
    },
  } ],
};
