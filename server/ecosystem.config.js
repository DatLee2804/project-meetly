module.exports = {
  apps: [
    {
      name: "project-meetly",
      script: "npm",
      args: "run dev",
      env: {
        NODE_ENV: "development",
      },
    },
  ],
};
    