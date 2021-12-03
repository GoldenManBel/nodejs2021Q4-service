const { getUserAll, getUserId, addUser, updateUser, deleteUser } = require('./user.service');

const user = {
  type: 'object',
  properties: {
    id: { type: 'string' },
    name: { type: 'string' },
    login: { type: 'string' }
  }
};

const getUsersOpts = { 
  schema: {
    response: {
      200: {
        type: 'array',
        items: user
      }
    }
  },
  handler: getUserAll
};

const getUserOpts = {
  schema: {
    response: {
      200: user 
    }
  },
  handler: getUserId
};

const addUserOpts = {
  schema: {
    body: {
      type: 'object',
      // required: ['name', 'login', 'password'],
      properties: {
        name: { type: 'string' },
        login: { type: 'string' },
        password: { type: 'string' },
      },
    },
    response: {
      201: user 
    }
  },
  handler: addUser
};

const deleteUserOpts = {
  schema: {
    response: {
      200: {
        type: 'object',
        properties: {
          message: { type: 'string' },
        },
      },
    },
  },
  handler: deleteUser,
}

const updateUserOpts = {
  schema: {
    response: {
      200: user,
    },
  },
  handler: updateUser,
}


const userRoutes = (app, options, done) => {
  app.get('/', async (request, reply) => reply.send({ Message: 'Service: is running!' }));

  app.get('/users', getUsersOpts);

  app.get('/users/:userId', getUserOpts);

  app.post('/users', addUserOpts);
  
  app.put('/users/:userId', updateUserOpts);  

  app.delete('/users/:userId', deleteUserOpts);

  done();
};

module.exports = userRoutes;
