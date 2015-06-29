module.exports.routes = {
  '/': {
    view: 'homepage'
  },

  'get /login': {
       view: 'login'
  },

  'get /signup': {
       view: 'signup'
  },

  'post /login': 'AuthController.login',

  '/logout': 'AuthController.logout'
};