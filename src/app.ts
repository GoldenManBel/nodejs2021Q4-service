const { FastifyInstance } = require('fastify');
const app: typeof FastifyInstance = require('fastify')({ logger: false });
const fastifySwagger = require('fastify-swagger');
const path = require('path');
const userRouter = require('./resources/users/user.routers/user.router');
const boardRouter = require('./resources/boards/board.router');
const taskRouter = require('./resources/tasks/task.router');

app.register(fastifySwagger, {
  exposeRoute: true,
  routePrefix: '/doc',
  mode: 'static',
  specification: {
    path: path.join(__dirname, '../doc/api.yaml'),
  },
});

app.register(userRouter);
app.register(boardRouter);
app.register(taskRouter);

module.exports = app;