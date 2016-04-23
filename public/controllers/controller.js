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
			var url = response[0].fields.image_url;
			var res = url.split(":");
			var url1 = 'https:'+res[1];

		 	$scope.mov=response;
		 	$scope.url=url1;

		 	console.log(response);
		 	console.log(url1);
		 	rank = response[0].fields.rank;
	 	});
	}
	
});