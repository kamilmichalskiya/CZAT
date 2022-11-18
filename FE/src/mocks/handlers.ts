import { rest } from 'msw';

export const handlers = [
  rest.post('http://localhost/api/login', (req, res, ctx) => {
    return res(ctx.status(200), ctx.delay(500));
  }),
  // rest.post('http://localhost:3000/api/users/register', (req, res, ctx) => {
  //   return res(ctx.status(301), ctx.delay(500));
  // }),
];
