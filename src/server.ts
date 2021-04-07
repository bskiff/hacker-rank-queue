import Koa from 'koa';
import Router from '@koa/router';

export async function startServer(): Promise<void> {
  const app = new Koa();

  const router = new Router();
  router.post('/interactions', () => {});

  app.use(router.routes());
}
