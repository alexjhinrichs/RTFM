var app = angular.module('rtfmApp');

app.controller('threadCtrl', ['$scope', 'threadRef', '$firebaseObject', '$firebaseArray', 'commentsRef', function($scope, threadRef, $firebaseObject, $firebaseArray, commentsRef) {

	var thread = $firebaseObject(threadRef);

	thread.$bindTo($scope, 'thread');

	$scope.comments = $firebaseArray(commentsRef);

	$scope.createComment = function(username, text) {
		$scope.comments.$add({
			username: username,
			text: text
		});
	};
}]);