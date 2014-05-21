'use strict';

  app.controller('MainCtrl', function ($scope, $http) {
    // $scope.awesomeThings = [
    //   'HTML5 Boilerplate',
    //   'AngularJS',
    //   'Karma'
    // ];

    // function init() {
    //     FB.init({
    //       appId      : '243327883488',
    //       xfbml      : true,
    //       version    : 'v2.0'
    //     });
    //     FB.getLoginStatus(function(response) {
    //       if (response.status === 'connected') {
    //         console.log('Logged in.');
    //       }
    //       else {
    //         FB.login();
    //       }
    //     });
    // }

    // init();
    
    
    $scope.baseUrl = 'http://www.hmhco.com/';

    var pageIdx = $scope.pageIndex;

    if (pageIdx === undefined) {
    	pageIdx = 1;
    	$scope.pageIndex = 1;
    }

	   $http.get('data/math.' + pageIdx + '.json').success(function(data) {
    	$scope.educators = data;
  	});

     $scope.authenticated = true;

    $scope.paginate = function(pageIdx) {
        console.log('Page index request for ', pageIdx);
    };


  });

/**
 * Directive to add 
 * @param  {[type]} $document
 * @return {[type]}
 */
  app.directive('hmhCwHeader', ['$document', function($document){
      // Runs during compile
      return {
          // name: '',
          // priority: 1,
          // terminal: true,
          // scope: {}, // {} = isolate, true = child, false/undefined = no change
          // controller: function($scope, $element, $attrs, $transclude) {},
          // require: 'ngModel', // Array = multiple requires, ? = optional, ^ = check parent elements
          restrict: 'A', // E = Element, A = Attribute, C = Class, M = Comment
          // template: '',
          templateUrl: '/views/common/header.html',
          // replace: true,
          // transclude: true,
          // compile: function(tElement, tAttrs, function transclude(function(scope, cloneLinkingFn){ return function linking(scope, elm, attrs){}})),
          // link: function($scope, iElm, iAttrs, controller) {
              
          // }
      };
  }]);
