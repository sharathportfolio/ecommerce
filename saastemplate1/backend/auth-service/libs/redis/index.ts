import Redis from "ioredis";
import dotenv from "dotenv";

dotenv.config();

const redis = new Redis({
  host: process.env.REDIS_HOST || "beloved-seagull-30923.upstash.io", // no https:// or rediss://
  port: Number(process.env.REDIS_PORT) || 6379,                       // specify port
  password: process.env.REDIS_PASSWORD,                               // your Upstash password
  tls: {},                                                             // enable TLS
});

redis.on("error", (err) => {
  console.error("Redis error:", err);
});

redis.on("connect", () => {
  console.log("Connected to Upstash Redis ✅");
});

export default redis;
