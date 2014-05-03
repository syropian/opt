angular.module('mainCtrl', []).controller('MainController', ($scope) ->
  $scope.choices = []
  $scope.choice = ""
  $scope.chosen = false
  
  $scope.addChoice = ->
    if $scope.choice
      $('input[type=text]').focus()
      $scope.choices.push(@choice)
      $scope.choice = ""
    return
  
  $scope.removeChoice = (index) ->
    $scope.choices.splice(index, 1)
    return  

  $scope.chooseRandomItem = ->
    $scope.chosen = true
    chosen = $scope.choices[Math.floor(Math.random()*$scope.choices.length)].toString()
    $('.choice-name').filter((index) ->
      return $(this).text().trim() isnt chosen
    ).parent('.choice').addClass('nope').velocity({
      scaleX: 0.7
      scaleY: 0.7
      opacity: 0.5
    }, {
      duration: 1300
      easing: "spring"
    })
    $('.choice-name').filter((index) -> return $(this).text().trim() is chosen).parent('.choice').addClass('woot')
    return
  $scope.reset = ->
    $('.choices ul li').removeClass('woot')
    $scope.choices = []
    $scope.choice = ""
    $scope.chosen = false
    $('input[type=text]').focus()
    return  
)  