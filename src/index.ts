import cors from '@elysiajs/cors';
import { Elysia } from 'elysia';
import './configs/database/db.config';
import { docsSetup } from './configs/docs/docs.config';
import { todoController } from './controllers/todo.controller';

const PORT = process.env.PORT || 3000;
export const app = new Elysia();

docsSetup(app);

app
  .get('/', () => 'Hello Bun.js!')
  .use(cors())
  .use(todoController)
  .listen(PORT, () => {
    console.log(`🦊 Elysia is running at ${app.server?.hostname}:${PORT}`);
  });
