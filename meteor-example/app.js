if (Meteor.isClient) {
  angular.module('TestApp', ['angular-meteor', 'ngLetterAvatar']);
 
  angular.module('TestApp').controller('PeopleCtrl', ['$scope', function ($scope) {
    $scope.people = [
      {
        firstname: 'John',
        lastname: 'Doe',
        avatar: 'http://www.fillmurray.com/101/101'
      },
      {
        firstname: 'Avi',
        lastname: 'Roe'
      },
      {
        firstname: 'Dan',
        lastname: 'Roe',
        avatar: 'http://www.fillmurray.com/99/100'
      },
      {
        firstname: 'Bob',
        lastname: 'Doe'
      }
    ];
  }]);
}