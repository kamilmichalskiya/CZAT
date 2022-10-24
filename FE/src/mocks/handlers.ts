import { rest } from 'msw';

export const handlers = [
  rest.post('http://localhost:3000/api/login', (req, res, ctx) => {
    return res(ctx.status(301), ctx.delay(500));
  }),
  rest.post('http://localhost:3000/api/register', (req, res, ctx) => {
    return res(ctx.status(301), ctx.delay(500));
  }),
];
