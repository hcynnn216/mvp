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
        console.log(Appointments);
        res.json(Appointments);
      })
      .fail(function (error) {
        next(error);
      });
  },

  updateAppointments: function (req, res, next) {
    var appointments = req.body.appointments;
    console.log(appointments);

    createAppointment(appointments)
      .then(function (createdAppointment) {
        if (createdAppointment) {
          res.json(createdAppointment);
        }
      })
      .fail(function (error) {
        next(error);
      });
  },

  navToAppointment: function (req, res, next) {
    findAppointment({code: req.params.code})
      .then(function (Appointment) {
        if (!Appointment) {
          return next(new Error('Appointment not added yet'));
        }

        Appointment.visits++;
        Appointment.save(function (err, savedAppointment) {
          if (err) {
            next(err);
          } else {
            res.redirect(savedAppointment.url);
          }
        });
      })
      .fail(function (error) {
        next(error);
      });
  }

};
