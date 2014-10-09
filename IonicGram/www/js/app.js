// Ionic Starter App

// angular.module is a global place for creating, registering and retrieving Angular modules
// 'starter' is the name of this angular module example (also set in a <body> attribute in index.html)
// the 2nd parameter is an array of 'requires'
// 'starter.services' is found in services.js
// 'starter.controllers' is found in controllers.js
angular.module('ionicgram', [ 'ionic', 'ionicgram.controllers', 'ionicgram.services' ])

.run(function($ionicPlatform) {
	$ionicPlatform.ready(function() {
		// Hide the accessory bar by default (remove this to show the accessory
		// bar above the keyboard
		// for form inputs)
		if (window.cordova && window.cordova.plugins.Keyboard) {
			cordova.plugins.Keyboard.hideKeyboardAccessoryBar(true);
		}
		if (window.StatusBar) {
			// org.apache.cordova.statusbar required
			StatusBar.styleDefault();
		}
	});
})

.config(function($stateProvider, $urlRouterProvider) {

	// Ionic uses AngularUI Router which uses the concept of states
	// Learn more here: https://github.com/angular-ui/ui-router
	// Set up the various states which the app can be in.
	// Each state's controller can be found in controllers.js
	$stateProvider
	
	.state('app', {
		url : '/app',
		abstract : true,
		templateUrl : 'templates/app.html',
		controller : 'AppController'
	})
	
	// setup an abstract state for the tabs directive
	.state('app.profile', {
		url : '/profile',
		abstract : true,
		views : {
			'main-view' : {
				templateUrl : 'templates/profile-tabs.html'
			}
		}
	})

	// Each tab has its own nav history stack:
	.state('app.profile.home', {
		url : '/home',
		views : {
			'profile-home' : {
				templateUrl : 'templates/profile-tab-home.html',
				controller : 'ProfileHomeController'
			}
		}
	})

	.state('app.profile.posts', {
		url : '/posts',
		views : {
			'profile-posts' : {
				templateUrl : 'templates/profile-tab-posts.html',
				controller : 'ProfilePostsController'
			}
		}
	})
	
	.state('app.profile.account', {
		url : '/account',
		views : {
			'profile-account' : {
				templateUrl : 'templates/profile-tab-account.html',
				controller : 'ProfileAccountController'
			}
		}
	})

	.state('app.feed', {
		url : '/feed',
		views : {
			'main-view' : {
				templateUrl : 'templates/feed.html',
				controller: 'FeedController'
			}
		}
	})
	
	.state('app.item', {
		url : '/item/:itemId',
		views : {
			'main-view' : {
				templateUrl : 'templates/item.html',
				controller: 'ItemController'
			}
		}
	})

	.state('app.post', {
		url : '/post',
		views : {
			'main-view' : {
				templateUrl : 'templates/post.html',
				controller: 'PostController'
			}
		}
	})
	
	.state('app.activity', {
		url : '/activity',
		views : {
			'main-view' : {
				templateUrl : 'templates/activity.html',
				controller: 'ActivityController'
			}
		}
	});

	// if none of the above states are matched, use this as the fallback
	$urlRouterProvider.otherwise('/app/feed');

});
