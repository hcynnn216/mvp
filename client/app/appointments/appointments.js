angular.module('scheduler.appointments', [])

.controller('AppointmentController', function ($scope, Appointments) {

  $scope.appointments = {
    time1: {
      sunday: {
        patientName: 'hong',
        phone: '415-823-2069',
        email: 'yuhongchao@gmail.com'
      },
      monday: {
        patientName: 'hong',
        phone: '415-823-2069',
        email: 'yuhongchao@gmail.com'
      },
      tuesday: {
        patientName: 'hong',
        phone: '415-823-2069',
        email: 'yuhongchao@gmail.com'
      },
      wednesday: {
        patientName: 'hong',
        phone: '415-823-2069',
        email: 'yuhongchao@gmail.com'
      },
      thursday: {
        patientName: 'hong',
        phone: '415-823-2069',
        email: 'yuhongchao@gmail.com'
      },
      friday: {
        patientName: 'hong',
        phone: '415-823-2069',
        email: 'yuhongchao@gmail.com'
      },
      saturday: {
        patientName: 'hong',
        phone: '415-823-2069',
        email: 'yuhongchao@gmail.com'
      }
    }
  };

  var initializeAppointments = function () {
    Appointments.getAll()
      .then(function (appointments) {
        $scope.appointments = appointments;
      })
      .catch(function (error) {
        console.error(error);
      });
  };

  initializeAppointments();

  $scope.makeAppointments = function (time, day) {
    $scope.loading = true;
    // $scope.appointments[time][day] = { 
    //   patientName: $scope.patientName,
    //   phone: $scope.phone,
    //   email: $scope.email
    // }
    console.log('appointments.js line 36: ', $scope.patientName);
    Appointments.addAppointments($scope.appointments)
      .then(function () {
        $scope.loading = false;
        //$location.path('/');
      })
      .catch(function (error) {
        console.log(error);
      });
  };

  //$scope.makeAppointments();
  
});
