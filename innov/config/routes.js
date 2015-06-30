module.exports.routes = {
  '/': {
    controller: 'home'
  },
 '/login' : {
    controller : 'auth',
    action     : 'index'
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