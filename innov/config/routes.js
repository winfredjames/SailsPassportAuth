module.exports.routes = {
  '/': {
    controller: 'home'
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