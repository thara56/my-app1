angular.module('starter.controllers', [])

.controller('DashCtrl', function($scope, $interval) {
   var _i, _results;
  $scope.date = new Date();
  $scope.hourMarkers = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11];
  $scope.minuteMarkers = (function() {
    _results = [];
    for (_i = 0; _i <= 59; _i++){ _results.push(_i); }
    return _results;
  }).apply(this);
  $scope.getDegreesForUnit = function(unit, totalUnits) {
    return (360 / totalUnits) * unit;
  };
  $scope.getHours = function() {
    return $scope.getDegreesForUnit($scope.date.getHours() + ($scope.date.getMinutes() / 60), 12);
  };
  $scope.getMinutes = function() {
    return $scope.getDegreesForUnit($scope.date.getMinutes() + ($scope.date.getSeconds() / 60), 60);
  };
  $scope.getSeconds = function() {
    return $scope.getDegreesForUnit($scope.date.getSeconds() + ($scope.date.getMilliseconds() / 1000), 60);
  };
  return $interval(function() {
    return $scope.date = new Date();
  }, 1000 / 30);
})

.controller('ChatsCtrl', function($scope, Chats) {
  $scope.chats = Chats.all();
  $scope.remove = function(chat) {
    Chats.remove(chat);
  }
})

.controller('ChatDetailCtrl', function($scope, $stateParams, Chats) {
  $scope.chat = Chats.get($stateParams.chatId);
})

.controller('FriendsCtrl', function($scope, Friends) {
  $scope.friends = Friends.all();
})

.controller('FriendDetailCtrl', function($scope, $stateParams, Friends) {
  $scope.friend = Friends.get($stateParams.friendId);
})

.controller('AccountCtrl', function($scope) {
  $scope.settings = {
    enableFriends: true
  };
});
