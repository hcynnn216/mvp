var mongoose = require('mongoose');

var AppointmentSchema = new mongoose.Schema({
    
  time1: [{
    patientName: String,
    phone: String,
    email: String,
    day: String,
  }],
  time2: [{
    patientName: String,
    phone: String,
    email: String,
    day: String,
  }],
  time3: [{
    patientName: String,
    phone: String,
    email: String,
    day: String,
  }],
  time4: [{
    patientName: String,
    phone: String,
    email: String,
    day: String,
  }],
  time5: [{
    patientName: String,
    phone: String,
    email: String,
    day: String,
  }],
  time6: [{
    patientName: String,
    phone: String,
    email: String,
    day: String,
  }],
  time7: [{
    patientName: String,
    phone: String,
    email: String,
    day: String,
  }],
  time8: [{
    patientName: String,
    phone: String,
    email: String,
    day: String,
  }]
});


module.exports = mongoose.model('Appointment', AppointmentSchema);
