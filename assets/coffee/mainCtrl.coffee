angular.module('mainCtrl', []).controller('MainController', ($scope) ->
  $scope.choices = []
  $scope.choice = ""
  
  $scope.addChoice = ->
    if $scope.choice
      $scope.choices.push(@choice)
      $scope.choice = ""

  $scope.chooseRandomItem = ->
    chosen = $scope.choices[Math.floor(Math.random()*$scope.choices.length)].toString()
    $('.choices ul li').filter((index) ->
      return $(this).text().trim() isnt chosen
    ).velocity({
      scaleX: 0.7
      scaleY: 0.7
      opacity: 0.5
    }, {
      duration: 1300
      easing: "spring"
    })
    $('.choices ul li').filter((index) -> return $(this).text().trim() is chosen).addClass('woot')
    return
)  