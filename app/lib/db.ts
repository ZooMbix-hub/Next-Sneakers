import { Pool } from 'pg';
import { createClient } from 'redis';

const client = await createClient();
// eslint-disable-next-line no-console
client.on('error', err => console.log(err));

if (!client.isOpen) {
  client.connect();
}

export const add = (key: string, value: string) => client.set(key, value);

export const get = (key: string) => client.get(key);

export const db = new Pool({
  user: process.env.DB_USER,
  host: process.env.DB_HOST,
  database: process.env.DB_NAME,
  password: process.env.DB_PASSWORD,
  port: Number(process.env.DB_PORT),
});