import { Redis } from "@upstash/redis";

const redis = Redis.fromEnv();

const KEY_PREFIX = "celodaily:donation:";

