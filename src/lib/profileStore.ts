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


export async function saveProfile(
  address: string,
  data: { name: string | null; avatar: string | null;  }
) {
  await redis.hset(KEY_PREFIX + address.toLowerCase(), {
    name: data.name,
    avatar: data.avatar,
    })
  };





