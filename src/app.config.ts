import { config } from 'dotenv';

config();
const env = process.env;

export const AppConfig = {
    port: Number(env.PORT || 3000),
    proxyEnabled: env.PROXY_ENABLED === 'true',
    frontEndUrl: env.FRONTEND_URL,
    redis: {
        enabled: env.REDIS_ENABLED === 'true',
        host: env.REDIS_HOST,
        port: Number(env.REDIS_PORT),
    },
    postgres: {
        host: env.PG_HOST,
        port: Number(env.PG_PORT || 5432),
        user: env.PG_USER,
        password: env.PG_PASSWORD,
        db: env.PG_DB
    }
};
