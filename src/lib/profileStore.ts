import { Redis } from "@upstash/redis";

const redis = Redis.fromEnv();
const KEY_PREFIX = "celodaily:profile:";

export async function saveStats(
  address: string,
  data: { highestStreak: number }
) {
  await redis.hset(KEY_PREFIX + address.toLowerCase(), {
    highestStreak: String(data.highestStreak),
  });
}
