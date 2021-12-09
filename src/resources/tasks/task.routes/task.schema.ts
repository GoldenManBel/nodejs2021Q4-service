const taskHandlerRouters = require('./task.handler.routers');

const task = {
  type: 'object',
  required: ['title', 'order', 'description', 'userId', 'boardId'],
  properties: {
    id: { type: 'string' },
    title: { type: 'string' },
    order: { type: 'number' },
    description: { type: 'string' },
    userId: { type: ['string', 'null'] },
    boardId: { type: ['string', 'null'] },
    columnId: { type: ['string', 'null'] },
  },
};

const getTasksOpts = {
  schema: {
    response: {
      200: {
        type: 'array',
        items: task,
      },
    },
  },
  handler: taskHandlerRouters.getTasksAll,
};

const getTaskOpts = {
  schema: {
    response: {
      200: task,
    },
  },
  handler: taskHandlerRouters.getTaskId,
};

const addTaskOpts = {
  schema: {
    body: task,
    response: {
      201: task,
    },
  },
  handler: taskHandlerRouters.addTask,
};

const deleteTaskOpts = {
  schema: {
    response: {
      204: {
        type: 'object',
        properties: {
          message: { type: 'string' },
        },
      },
    },
  },
  handler: taskHandlerRouters.deleteTask,
};

const updateTaskOpts = {
  schema: {
    body: task,
    response: {
      200: task,
    },
  },
  handler: taskHandlerRouters.updateTask,
};

module.exports = {
  getTasksOpts,
  getTaskOpts,
  addTaskOpts,
  deleteTaskOpts,
  updateTaskOpts,
};
