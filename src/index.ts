import { Elysia } from 'elysia';
import './configs/database/db.config';

const PORT = process.env.PORT || 3000;
export const app = new Elysia();

app
  .get('/', () => 'Hello Bun.js!')
  .listen(PORT, () => {
    console.log(`🦊 Elysia is running at ${app.server?.hostname}:${PORT}`);
  });
