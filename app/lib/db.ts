import { Pool } from 'pg';
import { createClient } from 'redis';

export const clientRedis = createClient({
  socket: {
    reconnectStrategy: (retries) => {
      if (retries < 10) {
        return Math.min(retries * 50, 500);
      } else {
        return new Error('Max retries reached');
      }
    }
  }
});

// eslint-disable-next-line no-console
clientRedis.on('error', (err) => console.log('Redis Client Error:', err));

(async function initializeRedis() {
  if (!clientRedis.isOpen) {
    await clientRedis.connect();
  }
})();

export const db = new Pool({
  user: process.env.DB_USER,
  host: process.env.DB_HOST,
  database: process.env.DB_NAME,
  password: process.env.DB_PASSWORD,
  port: Number(process.env.DB_PORT),
});
