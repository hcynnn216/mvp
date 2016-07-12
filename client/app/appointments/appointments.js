angular.module('scheduler.appointments', [])

.controller('AppointmentController', function ($scope, Appointments) {

  $scope.appointments = {
    time1: [{
      name: 'hong',
      phone: '415-823-2069',
      email: 'yuhongchao@gmail.com', 
      day: 'sunday'
    }]
  };

  var initializeAppointments = function () {
    Appointments.getAll()
      .then(function (appointments) {
        $scope.appointments = appointments;
        console.log(appointments);
      })
      .catch(function (error) {
        console.error(error);
      });
  };

  //initializeAppointments();

  $scope.makeAppointments = function () {
    $scope.loading = true;
    // var appts = $scope.appointments;
    // for (time in appts) {
    //   for (var i = 0; i < appts[time].length; i++) {
    //     $scope.appointments
    //   }
    // }
    Appointments.addAppointments($scope.appointments)
      .then(function () {
        $scope.loading = false;
        //$location.path('/');
      })
      .catch(function (error) {
        console.log(error);
      });
  };

  $scope.makeAppointments();
  
});
