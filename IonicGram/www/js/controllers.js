angular.module('ionicgram.controllers', [])

.controller('AppController', function($scope, $rootScope, $ionicModal, $timeout, $ionicActionSheet, Instagram) {
	
	$scope.login = function() {
		Instagram.login();
	};
	
})

.controller('FeedController', function($scope, $rootScope, Instagram) {
	
	$scope.igFeed = {};
	
	$scope.loadFeedData = function() {
		Instagram.getFeed().success(function(data) {
			$scope.igFeed = data;
		});
	};
	
	if (Instagram.isLoggedIn()) {
		$scope.loadFeedData();
	};
	
	$rootScope.$on('login', function(event, data) {
		$scope.loadFeedData();
	});
	
})

.controller('ItemController', function($scope, $rootScope, $stateParams, Instagram) {
	$scope.igItem = {};
	$scope.item = {};
	
	console.log("item id: " + $stateParams.itemId);
	
	$scope.loadItemData = function() {
		Instagram.getMedia($stateParams.itemId).success(function(data) {
			$scope.igItem = data;
			$scope.item = data.data;
		});
	};
	
	$scope.loadItemData();
	
})

.controller('ProfileHomeController', function($scope, $rootScope, Instagram) {
	
	$scope.instagramProfileData = {};
	
	$scope.loadProfileData = function() {
		Instagram.getSelf().success(function(data) {
			$scope.instagramProfileData = data.data;
		});
	};
	
	$scope.loadProfileData();
})

.controller('ProfilePostsController', function($scope) {
	
})

.controller('ProfileAccountController', function($scope, $ionicModal) {
	
	$ionicModal.fromTemplateUrl('templates/profile-edit.html', {
	    scope: $scope,
	    animation: 'slide-in-up'
	}).then(function(modal) {
		$scope.profileEditModal = modal;
	});
	
	$scope.showEditProfile = function() {
		$scope.profileEditModal.show();
	};
	
	$scope.cancelEdit = function() {
		$scope.profileEditModal.hide();
	};
	
	
})

.controller('PostController', function($scope) {
})

.controller('ActivityController', function($scope) {
	
	$scope.loadMore = function() {
		console.log('load more');
//		$scope.$broadcast('scroll.infiniteScrollComplete');
	};

})
;