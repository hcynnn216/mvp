var Q = require('q');
var Appointment = require('./appointmentModel.js');

// Promisify a few mongoose methods with the `q` promise library
var findAppointment = Q.nbind(Appointment.findOne, Appointment);
var createAppointment = Q.nbind(Appointment.create, Appointment);
var findAllAppointments = Q.nbind(Appointment.find, Appointment);

module.exports = {

  allAppointments: function (req, res, next) {
    findAllAppointments({})
      .then(function (Appointments) {
        res.json(Appointments);
      })
      .fail(function (error) {
        next(error);
      });
  },

  updateAppointments: function (req, res, next) {
    var appointments = req.body;
    console.log('appointmentController.js line 24: ', appointments);

    createAppointment(appointments)
      .then(function (createdAppointment) {
        if (createdAppointment) {
          console.log('appointmentController.js line 28: ', createdAppointment);
          res.json(createdAppointment);
        }
      })
      .fail(function (error) {
        next(error);
      });

  }

};
