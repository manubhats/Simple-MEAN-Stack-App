var app=angular.module('myApp',['ngAnimate']);

//AngularJS controller
var rank = 0;
app.controller("AppCtrl1",function($scope,$http,$interval)
{
	var timer;
		
	$scope.update = function()
	{
			timer = $interval(function()
			{
				refreshMe();	
			},1000);
	};
	
	$scope.killtimer=function()
	{
        if(angular.isDefined(timer))
          {
            $interval.cancel(timer);
            timer=undefined;
          }
    };

	function refreshMe()
	{
		$http.get("/movieObject?rank="+rank).success(function(response)
		{
		 	$scope.mov=response;
		 	console.log(response);
		 	rank = response[0].fields.rank;
	 	});
	}
	
});

