(function() {
  angular.module('mainCtrl', []).controller('MainController', function($scope) {
    $scope.choices = [];
    $scope.choice = "";
    $scope.chosen = false;
    $scope.addChoice = function() {
      if ($scope.choice) {
        $('input[type=text]').focus();
        $scope.choices.push(this.choice);
        $scope.choice = "";
      }
    };
    $scope.removeChoice = function(index) {
      $scope.choices.splice(index, 1);
    };
    $scope.chooseRandomItem = function() {
      var chosen;
      $scope.chosen = true;
      chosen = $scope.choices[Math.floor(Math.random() * $scope.choices.length)].toString();
      $('.choice-name').filter(function(index) {
        return $(this).text().trim() !== chosen;
      }).parent('.choice').addClass('nope').velocity({
        scaleX: 0.7,
        scaleY: 0.7,
        opacity: 0.5
      }, {
        duration: 1300,
        easing: "spring"
      });
      $('.choice-name').filter(function(index) {
        return $(this).text().trim() === chosen;
      }).parent('.choice').addClass('woot');
    };
    return $scope.reset = function() {
      $('.choices ul li').removeClass('woot');
      $scope.choices = [];
      $scope.choice = "";
      $scope.chosen = false;
      $('input[type=text]').focus();
    };
  });

}).call(this);
