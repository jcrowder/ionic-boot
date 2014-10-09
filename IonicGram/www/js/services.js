angular.module('ionicgram.services', [])

.factory('Instagram', function($http, $rootScope, $window) {
	
	var accessCode = null;
	
	var loggedIn = false;
	
	function isLoggedIn() {
		return loggedIn;
	};
	
	function login() {
		var clientId = 'fbe9f4b692b94c2b912728aea3f97fee';
		var redirectUri = 'local://blank';
		var url = 'https://instagram.com/oauth/authorize/?client_id=' +  clientId + '&redirect_uri=' + redirectUri + '&response_type=token';
		
		var browser = $window.open(url, '_blank', 'location=no');
		browser.addEventListener('loadstart', function (event) {
			console.log(event.url);
			if (event.url.lastIndexOf(redirectUri) === 0) {
				browser.close();
				accessToken = event.url.split('=')[1];
				loggedIn = true;
				console.log(accessToken);
				$rootScope.$broadcast('login', {});
			}
		});
	};
	
	function getSelf() {
		return $http.get('https://api.instagram.com/v1/users/self?access_token=' + accessToken);
	};
	
	function getFeed() {
		return $http.get('https://api.instagram.com/v1/users/self/feed?access_token=' + accessToken);
	};
	
	function getMedia(itemId) {
		return $http.get('https://api.instagram.com/v1/media/' + itemId + '?access_token=' + accessToken);
	};
	
	return {
		login: login,
		isLoggedIn: isLoggedIn,
		getSelf: getSelf,
		getFeed: getFeed,
		getMedia: getMedia
	}
	
});
