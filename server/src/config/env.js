const required = ["PORT", "CLIENT_URL", "MONGO_URI"];

for (const key of required) {
  if (!process.env[key]) {
    console.error(`❌ Missing environment variable: ${key}`);
    process.exit(1);
  }
}

export const env = Object.freeze({
  nodeEnv: process.env.NODE_ENV ?? "development",
  isProd: process.env.NODE_ENV === "production",
  port: Number(process.env.PORT),
  clientUrl: process.env.CLIENT_URL,
  mongoUri: process.env.MONGO_URI,
});