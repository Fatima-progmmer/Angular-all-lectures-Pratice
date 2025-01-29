var mymodule=angular.module("ht,[]");

mymodule.run(function ($rootScope) {
	$rootScope.name = "TanzeelaRootscope";
	$rootScope.maths = function (argument) {
		// body...
		return $rootScope.name + " Calling with function;
	}
}