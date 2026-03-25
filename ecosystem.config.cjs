module.exports = {
  apps: [
    {
      name: "trinity-api",
      script: "artifacts/api-server/dist/index.cjs",
      interpreter: "node",
      watch: false,
      instances: 1,
      autorestart: true,
      env: {
        NODE_ENV: "production",
        PORT: "3001",
        GMAIL_USER: "Info.trinitypackaging@gmail.com",
        GMAIL_APP_PASSWORD: "abum ujty sfha aymj",
      },
    },
  ],
};
