var appointmentController = require('../appointments/appointmentController.js');
var userController = require('../users/userController.js');
var helpers = require('./helpers.js'); // our custom middleware

module.exports = function (app, express) {
  //app.get('/:code', appointmentController.navToAppointment);

  app.post('/api/users/signin', userController.signin);
  app.post('/api/users/signup', userController.signup);
  app.get('/api/users/signedin', userController.checkAuth);

  // authentication middleware used to decode token and made available on the request
  // app.use('/api/appointments', helpers.decode);
  app.get('/api/appointments', appointmentController.allAppointments);
  app.post('/api/appointments', appointmentController.updateAppointments);

  // If a request is sent somewhere other than the routes above,
  // send it through our custom error handler
  app.use(helpers.errorLogger);
  app.use(helpers.errorHandler);
};

