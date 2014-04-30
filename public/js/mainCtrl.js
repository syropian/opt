(function() {
  angular.module('mainCtrl', []).controller('MainController', function($scope) {
    $scope.choices = [];
    $scope.choice = "";
    $scope.addChoice = function() {
      if ($scope.choice) {
        $scope.choices.push(this.choice);
        return $scope.choice = "";
      }
    };
    return $scope.chooseRandomItem = function() {
      var chosen;
      chosen = $scope.choices[Math.floor(Math.random() * $scope.choices.length)].toString();
      $('.choices ul li').filter(function(index) {
        return $(this).text().trim() !== chosen;
      }).velocity({
        scaleX: 0.7,
        scaleY: 0.7,
        opacity: 0.5
      }, {
        duration: 1300,
        easing: "spring"
      });
      $('.choices ul li').filter(function(index) {
        return $(this).text().trim() === chosen;
      }).addClass('woot');
    };
  });

}).call(this);
