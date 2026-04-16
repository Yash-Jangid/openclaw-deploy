module.exports = {
  apps: [
    {
      name: "zydra-native",
      script: "./dist/index.js", // Adjust if your entry is openclaw.mjs or different
      args: "gateway",
      cwd: "/opt/openclaw",
      env_file: ".env", // Preferred: load secrets from .env
      env: {
        NODE_ENV: "production",
        OPENCLAW_HOME: "/data",
        OPENCLAW_NO_RESPAWN: "1",
        OPENAI_API_KEY: "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",
        OPENAI_BASE_URL: "https://integrate.api.nvidia.com/v1",
        NVIDIA_API_KEY: "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",
        NVIDIA_BASE_URL: "https://integrate.api.nvidia.com/v1",
      },
      autorestart: true,
      max_restarts: 10,
      restart_delay: 3000,
      max_memory_restart: "1G",
      error_file: "./logs/err.log",
      out_file: "./logs/out.log",
      merge_logs: true,
      log_date_format: "YYYY-MM-DD HH:mm:ss Z",
    },
  ],
};
